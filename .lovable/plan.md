# Cohérence visuelle : retirer les ornements sur tout le site

Même nettoyage que l'accueil, appliqué aux blocs partagés (donc à toutes les pages, FR et EN, toutes tailles d'écran). Aucun texte, titre, lien, formulaire ni suivi n'est modifié.

## Fichier par fichier

**src/components/ProcessSteps.tsx** — retirer le `<span>` qui affiche `{s.num}` (gros « 01 / 02 / 03 » pâle). Le titre devient le premier élément de chaque carte. Les valeurs `num` restent dans les données (elles servent de clé). Touche toutes les pages vendeur, acheteur, plex, militaire, relocalisation, secteurs, FR et EN.

**src/pages/VerifierCourtierOaciqPage.tsx** — retirer le `<span>` du numéro d'étape (ligne 72), même logique.

**src/components/ReviewCard.tsx** — supprimer le guillemet décoratif géant en filigrane (bloc lignes 24 à 32) et le `overflow-hidden` devenu inutile. Les étoiles Lucide et le texte de l'avis restent.

**src/components/StatsSection.tsx** — supprimer les deux lettres/chiffres en filigrane (`ghost`) derrière chaque statistique, desktop et mobile, et le champ `ghost` des données. Remplacer « 5 ★ » par cinq étoiles Lucide avec étiquette accessible (« 5 étoiles sur 5 » / « 5 out of 5 stars »).

**src/components/GoogleReviewBadge.tsx** — remplacer les cinq caractères « ★ » par cinq icônes Lucide `Star` (mêmes taille et couleur Google), étiquette accessible inchangée.

**src/components/ValuationForm.tsx** — lignes 262 et 289 : remplacer « ★ 5/5 » par une étoile Lucide suivie de « 5/5 ».

**src/components/HeroSection.tsx** — remplacer les « 5 ★ » des statistiques (lignes 93 et 98) et « 5★ Google… » (lignes 992, 1014, 1059, 1065) par des étoiles Lucide, et retirer la puce « ● » de la ligne de mentions (ligne 820) en la remplaçant par un séparateur discret « · » déjà utilisé ailleurs dans le même bloc.

## Hors périmètre

AwardsMarquee (séparateurs du bandeau défilant), guillemets typographiques « » dans les citations et textes rédigés, données de propriétés, JSON-LD.

## Vérification

Typecheck, puis captures desktop (1440 px) et mobile (390 px) d'une page à étapes (FR et EN), d'une page témoignages et d'une page évaluation.
