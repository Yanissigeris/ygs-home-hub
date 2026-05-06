## Goal

Make the header on tablet and desktop behave like mobile: transparent at the top of the page, then transition to solid dark blurred background after scrolling past 80px. Apply on all routes (not just homepage).

## Changes — `src/components/SiteHeader.tsx`

1. **Rename `mobileScrolled` → `scrolled`** (the existing `const scrolled = false` placeholder will be replaced by the real state).

2. **Remove the mobile-only gates** in the scroll effect:
   - Drop the `(max-width: 767.98px)` matchMedia guard and its attach/detach plumbing.
   - Drop the `isHomepage` early return so the listener runs on every route.
   - Keep the rAF-throttled `window.scrollY > 80` check and `passive: true` listener.

3. **Header style** already keys all visuals (background, blur, border, transition) off the scrolled flag — no change needed beyond renaming the variable reference.

4. **Logo / header height** currently uses the dead `scrolled = false` placeholder to shrink from 70→62px and logo 52→47px. With real `scrolled`, the desktop header will now subtly compress on scroll alongside the background change. Confirm this is desired (it matches the "premium agency" feel) — if you'd rather keep height fixed, we'll leave the height/logo numbers static and only swap background.

5. No changes to text colors: white nav text remains readable both over hero imagery (transparent state) and over the dark blurred bar (scrolled state).

## Out of scope

- No changes to `MobileNavDrawer`, `LanguageSwitch`, or any page components.
- No new props or breakpoints introduced.