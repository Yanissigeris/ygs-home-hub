## Objective
Bring `src/pages/en/LimbourPageEn.tsx` to E-E-A-T parity with the FR version via 7 exact prop-value replacements. No other files touched.

## Scope
- File: `src/pages/en/LimbourPageEn.tsx` only
- Untouched: `NeighborhoodTemplate.tsx`, `LimbourPage.tsx`, all other EN neighborhood pages
- Preserved as-is: `seoTitle`, `metaDesc`, `ogImage`, `jsonLd`, hero `overline`+`title`, `trustSpecialty`, `inlineCta`, `profilesTitle`, `related`, `guide`, `cta`

## The 7 modifications

### 1. Hero subtitle
Replace `subtitle` with: "Modern family neighborhood in the Gatineau sector, near Hôpital de Gatineau and Highway 50. 2000s-2020s homes, parks, trails, 20 minutes from downtown Ottawa."

### 2. Lifestyle subtitle
Replace `subtitle` with a 3-sentence version covering young families, Ferme Limbour sub-sector, and avoidance of major renovations typical of older neighborhoods.

### 3. Reasons
Expand from 5 to 10 entries. Add: construction era (2000-2020), Centris price range ($475k-$800k), Ottawa savings comparison ($780k Q1 2026 median), Ferme Limbour detail, WQSB English schools, Highway 50 / Macdonald-Cartier Bridge commute, federal commuter angle.

### 4. Profiles
Expand from 4 to 5 cards. Rename "Recent home buyers" → "Move-up buyers". Add "Ottawa relocators" card. Enrich all card descriptions with sub-sector and commute specifics.

### 5. FAQ
Expand from 3 to 7 questions. Add: 2026 pricing, Ottawa savings math, English-language schools (WQSB), services on Boulevard de l'Hôpital, and time-on-market (32 days Q4 2025 / CIO). Keep existing questions but enrich answers.

### 6. Sectors detail
Enrich 3 sector descriptions: Côte-d'Azur (established bungalows, direct neighbor), Gatineau centre (heart of sector), Masson-Angers (developing, accessible prices).

### 7. brokerPerspective (E-E-A-T core)
Insert `brokerPerspective` prop between `guide` and `cta` with:
- `observation`: first-person market view on young families, move-up buyers, Ferme Limbour demand, Ottawa cross-river buyers
- `dataPoint`: 30-40 days under contract for well-prepared homes; sub-sector alignment shortens timeline
- `takeaway`: sub-sector impact on final price ($30k-$50k difference between Ferme Limbour and rest of Limbour)

## Validation
- Single-file diff with 7 hunks
- TypeScript compiles (brokerPerspective already in `NeighborhoodProps`)
- Word count ~330 → ~900 words
- FAQ JSON-LD auto-emits 7 entries
- Other EN neighborhood pages unaffected
