import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const WhatsAppButton = () => {
  const lang = useLanguage();
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const waLink =
    lang === "en"
      ? "https://wa.me/18192103044?text=Hello%20Yanis%2C%20I%27d%20like%20to%20discuss%20my%20real%20estate%20project%20in%20Outaouais."
      : "https://wa.me/18192103044?text=Bonjour%20Yanis%2C%20j%27aimerais%20discuter%20de%20mon%20projet%20immobilier%20en%20Outaouais.";

  const tooltip = lang === "en" ? "Message on WhatsApp" : "Écrire sur WhatsApp";

  useEffect(() => {
    if (isMobile) {
      setVisible(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener"
      aria-label="Contacter Yanis sur WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed z-[490] flex items-center justify-center"
      style={{
        bottom: isMobile ? 90 : 32,
        right: isMobile ? 20 : 32,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        boxShadow: hovered
          ? "0 6px 28px rgba(37,211,102,.55)"
          : "0 4px 20px rgba(37,211,102,.4)",
        transform: visible
          ? hovered ? "scale(1.08)" : "scale(1)"
          : "scale(0)",
        opacity: visible ? 1 : 0,
        transition: "all .35s cubic-bezier(.22,.61,.36,1)",
        cursor: "pointer",
      }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "#25D366",
          animation: "whatsapp-pulse 2.5s ease-out infinite",
        }}
      />

      {/* Icon */}
      <svg viewBox="0 0 24 24" width="28" height="28" fill="white" className="relative z-10">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.845L.057 23.617a.75.75 0 00.918.978l5.9-1.453A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-4.952-1.355l-.355-.213-3.683.907.948-3.571-.232-.368A9.715 9.715 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
      </svg>

      {/* Tooltip — desktop only */}
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

export default WhatsAppButton;
