# Hero credibility bar — better visibility, still elegant

The "~9 ans · 300+ transactions · 5★ Google · Hall of Fame" line is currently rendered at low opacity (`rgba(255,255,255,0.62)` text + `0.7` icons) with no background panel on desktop, so it disappears against bright hero photography. The mobile version is a tiny single line (`~9 ans | 5★ Google | Hall of Fame 2024`) without icons. We'll lift contrast on both, in both languages, without changing the layout, structure, or any other section.

## Scope — single file

`src/components/HeroSection.tsx`, only the credibility bar block (lines ~969–1049). NAP bar, headings, CTAs, footer, mobile Contact section below the hero, animations, colors elsewhere — all untouched.

## Changes

### 1. Desktop credibility bar wrapper (lines ~969–993)

- **Text color**: `rgba(255,255,255,0.62)` → `rgba(255,255,255,0.92)` for stronger legibility.
- **Text shadow**: `0 1px 6px rgba(0,0,0,0.5)` → `0 1px 8px rgba(0,0,0,0.65)` for safer contrast on bright photo areas.
- **Restore the elegant pill on md+**: remove the `md:!bg-transparent md:!backdrop-blur-0 md:!p-0 md:!rounded-none` overrides on the inner div so the subtle dark-tinted blurred pill (`rgba(23,48,59,0.6)` + `blur(4px)`) is visible on desktop too. Keep it inline-block, centered (existing flex/center wrapper) so it reads as a single elegant chip rather than full-width.
- Tighten padding to `10px 18px` and round to `9999px` (pill) for a more editorial feel.
- Keep `letter-spacing: 0.14em`, uppercase, `clamp(0.7rem, 1.6vw, 0.85rem)` — design language unchanged.

### 2. Icons inside FR + EN desktop variants (lines ~999, 1004, 1009, 1014, 1021, 1026, 1031, 1036)

- Icon color: `rgba(255,255,255,0.7)` → `rgba(255,255,255,0.95)`.
- Separator dots `·`: `opacity-50` → `opacity-70` for better rhythm without harshness.
- The 5★ link gains `md:hover:text-white` to match NAP hover affordance (subtle, no underline added).

### 3. Mobile credibility line (lines ~1042–1049)

Replace the single tiny `<span>` with a centered, two-line elegant block (still no icons to keep it light), in both FR and EN:

```
[gold overline]                ESSENTIEL / HIGHLIGHTS
[bold contrast line]   ~9 ans  ·  300+ transactions
                       5★ Google  ·  Hall of Fame 2024
```

Concretely:
- Wrapper: `text-center` block with `padding: 8px 14px`, same dark blurred pill (`rgba(23,48,59,0.6)` + `blur(4px)`, radius `9999px` if it fits, else `10px`).
- Overline: same gold (`var(--gold)`), `0.55rem`, `letter-spacing: 0.18em`, uppercase, FR `Essentiel` / EN `Highlights`.
- Stats line: `0.78rem`, `rgba(247,244,238,0.95)`, `font-weight: 500`, separator `·` at `opacity 0.55`. Use FR/EN strings already present, just laid out on two lines via `<br />` after the second item to avoid horizontal overflow on 320px screens.
- Keep the existing mobile bottom gradient (line ~954) — it already darkens the area, helping legibility.

### 4. Out of scope (unchanged)

- NAP bar (Bureau / Cellulaire / Email) — already updated last sprint.
- Mobile Contact card section below the hero (lines ~1102–1125).
- All headings, CTAs, ScrollChevron, Framer Motion, animations, footer, header, JSON-LD, meta, SEO, routes, colors elsewhere, tokens, fonts, assets, images, logos.
- All other pages and components.

## Validation checklist

1. Desktop FR + EN: credibility text reads clearly over bright + dark areas of the hero image; subtle blurred pill visible behind it.
2. Mobile FR + EN: two-line credibility block with gold overline + stronger white stat line; no horizontal overflow at 320px.
3. Icons (calendar, home, star, trophy) clearly visible on desktop, same color/size, just brighter.
4. 5★ link still navigates to `/temoignages` (FR) / `/en/testimonials` (EN).
5. NAP bar below, footer, headings, CTAs — visually identical to current state.
6. No layout shift, no font/typography change, no new asset.