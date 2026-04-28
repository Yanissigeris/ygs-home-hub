# Hide StickyMobileCTA when StickyGuideBanner is present

## Goal
Prevent the two competing sticky bars from overlapping. When a page mounts `StickyGuideBanner`, the `StickyMobileCTA` should not render at all.

## Selector strategy
`StickyGuideBanner`'s visible banner is conditionally rendered (only after `scrollY > 600` and not dismissed), so querying its motion.div is unreliable — at initial mount on a route the banner is not yet in the DOM, so `StickyMobileCTA` would wrongly think it's safe to show.

**Approach:** add a tiny always-mounted, invisible marker element to `StickyGuideBanner`'s top-level fragment:

```tsx
<span data-sticky-guide-banner="true" hidden aria-hidden="true" />
```

This is rendered unconditionally whenever the component is mounted, regardless of scroll/dismissed state. `StickyMobileCTA` queries `document.querySelector('[data-sticky-guide-banner]')` to detect presence.

Why this over alternatives:
- A class on the motion.div doesn't exist until scroll threshold is reached.
- A React context would require wiring a provider in `App.tsx` and touching every page using the banner.
- A custom event would require ordering guarantees between mounts.
- A hidden marker is one line, has zero visual impact, and is 100% reliable.

## Changes

### 1. `src/components/StickyGuideBanner.tsx`
Wrap the existing return in a fragment and add the marker as the first child:

```tsx
return (
  <>
    <span data-sticky-guide-banner="true" hidden aria-hidden="true" />
    <AnimatePresence> ... </AnimatePresence>
    <GuideModal ... />
  </>
);
```

### 2. `src/components/StickyMobileCTA.tsx`
Add detection state + effect, and short-circuit render:

```tsx
const [hasGuideBanner, setHasGuideBanner] = useState(false);

useEffect(() => {
  const t = setTimeout(() => {
    setHasGuideBanner(
      typeof document !== "undefined" &&
      !!document.querySelector('[data-sticky-guide-banner]')
    );
  }, 150);
  return () => clearTimeout(t);
}, [pathname]);

// ...
if (hidden) return null;
if (hasGuideBanner) return null;
```

All other behavior (cookie re-read, scroll threshold, footer-aware hiding, HIDDEN_PATHS) is preserved unchanged.

### 3. Verification
- Run `vite build` + prerender + audits and confirm 198/198 OK.
- Extend `e2e/avatar-cookie.spec.ts` (or add `e2e/sticky-coexistence.spec.ts`) with three cases:
  a) Visit `/investir-plex-gatineau` (has StickyGuideBanner), scroll >55vh, assert `div.fixed a[href]:has-text("Analyser mon projet")` is **not** visible and the `[data-sticky-guide-banner]` marker exists.
  b) Visit `/faq` (no StickyGuideBanner), scroll >55vh, assert StickyMobileCTA **is** visible.
  c) Re-run the existing avatar-cookie test cases unchanged to confirm cookie personalization still works on pages without the guide banner.

## Files touched
- `src/components/StickyGuideBanner.tsx` (1-line marker added)
- `src/components/StickyMobileCTA.tsx` (state + effect + early return)
- `e2e/avatar-cookie.spec.ts` extended OR new `e2e/sticky-coexistence.spec.ts`

## Out of scope
- `src/lib/avatar.ts`, `PathwaySection.tsx`, and all page files remain untouched.
