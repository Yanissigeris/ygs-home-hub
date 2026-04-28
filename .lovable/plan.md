## Goal

Extract one shared `<ValuationForm>` component used by all 6 valuation pages. Standardize field names to English, always use `<SuccessMessage>` for the success state, and keep both visual variants (`glass` for the Gatineau hub, `card` for Hull/Aylmer in both FR and EN).

## Step 1 — Create `src/components/ValuationForm.tsx`

New component encapsulating the form card + submit + success state.

**Props:**
```ts
interface ValuationFormProps {
  lang: "fr" | "en";
  locationTag?: string;        // "Hull" | "Aylmer" — prepends "[Tag] " to message
  variant?: "glass" | "card";  // default "card"
  addressPlaceholder?: string;
  submitLabel?: string;
  showTrustBadges?: boolean;   // default true
}
```

**Internals:**
- `useState<boolean>` for `submitted`
- `useFormSubmit()` for submission
- Field `name` attributes: `name`, `email`, `phone`, `address`, `message` (English keys for FR + EN)
- Required: `name`, `email`, `address`. Optional: `phone`, `message`
- On submit, if `locationTag` set → `message = \`[${locationTag}] ${rawMessage}\``
- On success → render `<SuccessMessage title={…} text={…} />` (translated)
- Always render Lock + "Confidentiel — aucune obligation" / "Confidential — no obligation" line at top
- `showTrustBadges` → 4-badge row under submit (Free/Confidential/No commitment/24h response) with FR/EN translations
- Default submit label: FR "Recevoir mon évaluation gratuite", EN "Get my free valuation"

**Variants:**
- `glass`: `rounded-[1.25rem] border border-white/[0.08] bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_40px_-12px_hsl(200_40%_8%_/_0.5)] p-6 sm:p-8`, light input styling on dark bg (matches current hub form). Includes the small headline + sub line above the form.
- `card`: `card-elevated space-y-4 rounded-2xl bg-card p-6 shadow-xl sm:p-8`, default Input/Label styling (matches current Hull/Aylmer form).

After creating the file: run `vite build` only — confirm no TS error. Report status.

## Step 2 — Refactor `src/pages/ValuationPage.tsx` (FR hub, glass)

Remove: `useState`, `FormEvent`, `useFormSubmit` imports, `handleSubmit`, the entire `<motion.div>` containing the form card (lines ~162–223). Keep all surrounding hero JSX (left column, portrait, gradients, BenefitsList, FunnelNextStep, FAQ, etc.).

Replace the right form `<motion.div>` with:
```tsx
<motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}>
  <ValuationForm lang="fr" variant="glass" addressPlaceholder="123 rue Exemple, Gatineau" />
</motion.div>
```

Run full build (`vite build` + prerender + audits). Report. Stop on FAIL.

## Step 3 — Refactor `src/pages/ValuationHullPage.tsx`

Remove form-related imports, `submitted` state, `handleSubmit`, the whole form `<motion.div>` (lines 100–134). Replace with:
```tsx
<motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }}>
  <ValuationForm lang="fr" variant="card" locationTag="Hull" addressPlaceholder="123 rue Exemple, Hull" />
</motion.div>
```
Drop unused imports (`Lock`, `Send`, `useState`, `FormEvent`, `useFormSubmit`, `Input`, `Label`, `Textarea`, `Button`, `SuccessMessage`).

Run full build. Report. Stop on FAIL.

## Step 4 — Refactor `src/pages/ValuationAylmerPage.tsx`

Same pattern as Step 3 with `locationTag="Aylmer"` and `addressPlaceholder="123 rue Exemple, Aylmer"`. Run build. Report. Stop on FAIL.

## Step 5 — Refactor the 3 EN pages

- `src/pages/en/ValuationPageEn.tsx` → `<ValuationForm lang="en" variant="glass" addressPlaceholder="123 Example St, Gatineau" />`
- `src/pages/en/ValuationHullPageEn.tsx` → `<ValuationForm lang="en" variant="card" locationTag="Hull" addressPlaceholder="123 Example St, Hull" />`
- `src/pages/en/ValuationAylmerPageEn.tsx` → `<ValuationForm lang="en" variant="card" locationTag="Aylmer" addressPlaceholder="123 Example St, Aylmer" />`

Run full build after each (3 builds). Report each. Stop on first FAIL.

## Step 6 — Playwright spec

Create `e2e/valuation-form.spec.ts` (project's e2e dir; `src/tests/` doesn't exist — tests live in `e2e/`). Coverage:
1. `/evaluation-gratuite-gatineau` → form renders, address input has placeholder "123 rue Exemple, Gatineau", glass-variant container present (`backdrop-blur-xl` class).
2. `/evaluation-maison-hull` → form renders, address placeholder mentions "Hull", card variant present (`card-elevated` class).
3. `/evaluation-maison-aylmer` → same as #2 with "Aylmer".
4. Fill required fields on Hull page, click submit, intercept the Supabase functions POST → assert `formType: "valuation"` and `message` starts with `[Hull] `.
5. After successful submit (mocked 200), assert `<SuccessMessage>` content visible (title contains "envoyée" / "Merci").

Run with `bunx playwright test e2e/valuation-form.spec.ts`. Report.

## Final report

PASS/FAIL per step, final build status, # of pages refactored, approximate lines eliminated, line counts (new component + diff per page), any drift detected.

## Constraints

- Do NOT modify `useFormSubmit`, `SuccessMessage`, or any unrelated files.
- Keep all hero copy, FAQ, BenefitsList, RelatedPages, FunnelNextStep blocks intact on every page.
- The hub success state currently shows a custom inline block; switching to `<SuccessMessage>` is an intentional standardization (per goal). Visual change on the dark hub: the success card will use the standard accent-tinted card style instead of inline white text. Acceptable since `<SuccessMessage>` already uses `bg-accent/5` + accent border which reads fine on dark backgrounds.
- Field-name change on the FR hub (`nom`/`courriel`/`tel`/`adresse` → `name`/`email`/`phone`/`address`) is internal only (no DB schema change; `useFormSubmit` already maps to canonical English keys before sending).

## Files touched

- **Created:** `src/components/ValuationForm.tsx`, `e2e/valuation-form.spec.ts`
- **Modified:** `src/pages/ValuationPage.tsx`, `src/pages/ValuationHullPage.tsx`, `src/pages/ValuationAylmerPage.tsx`, `src/pages/en/ValuationPageEn.tsx`, `src/pages/en/ValuationHullPageEn.tsx`, `src/pages/en/ValuationAylmerPageEn.tsx`
