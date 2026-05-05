# YGS Cleanup Phase 1

## Item 1 — Orphan components ✅ already done
The 4 files (`MicroTrustStrip`, `ImagePlaceholder`, `TestimonialPlaceholder`, `LocalSEOCluster`) were deleted in a prior turn. Verified zero references remain in `src/`, `scripts/`, `e2e/`, `netlify/`. No further action.

## Item 2 — README.md
Replace with a concise FR README covering: project pitch, Stack, Scripts, Architecture, Déploiement. All `REPLACE_WITH_PROJECT_ID` placeholders and Lovable boilerplate removed.

## Item 3 — AwardsMarquee
`src/components/AwardsMarquee.tsx` line 6: change `"Service bilingue FR/EN"` → `"Hall of Fame RE/MAX"`. Nothing else touched.

## Item 4 — Consolidate `design-upgrade.css` into `index.css`

**4.1** Insert `body::after` (grain SVG noise) + reduced-motion fallback into `src/index.css` `@layer base`, right after the `body { ... }` block (after line 159).

**4.2** `src/index.css` line 408: `.section-fade-bridge` `height: 32px` → `50px`. Variants untouched.

**4.3** `src/index.css` lines 264–265: `.label-overline` `font-weight: 500` → `600`, `letter-spacing: .03em` → `.22em`. Rest of rule and `::before` untouched.

**4.4** `src/index.css` lines 475–478 (mobile media query): remove the `letter-spacing: .16em` line. Keep `font-size: .58rem`. `.label-overline::before { width: 16px }` untouched.

**4.5** `.reveal` override NOT migrated (dead code; no JSX uses the class). Existing `.reveal` rule in `index.css` line 340 stays unchanged.

**4.6** Final cleanup:
- Delete `src/design-upgrade.css` ✅ already done
- Remove `import "./design-upgrade.css";` from `src/main.tsx` line 5
- Remove dead comment in `src/components/HeroSection.tsx` line 35 (`// (hero-homepage.webp removed...)`)

## Verification
- `tsc --noEmit` clean (build runs automatically)
- E2E `e2e/awards-marquee.spec.ts` continues to pass (now matches 2 alternatives)
- No visual regression except marquee copy

## Files changed
- `README.md` (rewrite)
- `src/components/AwardsMarquee.tsx` (1 line)
- `src/components/HeroSection.tsx` (delete 1 comment line)
- `src/main.tsx` (delete 1 import line)
- `src/index.css` (4 small edits: insert grain rule + 3 in-place tweaks)
