## Goal
Layer a diagonal petrol gradient (135°, ink → deeper ink) over the hero image on every page using `<HeroSection>`, except the homepage (`src/pages/Index.tsx`).

## Approach
Add a new opt-out prop on `HeroSection` rather than touching ~80 page files.

### 1. `src/components/HeroSection.tsx`
- Add prop: `petrolGradient?: boolean` (defaults to `true`).
- In the full hero variant (line ~532+), when `petrolGradient !== false` and `heroBgImage && !heroVideo`, render an additional absolutely-positioned overlay div above the image (z-index between image and content):
  ```tsx
  <div
    className="absolute inset-0 pointer-events-none"
    aria-hidden="true"
    style={{
      zIndex: 2,
      background:
        "linear-gradient(135deg, hsl(200 42% 16% / 0.78) 0%, hsl(200 42% 16% / 0.62) 55%, hsl(200 42% 16% / 0.85) 100%)",
    }}
  />
  ```
  Reuses the exact stops from the existing `.hero-gradient--with-bg` utility in `src/index.css` for visual consistency.
- In the compact variant (line ~480), the existing dynamic `baseStart/baseMid/baseEnd` overlay already provides petrol veiling — leave untouched to preserve the lerp scroll behavior.
- Skip when no `heroBgImage` (already solid ink) or when video is used (video variant has its own overlay stack).

### 2. `src/pages/Index.tsx`
- Pass `petrolGradient={false}` to `<HeroSection>` (line 43) so the homepage hero remains unchanged.

## Out of scope
- `src/components/HeroSection.tsx` lerp/scroll overlays, ring, recognition card, video overlay stack — untouched.
- `BlogArticlePage.tsx` editorial split hero — does not use `<HeroSection>`, untouched.
- `src/index.css` tokens and `.hero-gradient*` utilities — untouched.
- All consumer pages — no edits needed (default-on prop).

## Verification
- Homepage hero pixel-identical (prop opt-out).
- Sample subpage heroes (Aylmer, Hull, Market Report, Thank You) show new diagonal petrol veil over image; text contrast improved or equal.
- Build passes.
