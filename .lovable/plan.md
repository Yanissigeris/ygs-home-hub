# Plan — Optimize `src/components/ValuationForm.tsx`

Single-file optimization. No pages, hooks, or unrelated files touched. Public API (props) of `ValuationForm` stays identical.

## 1. Migrate to `react-hook-form` + `zod`

Add imports (already installed):
- `useForm` from `react-hook-form`
- `zodResolver` from `@hookform/resolvers/zod`
- `z` from `zod`

Build a `makeSchema(lang)` factory returning a zod object with locale-aware messages:

| Field | Rule |
|---|---|
| `name` | `string().trim().min(2)` |
| `email` | `string().trim().email()` + `.refine(notObviousTypo)` |
| `phone` | `string().optional()` + `.refine(isValidCAPhone or empty)` |
| `address` | `string().trim().min(5)` |
| `message` | `string().max(500).optional()` |

`notObviousTypo` rejects domains like `gmial.com`, `gmai.com`, `yahoo.cm`, `hotnail.com`, `outlok.com`, `gmail.con`, `yhaoo.com` (small inline list).

`isValidCAPhone` strips non-digits and requires exactly 10 digits (or empty when optional).

Form config:
```ts
useForm({
  resolver: zodResolver(makeSchema(lang)),
  mode: "onBlur",
  reValidateMode: "onChange",
  defaultValues: { name:"", email:"", phone:"", address:"", message:"" },
});
```

`handleSubmit` calls `submit({ formType:"valuation", lang, ...values, message: locationTag ? "[tag] "+msg : msg })` exactly like today, then `setSubmitted(true)` on success. Same payload shape — `useFormSubmit` untouched.

## 2. Inline error rendering

Below each input render `errors.<field>?.message` in a small line:
```
text-[0.75rem] mt-1
glass: text-red-300/80
card:  text-destructive
```
Add `aria-invalid` + `aria-describedby` on each input.

## 3. Phone masking

Pure inline formatter — no new dep:
```ts
const formatCAPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3)  return d;
  if (d.length <= 6)  return `(${d.slice(0,3)}) ${d.slice(3)}`;
  return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`;
};
```
Phone field uses `Controller` so we can intercept `onChange` and call `field.onChange(formatCAPhone(e.target.value))`. Submitted value is the formatted string (server already stores message-as-string; phone is plain text).

## 4. Inputs: autocomplete + inputMode

| Field | autoComplete | inputMode |
|---|---|---|
| name | `name` | — |
| email | `email` | `email` |
| phone | `tel` | `tel` |
| address | `street-address` | — |
| message | `off` | — |

Apply uniformly to both glass and card branches.

## 5. Loader2 spinner in submit button

```tsx
{submitting ? <Loader2 size={16} className="mr-1.5 animate-spin"/> : <Send size={16} className="mr-1.5"/>}
{submitting ? t.submitting : submitText}
```
Button stays `disabled={submitting}`. Keeps existing styling.

## 6. Card-variant trust signal block (NEW)

Inside the outer wrapper, **above** the `<form>`, only when `!isGlass`:

```tsx
<div className="flex items-center gap-3 mb-5 pb-5 border-b border-border/50">
  <img
    src={yanisPhoto}
    alt={t.trustAlt}
    className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
    loading="lazy"
  />
  <div className="min-w-0">
    <p className="font-semibold text-[0.9375rem] leading-tight">Yanis Gauthier-Sigeris</p>
    <p className="mt-0.5 text-[0.75rem] text-muted-foreground flex flex-wrap items-center gap-x-1.5">
      <span className="text-accent">★ 5/5</span>
      <span aria-hidden>·</span>
      <span>Hall of Fame RE/MAX</span>
      <span aria-hidden>·</span>
      <span>{t.trustTransactions}</span>
    </p>
  </div>
</div>
```

Asset import: `import yanisPhoto from "@/assets/yanis-hero-cutout.webp";` (verified file exists).

Glass variant gets nothing new (already has its own header).

## 7. T table updates

- FR `submit`: `"Demander mon évaluation gratuite"` (was "Recevoir...")
- EN `submit`: `"Request my free valuation"` (was "Get...")
- Add per-lang error strings: `errName`, `errEmail`, `errEmailTypo`, `errPhone`, `errAddress`, `errMessageMax`
- Add `trustAlt` ("Yanis Gauthier-Sigeris, courtier immobilier" / "...real estate broker") and `trustTransactions` ("300+ transactions" both languages).

## 8. E2E test additions — `e2e/valuation-form.spec.ts`

Append two new `test(...)` cases (do NOT touch the 4 existing ones):

1. **Trust signal on card variant** — `/evaluation-maison-hull`
   ```ts
   const trust = page.locator("div.card-elevated").first();
   await expect(trust.getByText("Yanis Gauthier-Sigeris")).toBeVisible();
   await expect(trust.getByText(/Hall of Fame/i)).toBeVisible();
   ```

2. **Friendly inline email error** — `/evaluation-maison-hull`
   - Fill `input#email` with `not-an-email`, blur, click submit
   - Assert no native `:invalid` tooltip path: check inline message is visible
   ```ts
   await page.locator("input#email").fill("not-an-email");
   await page.locator("input#email").blur();
   await page.locator('form button[type="submit"]').click();
   await expect(page.getByText(/email|courriel/i).filter({ hasText: /incorrect|valide|spelling|orthographe/i }).first()).toBeVisible();
   ```

Tests are written but **not executed** in this round — user must republish first.

## 9. Build & report

Run `vite build` after edits. Report:
- Build PASS/FAIL
- Line count before/after `ValuationForm.tsx`
- New imports list
- Test assertions added
- Reminder: republish before running E2E against live host

## Constraints honored

- Same `ValuationFormProps` interface — no breaking change for the 6 pages.
- `useFormSubmit`, `SuccessMessage`, all pages: untouched.
- Both variants render; glass keeps its existing header; card gets new trust block.
- Bottom `showTrustBadges` row: unchanged.
- Payload to `send-email`: identical shape (`formType`, `lang`, `name`, `email`, `phone?`, `address?`, `message?` with optional `[locationTag] ` prefix).
