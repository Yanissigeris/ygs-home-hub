// Pont entre App.tsx (qui connaît les routes) et main.tsx (qui lance le premier rendu).
// App.tsx enregistre sa fonction ici au chargement ; main.tsx l'appelle avant le rendu.
type Preloader = (pathname: string) => Promise<unknown>;

let preloader: Preloader | undefined;

export function registerRoutePreloader(fn: Preloader): void {
  preloader = fn;
}

// Ne lance jamais d'erreur : si le préchargement échoue, main.tsx affiche la page quand même.
export function preloadRoute(pathname: string): Promise<unknown> {
  try {
    return preloader ? Promise.resolve(preloader(pathname)).catch(() => undefined) : Promise.resolve();
  } catch {
    return Promise.resolve();
  }
}
