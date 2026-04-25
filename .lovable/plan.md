## Update noscript contact email in index.html

Replace both occurrences of `yanis@ygsimmo.ca` with `yanis@martywaite.com` on the contact paragraph inside the `<noscript>` fallback block at the bottom of `index.html`.

### Change

In the line:
```html
<p>Téléphone : <a href="tel:+18192103044">819-210-3044</a> · Courriel : <a href="mailto:yanis@ygsimmo.ca">yanis@ygsimmo.ca</a></p>
```

Both `yanis@ygsimmo.ca` (mailto attribute value and visible link text) become `yanis@martywaite.com`.

### Constraints

- Only `index.html` is touched.
- Only that single line changes; exactly two `ygsimmo.ca` → `martywaite.com` substitutions.
- No JSON-LD blocks (`ygs-jsonld-static`, `ygs-person-jsonld`, `ygs-website-jsonld`) modified.
- No other noscript content (services list, sectors list, headings, phone) touched.
- No reformatting, no other meta/style/content changes.

### Result

The noscript crawler fallback now displays the canonical email `yanis@martywaite.com`, fully aligning `index.html` with all JSON-LD schemas updated in prior passes. Grep for `yanis@ygsimmo.ca` in `index.html` returns zero matches.
