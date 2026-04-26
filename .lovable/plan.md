## Objectif
Aligner `ServiceJsonLd.tsx` avec les schemas JSON-LD d'`index.html` en ajoutant `streetAddress` et `postalCode` à l'objet `address` du `RealEstateAgent` imbriqué.

## Changement

**Fichier** : `src/components/ServiceJsonLd.tsx` (lignes 29-34)

Ajouter deux champs à l'objet `address` :
- `streetAddress: "216 chemin d'Aylmer"` (avant `addressLocality`)
- `postalCode: "J9H 1A4"` (avant `addressCountry`)

Aucune autre modification dans le fichier. Le reste (telephone, email, areaServed, availableChannel, provider `@id`, etc.) reste strictement identique.

## Justification
Cohérence NAP (Name, Address, Phone) entre tous les schemas du site : `index.html` (RealEstateAgent + Person) et maintenant `ServiceJsonLd`.
