# Blog article page: CSS drop cap, canonical hrefs, related articles

Only two files are touched: `src/pages/BlogArticlePage.tsx` and `src/index.css`. No renames, no deletes, no `npm run build`, no refactoring of surrounding code, every existing string/class/style preserved.

## A. src/pages/BlogArticlePage.tsx

1. **Import (line 1-2):** add `import { canonicalPath } from "@/lib/url-utils";` after the react-router import. The helper already exists in `src/lib/url-utils.ts` (built last task). It is used by the related-articles links (point 5), so the import is not unused.

2. **Trailing-slash hrefs (lines 190-191), applied exactly as given:**
   - `blogHref` → `"/blogue/"` / `"/en/blog/"`
   - `ctaHref` → `"/evaluation-gratuite-gatineau/"` / `"/en/home-valuation/"`

3. **Related posts (inserted after line 199), applied exactly as given:** `topicKey` normalizer (strip accents, lowercase, cut at `·•|,`, trim, drop trailing `s`), `currentKey` from the current category, `sameTopic` (same key, excluding the current post), `others` (the rest), `relatedPosts = [...sameTopic, ...others].slice(0, 3)`.

4. **Drop cap hunk (lines 331-353):** the pasted diff lost its JSX in transit; reconstructed to match the diff's stated intent ("drop cap via CSS `::first-letter`, first character stays inside the text node"):
   - The first-paragraph branch becomes a single `<p className="my-4 article-dropcap">` with the same inline style as today, whose entire content is `dangerouslySetInnerHTML={{ __html: formatInline(line) }}` — the full line including the first letter, so crawlers/screen readers read "Le timing", not "L e timing".
   - The inline 80px Cormorant span and the `first`/`rest` split are removed; the visual result is reproduced by the new `.article-dropcap::first-letter` rule in index.css.

5. **Related-articles section (inserted between the author-bio `</section>` and `{/* Next article */}`, ~line 690):** the pasted diff lost its JSX in transit; reconstructed with the page's existing patterns so it looks native:
   - `<section className="section-container pb-16">` with `borderTop: "1px solid #E0DBD1"`, matching the "Article suivant" block.
   - Uppercase eyebrow heading: "À lire aussi" (FR) / "Related reading" (EN), gold, 10px, 0.18em tracking — same style as the "Tags" and "À propos" eyebrows.
   - Three `Link`s, one per related post, each to `canonicalPath(\`${blogHref}/${isFr ? rp.slug : rp.slugEn}\`)`, showing the category eyebrow (same `topicKey`-safe raw category) and the Cormorant title, with hover opacity like neighbouring links.
   - Rendered only when `relatedPosts.length > 0`.

6. **formatInline (line 225) — left unchanged.** The diff expects a `"$1"` variant that does not exist in the current file; the file already renders markdown links as gold underlined anchors, and the pasted `+` line's HTML appears to have been stripped in transit (applying the visible text would turn every in-article link into plain text, which contradicts the inlink goal of this task). If you want body links stripped to plain text, say so and that one line will be changed.

## B. src/index.css

Insert immediately before `.card-elevated {` (line 280), inside the same `@layer` block, exactly the given rule: `.article-dropcap::first-letter` with Cormorant Garamond, 80px, line-height 0.8, weight 400, `var(--gold)`, float left, 8px right / 4px top margin.

## Verification

- `bunx tsgo -p tsconfig.app.json --noEmit` (typecheck only — no build, per your rule).
- Playwright against the local preview: open one FR and one EN article at 390px and 1440px, screenshot to confirm the drop cap renders once, links stay clickable and gold, the "À lire aussi / Related reading" block shows 3 posts and no layout shift to the "Article suivant" block; confirm no horizontal overflow.
- No forms submitted, no emails, no other files touched.
