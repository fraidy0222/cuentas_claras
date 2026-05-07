import axios from "axios";
import router from "@/router/router";

// ─── Cliente base ─────────────────────────────────────────────────────────────

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8000",
  withCredentials: true,  // Necesario para enviar cookies de sesión
  withXSRFToken: true,    // Axios gestiona XSRF automáticamente
});

// ─── Interceptor de respuestas ────────────────────────────────────────────────

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 419 CSRF token mismatch → refrescar token y reintentar UNA vez
    if (error.response?.status === 419 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await apiClient.get("/sanctum/csrf-cookie");
        return apiClient(originalRequest);
      } catch (csrfError) {
        return Promise.reject(csrfError);
      }
    }

    // 401 No autenticado → limpiar estado local y redirigir a login
    if (error.response?.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("auth");

      if (!window.location.pathname.includes("/login")) {
        router.push({ name: "login" });
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
