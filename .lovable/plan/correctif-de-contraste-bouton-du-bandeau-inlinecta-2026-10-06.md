# Correctif de contraste — bouton du bandeau InlineCTA

## Problème
Dans `src/components/InlineCTA.tsx`, le bouton utilise la variante "hero", dont le libellé est `--gold-text` (#5C4423) sur fond `#A88A5A`. Sur le bandeau foncé `.cta-band` (fond `var(--ink)` = #17303B), le contraste tombe à 1,51:1 : le bouton est presque illisible.

La variante "hero" elle-même ne doit pas être modifiée : elle est utilisée ailleurs sur fond clair, où `--gold-text` est correct.

## Correctif
Un seul fichier modifié : `src/components/InlineCTA.tsx`. Aucun autre fichier, aucun changement de la variante "hero" dans `src/components/ui/button.tsx`.

Remplacer exactement la ligne :

```tsx
      <Button size="default" variant="hero" asChild onClick={() => trackCTAClick(buttonLabel, "inline-cta")}>
```

par :

```tsx
      {/* The "hero" variant uses dark --gold-text for light backgrounds. This band is dark (--ink),
          so the label and border switch to --gold-bright here (6.67:1 on --ink). */}
      <Button
        size="default"
        variant="hero"
        asChild
        className="border-[var(--gold-bright)] text-[var(--gold-bright)] hover:bg-[var(--gold-bright)] hover:text-[var(--ink)]"
        onClick={() => trackCTAClick(buttonLabel, "inline-cta")}
      >
```

Les classes locales surpassent celles de la variante : libellé et bordure passent à `--gold-bright` (#D4AF6F), contraste vérifié 6,67:1 sur `--ink`; au survol, fond `--gold-bright` avec texte `--ink`.

## Vérifications préalables effectuées
- La ligne cible dans `InlineCTA.tsx` (ligne 23) correspond exactement au texte à remplacer.
- `--gold-bright: #D4AF6F` existe dans `src/index.css` (:root, ligne 63).
- `.cta-band` (index.css, ligne 354) a bien `background: var(--ink)`.

## Contraintes respectées
- Aucun autre fichier touché (ni `button.tsx`, ni `index.css`, ni les textes ou liens).
- `npm run build` non lancé; typecheck seulement après application.
- Texte, lien, mise en page et suivi analytics (`trackCTAClick`) inchangés.
