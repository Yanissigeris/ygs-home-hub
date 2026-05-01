# Remove the "YGS" inter-page splash overlay

## Diagnostic

The dark "YGS" screen the user keeps seeing is **not** the old `BrandedLoader` (already deleted). It is the **`PageTransition` overlay** in `src/components/PageTransition.tsx`:

- On every route change it renders a fixed full-screen `#17303B` `<div class="ygs-page-overlay">` containing `<span class="ygs-page-overlay__mark">YGS</span>`.
- The overlay slides up (cover, 350ms), swaps the page, then slides off (reveal, 350ms).
- If the next page is slow to mount (lazy chunk, slow TTFB, hydration hiccup), the cover phase stays on screen and the user sees a dark "YGS" splash that "just stays" — exactly what the screenshots show.

This component wraps every route in `App.tsx`, so it appears site-wide.

## Fix (surgical, 3 small edits)

**1. `src/components/PageTransition.tsx`** — replace the whole file with a transparent passthrough that just renders children. No overlay, no timers, no animation, no scroll side-effects beyond what React Router already does. Keeps the default export so `App.tsx` and any other importers continue to work without changes.

```tsx
const PageTransition = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export default PageTransition;
```

**2. `src/index.css`** — remove the now-unused overlay CSS (lines ~695-736): the `@keyframes ygs-overlay-cover`, `@keyframes ygs-overlay-reveal`, `.ygs-page-overlay`, `.ygs-page-overlay.cover`, `.ygs-page-overlay.reveal`, `.ygs-page-overlay__mark` rules. Keep `@keyframes ygs-page-fade` and `.page-fade-in` only if still referenced elsewhere; otherwise remove them too (will verify with `rg` before deleting).

**3. No change needed to `App.tsx`** — `PageTransition` stays imported and wrapping routes; it just becomes a no-op.

## Guarantees

- No SEO / JSON-LD / meta / canonical / hreflang / H1 / URL changes.
- No routing, layout, or component-tree changes.
- No change to the homepage `ygs-prepaint` shell in `index.html` (that one is the *first-paint* hero placeholder and is hidden the moment React mounts — it is NOT the splash the user is complaining about; verified by the screenshot showing only "YGS" centered, which matches `.ygs-page-overlay__mark` styling, not the prepaint hero text).
- Bilingual FR / EN both covered (single shared component).
- Framer Motion entrance animations on hero / sections remain untouched.

## Post-deploy validation

- Navigate `/` → `/aylmer` → `/contact` → `/en` on mobile and desktop: no dark "YGS" overlay should ever appear between pages.
- Hard reload `/` and `/en`: hero renders directly with its existing animation (no splash).
- Console: no errors or missing CSS class warnings.
- Visual: page-to-page navigation is instant (or whatever the route-chunk download takes), without the dark cover.
