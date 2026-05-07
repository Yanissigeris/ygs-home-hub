# Plan: Two surgical SEO fixes in index.html

## Scope
Only `index.html` at repo root. Exactly two changes, ~10 lines total.

## Fix 1 — Remove `aggregateRating` from RealEstateAgent JSON-LD

Replace (around lines 134–141):

```
        "https://www.instagram.com/yanissigeris/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0", "bestRating": "5", "worstRating": "1",
        "ratingCount": "3", "reviewCount": "3"
      }
    }
```

With:

```
        "https://www.instagram.com/yanissigeris/"
      ]
    }
```

The trailing comma after `]` is removed at the same time so the JSON stays valid. `sameAs` array contents untouched.

## Fix 2 — Replace 3 references to og-image.png

In `index.html` only, replace every occurrence of:
`https://yanisgauthier.com/og-image.png`
with:
`https://yanisgauthier.com/og/og-default.jpg`

Expected 3 occurrences, all inside JSON-LD blocks:
- RealEstateAgent `image` (~line 76)
- RealEstateAgent `logo.url` (~line 79)
- Person `image` (~line 157)

`<meta property="og:image">` tags are not touched (they are per-route and not in this file's static head anyway).

## Constraints honored
- No other files touched.
- No changes to title/description/canonical/hreflang/og/twitter meta tags.
- No changes to other JSON-LD fields, scripts, head order, H1/H2, or noscript fallback.
- Both JSON-LD blocks remain valid JSON.

## Post-change verification (will run after edit)
1. `rg -n "aggregateRating" index.html` → 0 matches
2. `rg -n "og-image\.png" index.html` → 0 matches
3. `rg -n "og-default\.jpg" index.html` → exactly 3 matches
4. `git status --porcelain` shows only `index.html` modified
5. `node -e "..."` parse both JSON-LD script contents to confirm validity
