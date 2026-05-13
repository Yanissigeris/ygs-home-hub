# Phase 3 Batch 2 — Trailing Slash Normalization

Apply the pilot pattern from commit b89f971 to the 12 remaining large files. Add a trailing slash to every internal route path string literal that qualifies, leaving 2 known-broken URLs in `SellerPage.tsx` untouched.

## Target files (exactly 12)

| File | Expected URL fixes |
|---|---|
| src/pages/SellerPage.tsx | 25 (excl. lines 157–158) |
| src/pages/BuyerPage.tsx | 25 |
| src/components/StickyMobileCTA.tsx | 20 (incl. HIDDEN_PATHS) |
| src/pages/OutaouaisHubPage.tsx | 20 |
| src/pages/NeighborhoodsOverviewPage.tsx | 19 |
| src/pages/ResourcesPage.tsx | 19 |
| src/pages/en/ResourcesPageEn.tsx | 19 |
| src/pages/en/NeighborhoodsPageEn.tsx | 19 |
| src/pages/en/OutaouaisHubPageEn.tsx | 17 |
| src/pages/PropertiesPage.tsx | 16 |
| src/pages/RelocationPage.tsx | 16 |
| src/pages/PlexPage.tsx | 16 |

Total: 231 URLs.

## Approach

For each file:

1. Read the full file.
2. Identify every quoted string that qualifies under the rule (starts with `/` + letter, no trailing `/`, no `#`/`?`, no file-extension suffix, not under `/api/`, `/og/`, `/assets/`, `/images/`, `/fonts/`, `/icons/`, `/logos/`, not `/`, not `/this-page-does-not-exist`).
3. Append `/` before the closing quote, preserving the original quote style, indentation, and trailing commas.
4. For `SellerPage.tsx`: explicitly skip the two strings on lines 157–158 (`/blogue/quand-vendre-maison-gatineau` and `/blogue/home-staging-gatineau`).
5. Apply edits via `code--line_replace` (or `code--write` only when a wholesale rewrite is clearly cleaner — preferred path is targeted line replacements).

## Scope guards

- No other files modified (App.tsx, AreasServicesSection.tsx, prerender/audit scripts, sitemap, robots.txt all untouched).
- Quote style and formatting preserved exactly.
- The 2 broken `SellerPage.tsx` entries remain bit-identical.

## Verification (all must pass before committing)

1. `npx tsc --noEmit` — 0 errors.
2. `npx vite build` — completes (includes `audit-hreflang.mjs`).
3. `npm run lint` — no new errors vs. baseline of 18.
4. Diff scope check:
   - `git diff --name-only` lists exactly the 12 files.
   - Total ≈ 221 insertions / 221 deletions (231 URL changes; some lines hold 2 URLs).
   - `grep -n "/blogue/quand-vendre-maison-gatineau\"" src/pages/SellerPage.tsx` and `…/home-staging-gatineau"` still present without trailing slash.

If any check fails: stop, report, do not commit.

## Deliverables

After commit, report per spec:
1. ✅/❌ per verification step.
2. Per-file line-count change.
3. Confirmation `SellerPage.tsx` lines 157–158 unchanged.
4. Commit pushed (auto by Lovable) with the supplied title/body.
5. Deploy URL: https://ygs-home-hub.lovable.app

## Technical notes

- `StickyMobileCTA.tsx` `HIDDEN_PATHS` is already compared with both `p` and `p + "/"` in `pathname === p || pathname === p + "/"`, so adding trailing slashes there is safe — the OR keeps both forms matching.
- `CTA_BY_INTENT` hrefs in the same file feed `<Link to={...}>` and benefit from the slash like the pilot.
- All 12 files are presentation/data layers; no business logic touched.
