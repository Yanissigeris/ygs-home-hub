import * as React from "react";

// Chargement à la demande avec préchargement.
// main.tsx précharge, avant le premier rendu, le code de la page demandée et du pied
// de page. La page enregistrée (HTML prérendu) reste donc affichée jusqu'à ce que
// React affiche la même page, sans squelette gris ni pied de page qui disparaît.

type AnyModule = { default: React.ComponentType<object> };
export type Preloadable = React.LazyExoticComponent<React.ComponentType<object>> & {
  preload: () => Promise<AnyModule>;
};

/** Comme React.lazy, mais garde le module en mémoire une fois chargé et peut le précharger. */
export function lazyWithPreload(loader: () => Promise<AnyModule>): Preloadable {
  let loaded: AnyModule | undefined;
  const load = () => loader().then((m) => (loaded = m));
  const Component = React.lazy(() =>
    loaded
      ? // « then » synchrone : React voit le module déjà prêt et ne suspend pas.
        ({ then: (resolve: (m: AnyModule) => void) => resolve(loaded as AnyModule) } as unknown as Promise<AnyModule>)
      : load(),
  ) as Preloadable;
  Component.preload = load;
  return Component;
}

type Preloader = (pathname: string) => Promise<unknown> | unknown;
const preloaders: Preloader[] = [];

/** App.tsx (page demandée) et SiteLayout (pied de page) s'enregistrent ici. */
export function registerPreloader(fn: Preloader): void {
  preloaders.push(fn);
}

/** Ne lance jamais d'erreur : si un préchargement échoue, main.tsx affiche quand même. */
export function preloadRoute(pathname: string): Promise<unknown> {
  return Promise.all(
    preloaders.map((fn) => {
      try {
        return Promise.resolve(fn(pathname)).catch(() => undefined);
      } catch {
        return Promise.resolve();
      }
    }),
  );
}
