import * as React from "react";
import { Link } from "react-router-dom";
import logoYgsWhite from "@/assets/logo-ygs-white.png";

import logoMW from "@/assets/logo-mw-white.png";
import logoSirvaBgrs from "@/assets/logo-sirva-bgrs.png";
import logoTemple from "@/assets/logo-temple-renommee.png";
import logoRemaxDirect from "@/assets/logo-remax-direct.png";
import logoTranquillit from "@/assets/logo-tranquillit.png";
import logoEnfantSoleil from "@/assets/logo-enfant-soleil.png";
import { footerColumns } from "@/data/navigation";

const affiliationLogos = [
  { src: logoRemaxDirect, alt: "RE/MAX Direct" },
  { src: logoMW, alt: "Équipe Marty Waite" },
  { src: logoSirvaBgrs, alt: "SIRVA | BGRS" },
  { src: logoTemple, alt: "Temple de la renommée" },
  { src: logoTranquillit, alt: "Tranquilli-T" },
  { src: logoEnfantSoleil, alt: "Enfant Soleil" },
];

const SiteFooter = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"footer">>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={[
        "border-t border-primary-foreground/[0.06] bg-primary text-primary-foreground",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className="section-container">
        {/* ── 1. Brand Signature ── */}
        <div className="flex flex-col items-center pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
          <img
            src={logoYgsWhite}
            alt="YGS — Yanis Gauthier-Sigeris"
            className="h-auto"
            style={{ width: "clamp(140px, 22vw, 195px)" }}
          />
          <div className="mx-auto mt-6 h-px w-8 bg-accent/30" />
          <p className="mt-5 text-center font-body text-[0.8125rem] font-medium tracking-[0.04em] opacity-50">
            Votre allié en immobilier en Outaouais
          </p>
          <p className="mt-2 max-w-[16rem] text-center text-[0.75rem] leading-[1.65] opacity-30">
            Stratégie claire · Zéro pression · Pas de mauvaises surprises
          </p>
        </div>

        {/* ── 2. Separator ── */}
        <div className="h-px w-full bg-primary-foreground/[0.07]" />

        {/* ── 3. Navigation Columns ── */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-4 lg:gap-6 lg:py-20">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-5 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.16em] opacity-30">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      to={l.href}
                      className="text-[0.8125rem] leading-relaxed opacity-50 transition-opacity duration-200 hover:opacity-90"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── 4. Separator ── */}
        <div className="h-px w-full bg-primary-foreground/[0.07]" />

        {/* ── 5. Affiliations Trust Block ── */}
        <div className="flex flex-col items-center py-14 sm:py-16 lg:py-20">
          <p className="mb-8 font-body text-[0.625rem] font-semibold uppercase tracking-[0.18em] opacity-25 sm:mb-10">
            Affiliations & reconnaissances
          </p>
          <div className="grid w-full max-w-[28rem] grid-cols-3 gap-x-6 gap-y-8 sm:max-w-[34rem] sm:gap-x-10 sm:gap-y-10 lg:max-w-[38rem] lg:grid-cols-6 lg:gap-x-8">
            {affiliationLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-10 items-center justify-center sm:h-11 lg:h-10"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full max-h-[28px] w-auto max-w-[72px] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 sm:max-h-[32px] sm:max-w-[80px] lg:max-h-[30px] lg:max-w-[76px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. Legal ── */}
        <div className="border-t border-primary-foreground/[0.06] py-7 text-center sm:py-8">
          <p className="text-[0.6875rem] leading-relaxed tracking-[0.02em] opacity-25">
            © {new Date().getFullYear()} Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  ),
);

SiteFooter.displayName = "SiteFooter";

export default SiteFooter;
