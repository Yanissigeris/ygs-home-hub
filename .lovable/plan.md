# AwardsMarquee: Trim items array from 8 to 3

## Single file edit
**`src/components/AwardsMarquee.tsx`** — lines 3–12

Replace the 8-string `items` array with a 3-string array, in this exact order:

```ts
const items = [
  "Club Platine RE/MAX",
  "Club 100% RE/MAX",
  "Service bilingue FR/EN",
];
```

## Confirmations
- Only 1 file edited: `src/components/AwardsMarquee.tsx`
- `items` array reduced from 8 → 3 strings
- Order: Club Platine RE/MAX → Club 100% RE/MAX → Service bilingue FR/EN
- ALL other code in the file untouched: CSS variables, defaultVars, forwardRef, JSX structure, both `{items.map(...)}` blocks (the duplicate render for the seamless loop continues to map over the same array), `animationDuration: "var(--marquee-speed, 15s)"`, mask gradients, gold bullet styling, mobile responsive `<style>` block — all unchanged
- No other files modified: `Index.tsx`, `IndexEn.tsx`, `index.css`, hero, footer, JSON-LD, SEO meta — all untouched

## Effect
Strip cycles through 3 unique credentials instead of 8 (5 of which duplicated hero/footer/JSON-LD content). Same 15s animation duration → faster visible cycle. Net SEO impact: slightly positive (3 new surface keywords, 0 lost since removed items exist elsewhere).
