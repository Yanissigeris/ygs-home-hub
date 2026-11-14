# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Homeowners in the Outaouais (Gatineau, Aylmer, Hull, Buckingham, Cantley, Chelsea, Val-des-Monts) whom Yanis Gauthier-Sigeris has already evaluated and who are not ready to sell. They open their private « Ma propriété » page from an update email, mostly on a phone, a few times a year.
- Homeowners who do not know Yanis yet and land on the public « Suivi de valeur » signup page from his emails, flyer or social posts. Their job: understand in seconds what they get, then ask for an evaluation and sign up.
- French first, with a tutoiement variant and an English version.

## Product Purpose

yanisgauthier.com is the website of Yanis Gauthier-Sigeris, residential real estate broker (RE/MAX Direct, Équipe Marty Waite, YGS brand). The « Suivi de valeur » is a value tracker: Yanis starts from the value range of his own analysis, adjusts it each quarter with the APCIQ barometer for the owner's sector, reviews it himself, and publishes it on a private page. Success: the owner understands exactly what the number means, trusts it, and calls Yanis when they think about selling.

## Positioning

A real broker's own analysis, reviewed by him before every update, not an automated estimate. Yanis gives the numbers and the options, the owner decides.

## Operating Context

- The private page opens by a private link with no password, sent by email after Yanis approves an update.
- Market figures update on their own each quarter; the owner's range changes only after Yanis approves it.
- The signup form goes through the site's existing valuation email (Resend) with the consent text and timestamp.

## Capabilities and Constraints

- Two standalone static pages outside the React app: `public/ma-propriete/app.html` (served at /ma-propriete/ and /en/my-property/) and `public/suivi-de-valeur/app.html` (served at /suivi-de-valeur/ and /en/home-value-tracker/). Both are noindex, carry no Google Analytics, and use only local fonts and images (CSP `connect-src 'self'`).
- Data for « Ma propriété » comes from the Netlify function `/.netlify/functions/ma-propriete` (demo token `demo`).
- Every page text follows Yanis's voice and anti-AI rules (no em or en dashes, no semicolons, no tricolons, Québec typography) and passes `verif_texte.py` in site mode.
- The range is never called a « valeur estimée » or an appraisal. Limits of the number stay next to it.
- Netlify production deploys cost credits: changes ship in one batch after Yanis approves a preview.

## Brand Commitments

Confirmed binding by Yanis (2026-11-13):
- RE/MAX colors: bleu nuit #000E35 and rouge vif #FF1200. The old gold and petrol palette reads as AI and is out.
- DM Sans as the typeface.
- His YGS monogram in a prominent place. YGS dominates; RE/MAX and Équipe Marty Waite are secondary.
- His own photo shown large. Never photos of clients.
- Style: professional, modern, clean (« épuré »), never « trop vendeur », never template-like.
- Signature line: « Je vous donne les chiffres et les options, vous décidez. »

## Evidence on Hand

- Over 300 transactions in the Outaouais since 2017 (source: his Centris history). RE/MAX Hall of Fame 2024, Club Platine, Club 100 % Or.
- Logos: `public/ma-propriete/logo-ygs-white.webp`, `logo-remax.webp`, `logo-mw-white-transparent.webp`. Portraits in `src/assets/` (yanis-portrait-nobg*, yanis-about*).
- No testimonials or client photos may be invented or used.

## Product Principles

1. The owner understands what the number is, where it comes from and what it does not say, without help.
2. Yanis is visibly the person behind the number.
3. Calm and precise beats persuasive. Nothing pushes the owner to sell.
4. Phone first.
