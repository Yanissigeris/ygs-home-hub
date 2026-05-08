## Objective
Bring `src/pages/en/CoteDazurPageEn.tsx` to E-E-A-T parity with the FR version by applying 7 exact prop-value replacements. No template changes, no other files touched.

## Scope
- File: `src/pages/en/CoteDazurPageEn.tsx` only
- Untouched: `NeighborhoodTemplate.tsx`, `CoteDazurPage.tsx`, all other EN neighborhood pages
- Preserved as-is: `seoTitle`, `metaDesc`, `ogImage`, `jsonLd`, hero `overline`+`title`, `guide`, `inlineCta`, `trustSpecialty`, `profilesTitle`, `related`, `cta`

## The 7 modifications

1. **Hero subtitle** — longer, mentions boulevards Maloney/La Vérendrye and 1960s-1990s bungalows + 15-20 min from Ottawa.
2. **Lifestyle subtitle** — 3-sentence version with cross-river Ottawa angle.
3. **Reasons** — 5 → 10 entries with Centris May 2026 range, OREB Q1 2026 $780k median, WQSB schools, transit, time-on-market, etc.
4. **Profiles** — 4 → 5 cards (adds "Ottawa relocators").
5. **FAQ** — 3 → 7 questions, including English-school (WQSB) and Ottawa savings questions.
6. **Sectors detail** — enriched details for Limbour, Gatineau centre, Hull.
7. **brokerPerspective** — new prop inserted between `guide` and `cta`, with English-adapted observation/dataPoint/takeaway (mentions $780k Ottawa comparison).

Each change is a literal block-for-block replacement using the exact text in the brief, indentation preserved (4 spaces before each root prop).

## Validation
- Single-file diff with 7 hunks
- TypeScript compiles (prop already in `NeighborhoodProps`)
- Word count ~330 → ~800-900
- FAQ JSON-LD auto-emits 7 entries
- Other EN neighborhood pages unaffected (no `brokerPerspective` prop)

## Technical detail
The `brokerPerspective` insertion is performed by replacing the existing `guide={...}` line with `guide={...}\n    brokerPerspective={{ ... }}` so no existing line is removed and the new prop sits cleanly between `guide` and `cta`.
