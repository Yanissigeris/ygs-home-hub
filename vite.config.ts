import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { jsonldPrerenderPlugin } from "./plugins/vite-plugin-jsonld-prerender";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), jsonldPrerenderPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["framer-motion", "@radix-ui/react-dialog", "@radix-ui/react-accordion", "@radix-ui/react-tooltip"],
        },
      },
    },
  },
}));
