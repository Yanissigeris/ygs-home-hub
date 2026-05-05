## Mobile LCP optimization — Home (FR + EN)

### Problems found

1. **Wrong image preloaded.** `index.html` (lines 75-81) preloads `/hero-living-room-mobile.webp` as the "video poster". But Home no longer uses `heroVideo` — it uses `heroBgImage = hero-yanis-interior.webp`. The preload is wasted bandwidth (~30 KB on the critical path) and the actual LCP image is **not preloaded at all**.

2. **No mobile variant of the hero background.** `hero-yanis-interior.webp` is a single 1365×768 / 51 KB file served to phones at ~390 CSS px wide. A 768w mobile AVIF would be ~12-18 KB.

3. **H1 hidden by `opacity: 0` animation.** `.hero-h1-reveal` (index.css:661) starts at `opacity: 0` and animates 0.85s. Chrome won't count an `opacity: 0` element as an LCP candidate, so if the H1 is the LCP, LCP is delayed by the full animation duration (~850ms). Same issue for `.hero-fade-in` (0.55s).

4. **The portrait preload uses `media="(max-width: 767px)"` with DPR `x` descriptors and Vite-hashed URLs** — already optimal. Keep as-is.

### Changes

**A. `index.html` lines 61-99 (inline preload script)**
- Remove the `/hero-living-room*.webp` poster preload (no `<video>` on home).
- Preload the hero **background** image instead. Use the new mobile AVIF on phones, the existing WebP on desktop, both via Vite-hashed paths discovered at build via `htmlOptimizePlugin`.

**B. `vite.config.ts` `htmlOptimizePlugin`**
- Extend the bundle scan to find `hero-yanis-interior` and `hero-yanis-interior-mobile` (new) hashed assets.
- Inject a conditional preload on home routes (`/`, `/en`, `/en/`) using `<link rel="preload" as="image" type="image/avif" media="(max-width: 767px)" href="…mobile.avif" fetchpriority="high">` + a desktop equivalent for the existing webp.

**C. New asset variants**
- Generate `src/assets/hero-yanis-interior-mobile.avif` (~768w, q60) and `src/assets/hero-yanis-interior.avif` (~1600w, q55) using imagemagick. Target sizes: ~14 KB mobile, ~45 KB desktop.

**D. `src/components/HeroSection.tsx` lines 546-566 (heroBgImage `<img>`)**
- Wrap in `<picture>` so phones download the mobile AVIF and desktops download the existing WebP. Keep `loading="eager"`, `fetchpriority="high"`, `decoding="async"`. This guarantees the preload byte-matches what the DOM renders (zero double-download).

**E. `src/components/HeroSection.tsx` lines 713-735 (H1) + `src/index.css` lines 644-666**
- Remove `opacity: 0` starting state from `.hero-h1-reveal` and `.hero-fade-in` so the H1/eyebrow are immediately LCP-eligible. Replace with a `transform`-only animation (translateY → 0) which Chrome counts toward LCP. Keeps the visual reveal, removes the LCP penalty.

**F. New `Index.tsx` / `IndexEn.tsx` props**
- Pass `heroBgImageMobile` (new optional prop) so `HeroSection` can pick the mobile AVIF in the `<picture>` source.

### Files touched
- `index.html` (preload script)
- `vite.config.ts` (htmlOptimizePlugin)
- `src/components/HeroSection.tsx` (heroBgImage `<picture>`, prop, H1 animation class)
- `src/index.css` (`.hero-h1-reveal`, `.hero-fade-in` keyframes)
- `src/pages/Index.tsx`, `src/pages/en/IndexEn.tsx` (new prop)
- `src/assets/hero-yanis-interior-mobile.avif`, `hero-yanis-interior.avif` (new)

### Out of scope / unchanged
- Portrait preload + `<picture>` (already optimal).
- Vendor chunk splitting.
- Routes, copy, JSON-LD, meta tags, fonts.
- Other pages (only home FR/EN).

### Expected outcome
- Mobile LCP image drops from a 51 KB un-preloaded WebP to a ~14 KB preloaded AVIF.
- H1 becomes LCP-eligible immediately on render (saves ~400-850 ms when text is the LCP).
- Net mobile LCP improvement: ~600-1200 ms (target: under 2.5 s vs current 5.1 s, combined with prior fixes).
