## Goal

Replace the hero background image on `/vendre-ma-maison-gatineau` (FR) and `/en/sell` (EN) with the uploaded Gatineau skyline photo. No other changes; SEO, structure, copy, alts, canonicals, JSON-LD all preserved.

## Scope

The current hero uses `src/assets/hero-vendre.webp`, imported only by:
- `src/pages/SellerPage.tsx`
- `src/pages/en/SellerPageEn.tsx`

No other page imports this asset, so swapping it is fully isolated.

## Steps

1. Convert the uploaded image (`Gatineau-la-ville-etudiante-du-Quebec-par-excellence-2.jpg`) to optimized WebP and save as `src/assets/hero-vendre-gatineau.webp` (new file — keeps the old one untouched in case it's referenced later).
2. Update the `heroImg` import in both `SellerPage.tsx` and `SellerPageEn.tsx` to point to the new asset.
3. Leave everything else (HeroSection props, overline, title, subtitle, CTAs, trustLine, JSON-LD, canonical, hreflang, alt text on internal images) unchanged.

## SEO safety

- Routes, canonicals, hreflang, meta titles/descriptions, JSON-LD: untouched.
- HeroSection background is decorative (CSS background-image), so no alt-text impact.
- New WebP filename only changes a hashed asset URL — not crawled separately.

No code is changed in this mode; awaiting approval.