# Apply hero contrast fix to 4 neighborhood valuation pages

## Files (4 — all receive identical edits)
- `src/pages/ValuationHullPage.tsx`
- `src/pages/ValuationAylmerPage.tsx`
- `src/pages/en/ValuationHullPageEn.tsx`
- `src/pages/en/ValuationAylmerPageEn.tsx`

## Part A — Insert two text-protect overlays after the `<section>` opening tag

In each file, immediately after `<section className="hero-gradient hero-gradient--with-bg ...">` (line 58) and before `<div className="section-container ...">` (line 59), insert:

```tsx
{/* Left-side text-protect — guarantees headline/subtitle legibility regardless of photo brightness */}
<div
  aria-hidden="true"
  className="absolute inset-0 pointer-events-none hidden md:block"
  style={{
    background: "linear-gradient(90deg, rgba(23,48,59,0.92) 0%, rgba(23,48,59,0.78) 30%, rgba(23,48,59,0.45) 50%, rgba(23,48,59,0.10) 70%, transparent 85%)",
  }}
/>
{/* Mobile vertical text-protect */}
<div
  aria-hidden="true"
  className="absolute inset-0 pointer-events-none md:hidden"
  style={{
    background: "linear-gradient(180deg, rgba(23,48,59,0.85) 0%, rgba(23,48,59,0.70) 50%, rgba(23,48,59,0.55) 100%)",
  }}
/>
```

The existing `.section-container` (line 59) already has `relative`, creating its own stacking context — content sits above the overlays without z-index.

## Part B — Opacity bumps (3 changes per file)

| Line | Element | Before | After |
|---|---|---|---|
| 61 | overline | `text-primary-foreground/25` | `text-primary-foreground/65` |
| 63 | subtitle | `text-primary-foreground/50` | `text-primary-foreground/85` |
| 68 | trust bullets | `text-primary-foreground/40` | `text-primary-foreground/75` |

## Confirmations / not touched
- `src/index.css` `.hero-gradient--with-bg` — shared class, untouched
- `src/pages/ValuationPage.tsx` and `src/pages/en/ValuationPageEn.tsx` — already shipped
- H1 (line 62) untouched in all 4 files
- `<ValuationForm variant="card" ...>` (line 77) untouched
- `<PageMeta>` untouched
- All copy strings (FR + EN) untouched
- Both new overlays are `pointer-events-none` and `aria-hidden="true"`
