// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readFileSync, writeFileSync, readdirSync } from "fs";

/**
 * Post-build plugin: runs Critters to inline critical CSS
 * and async-load the rest, eliminating the render-blocking stylesheet.
 */
function criticalCssPlugin() {
  return {
    name: "vite-plugin-critical-css",
    apply: "build" as const,
    enforce: "post" as const,
    async closeBundle() {
      try {
        const Critters = (await import("critters")).default;
        const critters = new Critters({
          path: path.resolve(__dirname, "dist"),
          preload: "swap",
          inlineFonts: false,
          compress: true,
          pruneSource: false,
        });

        const distDir = path.resolve(__dirname, "dist");
        const htmlFiles = readdirSync(distDir).filter((f) => f.endsWith(".html"));

        for (const file of htmlFiles) {
          const filePath = path.join(distDir, file);
          const html = readFileSync(filePath, "utf-8");
          const inlined = await critters.process(html);
          writeFileSync(filePath, inlined);
          console.log(`✅ Critical CSS inlined: ${file}`);
        }
      } catch (e) {
        console.warn("⚠️ Critical CSS inlining skipped:", (e as Error).message);
      }
    },
  };
}

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), criticalCssPlugin()],
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
