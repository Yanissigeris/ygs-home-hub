## Goal

Make the main hero variant render the `secondaryCta` prop that `Index.tsx` already passes (`{ label: "Consultation", href: "/contact-yanis" }`). Currently only the compact variant renders it; the main hero ignores it.

## File to change

`src/components/HeroSection.tsx` — single surgical edit at lines 559–586.

## Change

Replace the existing `{primaryCta && (<motion.div ...>...</motion.div>)}` block with a version that:

1. Gates the wrapper on `(primaryCta || secondaryCta)` instead of just `primaryCta`.
2. Adds flex layout classes to the existing `motion.div`: `flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5` (preserves `mt-6 sm:mt-7` and the `delay: 0.4` animation).
3. Keeps the existing primary `<Link>` exactly as-is (same styling, same `trackCTAClick(..., "hero-primary")`).
4. Adds a second conditional `<Link>` for `secondaryCta` styled as a subtle ghost text-link with bottom-border (matching the compact variant's pattern at lines 370–372): rgba white text, 1px bottom border, `.85rem`, weight 500, with `trackCTAClick(..., "hero-secondary")`.

Exact replacement block is the one provided in the user's request (the `{(primaryCta || secondaryCta) && ...}` snippet).

## Out of scope (explicitly not touched)

- Compact hero variant (already correct)
- `HeroSectionProps` interface
- `Index.tsx` / `IndexEn.tsx` (already pass `secondaryCta`)
- Portrait, video, gradients, other motion blocks, h1/h2/p
- Any other component or route

## Acceptance

- Desktop ≥640px: primary button + secondary text-link on same row with `gap-5`.
- Mobile <640px: stacked vertically with `gap-3`.
- Primary keeps `#A88A5A` filled styling; secondary is a subtle underlined text link, not a second button.
- Both fire `trackCTAClick` with `"hero-primary"` / `"hero-secondary"`.
- Animation `delay: 0.4` preserved.
- No regression on compact variant or other pages.
