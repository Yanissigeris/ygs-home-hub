# Phase 2 continuation — execution plan

## Acknowledgements

1. **TASK 1 first, in isolation.** I will ship only the `PlexAnalysisPageEn.tsx` JSX/state fix in the first commit, stop, and wait for your manual confirmation that an EN plex submission delivers a populated email on the deploy preview before touching TASKS 2–4.
2. **ContactCard `onTap` prop is fully optional** (`onTap?: ...`). Current callsites that omit it keep rendering identically — only behavior change is `onClick` is registered when both `href` and `onTap` are present. No visual change.

---

## TASK 1 — PlexAnalysisPageEn.tsx JSX fix (regression, PRIORITY 0)

Mirror exactly the FR version's wiring (already verified working in inbox):

- Add `name=` to every `<Input>`:
  - `address` → `name="address"`
  - `revenues` → `name="revenues"`
  - `name`, `email`, `phone` → `name="name" | "email" | "phone"`
  - `notes` → `name="notes"` on `<Textarea>`
- Wire the 3 Selects as controlled:
  - `<Select value={plexType} onValueChange={setPlexType}>` (Plex type)
  - `<Select value={area} onValueChange={setArea}>` (Area)
  - `<Select value={situation} onValueChange={setSituation}>` (Your situation)
- Add `disabled={submitting}` on submit button + "Sending…" label parity with FR.
- `handleSubmit` already reads `fd.get("name")` etc. — no logic change required once `name=` attributes are present.

**Stop. Wait for user verification before TASKS 2–4.**

---

## TASK 2 — BuyerConsultationPage FR + EN

`formType: "consultation"`, `avatar: "acheteur"`, `offer: "consultation_acheteur"`.

### FR field-name mapping (`src/pages/BuyerConsultationPage.tsx`)

| Form field | Input `name=` | useFormSubmit key | Edge function field |
|---|---|---|---|
| Nom | `nom` | `name` | `name` |
| Courriel | `courriel` | `email` | `email` |
| Téléphone | `tel` | `phone` | `phone` |
| Budget approximatif (Select, state `budget`) | — | `objective` | `objective` |
| Secteur d'intérêt (Select, state `secteur`) | — | folded into `message` | `message` |
| Délai (Select, state `delai`) | — | folded into `message` | `message` |
| Notes | `notes` | folded into `message` | `message` |

`message` will be assembled as `["Secteur: X", "Délai: Y", "Notes: Z"].filter(Boolean).join(" | ")` — same pattern as PlexAnalysisPage FR.

`objective` carries the budget bucket (canonical lead-quality signal). If you'd rather have me put `secteur` in `objective` and budget in `message`, say so before approval.

### EN field-name mapping (`src/pages/en/BuyerConsultationPageEn.tsx`)

| Form field | Input `name=` | useFormSubmit key |
|---|---|---|
| Name | `name` | `name` |
| Email | `email` | `email` |
| Phone | `phone` | `phone` |
| Approximate budget (state `budget`) | — | `objective` |
| Area of interest (state `area`) | — | message |
| Timeline (state `timeline`) | — | message |
| Notes | `notes` | message |

Submit button gets `disabled={submitting}` + "Sending…" / "Envoi…" parity. Existing `SuccessMessage` UI preserved.

---

## TASK 3 — SellerPlanPage FR + EN

`formType: "consultation"`, `avatar: "vendeur"`, `offer: "consultation_vendeur"`.

### FR field-name mapping (`src/pages/SellerPlanPage.tsx`)

| Form field | Input `name=` | useFormSubmit key |
|---|---|---|
| Adresse | `adresse` | `address` |
| Type de propriété (state `propType`) | — | `projectType` |
| Secteur (state `secteur`) | — | folded into `message` |
| Délai (state `delai`) | — | `objective` |
| Achat parallèle (state `achatParallele`) | — | folded into `message` |
| Nom | `nom` | `name` |
| Courriel | `courriel` | `email` |
| Téléphone | `tel` | `phone` |
| Notes | `notes` | folded into `message` |

`objective` = timeline (highest-intent signal for sellers). `message` = `["Secteur: X", "Achat parallèle: Y", "Notes: Z"].filter(Boolean).join(" | ")`.

### EN field-name mapping (`src/pages/en/SellerPlanPageEn.tsx`)

Mirror with English `name=` (`address`, `name`, `email`, `phone`, `notes`) and state vars (`propType`, `area`, `timeline`, `buying`). Same mapping rules.

---

## TASK 4 — Contact tap instrumentation (single commit)

Import: `import { trackContactTap } from "@/lib/analytics";`

### 4a. `src/components/SiteFooter.tsx`
- L320 `tel:+18196840000` → `onClick={() => trackContactTap({ channel: "phone", location: "footer", destination: "+18196840000" })}`
- L323 `tel:+18192103044` → `{ channel: "phone", location: "footer", destination: "+18192103044" }`
- L325 `mailto:yanis@martywaite.com` → `{ channel: "email", location: "footer", destination: "yanis@martywaite.com" }`

### 4b. `src/components/RemaxAgencyBlock.tsx` L62
- `tel:+18196840000` → `{ channel: "phone", location: "inline", destination: "+18196840000" }`

### 4c. `src/components/CTASection.tsx` L83
- `tel:+18192103044` → `{ channel: "phone", location: "inline", destination: "+18192103044" }`

### 4d. `src/components/WhatsAppButton.tsx`
- **Note:** despite its filename, the component exports a `FloatingCallButton` rendering only `tel:+18192103044` (desktop + hidden mobile fallback). There is no `wa.me` link in this component. I will:
  - Wire the desktop tel link L57 → `{ channel: "phone", location: "floating_call", destination: "+18192103044" }`
  - Wire the mobile fallback tel link L142 with the same payload (it's hidden but kept for safety)
  - **Skip** the `channel: "whatsapp"` branch entirely — there is no WhatsApp surface to wire. Flag for you: if you want a true WhatsApp deep-link added, that's net-new UX and out of scope for this commit.

### 4e. `src/components/StickyMobileCTA.tsx` L125
- Already has `onClick={() => trackCTAClick("call", "sticky-mobile-cta")}`. I will **append** the `trackContactTap` call alongside (not replace) so existing CTA analytics remain:
  - `onClick={() => { trackCTAClick("call", "sticky-mobile-cta"); trackContactTap({ channel: "phone", location: "sticky_cta", destination: "+18192103044" }); }}`

### 4f. `src/components/ContactCard.tsx`
- Add `onTap?: (params: { channel: "phone"|"email"|"sms"; destination: string }) => void` to props
- In render, detect channel from `item.href` prefix (`tel:` → phone, `mailto:` → email, `sms:` → sms). If channel resolvable AND `onTap` provided, attach `onClick={() => onTap({ channel, destination: item.href.replace(/^(tel:|mailto:|sms:)/, "") })}` on the `<a>`
- No visual or structural change to non-link items.

### 4g. `src/pages/ContactPage.tsx` + `src/pages/en/ContactPageEn.tsx`
- Pass `onTap={({ channel, destination }) => trackContactTap({ channel, location: "contact_page", destination })}` to each `<ContactCard>` render.

### 4h. `heroBottomInfo`
- `rg heroBottomInfo src/` returns 0 hits. No such file or symbol exists in the repo.
- **Action:** skip and note in commit message. Hero phone/email links, if any, live elsewhere and are out of the inventory you provided — I will not hunt for them in this commit.

---

## Commit sequencing

1. Commit A — TASK 1 only. Push, wait for your verification.
2. Commit B — TASKS 2 + 3 (4 forms, all consultation wiring).
3. Commit C — TASK 4 (taps, single commit per your spec).

No edits to excluded files. No visual/copy/schema changes.

**Awaiting explicit "go" before any file edits.**