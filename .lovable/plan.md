# Fix 22 liens internes cassés dans les articles de blog

## Contexte
Les champs `body` (FR) et `bodyEn` (EN) des 46 articles dans `src/data/blog-posts.ts` et `src/data/blog-posts-neighborhoods.ts` contiennent des liens markdown internes vers des routes qui n'existent pas dans `src/App.tsx`.

## Scope
- Modifier UNIQUEMENT les deux fichiers `src/data/blog-posts.ts` et `src/data/blog-posts-neighborhoods.ts`
- Ne PAS toucher : slugs, titles, SEO metadata, JSON-LD, App.tsx, pages/
- Préserver le formatting (indentation, line endings)

## Étape 1 — Search & Replace globaux (6 remplacements)
Appliquer sur LES DEUX fichiers simultanément :

1. `](/gatineau-centre)` → `](/gatineau)`
2. `](/buckingham)` → `](/buckingham-masson-angers)`
3. `](/vendre)` → `](/vendre-ma-maison-gatineau)`
4. `](/blogue/renovations-qui-ajoutent-valeur-maison-gatineau)` → `](/blogue/renovations-qui-augmentent-valeur-maison)`
5. `](/en/gatineau-centre)` → `](/en/gatineau)`
6. `](/en/blog/renovations-adding-value-gatineau)` → `](/en/blog/renovations-that-increase-home-value)`

Chaque pattern inclut le `]` ou `](` initial pour ne matcher que les liens markdown, pas du texte brut.

## Étape 2 — Fix manuel contextuel (2 occurrences)
Article : `3-erreurs-prix-vendeur-gatineau-2026` (bodyEn uniquement)

- B1 — Lien ancré "property valuation in Gatineau" : `/en/sell-home` → `/en/home-valuation`
- B2 — Lien ancré "Gatineau" (bio courtier) : `/en/sell-home` → `/en/gatineau`

Ces 2 occurrences seront corrigées individuellement car elles ont des cibles différentes selon leur contexte.

## Étape 3 — Validation post-modification
Exécuter les 7 greps de vérification. Tous doivent retourner 0 résultat :
```
grep -F '](/gatineau-centre)' src/data/blog-posts*.ts
grep -F '](/buckingham)' src/data/blog-posts*.ts
grep -F '](/vendre)' src/data/blog-posts*.ts
grep -F '](/blogue/renovations-qui-ajoutent-valeur-maison-gatineau)' src/data/blog-posts*.ts
grep -F '](/en/gatineau-centre)' src/data/blog-posts*.ts
grep -F '](/en/blog/renovations-adding-value-gatineau)' src/data/blog-posts*.ts
grep -F '](/en/sell-home)' src/data/blog-posts*.ts
```

Vérifier que les liens valides restent intacts :
```
grep -F '](/buckingham-masson-angers)' src/data/blog-posts*.ts  # >= 1
grep -F '](/en/buckingham)' src/data/blog-posts*.ts             # >= 1
grep -F '](/vendre-ma-maison-gatineau)' src/data/blog-posts*.ts # >= 1
```
