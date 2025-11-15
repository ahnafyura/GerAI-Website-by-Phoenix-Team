import { defineConfig } from "vite";
// HAPUS: import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // HAPUS: 'tailwindcss()' dari dalam array plugins
  plugins: [react()],
});
