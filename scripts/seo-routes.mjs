import { readFileSync } from "node:fs";
/**
 * Central SEO map: route → { title, description, ogImage?, lastmod? }
 * Used by scripts/prerender.mjs to inject unique <title>, <meta description>,
 * and <link rel="canonical"> into a static HTML per route at build time.
 *
 * Keep titles ≤ 60 chars, descriptions ≤ 160 chars where possible.
 * The same src/data/seo-routes.json catalog is consumed by PageMeta in the
 * browser and by this build script, so metadata stays consistent.
 *
 * Blog routes (/blogue/:slug, /en/blog/:slug) are NOT listed here — they are
 * appended dynamically via getAllSeoRoutes() from blog-extractor.mjs.
 *
 * Sitemap <lastmod> policy:
 *   • SITE_LAST_UPDATE — bump manually for site-wide changes (header,
 *     footer, global template). Used as the default <lastmod> for every
 *     static route in the sitemap.
 *   • Optional per-route `lastmod: "YYYY-MM-DD"` — add to a specific
 *     SEO_ROUTES entry when that page receives a meaningful content
 *     update so it overrides SITE_LAST_UPDATE for that URL only.
 */

import { extractBlogPosts } from "./blog-extractor.mjs";

export const SITE_URL = "https://yanisgauthier.com";
export const DEFAULT_OG = `${SITE_URL}/og/og-default.jpg`;
export const SITE_LAST_UPDATE = "2026-05-13";
const BLOG_OG = `${SITE_URL}/og/og-blog.jpg`;

/** @type {Record<string, { title: string; description: string; ogImage?: string }>} */
// Shared with the browser: no filesystem-dependent extractor in the client bundle.
export const SEO_ROUTES = JSON.parse(
  readFileSync(new URL("../src/data/seo-routes.json", import.meta.url), "utf8"),
);

/**
 * Returns SEO_ROUTES merged with one entry per published blog post (FR + EN).
 * Lazy/async because blog data is parsed from TS source files.
 *
 * @returns {Promise<Record<string, { title: string; description: string; ogImage?: string }>>}
 */
export async function getAllSeoRoutes() {
  const posts = await extractBlogPosts();
  const out = { ...SEO_ROUTES };
  for (const p of posts) {
    out[`/blogue/${p.slug}`] = {
      title: `${p.title} | YGS`,
      description:
        p.metaDescription || p.excerpt || "Article du blogue YGS sur l'immobilier en Outaouais.",
      ogImage: BLOG_OG,
    };
    out[`/en/blog/${p.slugEn}`] = {
      title: `${p.titleEn} | YGS`,
      description:
        p.metaDescriptionEn || p.excerptEn || "YGS blog article on Outaouais real estate.",
      ogImage: BLOG_OG,
    };
  }
  return out;
}

