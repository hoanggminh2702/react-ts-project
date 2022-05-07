import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: [
      {
        find: "src",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      { find: /^~/, replacement: path.resolve(__dirname) },
    ],
  },
});
