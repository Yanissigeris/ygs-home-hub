# Mobile "Anchor Corner" Hero — Editorial Composition

## Scope
- **Route**: `/` (and `/en` — both render `<HeroSection>` from the same component) — homepage only.
- **Viewport gate**: every change is scoped to `max-width: 767.98px` via Tailwind mobile-default + `md:` reset, or via `@media` blocks. Desktop (≥768px) stays byte-identical to current production.
- **Files touched**: `src/components/HeroSection.tsx`, `src/components/SiteHeader.tsx`, `src/index.css` (for one keyframe-free `@media` block if needed).

## Findings that change the brief

A few items in the brief don't match the current code; I'll handle them as noted:

1. **No "orphan dark-blue portrait section after the hero CTAs" exists.** The mobile portrait already lives inside `<HeroSection>`, currently centered at the bottom (`left: 50%; transform: translateX(-50%); maxHeight: 60vh`). I'll **reposition** it to bottom-right rather than "hide an orphan section."
2. **The badges (~9 ans | 5★ | Hall of Fame) and NAP (Gatineau | phone | email) are already inside the hero**, absolutely positioned at `bottom: 32px` / `bottom: 8px`. Brief says "leave them visible below hero" — they'll remain visible exactly where they are (still inside the hero box, unchanged). No DOM/SEO change.
3. **Hero already paints at viewport top** — header is `position: fixed`, hero has `min-height: 100svh`, no cream strip exists today. No change needed there.
4. **Existing mobile gradient overlay (z-2) and top scrim (z-15, 150px)** already exist. I'll **replace** the existing mobile gradient with the brief's 3-stop atmospheric overlay, and **add** the left-side text-protect gradient as a new layer. The existing top scrim already covers the brief's "nav scrim" requirement (it's 150px vs 110px requested — leaving as-is keeps desktop identical).
5. **Description paragraph** (lines 628-642) stays in the DOM, hidden via `hidden md:block` on the wrapper — SEO preserved.

## Changes — `src/components/HeroSection.tsx`

All edits live in the main hero `<section>` branch (lines 451-901). The compact branch is untouched.

### A. Mobile gradient overlay (replace, not add)
Lines 544-551 — current mobile overlay is a vertical gradient. Replace its `background` with:
```
linear-gradient(180deg, rgba(23,48,59,0.45) 0%, rgba(23,48,59,0.30) 50%, rgba(23,48,59,0.55) 100%)
```
Stays at `z-[2]`, still `md:hidden` — desktop overlay (lines 534-541) untouched.

### B. New left-side text-protect gradient (mobile-only, new layer at z-[3])
Insert a new `<div>` directly after the mobile overlay, gated `md:hidden`, `pointer-events-none`, `absolute inset-0`, `z-[3]`:
```
linear-gradient(95deg,
  rgba(23,48,59,0.95) 0%,
  rgba(23,48,59,0.88) 30%,
  rgba(23,48,59,0.55) 48%,
  rgba(23,48,59,0.18) 65%,
  transparent 80%)
```

### C. Text content wrapper — bump z-index and constrain width on mobile
Lines 553-557: text container is currently `z-[3]`. Raise to `z-[20]` (above new portrait at z-4 and the new text-protect gradient at z-3 — desktop unaffected because new gradient is `md:hidden`).

Lines 558-563: change wrapper to:
- Mobile: `max-width: 58%`, `padding: 90px 18px 90px 18px`
- Desktop: keep existing `md:max-w-[50%]` and existing `md:pt-[30px] md:pl-[3%]` via the inner div (unchanged)

Implementation: use `className="w-[58%] md:max-w-[50%] md:w-auto"` and inline-style padding scoped via two style objects (mobile default + a `@media (min-width: 768px)` override is unnecessary because the inner `md:pt-[30px] md:pl-[3%]` div already drives the desktop padding). The outer wrapper's `padding` only matters on mobile.

### D. Hide description paragraph on mobile
Lines 628-642: add `hidden md:block` to the `<p>` element's className. Stays in DOM (SEO unaffected); just CSS-hidden below 768px.

### E. Reposition mobile portrait (bottom-right anchor)
Lines 776-801 (the mobile `<img>` inside the second `<picture>`):

Change inline `style` for mobile only:
- `left: 50%` → remove
- `transform: translateX(-50%)` → remove
- Add: `right: 0`, `bottom: 0`
- `maxHeight: "60vh"` → `maxHeight: "75%"` (of hero height)
- Add: `width: "42vw"`, `objectPosition: "bottom right"`
- Remove the radial mask (`WebkitMaskImage` / `maskImage`) on mobile so the portrait is fully crisp at full opacity per brief
- `zIndex: 4` (unchanged — sits above z-3 left-protect gradient on its right side, which has near-zero opacity in that zone)

Also update `sizes` on the `<img>` from `(max-width: 767px) 88vw, 1px` → `(max-width: 767px) 42vw, 1px` so the browser fetches a tier appropriate to the new render width (still uses the existing already-preloaded sm/md tiers — no new asset).

Desktop portrait (`<picture className="hidden md:block">`, lines 706-747) — completely untouched.

### F. Mobile credibility bar / NAP positioning
Currently at `bottom: 32px` and `bottom: 8px` (centered, full width). With the portrait now anchored bottom-right occupying ~42% width up to 75% height, these would visually collide with the portrait on a 390×844 viewport.

Adjustment: on mobile only, constrain the credibility bar (lines 821-871) and NAP (lines 874-898) to `width: 58%` and left-align (`text-align: left`, `padding-left: 18px`) so they sit in the same left zone as the text. Desktop versions use `md:` overrides that already exist (`md:!bg-transparent md:!p-0 md:!mx-0 md:!rounded-none`) — I'll add `md:!w-full md:!text-center md:!pl-0` to fully neutralize the mobile constraints on desktop, restoring the exact current desktop layout.

## Changes — `src/components/SiteHeader.tsx`

The current header is **already** `position: fixed`, transparent background, white text, with `paddingTop: env(safe-area-inset-top)`. Logo + hamburger already render in cream/white over the hero. The brief asks for a transparent → solid-on-scroll transition.

Add scroll-state behavior (mobile-only):

1. Inside the `SiteHeader` component, add a `scrolledMobile` state. Currently `const scrolled = false;` (line 249) is hardcoded.
2. Add a `useEffect` that:
   - Checks `window.matchMedia('(max-width: 767.98px)').matches` — early-return if false.
   - Adds a `scroll` listener (passive: true) using `requestAnimationFrame` debounce.
   - Sets `scrolledMobile = true` when `window.scrollY > 80`, `false` otherwise.
   - Re-checks on resize (re-add/remove listener if breakpoint crosses).
3. Modify `headerStyle` so that on mobile when `scrolledMobile` is true:
   - `background: 'rgba(23,48,59,0.92)'`
   - `backdropFilter: 'blur(12px)'`, `WebkitBackdropFilter: 'blur(12px)'`
   - `borderBottom: '1px solid rgba(217,225,229,0.15)'`
   - `transition: 'background-color 220ms ease, backdrop-filter 220ms ease'`
   - `willChange: 'background-color'`
4. Apply the solid-state styles **only** when `scrolledMobile && isMobileViewport`. Desktop-default values (`background: transparent`, no border) are preserved on every desktop render. The state can never become `true` on desktop because the listener early-returns.
5. Logo filter and link colors stay `#FFFFFF` always (matches the brief: cream over hero; "revert to original solid-mode colors" — current solid-mode colors ARE white over the dark blue, which still has good contrast).

No DOM/structure change; only style values driven by state. Desktop branch (`hidden md:flex` block, lines 325-379) renders identical CSS because `scrolledMobile` only mutates style under the mobile media check.

## Z-index map after changes (mobile)

```
z-15  top scrim (existing)
z-50  header (fixed)
z-20  text content
z-6   scroll chevron
z-5   credibility bar + NAP
z-4   portrait (bottom-right anchor)
z-3   left-side text-protect gradient (NEW, md:hidden)
z-2   atmospheric base overlay (modified, md:hidden)
z-1   poster image / video background
```

The portrait at z-4 sits **above** the left-protect gradient at z-3, so its right side stays fully clear (gradient is near-transparent past 65% width anyway). Text at z-20 sits above the portrait but is constrained to 58% width on mobile, so it never visually overlaps the portrait region.

## Verification plan

Once implemented, I'll:
1. Take a desktop screenshot at 1440×900 of `/` and `/en` and compare against current production. Must be visually identical.
2. Take a mobile screenshot at 390×844 and confirm: portrait bottom-right, text upper-left, no overlap, headline legible, navbar transparent at top.
3. Scroll-test mobile: past 80px → navbar solid dark with blur; back to top → transparent.
4. Confirm the description `<p>` is in the DOM (via view-source) but not visible on mobile.
5. Check console: no errors, no layout shift warnings.

If any desktop pixel changes or any mobile check fails, I'll revert the offending step and report which one.
