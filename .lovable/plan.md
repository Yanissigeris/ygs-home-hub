## Modification de `public/jsonld-routes.js` (ligne 7)

Modification chirurgicale du bloc `address` dans le schema neighborhood dynamique pour aligner la NAP avec les autres schemas du site.

### Changement

**Trouver** (occurrence unique dans le fichier) :
```
address:{"@type":"PostalAddress",addressLocality:n[0],addressRegion:"QC",addressCountry:"CA"}
```

**Remplacer par** :
```
address:{"@type":"PostalAddress",streetAddress:"216 chemin d'Aylmer",addressLocality:"Gatineau",addressRegion:"QC",postalCode:"J9H 1A4",addressCountry:"CA"}
```

### Détails techniques

3 modifications en une ligne :
1. Ajout de `streetAddress:"216 chemin d'Aylmer"` après `"@type":"PostalAddress"`
2. `addressLocality:n[0]` (variable dynamique du nom de quartier) → `addressLocality:"Gatineau"` (chaîne fixe)
3. Ajout de `postalCode:"J9H 1A4"` après `addressRegion:"QC"`

### Justification

- Les quartiers (Aylmer, Hull, Plateau, etc.) sont des secteurs de Gatineau, pas des municipalités séparées. L'adresse postale officielle reste "Gatineau".
- Garder `addressLocality:n[0]` créait un conflit NAP avec `index.html`, `ServiceJsonLd.tsx`, `PontiacPage.tsx` et `PontiacPageEn.tsx` qui utilisent tous "Gatineau" + le streetAddress + postalCode complets.

### Hors scope

Aucun autre bloc du fichier n'est touché : les FAQ schemas (`/chelsea`, `/cantley`, `/val-des-monts`, `/masson-angers`, `/pontiac`, `/cote-dazur-gatineau`, `/limbour` et équivalents EN), les BreadcrumbList et tout autre contenu restent strictement intacts.

### Fichier modifié

- `public/jsonld-routes.js`
