# Image Optimization — Phase 3 (Listing-Adjacent Images)

Apply the same `vite-imagetools` responsive pattern (already wired in Phase 2) to the remaining image-bearing sections on the home page. No layout, no alt-text, no behavior changes.

## Targets

| Section | File(s) | Current source | Displayed at |
|---|---|---|---|
| `InstagramGrid` | `src/assets/instagram-{1..6}.webp` | 854–1206 wide, 30–92 KB each | aspect-square; ~3-col desktop (~280px), 2-col mobile (~200px) → ≤560 device px |
| `AboutSection` (portrait) | `src/assets/yanis-about-new.jpg` | 1170×1216, 109 KB | `max-w-[320px]` mobile, ~565 CSS px desktop → ≤1130 device px |
| `PathwaySection` (lifestyle bg) | `pathway-lifestyle-bg.webp` (1280×714) | currently two pre-rendered split files per format | desktop floating frame ~50vw; mobile band 100vw × 200px |

## Tasks

### 1. Instagram tiles — `src/components/InstagramGrid.tsx`
- Replace each static `import ig{n} from "@/assets/instagram-{n}.webp"` with a single imagetools picture import:
  `?w=320;640&format=avif;webp&as=picture`.
- In the `.map()`, render `<picture><source type="image/avif" .../><source type="image/webp" .../><img ... /></picture>` with `sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"`.
- Keep `alt={altTexts[i]}`, `width={800}`, `height={800}`, `loading="lazy"`, `decoding="async"`, the `className` (`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`), and the hover overlay markup unchanged.

### 2. AboutSection portrait — `src/components/AboutSection.tsx`
- Replace `import yanisAbout from "@/assets/yanis-about-new.jpg"` with imagetools picture import: `?w=400;640;900&format=avif;webp&as=picture`.
- Wrap the existing `<img>` in `<picture>` with AVIF + WebP `<source>` srcsets and `sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 565px"`.
- Keep `alt={c.imgAlt + " — YGS"}`, `className`, `loading="lazy"`, `decoding="async"`, `width={565}`, `height={800}`, the warm overlay `<div>`, and the `onError` handler unchanged.

### 3. Pathway lifestyle background — `src/components/PathwaySection.tsx`
- Replace the four pre-rendered imports (`-720.{avif,webp}`, `-1280.{avif,webp}`) with one imagetools picture import from the master source `pathway-lifestyle-bg.webp`: `?w=720;1080;1280&format=avif;webp&as=picture`.
- Desktop `<picture>` (the floating frame): use the AVIF/WebP srcsets with `sizes="(min-width: 1280px) 640px, 50vw"`.
- Mobile `<picture>` (the band): same imagetools result reused; `sizes="100vw"`.
- Keep both wrappers' positions, dimensions, gradient overlays, `aria-hidden`, `role="presentation"`, `width`/`height` attributes, and empty `alt=""` unchanged.
- Delete the four obsolete files: `pathway-lifestyle-bg-{720,1280}.{avif,webp}` (8 files).
- Drop the dead imports `cardVendreImg`, `cardAcheterImg`, `cardPlexImg` (assigned to variables never read in JSX).

## Out of scope (explicit)

- Hero AVIFs, `/og/og-home.jpg`, listing photos (already done Phase 2), header/footer logos (Phase 1), `GuideOffersSection` (no images).
- No alt-text, cropping, layout, hover, or behavior changes.
- No prerendered text / meta / JSON-LD changes.

## Verification

- `bun run build` succeeds; `dist/assets/` contains new 320/640 and 400/640/900 and 720/1080/1280 variants where requested.
- Preview at mobile + desktop: every Instagram tile, the About portrait, and the Pathway lifestyle photo render correctly with no 404s.
- DevTools Network at 375×812 confirms phones download the smaller variants.

## Technical notes

- Files touched: `src/components/InstagramGrid.tsx`, `src/components/AboutSection.tsx`, `src/components/PathwaySection.tsx`, plus deletion of 8 obsolete `pathway-lifestyle-bg-*` files.
- All transforms run through the existing `imagetools()` plugin registered in `vite.config.ts`; their output is further compressed by `ViteImageOptimizer`.
