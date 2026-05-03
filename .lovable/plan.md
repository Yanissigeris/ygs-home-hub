## Goal

Use a clean interior photo as the hero background — with no portrait of Yanis baked in — and remove the now-obsolete portrait positioning logic.

## What's already done

- Generated an interior-only version of the hero image (Yanis removed, kitchen/dining/floor reconstructed naturally, same lighting and composition).
- Saved it over `src/assets/hero-yanis-interior.webp` (~51 KB, optimized).

## What remains

### 1. `src/components/HeroSection.tsx`

Remove the `transform: scale(0.88)` + `transformOrigin: "right bottom"` that was added earlier to shrink the baked-in portrait. With no portrait to anchor, the bg image should fill the hero normally.

Result:
```tsx
style={{
  filter: atTop ? "none" : "brightness(0.85) saturate(0.85)",
  transition: "filter 0.35s ease-out",
}}
```

### 2. `src/index.css`

Remove (or simplify to default `center`) the `.hero-bg-image` responsive `object-position` rules previously added to keep Yanis framed across breakpoints. With no subject to track, plain centered cover is correct on every breakpoint.

### 3. No other files touched

- The "agentImage" overlay is already removed from `Index.tsx` (passed only `heroBgImage`).
- Scroll-driven overlay fade (clear at top, dim on scroll) stays as-is.
- All other hero behavior (text, CTAs, animations, mobile rules) untouched.

## Result

Clean editorial interior shot fills the hero on every screen size. Text remains legible on the left thanks to the existing scroll-triggered overlay system. No double imagery, no portrait artifacts.
