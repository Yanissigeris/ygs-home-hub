# Blog article page: CSS drop cap, canonical hrefs, related articles

Scope: only `src/pages/BlogArticlePage.tsx` and `src/index.css`. No renames, no deletes, no `npm run build`, no refactoring, existing strings/classes/styles preserved.

Per your rule, I stopped where the pasted code is incomplete instead of reconstructing it. Here is the exact status of each hunk.

## Ready now (complete and verified against the current files)

- **B) src/index.css**: insert the `.article-dropcap::first-letter` rule (with its comment) immediately before `.card-elevated {` (currently line 280), inside the same `@layer` block. Harmless on its own — the class is only used once the drop-cap hunk lands.

## Held — nothing else in A is safe to apply alone

- Hunks **1 (import)** and **3 (relatedPosts)** create an import and variables used only by hunk 6; without it they fail the typecheck as unused.
- Hunk **2 (blogHref/ctaHref trailing slash)** without hunk 7 produces `/blogue//slug` (double slash) on the "Article suivant" link.

## Blocked — please resend these complete

1. **Hunk 5, drop cap (`@@ -330,26 +340,16 @@`):** the `+` JSX was stripped in transit; only empty tag remnants are visible, so the new `<p>` (its class, presumably `article-dropcap`, and its content) is unknown.
2. **Hunk 6, related-articles section (`@@ -688,11 +688,44 @@`):** the entire section JSX was stripped in transit; only the comment, the `relatedPosts.length > 0` guard and the two `{isFr ? ... : ...}` expressions are visible. The surrounding `<section>`, heading and `Link` markup are unknown.
3. **Hunk 7, "Article suivant" link:** the diff ends mid-hunk with context lines only — no `-`/`+` lines at all. From your note I expect `to={\`${blogHref}${...}/\`}`, but I need the exact lines.
4. **Hunk 4, formatInline:** the `-` line does not match the file. Current line 225 is:
   `.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' class='underline underline-offset-2 transition-colors' style='color:var(--gold)'>$1</a>")`
   — markdown links currently render as gold underlined anchors, not `"$1"`. Also, the visible `+` line outputs only the label, which would turn every in-article link into plain text. Please confirm the intended `+` line (full code), or confirm that body links should become plain text.

## After the complete hunks arrive

- Apply all remaining hunks exactly as given, then run `bunx tsgo -p tsconfig.app.json --noEmit` (typecheck only; no build, per your rule).
- Self-check C: zero matches for `${blogHref}/` in the file.
- Playwright on the local preview: one FR and one EN article at 390px and 1440px — drop cap renders once, links still gold and clickable, related block shows 3 posts, no horizontal overflow.
- No forms submitted, no emails, no other files touched.
