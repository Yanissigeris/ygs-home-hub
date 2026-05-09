/**
 * Shared blog post extractor — used by prerender.mjs (HTML generation)
 * and seo-routes.mjs (SEO map enrichment).
 *
 * Parses src/data/blog-posts.ts and blog-posts-neighborhoods.ts via regex
 * (no TS compiler needed) and returns { slug, slugEn, title, titleEn,
 * metaDescription, metaDescriptionEn, excerpt, excerptEn, publishDate,
 * featuredImageFile } for every published post.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BLOG_FILES = [
  path.resolve(__dirname, "..", "src/data/blog-posts.ts"),
  path.resolve(__dirname, "..", "src/data/blog-posts-neighborhoods.ts"),
];

/** Extract all published blog posts from the data files. */
export async function extractBlogPosts() {
  const posts = [];
  for (const file of BLOG_FILES) {
    let src;
    try {
      src = await fs.readFile(file, "utf8");
    } catch {
      continue;
    }

    // Strip line comments (// …) before tokenizing — apostrophes inside comments
    // (e.g. `// CÔTE-D'AZUR`) would otherwise be treated as opening a string
    // literal and desync the brace-depth parser, dropping every object that
    // appears after the comment. Preserve the line break so line numbers stay
    // valid for downstream regex matches. Skip URLs (https://, http://) and
    // ignore // sequences inside strings/template literals.
    src = stripLineComments(src);

    // Build import map: variable name → source filename
    // Matches: `import blogMarket from "@/assets/blog/blog-market-2025.webp";`
    const importMap = {};
    const importRe = /import\s+(\w+)\s+from\s+["']@\/assets\/blog\/([^"']+)["']/g;
    let im;
    while ((im = importRe.exec(src)) !== null) {
      importMap[im[1]] = im[2];
    }

    const objects = splitTopLevelObjects(src);
    for (const obj of objects) {
      const slug = matchField(obj, "slug");
      const slugEn = matchField(obj, "slugEn");
      const published = /published:\s*true\b/.test(obj);
      const publishDate = matchField(obj, "publishDate");
      const title = matchField(obj, "title");
      const titleEn = matchField(obj, "titleEn");
      const seoTitle = matchField(obj, "seoTitle");
      const seoTitleEn = matchField(obj, "seoTitleEn");
      const metaDescription = matchField(obj, "metaDescription");
      const metaDescriptionEn = matchField(obj, "metaDescriptionEn");
      const excerpt = matchField(obj, "excerpt");
      const excerptEn = matchField(obj, "excerptEn");
      const emitFaqSchema = /emitFaqSchema:\s*true\b/.test(obj);
      const body = matchField(obj, "body");
      const bodyEn = matchField(obj, "bodyEn");
      const faqItems = emitFaqSchema && body ? extractFaqPairs(body) : [];
      const faqItemsEn = emitFaqSchema && bodyEn ? extractFaqPairs(bodyEn) : [];

      const fiMatch = obj.match(/featuredImage:\s*(\w+)\s*[,}]/);
      const featuredImageVar = fiMatch ? fiMatch[1] : null;
      const featuredImageFile = featuredImageVar ? importMap[featuredImageVar] : null;

      if (slug && slugEn && published) {
        posts.push({
          slug,
          slugEn,
          publishDate,
          title,
          titleEn,
          seoTitle,
          seoTitleEn,
          metaDescription,
          metaDescriptionEn,
          excerpt,
          excerptEn,
          featuredImageFile,
          emitFaqSchema,
          faqItems,
          faqItemsEn,
        });
      }
    }
  }
  return posts;
}

/**
 * Parse a markdown body and extract Q/A pairs from a `## FAQ` (or
 * `## Questions fréquentes` / `## Frequently asked`) section. Tolerates
 * `**Q : ...**`, `**Q1 : ...**`, `Q: ...` and `R:` / `A:`. Returns []
 * if no FAQ section is found or no pairs parse cleanly.
 */
function extractFaqPairs(body) {
  if (!body) return [];
  // Unescape common TS template literal escapes back to plain markdown.
  const md = body.replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\n/g, "\n");
  const lines = md.split("\n");
  const items = [];
  let inFaq = false;
  for (const raw of lines) {
    const line = raw.trim();
    if (/^##\s*(FAQ|Questions fréquentes|Frequently asked)/i.test(line)) {
      inFaq = true;
      continue;
    }
    if (inFaq && line.startsWith("## ")) {
      inFaq = false;
      continue;
    }
    if (!inFaq) continue;
    const stripped = line.replace(/^\*\*\s*/, "").replace(/\s*\*\*$/, "").trim();
    const qMatch = stripped.match(/^Q\d*\s*[:：]\s*(.+)$/i);
    const aMatch = stripped.match(/^[RA]\d*\s*[:：]\s*(.+)$/i);
    if (qMatch) {
      items.push({ q: qMatch[1].replace(/\*\*$/, "").trim(), a: "" });
    } else if (aMatch && items.length > 0) {
      items[items.length - 1].a = aMatch[1].trim();
    } else if (line && items.length > 0 && items[items.length - 1].a) {
      items[items.length - 1].a += " " + line;
    }
  }
  return items.filter((it) => it.q && it.a);
}

/**
 * Tokenize a TS source into top-level object literals (those nested inside
 * the array). Tracks brace depth and string/backtick state to skip over
 * template literals containing { and }.
 */
function splitTopLevelObjects(src) {
  const arrayStart = src.indexOf("[");
  if (arrayStart < 0) return [];

  const objects = [];
  let depth = 0;
  let inStr = null;
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
  // Match a string literal value, respecting the opening quote type so
  // apostrophes inside double-quoted strings don't terminate the match.
  // Supports double quotes, single quotes, and backticks.
  const re = new RegExp(
    `(?:^|[\\s,{])${name}:\\s*(?:"((?:[^"\\\\]|\\\\.)*)"|'((?:[^'\\\\]|\\\\.)*)'|\`((?:[^\`\\\\]|\\\\.)*)\`)`,
  );
  const m = obj.match(re);
  return m ? (m[1] ?? m[2] ?? m[3] ?? null) : null;
}
