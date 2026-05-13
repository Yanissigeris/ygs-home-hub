# Phase 3 Batch 3 — Trailing Slash Normalization (90 medium-density files)

Extend the proven pattern from b89f971 (pilot) and 2e07fd9 (batch 2) to all remaining medium-density files (6–15 qualifying URLs each), targeting ~837 URL fixes across ~90 files.

## Approach

Reuse the same automated Node script from batch 2 (`/tmp/fix-slashes.mjs`), adapted to:

1. **Discover targets**: walk `src/`, parse every `.ts`/`.tsx`/`.js`/`.jsx` file, count qualifying URL string literals using regex `(['"])(/[A-Za-z][^\s<>"']*)\1` + the `qualifies()` filter.
2. **Filter**: keep only files with 6–15 qualifying URLs.
3. **Subtract exclusions**: hard-skip the 26 files in the EXCLUSIONS list (previously fixed files + `NotFound.tsx` + infra/route files), plus any `.d.ts` and `.test.*` files.
4. **Rewrite**: for each kept file, append `/` before the closing quote of every qualifying string, preserving original quote style, indentation, and trailing commas.

## qualifies() rule (identical to pilot/batch 2)

A string literal qualifies iff:
- starts with `/` + letter
- no trailing `/`
- no `#` or `?`
- no file-extension suffix (`.css .js .json .png .jpg .jpeg .pdf .webp .svg .ico .xml .txt .html .woff .woff2 .mp4`)
- not under `/api/ /og/ /assets/ /images/ /fonts/ /icons/ /logos/`
- not `/` and not `/this-page-does-not-exist`

## Hard exclusions (must NOT appear in diff)

```
src/data/navigation.ts
src/data/navigation-en.ts
src/data/breadcrumbs.ts
src/data/blog-posts.ts
src/App.tsx
src/components/SiteHeader.tsx
src/components/SiteFooter.tsx
src/components/PageMeta.tsx
src/components/LangMeta.tsx
src/components/LanguageSwitch.tsx
src/components/AreasServicesSection.tsx
src/components/StickyMobileCTA.tsx
src/lib/url-utils.ts
src/pages/BlogArticlePage.tsx
src/pages/SellerPage.tsx
src/pages/BuyerPage.tsx
src/pages/OutaouaisHubPage.tsx
src/pages/NeighborhoodsOverviewPage.tsx
src/pages/ResourcesPage.tsx
src/pages/PropertiesPage.tsx
src/pages/RelocationPage.tsx
src/pages/PlexPage.tsx
src/pages/NotFound.tsx                  ← contains startsWith("/en")
src/pages/en/ResourcesPageEn.tsx
src/pages/en/NeighborhoodsPageEn.tsx
src/pages/en/OutaouaisHubPageEn.tsx
```

Plus all `*.d.ts` and `*.test.*` files.

Out of script scope by directory: `scripts/**`, `public/**`, `e2e/**`, `supabase/**`, `tests/**` — script only walks `src/`.

## Scope guard

Before edits, the script prints the list of selected files with URL counts. The plan is to commit only if the count lands between **85 and 95** files (spec allows this slack).

## Verification (all must pass)

1. `npx tsc --noEmit` — 0 errors
2. `npx vite build` — completes (audit-hreflang.mjs runs as part of build)
3. `npm run lint` — no new errors vs. 18 baseline
4. Diff scope:
   - 85–95 files in `git diff --name-only`
   - ≈ 789 insertions / 789 deletions
   - `NotFound.tsx` NOT in diff
   - No EXCLUSIONS file in diff (checked programmatically)

If any check fails: stop, report, no commit.

## Deliverables (after commit)

1. ✅/❌ per verification step
2. Full list of modified files with per-file URL fix counts
3. Confirmation `NotFound.tsx` not in diff
4. Confirmation no excluded file in diff
5. Commit pushed (auto by Lovable)
6. Deploy URL: https://ygs-home-hub.lovable.app
