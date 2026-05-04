# Add 301 redirects for /blog → /blogue

## File modified
`public/_redirects` (only file touched)

## Final content

```
# 301 — English-speaker URL guesses route to the canonical FR blog.
/blog       /blogue              301
/blog/*     /blogue/:splat       301

# SPA fallback — must remain LAST.
/*    /index.html   200
```

## Confirmations

- Only `public/_redirects` edited
- `netlify.toml` NOT touched
- No `/en/blog` redirect added (real canonical route preserved)
- 301 rules placed BEFORE the `/*` SPA fallback (order matters in Netlify `_redirects`)
- Existing SPA fallback line preserved verbatim
- `:splat` syntax used to forward the trailing path segment

## Post-deploy verification (manual)

- `curl -I https://yanisgauthier.com/blog` → `301` + `Location: /blogue`
- `curl -I https://yanisgauthier.com/blog/some-slug` → `301` + `Location: /blogue/some-slug`
- `https://yanisgauthier.com/blogue` → `200` (unchanged)
- `https://yanisgauthier.com/en/blog` → `200` (unchanged, not matched by `/blog` rule since Netlify matches from path start)
