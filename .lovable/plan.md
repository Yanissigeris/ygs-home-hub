# Phase 2 Execution Plan — GA4 Conversion Instrumentation

## 1. Files created / modified

### Create
- `src/hooks/usePageView.ts` (TASK G)

### Modify — analytics core
- `src/lib/analytics.ts` — add `Avatar`, `Offer` types, `trackLead`, `trackContactTap` (TASK B)
- `src/hooks/useFormSubmit.ts` — extend `FormData` (avatar, offer, sourcePage, lang already exists), replace `trackFormSubmission` with `trackLead` (TASK C)
- `src/App.tsx` — mount `usePageView()` inside Router (TASK G)

### Modify — edge function (additive, backwards-compatible)
- `supabase/functions/send-email/index.ts` — extend `formType` union to add `"analysis" | "consultation"`; add corresponding subject lines + confirmation copy. Existing "contact" | "valuation" | "guide" payloads keep working unchanged.

### Modify — 6 dead-end forms (TASK A)
- `src/pages/PlexAnalysisPage.tsx` (handleSubmit L~50)
- `src/pages/en/PlexAnalysisPageEn.tsx` (handleSubmit L42)
- `src/pages/SellerPlanPage.tsx`
- `src/pages/en/SellerPlanPageEn.tsx`
- `src/pages/BuyerConsultationPage.tsx`
- `src/pages/en/BuyerConsultationPageEn.tsx`

### Modify — existing form callsites (TASK E)
- `src/components/ValuationForm.tsx` — submit call + DELETE inline gtag block L200–209
- `src/components/ValuationWidget.tsx` — replace `trackEvent("evaluation_widget_submitted",…)` at L142 with `trackLead({...})`; add `onClick` on tel link L497
- `src/components/GuideRequestForm.tsx` — add required props `avatar`, `offer`; forward to submit
- `src/components/GuideModal.tsx` — add local `guideType → {avatar, offer}` map; forward to submit
- `src/pages/ContactPage.tsx` + `src/pages/en/ContactPageEn.tsx` — derive avatar/offer from `objectif` value

### Modify — tel/mailto/sms instrumentation (TASK F)
- `src/components/SiteFooter.tsx`
- `src/components/RemaxAgencyBlock.tsx`
- `src/components/CTASection.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/components/StickyMobileCTA.tsx`
- `src/components/ContactCard.tsx` — add optional `onTap` callback per item, so `ContactPage` / `ContactPageEn` can pass `trackContactTap` without changing visual markup
- `src/config/heroBottomInfo.tsx` — if data is rendered via a hero component that uses anchor tags, the `onClick` is added at the renderer; will identify the renderer during implementation and instrument there

### Untouched (per exclusion list)
NotFound.tsx, LanguageSwitch, prerender.mjs, blog-extractor.mjs, jsonld-routes.js, CookieConsent.tsx, any visual-only file with no tel/mailto/form, all existing `trackCTAClick` callsites, ValuationWidget step1/step2 events.

## 2. TASK A — refactored handleSubmit template (PlexAnalysisPage)

```tsx
const { submit, submitting } = useFormSubmit();
const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const ok = await submit({
    formType: "analysis",
    lang: "fr",
    name: String(fd.get("name") ?? ""),
    email: String(fd.get("email") ?? ""),
    phone: String(fd.get("phone") ?? "") || undefined,
    address: String(fd.get("address") ?? "") || undefined,
    projectType: String(fd.get("type") ?? "") || undefined,
    objective: String(fd.get("situation") ?? "") || undefined,
    message: String(fd.get("notes") ?? "") || undefined,
    avatar: "investisseur",
    offer: "plex_analyse",
  });
  if (ok) setSubmitted(true);
};
```

Each of the 6 forms uses this same shape; only `formType`, `lang`, `avatar`, `offer`, and the field-name mapping differ. The success UI (`SuccessMessage`) and validation attributes are preserved untouched.

The 6 forms currently use uncontrolled inputs without `name` attributes in some cases — implementation will add `name=` attributes where missing (no visual change) so `FormData` can read them, OR convert to a controlled `useState` set. Will pick the lighter diff per file.

## 3. TASK B/C — final shapes

### `src/lib/analytics.ts` additions
```ts
export type Avatar =
  | "vendeur" | "acheteur" | "investisseur"
  | "relocalisation" | "militaire" | "mixed";

export type Offer =
  | "evaluation_gratuite" | "consultation_vendeur" | "consultation_acheteur"
  | "plex_analyse" | "guide_vendeur" | "guide_acheteur"
  | "guide_investisseur" | "guide_relocalisation" | "contact_general";

export function trackLead(params: {
  avatar: Avatar;
  offer: Offer;
  source_page?: string;
  form_type?: string;
  lang?: "fr" | "en";
  extra?: Record<string, string | number | boolean>;
}) {
  const { extra, ...rest } = params;
  trackEvent("generate_lead", {
    ...rest,
    source_page: rest.source_page ?? (typeof window !== "undefined" ? window.location.pathname : ""),
    ...(extra ?? {}),
  });
}

export function trackContactTap(params: {
  channel: "phone" | "email" | "sms" | "whatsapp";
  location: "footer" | "hero" | "inline" | "sticky_cta" | "contact_page";
  destination: string;
}) {
  trackEvent("contact_tap", params);
}
```
(`whatsapp` added because `WhatsAppButton` is in the inventory; if you'd rather collapse it to `"phone"` say the word.)

### `src/hooks/useFormSubmit.ts` updated signature
```ts
interface FormData {
  formType: "contact" | "valuation" | "guide" | "analysis" | "consultation";
  lang: "fr" | "en";
  name: string;
  email: string;
  phone?: string;
  message?: string;
  objective?: string;
  address?: string;
  guideTitle?: string;
  lastName?: string;
  projectType?: string;
  // NEW — analytics-only, not sent to edge function
  avatar?: Avatar;
  offer?: Offer;
  sourcePage?: string;
}
```
In success branch: strip `avatar/offer/sourcePage` before `supabase.functions.invoke` body, then on success fire `trackLead({ avatar, offer, source_page: sourcePage ?? location.pathname, form_type: formType, lang })`. `trackGuideRequest` call is preserved.

## 4. ValuationForm L200–209
Confirmed: the inline `window.gtag('event','generate_lead',...)` block at L200–209 will be deleted. `useFormSubmit` will fire `generate_lead` exactly once via `trackLead`.

## 5. No visual / style / copy / schema changes
Confirmed. No edits to: CSS, Tailwind config, index.css, design tokens, copywriting, blog data, SQL migrations, RLS, supabase types. Only additive prop changes on `GuideRequestForm` and `ContactCard` — invisible to users.

## 6. GuideRequestForm callsites — only 4 found (not 6)

Repo grep returned exactly 4 callsites:

| File | avatar | offer |
|---|---|---|
| `src/pages/BuyerGuidePage.tsx` L93 | `acheteur` | `guide_acheteur` |
| `src/pages/en/BuyerGuidePageEn.tsx` L74 | `acheteur` | `guide_acheteur` |
| `src/pages/SellerGuidePage.tsx` L110 | `vendeur` | `guide_vendeur` |
| `src/pages/en/SellerGuidePageEn.tsx` L94 | `vendeur` | `guide_vendeur` |

`MilitaryGuidePage` and `RelocationGuidePage` (FR+EN) do NOT render `GuideRequestForm` — they use `GuideInlineCTA` + `StickyGuideBanner`, both of which open `GuideModal`. So investor/relocation/military guide leads are already covered by the `GuideModal` map in TASK E.

`GuideModal` map:
```ts
const guideMeta: Record<GuideType, {avatar: Avatar; offer: Offer}> = {
  seller_guide:     { avatar: "vendeur",        offer: "guide_vendeur" },
  buyer_guide:      { avatar: "acheteur",       offer: "guide_acheteur" },
  investor_guide:   { avatar: "investisseur",   offer: "guide_investisseur" },
  relocation_guide: { avatar: "relocalisation", offer: "guide_relocalisation" },
};
```

**Please confirm:** is 4 callsites correct, or did I miss a host page you expected? If the latter, name it and I'll add it.

## 7. send-email backwards compatibility
Confirmed. The edge function change is purely additive:
- `formType` union widened to include `"analysis" | "consultation"`
- Two new branches in `notifSubject` and `buildConfirmationHtml` for the new types
- All existing `"contact" | "valuation" | "guide"` payloads continue to work with zero changes; no required fields added; no field renames; no schema impact.
Function will be auto-deployed by Lovable Cloud.

---

## Open questions before I implement
1. **GuideRequestForm count**: confirm 4 callsites is the right scope (vs. you expecting 6).
2. **WhatsApp channel value**: keep separate `"whatsapp"` channel in `trackContactTap`, or collapse to `"phone"`?
3. **heroBottomInfo.tsx**: the file is 19 lines of data only. Confirm I should locate the rendering component (likely inside `HeroSection`) and add `onClick` there — OR skip if no tel/mailto link is rendered from that data.

Awaiting explicit approval to proceed.
