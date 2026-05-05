## Goal
Push PageSpeed Performance ≥ 90 by lowering **LCP** (and the TBT/render-blocking work that delays it) on `/` and `/en/`. **Portrait sources, sizes, and preloads are untouched** — every change targets the hero background, font delivery, and the JS that runs in the LCP window.

## Findings (what's hurting LCP today)

1. **Duplicate hero-background preload competing with the portrait.**
   `vite.config.ts` already emits a high-priority **AVIF** preload for the hero background (mobile + desktop, conditioned on `/` and `/en`). On top of that, `HeroSection.tsx` (lines 223–238) runs a `useEffect` that injects a *second* `<link rel="preload">` for the **WebP** original of the same image with `fetchpriority="high"`. Modern browsers pick the AVIF, so the WebP download is wasted bandwidth that contends with the portrait's preload on mobile cellular — directly delaying LCP.

2. **Canvas re-decode of the hero background during LCP window.**
   Lines 442–472 download `heroBgImage` a second time into an `Image()`, decode it, and sample 32×18 pixels in a canvas just to choose overlay opacities. This forces a second decode of the LCP-candidate image and runs a `getImageData` call on the main thread before LCP fires. The values it produces (`bgBrightness`) only swap a few rgba alphas — visually marginal.

3. **Render-blocking-ish Google Fonts CSS.**
   `index.html` preloads + async-swaps the Google Fonts stylesheet, but the actual woff2 files are still discovered late (only after the CSS arrives). On the home page the H1 uses `Cormorant Garamond` and is part of the above-the-fold paint that LCP measures on desktop.

4. **Non-critical components mounted in the hero render path.**
   `SiteLayout` synchronously mounts `JsonLdSchema`, `LangMeta`, `BreadcrumbJsonLd`, `ScrollProgress`, `NavigationProgress`, and `PageTransition` on every route. Several touch the DOM with `useEffect` during hydration, adding TBT inside the LCP window.

5. **`LazySection` for `ValuationWidget` triggers too early.**
   `rootMargin: "400px"` means the Supabase chunk + form code start downloading while the hero is still painting on tall mobile viewports. Bumping to `600–800px` defers it past LCP without the user noticing.

6. **Hero effects scheduled before LCP.**
   Parallax listener, scroll listener, perfMetrics state, and VideoObject JSON-LD `useEffect`s all run on mount even when there is no video on the home page. They add TBT/INP cost and re-renders that compete with the LCP paint.

## Changes

### `src/components/HeroSection.tsx`
- **Remove** the duplicate WebP preload `useEffect` (lines 223–238). Vite's build-time AVIF preload is already in `<head>` with correct `media` queries and `fetchpriority="high"`.
- **Remove** the canvas brightness-sampling effect (lines 442–472) and the `bgBrightness`/`lerp`/derived alpha values. Replace with a single static set of overlay alphas tuned to the existing `0.5` midpoint (the visible look stays the same).
- **Gate** the parallax `useEffect` and the `atTop`/scroll-hint `useEffect` behind a `requestIdleCallback` (fallback `setTimeout(…, 800)`) so they attach after LCP.
- **Skip** the VideoObject JSON-LD `useEffect` and `perfMetrics` state when `heroVideo` is not provided (early-return).
- Keep all portrait `<picture>` markup, `srcSet`, `sizes`, and `fetchpriority` exactly as they are.

### `src/components/SiteLayout.tsx`
- Wrap `JsonLdSchema`, `LangMeta`, `BreadcrumbJsonLd`, `ScrollProgress`, and `NavigationProgress` in the existing `deferredReady` idle gate (already used for `WhatsAppButton`/`CookieConsent`). They are SEO/UX polish, never the LCP element.
- Keep `SiteHeader`, `VisibleBreadcrumb`, and the `<Outlet />` rendered immediately.

### `src/pages/Index.tsx`
- Bump the first `LazySection` (containing `ValuationWidget`, `QuickActionStrip`, `AwardsMarquee`) from `rootMargin="400px"` to `rootMargin="700px"` so the Supabase chunk no longer downloads in parallel with the portrait/hero AVIF on mobile.
- Same change for the second LazySection (PathwaySection block) for consistency.
- No changes to `HeroSection` props.

### `index.html`
- Add explicit `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the two specific font files used in the hero (Cormorant Garamond 600 italic + DM Sans 400) once we know their exact Google Fonts URLs (resolve from a single fetch of the CSS at build/dev time, hard-code the resulting `fonts.gstatic.com` URLs). Saves ~200–400 ms before the H1 swaps to its final font, which is what desktop LCP measures.
- No other markup changes.

### `vite.config.ts`
- Confirm the AVIF preloads include `fetchpriority="high"` (already done — verified at lines around `bm.setAttribute('fetchpriority','high')`). No change needed; listed here so it isn't accidentally regressed.

## Out of scope (explicit)

- **Portrait**: no change to `agentImage*` props, no change to portrait preloads, no change to `<picture>` sources, sizes, or dimensions.
- No change to the published image assets themselves.
- No design/visual changes — overlay alphas pick the current midpoint values so the look matches today's typical state.

## Expected impact

- **LCP**: −300 to −700 ms on mobile (no competing WebP fetch, no second image decode, deferred JS in the hero window).
- **TBT**: −100 to −200 ms (deferred JsonLd/Lang/Breadcrumb/ScrollProgress hydration, removed canvas work, removed video-only effects on home).
- **CLS**: unchanged (no layout-affecting changes).
- Overall PageSpeed Performance should clear 90 on the home routes that are currently in the 70–85 band.

## Verification after implementation

1. Run `lhci autorun` (mobile config) on `/` and `/en/` and report the LCP/TBT deltas.
2. Visually diff hero overlays at top-of-page state — should match current screenshot.
3. Confirm only **one** preload per hero asset appears in the network panel.
