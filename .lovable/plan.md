# ContactPage.tsx — ProfileSection : 2e paragraphe remplacé + 4e ajouté

Portée : `src/pages/ContactPage.tsx` uniquement. Aucun autre fichier, aucune prop, pas de HeroSection, pas de ContactCard, pas de seo-routes.json. Pas de `npm run build`.

## Changement 1 — remplacer le 2e paragraphe (lignes 109-111)

Texte actuel (début « Membre de l'Équipe Marty Waite ») remplacé par exactement :

```text
Courtier immobilier résidentiel depuis 2017, je fais partie de l'Équipe Marty Waite chez RE/MAX Direct depuis le début et j'ai complété plus de 300 transactions. RE/MAX m'a reconnu au Club 100 %, au Club Platine et au Temple de la renommée (2024). Mais ce qui me motive, c'est de savoir que mes clients prennent des décisions éclairées.
```

Classe `prose-body mt-4` conservée.

## Changement 2 — ajouter un 4e paragraphe après le 3e (« Investisseur immobilier moi-même »)

Nouveau `<p className="prose-body mt-4">` inséré après la ligne 114, avec exactement :

```text
Je détiens un permis de courtier immobilier résidentiel de l'OACIQ (n° 112201). Je travaille en français et en anglais, surtout à Aylmer, Hull, au Plateau, à Gatineau-centre, à Chelsea et à Cantley.
```

## Inchangé

1er paragraphe (lignes 106-108), `ContactCard`, toutes les autres props de `ProfileSection`, le reste du fichier.

## Vérification

Typecheck `bunx tsgo -p tsconfig.app.json --noEmit` uniquement (pas de build). Aucune déploiement ni publication.
