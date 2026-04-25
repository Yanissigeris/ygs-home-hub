## Pass 3 — Replace `ygs-person-jsonld` JSON in `index.html`

Single-file, single-block edit. Replace the JSON body of `<script type="application/ld+json" id="ygs-person-jsonld">` in `index.html` (currently lines 154–186) with the JSON you provided.

### What changes (vs. current block)

- **jobTitle**: `Courtier immobilier` → `Courtier immobilier résidentiel`
- **description**: expanded to mention ~9 years of experience and RE/MAX Hall of Fame
- **email**: `yanis@ygsimmo.ca` → `yanis@martywaite.com` (matches canonical email set in Pass 2)
- **worksFor**: simplified to a pure `@id` reference to `#realestateagent` (removed inline `@type` and `name` — cleaner cross-reference, no contradiction risk)
- **knowsLanguage**: `["fr","en"]` → `["fr-CA","en-CA"]` (aligns with RealEstateAgent block)
- **sameAs**: expanded from 3 → 5 URLs (adds LinkedIn, Centris FR, Realtor.ca; replaces RE/MAX Québec link; keeps Facebook + Instagram)
- All other fields (@context, @type, @id, name, givenName, familyName, url, image, telephone, address) unchanged

### What is NOT touched

- `<script id="ygs-jsonld-static">` (RealEstateAgent) — untouched
- `<script id="ygs-website-jsonld">` (WebSite) — untouched
- `<noscript>` block (still shows `yanis@ygsimmo.ca` — flagged for a later pass)
- `src/components/ServiceJsonLd.tsx` — untouched
- `public/jsonld-routes.js` — untouched
- No visible content, styles, meta, or other files

### Validation after edit

- Confirm valid JSON (no trailing commas, balanced braces)
- Confirm script `id` remains unique (`ygs-person-jsonld`)
- Confirm `worksFor.@id` matches the `@id` declared in the RealEstateAgent block (`https://yanisgauthier.com/#realestateagent`) — verified, exact match

### Known remaining inconsistency (to address in a later pass)

The `<noscript>` fallback at the bottom of `index.html` still contains `yanis@ygsimmo.ca`. After this pass, both JSON-LD schemas (RealEstateAgent + Person) will use the canonical `yanis@martywaite.com`, but the noscript block will still expose the old placeholder. This is intentional per your instruction to handle each location in a dedicated pass.
