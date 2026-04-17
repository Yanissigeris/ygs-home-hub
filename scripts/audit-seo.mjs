#!/usr/bin/env node
/**
 * Post-build SEO audit.
 *
 * Walks every route declared in scripts/seo-routes.mjs, reads its prerendered
 * dist/<route>/index.html, and verifies the SEO tags injected by
 * scripts/prerender.mjs are present, unique, and within length budgets.
 *
 * Exits with code 1 if any check fails — wire into CI as `node scripts/audit-seo.mjs`.
 *
 * Checks per route:
 *   • <title> exists, exactly 1, ≤ 70 chars, matches SEO_ROUTES entry
 *   • <meta name="description"> exists, exactly 1, ≤ 170 chars, matches entry
 *   • <link rel="canonical"> exists, exactly 1
 *   • og:title / og:description / og:url present
 *   • twitter:title / twitter:description / twitter:card present
 *   • hreflang fr-CA + en-CA + x-default present
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { SEO_ROUTES, SITE_URL } from "./seo-routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const TITLE_MAX = 70;
const DESC_MAX = 170;

const c = {
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
};

const errors = [];
const warnings = [];

const routeToFile = (route) => {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
};

const countMatches = (html, regex) => (html.match(regex) || []).length;

async function auditRoute(route, meta) {
  const file = routeToFile(route);
  let html;
  try {
    html = await fs.readFile(file, "utf8");
  } catch {
    errors.push(`[${route}] missing prerendered file: ${path.relative(DIST, file)}`);
    return;
  }

  // ── Title ──
  const titleCount = countMatches(html, /<title>[^<]*<\/title>/g);
  if (titleCount === 0) errors.push(`[${route}] missing <title>`);
  else if (titleCount > 1) errors.push(`[${route}] duplicate <title> (${titleCount})`);

  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  if (titleMatch) {
    const title = titleMatch[1];
    if (title !== meta.title) errors.push(`[${route}] <title> mismatch — expected "${meta.title}", got "${title}"`);
    if (title.length > TITLE_MAX) warnings.push(`[${route}] <title> ${title.length} chars (>${TITLE_MAX})`);
  }

  // ── Description ──
  const descCount = countMatches(html, /name=["']description["']/g);
  if (descCount === 0) errors.push(`[${route}] missing <meta name="description">`);
  else if (descCount > 1) errors.push(`[${route}] duplicate description (${descCount})`);

  const descMatch = html.match(/name=["']description["']\s+content=["']([^"']*)["']/);
  if (descMatch) {
    const desc = descMatch[1];
    if (desc !== meta.description) errors.push(`[${route}] description mismatch`);
    if (desc.length > DESC_MAX) warnings.push(`[${route}] description ${desc.length} chars (>${DESC_MAX})`);
  }

  // ── Canonical ──
  const canonCount = countMatches(html, /rel=["']canonical["']/g);
  if (canonCount === 0) errors.push(`[${route}] missing canonical`);
  else if (canonCount > 1) errors.push(`[${route}] duplicate canonical (${canonCount})`);

  const canonMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/);
  if (canonMatch && !canonMatch[1].startsWith(SITE_URL)) {
    errors.push(`[${route}] canonical does not start with ${SITE_URL}`);
  }

  // ── Open Graph ──
  for (const prop of ["og:title", "og:description", "og:url"]) {
    if (!new RegExp(`property=["']${prop}["']`).test(html)) errors.push(`[${route}] missing ${prop}`);
  }

  // ── Twitter ──
  for (const name of ["twitter:title", "twitter:description", "twitter:card"]) {
    if (!new RegExp(`name=["']${name}["']`).test(html)) errors.push(`[${route}] missing ${name}`);
  }

  // ── Hreflang ──
  for (const hl of ["fr-CA", "en-CA", "x-default"]) {
    if (!new RegExp(`hreflang=["']${hl}["']`).test(html)) warnings.push(`[${route}] missing hreflang="${hl}"`);
  }
}

async function main() {
  // Sanity check
  try {
    await fs.access(DIST);
  } catch {
    console.error(c.red("✗ dist/ not found — run `npm run build` first."));
    process.exit(1);
  }

  const routes = Object.keys(SEO_ROUTES);
  console.log(c.bold(`\n🔎 Auditing SEO across ${routes.length} routes...\n`));

  await Promise.all(routes.map((r) => auditRoute(r, SEO_ROUTES[r])));

  if (warnings.length) {
    console.log(c.yellow(`⚠ ${warnings.length} warning(s):`));
    warnings.forEach((w) => console.log(c.dim("  " + w)));
    console.log();
  }

  if (errors.length) {
    console.log(c.red(c.bold(`✗ ${errors.length} error(s):`)));
    errors.forEach((e) => console.log(c.red("  " + e)));
    console.log();
    process.exit(1);
  }

  console.log(c.green(c.bold(`✓ All ${routes.length} routes pass SEO audit.\n`)));
}

main().catch((err) => {
  console.error(c.red("Audit crashed:"), err);
  process.exit(1);
});
