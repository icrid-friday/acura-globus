import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: '/acura-globus/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // componentTagger() removed
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

