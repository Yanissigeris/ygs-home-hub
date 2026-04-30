/**
 * Accessibility label translations.
 *
 * Centralizes all bilingual aria-labels so components don't repeat
 * `lang === "en" ? "..." : "..."` ternaries inline.
 *
 * Usage:
 *   import { getA11yLabel } from "@/lib/a11y";
 *   const lang = useLanguage();
 *   <button aria-label={getA11yLabel("menu.open", lang)} />
 *
 * For dynamic values, pass params:
 *   getA11yLabel("testimonial.goTo", lang, { n: 3 })
 */

export type A11yLang = "fr" | "en";

type Translation = string | ((params: Record<string, string | number>) => string);

const labels: Record<string, { fr: Translation; en: Translation }> = {
  // Testimonial slider
  "testimonial.previous": {
    fr: "Témoignage précédent",
    en: "Previous testimonial",
  },
  "testimonial.next": {
    fr: "Témoignage suivant",
    en: "Next testimonial",
  },
  "testimonial.goTo": {
    fr: ({ n }) => `Aller au témoignage ${n}`,
    en: ({ n }) => `Go to testimonial ${n}`,
  },

  // Header / navigation
  "menu.open": {
    fr: "Ouvrir le menu",
    en: "Open menu",
  },
  "menu.close": {
    fr: "Fermer le menu",
    en: "Close menu",
  },

  // Google review badge
  "reviews.fiveStars": {
    fr: "5 étoiles sur 5",
    en: "5 stars",
  },

  // Hero
  "hero.scrollNext": {
    fr: "Défiler à la section suivante",
    en: "Scroll to next section",
  },

  // Landmarks
  "nav.main": {
    fr: "Navigation principale",
    en: "Main navigation",
  },
  "nav.footer": {
    fr: "Navigation du pied de page",
    en: "Footer navigation",
  },
  "nav.breadcrumb": {
    fr: "Fil d'Ariane",
    en: "Breadcrumb",
  },

  // Generic carousel controls
  "carousel.previous": {
    fr: "Précédent",
    en: "Previous",
  },
  "carousel.next": {
    fr: "Suivant",
    en: "Next",
  },
};

export function getA11yLabel(
  key: keyof typeof labels,
  lang: A11yLang,
  params?: Record<string, string | number>,
): string {
  const entry = labels[key];
  if (!entry) {
    if (typeof console !== "undefined") {
      console.warn(`[a11y] Missing label for key "${key}"`);
    }
    return String(key);
  }
  const value = entry[lang] ?? entry.fr;
  return typeof value === "function" ? value(params ?? {}) : value;
}
