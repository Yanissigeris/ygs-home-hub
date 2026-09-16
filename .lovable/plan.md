# Homepage hero messaging — FR/EN

## Scope

Only the homepage hero text (FR `/` and EN `/en/`). Portrait, background image, gradients, colours, fonts and layout stay untouched; sizing/spacing adjusted only for readability. No new sections, no second H1, no duplication of the new message right below the hero.

## Confirmed current state

- `src/components/HeroSection.tsx` renders the hero: H1 (`title`), one subtitle paragraph (`subtitle` / `subtitleShort`), primary + secondary CTA links, portrait and background. It has **no prop for a supporting headline** — one must be added.
- `src/pages/Index.tsx` (FR) and `src/pages/en/IndexEn.tsx` (EN) pass the current hero copy and CTAs (`/evaluation-gratuite-gatineau/`, `/contact-yanis/`, `/en/home-valuation/`, `/en/contact/`). These routes exist in `src/App.tsx` and are kept.
- The bottom homepage `CTASection` currently reuses the exact sentence "Je vous donne les chiffres et les options, vous décidez." / "I give you the numbers and the options, you decide." as its `trustLine` — it would duplicate the new supporting headline.

## Changes

### 1. `src/components/HeroSection.tsx`
- Add optional `headline` prop (supporting headline), rendered between the H1 and the supporting paragraph as a styled `<p>` (not a heading — keeps exactly one H1): serif, ~`clamp(1.2rem, 2vw, 1.6rem)`, cream, same fade-in choreography.
- Keep the supporting paragraph as-is structurally; on mobile the paragraph uses `subtitleShort` fallback logic if provided.
- Spacing: tighten/retune margins between H1 → headline → paragraph → CTAs so the three text tiers read clearly at 390px without pushing the CTAs or the portrait out of view; no other layout change.

### 2. `src/pages/Index.tsx` (French)
- H1: `Votre courtier immobilier à Gatineau et en Outaouais`
- `headline`: `Je vous donne les chiffres et les options, vous décidez.`
- `subtitle`: `Pour vendre, acheter ou investir, profitez d'un accompagnement fondé sur les comparables locaux, l'expérience terrain et une stratégie adaptée à votre projet.` (no `subtitleShort` — full paragraph shown, it fits)
- Primary CTA: `Obtenir mon évaluation` → `/evaluation-gratuite-gatineau/`
- Secondary CTA: `Parlons de votre projet` → `/contact-yanis/`

### 3. `src/pages/en/IndexEn.tsx` (English)
- H1: `Your real estate broker in Gatineau and Outaouais`
- `headline`: `I give you the numbers and the options. You decide.`
- `subtitle`: `Buy, sell, or invest with guidance grounded in local comparable sales, hands-on experience, and a strategy tailored to your goals.`
- Primary CTA: `Get my home valuation` → `/en/home-valuation/`
- Secondary CTA: `Let's discuss your plans` → `/en/contact/`

### 4. Deduplication
- On both homepages, remove the `trustLine` (the now-duplicated sentence) from the bottom `CTASection`; the section itself, its title and buttons stay.

### 5. Notes
- SEO `<title>`/meta descriptions are **not** changed (hero-only scope).
- GA4 `cta_click` labels change to the new CTA labels automatically via `trackCTAClick` — no code change needed.
- No new market claims or numbers introduced.
- `subtitleShort` prop on these two pages becomes unused and is removed there.

## Verification (reported as actually checked)

1. Typecheck (`bunx tsgo -p tsconfig.app.json --noEmit`).
2. Playwright at **390px, 768px, 1440px** on `/` and `/en/`:
   - exactly one `<h1>` per page with the new copy;
   - supporting headline + paragraph visible and not clipped at 390px;
   - both CTAs rendered, tappable (≥44px primary button height), correct hrefs;
   - screenshots confirm the portrait is not obscured by the new text.
3. Confirm the bottom CTA section no longer repeats the headline sentence.

No forms submitted, no test emails, no metadata or route changes.
