## Remove unused `socials` variable from `public/jsonld-routes.js`

Delete line 9 of `public/jsonld-routes.js` — the dead `var socials=[...]` declaration inside the IIFE — leaving the surrounding wrapper and all other data intact.

### Verified facts

- File is currently 10 lines / 28175 bytes.
- Line 1 = `(function(){`; line 10 = `})();`. Removing line 9 leaves the IIFE wrapper intact (new line 9 becomes `})();`).
- `rg -c socials public/jsonld-routes.js` returns `1` — the declaration is the only reference; safe to remove.
- Canonical social URLs already live in the `sameAs` array of `ygs-jsonld-static` in `index.html`, so no information is lost.

### Change

`public/jsonld-routes.js`:
- Delete line 9 (the entire `var socials=[...];` line).
- Lines 2–8 (breadcrumb, neighborhood, FAQ data, injection logic) remain byte-identical.

### Validation

- File becomes 9 lines, ~27996 bytes.
- `rg "socials" public/jsonld-routes.js` returns 0 matches.
- No other file is touched.
