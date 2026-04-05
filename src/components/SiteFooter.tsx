import * as React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import logoYgsWhite from "@/assets/ygs-footer-logo.png";
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

/* ── Social SVG icons ── */
const FacebookSvg = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramSvg = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FooterAccordion = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-3.5" style={{ minHeight: 44 }} aria-expanded={open}>
        <span style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }}>{title}</span>
        <ChevronDown size={14} className={`opacity-30 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[500px] pb-4" : "max-h-0"}`}>
        <ul className="space-y-2.5">
          {links.map((l) => (
            <li key={l.href + l.label}>
              <Link to={l.href} style={{ fontSize: ".78rem", color: "rgba(255,255,255,.4)", fontWeight: 300 }} className="transition-colors duration-200 hover:text-white/80">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SiteFooter = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"footer">>(
  ({ className, ...props }, ref) => {
    const lang = useLanguage();
    const columns = lang === "en" ? footerColumnsEn : footerColumns;
    const popularLinks = lang === "en" ? footerPopularLinksEn : footerPopularLinks;
    const tagline = lang === "en" ? "Your real estate ally in Outaouais — Clear strategy" : "Votre allié en immobilier en Outaouais — Stratégie claire";
    const popularLabel = lang === "en" ? "Popular areas & services" : "Zones et services populaires";
    const affiliationsLabel = lang === "en" ? "Affiliations & Recognition" : "Affiliations & reconnaissances";
    const legalText = lang === "en"
      ? `© ${new Date().getFullYear()} Yanis Gauthier-Sigeris — Real Estate Broker, Gatineau. All rights reserved.`
      : `© ${new Date().getFullYear()} Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau. Tous droits réservés.`;

    return (
      <footer ref={ref} className={className} style={{ background: "var(--ink)", color: "#fff", paddingBottom: "env(safe-area-inset-bottom, 0px)" }} {...props}>
        <div className="section-container">
          {/* ── Brand row ── */}
          <div className="flex flex-col items-center pt-8 pb-6 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
            <img
              src={logoYgsWhite}
              alt="YGS — Yanis Gauthier-Sigeris, courtier immobilier Gatineau"
              width={120}
              height={140}
              className="h-auto mx-auto block"
              style={{ width: "clamp(80px, 18vw, 120px)" }}
              loading="lazy"
            />
            <p className="mt-5 text-center" style={{ fontSize: ".78rem", color: "rgba(255,255,255,.35)", fontStyle: "italic" }}>
              {tagline}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              {[
                { href: "https://www.facebook.com/YanisGauthierSigeris", label: "Facebook", Icon: FacebookSvg },
                { href: "https://www.instagram.com/yanissigeris/", label: "Instagram", Icon: InstagramSvg },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center rounded-full transition-colors duration-200"
                  style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.4)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.35)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "rgba(255,255,255,.4)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,.07)" }} />

          {/* ── Mobile: accordion columns ── */}
          <div className="sm:hidden py-6" role="navigation" aria-label="Footer navigation">
            {columns.map((col) => (
              <FooterAccordion key={col.title} title={col.title} links={col.links} />
            ))}
          </div>

          {/* ── Desktop: 4 columns (2-col on sm) ── */}
          <div className="hidden sm:grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-14" role="navigation" aria-label="Footer navigation">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-5" style={{ fontSize: ".58rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }}>
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link to={l.href} style={{ fontSize: ".78rem", color: "rgba(255,255,255,.4)", fontWeight: 300 }} className="transition-colors duration-200 hover:text-white/80">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,.07)" }} />

          {/* ── SEO Popular links ── */}
          <div className="py-5 sm:py-8">
            <p className="mb-3 sm:mb-5" style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }}>
              {popularLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {popularLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="transition-colors duration-200"
                  style={{
                    fontSize: ".7rem",
                    color: "rgba(255,255,255,.28)",
                    border: "1px solid rgba(255,255,255,.06)",
                    borderRadius: 3,
                    padding: ".2rem .55rem",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.15)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,.28)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.06)"; }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,.07)" }} />

          {/* ── Affiliations ── */}
          <div className="flex flex-col items-center py-5 sm:py-12 lg:py-14">
            <p className="mb-4 sm:mb-10" style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }}>
              {affiliationsLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 w-full max-w-[30rem] sm:max-w-[36rem] lg:max-w-[46rem]">
              {affiliationLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.06)",
                    borderRadius: 3,
                    padding: ".4rem .75rem",
                    minHeight: 44,
                    minWidth: 80,
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={38}
                    loading="lazy"
                    className={`h-full max-h-[34px] w-auto max-w-[88px] object-contain opacity-75 transition-opacity duration-300 hover:opacity-100 sm:max-h-[38px] sm:max-w-[96px] lg:max-h-[38px] lg:max-w-[100px] ${logo.filter}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Copyright ── */}
          <div className="py-5 sm:py-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
            <p style={{ fontSize: ".68rem", color: "rgba(255,255,255,.2)", padding: "0 1rem" }}>{legalText}</p>
          </div>
        </div>
      </footer>
    );
  },
);

SiteFooter.displayName = "SiteFooter";
export default SiteFooter;
