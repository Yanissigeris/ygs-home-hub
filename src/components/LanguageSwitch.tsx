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
  "/courtier-immobilier-outaouais": "/en/outaouais-real-estate-agent",
  "/vendre-maison-hull": "/en/sell-house-hull",
  "/vendre-maison-aylmer": "/en/sell-house-aylmer",
  "/evaluation-maison-hull": "/en/home-valuation-hull",
  "/evaluation-maison-aylmer": "/en/home-valuation-aylmer",
  "/politique-de-confidentialite": "/en/privacy-policy",
  "/conditions-utilisation": "/en/terms",
};

const enToFr = Object.fromEntries(Object.entries(frToEn).map(([k, v]) => [v, k]));

const LanguageSwitch = ({ transparent }: { transparent?: boolean }) => {
  const lang = useLanguage();
  const { pathname } = useLocation();

  const targetPath = lang === "fr"
    ? frToEn[pathname] ?? "/en"
    : enToFr[pathname] ?? "/";

  const activeColor = transparent ? "#FFFFFF" : "var(--ink)";
  const inactiveColor = transparent ? "rgba(247,244,238,.75)" : "var(--muted)";
  const separatorColor = transparent ? "rgba(247,244,238,.5)" : "var(--muted)";

  return (
    <Link
      to={targetPath}
      className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[0.75rem] tracking-[0.03em] transition-colors hover:bg-secondary/60"
      title={lang === "fr" ? "Switch to English" : "Passer en français"}
      style={transparent ? {} : undefined}
    >
      <span style={{ fontWeight: lang === "fr" ? 600 : 400, color: lang === "fr" ? activeColor : inactiveColor }}>FR</span>
      <span style={{ color: separatorColor, opacity: 0.4 }}>|</span>
      <span style={{ fontWeight: lang === "en" ? 600 : 400, color: lang === "en" ? activeColor : inactiveColor }}>EN</span>
    </Link>
  );
};

export default LanguageSwitch;
