import * as React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoYgsWhite from "@/assets/logo-ygs-white.webp";
import logoMW from "@/assets/logo-mw-white.webp";
import logoSirvaBgrs from "@/assets/logo-sirva-bgrs.webp";
import logoTemple from "@/assets/logo-temple-renommee.webp";
import logoRemaxDirect from "@/assets/logo-remax-direct.webp";
import logoTranquillit from "@/assets/logo-tranquillit.webp";
import logoEnfantSoleil from "@/assets/logo-enfant-soleil.webp";
import { footerColumns } from "@/data/navigation";
import { footerColumnsEn } from "@/data/navigation-en";

const affiliationLogos = [
  { src: logoRemaxDirect, alt: "RE/MAX Direct", filter: "brightness-[1.3]" },
  { src: logoMW, alt: "Équipe Marty Waite", filter: "brightness-[1.6]" },
  { src: logoSirvaBgrs, alt: "SIRVA | BGRS", filter: "brightness-[1.8] contrast-[1.1]" },
  { src: logoTemple, alt: "Temple de la renommée", filter: "brightness-0 invert" },
  { src: logoTranquillit, alt: "Tranquilli-T", filter: "brightness-[1.5]" },
  { src: logoEnfantSoleil, alt: "Enfant Soleil", filter: "brightness-[1.4]" },
];

const SiteFooter = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"footer">>(
  ({ className, ...props }, ref) => {
    const lang = useLanguage();
    const columns = lang === "en" ? footerColumnsEn : footerColumns;
    const tagline = lang === "en" ? "Your real estate ally in Outaouais" : "Votre allié en immobilier en Outaouais";
    const subline = lang === "en" ? "Clear strategy" : "Stratégie claire";
    const affiliationsLabel = lang === "en" ? "Affiliations & Recognition" : "Affiliations & reconnaissances";
    const legalText = lang === "en"
      ? `© ${new Date().getFullYear()} Yanis Gauthier-Sigeris — Real Estate Broker, Gatineau. All rights reserved.`
      : `© ${new Date().getFullYear()} Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau. Tous droits réservés.`;

    return (
      <footer ref={ref} className={["border-t border-primary-foreground/[0.06] bg-primary text-primary-foreground", className].filter(Boolean).join(" ")} {...props}>
        <div className="section-container">
          <div className="flex flex-col items-center pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
            <img src={logoYgsWhite} alt="YGS — Yanis Gauthier-Sigeris" className="h-auto" style={{ width: "clamp(140px, 22vw, 195px)" }} />
            <div className="mx-auto mt-6 h-px w-8 bg-accent/30" />
            <p className="mt-5 text-center font-body text-[0.8125rem] font-medium tracking-[0.04em] opacity-50">{tagline}</p>
            <p className="mt-2 max-w-[16rem] text-center text-[0.75rem] leading-[1.65] opacity-30">{subline}</p>
          </div>
          <div className="h-px w-full bg-primary-foreground/[0.07]" />
          <div className="grid gap-10 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-4 lg:gap-6 lg:py-20">
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
          <div className="flex flex-col items-center py-14 sm:py-16 lg:py-20">
            <p className="mb-8 font-body text-[0.625rem] font-semibold uppercase tracking-[0.18em] opacity-25 sm:mb-10">{affiliationsLabel}</p>
            <div className="grid w-full max-w-[30rem] grid-cols-3 gap-x-8 gap-y-9 sm:max-w-[36rem] sm:gap-x-12 sm:gap-y-11 lg:max-w-[46rem] lg:grid-cols-6 lg:gap-x-10">
              {affiliationLogos.map((logo) => (
                <div key={logo.alt} className="flex h-11 items-center justify-center sm:h-12 lg:h-12">
                  <img src={logo.src} alt={logo.alt} className={`h-full max-h-[34px] w-auto max-w-[88px] object-contain opacity-75 transition-opacity duration-300 hover:opacity-100 sm:max-h-[38px] sm:max-w-[96px] lg:max-h-[38px] lg:max-w-[100px] ${logo.filter}`} />
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
