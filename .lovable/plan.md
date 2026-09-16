# Vérification du site et correctifs proposés

## Vérifié et conforme (contrôles réellement effectués)

- Les 12 pages FR/EN (accueil, vendre, plex/investir, évaluation, propriétés, contact) répondent en 200, à l'ouverture directe et après rechargement, aux largeurs 390, 768 et 1440 px.
- Aucun débordement horizontal (0 px) et un seul grand titre par page, aux trois largeurs. Aucune erreur d'exécution dans la page.
- Boutons de l'accueil, libellés et destinations réelles :
  - « Demander une analyse plex » vers /analyse-plex-gatineau/ (page en 200)
  - « Voir les propriétés » vers /proprietes/
  - « Obtenir mon évaluation » vers /evaluation-gratuite-gatineau/ (242 × 51 px)
  - « Parlons de votre projet » vers /contact-yanis/ (165 × 44 px)
  - « Request a plex analysis » vers /en/plex-analysis/ (page en 200), « View properties » vers /en/properties/, « Get my home valuation » vers /en/home-valuation/, « Let's discuss your plans » vers /en/contact/
- Les boutons français mènent uniquement à des pages françaises et les anglais à des pages anglaises; le seul lien qui change de langue est le sélecteur FR|EN, et il pointe vers la page équivalente (par exemple vendre <-> sell, investir plex <-> plex).
- Aucune étude de cas, terminée ou non, n'existe dans le site : rien de non fini n'est affiché.
- La compilation automatique la plus récente est réussie.
- Formulaire de contact et formulaire d'évaluation de page : champs nom et courriel obligatoires, bouton désactivé pendant l'envoi, message d'erreur en cas d'échec, et message de succès affiché uniquement après une réponse positive du service d'envoi.

## Problèmes trouvés (correctifs proposés, à approuver)

1. Encart d'évaluation de l'accueil : succès affiché même en cas d'échec
   L'encart en 3 étapes de la page d'accueil passe à l'écran « Merci » même si l'enregistrement ou l'envoi du courriel échoue, et il ignore l'erreur renvoyée par le service. Correctif : vérifier réellement la réponse, n'afficher le remerciement qu'en cas de succès, et afficher un message d'erreur clair (FR/EN) invitant à réessayer, avec le bouton désactivé pendant l'envoi. Aucun changement visuel autre que l'ajout du message d'erreur.

2. Dépendance restante à une adresse de l'équipe Marty Waite
   Les notifications de tous les formulaires (contact, évaluation, guides, analyse plex, consultation) sont envoyées à une seule adresse du domaine martywaite.com. La signature des courriels de confirmation mentionne aussi « Équipe Marty Waite » / « The Marty Waite Experience ». Je ne change aucune adresse sans que vous me fournissiez la nouvelle. Deux décisions à me confirmer :
   - l'adresse de réception à utiliser désormais;
   - si la mention de l'équipe doit rester dans la signature.

3. Adresse d'expédition par défaut
   Si aucune adresse d'expéditeur n'est configurée, les courriels partent d'une adresse de test du fournisseur, ce qui nuit à la livraison et peut les faire classer comme indésirables. Correctif proposé : configurer une adresse d'expédition à votre domaine (aucun changement d'hébergement ni de DNS de ma part sans votre accord).

## Détails techniques

- Correctif 1 dans src/components/ValuationWidget.tsx : contrôler l'erreur de `supabase.from(...).insert` et de `supabase.functions.invoke("send-email")`, remplacer le `catch { setStep(3) }` par un état d'erreur, ne passer à l'étape 3 que sur succès.
- Le point 2 concerne `NOTIFICATION_EMAIL` et la signature dans supabase/functions/send-email/index.ts; aucune modification tant que vous n'avez pas fourni l'adresse. Toute modification exigera un redéploiement de la fonction (indépendant du déploiement du site).
- Le point 3 concerne la variable d'expéditeur du service d'envoi, pas le code.

## Non vérifié ou bloqué

- Aucune livraison de courriel n'a été testée : aucun formulaire soumis, aucun courriel déclenché, conformément à votre demande. La livraison ne peut pas être considérée comme vérifiée à partir du code ou d'un message de succès.
- Vérifications faites en aperçu local seulement (rien publié), sur navigateur de bureau simulé, sans appareils réels ni largeurs autres que 390, 768 et 1440 px.
- Les valeurs des clés et secrets n'ont pas été affichées ni consultées.

## Étapes manuelles pour vous (après les correctifs)

1. Ouvrir /contact-yanis/ et remplir le formulaire avec le nom « TEST Yanis 16 sept » et votre propre courriel, message « Test interne, ne pas répondre ».
2. Envoyer, puis confirmer l'affichage du message de succès.
3. Vérifier la boîte de réception de l'adresse de notification (et le dossier indésirable) pour le courriel « Nouveau contact — TEST Yanis 16 sept », puis le courriel de confirmation reçu à votre adresse.
4. Répéter avec l'encart d'évaluation de l'accueil, adresse « 1 rue Test », pour valider les deux parcours.
5. Me dire ce qui est arrivé ou non; j'ajusterai en conséquence.
