# Fix mobile hero H1 size regression

## Problem

The global mobile rule in `src/index.css` (inside `@media (max-width: 639px)`) sets:

```css
h1 { font-size: clamp(2.4rem, 9.5vw, 3.2rem) !important; line-height: 1.1; }
```

Because of `!important`, it overrides the inline `fontSize: "max(.6rem, .62rem)"` on the new SEO eyebrow `<h1>` in `HeroSection.tsx`, blowing the gold cities line up to ~38px on iPhone. Desktop is unaffected (no `!important` in the desktop rule, so inline style wins).

Fix: add a dedicated class `hero-eyebrow` whose selector specificity (`h1.hero-eyebrow` = 0,1,1) beats the global `h1` (0,0,1) even with `!important`, matching the existing convention used by `h1.hero-h1-fix` and `h1.hero-h1-reduced`.

## Scope

Two files only. No other files touched.

- `src/index.css`
- `src/components/HeroSection.tsx`

## Change 1 — `src/index.css` (insert after line 487)

Insert a new block immediately after the existing `h1.hero-h1-reduced { ... }` rule and before `/* Hero name line — responsive sizing */` (line 489):

```css
/* Hero eyebrow H1 — small uppercase variant, beats global h1 mobile !important rule */
h1.hero-eyebrow {
  font-family: var(--sans) !important;
  font-size: max(.6rem, .62rem) !important;
  font-weight: 600 !important;
  letter-spacing: .22em !important;
  line-height: 1.4 !important;
  margin: 0 !important;
}

@media (max-width: 639px) {
  h1.hero-eyebrow {
    font-size: 0.65rem !important;
    line-height: 1.4 !important;
  }
}
```

## Change 2 — `src/components/HeroSection.tsx` line 673

Add the `hero-eyebrow` class to the rich-variant `<h1>` (only that one):

```diff
- className="hero-fade-in mb-3 sm:mb-6 uppercase font-semibold"
+ className="hero-eyebrow hero-fade-in mb-3 sm:mb-6 uppercase font-semibold"
```

Inline styles (color `#A88A5A`, opacity, textShadow, fontSize, letterSpacing, lineHeight, margin) remain untouched — the new class duplicates the typographic ones with `!important` so the mobile global rule loses, while desktop visual is identical to the previous deploy.

## Preservations

- Compact variant `<h1>{title}</h1>` on internal pages is NOT modified (no `hero-eyebrow` class) — global serif h1 styling stays.
- `hero-h1-fix`, `hero-h1-reduced`, `hero-h1-line`, `hero-name-line` classes untouched.
- All inline styles on the rich `<h1>` preserved (gold color, shadow, etc.).
- No edits to `Index.tsx`, `IndexEn.tsx`, `index.html`, `PageMeta.tsx`, routes, schemas, meta.

## Expected result

- Mobile (<640px), FR + EN: gold uppercase eyebrow ~10–11px, 1–2 lines max.
- Tablet 640–767px: small eyebrow style (~10px from base rule).
- Desktop ≥768px: visually unchanged vs previous deploy.
- Compact-variant pages (e.g. `/aylmer`, `/contact-yanis`): big serif h1 untouched.
- DevTools computed `font-size` on mobile h1 ≈ 10.4px.
