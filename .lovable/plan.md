# Image Optimization — Phase 2 (Responsive Listing Photos)

Generate 400 / 640 / 900-wide AVIF+WebP variants for the 6 listing-card photos and serve them via `srcset`/`sizes` so phones download the small variant while desktop stays sharp.

## Approach

Use **`vite-imagetools`** (build-time generator) — preferred over manually maintained files. One import per photo returns the full picture/source set; no committed variant files.

Source originals (verified):

| id | original |
|---|---|
| 28167244 | 1621×1080 (currently NO responsive variants) |
| 28743871 | 1621×1080 |
| 20453879 | 1536×1024 |
| 11366995 | 1600×1074 |
| 15163372 | 1095×730 |
| 17113358 | 1087×730 |

All originals are ≥ 900px wide except 15163372 / 17113358 (~1090) — still well above 900. Variants requested at **400, 640, 900** with `withoutEnlargement` for safety.

Cap check for 28167244: desktop card ≈ 387–580 CSS px wide in the 2- and 3-col grids. 900px largest variant ≈ ~2× max display, satisfying the ceiling.

## Tasks

1. **Install** `vite-imagetools` as devDependency. Register in `vite.config.ts` plugins array (before `ViteImageOptimizer` so output of imagetools then passes through the compressor).

2. **Rewrite `src/data/property-images.ts`** to import each photo once via imagetools query and return a `{ avif: srcset, webp: srcset }` set:
   ```ts
   import p28167244 from "@/assets/property-28167244.webp?w=400;640;900&format=avif;webp&as=picture";
   ```
   Export a shape:
   ```ts
   { avifSrcSet: string; webpSrcSet: string; fallback: string; width: number; height: number }
   ```
   Add an entry for `28167244` (currently missing).

3. **Update `src/components/FeaturedProperties.tsx`** `<picture>` block:
   - Replace the two `<source>` `srcSet` lines with `set.avifSrcSet` / `set.webpSrcSet` (already comma-separated `<url> 400w, <url> 640w, <url> 900w`).
   - Keep the same `sizes` attribute (`(max-width: 480px) 90vw, (max-width: 1024px) 50vw, 648px`).
   - Use `set.fallback` for the `<img src>`.
   - Remove the now-dead `if (!set)` fallback for 28167244 (it will have a set after change).
   - **Keep unchanged**: `alt`, `loading="lazy"`, `decoding="async"`, `width={648}`, `height={486}`, the `filter: saturate(0.88)` style, hover handlers, error handler.

4. **Delete obsolete pre-generated files** under `src/assets/`:
   - `property-{28743871,20453879,15163372,17113358,11366995}-{480,800}.{avif,webp}` (10 files × 2 fmts = 20 files).
   - Keep the original `property-{id}.webp` source files (imagetools consumes them).

## Out of scope (explicit)

- Pathway lifestyle background — not a listing card; left alone.
- `src/components/PropertyCard.tsx` — used by other routes, not on home; not modified in this phase.
- No changes to alt text, cropping, card layout, listing fetch/storage, prerendered text, meta tags, or JSON-LD.

## Verification

- `bun run build` succeeds; `dist/assets/` contains 400/640/900 AVIF+WebP variants for all 6 ids.
- Preview at mobile (≤480px) shows the 400w variants downloading via DevTools Network; desktop shows 900w (or 640w in 3-col).
- All 4 home featured cards render correctly, no broken images, no 404s.

## Technical notes

- Files touched: `package.json`, `vite.config.ts`, `src/data/property-images.ts`, `src/components/FeaturedProperties.tsx`, plus deletion of 20 pre-generated variant files.
- `vite-imagetools` `as=picture` returns `{ sources: { avif, webp }, img: { src, w, h } }`; we'll map that into the existing data-driven shape so callers stay simple.
