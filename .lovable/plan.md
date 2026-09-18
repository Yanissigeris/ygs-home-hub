# Verrouiller l'outil d'admin de génération d'images

Objectif : personne d'autre que vous ne peut déclencher une génération d'image (donc dépenser vos crédits), et vous conservez l'accès grâce à une page de connexion créée dans le même changement.

## 1. Connexion par courriel et mot de passe

- Activation de la connexion par courriel et mot de passe sur le backend, sans courriel de confirmation (votre compte sera créé une seule fois depuis le tableau de bord, aucune inscription publique n'est offerte sur le site).
- Nouvelle page de connexion à `/admin/login` : deux champs (courriel, mot de passe), un bouton désactivé pendant le traitement, un message d'erreur clair en cas d'identifiants refusés. Aucun lien « créer un compte », aucun lien vers cette page depuis le site public.
- Une fois connecté, redirection vers `/admin/image-gen`. Un bouton « Se déconnecter » est ajouté sur la page d'admin.

## 2. Route d'admin protégée

`/admin/image-gen` vérifie la session au chargement : sans session active, redirection vers `/admin/login`. Pendant la vérification, un état de chargement neutre s'affiche (pas de contenu d'admin visible une fraction de seconde).

## 3. La fonction de génération refuse les inconnus

`supabase/functions/generate-image/index.ts` : avant tout appel à la passerelle IA, la requête doit porter un jeton d'utilisateur valide, sinon réponse 401. Le bloc OPTIONS et les en-têtes CORS restent exactement tels quels ; l'écriture dans la table et dans le bucket continue d'utiliser la clé de service.

## 4. Règles d'accès à la table des images

Migration : les règles « n'importe qui peut insérer » et « n'importe qui peut supprimer » sur `generated_images` sont remplacées par des règles réservées aux utilisateurs connectés. La lecture publique est conservée (les images restent affichables sur le site). `valuation_leads` n'est pas touchée.

## 5. Suppression réelle des fichiers

Même migration : ajout d'une règle de suppression sur le stockage pour le dossier `ai-images`, réservée aux utilisateurs connectés. Aujourd'hui le bouton Supprimer retire la ligne mais laisse le fichier en place ; après ce changement, le fichier part aussi.

## 6. Fichiers d'environnement non suivis

Ajout de `.env`, `.env.local` et `.env.*.local` à `.gitignore`.

---

## Détails techniques

- `supabase--enable_email_auth`, puis `configure_auth` avec `auto_confirm_email: true` et `disable_signup: true`.
- Nouvelle page `src/pages/AdminLogin.tsx` : `supabase.auth.signInWithPassword`, `onAuthStateChange` + `getSession` pour rediriger si déjà connecté. Route ajoutée dans `src/App.tsx` hors `SiteLayout`, comme `/admin/image-gen`. `PageMeta` avec `noindex`.
- `src/pages/AdminImageGen.tsx` : garde de session (`getSession` + `onAuthStateChange`), `<Navigate to="/admin/login" replace />` si absente ; bouton `signOut`.
- Edge function : lecture de l'en-tête `Authorization`, création d'un client avec `SUPABASE_URL` + `SUPABASE_ANON_KEY` et `global.headers.Authorization` relayé, puis `auth.getUser()`. Absence d'en-tête ou `error`/`!user` → 401 JSON avec les `corsHeaders` existants. La clé de service reste utilisée pour l'upload et l'insert. `verify_jwt` n'est pas modifié dans `config.toml` (la clé anon est un JWT public, cela ne fermerait rien).
- Migration SQL :

```sql
DROP POLICY "Anyone can insert generated images" ON public.generated_images;
DROP POLICY "Anyone can delete generated images" ON public.generated_images;

CREATE POLICY "Authenticated can insert generated images"
  ON public.generated_images FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can delete generated images"
  ON public.generated_images FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated can delete AI images"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'ai-images');
```

La politique SELECT publique de `generated_images` et celles du bucket sont laissées intactes. Les GRANT Data API sont vérifiés et ajoutés si `authenticated` n'en a pas.

## Vérifications prévues

- Typecheck `bunx tsgo -p tsconfig.app.json --noEmit` et lecture du journal de compilation.
- `/admin/image-gen` sans session redirige vers `/admin/login` (Playwright sur l'aperçu local).
- Appel de la fonction sans jeton utilisateur → 401, sans consommer de crédit IA ; aucune image de test générée avec une session valide.
- Aucun formulaire du site public soumis, aucun courriel déclenché.

## Après approbation, à votre charge

Créer votre compte une fois depuis le tableau de bord du backend (section Utilisateurs), puis vous connecter à `/admin/login`.
