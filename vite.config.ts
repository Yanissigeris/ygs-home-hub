// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { imagetools } from "vite-imagetools";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/supabase/vite";

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
      // Find portrait variants. Match exact filename roots so we don't pick
      // an unintended -sm/-md/-lg variant when looking for the base.
      const portraitKey = Object.keys(bundle).find((k) =>
        /yanis-portrait-nobg(-[A-Za-z0-9_]+)?\.avif$/.test(k) &&
        !/yanis-portrait-nobg-(sm|md|lg)\./.test(k)
      );
      const portraitLgKey = Object.keys(bundle).find((k) =>
        /yanis-portrait-nobg-lg(-[A-Za-z0-9_]+)?\.avif$/.test(k)
      );
      // Mobile portrait variants — same tiers the <picture> mobile srcset uses
      // (sm 1x, md 2x, base 3x). Preloading these makes the mobile LCP element
      // (Yanis portrait on ≤767px) start downloading before the JS bundle.
      const portraitSmKey = Object.keys(bundle).find((k) =>
        /yanis-portrait-nobg-sm(-[A-Za-z0-9_]+)?\.avif$/.test(k)
      );
      const portraitMdKey = Object.keys(bundle).find((k) =>
        /yanis-portrait-nobg-md(-[A-Za-z0-9_]+)?\.avif$/.test(k)
      );
      // Find hero background variants (LCP element on desktop home).
      const heroBgMobileAvifKey = Object.keys(bundle).find((k) =>
        /hero-yanis-interior-mobile.*\.avif$/.test(k)
      );
      const heroBgDesktopAvifKey = Object.keys(bundle).find(
        (k) => /hero-yanis-interior.*\.avif$/.test(k) && !k.includes("mobile")
      );

      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (!fileName.endsWith(".html") || chunk.type !== "asset") continue;
        let html = chunk.source as string;

        // 1) Inject conditional asset preloads — only on home + Outaouais hub.
        if (portraitKey || heroBgMobileAvifKey || heroBgDesktopAvifKey) {
          const portraitSrcSet = portraitKey && portraitLgKey
            ? `/${portraitKey} 1x, /${portraitLgKey} 2x`
            : portraitKey
              ? `/${portraitKey}`
              : "";
          const portraitLink = portraitKey
            ? `var l=document.createElement('link');l.rel='preload';l.as='image';l.type='image/avif';l.media='(min-width: 768px)';l.href='/${portraitKey}';l.setAttribute('imagesrcset',${JSON.stringify(portraitSrcSet)});l.setAttribute('fetchpriority','high');document.head.appendChild(l);`
            : "";
          // Mobile portrait preload — matches the mobile <picture> exactly
          // (sm 1x, md 2x, base 3x) so the browser reuses the preload response.
          const portraitMobileSrcSetParts = [
            portraitSmKey ? `/${portraitSmKey} 1x` : "",
            portraitMdKey ? `/${portraitMdKey} 2x` : "",
            portraitKey ? `/${portraitKey} 3x` : "",
          ].filter(Boolean);
          const portraitMobileSrcSet = portraitMobileSrcSetParts.join(", ");
          const portraitMobileHref = portraitSmKey
            ? `/${portraitSmKey}`
            : portraitMdKey
              ? `/${portraitMdKey}`
              : portraitKey
                ? `/${portraitKey}`
                : "";
          const portraitMobileLink = portraitMobileHref
            ? `var lm=document.createElement('link');lm.rel='preload';lm.as='image';lm.type='image/avif';lm.media='(max-width: 767px)';lm.href='${portraitMobileHref}';lm.setAttribute('imagesrcset',${JSON.stringify(portraitMobileSrcSet)});lm.setAttribute('fetchpriority','high');document.head.appendChild(lm);`
            : "";
          const bgMobileLink = heroBgMobileAvifKey
            ? `var bm=document.createElement('link');bm.rel='preload';bm.as='image';bm.type='image/avif';bm.media='(max-width: 767px)';bm.href='/${heroBgMobileAvifKey}';bm.setAttribute('fetchpriority','high');document.head.appendChild(bm);`
            : "";
          const bgDesktopLink = heroBgDesktopAvifKey
            ? `var bd=document.createElement('link');bd.rel='preload';bd.as='image';bd.type='image/avif';bd.media='(min-width: 768px)';bd.href='/${heroBgDesktopAvifKey}';bd.setAttribute('fetchpriority','high');document.head.appendChild(bd);`
            : "";
          const conditionalPreload = `<script>(function(){var p=location.pathname;if(p==='/'||p==='/en'||p==='/en/'||p==='/outaouais'||p==='/en/outaouais'){${portraitLink}${portraitMobileLink}${bgMobileLink}${bgDesktopLink}}})();</script>`;
          html = html.replace(
            "<meta charset",
            `${conditionalPreload}\n    <meta charset`
          );
        }

        // 2) Make CSS non-render-blocking: preload + async swap
        //    Vite outputs: <link rel="stylesheet" crossorigin href="/assets/index-HASH.css">
        html = html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
          `<link rel="preload" as="style" href="$1" crossorigin>
    <link rel="stylesheet" href="$1" crossorigin>`
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
  plugins: [
    react(),
    imagetools(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80, mozjpeg: true },
      jpg: { quality: 80, mozjpeg: true },
      webp: { quality: 80 },
      avif: { quality: 60 },
    }),
    htmlOptimizePlugin(),
    mcpPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime"],
  },
  build: {
    chunkSizeWarningLimit: 600,
    assetsInlineLimit: (filePath: string) => {
      // Logos répétés sur toutes les pages (RE/MAX, YGS) : toujours en
      // fichiers hachés dans /assets/ pour profiter du cache CDN immutable,
      // au lieu d'être dupliqués en base64 dans chaque HTML prerendered.
      if (/(?:remax-[^/]*|ygs-logo[^/]*)\.png$/i.test(filePath)) return false;
      // Tout le reste : comportement Vite par défaut (inline sous 4 KB).
      return undefined;
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            // Application code: keep blog markdown out of the main chunk.
            // Loaded only when /blogue/* or /en/blog/* breadcrumb resolves a slug,
            // or when the BlogPage / BlogArticlePage routes mount.
            if (id.includes("/data/blog-posts")) return "blog-data";
            return;
          }
          // Heavy charting lib — only used by /ui/chart.tsx (currently dead code,
          // but keep it isolated in case a chart is added later).
          if (id.includes("recharts") || id.includes("d3-")) return "charts";
          // Supabase client — only loaded by ValuationWidget + form hooks.
          // Splitting it lets routes without forms skip ~127 KB.
          if (id.includes("@supabase")) return "supabase";
          if (id.includes("@tanstack")) return "data";
          if (id.includes("framer-motion") || id.includes("motion-dom") || id.includes("motion-utils")) return "motion";
          if (id.includes("zod") || id.includes("react-hook-form") || id.includes("@hookform")) return "forms";
          if (id.includes("react-router") || id.includes("@remix-run/router")) return "router";
          if (id.includes("react-helmet-async")) return "helmet";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("embla-carousel")) return "carousel";
          // Radix is huge in aggregate but each primitive is small;
          // bundling them together compresses much better than per-package.
          if (id.includes("@radix-ui")) return "radix";
          return "vendor";
        },
      },
    },
  },
}));
