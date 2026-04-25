## Pass 4 — Update `ygs-neighborhood-jsonld` in `public/jsonld-routes.js`

Single-file, two-string edit. The targets are both on line 7, inside the `inj("ygs-neighborhood-jsonld", {...})` call.

### Edits

1. `email:"yanis@ygsimmo.ca"` → `email:"yanis@martywaite.com"`
2. `knowsLanguage:["fr","en"]` → `knowsLanguage:["fr-CA","en-CA"]`

### What is NOT touched

- `bc`, `nh`, `faq`, `socials` data tables — untouched
- `inj` function, breadcrumb logic, FAQ logic, `parentOrganization` — untouched
- All other fields in the neighborhood block (`@context`, `@type`, `name`, `description`, `url`, `telephone`, `image`, `address`, `geo`, `areaServed`) — untouched
- No other file (`index.html`, `ServiceJsonLd.tsx`, noscript fallback) — untouched
- No reformatting/minifying of the rest of the file

### Validation

- `git diff` should show exactly two changed substrings on line 7
- Rest of file byte-identical
- JSON object remains valid (matched braces/quotes/commas preserved)
- Aligns neighborhood schema with the canonical email + locale tags now used in the static `RealEstateAgent` and `Person` blocks

### Remaining inconsistencies (later passes, per your instruction)

- `<noscript>` block in `index.html` still shows `yanis@ygsimmo.ca`
- `src/components/ServiceJsonLd.tsx` not yet reviewed for canonical email/locale alignment
