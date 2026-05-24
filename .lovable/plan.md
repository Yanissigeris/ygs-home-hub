## Goal
Add the new rental listing (310 boul. d'Europe, **app. 6**, MLS 19674845) to both data files and surface it on `/proprietes` and `/en/properties`.

## Changes

### 1. `src/data/properties.ts`
- Extend `Property.status` union: `"active" | "sold" | "pending" | "rent"`.
- Append FR entry:
  - id/mls `19674845`, status `"rent"`
  - address `310 Boul. d'Europe, app. 6`
  - city `Gatineau (Aylmer — Plateau de la Capitale)`
  - price `2 050 $/mois`, type `Condo — Appartement (location)`
  - bedrooms `2`, bathrooms `1`, area `1 240 pi²`, yearBuilt `2009`
  - description (FR): plafonds 9 pi, électros inclus, climatiseur mural, 1 stationnement, remise + patio privés, dispo 1er juin 2026
  - remaxUrl: provided listing URL
  - image: `@/assets/property-19674845.webp`

### 2. `src/data/properties-en.ts`
- Same entry, EN: `apt. 6`, `$2,050/month`, `Condo — Apartment (for rent)`, `1,240 sq ft`, translated description.

### 3. `src/assets/property-19674845.webp`
- Download `https://media.remax-quebec.com/img/www_full/0315/m19674845-pri01-01.jpg` (high-res) and convert to webp via imagemagick.

### 4. `src/components/PropertyCard.tsx`
- Add i18n: `rent: "À LOUER"` / `rent: "FOR RENT"`.
- Extend `statusLabel` ternary to handle `"rent"`.
- Render the status label as a pill **only when `status === "rent"`** using Tailwind utilities (consistent with the rest of the file): wrap the label in `<span className="inline-block bg-[#A88A5A] text-[#F7F4EE] px-2 py-0.5 rounded-sm">…</span>`. Other statuses keep the existing gold-text-no-background look unchanged.
- Card click: no change. The card is already an `<a target="_blank" rel="noopener noreferrer" href={property.remaxUrl}>`, so rentals already open the RE/MAX listing in a new tab as required.

### 5. `src/pages/PropertiesPage.tsx` + `src/pages/en/PropertiesPageEn.tsx`
- Active-section filter: `["active","rent"].includes(p.status)` (Option A).
- Section heading copy update:
  - FR: `Mes propriétés à vendre` → `Mes propriétés actuelles`
  - EN: `My properties for sale` → `My current listings`
- Sold section unchanged.

No other files, copy, analytics, routes, or styles change.
