# Prompt B — Contraste des boutons or (5 fichiers)

Correctif visuel ciblé. Règle appliquée : un fond de bouton or utilise `var(--gold-bright)` avec texte `var(--ink)` ; texte/bordure or sur fond navy utilise `var(--gold-bright)`. `var(--gold)` reste réservé aux filets et ornements. Aucun libellé ne change (les libellés partent dans GA4 comme `cta_label`).

Hors périmètre (confirmé interdit) : slugs, redirections, libellés de navigation, H1, title, meta description, champs de formulaire, appels trackEvent/trackCTAClick et leurs paramètres, textes de consentement, prerender.mjs, JSON-LD, valeurs des tokens dans src/index.css, nouvelles dépendances, animations.

## 1. src/components/SiteFooter.tsx (ligne 127)

Bouton « Évaluation gratuite → » (Link final CTA) :
- `background: "var(--gold)"` → `background: "var(--gold-bright)"`
- Le `onMouseLeave` ligne 129 remet `background: "var(--gold)"` → le changer aussi en `var(--gold-bright)`, sinon le bouton retombe sur l'ancien or après le survol. Le hover `onMouseEnter` (ligne 128, `var(--gold2)`) reste inchangé.
- Texte `var(--ink)` déjà correct.

## 2. src/components/StickyMobileCTA.tsx (lignes 112–114)

Bouton principal de la barre mobile collante :
- Ligne 114 : `background: "var(--gold)"` → `background: "var(--gold-bright)"`
- Ligne 112 (même Link) : classe `text-white` → `text-[var(--ink)]`
- `CTA_BY_INTENT` intact, `trackCTAClick` intact.

## 3. src/components/CookieConsent.tsx

Textes et logique de consentement intacts. Quatre valeurs de couleur :
- Bouton « OK » compact (lignes 347–348) : `background: "var(--gold)"` → `var(--gold-bright)` et `border: "1px solid var(--gold)"` → `border: "1px solid var(--gold-bright)"`
- Lien « En savoir plus » (ligne 385) : `color: "var(--gold)"` → `color: "var(--gold-bright)"`
- Bouton « Tout accepter » grande bannière (ligne 414) : `background: "var(--gold)"` → `background: "var(--gold-bright)"` (`border: "none"` et classe `text-[var(--ink)]` déjà corrects)

## 4. src/components/InstagramGrid.tsx (ligne 57)

Bouton « Suivre → » :
- `border: "1.5px solid #A88A5A"` → `border: "1.5px solid var(--gold-bright)"`
- `color: "#A88A5A"` → `color: "var(--gold-bright)"`
- Rien d'autre dans le fichier (le filet `before:bg-[#A88A5A]` ligne 34 est un ornement, conservé).

## 5. src/index.css (lignes 525–526) — optionnel, inclus

Règle hover des liens du pied de page :
- `footer a:hover { color: #A88A5A !important; }` → `color: var(--gold-bright) !important;`
- Aucune autre valeur de token modifiée.

## Vérification

- Captures Playwright à 1440 px et 390 px : pied de page (bouton Évaluation gratuite + hover), bannière cookies desktop et mobile, barre mobile collante, bouton « Suivre ».
- Typecheck sans erreur ; aucun changement de libellé ni d'appel GA4.
