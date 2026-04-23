import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000", // URL de tu API Laravel
  withCredentials: true,
  withXSRFToken: true,
});

// Interceptor para manejar errores
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 419) {
      console.log("CSRF token mismatch");
      // Podrías refrescar el token aquí
    }
    return Promise.reject(error);
  },
);

export default apiClient;
