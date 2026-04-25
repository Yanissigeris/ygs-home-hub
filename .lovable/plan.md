## Surgical microdata cleanup in `src/components/ValuationWidget.tsx`

Identified the file by its unique markers (eyebrow, heading, `valuation_leads` insert, analytics events). Applying exactly 4 deletions, no other changes.

### Edit 1 — `<section>` opening tag (lines 165–173)

Remove only the two microdata attributes; keep `style` and the rest intact.

Before:
```tsx
<section
  style={{
    background: "#fff",
    paddingTop: isMobile ? "4rem" : "6rem",
    paddingBottom: isMobile ? "4rem" : "6rem",
  }}
  itemScope
  itemType="https://schema.org/RealEstateAgent"
>
```

After:
```tsx
<section
  style={{
    background: "#fff",
    paddingTop: isMobile ? "4rem" : "6rem",
    paddingBottom: isMobile ? "4rem" : "6rem",
  }}
>
```

### Edit 2 — Inner `<meta>` microdata tags (lines 503–504)

Delete both lines entirely.

Before:
```tsx
          <meta itemProp="areaServed" content="Gatineau, Aylmer, Hull, Outaouais" />
          <meta itemProp="priceRange" content="Free valuation" />
```

After: (lines removed; surrounding `</div>` structure unchanged)

### Scope guarantees

- Only `src/components/ValuationWidget.tsx` is touched.
- All visible content (heading "Combien vaut votre propriété?", eyebrow, buttons, form, success state) preserved.
- All logic (Supabase `valuation_leads` insert, analytics `evaluation_widget_step1` / `evaluation_widget_submitted`, state, handlers) preserved.
- No other files modified — blog markdown anchors containing "Free valuation" are untouched.

Resulting diff: 2 attributes removed from the `<section>` opening tag + 2 `<meta>` elements deleted. Nothing else.