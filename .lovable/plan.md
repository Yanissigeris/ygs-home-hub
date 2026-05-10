## Objectif

Étendre le fallback HTML dans `<div id="root">` à toutes les routes non-blog dans `scripts/prerender.mjs`, pour que tous les bots reçoivent du contenu indexable.

## Changements (1 seul fichier : `scripts/prerender.mjs`)

### 1. Ajouter `injectGenericBodyFallback` (juste après `injectBlogBodyFallback`, ~ligne 230)

Fonction calquée sur `injectBlogBodyFallback`, sans breadcrumb param :

```js
function injectGenericBodyFallback(html, { title, description, lang }) {
  const isFr = lang === "fr-CA";
  const homeLabel = isFr ? "Accueil" : "Home";
  const homeHref = isFr ? "/" : "/en/";
  const aboutLabel = isFr ? "À propos de cette page" : "About this page";
  const authorLabel = isFr ? "Auteur" : "Author";
  const authorBio = isFr
    ? "Yanis Gauthier-Sigeris, courtier immobilier résidentiel à Gatineau (OACIQ)."
    : "Yanis Gauthier-Sigeris, residential real estate broker in Gatineau (OACIQ).";

  const fallback = `<main id="main-content">
      <nav aria-label="${isFr ? "Fil d'Ariane" : "Breadcrumb"}"><a href="${homeHref}">${homeLabel}</a></nav>
      <article>
        <header>
          <h1>${escapeHtml(title)}</h1>
        </header>
        <section aria-labelledby="page-about">
          <h2 id="page-about">${aboutLabel}</h2>
          <p>${escapeHtml(description)}</p>
          <h3>${authorLabel}</h3>
          <p>${authorBio}</p>
        </section>
      </article>
    </main>`;

  return html.replace(
    /<div id="root">[\s\S]*?<\/div>/i,
    `<div id="root">${fallback}</div>`,
  );
}
```

Regex de remplacement identique à `injectBlogBodyFallback` (compatible avec le hydrate Puppeteer).

### 2. Appeler la fonction dans la boucle principale `SEO_ROUTES`

Dans la boucle `for (const [route, meta] of Object.entries(SEO_ROUTES))`, après `buildHtmlForRoute(...)` et avant `fs.writeFile(...)` :

```js
const lang = route.startsWith("/en") ? "en-CA" : "fr-CA";
const htmlWithFallback = injectGenericBodyFallback(html, {
  title: meta.title,
  description: meta.description,
  lang,
});
```

Puis `fs.writeFile(outPath, htmlWithFallback, "utf8")`.

### 3. Console log

Mise à jour mineure : `wrote ${written} static HTML files with body fallback`.

## Non-modifié

- `injectBlogBodyFallback` : inchangé caractère pour caractère
- Boucle blog : continue d'utiliser son propre fallback
- Skip Puppeteer : tel quel
- Aucun autre fichier touché

## Validation

- `npm run build` doit passer (vérifié automatiquement par le harness)
- Diff final : 1 fonction ajoutée + 1 appel + 1 ligne `console.log` mise à jour
