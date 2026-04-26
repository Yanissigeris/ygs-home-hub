## Corriger aggregateRating dans le JSON-LD RealEstateAgent

Mettre à jour `index.html` ligne 145 pour refléter le vrai compte de reviews Google Business Profile (3 au lieu de 25).

### Changement

`index.html` ligne 145, bloc `aggregateRating` du schema `RealEstateAgent` (id `ygs-jsonld-static`) :

- Avant : `"ratingCount": "25", "reviewCount": "25"`
- Après : `"ratingCount": "3", "reviewCount": "3"`

`ratingValue`, `bestRating`, `worstRating` et le reste du schema (name, telephone, etc.) restent inchangés.

### Pourquoi

Aligner les données structurées avec le compte réel de reviews évite un signalement Google "schema markup mismatch" dans Search Console et préserve l'éligibilité aux rich snippets.
