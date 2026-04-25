## Pass 2 — Replace `ygs-jsonld-static` JSON in `index.html`

Single-file edit: replace the JSON body of `<script type="application/ld+json" id="ygs-jsonld-static">` in `index.html` (currently lines ~62–119) with the new JSON you provided.

### What changes (vs. current block)

- **alternateName** added: `["Yanis Gauthier-Sigeris", "YGS Immobilier"]`
- **email** changed: `yanis@ygsimmo.ca` → `yanis@martywaite.com`
- **areaServed** adds `Outaouais` (AdministrativeArea)
- **knowsLanguage** changed: `["fr","en"]` → `["fr-CA","en-CA"]`
- **knowsAbout** added (9 topics)
- **memberOf** gains `url: https://remax-direct.com`
- **award** added: Hall of Fame, Platinum Club, 100% Club
- **sameAs** expanded from 3 → 14 URLs (Centris FR/EN, Realtor.ca, AvecUnCourtier FR/EN, RE/MAX Québec FR/EN, RE/MAX Direct FR/EN, Marty Waite FR/EN, LinkedIn, Facebook, Instagram)
- **aggregateRating**, telephone, address, openingHours, priceRange, description, image, logo, name, @id, @type, url: unchanged

### What is NOT touched

- No other `<script>` tag (`ygs-person-jsonld`, `ygs-website-jsonld`)
- No other file (`public/jsonld-routes.js`, `src/components/ServiceJsonLd.tsx`, etc.)
- No visible content, no styles, no meta tags

### ⚠️ Flag for your confirmation (will proceed as instructed unless you say otherwise)

Saved project memory states:
- Public email = `yanis@ygsimmo.ca`
- `yanis@martywaite.com` = notifications inbox only

The new JSON exposes `yanis@martywaite.com` as the public schema email. This contradicts the existing memory rule and will also conflict with:
- `<noscript>` block in `index.html` (still shows `yanis@ygsimmo.ca`)
- `src/components/ServiceJsonLd.tsx` (Service schemas still emit `yanis@ygsimmo.ca`)
- Person schema `ygs-person-jsonld` in `index.html` (still `yanis@ygsimmo.ca`)

Result: Google will see two different emails for the same entity across schemas — exactly the kind of inconsistency Pass 2 is supposed to eliminate.

I will apply the change exactly as you wrote it. If the email swap was intentional, I will also update the memory rule afterward. If it was a typo, reply with the correct email before approving and I'll use that instead.
