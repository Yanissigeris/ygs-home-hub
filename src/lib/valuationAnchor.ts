/**
 * Sur la page d'évaluation elle-même, tout lien qui pointe vers cette page
 * (bouton de l'en-tête, menu, pied de page, liens internes) fait défiler
 * jusqu'au formulaire au lieu de ramener en haut de la même page.
 */
export const VALUATION_FORM_ID = "demande-evaluation";

const VALUATION_PATHS = ["/evaluation-gratuite-gatineau/", "/en/home-valuation/"];

const norm = (p: string) => (p.endsWith("/") ? p : p + "/");
const isValuationPage = (pathname: string) => VALUATION_PATHS.includes(norm(pathname));

const scrollToForm = (form: HTMLElement, delayMs: number) => {
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  // Curseur dans le champ adresse seulement avec souris ou pavé tactile :
  // sur téléphone, ouvrir le clavier d'office cacherait le formulaire.
  const finePointer = window.matchMedia?.("(pointer: fine)").matches;
  const go = () => {
    form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    if (!finePointer) return;
    const first = form.querySelector<HTMLInputElement>("input:not([type=hidden])");
    window.setTimeout(() => first?.focus({ preventScroll: true }), reduce ? 0 : 450);
  };
  if (delayMs > 0) window.setTimeout(go, delayMs);
  else go();
};

/** Écouteur global, en phase de capture : passe avant le routeur. Retourne la fonction de nettoyage. */
export const installValuationAnchor = () => {
  if (typeof document === "undefined") return () => {};
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (!isValuationPage(window.location.pathname)) return;
    const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!a || (a.target && a.target !== "_self")) return;
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin || norm(url.pathname) !== norm(window.location.pathname) || url.hash) return;
    const form = document.getElementById(VALUATION_FORM_ID);
    if (!form) return;
    e.preventDefault();
    // Le menu mobile bloque le défilement du body tant qu'il est ouvert : on attend sa fermeture.
    const menuOpen = document.body.style.overflow === "hidden";
    scrollToForm(form, menuOpen ? 320 : 0);
  };
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
};
