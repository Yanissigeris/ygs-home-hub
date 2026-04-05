import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/analytics";

const HIDDEN_PATHS = [
  "/contact-yanis", "/en/contact",
  "/merci", "/en/thank-you",
  "/merci-evaluation", "/en/thank-you-valuation",
  "/evaluation-gratuite-gatineau", "/en/home-valuation",
  "/evaluation-aylmer", "/en/home-valuation-aylmer",
  "/evaluation-hull", "/en/home-valuation-hull",
];

const StickyMobileCTA = () => {
  const lang = useLanguage();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  const hidden = HIDDEN_PATHS.some((p) => pathname === p || pathname === p + "/");

  const ctaLabel = lang === "en" ? "Free Valuation →" : "Évaluation Gratuite →";
  const ctaHref = lang === "en" ? "/en/home-valuation" : "/evaluation-gratuite-gatineau";
  const callLabel = "📞 Appeler";

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const heroThreshold = window.innerHeight * 0.9;
        const footer = document.querySelector("footer");
        let footerVisible = false;
        if (footer) {
          const rect = footer.getBoundingClientRect();
          footerVisible = rect.top < window.innerHeight;
        }
        setVisible(window.scrollY > heroThreshold && !footerVisible);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[500] md:hidden"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform .35s cubic-bezier(.22,.61,.36,1)",
        background: "var(--ink)",
        borderTop: "2px solid var(--gold)",
        boxShadow: "0 -4px 30px rgba(0,0,0,.25)",
        padding: "0.85rem 1.25rem",
        paddingBottom: "calc(0.85rem + env(safe-area-inset-bottom))",
      }}
    >
      <div className="flex gap-2">
        <Link
          to={ctaHref}
          onClick={() => trackCTAClick(ctaLabel, "sticky-mobile-cta")}
          className="flex-[1.5] inline-flex items-center justify-center text-white transition-colors"
          style={{
            background: "var(--gold)",
            borderRadius: "3px",
            padding: ".7rem 1rem",
            fontSize: ".85rem",
            fontWeight: 600,
          }}
        >
          {ctaLabel}
        </Link>
        <a
          href="tel:8192103044"
          className="flex-1 inline-flex items-center justify-center transition-colors"
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,.25)",
            color: "rgba(255,255,255,.85)",
            borderRadius: "3px",
            padding: ".7rem .75rem",
            fontSize: ".82rem",
            fontWeight: 500,
          }}
        >
          {callLabel}
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
