## Fichier modifié
- `src/components/SiteFooter.tsx` (UNIQUE fichier — composant bilingue avec rendering responsive dual via `lang` et classes Tailwind `sm:hidden`/`hidden sm:grid`).

FR et EN sont traités automatiquement par les mêmes JSX (les libellés viennent de `footerColumns`/`footerColumnsEn` et de variables ternaires). Aucune modification à `data/navigation*`.

## Constats d'audit (à valider avant exécution)

1. **Pas de composant Footer EN séparé.** Une seule passe couvre FR+EN.
2. **Pas d'image balloon RE/MAX décorative isolée.** Le seul `remax-balloon-official` est déjà dans le custom RE/MAX (ligne 35) et a déjà `alt=""` ET `aria-hidden="true"`. **Changement [3] déjà appliqué — aucune action requise.**
3. **Discrepancy logos affiliations.** Le brief mentionne « 4 logos » (MW, SIRVA, Temple, Enfant Soleil) mais le tableau `affiliationLogos` (lignes 27-44) en contient **6** (incluant RE/MAX Direct et Tranquilli-T) — et le brief lui-même dit ensuite « NE PAS retirer Tranquilli-T ou RE/MAX Direct ». Je ne retire/n'ajoute donc rien et j'uniformise la hauteur visuelle des **6** tuiles (cf. [4]).
4. **Grille affiliations.** Le rendu actuel est `flex flex-wrap` (ligne 225), pas `grid-cols-4`. Je n'altère pas ce layout — j'ajuste seulement la hauteur des images.

## Changements

### [1] `<p>` titres de colonnes → `<h3>` (visuellement identique)

- **Ligne 173** (desktop columns) — `<p className="mb-5" style={{...}}>` → `<h3 className="mb-5" style={{...}}>` autour de `{col.title}`. Classes/style préservés à l'identique.
- **Ligne 193** (popular links) — `<p>` → `<h3>` autour de `{popularLabel}`. Idem.
- **Ligne 222** (affiliations) — `<p>` → `<h3>` autour de `{affiliationsLabel}`. Idem.

### [1-bis] Mobile accordion — wrapper `<h3>` autour du `<button>`

- **`FooterAccordion`, lignes 59-74.** Wrap le `<button>` (lignes 60-63) dans un `<h3 style={{ margin: 0 }}>` pour neutraliser le margin par défaut du h3 et préserver l'apparence/comportement.
- Aucune classe ni handler ni `aria-expanded` du `<button>` modifié. Le panneau (`<div id={panelId}>`) reste hors du `<h3>`.

### [2] Wrap NAP dans `<address>`

- **Lignes 297-312** : `<div className="py-4 text-center" style={...}>` → `<address className="py-4 text-center not-italic" style={...}>`.
- Ajout de `not-italic` (classe Tailwind) uniquement pour neutraliser l'italique par défaut UA d'`<address>` — apparence visuelle strictement préservée.
- Contenu interne (deux `<p>`, liens `tel:` et `mailto:`, séparateurs `·`, textes FR/EN) **strictement intact**.
- Aucun microdata schema.org ajouté.

### [3] `aria-hidden="true"` sur le ballon RE/MAX
- **Déjà présent ligne 35.** Aucune action.

### [4] Uniformisation hauteur logos affiliations
- **Ligne 235** (img des logos non-custom) : remplacer `h-full max-h-[34px] w-auto max-w-[88px] object-contain ... sm:max-h-[38px] sm:max-w-[96px] lg:max-h-[38px] lg:max-w-[100px]` par `h-10 w-auto object-contain` (40px uniforme, ratio préservé). Filtres et opacités/transitions conservés.
- **Lignes 34-35** (custom RE/MAX, `height: 18`) : passer à `height: 28` pour rapprocher visuellement la tuile RE/MAX des autres (l'icône+balloon en duo reste plus petite que 40px logique pour ne pas exploser la rangée). Largeur auto, ratios préservés.
- Aucune modification au `tileStyle`, ni à la grille parent, ni aux `alt`, ni aux `href`, ni aux `src`, ni au nombre de logos.

## Préservé strictement (zéro changement)
- Tous textes (CTA, taglines, NAP, copyright, liens légaux, cookie banner non touché).
- Tous `href`, `to`, `tel:`, `mailto:`.
- Tous `alt` existants.
- Tous JSON-LD, meta, canonical, hreflang, robots, llms.txt (hors fichier).
- Palette, espacements généraux, comportement accordion (state, animation, `aria-expanded`, `aria-controls`).
- `data/navigation.ts` et `data/navigation-en.ts` (intouchés).
- Composants autres que `SiteFooter.tsx`.

## Vérifications post-implémentation (mentales)
- Hiérarchie : les nouveaux `<h3>` du footer ne montent pas au-dessus des h1/h2 des pages (h3 est cohérent sous le h2 de la section CTA `Prêt à passer à l'action?`).
- Apparence visuelle inchangée (même classes/styles inline).
- Accordion mobile fonctionne (handler/aria sur `<button>` intacts).
