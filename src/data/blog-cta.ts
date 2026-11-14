import type { BlogPost } from "./blog-posts";

/**
 * Appel à l'action de fin d'article, choisi selon le sujet.
 * Un ctaOverride écrit pour un article garde la priorité.
 */
export interface BlogCta { title: string; text: string; label: string; href: string }

type Kind = "vendeur" | "acheteur" | "plex" | "general";

const COPY: Record<Kind, { fr: BlogCta; en: BlogCta }> = {
  vendeur: {
    fr: { title: "Combien vaut votre propriété aujourd'hui?", text: "Je compare votre maison aux ventes récentes de votre secteur et je vous envoie une fourchette de prix. C'est gratuit et sans engagement.", label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" },
    en: { title: "What is your property worth today?", text: "I compare your home with recent sales in your area and send you a price range. It's free, with no commitment.", label: "Free Home Valuation", href: "/en/home-valuation/" },
  },
  acheteur: {
    fr: { title: "Vous préparez un achat à Gatineau?", text: "On regarde ensemble votre budget et les secteurs qui vous conviennent. La rencontre est sans engagement.", label: "Réserver une consultation", href: "/consultation-acheteur/" },
    en: { title: "Planning a purchase in Gatineau?", text: "We go over your budget and the areas that suit you. The meeting comes with no commitment.", label: "Book a consultation", href: "/en/buyer-consultation/" },
  },
  plex: {
    fr: { title: "Vous regardez un plex en Outaouais?", text: "J'analyse les revenus et la valeur marchande de l'immeuble. Vous avez les chiffres avant de faire une offre.", label: "Demander une analyse", href: "/analyse-plex-gatineau/" },
    en: { title: "Looking at a plex in the Outaouais?", text: "I analyze the building's income and market value. You get the numbers before you make an offer.", label: "Request an analysis", href: "/en/plex-analysis/" },
  },
  general: {
    fr: { title: "Une question sur votre projet?", text: "Écrivez-moi ou appelez-moi. Je vous réponds avec les chiffres de votre secteur.", label: "Parler à Yanis", href: "/contact-yanis/" },
    en: { title: "A question about your plans?", text: "Write or call me. I'll answer with the numbers for your area.", label: "Talk to Yanis", href: "/en/contact/" },
  },
};

/** Sujet par article quand la catégorie ne suffit pas. */
const BY_SLUG: Record<string, Kind> = {
  "taxes-municipales-gatineau-vs-ottawa": "acheteur",
  "refinancement-hypothecaire-gatineau-guide": "vendeur",
};

const kindFor = (post: BlogPost): Kind => {
  if (BY_SLUG[post.slug]) return BY_SLUG[post.slug];
  const c = post.category.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  if (/plex|investissement/.test(c)) return "plex";
  if (/vendeur/.test(c)) return "vendeur";
  if (/acheteur|quartier|relocalisation|militaire/.test(c)) return "acheteur";
  if (/marche/.test(c)) return "vendeur";
  return "general";
};

export const blogCtaFor = (post: BlogPost, isFr: boolean): BlogCta => {
  const o = post.ctaOverride;
  if (o) {
    return isFr
      ? { title: o.title, text: o.text, label: o.buttonLabel, href: o.buttonHref }
      : { title: o.titleEn, text: o.textEn, label: o.buttonLabelEn, href: o.buttonHrefEn };
  }
  const k = COPY[kindFor(post)];
  return isFr ? k.fr : k.en;
};
