/**
 * Audit prerendered HTML in dist/.
 *
 * For every dist/**\/index.html, extract the inner HTML of <div id="root">
 * and verify it contains at least MIN_BYTES of content. Fail the build
 * (exit 1) if any page is below the threshold or missing required landmarks.
 *
 * Usage: node scripts/audit-prerender.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");

const MIN_BYTES = 5 * 1024; // 5 KB

/** Recursively collect every index.html under dist/. */
async function collectIndexFiles(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // Skip Vite asset folder — never contains index.html
      if (e.name === "assets") continue;
      await collectIndexFiles(full, out);
    } else if (e.isFile() && e.name === "index.html") {
      out.push(full);
    }
  }
  return out;
}

/** Extract inner HTML of <div id="root"> by walking <div>/</div> depth. */
function extractRootInner(html) {
  const marker = 'id="root">';
  const start = html.indexOf(marker);
  if (start < 0) return null;
  const after = start + marker.length;
  const re = /<\/?div\b[^>]*>/g;
  re.lastIndex = after;
  let depth = 1;
  let m;
  while ((m = re.exec(html))) {
    if (m[0].startsWith("</")) depth--;
    else depth++;
    if (depth === 0) return html.substring(after, m.index);
  }
  return null;
}

function routeFromFile(filePath) {
  const rel = path.relative(DIST, filePath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  return "/" + rel.replace(/\/index\.html$/, "");
}

async function main() {
  const files = await collectIndexFiles(DIST);
  if (files.length === 0) {
    console.error("❌ Audit: no dist/**/index.html files found.");
    process.exit(1);
  }

  const failures = [];
  let okCount = 0;
  let totalBytes = 0;

  for (const file of files) {
    const html = await fs.readFile(file, "utf8");
    const root = extractRootInner(html);
    const route = routeFromFile(file);

    if (root === null) {
      failures.push({ route, reason: "no <div id=\"root\"> found" });
      continue;
    }

    const bytes = Buffer.byteLength(root, "utf8");
    totalBytes += bytes;

    if (bytes < MIN_BYTES) {
      failures.push({ route, reason: `root is ${bytes}b (< ${MIN_BYTES}b)` });
      continue;
    }
    if (!root.includes("<main")) {
      failures.push({ route, reason: `missing <main> landmark (${bytes}b)` });
      continue;
    }
    if (!root.includes("<footer")) {
      failures.push({ route, reason: `missing <footer> landmark (${bytes}b)` });
      continue;
    }

    okCount++;
  }

  const avg = Math.round(totalBytes / files.length);
  console.log(
    `\n📋 Prerender audit: ${okCount}/${files.length} pages OK (avg ${avg}b in #root, threshold ${MIN_BYTES}b)`,
  );

  if (failures.length > 0) {
    console.error(`\n❌ ${failures.length} page(s) failed audit:`);
    for (const f of failures) {
      console.error(`   ${f.route}  →  ${f.reason}`);
    }
    process.exit(1);
  }

  console.log("✅ All prerendered pages meet the content threshold.\n");
}

main().catch((err) => {
  console.error("❌ Audit crashed:", err);
  process.exit(1);
});
