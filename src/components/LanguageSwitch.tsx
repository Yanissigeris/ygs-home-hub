import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

/** Maps FR paths to EN paths and vice-versa. */
const frToEn: Record<string, string> = {
  "/": "/en",
  "/proprietes": "/en/properties",
  "/vendre-ma-maison-gatineau": "/en/sell",
  "/evaluation-gratuite-gatineau": "/en/home-valuation",
  "/guide-vendeur-gatineau": "/en/seller-guide",
  "/acheter-a-gatineau": "/en/buy",
  "/consultation-acheteur": "/en/buyer-consultation",
  "/guide-acheteur-gatineau": "/en/buyer-guide",
  "/premier-achat-gatineau": "/en/first-time-buyer",
  "/acheter-a-gatineau-depuis-ottawa": "/en/buy-from-ottawa",
  "/relocalisation-ottawa-gatineau": "/en/relocation",
  "/guide-relocalisation-gatineau": "/en/relocation-guide",
  "/militaire-gatineau": "/en/military",
  "/acheter-comme-militaire-gatineau": "/en/military-buyer",
  "/vendre-lors-dune-mutation-gatineau": "/en/military-seller",
  "/guide-militaire-gatineau": "/en/military-guide",
  "/investir-plex-gatineau": "/en/plex",
  "/analyse-plex-gatineau": "/en/plex-analysis",
  "/quartiers-a-considerer-a-gatineau": "/en/neighborhoods",
  "/plateau-aylmer": "/en/plateau-aylmer",
  "/hull": "/en/hull",
  "/buckingham-masson-angers": "/en/buckingham",
  "/ressources": "/en/resources",
  "/blogue": "/en/blog",
  "/faq": "/en/faq",
  "/temoignages": "/en/testimonials",
  "/contact-yanis": "/en/contact",
  "/merci": "/en/thank-you",
  "/merci-evaluation": "/en/thank-you-valuation",
  "/plan-vendeur-gatineau": "/en/seller-plan",
  "/quand-vendre-a-gatineau": "/en/when-to-sell",
  "/vendre-un-plex-a-gatineau": "/en/sell-plex",
  "/relocalisation-montreal-gatineau": "/en/montreal-relocation",
  "/rapport-marche-gatineau": "/en/market-report",
  "/vivre-a-aylmer": "/en/living-aylmer",
  "/vivre-a-hull": "/en/living-hull",
  "/vivre-dans-le-plateau": "/en/living-plateau",
  "/gatineau": "/en/gatineau",
  "/aylmer": "/en/aylmer",
  "/plateau": "/en/plateau",
  "/relocalisation-militaire-gatineau": "/en/military-relocation",
  "/chelsea": "/en/chelsea",
  "/cantley": "/en/cantley",
  "/val-des-monts": "/en/val-des-monts",
  "/masson-angers": "/en/masson-angers",
  "/pontiac": "/en/pontiac",
  "/cote-dazur-gatineau": "/en/cote-dazur",
  "/limbour": "/en/limbour",
};

const enToFr = Object.fromEntries(Object.entries(frToEn).map(([k, v]) => [v, k]));

const LanguageSwitch = () => {
  const lang = useLanguage();
  const { pathname } = useLocation();

  const targetPath = lang === "fr"
    ? frToEn[pathname] ?? "/en"
    : enToFr[pathname] ?? "/";

  return (
    <Link
      to={targetPath}
      className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[0.75rem] font-medium tracking-[0.03em] text-muted-foreground/60 transition-colors hover:text-foreground hover:bg-secondary/60"
      title={lang === "fr" ? "Switch to English" : "Passer en français"}
    >
      <span className={lang === "fr" ? "font-semibold text-foreground" : ""}>FR</span>
      <span className="text-muted-foreground/30">|</span>
      <span className={lang === "en" ? "font-semibold text-foreground" : ""}>EN</span>
    </Link>
  );
};

export default LanguageSwitch;
