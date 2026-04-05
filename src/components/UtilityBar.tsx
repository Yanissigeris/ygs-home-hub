import * as React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const PhoneIcon = ({ size = 12, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = ({ size = 12, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const FacebookIcon = ({ size = 13, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ size = 13, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const UtilityBar = React.forwardRef<HTMLDivElement>((_, ref) => {
  const lang = useLanguage();
  const ctaHref = lang === "en" ? "/en/home-valuation" : "/evaluation-gratuite-gatineau";
  const ctaLabel = lang === "en" ? "Free Valuation" : "Évaluation gratuite";
  const ctaLabelMobile = lang === "en" ? "Valuation" : "Évaluation";
  const relocationLabel = lang === "en" ? "Relocation" : "Relocalisation";
  const relocationHref = lang === "en" ? "/en/relocation" : "/relocalisation-ottawa-gatineau";
  const contactHref = lang === "en" ? "/en/contact" : "/contact-yanis";

  return (
    <div ref={ref}>
      {/* Desktop */}
      <div className="hidden sm:block" style={{ background: "var(--ink)", borderBottom: "1px solid rgba(255,255,255,.06)", height: 38 }}>
        <div className="section-container flex h-full items-center justify-between">
          <div className="flex items-center gap-5" style={{ fontSize: ".73rem", letterSpacing: ".01em", color: "rgba(255,255,255,.5)" }}>
            <a href="tel:+18192103044" className="flex items-center gap-2 transition-colors duration-200 hover:text-white">
              <PhoneIcon size={12} className="text-white/35" /><span>819-210-3044</span>
            </a>
            <span className="h-3 w-px" style={{ background: "rgba(255,255,255,.1)" }} aria-hidden />
            <a href="mailto:yanis@martywaite.com" className="flex items-center gap-2 transition-colors duration-200 hover:text-white">
              <MailIcon size={12} className="text-white/35" /><span>yanis@martywaite.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/YanisGauthierSigeris" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,.4)" }}>
              <FacebookIcon size={13} />
            </a>
            <a href="https://www.instagram.com/yanissigeris/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,.4)" }}>
              <InstagramIcon size={13} />
            </a>
            <span className="h-3 w-px" style={{ background: "rgba(255,255,255,.1)" }} aria-hidden />
            <Link to={relocationHref} className="transition-colors duration-200 hover:text-white" style={{ fontSize: ".73rem", letterSpacing: ".01em", color: "rgba(255,255,255,.5)" }}>{relocationLabel}</Link>
            <Link to={lang === "en" ? "/en/blog" : "/blogue"} className="transition-colors duration-200 hover:text-white" style={{ fontSize: ".73rem", letterSpacing: ".01em", color: "rgba(255,255,255,.5)" }}>{lang === "en" ? "Blog" : "Blogue"}</Link>
            <Link to={contactHref} className="transition-colors duration-200 hover:text-white" style={{ fontSize: ".73rem", letterSpacing: ".01em", color: "rgba(255,255,255,.5)" }}>Contact</Link>
            <Link to={ctaHref} className="ml-1 inline-flex items-center transition-all duration-200 hover:brightness-110" style={{ height: 28, borderRadius: 20, background: "var(--gold)", color: "#fff", fontSize: ".7rem", fontWeight: 600, padding: "0 1rem", letterSpacing: ".03em" }}>{ctaLabel}</Link>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="sm:hidden" style={{ background: "var(--ink)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="flex min-h-[38px] items-center justify-between gap-3 px-4 py-1.5">
          <a href="tel:+18192103044" className="flex min-w-0 items-center gap-1.5 transition-colors hover:text-white" style={{ fontSize: ".72rem", color: "rgba(255,255,255,.5)" }}>
            <PhoneIcon size={11} className="shrink-0" style={{ color: "rgba(255,255,255,.35)" }} /><span className="truncate">819-210-3044</span>
          </a>
          <div className="flex shrink-0 items-center gap-3">
            <Link to={lang === "en" ? "/en/blog" : "/blogue"} className="transition-colors hover:text-white" style={{ fontSize: ".69rem", color: "rgba(255,255,255,.5)" }}>{lang === "en" ? "Blog" : "Blogue"}</Link>
            <Link to={ctaHref} className="inline-flex shrink-0 items-center transition-all duration-200 hover:brightness-110" style={{ height: 26, borderRadius: 20, background: "var(--gold)", color: "#fff", fontSize: ".63rem", fontWeight: 600, padding: "0 .75rem", letterSpacing: ".03em" }}>{ctaLabelMobile}</Link>
          </div>
        </div>
      </div>
    </div>
  );
});

UtilityBar.displayName = "UtilityBar";
export default UtilityBar;
