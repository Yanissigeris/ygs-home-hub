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
        });
      }
    }
  }
  return posts;
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
  const re = new RegExp(`(?:^|[\\s,{])${name}:\\s*["']([^"']+)["']`);
  const m = obj.match(re);
  return m ? m[1] : null;
}
