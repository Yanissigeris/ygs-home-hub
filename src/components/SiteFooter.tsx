import * as React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import logoYgsWhite from "@/assets/ygs-footer-logo.png";

/* ── Social SVG icons ── */
const FacebookSvg = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramSvg = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

/* ── Data ── */
const navLinksFr = [
  { label: "Accueil", href: "/" },
  { label: "Propriétés", href: "/proprietes" },
  { label: "Vendre", href: "/vendre-ma-maison-gatineau" },
  { label: "Acheter", href: "/acheter-a-gatineau" },
  { label: "Relocalisation", href: "/relocalisation-ottawa-gatineau" },
  { label: "Plex", href: "/investir-plex-gatineau" },
  { label: "Blogue", href: "/blogue" },
  { label: "À propos", href: "/contact-yanis" },
];
const navLinksEn = [
  { label: "Home", href: "/en" },
  { label: "Properties", href: "/en/properties" },
  { label: "Sell", href: "/en/sell" },
  { label: "Buy", href: "/en/buy" },
  { label: "Relocation", href: "/en/relocation" },
  { label: "Plex", href: "/en/plex" },
  { label: "Blog", href: "/en/blog" },
  { label: "About", href: "/en/contact" },
];

const sectorsFr = [
  { label: "Gatineau", href: "/gatineau" },
  { label: "Aylmer", href: "/aylmer" },
  { label: "Hull", href: "/hull" },
  { label: "Plateau", href: "/plateau" },
  { label: "Buckingham", href: "/buckingham-masson-angers" },
  { label: "Cantley", href: "/cantley" },
  { label: "Chelsea", href: "/chelsea" },
];
const sectorsEn = [
  { label: "Gatineau", href: "/en/gatineau" },
  { label: "Aylmer", href: "/en/aylmer" },
  { label: "Hull", href: "/en/hull" },
  { label: "Plateau", href: "/en/plateau" },
  { label: "Buckingham", href: "/en/buckingham" },
  { label: "Cantley", href: "/en/cantley" },
  { label: "Chelsea", href: "/en/chelsea" },
];

/* ── Shared styles ── */
const labelStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color: "var(--gold)",
  fontFamily: "var(--sans)",
  marginBottom: 16,
};

const linkStyle: React.CSSProperties = {
  fontSize: "13px",
  fontFamily: "var(--sans)",
  color: "rgba(247,244,238,.65)",
  fontWeight: 400,
  textDecoration: "none",
  transition: "color .3s, text-decoration-color .3s",
  textUnderlineOffset: "3px",
};

/* ── Mobile accordion ── */
const FooterAccordion = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(247,244,238,.08)" }}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-3.5" style={{ minHeight: 44 }} aria-expanded={open}>
        <span style={labelStyle}>{title}</span>
        <ChevronDown size={14} className={`opacity-30 transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: "rgba(247,244,238,.4)" }} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[500px] pb-4" : "max-h-0"}`}>
        <ul className="space-y-2.5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                style={linkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(247,244,238,1)"; e.currentTarget.style.textDecoration = "underline"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(247,244,238,.65)"; e.currentTarget.style.textDecoration = "none"; }}
              >
                {l.label}
              </Link>
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
    const navLinks = lang === "en" ? navLinksEn : navLinksFr;
    const sectors = lang === "en" ? sectorsEn : sectorsFr;
    const tagline = lang === "en" ? "Your real estate ally" : "Votre allié en immobilier";
    const navLabel = lang === "en" ? "Navigation" : "Navigation";
    const sectorsLabel = lang === "en" ? "Neighborhoods" : "Secteurs";
    const ctaLabel = lang === "en" ? "Get Started" : "Commencer";
    const ctaButtonText = lang === "en" ? "Free Home Valuation →" : "Évaluation gratuite →";
    const ctaHref = lang === "en" ? "/en/home-valuation" : "/evaluation-gratuite-gatineau";
    const legalText = lang === "en"
      ? `© ${new Date().getFullYear()} Yanis Gauthier-Sigeris Inc. All rights reserved.`
      : `© ${new Date().getFullYear()} Yanis Gauthier-Sigeris Inc. Tous droits réservés.`;
    const remaxText = lang === "en" ? "Member of RE/MAX — Marty Waite Team" : "Membre de RE/MAX — Équipe Marty Waite";

    return (
      <footer ref={ref} className={className} style={{ background: "#17303B", color: "#F7F4EE", paddingBottom: "env(safe-area-inset-bottom, 0px)" }} {...props}>
        <div className="section-container">

          {/* ── MOBILE LAYOUT ── */}
          <div className="lg:hidden">
            {/* Brand block */}
            <div className="flex flex-col items-center pt-10 pb-8">
              <img src={logoYgsWhite} alt="YGS — Yanis Gauthier-Sigeris" width={120} height={135} className="h-auto" style={{ width: "clamp(90px,24vw,120px)" }} loading="lazy" decoding="async" />
              <p style={{ fontSize: "13px", fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--gold)", marginTop: 12 }}>{tagline}</p>
              <p style={{ fontSize: "13px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.5)", marginTop: 8 }}>819-210-3044</p>
              <p style={{ fontSize: "13px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.5)", marginTop: 2 }}>yanis@martywaite.com</p>
            </div>

            <div style={{ height: 1, background: "rgba(247,244,238,.08)" }} />

            {/* CTA */}
            <div className="flex flex-col items-center py-6">
              <Link
                to={ctaHref}
                style={{
                  display: "inline-block",
                  border: "1px solid var(--gold)",
                  color: "var(--gold)",
                  fontFamily: "var(--sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "10px 28px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "background .3s, color .3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#17303B"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
              >
                {ctaButtonText}
              </Link>
            </div>

            <div style={{ height: 1, background: "rgba(247,244,238,.08)" }} />

            {/* Accordions */}
            <div className="py-2" role="navigation" aria-label="Footer navigation">
              <FooterAccordion title={navLabel} links={navLinks} />
              <FooterAccordion title={sectorsLabel} links={sectors} />
            </div>

            <div style={{ height: 1, background: "rgba(247,244,238,.12)" }} />

            {/* Bottom bar mobile */}
            <div className="flex flex-col items-center gap-3 py-6">
              <div className="flex items-center gap-4">
                {[
                  { href: "https://www.instagram.com/yanissigeris/", label: "Instagram", Icon: InstagramSvg },
                  { href: "https://www.facebook.com/YanisGauthierSigeris", label: "Facebook", Icon: FacebookSvg },
                ].map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ color: "rgba(247,244,238,.5)", transition: "color .3s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(247,244,238,1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(247,244,238,.5)"; }}
                  ><Icon /></a>
                ))}
              </div>
              <p style={{ fontSize: "11px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.4)", textAlign: "center" }}>{legalText}</p>
              <p style={{ fontSize: "11px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.4)" }}>{remaxText}</p>
            </div>
          </div>

          {/* ── DESKTOP LAYOUT ── */}
          <div className="hidden lg:block">
            {/* 4-column grid */}
            <div className="grid grid-cols-4 gap-8 py-16" role="navigation" aria-label="Footer navigation">

              {/* Col 1 — Brand */}
              <div>
                <img src={logoYgsWhite} alt="YGS — Yanis Gauthier-Sigeris" width={140} height={158} className="h-auto mb-4" style={{ width: 140 }} loading="lazy" decoding="async" />
                <p style={{ fontSize: "13px", fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--gold)", marginBottom: 16 }}>{tagline}</p>
                <p style={{ fontSize: "13px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.5)", marginBottom: 2 }}>819-210-3044</p>
                <p style={{ fontSize: "13px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.5)" }}>yanis@martywaite.com</p>
              </div>

              {/* Col 2 — Navigation */}
              <div>
                <p style={labelStyle}>{navLabel}</p>
                <ul className="space-y-2.5">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        to={l.href}
                        style={linkStyle}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(247,244,238,1)"; e.currentTarget.style.textDecoration = "underline"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(247,244,238,.65)"; e.currentTarget.style.textDecoration = "none"; }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 — Secteurs */}
              <div>
                <p style={labelStyle}>{sectorsLabel}</p>
                <ul className="space-y-2.5">
                  {sectors.map((l) => (
                    <li key={l.href}>
                      <Link
                        to={l.href}
                        style={linkStyle}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(247,244,238,1)"; e.currentTarget.style.textDecoration = "underline"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(247,244,238,.65)"; e.currentTarget.style.textDecoration = "none"; }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4 — Commencer */}
              <div>
                <p style={labelStyle}>{ctaLabel}</p>
                <Link
                  to={ctaHref}
                  style={{
                    display: "inline-block",
                    border: "1px solid var(--gold)",
                    color: "var(--gold)",
                    fontFamily: "var(--sans)",
                    fontSize: "13px",
                    fontWeight: 500,
                    padding: "10px 24px",
                    borderRadius: 999,
                    textDecoration: "none",
                    transition: "background .3s, color .3s",
                    marginBottom: 20,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#17303B"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
                >
                  {ctaButtonText}
                </Link>
                <p style={{ fontSize: "18px", fontFamily: "var(--sans)", fontWeight: 500, color: "rgba(247,244,238,.9)", marginBottom: 4 }}>819-210-3044</p>
                <p style={{ fontSize: "13px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.5)" }}>yanis@martywaite.com</p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(247,244,238,.12)" }} />

            {/* Bottom bar */}
            <div className="flex items-center justify-between py-5">
              <p style={{ fontSize: "11px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.4)" }}>{legalText}</p>
              <p style={{ fontSize: "11px", fontFamily: "var(--sans)", color: "rgba(247,244,238,.4)" }}>{remaxText}</p>
              <div className="flex items-center gap-4">
                {[
                  { href: "https://www.instagram.com/yanissigeris/", label: "Instagram", Icon: InstagramSvg },
                  { href: "https://www.facebook.com/YanisGauthierSigeris", label: "Facebook", Icon: FacebookSvg },
                ].map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ color: "rgba(247,244,238,.5)", transition: "color .3s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(247,244,238,1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(247,244,238,.5)"; }}
                  ><Icon /></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  },
);

SiteFooter.displayName = "SiteFooter";
export default SiteFooter;
