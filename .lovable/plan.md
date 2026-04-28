# Add Trust Signal to Glass Variant of ValuationForm

## Scope
Single-file component change + one new E2E test. No page edits, no API changes, no card-variant changes.

## Change 1 — `src/components/ValuationForm.tsx` (glass branch only)

Inside the `isGlass &&` block, **after** the `glassSub` paragraph and **before** the `<form>` element, insert a trust signal block adapted for the dark/translucent glass aesthetic.

### Markup to add

```tsx
<div className="mt-5 flex items-center gap-3 pb-4 mb-1 border-b border-white/10">
  <img
    src={yanisPhoto}
    alt={t.trustAlt}
    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 bg-white/5"
    loading="lazy"
    width={48}
    height={48}
  />
  <div className="min-w-0">
    <p className="font-semibold text-[0.9375rem] leading-tight text-primary-foreground">
      Yanis Gauthier-Sigeris
    </p>
    <p className="mt-0.5 text-[0.75rem] text-primary-foreground/60 flex flex-wrap items-center gap-x-1.5">
      <span className="text-accent font-medium">★ 5/5</span>
      <span aria-hidden>·</span>
      <span>Hall of Fame RE/MAX</span>
      <span aria-hidden>·</span>
      <span>{t.trustTransactions}</span>
    </p>
  </div>
</div>
```

### Styling notes (matched to glass aesthetic)
- Photo ring: `ring-white/20` (vs card's `ring-accent/20`)
- Name color: `text-primary-foreground` (matches `glassHeading`)
- Stats color: `text-primary-foreground/60` (translucent, secondary hierarchy)
- Star kept `text-accent` (gold reads beautifully on petrol glass)
- Border separator: `border-white/10` (very subtle)
- Spacing: `mt-5` from sub-paragraph above, `pb-4 mb-1` to breathe before the form's `mt-6 space-y-4`

### What stays unchanged
- Card-variant trust block (lines ~245–266): zero edits
- Component props/public API
- `T` translation table (reuses `trustAlt` + `trustTransactions`)
- Existing `yanisPhoto` import

## Change 2 — `e2e/valuation-form.spec.ts`

Append ONE test (do not touch the existing 6):

```ts
test("Hub (glass variant) shows trust signal block with broker name + Hall of Fame", async ({ page }) => {
  await page.goto(`${BASE}/evaluation-gratuite-gatineau`, { waitUntil: "domcontentloaded" });
  const glass = page.locator(".backdrop-blur-xl").first();
  await expect(glass).toBeVisible();
  await expect(glass.getByText("Yanis Gauthier-Sigeris")).toBeVisible();
  await expect(glass.getByText(/Hall of Fame/i)).toBeVisible();
});
```

Selector mirrors the existing glass-variant test (`.backdrop-blur-xl`) rather than `div.card-elevated`.

## Validation
1. Run build (vite) — expect PASS.
2. Report ValuationForm.tsx line count before/after (~496 → ~516).
3. Confirm card variant DOM untouched.
4. Note: live E2E run requires republish before validating against `ygs-home-hub.lovable.app`.

## Final report will include
- Build PASS/FAIL
- Line count before/after
- Confirmation card variant unchanged
- New E2E test name
- Republish reminder
