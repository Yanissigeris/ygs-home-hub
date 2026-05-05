# Hero portrait LCP fix + FR/EN parity

## Problem
- Mobile LCP = 5.1s. App.tsx preloads AVIF nobg variants, but pages only pass `agentImage` (108 KiB webp), so HeroSection falls back to that and the preloaded AVIFs are wasted.
- EN home applies a diagonal petrol veil over the hero (default `petrolGradient=true`); FR home passes `petrolGradient={false}`. Need parity.

## Changes

### FIX 1 — `src/pages/Index.tsx`
Replace L5 import `yanis-hero-portrait.webp` with the 6 nobg imports:
- `yanis-portrait-nobg.webp` / `-sm.webp` / `-md.webp`
- `yanis-portrait-nobg.avif` / `-sm.avif` / `-md.avif`

In `<HeroSection>` (current `agentImage={yanisPortrait}`), add 5 props: `agentImageSm`, `agentImageMd`, `agentImageAvif`, `agentImageSmAvif`, `agentImageMdAvif`.

### FIX 2 — `src/pages/en/IndexEn.tsx`
Same import swap (L11) and same 5 added props in `<HeroSection>`. Additionally add `petrolGradient={false}` to match FR home.

### FIX 3 — `src/pages/OutaouaisHubPage.tsx`
Already imports `yanisPortrait` + `yanisPortraitSm` (nobg). Add 4 imports: `-md.webp`, `.avif`, `-sm.avif`, `-md.avif`. Add 4 corresponding props after `agentImageSm` in `<HeroSection>`.

### FIX 4 — `src/pages/en/OutaouaisHubPageEn.tsx`
Same as Fix 3: add 4 imports + 4 props.

## Guardrails
- No changes to `HeroSection.tsx`, `App.tsx`, copy, routes, JSON-LD, meta, tokens.
- Only intentional visual change: EN home loses the petrol veil (parity with FR).
- `yanis-hero-portrait.webp` left in repo (cleanup separately).

## Files changed
- `src/pages/Index.tsx`
- `src/pages/en/IndexEn.tsx`
- `src/pages/OutaouaisHubPage.tsx`
- `src/pages/en/OutaouaisHubPageEn.tsx`
