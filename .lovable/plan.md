# Make EN hero/portrait identical to FR

## Problem

The EN homepage hero (`/en`) currently differs from the FR homepage (`/`) in two structural ways:

1. **Background**: EN uses a video (`heroVideo="/hero-interior-720.mp4"` + poster) while FR uses a static image (`heroBgImage={yanisHero}` → `hero-yanis-interior.webp`).
2. **Portrait**: EN uses a different portrait asset (`yanis-portrait-nobg.*` with full Sm/Md/AVIF responsive variant set) while FR uses a single `yanis-hero-portrait.webp` with no responsive variants.

The user wants EN to look exactly like FR.

## Scope

One file only: `src/pages/en/IndexEn.tsx`. No changes to `HeroSection.tsx`, `Index.tsx`, FR copy, or any other file.

## Change — `src/pages/en/IndexEn.tsx`

### Imports

Replace the current portrait import block (6 imports of `yanis-portrait-nobg.*`) with the two assets used by FR:

```tsx
import yanisHero from "@/assets/hero-yanis-interior.webp";
import yanisPortrait from "@/assets/yanis-hero-portrait.webp";
```

### `<HeroSection>` props

Replace the current EN props:

```tsx
heroVideo="/hero-interior-720.mp4"
heroVideoPoster="/hero-living-room.webp"
agentImage={yanisPortrait}
agentImageSm={yanisPortraitSm}
agentImageMd={yanisPortraitMd}
agentImageAvif={yanisPortraitAvif}
agentImageSmAvif={yanisPortraitSmAvif}
agentImageMdAvif={yanisPortraitMdAvif}
```

with the exact FR set:

```tsx
heroBgImage={yanisHero}
agentImage={yanisPortrait}
```

All other `<HeroSection>` props on EN (cities, EN title, EN subtitle, EN CTAs, socialProof, agentName, hideRecognitionCard) stay untouched — only background source and portrait source change.

## Preservations

- All EN copy (title, subtitle, subtitleShort, CTA labels/hrefs).
- All sections after the hero (`ValuationWidget`, `PathwaySection`, FAQ, etc.).
- FR homepage and `HeroSection.tsx` are not modified.
- The shared `HeroSection` already handles the `heroBgImage` + single `agentImage` combo identically for both languages, so visual parity follows automatically.

## Expected result

Loading `/en` on any breakpoint shows the same hero background photo and the same right-side portrait as `/`, with English copy overlaid.
