# Image Optimization — Phase 1

Low-risk wins: install a build-time compressor, shrink oversized source logos in place, recompress one photo, and add explicit dimensions to two `<img>` tags. No visual, layout, routing, or content changes.

## 1. Build-time compressor

- Add `vite-plugin-image-optimizer` (+ `sharp` if not already present) as a dev dependency.
- Register it in `vite.config.ts` alongside the existing `htmlOptimizePlugin`, with quality settings: PNG 80, JPG 80, WebP 80, AVIF 60. SVGO left at defaults.
- No import changes — assets continue to be referenced as today; compression happens at bundle time.

## 2. Downscale oversized logo sources (in place, same filename/extension)

Audit every usage (header, footer, RE/MAX block, anywhere else) to find the max rendered size, then cap each source at ~2× that:

| File | Current | New cap |
|---|---|---|
| `src/assets/ygs-logo-updated.png` | 1920×1920 | 320×320 |
| `src/assets/ygs-logo.png` | 1920×1920 | 320×320 |
| `src/assets/remax-balloon-official.png` | 1000×1132 | ~71×80 (height-capped at 80) |
| `src/assets/remax-logotype-black.png` | 999×229 | 300×~69 |
| `src/assets/logo-temple-renommee.webp` | 100×161 | ~62×100 (height-capped at 100) |

Resampled with sharp, same path/filename/format. Never upscale. No import changes needed.

Note: `ygs-logo.webp` and `ygs-logo-Dt0x-8Xz.webp` also exist — will check their usage and downscale to the same cap if referenced; leave untouched if unused.

## 3. Recompress `src/assets/yanis-about-new.jpg`

- Keep pixel dimensions (1170×1216).
- Strategy: re-encode as JPEG at quality ~72 in place (safe path — zero reference changes). The WebP-conversion path is skipped to avoid touching every reference.

## 4. Explicit width/height on RE/MAX `<img>` tags

In `src/components/RemaxAgencyBlock.tsx`:
- Balloon: add `width={71} height={80}` (aspect 1000:1132).
- Logotype: add `width={300} height={69}` (aspect 999:229).
- Keep existing inline `style` and all other attributes unchanged.

## Out of scope (explicit)

- No changes to alt text, cropping, position, or visual appearance.
- No listing/property photos modified.
- Hero AVIFs and `/og/og-home.jpg` untouched.
- No changes to prerendered HTML text, meta tags, JSON-LD, layout, or routing.

## Verification

- Run the build; confirm logo asset sizes drop dramatically in `dist/assets/`.
- Preview the home page at mobile + desktop viewports; visually confirm header logo, footer logo, and RE/MAX block render crisp with no 404s.
- Spot-check `yanis-about-new.jpg` still renders on the About section.

## Technical notes

- Files touched: `package.json` (dep), `vite.config.ts` (plugin registration), 5–7 binary assets under `src/assets/` (in-place resample/recompress), `src/components/RemaxAgencyBlock.tsx` (two `<img>` dimension attributes).
- Sharp resampling: `withMetadata({ orientation: undefined })` to drop EXIF, `kernel: 'lanczos3'` for downscale quality.
