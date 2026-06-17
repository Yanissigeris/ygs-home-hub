The hero background image in `HeroSection.tsx` will be made unconditionally visible from the initial/server render, removing any JS-gated display logic.

### Target file
- `src/components/HeroSection.tsx`

### What will change
1. **Remove JS-gated visibility on the background image.** Any `display:none`, conditional `style` attribute, `loaded` state, or `onLoad`/`onError` handler that toggles the visibility of the `heroBgImage` `<img>` will be stripped so the photo is present as soon as the browser decodes it.
2. **Keep all existing performance attributes.** The `<picture>` wrapper with mobile/desktop AVIF `source`s, `loading="eager"`, `decoding="async"`, `fetchpriority="high"`, `sizes="100vw"`, and the build-time `<link rel="preload">` for the background AVIF in `vite.config.ts` remain untouched.
3. **Blur-to-sharp effect.** If a blur-up or opacity transition tied to an `onLoad` event exists on the background image, it will be reimplemented as a pure CSS transition (e.g. `opacity` or `filter` on the image with a short CSS transition) or removed entirely. No JavaScript state will gate the reveal.
4. **Preserve the section placeholder color.** The `<section>` keeps `backgroundColor: "var(--ink)"` so any micro-gap before the image paints stays on-brand.
5. **No changes to other hero elements.** The portrait image (`agentImage`), all prerendered text content, JSON-LD schema, CTA buttons, and gradient overlays are left exactly as-is. Only the background image's visibility logic is touched.

### Result
The interior photo behind the hero will appear immediately on first paint instead of waiting for the JS bundle to hydrate, eliminating the flash-of-delayed-background and the preload race condition.