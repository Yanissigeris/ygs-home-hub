## Plan — Section "Mon regard" (BrokerPerspective) dans NeighborhoodTemplate

### Objectif
Ajouter une prop optionnelle `brokerPerspective` au composant `NeighborhoodTemplate` qui conditionnellement rend une section E-E-A-T "Mon regard sur [quartier]" avec portrait et credentials de Yanis Gauthier-Sigeris. Aucune page existante n'est impactée.

### Fichier concerné
- `src/components/NeighborhoodTemplate.tsx` uniquement

### Modifications (4 étapes)

#### 1. Import du portrait
Ajouter `import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";` dans le bloc d'imports existants.

#### 2. Prop optionnelle dans l'interface
Dans `NeighborhoodProps`, insérer avant la prop `cta` :
```ts
brokerPerspective?: { title?: string; observation: string; dataPoint?: string; takeaway?: string };
```

#### 3. Sous-composant `BrokerPerspective`
Créer le composant avant `NeighborhoodTemplate`, qui reçoit `data` et `neighborhoodName`. Il rend :
- Une section avec fond `var(--cream)`
- Label "L'avis du courtier" en `var(--gold-text)`
- Titre dynamique (défaut : "Mon regard sur [quartier]")
- Portrait circulaire (asset importé) + nom + credentials
- Paragraphe `observation` (obligatoire)
- Blocs optionnels `dataPoint` (bordure dorée gauche) et `takeaway` (italique)
- Styles exclusivement via Tailwind + variables CSS du design system existant

#### 4. Rendu conditionnel dans le JSX
Insérer entre `<InlineCTA />` et `<FAQSection />` :
```tsx
{p.brokerPerspective && (
  <BrokerPerspective data={p.brokerPerspective} neighborhoodName={p.jsonLd.name} />
)}
```

### Validation
- TypeScript compile sans erreur
- Pages sans `brokerPerspective` (toutes les pages actuelles) : aucun changement visuel
- L'asset `yanis-portrait-nobg.webp` est importé sans erreur de chemin
- Seul `NeighborhoodTemplate.tsx` apparaît dans le diff