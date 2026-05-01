# Remove BrandedLoader splash screen

Surgical removal of the dark "YGS" splash overlay shown on first load. No other changes.

## Changes

**1. Delete `src/components/BrandedLoader.tsx`**
Full file removal.

**2. `src/App.tsx`**
- Line 6: remove `import BrandedLoader from "@/components/BrandedLoader";`
- Line 371: remove `React.createElement(BrandedLoader),` from the LanguageProvider children. Becomes:
  ```ts
  React.createElement(LanguageProvider, null, React.createElement(ScrollToTop), routeTree),
  ```

**3. `src/components/PageTransition.tsx` (line 12, comment only)**
- `*   - First load: no overlay (BrandedLoader handles it)` → `*   - First load: no overlay (no overlay needed)`

## Guarantees

- No SEO/JSON-LD/meta/canonical/H1/H2/URL changes.
- No styling, layout, animation, or routing changes elsewhere.
- Bilingual FR/EN both covered (single shared component).
- Hero H1 will appear directly with its existing Framer Motion animation.

## Post-deploy validation

- Home (FR `/` and EN `/en`): no black "YGS" splash on load.
- No console errors about missing `BrandedLoader` import.
- Hero H1 renders immediately with current entrance animation.
