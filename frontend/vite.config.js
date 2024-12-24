import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { copyFileSync } from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-manifest",
      closeBundle() {
        copyFileSync("manifest.json", "dist/manifest.json");
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        "content-script": resolve(__dirname, "src/content-script.js"),
        background: resolve(__dirname, "src/background.js"),
        popup: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
