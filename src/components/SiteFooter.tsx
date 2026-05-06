import * as React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getA11yLabel } from "@/lib/a11y";
import { ChevronDown } from "lucide-react";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";
import logoYgsWhite from "@/assets/ygs-logo.png";
import logoMW from "@/assets/logo-mw-white.webp";
import logoSirvaBgrs from "@/assets/logo-sirva-bgrs.webp";
import logoTemple from "@/assets/logo-temple-renommee.webp";
import logoTranquillit from "@/assets/logo-tranquillit.webp";
import logoEnfantSoleil from "@/assets/logo-enfant-soleil.webp";
import remaxLogotypeBlack from "@/assets/remax-logotype-black.png";
import remaxBalloonOfficial from "@/assets/remax-balloon-official.png";
import { footerColumns, footerPopularLinks } from "@/data/navigation";
import { footerColumnsEn, footerPopularLinksEn } from "@/data/navigation-en";

type AffiliationLogo = {
  alt: string;
  filter?: string;
  href?: string;
  caption?: string;
  src?: string;
  custom?: React.ReactNode;
};

const affiliationLogos: AffiliationLogo[] = [
  {
    alt: "RE/MAX Direct Inc. — agence immobilière",
    href: "https://www.remax-quebec.com",
    caption: "RE/MAX Direct Inc.",
    custom: (
      <div className="flex items-center gap-1.5">
        <img src={remaxLogotypeBlack} alt="Logo RE/MAX" style={{ height: 28, width: "auto" }} loading="lazy" decoding="async" />
        <img src={remaxBalloonOfficial} alt="" aria-hidden="true" style={{ height: 28, width: "auto" }} loading="lazy" decoding="async" />
      </div>
    ),
  },
  { src: logoMW, alt: "Équipe Marty Waite — courtiers immobiliers Gatineau", filter: "brightness-[1.6]" },
  { src: logoSirvaBgrs, alt: "SIRVA BGRS — programme de relocalisation militaire", filter: "brightness-[1.8] contrast-[1.1]" },
  { src: logoTemple, alt: "Temple de la renommée RE/MAX — distinction courtier", filter: "brightness-0 invert", caption: "RE/MAX, LLC, 2024" },
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
  const reactId = React.useId();
  const panelId = `footer-acc-${reactId}`;
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
      <h3 style={{ margin: 0 }}>
        <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-3.5" style={{ minHeight: 44 }} aria-expanded={open} aria-controls={panelId}>
          <span style={{ fontSize: ".6rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }}>{title}</span>
          <ChevronDown size={14} className={`opacity-30 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[500px] pb-4" : "max-h-0"}`} aria-hidden={!open}>
        <ul className="space-y-2.5">
          {links.map((l) => (
            <li key={l.href + l.label}>
              <Link to={l.href} style={{ fontSize: ".78rem", color: "rgba(255,255,255,.65)", fontWeight: 300 }} className="transition-colors duration-200 hover:text-white/80">{l.label}</Link>
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

    const ctaHref = lang === "en" ? "/en/home-valuation" : "/evaluation-gratuite-gatineau";
    const ctaHeading = lang === "en" ? "Ready to take action?" : "Prêt à passer à l'action?";
    const ctaSubtext = lang === "en"
      ? "Get your free home valuation — no commitment."
      : "Obtenez votre évaluation gratuite — sans engagement.";
    const ctaLabel = lang === "en" ? "Free valuation →" : "Évaluation gratuite →";

    return (
      <footer ref={ref} className={className} style={{ background: "var(--ink)", color: "var(--cream)", paddingBottom: "env(safe-area-inset-bottom, 0px)" }} {...props}>
        {/* ── Final CTA block ── */}
        <div style={{ background: "var(--ink)" }}>
          <div className="section-container" style={{ paddingTop: 48, paddingBottom: 48, textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 32, fontWeight: 300, color: "var(--cream)", lineHeight: 1.2, margin: 0 }}>
              {ctaHeading}
            </h2>
            <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "rgba(247,244,239,.7)", marginTop: 12, marginBottom: 24 }}>
              {ctaSubtext}
            </p>
            <Link
              to={ctaHref}
              className="inline-block transition-colors duration-200"
              style={{ background: "var(--gold)", color: "var(--cream)", borderRadius: 4, padding: "14px 32px", fontFamily: "var(--sans)", fontSize: 14, fontWeight: 500, textDecoration: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; }}
            >
              {ctaLabel}
            </Link>
          </div>
          <div style={{ height: 1, background: "rgba(247,244,239,.2)", width: "100%" }} />
        </div>

        <div className="section-container">
          {/* ── Brand row ── */}
          <div className="flex flex-col items-center pt-8 pb-6 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
            <img
              src={logoYgsWhite}
              alt="YGS — Yanis Gauthier-Sigeris, courtier immobilier Gatineau"
              width={160}
              height={180}
              className="h-auto mx-auto block"
              style={{ width: "clamp(110px, 28vw, 160px)" }}
              loading="lazy"
              decoding="async"
            />
            <p className="mt-5 text-center" style={{ fontSize: ".78rem", color: "rgba(255,255,255,.7)", fontStyle: "italic" }}>
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
                  style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.65)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.35)"; e.currentTarget.style.color = "var(--white)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.1)"; e.currentTarget.style.color = "rgba(255,255,255,.4)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,.07)" }} />

          {/* ── Mobile: accordion columns ── */}
          <div className="sm:hidden py-6" role="navigation" aria-label={getA11yLabel("nav.footer", lang)}>
            {columns.map((col) => (
              <FooterAccordion key={col.title} title={col.title} links={col.links} />
            ))}
          </div>

          {/* ── Desktop: 4 columns (2-col on sm) ── */}
          <div className="hidden sm:grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-14" role="navigation" aria-label={getA11yLabel("nav.footer", lang)}>
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-5" style={{ fontSize: ".58rem", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold)" }}>
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link to={l.href} style={{ fontSize: ".78rem", color: "rgba(255,255,255,.65)", fontWeight: 300 }} className="transition-colors duration-200 hover:text-white/80">
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
                    color: "rgba(255,255,255,.6)",
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
              {affiliationLogos.map((logo) => {
                const inner = logo.custom ?? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={38}
                    loading="lazy"
                    decoding="async"
                    className={`h-full max-h-[34px] w-auto max-w-[88px] object-contain opacity-75 transition-opacity duration-300 hover:opacity-100 sm:max-h-[38px] sm:max-w-[96px] lg:max-h-[38px] lg:max-w-[100px] ${logo.filter ?? ""}`}
                  />
                );
                const caption = logo.caption ? (
                  <p
                    className="mt-1 text-center"
                    style={{ fontSize: 10, lineHeight: 1.3, color: "rgba(255,255,255,.55)", fontWeight: 400 }}
                  >
                    {logo.caption}
                  </p>
                ) : null;
                const tileStyle: React.CSSProperties = {
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: 3,
                  padding: ".5rem .75rem",
                  minHeight: 56,
                  minWidth: 80,
                };
                const content = (
                  <>
                    {inner}
                    {caption}
                  </>
                );
                if (logo.href) {
                  return (
                    <a
                      key={logo.alt}
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={lang === "en" ? "Visit remax-quebec.com" : "Visiter remax-quebec.com"}
                      className="flex flex-col items-center justify-center"
                      style={tileStyle}
                    >
                      {content}
                    </a>
                  );
                }
                return (
                  <div key={logo.alt} className="flex flex-col items-center justify-center" style={tileStyle}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Google Reviews badge ── */}
          <div className="flex justify-center py-4">
            <GoogleReviewBadge variant="compact" />
          </div>

          {/* ── RE/MAX mention ── */}
          <div className="text-center py-3">
            <p style={{ fontSize: ".62rem", color: "rgba(255,255,255,.55)", fontWeight: 300 }}>
              {lang === "en" ? "Member of RE/MAX — Marty Waite Team" : "Membre de RE/MAX — Équipe Marty Waite"}
            </p>
          </div>

          {/* ── Agency identification block ── */}
          <div className="py-4 text-center" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
            <p style={{ fontSize: ".72rem", color: "rgba(255,255,255,.78)", fontWeight: 500, lineHeight: 1.6 }}>
              {lang === "en"
                ? "RE/MAX Direct Inc. — Real estate agency · 216 Chemin d'Aylmer, Gatineau, QC J9H 1A4"
                : "RE/MAX Direct Inc. — Agence immobilière · 216 Chemin d'Aylmer, Gatineau, QC J9H 1A4"}
            </p>
            <p style={{ fontSize: ".68rem", color: "rgba(255,255,255,.65)", fontWeight: 300, lineHeight: 1.6, marginTop: 4 }}>
              {lang === "en" ? "Office: " : "Bureau : "}
              <a href="tel:+18196840000" style={{ color: "inherit", textDecoration: "none" }}>819-684-0000</a>
              {"  ·  "}
              {lang === "en" ? "Mobile: " : "Cellulaire : "}
              <a href="tel:+18192103044" style={{ color: "inherit", textDecoration: "none" }}>819-210-3044</a>
              {"  ·  "}
              <a href="mailto:yanis@martywaite.com" style={{ color: "inherit", textDecoration: "none" }}>yanis@martywaite.com</a>
            </p>
          </div>
          {/* ── Copyright ── */}
          <div className="py-5 sm:py-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
            <p style={{ fontSize: ".68rem", color: "rgba(255,255,255,.6)", padding: "0 1rem" }}>{legalText}</p>
            <p className="mt-2" style={{ fontSize: ".62rem", color: "rgba(255,255,255,.5)", padding: "0 1rem" }}>
              {lang === "en"
                ? "Independently owned and operated franchisee of RE/MAX Québec"
                : "Franchisé indépendant et autonome de RE/MAX Québec"}
            </p>
            <div className="mt-2 flex justify-center gap-4">
              <Link to={lang === "en" ? "/en/privacy-policy" : "/politique-de-confidentialite"} style={{ fontSize: ".65rem", color: "rgba(255,255,255,.6)" }} className="hover:text-white/50 transition-colors">
                {lang === "en" ? "Privacy Policy" : "Politique de confidentialité"}
              </Link>
              <Link to={lang === "en" ? "/en/terms" : "/conditions-utilisation"} style={{ fontSize: ".65rem", color: "rgba(255,255,255,.6)" }} className="hover:text-white/50 transition-colors">
                {lang === "en" ? "Terms of Use" : "Conditions d'utilisation"}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  },
);

SiteFooter.displayName = "SiteFooter";
export default SiteFooter;
