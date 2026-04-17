/**
 * Post-build prerender (meta-only).
 *
 * Reads dist/index.html (the SPA shell), then for every route in SEO_ROUTES
 * writes a copy to dist/<route>/index.html with route-specific:
 *   • <title>
 *   • <meta name="description">
 *   • <meta property="og:title|og:description|og:url|og:locale">
 *   • <meta name="twitter:title|twitter:description">
 *   • <link rel="canonical">
 *   • <link rel="alternate" hreflang="fr-CA|en-CA|x-default">
 *
 * The React app still mounts and behaves identically — runtime <PageMeta>
 * just rewrites the same tags client-side. The benefit is that crawlers
 * (Google, Bing, social) now see unique tags WITHOUT executing JS.
 *
 * Zero React component changes. Zero Puppeteer. Zero new runtime deps.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { SEO_ROUTES, SITE_URL, DEFAULT_OG } from "./seo-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

/* ── FR ↔ EN route mapping (mirrors src/components/PageMeta.tsx) ── */
const frToEn = {
  "/": "/en",
  "/proprietes": "/en/properties",
  "/vendre-ma-maison-gatineau": "/en/sell",
  "/evaluation-gratuite-gatineau": "/en/home-valuation",
  "/plan-vendeur-gatineau": "/en/seller-plan",
  "/guide-vendeur-gatineau": "/en/seller-guide",
  "/quand-vendre-a-gatineau": "/en/when-to-sell",
  "/vendre-un-plex-a-gatineau": "/en/sell-plex",
  "/acheter-a-gatineau": "/en/buy",
  "/consultation-acheteur": "/en/buyer-consultation",
  "/guide-acheteur-gatineau": "/en/buyer-guide",
  "/premier-achat-gatineau": "/en/first-time-buyer",
  "/acheter-a-gatineau-depuis-ottawa": "/en/buy-from-ottawa",
  "/relocalisation-ottawa-gatineau": "/en/relocation",
  "/relocalisation-montreal-gatineau": "/en/montreal-relocation",
  "/guide-relocalisation-gatineau": "/en/relocation-guide",
  "/quartiers-a-considerer-a-gatineau": "/en/neighborhoods",
  "/militaire-gatineau": "/en/military",
  "/relocalisation-militaire-gatineau": "/en/military-relocation",
  "/acheter-comme-militaire-gatineau": "/en/military-buyer",
  "/vendre-lors-dune-mutation-gatineau": "/en/military-seller",
  "/guide-militaire-gatineau": "/en/military-guide",
  "/investir-plex-gatineau": "/en/plex",
  "/analyse-plex-gatineau": "/en/plex-analysis",
  "/rapport-marche-gatineau": "/en/market-report",
  "/plateau-aylmer": "/en/plateau-aylmer",
  "/hull": "/en/hull",
  "/buckingham-masson-angers": "/en/buckingham",
  "/gatineau": "/en/gatineau",
  "/aylmer": "/en/aylmer",
  "/plateau": "/en/plateau",
  "/ressources": "/en/resources",
  "/vivre-a-aylmer": "/en/living-aylmer",
  "/vivre-a-hull": "/en/living-hull",
  "/vivre-dans-le-plateau": "/en/living-plateau",
  "/faq": "/en/faq",
  "/temoignages": "/en/testimonials",
  "/contact-yanis": "/en/contact",
  "/merci": "/en/thank-you",
  "/merci-evaluation": "/en/thank-you-valuation",
  "/blogue": "/en/blog",
  "/chelsea": "/en/chelsea",
  "/cantley": "/en/cantley",
  "/val-des-monts": "/en/val-des-monts",
  "/masson-angers": "/en/masson-angers",
  "/pontiac": "/en/pontiac",
  "/cote-dazur-gatineau": "/en/cote-dazur",
  "/limbour": "/en/limbour",
  "/courtier-immobilier-outaouais": "/en/outaouais-real-estate-agent",
  "/vendre-maison-hull": "/en/sell-house-hull",
  "/vendre-maison-aylmer": "/en/sell-house-aylmer",
  "/evaluation-maison-hull": "/en/home-valuation-hull",
  "/evaluation-maison-aylmer": "/en/home-valuation-aylmer",
  "/combien-coute-un-courtier-immobilier-au-quebec": "/en/how-much-does-a-realtor-cost-in-quebec",
  "/comment-choisir-un-courtier-immobilier": "/en/how-to-choose-a-realtor",
  "/verifier-un-courtier-immobilier-oaciq": "/en/oaciq-find-a-broker",
  "/frais-de-courtage-immobilier-quebec": "/en/realtor-commission-quebec",
  "/courtier-immobilier-ou-vendre-soi-meme": "/en/realtor-vs-selling-by-owner-quebec",
  "/politique-de-confidentialite": "/en/privacy-policy",
  "/conditions-utilisation": "/en/terms",
};
const enToFr = Object.fromEntries(Object.entries(frToEn).map(([k, v]) => [v, k]));

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/**
 * Patch the SPA shell HTML for a single route.
 * Strategy: drop a marker block in <head> that overrides the existing tags.
 * The browser uses the LAST matching tag, so appending wins for canonical
 * and meta. For <title>, we string-replace the existing one.
 */
/**
 * Map a route to a category-specific OG image.
 * Used as fallback when SEO_ROUTES doesn't specify an explicit ogImage.
 * Order matters: more specific patterns first.
 */
function categoryOgImage(route) {
  const r = route.toLowerCase();

  // Blog
  if (/^\/(en\/)?(blogue|blog)(\/|$)/.test(r)) return `${SITE_URL}/og/og-blog.jpg`;

  // Military (specific subset of sellers/buyers — match before generic)
  if (/militaire|military/.test(r)) return `${SITE_URL}/og/og-military.jpg`;

  // Plex / investment
  if (/plex/.test(r)) return `${SITE_URL}/og/og-plex.jpg`;

  // Valuation / evaluation
  if (/evaluation|home-valuation|valuation/.test(r)) return `${SITE_URL}/og/og-eval.jpg`;

  // Market report
  if (/rapport-marche|market-report/.test(r)) return `${SITE_URL}/og/og-market.jpg`;

  // Sellers (vendre, sell, seller-*, plan-vendeur, when-to-sell, guide-vendeur)
  if (/vendre|^\/(en\/)?sell|seller|plan-vendeur|when-to-sell|guide-vendeur/.test(r))
    return `${SITE_URL}/og/og-seller.jpg`;

  // Buyers (acheter, buy, buyer-*, premier-achat, first-time-buyer, consultation-acheteur)
  if (/acheter|^\/(en\/)?buy|buyer|premier-achat|first-time-buyer|consultation-acheteur|relocalisation|relocation|montreal/.test(r))
    return `${SITE_URL}/og/og-buyer.jpg`;

  // Neighborhoods (specific neighborhood pages + overview + living-*)
  if (
    /quartiers|neighborhoods|aylmer|hull|plateau|chelsea|cantley|val-des-monts|masson-angers|pontiac|cote-dazur|limbour|buckingham|gatineau|vivre-a-|living-/.test(
      r,
    )
  )
    return `${SITE_URL}/og/og-neighborhoods.jpg`;

  // Guides / resources / FAQ / how-to-choose / commission etc.
  if (/guide|ressources|resources|faq|courtier|realtor|frais-de-courtage|oaciq/.test(r))
    return `${SITE_URL}/og/og-guides.jpg`;

  // Testimonials
  if (/temoignages|testimonials/.test(r)) return `${SITE_URL}/og/og-testimonials.jpg`;

  // Home
  if (r === "/" || r === "/en") return `${SITE_URL}/og/og-home.jpg`;

  return DEFAULT_OG;
}

function buildHtmlForRoute(shell, route, meta, override = {}) {
  const isEn = route.startsWith("/en");
  const lang = isEn ? "en" : "fr";
  const locale = isEn ? "en_CA" : "fr_CA";
  const altLocale = isEn ? "fr_CA" : "en_CA";
  const canonical = `${SITE_URL}${route}`;
  const ogImage = meta.ogImage || categoryOgImage(route);

  // Compute alt-language URLs (allow override for dynamic routes like blog posts)
  const frPath = override.frPath || (isEn ? enToFr[route] : route);
  const enPath = override.enPath || (isEn ? route : frToEn[route]);

  let html = shell;

  // 1. Replace <html lang="..."> attribute
  html = html.replace(/<html\s+lang="[^"]*"/i, `<html lang="${lang}"`);

  // 2. Replace <title>…</title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);

  // 3. Build the SEO override block — placed right before </head> so it
  //    wins over the static defaults (last duplicate wins for meta/link).
  const hreflangBlock =
    frPath && enPath
      ? `
    <link rel="alternate" hreflang="fr-CA" href="${SITE_URL}${frPath}" />
    <link rel="alternate" hreflang="en-CA" href="${SITE_URL}${enPath}" />
    <link rel="alternate" hreflang="x-default" href="${SITE_URL}${frPath}" />`
      : "";

  const seoBlock = `
    <!-- Prerendered SEO overrides (route: ${route}) -->
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:locale" content="${locale}" />
    <meta property="og:locale:alternate" content="${altLocale}" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${ogImage}" />${hreflangBlock}
`;

  html = html.replace("</head>", `${seoBlock}  </head>`);

  return html;
}

async function main() {
  // Read SPA shell
  const shellPath = path.join(DIST, "index.html");
  const shell = await fs.readFile(shellPath, "utf8");

  let written = 0;
  for (const [route, meta] of Object.entries(SEO_ROUTES)) {
    const html = buildHtmlForRoute(shell, route, meta);

    // Output path
    let outPath;
    if (route === "/") {
      outPath = path.join(DIST, "index.html"); // overwrite root shell with FR home meta
    } else {
      // Strip leading slash, write to dist/<route>/index.html
      outPath = path.join(DIST, route.replace(/^\//, ""), "index.html");
    }

    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, html, "utf8");
    written++;
  }

  console.log(`✅ Prerender: wrote ${written} static HTML files (meta-only) to dist/`);

  /* ───────────────────── sitemap.xml ─────────────────────
   * Built from the same SEO_ROUTES map so the sitemap is always in sync
   * with the prerendered routes.
   */
  const today = new Date().toISOString().split("T")[0];

  const NOINDEX = new Set([
    "/merci",
    "/merci-evaluation",
    "/en/thank-you",
    "/en/thank-you-valuation",
  ]);

  const priorityFor = (route) => {
    if (route === "/" || route === "/en") return "1.0";
    if (/^\/(en\/)?(politique-de-confidentialite|conditions-utilisation|privacy-policy|terms)$/.test(route)) return "0.3";
    if (route === "/proprietes" || route === "/en/properties") return "0.9";
    return "0.8";
  };

  const changefreqFor = (route) => {
    if (route === "/" || route === "/en") return "weekly";
    if (route === "/proprietes" || route === "/en/properties") return "daily";
    if (route.includes("rapport-marche") || route.includes("market-report")) return "weekly";
    return "monthly";
  };

  const xmlEscape = (s) => s.replace(/&/g, "&amp;");

  const urls = Object.keys(SEO_ROUTES)
    .filter((r) => !NOINDEX.has(r))
    .sort();

  const urlEntries = urls
    .map((route) => {
      const loc = `${SITE_URL}${route}`;
      const isEn = route.startsWith("/en");
      const frPath = isEn ? enToFr[route] : route;
      const enPath = isEn ? route : frToEn[route];

      const alternates =
        frPath && enPath
          ? `
    <xhtml:link rel="alternate" hreflang="fr-CA" href="${xmlEscape(SITE_URL + frPath)}" />
    <xhtml:link rel="alternate" hreflang="en-CA" href="${xmlEscape(SITE_URL + enPath)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(SITE_URL + frPath)}" />`
          : "";

      return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqFor(route)}</changefreq>
    <priority>${priorityFor(route)}</priority>${alternates}
  </url>`;
    })
    .join("\n");

  /* ── Blog posts (dynamic /blogue/:slug + /en/blog/:slug) ──
   * Parsed from src/data/blog-posts.ts and blog-posts-neighborhoods.ts
   * via regex (avoids needing to execute TS w/ asset imports).
   * Only objects with `published: true` are included.
   */
  const blogPosts = await extractBlogPosts();

  // Resolve hashed asset filenames in dist/assets/ once
  const distAssets = await fs.readdir(path.join(DIST, "assets")).catch(() => []);
  const resolveHashedAsset = (sourceFilename) => {
    if (!sourceFilename) return null;
    const dot = sourceFilename.lastIndexOf(".");
    const base = sourceFilename.slice(0, dot);
    const ext = sourceFilename.slice(dot);
    const re = new RegExp(
      `^${base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-[A-Za-z0-9_-]+${ext.replace(/\./g, "\\.")}$`,
    );
    const found = distAssets.find((f) => re.test(f));
    return found ? `${SITE_URL}/assets/${found}` : null;
  };

  // Prerender per-article HTML files (with unique og:image, title, description)
  let blogHtmlCount = 0;
  for (const post of blogPosts) {
    const ogImage =
      resolveHashedAsset(post.featuredImageFile) || `${SITE_URL}/og/og-blog.jpg`;
    post.ogImage = ogImage;

    // FR
    const frRoute = `/blogue/${post.slug}`;
    const frMeta = {
      title: `${post.title} | YGS`,
      description: post.metaDescription || post.excerpt || "Article du blogue YGS.",
      ogImage,
    };
    const frHtml = buildHtmlForRoute(shell, frRoute, frMeta, {
      enPath: `/en/blog/${post.slugEn}`,
      frPath: frRoute,
    });
    const frOut = path.join(DIST, "blogue", post.slug, "index.html");
    await fs.mkdir(path.dirname(frOut), { recursive: true });
    await fs.writeFile(frOut, frHtml, "utf8");

    // EN
    const enRoute = `/en/blog/${post.slugEn}`;
    const enMeta = {
      title: `${post.titleEn} | YGS`,
      description: post.metaDescriptionEn || post.excerptEn || "YGS blog article.",
      ogImage,
    };
    const enHtml = buildHtmlForRoute(shell, enRoute, enMeta, {
      enPath: enRoute,
      frPath: frRoute,
    });
    const enOut = path.join(DIST, "en", "blog", post.slugEn, "index.html");
    await fs.mkdir(path.dirname(enOut), { recursive: true });
    await fs.writeFile(enOut, enHtml, "utf8");

    blogHtmlCount += 2;
  }
  console.log(`✅ Prerender: wrote ${blogHtmlCount} blog article HTML files`);

  const blogEntries = blogPosts
    .map(({ slug, slugEn, publishDate, ogImage }) => {
      const frUrl = `${SITE_URL}/blogue/${slug}`;
      const enUrl = `${SITE_URL}/en/blog/${slugEn}`;
      const lastmod = publishDate || today;

      const imageBlock = ogImage
        ? `
    <image:image><image:loc>${xmlEscape(ogImage)}</image:loc></image:image>`
        : "";

      const frEntry = `  <url>
    <loc>${xmlEscape(frUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="fr-CA" href="${xmlEscape(frUrl)}" />
    <xhtml:link rel="alternate" hreflang="en-CA" href="${xmlEscape(enUrl)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(frUrl)}" />${imageBlock}
  </url>`;

      const enEntry = `  <url>
    <loc>${xmlEscape(enUrl)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="fr-CA" href="${xmlEscape(frUrl)}" />
    <xhtml:link rel="alternate" hreflang="en-CA" href="${xmlEscape(enUrl)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(frUrl)}" />${imageBlock}
  </url>`;

      return `${frEntry}\n${enEntry}`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
${blogEntries}
</urlset>
`;

  await fs.writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");
  console.log(
    `✅ Sitemap: wrote ${urls.length} static + ${blogPosts.length * 2} blog URLs (${
      urls.length + blogPosts.length * 2
    } total) to dist/sitemap.xml`,
  );
}

/**
 * Extract published blog posts from the TS data files via regex.
 * Returns: [{ slug, slugEn, publishDate }]
 */
async function extractBlogPosts() {
  const files = [
    path.resolve(__dirname, "..", "src/data/blog-posts.ts"),
    path.resolve(__dirname, "..", "src/data/blog-posts-neighborhoods.ts"),
  ];

  const posts = [];
  for (const file of files) {
    let src;
    try {
      src = await fs.readFile(file, "utf8");
    } catch {
      continue;
    }

    // Split on object boundaries: each blog post is a `{ ... },` block.
    // We match each object that has `slug:`, `slugEn:`, `published: true`.
    const objectRegex = /\{[^{}]*?slug:\s*["']([^"']+)["'][^{}]*?slugEn:\s*["']([^"']+)["'][^{}]*?published:\s*(true|false)[^{}]*?publishDate:\s*["']([^"']+)["']/gs;
    // Note: `body` and `bodyEn` are template strings that may contain { and },
    // so the simple [^{}] pattern won't match the full object. We need a smarter
    // approach: scan the file with a brace-counting tokenizer per top-level object.
    void objectRegex;

    const objects = splitTopLevelObjects(src);
    for (const obj of objects) {
      const slug = matchField(obj, "slug");
      const slugEn = matchField(obj, "slugEn");
      const published = /published:\s*true\b/.test(obj);
      const publishDate = matchField(obj, "publishDate");
      if (slug && slugEn && published) {
        posts.push({ slug, slugEn, publishDate });
      }
    }
  }
  return posts;
}

/**
 * Tokenize a TS source into top-level object literals (those nested inside
 * the `BlogPost[]` array). Tracks brace depth and string/backtick state to
 * skip over template literals containing { and }.
 */
function splitTopLevelObjects(src) {
  // Find the opening of the `[` containing blog objects.
  const arrayStart = src.indexOf("[");
  if (arrayStart < 0) return [];

  const objects = [];
  let depth = 0;
  let inStr = null; // null | '"' | "'" | '`'
  let escape = false;
  let objStart = -1;

  for (let i = arrayStart; i < src.length; i++) {
    const c = src[i];

    if (escape) {
      escape = false;
      continue;
    }
    if (inStr) {
      if (c === "\\") {
        escape = true;
      } else if (c === inStr) {
        inStr = null;
      }
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inStr = c;
      continue;
    }
    if (c === "{") {
      if (depth === 0) objStart = i;
      depth++;
    } else if (c === "}") {
      depth--;
      if (depth === 0 && objStart >= 0) {
        objects.push(src.slice(objStart, i + 1));
        objStart = -1;
      }
    }
  }

  return objects;
}

function matchField(obj, name) {
  const re = new RegExp(`(?:^|[\\s,{])${name}:\\s*["']([^"']+)["']`);
  const m = obj.match(re);
  return m ? m[1] : null;
}

main().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
