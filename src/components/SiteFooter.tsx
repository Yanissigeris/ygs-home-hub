import * as React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import logoYgsWhite from "@/assets/logo-ygs-white.webp";
import logoMW from "@/assets/logo-mw-white.webp";
import logoSirvaBgrs from "@/assets/logo-sirva-bgrs.webp";
import logoTemple from "@/assets/logo-temple-renommee.webp";
import logoRemaxDirect from "@/assets/logo-remax-direct.webp";
import logoTranquillit from "@/assets/logo-tranquillit.webp";
import logoEnfantSoleil from "@/assets/logo-enfant-soleil.webp";
import { footerColumns, footerPopularLinks } from "@/data/navigation";
import { footerColumnsEn, footerPopularLinksEn } from "@/data/navigation-en";

const affiliationLogos = [
  { src: logoRemaxDirect, alt: "RE/MAX Direct — agence immobilière Gatineau", filter: "brightness-[1.3]" },
  { src: logoMW, alt: "Équipe Marty Waite — courtiers immobiliers Gatineau", filter: "brightness-[1.6]" },
  { src: logoSirvaBgrs, alt: "SIRVA BGRS — programme de relocalisation militaire", filter: "brightness-[1.8] contrast-[1.1]" },
  { src: logoTemple, alt: "Temple de la renommée RE/MAX — distinction courtier", filter: "brightness-0 invert" },
  { src: logoTranquillit, alt: "Programme Tranquilli-T RE/MAX — garantie immobilière", filter: "brightness-[1.5]" },
  { src: logoEnfantSoleil, alt: "Opération Enfant Soleil — partenaire caritatif", filter: "brightness-[1.4]" },
];

const SiteFooter = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"footer">>(
  ({ className, ...props }, ref) => {
    const lang = useLanguage();
    const columns = lang === "en" ? footerColumnsEn : footerColumns;
    const popularLinks = lang === "en" ? footerPopularLinksEn : footerPopularLinks;
    const tagline = lang === "en" ? "Your real estate ally in Outaouais" : "Votre allié en immobilier en Outaouais";
    const subline = lang === "en" ? "Clear strategy" : "Stratégie claire";
    const popularLabel = lang === "en" ? "Popular areas & services" : "Zones et services populaires";
    const affiliationsLabel = lang === "en" ? "Affiliations & Recognition" : "Affiliations & reconnaissances";
    const legalText = lang === "en"
      ? `© ${new Date().getFullYear()} Yanis Gauthier-Sigeris — Real Estate Broker, Gatineau. All rights reserved.`
      : `© ${new Date().getFullYear()} Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau. Tous droits réservés.`;

    return (
      <footer ref={ref} className={["border-t border-primary-foreground/[0.06] bg-primary text-primary-foreground", className].filter(Boolean).join(" ")} {...props}>
        <div className="section-container">
          <div className="flex flex-col items-center pt-10 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
            <img src={logoYgsWhite} alt="YGS — Yanis Gauthier-Sigeris, courtier immobilier Gatineau" width={195} height={50} className="h-auto" style={{ width: "clamp(140px, 22vw, 195px)" }} loading="lazy" />
            <div className="mx-auto mt-6 h-px w-8 bg-accent/30" />
            <p className="mt-5 text-center font-body text-[0.8125rem] font-medium tracking-[0.04em] opacity-50">{tagline}</p>
            <p className="mt-2 max-w-[16rem] text-center text-[0.75rem] leading-[1.65] opacity-30">{subline}</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.facebook.com/YanisGauthierSigeris" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-40 transition-opacity duration-200 hover:opacity-80">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/yanissigeris/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-40 transition-opacity duration-200 hover:opacity-80">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          <div className="h-px w-full bg-primary-foreground/[0.07]" />
          <div className="grid gap-8 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-4 lg:gap-6 lg:py-14">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-5 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.16em] opacity-30">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link to={l.href} className="text-[0.8125rem] leading-relaxed opacity-50 transition-opacity duration-200 hover:opacity-90">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="h-px w-full bg-primary-foreground/[0.07]" />
          <div className="py-7 sm:py-8">
            <p className="mb-5 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.16em] opacity-30">{popularLabel}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {popularLinks.map((l) => (
                <Link key={l.href} to={l.href} className="text-[0.8125rem] leading-relaxed opacity-40 transition-opacity duration-200 hover:opacity-80">{l.label}</Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center py-7 sm:py-12 lg:py-14">
            <p className="mb-6 sm:mb-10 font-body text-[0.625rem] font-semibold uppercase tracking-[0.18em] opacity-25">{affiliationsLabel}</p>
            <div className="grid w-full max-w-[30rem] grid-cols-3 gap-x-6 gap-y-6 sm:max-w-[36rem] sm:gap-x-12 sm:gap-y-11 lg:max-w-[46rem] lg:grid-cols-6 lg:gap-x-10">
              {affiliationLogos.map((logo) => (
                <div key={logo.alt} className="flex h-11 items-center justify-center sm:h-12 lg:h-12">
                  <img src={logo.src} alt={logo.alt} width={100} height={38} loading="lazy" className={`h-full max-h-[34px] w-auto max-w-[88px] object-contain opacity-75 transition-opacity duration-300 hover:opacity-100 sm:max-h-[38px] sm:max-w-[96px] lg:max-h-[38px] lg:max-w-[100px] ${logo.filter}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-primary-foreground/[0.06] py-7 text-center sm:py-8">
            <p className="text-[0.6875rem] leading-relaxed tracking-[0.02em] opacity-25">{legalText}</p>
          </div>
        </div>
      </footer>
    );
  },
);

SiteFooter.displayName = "SiteFooter";
export default SiteFooter;
