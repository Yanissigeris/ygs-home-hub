# Fix duplicate hreflang annotations

## Root cause

Three components inject hreflang `<link>` tags into `<head>`, and two of them fire on the same routes:

1. **`LangMeta`** (mounted globally in `SiteLayout`) — manages tags by `id="hreflang-{lang}"`. Skips blog articles. Covers all mapped FR/EN routes.
2. **`PageMeta`** (per-page) — manages the same tags via attribute selector `link[rel="alternate"][hreflang="X"]`. Also skips blog articles (sets one side to null).
3. **`BlogArticlePage`** — only path that injects hreflang for blog articles.

Because `LangMeta` and `PageMeta` use **different selectors**, neither finds the other's tags, so each appends its own. Result: every non-blog page ends up with 2× `fr-CA`, 2× `en-CA`, 2× `x-default`. Crawlers (Sitebulb / Screaming Frog) flag this as "multiple entries for the same language/region".

`LangMeta`'s mapping is the most complete and authoritative (single source of truth), uses stable IDs, and already handles the blog-article exclusion correctly. It should be the sole owner.

## Changes (one file: `src/components/PageMeta.tsx`)

1. **Remove the entire hreflang block** from the `useEffect` body — the section starting at `removeHreflangLinks();` through the `if (frPath && enPath) { ensureHreflangLink(...) ... }` injection.
2. **Remove the cleanup** `return () => { removeHreflangLinks(); };` (it would otherwise wipe `LangMeta`'s tags on unmount).
3. **Delete the now-unused helpers** `ensureHreflangLink` and `removeHreflangLinks`.
4. **Remove the unused `frToEn` / `enToFr` maps** and the `stripTrailingSlash` import (no longer referenced after step 1). Keep `withTrailingSlash` (still used for canonical normalisation).

`LangMeta` and `BlogArticlePage` are **not modified** — they already cover every route between them with no overlap.

## Verification

1. `npx tsc --noEmit` — passes
2. `npx vite build` — passes
3. Boot dev preview, view source on `/`, `/proprietes/`, `/en/properties/`, `/blogue/<slug>/` — confirm exactly **one** `<link rel="alternate" hreflang="fr-CA">`, **one** `en-CA`, **one** `x-default` per page.
4. Run `node scripts/audit-seo.mjs` against `dist/` after `npm run build` — hreflang warnings stay at zero.

## Out of scope

- No change to `LangMeta`, `BlogArticlePage`, `App.tsx`, or any data file.
- No change to canonical/OG/Twitter logic in `PageMeta`.
- No router or routing-table changes.
