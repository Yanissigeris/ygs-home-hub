# Sprint 2A — Ajouter 35 liens internes contextuels FR (7 articles)

## Contexte
Les 7 articles cibles sont tous dans `src/data/blog-posts.ts` (vérifié). Aucun n'est dans `blog-posts-neighborhoods.ts` — ce fichier ne sera donc pas touché.

Toutes les routes cibles ont été vérifiées dans `src/App.tsx` :
- `/aylmer`, `/hull`, `/plateau`, `/chelsea`
- `/militaire-gatineau`, `/relocalisation-militaire-gatineau`, `/relocalisation-ottawa-gatineau`
- `/evaluation-gratuite-gatineau`, `/premier-achat-gatineau`, `/acheter-a-gatineau`, `/acheter-a-gatineau-depuis-ottawa`
- `/contact-yanis`, `/vendre-ma-maison-gatineau`, `/investir-plex-gatineau`

## Scope
- **Fichier modifié** : `src/data/blog-posts.ts` uniquement
- **Fichier non touché** : `src/data/blog-posts-neighborhoods.ts` (aucun des 7 slugs n'y figure)
- **Champs touchés** : `body` (FR) des 7 articles uniquement
- **Total** : 35 nouveaux liens markdown internes (5 par article)

## Méthode
Pour chaque modification, utiliser `code--line_replace` (ou `code--exec sed` pour les remplacements ponctuels uniques) avec le texte AVANT exact fourni dans la spec → texte APRÈS exact fourni dans la spec. Aucune reformulation. Les blocs "Pour aller plus loin" sont insérés entourés d'une ligne vide en haut et en bas.

## Modifications par article

### Article 1 — `aylmer-hull-plateau-quel-quartier-choisir` (4 liens phrase intro + 1 bloc 2 liens = 5)
- MOD 1.1 : remplacement phrase intro (3 liens : Aylmer, Hull, Plateau — wait, spec dit 5 nouveaux liens par article ; ici 3 inline + 2 dans le bloc = 5 ✓)
- MOD 1.2 : insertion bloc "Pour aller plus loin" (2 liens) avant `### Comment choisir?`

### Article 2 — `mutation-militaire-gatineau` (5 liens)
- MOD 2.1 : phrase intro (2 liens)
- MOD 2.2 : bloc "Pour aller plus loin" avant `### Mon expertise militaire` (2 liens)
- MOD 2.3 : ajout lien `/evaluation-gratuite-gatineau` (1 lien)

### Article 3 — `taxes-municipales-gatineau-vs-ottawa` (5 liens)
- MOD 3.1 : 1 lien sur "famille à Gatineau"
- MOD 3.2 : bloc "Pour aller plus loin" avant `### Mon avis` (2 liens)
- MOD 3.3 : 2 liens sur "acheter à Gatineau" et "calcul personnalisé"

### Article 4 — `inspection-preachat-gatineau-guide` (5 liens)
- MOD 4.1 : 1 lien "À Gatineau"
- MOD 4.2 : 1 lien "Plex"
- MOD 4.3 : bloc "Pour aller plus loin" avant `## Mon conseil` (2 liens)
- MOD 4.4 : 1 lien "premier achat à Gatineau"

### Article 5 — `conseils-premier-achat-maison-gatineau` (5 liens)
- MOD 5.1 : 1 lien "premiers acheteurs à Gatineau"
- MOD 5.2 : 1 lien "d'achat au Québec"
- MOD 5.3 : bloc "Pour aller plus loin" avant `## Mon accompagnement` (2 liens)
- MOD 5.4 : 1 lien "Contactez-moi"

### Article 6 — `vivre-pres-parc-gatineau-immobilier` (5 liens) — EXCEPTION : phrase nouvelle
- MOD 6.1 : insertion d'une phrase entière "Les secteurs les plus recherchés en bordure du parc sont [Chelsea](/chelsea) et le [Plateau d'Aylmer](/plateau)." entre `## Les quartiers aux portes du parc` et `### Chelsea` (2 liens)
- MOD 6.2 : bloc "Pour aller plus loin" avant `## Mon conseil` (2 liens)
- MOD 6.3 : 1 lien "vous alerter"

### Article 7 — `avantages-courtier-immobilier-gatineau` (5 liens)
- MOD 7.1 : 1 lien "Vendre"
- MOD 7.2 : 1 lien "Analyse comparative de marché (ACM)"
- MOD 7.3 : bloc "Pour aller plus loin" avant `## Mon approche` (2 liens)
- MOD 7.4 : 1 lien "Contactez-moi"

## Validation post-modification

```bash
# V1 : compter le delta de liens markdown internes (doit être +35)
grep -oE "\]\(/[^)]+\)" src/data/blog-posts.ts | wc -l

# V2 : lister toutes les routes utilisées et vérifier qu'elles existent
grep -oE "\]\(/[^)]+\)" src/data/blog-posts.ts | sort -u

# V3 : backticks équilibrés
test $(($(grep -c '`' src/data/blog-posts.ts) % 2)) -eq 0

# V4 : vérifier que `bodyEn`, `slug`, `title`, `seoTitle`, `metaDescription` 
# des 7 articles n'ont PAS été touchés (via diff visuel sur les hunks générés)
```

## Hors scope (non touché)
- `bodyEn` (sprint séparé)
- `src/data/blog-posts-neighborhoods.ts` (aucun slug ciblé)
- `src/App.tsx`, `src/pages/`, `src/components/`
- JSON-LD, slugs, titles, SEO, hreflang, metadata
- Tout autre article que les 7 listés
