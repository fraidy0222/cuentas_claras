import apiClient from "@/api/client";
import router from "@/router/router";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  [key: string]: unknown;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthState {
  isAuth: boolean;
  isLoadingAuth: boolean;
  authUser: AuthUser | null;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuth: false,
    isLoadingAuth: false,
    authUser: null,
  }),

  getters: {
    user: (state): AuthUser | null => state.authUser,
    isLogged: (state): boolean => state.isAuth,
    isLoading: (state): boolean => state.isLoadingAuth,
  },

  actions: {
    /**
     * Persiste el usuario en localStorage y actualiza el estado reactivo.
     */
    _setUser(user: AuthUser) {
      this.authUser = user;
      this.isAuth = true;

      localStorage.setItem("user", JSON.stringify(this.authUser));
      localStorage.setItem("auth", "true");
    },

    /**
     * Limpia el estado de autenticación y localStorage.
     */
    clearAuthState() {
      this.authUser = null;
      this.isAuth = false;
      this.isLoadingAuth = false;
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
    },

    /**
     * Inicia sesión con email y contraseña usando Laravel Sanctum (cookies).
     */
    async login(credentials: LoginCredentials) {
      this.isLoadingAuth = true;

      try {
        // 1. Obtener CSRF cookie
        await apiClient.get("/sanctum/csrf-cookie");

        // 2. Login
        await apiClient.post("/login", credentials);

        // 4. ✅ Obtener datos del usuario desde el servidor
        const { data } = await apiClient.get<{ user: AuthUser }>("/api/user", {
          headers: {
            Accept: "application/json",
            "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
          },
        });

        if (data) {
          this._setUser(data);
          router.push("/dashboard");
        }
      } catch (error: unknown) {
        const err = error as { response?: { status: number } };
        if (err.response?.status !== 409) {
          this.clearAuthState();
        }
        throw error;
      } finally {
        this.isLoadingAuth = false;
      }
    },

    /**
     * Cierra la sesión en el servidor y limpia el estado local.
     */
    async logout() {
      this.isLoadingAuth = true;

      try {
        await apiClient.post("/logout");
      } finally {
        this.clearAuthState();
        await router.push({ name: "Login" });
      }
    },
  },
});
