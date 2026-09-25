# ContactPage.tsx — ProfileSection : ajout d'un paragraphe « Mes profils officiels »

Portée : `src/pages/ContactPage.tsx` uniquement. Aucun autre fichier, aucune prop, pas de HeroSection, pas de seo-routes.json, pas de modification des paragraphes existants. Pas de `npm run build`.

## Changement — insérer un paragraphe après celui de l'OACIQ (ligne 117)

Nouveau `<p className="prose-body mt-4">` inséré après le paragraphe « Je détiens un permis de courtier immobilier résidentiel de l'OACIQ » (lignes 115-117) et avant `<ContactCard` (ligne 119), avec exactement :

```text
<p className="prose-body mt-4">
  Mes profils officiels :{" "}
  <a href="https://www.oaciq.com/fr/trouver-un-courtier" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Registre de l'OACIQ</a>
  {" · "}
  <a href="https://www.centris.ca/fr/courtier-immobilier~yanis-gauthier-sigeris~re-max-direct-inc./g8867" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Centris</a>
  {" · "}
  <a href="https://www.realtor.ca/agent/2043379/yanis-gauthier-sigeris-216-ch-daylmer-gatineau-quebec-j9h1a4" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">REALTOR.ca</a>
  {" · "}
  <a href="https://avecuncourtier.com/fr/courtiers/nos-courtiers/112201-yanis-gauthier-sigeris" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Chambre immobilière de l'Outaouais</a>
  {" · "}
  <a href="https://www.remax-quebec.com/fr/courtiers-immobiliers/yanis.gauthier-sigeris" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">RE/MAX Québec</a>
</p>
```

Les cinq liens s'ouvrent dans un nouvel onglet (`target="_blank" rel="noopener noreferrer"`), style `text-accent underline underline-offset-2`.

## Inchangé

1er, 2e, 3e et 4e paragraphes existants, `ContactCard`, toutes les autres props de `ProfileSection`, le reste du fichier.

## Vérification

Typecheck `bunx tsgo -p tsconfig.app.json --noEmit` uniquement (pas de build). Aucun déploiement ni publication.
