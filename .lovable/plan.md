# Correctif de l'encart d'évaluation de l'accueil (3 résultats distincts)

## Ce qui change

L'encart d'évaluation en 3 étapes de la page d'accueil affiche aujourd'hui le remerciement même quand l'enregistrement ou l'envoi du courriel échoue. Il distinguera désormais trois résultats :

1. Enregistrement échoué : les renseignements saisis restent en place, un message d'erreur clair s'affiche en français ou en anglais, et une nouvelle tentative est possible.
2. Enregistrement réussi et notification réussie : remerciement habituel.
3. Enregistrement réussi mais notification échouée, ou exception après l'enregistrement : message « demande enregistrée », sans affirmer qu'un courriel a été envoyé et sans inviter à soumettre une deuxième demande.

Le bouton reste désactivé pendant le traitement et redevient actif seulement quand une nouvelle tentative est utile.

La configuration actuelle est conservée volontairement : destinataires, signatures et paramètres d'expédition inchangés, y compris l'adresse de l'équipe.

## Détails techniques

- src/components/ValuationWidget.tsx :
  - vérifier l'erreur de `supabase.from("valuation_leads").insert(...)`; en cas d'échec, rester à l'étape 2, afficher un état d'erreur FR/EN, réactiver le bouton;
  - vérifier l'erreur technique (`error` de `functions.invoke`) et l'erreur applicative (`data.error`) avant de considérer la notification réussie;
  - état `outcome: "full" | "saved-only"` pour l'étape 3, avec deux textes FR/EN distincts;
  - toute exception levée après un enregistrement réussi mène au résultat « enregistré seulement », jamais à une invitation à resoumettre;
  - `trackLead` déclenché dès l'enregistrement réussi.
- supabase/functions/send-email/index.ts : journaliser séparément l'échec de la notification interne et l'échec du courriel de confirmation au visiteur, sans nom, courriel, téléphone, adresse ni message dans les journaux (type de formulaire, langue et code de statut seulement). Le comportement de réponse existant est conservé pour ne pas modifier les autres formulaires. Aucun changement de destinataire, de signature ni d'expéditeur. La fonction sera redéployée.
- Tests simulés (aucun courriel réel, aucune demande en production) : échec d'enregistrement, succès complet, notification en échec, et exception levée après un enregistrement réussi; plus le contrôle de l'état désactivé du bouton. Puis vérification du code et de la compilation.

## Limite connue

Un appel qui n'atteint jamais le serveur, par exemple une coupure réseau, ne peut pas être journalisé par la fonction d'envoi : seule la trace côté navigateur existe. Cette limite sera rappelée dans le bilan.

## Non couvert

- Aucune soumission réelle ni courriel de test.
- Le déploiement de la fonction d'envoi est distinct de la publication du site; il sera précisé séparément dans le bilan.
