import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(({ command }) => ({


  base: command === "build" ? "./" : "/",

  plugins: [
    react(),

    {
      ...viteStaticCopy({
        targets: [{ src: "frontend/*", dest: "frontend" }],
      }),
      apply: "build",
    },
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    rollupOptions: {
      output: {

        entryFileNames: "index.js",

        chunkFileNames: "frontend/runtime/[name]-[hash].js",

        assetFileNames: "frontend/runtime/[name]-[hash][extname]",
      },
    },
  },
}));