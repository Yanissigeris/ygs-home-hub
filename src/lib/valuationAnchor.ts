/**
 * Sur la page d'évaluation elle-même, les boutons « Évaluation gratuite »
 * de l'en-tête, du menu mobile et du pied de page remontent au formulaire
 * au lieu de recharger la même page.
 */
export const VALUATION_FORM_ID = "demande-evaluation";

const VALUATION_PATHS = ["/evaluation-gratuite-gatineau/", "/en/home-valuation/"];

const isValuationPage = (pathname: string) =>
  VALUATION_PATHS.some((p) => pathname === p || pathname + "/" === p);

export const onValuationCtaClick = (e: { preventDefault: () => void }) => {
  if (typeof window === "undefined" || !isValuationPage(window.location.pathname)) return;
  const form = document.getElementById(VALUATION_FORM_ID);
  if (!form) return;
  e.preventDefault();
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  const first = form.querySelector<HTMLInputElement>("input:not([type=hidden])");
  window.setTimeout(() => first?.focus({ preventScroll: true }), reduce ? 0 : 450);
};
