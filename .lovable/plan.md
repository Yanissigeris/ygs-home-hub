# Fix blurry desktop/tablet portrait

## Root cause

Currently the portrait `<picture media="(min-width: 768px)">` serves a single 640×960 WebP/AVIF. The hero portrait renders at `height: 92%` of a tall hero on desktop — on a 1440px+ screen with retina (2x DPR), the rendered size is ~700–900 CSS px wide → 1400–1800 device px wide. A 640px source upscales heavily, hence the blur. On tablets at 2x DPR (iPad ~768 CSS px), it's also undersized.

Mobile (≤767px) currently uses sm (320), md (480), full (640) at 1x/2x/3x — those tiers are correctly sized for phone CSS widths, so we leave them alone.

## Changes (desktop/tablet only)

### 1. Generate a high-res portrait variant
From the existing `src/assets/yanis-portrait-raw.webp` (1280×1920 source, fully transparent cutout):
- `src/assets/yanis-portrait-nobg-lg.avif` — 1280×1920, AVIF q≈55 (~50–70 KB)
- `src/assets/yanis-portrait-nobg-lg.webp` — 1280×1920, WebP q≈80 (~90–120 KB)

This is the same cutout (no background), just at the original resolution.

### 2. `src/components/HeroSection.tsx` — desktop `<picture>` block (lines 902–943)
Add new optional props `agentImageLg` / `agentImageLgAvif`. In the desktop `<source>` tags, switch from a single URL to a 1x/2x `srcSet`:
- AVIF source: `${agentImageAvif} 1x, ${agentImageLgAvif} 2x`
- WebP source: `${agentImage} 1x, ${agentImageLg} 2x`

The mobile `<picture md:hidden>` block stays untouched.

### 3. `src/App.tsx` desktop preload (lines 61–68)
Replace the single `desktop.href` with `imagesrcset`:
```
desktop.setAttribute('imagesrcset', `${yanisPortraitAvif} 1x, ${yanisPortraitLgAvif} 2x`);
desktop.href = yanisPortraitAvif; // fallback
```
Add the new `yanisPortraitLgAvif` import.

### 4. `vite.config.ts` `htmlOptimizePlugin` (lines 18–45)
Find `yanis-portrait-nobg-lg` in the bundle and inject the desktop preload as `imagesrcset="… 1x, …-lg 2x"` (the current mobile-only `fetchpriority` preload becomes a tablet/desktop-aware media-gated preload).

### 5. Pages that pass portrait props
Add the two new imports + props in:
- `src/pages/Index.tsx`
- `src/pages/en/IndexEn.tsx`
- `src/pages/OutaouaisHubPage.tsx`
- `src/pages/en/OutaouaisHubPageEn.tsx`

```ts
import yanisPortraitLg from "@/assets/yanis-portrait-nobg-lg.webp";
import yanisPortraitLgAvif from "@/assets/yanis-portrait-nobg-lg.avif";
// pass to <HeroSection ... agentImageLg={yanisPortraitLg} agentImageLgAvif={yanisPortraitLgAvif} />
```

## Out of scope
- Mobile portrait tiers (no quality change requested).
- Hero background image, fonts, CSS animations, vendor chunks.
- Any copy / SEO / JSON-LD / route changes.

## Expected impact
- Tablet/desktop retina: portrait crisp at native pixel density (1280px source for up to ~640 CSS px wide rendering, well above current desktop layout).
- Mobile: identical bytes as today (still serves sm/md/full AVIF via DPR).
- Desktop LCP cost: ~+30 KB AVIF on 2x desktops (acceptable; preload + AVIF still fast). 1x desktops/laptops still get the 17 KB original.
