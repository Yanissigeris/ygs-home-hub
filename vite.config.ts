// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Post-build plugin that processes the generated HTML to:
 * 1. Inject <link rel="preload"> for the LCP image (portrait)
 * 2. Convert the CSS <link> to non-render-blocking async pattern
 *    with a tiny inline critical CSS fallback to prevent FOUC
 */
function htmlOptimizePlugin() {
  return {
    name: "vite-plugin-html-optimize",
    apply: "build" as const,
    enforce: "post" as const,
    generateBundle(_, bundle) {
      // Find the portrait asset (LCP element)
      const portraitKey = Object.keys(bundle).find((k) =>
        k.includes("yanis-portrait-nobg")
      );

      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (!fileName.endsWith(".html") || chunk.type !== "asset") continue;
        let html = chunk.source as string;

        // 1) Inject portrait preload right after <meta charset>
        if (portraitKey) {
          html = html.replace(
            "<meta charset",
            `<link rel="preload" as="image" href="/${portraitKey}" fetchpriority="high">\n    <meta charset`
          );
        }

        // 2) Make CSS non-render-blocking: preload + async swap
        //    Vite outputs: <link rel="stylesheet" crossorigin href="/assets/index-HASH.css">
        html = html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
          `<link rel="preload" as="style" href="$1" crossorigin>
    <link rel="stylesheet" href="$1" media="print" onload="this.media='all'" crossorigin>
    <noscript><link rel="stylesheet" href="$1" crossorigin></noscript>`
        );

        // 3) Inject minimal critical CSS inline to prevent FOUC
        const criticalCss = `<style>
      *,::after,::before{box-sizing:border-box;border:0 solid}
      body{margin:0;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:#fdfdfd;color:hsl(200 30% 14%)}
      h1,h2,h3,h4{font-family:'Playfair Display',serif;text-wrap:balance}
      .section-container{margin-inline:auto;max-width:1200px;padding-inline:1.25rem}
      @media(min-width:640px){.section-container{padding-inline:1.5rem}}
      @media(min-width:768px){.section-container{padding-inline:2rem}}
      #root{min-height:100vh;display:flex;flex-direction:column}
    </style>`;
        html = html.replace("<meta charset", criticalCss + "\n    <meta charset");

        (chunk as any).source = html;
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
  plugins: [react(), htmlOptimizePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id)) return "vendor";
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("@radix-ui")) return "radix";
          if (id.includes("@supabase") || id.includes("@tanstack")) return "data";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("recharts") || id.includes("d3-")) return "charts";
          if (id.includes("embla-carousel")) return "carousel";
          if (id.includes("react-hook-form") || id.includes("zod") || id.includes("@hookform")) return "forms";
          return "vendor-misc";
        },
      },
    },
  },
}));
