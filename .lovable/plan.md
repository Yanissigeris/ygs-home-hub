## Plan

Three small, isolated changes. No routing, no SEO impact, no edits to existing card components.

---

### 1. New data file `src/data/sold-properties.ts`

Export a `SoldProperty` type and a `soldProperties` array with 6 placeholder entries (clearly marked as placeholders so the user can swap them with real Centris data).

```ts
export interface SoldProperty {
  id: string;
  image: string;        // imported asset or /placeholder.svg
  city: string;
  address: string;
  soldPrice: string;    // pre-formatted "725 000 $" / "$725,000"
  daysOnMarket?: number;
  percentOfAsking?: number;
  type: string;
}
```

For images, reuse existing `@/assets/property-*.webp` files (they're already in the bundle and 4:3) so the placeholders look real until replaced. No new asset files.

A parallel EN-formatted version isn't needed — prices are placeholder strings; the FR file is the single source of truth and the component formats labels per locale.

---

### 2. New component `src/components/RecentSolds.tsx`

Mirror `FeaturedProperties.tsx` structure exactly: `section-rhythm section-gold-divider`, `var(--cream)` background, header row with overline + H2 + desktop "see all"-style spot (omit the link since solds aren't listable — replace with subtitle line below H2 instead), 3-col desktop grid, mobile horizontal snap scroll.

**Bilingual copy via `t` map (same pattern as `FeaturedProperties`):**

| key | FR | EN |
|---|---|---|
| overline | `VENTES RÉCENTES` | `RECENT SALES` |
| title | `Le marché en mouvement` | `The market in motion` |
| subtitle | `300+ transactions complétées en Outaouais — voici quelques ventes des derniers mois.` | `300+ completed transactions in Outaouais — here are a few recent sales.` |
| statusSold | `VENDU` | `SOLD` |
| daysLabel | `Vendu en {n} jours` | `Sold in {n} days` |
| askingLabel | `{p}% du prix demandé` | `{p}% of asking price` |
| viewLabel | `Voir la fiche` | `View listing` |

Card differences vs `FeaturedProperties`:
- Status badge text `VENDU`/`SOLD`, background `var(--ink)` (same as existing — already ink), kept identical styling.
- Below the price (Cormorant), add a 13px DM Sans line in `var(--gold)` with either `daysOnMarket` or `percentOfAsking` (prefer days if both present; show whichever exists).
- Bottom "Voir la fiche →" rendered as a plain `<span>` (no `href`, no `<a>`/`<Link>`) — same gold color and arrow, but non-interactive, no hover translate.
- Outer wrapper is a `<article>` instead of `<a>` — no link, no hover lift (or keep the lift but without click). Keep the gold top border + subtle hover for visual parity.

Header: include the kicker + H2 + a subtitle paragraph beneath the H2 (not in `FeaturedProperties` but the user asked for it). No "view all" link on desktop, no mobile bottom link.

Props: `lang?: "fr" | "en"` — defaults to `"fr"`.

Semantics: `<section>` → `<h2>` → cards. Each card is an `<article>`. No new JSON-LD.

---

### 3. Insert into `src/pages/Index.tsx`

Between line ~67 `<FeaturedProperties />` and the following `cream-to-dark` fade bridge, add:

```tsx
<RecentSolds />
```

Add an import. No other changes to `Index.tsx`. The EN homepage (`IndexEn.tsx`) is **not** modified per the user's request scope (only `src/pages/Index.tsx` mentioned). If the user wants EN parity later, it's a one-line add.

---

### 4. Soften vertical-stacked H2s

**Root cause** (verified by reading the files): neither component uses word-per-line CSS. The narrow titles come from cramped grid columns:

- `TestimonialGrid.tsx` line 103: `md:grid-cols-[220px_1fr]` — the 220px sidebar is too narrow for a 4-word H2 at the current heading size, forcing each word to its own line.
- `HomeFAQTeaser.tsx` line 49: `lg:grid-cols-[1fr_2fr]` — left column is ~33% of container; "Questions fréquentes" wraps to 2-word stacks on some widths.

**Fix:**

- `TestimonialGrid.tsx` line 103: change `md:grid-cols-[220px_1fr]` → `md:grid-cols-[minmax(260px,300px)_1fr]` so the sidebar is wide enough for the H2 to wrap on 1–2 natural lines without changing the visual sidebar feel.
- `HomeFAQTeaser.tsx` line 49: change `lg:grid-cols-[1fr_2fr]` → `lg:grid-cols-[minmax(280px,1fr)_2fr]` (effectively the same proportion but guarantees enough width for the H2 to breathe).

No text changes. No other styles touched. All other classes preserved.

---

### Files changed

- ➕ `src/data/sold-properties.ts`
- ➕ `src/components/RecentSolds.tsx`
- ✏️ `src/pages/Index.tsx` (1 import + 1 element)
- ✏️ `src/components/TestimonialGrid.tsx` (1 class change on line 103)
- ✏️ `src/components/HomeFAQTeaser.tsx` (1 class change on line 49)

### Out of scope (not touched)

- `FeaturedProperties.tsx`, routing, SEO components, EN homepage `IndexEn.tsx`, all other pages.
