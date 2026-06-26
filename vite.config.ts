import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User/organization GitHub Pages site (jdaschner.github.io) is served from the
// domain root, so the base path is "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
