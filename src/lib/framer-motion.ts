// Relais de framer-motion (alias dans vite.config.ts).
// Si le téléphone ou l'ordinateur demande « réduire les animations », framer-motion
// saute ses animations : le contenu apparaît tout de suite à sa place finale.
// Les animations en CSS du site gèrent déjà ce réglage de leur côté.
import { MotionGlobalConfig } from "framer-motion-original";

if (
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  MotionGlobalConfig.skipAnimations = true;
}

export * from "framer-motion-original";
