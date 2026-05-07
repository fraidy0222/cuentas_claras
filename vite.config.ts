import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   host: "192.168.137.1", // permite conexiones externas
  //   port: 5173, // puedes elegir otro puerto si quieres
  //   strictPort: true, // no intenta otro puerto automáticamente
  //   cors: true, // permite peticiones desde cualquier origen
  // },
});
