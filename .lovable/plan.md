# Sprint A11y-Critical — Plan (révisé)

## FIX 1 — `aria-hidden` on decorative Lucide icons

### `src/components/ValuationForm.tsx` (5 icons)
Add `aria-hidden="true"`:
- L300 `<Lock size={13} />`
- L500 `<BadgeCheck size={13} />`
- L503 `<Lock size={13} />`
- L506 `<Shield size={13} />`
- L509 `<Clock size={13} />`

L485/487 already correct.

### `src/components/HeroSection.tsx`
**Verified:** all 8 icon usages L1019–1064 already pass `aria-hidden="true"` and props are spread onto root `<svg>` (L9–28). **No change needed.**

## FIX 2 — Dead `#avis` links → `<Link to="...">`

`src/components/HeroSection.tsx` — `Link` already imported L2.

- L1032 (EN): `<a href="#avis" className=... style=...>` → `<Link to="/en/testimonials" className=... style=...>` (closing tag → `</Link>`). Route verified `App.tsx` L330.
- L1054 (FR): `<a href="#avis" className=... style=...>` → `<Link to="/temoignages" className=... style=...>` (closing tag → `</Link>`). Route verified `App.tsx` L280.

`className`, `style`, inner content unchanged. Avoids full reload, preserves `PageTransition`.

## FIX 3 — `SuccessMessage` live region

`src/components/SuccessMessage.tsx` — add `role="status"` and `aria-live="polite"` to root `<div>`.

## Files changed
- `src/components/ValuationForm.tsx` (5 lines)
- `src/components/HeroSection.tsx` (2 anchors → Link)
- `src/components/SuccessMessage.tsx` (1 line)

No visual changes, no route/JSON-LD/meta/token changes.
