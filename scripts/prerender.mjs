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
function buildHtmlForRoute(shell, route, meta) {
  const isEn = route.startsWith("/en");
  const lang = isEn ? "en" : "fr";
  const locale = isEn ? "en_CA" : "fr_CA";
  const altLocale = isEn ? "fr_CA" : "en_CA";
  const canonical = `${SITE_URL}${route}`;
  const ogImage = meta.ogImage || DEFAULT_OG;

  // Compute alt-language URLs
  const frPath = isEn ? enToFr[route] : route;
  const enPath = isEn ? route : frToEn[route];

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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

  await fs.writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");
  console.log(`✅ Sitemap: wrote ${urls.length} URLs to dist/sitemap.xml`);
}

main().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});
