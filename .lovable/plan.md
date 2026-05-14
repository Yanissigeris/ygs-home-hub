## Summary
Enrich the existing `RealEstateAgent` JSON-LD in `index.html` with `geo` coordinates, `hasMap`, and the Google Business Profile URL to strengthen Google Maps Pack signals across all 208 prerendered routes.

## Files to modify
- `index.html` — 1 file only

## Changes

### Change 1 — Add `geo` block after `address`
Insert immediately after the closing `}` of the existing `"address"` object (after `"addressCountry": "CA"`):

```json
,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.3956722,
    "longitude": -75.8305061
  }
```

### Change 2 — Add `hasMap` after `geo`
Insert immediately after the closing `}` of the new `"geo"` object:

```json
,
  "hasMap": "https://maps.app.goo.gl/JCxqwYWnv9S3ZUxVA"
```

### Change 3 — Append GBP URL to `sameAs` array
The `sameAs` array currently ends with `"https://www.instagram.com/yanissigeris/"`. Add a comma to that line and append a new final entry:

```json
,
  "https://maps.app.goo.gl/JCxqwYWnv9S3ZUxVA"
```

## Constraints preserved
- No other fields of the `RealEstateAgent` block are modified.
- The `Person` and `WebSite` JSON-LD blocks that follow are untouched.
- No other project files are modified.
- Existing 2-space indentation is preserved.
- The `sameAs` deduplication is left as-is (FR/EN variants intentionally kept).

## Validation
- Post-edit: verify the modified JSON-LD is valid JSON (no missing/extra commas).
- Post-deploy: confirm `geo` and `hasMap` appear in View Source on both `/` and `/aylmer/`.
- Optionally test via https://search.google.com/test/rich-results.