import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HIDDEN_PATHS = [
  "/contact-yanis", "/en/contact",
  "/merci", "/en/thank-you",
  "/merci-evaluation", "/en/thank-you-valuation",
];

const FloatingCallButton = () => {
  const { pathname } = useLocation();
  const lang = useLanguage();
  const hidden = HIDDEN_PATHS.some((p) => pathname === p || pathname === p + "/");

  // Mobile: hide when sticky bottom bar is visible (mirrors StickyMobileCTA logic)
  const [stickyVisible, setStickyVisible] = useState(false);
  const ticking = useRef(false);
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const heroThreshold = window.innerHeight * 0.55;
        const footer = document.querySelector("footer");
        let footerVisible = false;
        if (footer) {
          const rect = footer.getBoundingClientRect();
          footerVisible = rect.top < window.innerHeight;
        }
        setStickyVisible(window.scrollY > heroThreshold && !footerVisible);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden) return null;

  const callLabel = lang === "en" ? "Call" : "Appeler";
  const ariaLabelDesktop = lang === "en" ? "Call 819-210-3044" : "Appeler 819-210-3044";
  const ariaLabelMobile = lang === "en" ? "Call" : "Appeler";

  return (
    <aside aria-label={lang === "en" ? "Quick contact" : "Contact rapide"}>
      {/* Desktop */}
      <a
        href="tel:+18192103044"
        aria-label={ariaLabelDesktop}
        className="group fixed z-[490] hidden md:inline-flex items-center justify-center"
        style={{
          bottom: "clamp(20px, 2.5vw, 32px)",
          right: "clamp(20px, 2.5vw, 32px)",
          width: "clamp(48px, 4.5vw, 64px)",
          height: "clamp(48px, 4.5vw, 64px)",
          padding: "clamp(12px, 1.2vw, 18px)",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1c3a47 0%, #17303B 100%)",
          color: "#F7F4EE",
          textDecoration: "none",
          boxShadow: "0 8px 24px -8px rgba(0,0,0,0.35), 0 2px 6px -2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
          border: "1px solid rgba(247,244,238,0.08)",
          transition: "transform .25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow .25s ease, background .25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 14px 32px -10px rgba(0,0,0,0.45), 0 4px 10px -2px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)";
          e.currentTarget.style.background = "linear-gradient(135deg, #234a5a 0%, #1c3a47 100%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 24px -8px rgba(0,0,0,0.35), 0 2px 6px -2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)";
          e.currentTarget.style.background = "linear-gradient(135deg, #1c3a47 0%, #17303B 100%)";
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#D4B483" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* Mobile — hidden (sticky bottom bar already provides Call) */}
      <a
        href="tel:+18192103044"
        aria-label={ariaLabelMobile}
        className={`hidden`}
        style={{
          bottom: 24,
          right: 24,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#17303B",
          transition: "background .2s ease, transform .2s ease",
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F7F4EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </aside>
  );
};

export default FloatingCallButton;
