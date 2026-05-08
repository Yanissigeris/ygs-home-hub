# Fix the 29 pages flagged by Semrush "low text/HTML ratio"

Goal: bring every flagged page above the ~0.10 ratio threshold by enriching prose/FAQ/profiles, while staying inside the existing design system. Reuse the Phase B `brokerPerspective` + 7-prop pattern wherever the page is rendered through `NeighborhoodTemplate`, and apply an equivalent E-E-A-T treatment to custom pages (extra `ContentBlock` + `FAQSection` + market-data prose).

## Inventory (29 URLs grouped by template)

**A. NeighborhoodTemplate, already enriched (verify only — Semrush crawled before deploy)**
- `/val-des-monts`, `/en/val-des-monts`
- `/masson-angers`, `/en/masson-angers`

**B. NeighborhoodTemplate, needs Phase B enrichment (4 pages)**
- `/cote-dazur-gatineau`, `/en/cote-dazur`
- `/limbour`, `/en/limbour`

**C. Custom layout neighborhoods (5 pages — bespoke content blocks)**
- `/en/buckingham`, `/en/chelsea`, `/en/hull`, `/en/plateau`, `/en/pontiac`

**D. Service / hub / overview pages (16 pages — bespoke content blocks)**
- FR: `/`, `/guide-vendeur-gatineau`, `/vendre-un-plex-a-gatineau`, `/vivre-a-aylmer`, `/vivre-a-hull`, `/quartiers-a-considerer-a-gatineau`
- EN: `/en/buy`, `/en/buy-from-ottawa`, `/en/contact`, `/en/home-valuation`, `/en/neighborhoods`, `/en/oaciq-find-a-broker`, `/en/outaouais-real-estate-agent`, `/en/plex`, `/en/properties`, `/en/realtor-commission-quebec`

## Strategy per group

**Group A — verify only.** Re-read the four files, confirm word counts match the Phase B targets (~870–920 words). If yes, no-op (next Semrush crawl will clear them). If a page is missing a hunk, top it up. No new copy unless gaps are found.

**Group B — apply the Phase B 7-prop pattern.** Same recipe used on Val-des-Monts and Masson-Angers:
1. Enrich `hero.subtitle` with one extra factual sentence (commute, sub-sectors, price band).
2. Expand `lifestyle.subtitle` to 3 sentences (target buyers, geography, value vs neighbouring areas).
3. Grow `reasons` to 9–10 entries with Centris/CSSCV/CIO data points.
4. Enrich `profiles` (4–5 cards) with school names, price ranges, financing levers.
5. Grow `faq` to 6–7 entries with verifiable numbers.
6. Enrich `sectors` with adjacent neighbourhoods and trade-offs.
7. Add `brokerPerspective` (observation / dataPoint / takeaway) between `guide` and `cta`.
Target: ~340 → ~880 words per page, FR/EN parity, accents preserved.

**Group C — custom neighborhood pages.** They don't go through `NeighborhoodTemplate`, so I add three reusable building blocks per page:
- one `ContentBlock` "About the area" (≈180 words) anchored on Centris May-2026 prices, schools, transport.
- one `ContentBlock` "Who is buying here" (≈140 words) — buyer profiles + financing levers.
- one `FAQSection` with 6 entries (auto-emits FAQPage JSON-LD; harmless dedupe with existing schema since we removed the `NeighborhoodTemplate` duplicate).
Optional `BrokerPerspective` block where a Yanis quote fits naturally.
Target: +500 visible words per page.

**Group D — service / hub pages.** Same three-block recipe as Group C, tuned to the page intent (selling guide, plex, valuation, contact, etc.):
- "How this works in Gatineau" prose block with concrete CMQ/CIO numbers.
- "What to know before you start" prose block with FR-Quebec specifics.
- 5–7 entry FAQ.
For `/en/contact` and `/en/home-valuation` (transactional pages above the form), keep the form first: new prose lives **below** the form so we don't push CTAs down.

## Execution order (4 phases, one batch per phase)

1. **Phase 1 — Group A verification + Group B (Côte-d'Azur, Limbour FR/EN).** 4 enrichments, low risk, mirrors prior Phase B work.
2. **Phase 2 — Group C custom neighborhoods (Buckingham, Chelsea, Hull, Plateau, Pontiac EN).** 5 files.
3. **Phase 3 — Group D EN service pages.** 10 files.
4. **Phase 4 — Group D FR service pages + `/`.** 6 files.

I'll request approval per phase rather than 29 files in one shot, so you can sanity-check the tone before it propagates.

## Guardrails (memory rules)

- Bilingual parity: every FR change has an EN twin and vice-versa.
- Canadian English on EN side, French (accents preserved) on FR side.
- No scroll animations, no chat widgets, no chain-of-thought in copy.
- Reuse design tokens (`--gold-bright`, semantic colors); no hardcoded hex.
- Numbers must respect the Evergreen Content Policy — phrased as ranges or "as of May 2026", not absolutes that age badly.
- Privacy Constraints respected — no client names or addresses in case studies.
- No new dependencies, no schema changes, no routing changes.

## Out of scope

- Blog articles (not flagged).
- 404, /admin/image-gen, /merci*, legal pages (not flagged, intentionally short).
- Hreflang work (already shipped in the previous turn).
- Visual redesign — text-only additions inside existing components.

## Verification per phase

- Read the file(s) back, confirm hunks landed and accents intact.
- Eyeball word count diff (`wc -w` before/after).
- TypeScript check via the harness.
- No need to re-run Semrush — the next scheduled crawl will reflect the new ratios.

Starting with **Phase 1** on approval.
