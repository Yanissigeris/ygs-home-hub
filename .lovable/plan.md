# Replace 404 emoji with brand SVG icons

## File
`src/pages/NotFound.tsx` (only file touched)

## Edits

**1. Add 4 inline SVG icon components after imports (top of file)**
- `IconHome` — house outline
- `IconKey` — key outline
- `IconChart` — bar chart outline
- `IconPhone` — phone handset outline

All use `viewBox="0 0 24 24"`, `stroke="currentColor"`, `strokeWidth="1.5"`, `fill="none"`, `aria-hidden="true"`. Accept `width`, `height`, `style` props.

**2. Update both `links` arrays (lines 12–15 EN and 18–21 FR)**
Replace `icon: "🏠"` etc. with component references: `icon: IconHome`, `IconKey`, `IconChart`, `IconPhone` — in the same order as the existing emoji.

**3. Update render (line 107)**
```tsx
<l.icon width={22} height={22} style={{ color: "var(--gold)" }} />
```

## Confirmations
- All copy, link destinations (`to`), titles, descs unchanged
- Card styling, hover handlers (lines 91–116) untouched
- "Retour à l'accueil" button (lines 119–125) untouched
- Helmet/noindex block (lines 26–29) untouched
- No new dependencies (inline SVG, not lucide)
- Icons inherit `var(--gold)` via `currentColor`
