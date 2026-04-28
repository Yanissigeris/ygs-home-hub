## Internal Linking Optimization — Local Valuation Routing

Pure href + RelatedPages edits across 6 source files + 1 test file. No component refactors, no logic changes.

### Verified current state (from grep)

**FR neighborhood pages — 3 hrefs each to swap:**
- `src/pages/HullPage.tsx` lines 87, 164, 194: `/evaluation-gratuite-gatineau` ➜ `/evaluation-maison-hull`
- `src/pages/AylmerPage.tsx` lines 145, 176, 303: `/evaluation-gratuite-gatineau` ➜ `/evaluation-maison-aylmer` (line 252 already correct, untouched)

**EN neighborhood pages — 3 hrefs each to swap:**
- `src/pages/en/HullPageEn.tsx` lines 87, 164, 195: `/en/home-valuation` ➜ `/en/home-valuation-hull`
- `src/pages/en/AylmerPageEn.tsx` lines 142, 171, 296: `/en/home-valuation` ➜ `/en/home-valuation-aylmer` (line 246 already correct, untouched)

All labels preserved verbatim. Only `href`/`to` values change.

### Hub RelatedPages reordering

**`src/pages/ValuationPage.tsx` (lines 165–172)** — 6 entries, Hull/Aylmer valuations promoted to positions 1–2:

```tsx
pages={[
  { title: "Évaluation maison Hull", text: "Combien vaut votre propriété à Hull?", href: "/evaluation-maison-hull" },
  { title: "Évaluation maison Aylmer", text: "Combien vaut votre propriété à Aylmer?", href: "/evaluation-maison-aylmer" },
  { title: "Vendre à Gatineau", text: "Stratégie, prix et accompagnement.", href: "/vendre-ma-maison-gatineau" },
  { title: "Courtier Chelsea", text: "Nature et marché de Chelsea.", href: "/chelsea" },
  { title: "Courtier Cantley", text: "Terrains et vie rurale.", href: "/cantley" },
  { title: "Tous les quartiers", text: "Comparez les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
]}
```

**`src/pages/en/ValuationPageEn.tsx` (lines 74–80)** — 6 entries (mirroring FR symmetry, with new Realtor Cantley entry at position 5):

```tsx
pages={[
  { title: "Hull home valuation", text: "What's your Hull property worth?", href: "/en/home-valuation-hull" },
  { title: "Aylmer home valuation", text: "What's your Aylmer property worth?", href: "/en/home-valuation-aylmer" },
  { title: "Sell in Gatineau", text: "Strategy, pricing and guidance.", href: "/en/sell" },
  { title: "Realtor Chelsea", text: "Nature and market.", href: "/en/chelsea" },
  { title: "Realtor Cantley", text: "Land and rural living.", href: "/en/cantley" },
  { title: "All Neighborhoods", text: "Compare all areas.", href: "/en/neighborhoods" },
]}
```

### Tests

Append 3 tests to `e2e/navigation-flows.spec.ts`:

```ts
test("Hull page primary CTA goes to local Hull valuation", async ({ page }) => {
  await page.goto("/hull", { waitUntil: "domcontentloaded" });
  const cta = page.locator('a[href="/evaluation-maison-hull"]').first();
  await expect(cta).toBeVisible({ timeout: 15000 });
});

test("Aylmer page primary CTA goes to local Aylmer valuation", async ({ page }) => {
  await page.goto("/aylmer", { waitUntil: "domcontentloaded" });
  const cta = page.locator('a[href="/evaluation-maison-aylmer"]').first();
  await expect(cta).toBeVisible({ timeout: 15000 });
});

test("FR valuation hub surfaces Hull and Aylmer local valuations", async ({ page }) => {
  await page.goto("/evaluation-gratuite-gatineau", { waitUntil: "domcontentloaded" });
  await expect(page.locator('a[href="/evaluation-maison-hull"]').first()).toBeVisible({ timeout: 15000 });
  await expect(page.locator('a[href="/evaluation-maison-aylmer"]').first()).toBeVisible({ timeout: 15000 });
});
```

Will not run E2E in this sprint — user republishes first.

### Verification

- `rg "/evaluation-gratuite-gatineau" src/pages/HullPage.tsx src/pages/AylmerPage.tsx` → expect 0 hits
- `rg "\"/en/home-valuation\"" src/pages/en/HullPageEn.tsx src/pages/en/AylmerPageEn.tsx` → expect 0 hits
- Build runs automatically.

### Files touched (exactly 7)
1. `src/pages/HullPage.tsx` — 3 href swaps
2. `src/pages/AylmerPage.tsx` — 3 href swaps
3. `src/pages/en/HullPageEn.tsx` — 3 href swaps
4. `src/pages/en/AylmerPageEn.tsx` — 3 href swaps
5. `src/pages/ValuationPage.tsx` — RelatedPages array (6 entries, 2 swapped in)
6. `src/pages/en/ValuationPageEn.tsx` — RelatedPages array (6 entries, expanded from 5)
7. `e2e/navigation-flows.spec.ts` — append 3 tests

Reminder: republish before running the new E2E tests against the live host.
