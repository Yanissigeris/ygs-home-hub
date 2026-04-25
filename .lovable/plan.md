## Update canonical email in ServiceJsonLd.tsx

Surgical one-line change in `src/components/ServiceJsonLd.tsx` (line 30) inside the `provider` object of the Service schema.

### Change

Replace:
```ts
        email: "yanis@ygsimmo.ca",
```

With:
```ts
        email: "yanis@martywaite.com",
```

### Constraints

- Only this one file is touched.
- Only the email value changes (`ygsimmo.ca` → `martywaite.com`).
- No other field in the schema is modified: `name`, `telephone`, `address`, `serviceType`, `areaServed`, `availableChannel`, `provider.@id`, `provider.name`, `provider.url`, etc. all remain byte-identical.
- No reformatting, no import changes, no visible content/style changes.

### Result

The Service schema's `provider` RealEstateAgent will use the canonical public email `yanis@martywaite.com`, matching `ygs-jsonld-static`, `ygs-person-jsonld`, and `ygs-neighborhood-jsonld`.

### Memory update

Also update `mem://project/contact-info` to confirm the canonical public email is `yanis@martywaite.com` (already established in prior passes; this just ensures it's recorded).
