import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const HIDDEN_PATHS = [
  "/contact-yanis", "/en/contact",
  "/merci", "/en/thank-you",
  "/merci-evaluation", "/en/thank-you-valuation",
];

const SmsButton = () => {
  const lang = useLanguage();
  const isMobile = useIsMobile();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hidden = HIDDEN_PATHS.some((p) => pathname === p || pathname === p + "/");

  const smsBody =
    lang === "en"
      ? "Hello Yanis, I'd like to discuss my real estate project in Outaouais."
      : "Bonjour Yanis, j'aimerais discuter de mon projet immobilier en Outaouais.";

  const smsLink = `sms:+18192103044${isMobile ? (/iPhone|iPad/i.test(navigator.userAgent) ? "&" : "?") : "?"}body=${encodeURIComponent(smsBody)}`;

  const tooltip = lang === "en" ? "Send a text message" : "Envoyer un texto";

  useEffect(() => {
    if (isMobile) {
      setVisible(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [isMobile]);

  if (hidden || isMobile) return null;

  return (
    <a
      href={smsLink}
      aria-label={tooltip}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed z-[490] flex items-center justify-center"
      style={{
        bottom: isMobile ? 110 : 32,
        right: isMobile ? 20 : 32,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "var(--gold)",
        boxShadow: hovered
          ? "0 6px 28px hsla(var(--gold-h, 38) var(--gold-s, 45%) var(--gold-l, 50%) / .55)"
          : "0 4px 20px hsla(var(--gold-h, 38) var(--gold-s, 45%) var(--gold-l, 50%) / .4)",
        transform: visible
          ? hovered ? "scale(1.08)" : "scale(1)"
          : "scale(0)",
        opacity: visible ? 1 : 0,
        transition: "all .35s cubic-bezier(.22,.61,.36,1)",
        cursor: "pointer",
      }}
    >
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "var(--gold)",
          animation: "whatsapp-pulse 2.5s ease-out infinite",
        }}
      />
      {/* SMS / Message icon */}
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      {!isMobile && (
        <span
          className="absolute pointer-events-none whitespace-nowrap"
          style={{
            right: 68,
            bottom: 12,
            background: "var(--ink)",
            color: "#fff",
            padding: ".5rem 1rem",
            borderRadius: 3,
            fontSize: ".78rem",
            fontWeight: 500,
            opacity: hovered ? 1 : 0,
            transition: "opacity .2s",
          }}
        >
          {tooltip}
          <span
            className="absolute"
            style={{
              right: -6,
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "6px solid var(--ink)",
            }}
          />
        </span>
      )}
    </a>
  );
};

export default SmsButton;
