# Plan : icônes Lucide, retrait du bouton d'appel flottant

1. **CookieConsent.tsx** : 🍪 → `<Cookie size={16}/>` (bannière, ligne 381) et `<Cookie size={18}/>` (bouton de réouverture, ligne 447), strokeWidth 1.5, aria-hidden. Textes et logique intacts.
2. **StickyMobileCTA.tsx** : callLabel "Appeler" / "Call" sans emoji ; `<Phone size={16}/>` avant le libellé du lien tel: avec gap 6 px. trackCTAClick inchangé.
3. **CTASection.tsx** : 📞 819-210-3044 → `<Phone size={14}/>` + numéro, inline-flex.
4. **GoogleReviewBadge.tsx** : composant Stars → cinq Lucide Star (size 12, fill currentColor, strokeWidth 1.5), aria-label conservé.
5. **Bouton flottant desktop** : retirer import/montage WhatsAppButton de SiteLayout.tsx, supprimer WhatsAppButton.tsx, purger les keyframes et règles .floating-call-* de index.css. Ne pas toucher analytics.ts.

Vérification : typecheck + captures (bannière cookies, barre mobile, section CTA, badge Google, absence du bouton flottant).
