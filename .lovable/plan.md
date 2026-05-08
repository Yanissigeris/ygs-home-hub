## Objective
Add the `brokerPerspective` prop to `src/pages/CoteDazurPage.tsx` to activate the broker perspective section already supported by `NeighborhoodTemplate`.

## Context
- `NeighborhoodTemplate` already supports the optional `brokerPerspective` prop (deployed in Phase A).
- Only `CoteDazurPage.tsx` needs to be modified; no other file changes.

## Change Detail

Insert the `brokerPerspective` prop between the existing `guide` and `cta` props in `src/pages/CoteDazurPage.tsx`:

```tsx
brokerPerspective={{
  observation: "Ce que je vois à Côte-d'Azur en ce moment : les acheteurs ont plus de choix qu'avant, donc une mise en marché efficace au bon prix devient déterminante. La majorité de mes acheteurs dans le secteur sont des familles qui cherchent un quartier mature et familial. Le secteur est très demandé, et les acheteurs qui le découvrent l'adorent.",
  dataPoint: "La majorité des bungalows que je vends à Côte-d'Azur partent en moins de 21 jours quand le prix est juste. Quand le prix est trop optimiste au départ, le délai s'allonge significativement.",
  takeaway: "Mon conseil aux propriétaires de Côte-d'Azur qui pensent vendre : prépare bien ta maison, répare les petits détails qui font une différence, et inscris au bon prix dès le départ. Sans ça, tu ne maximises pas le montant final et la vente prend plus de temps."
}}
```

## Validation
- TypeScript compiles without error.
- Only `CoteDazurPage.tsx` appears in the diff.
- The "Mon regard sur Côte-d'Azur" section renders between the inline CTA and the FAQ section.
- Other neighborhood pages remain unaffected.