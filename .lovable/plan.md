# ValuationPage hero legibility fix

## File
`src/pages/ValuationPage.tsx` (only file touched)

## Part A — Insert two text-protect overlays after line 69

Insert immediately after the existing `top-0 h-12` overlay (line 69), before the portrait `motion.div` (line 72):

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

Sit naturally below the form container (line 97 has `z-10`). No z-index needed.

## Part B — Opacity bumps

- **Line 115** subtitle (desktop): `text-primary-foreground/45` → `text-primary-foreground/85`
- **Line 119** subtitle (mobile): `text-primary-foreground/45` → `text-primary-foreground/85`
- **Line 126** trust bullets: `text-primary-foreground/40` → `text-primary-foreground/75`
- **Line 134** credibility strip: `text-primary-foreground/20` → `text-primary-foreground/55`

## Confirmations
- `src/index.css` `.hero-gradient--with-bg` NOT touched (shared class)
- H1 (line 110) NOT touched
- Portrait block (lines 72–95) NOT touched
- `<SEO>`, `<PageMeta>`, `<ServiceJsonLd>` NOT touched
- `<ValuationForm variant="glass">` (line 146) NOT touched
- Both new overlays `pointer-events-none`
- Left overlay fades to transparent by 85% so portrait + form area on right stay visible
