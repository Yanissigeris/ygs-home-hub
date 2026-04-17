import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BrandedLoader = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return !sessionStorage.getItem("ygs_loader_seen");
    } catch {
      return false;
    }
  });
  const [fading, setFading] = useState(false);
  const { pathname } = useLocation();
  const isEn = pathname.startsWith("/en");

  useEffect(() => {
    if (!visible) return;

    const fadeTimer = setTimeout(() => {
      setFading(true);
      try { sessionStorage.setItem("ygs_loader_seen", "true"); } catch {}
    }, 800);

    const removeTimer = setTimeout(() => setVisible(false), 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "var(--ink)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 400ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "clamp(2rem, 6vw, 3rem)",
          fontFamily: "var(--serif)",
          fontWeight: 600,
          color: "#fff",
          letterSpacing: ".04em",
          animation: "loader-logo 400ms cubic-bezier(.22,.61,.36,1) both",
        }}
      >
        YGS
      </div>

      {/* Gold line */}
      <div
        style={{
          height: 1,
          background: "var(--gold)",
          margin: "1rem auto",
          animation: "loader-line 300ms ease 250ms both",
        }}
      />

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--serif)",
          fontSize: ".85rem",
          fontWeight: 300,
          fontStyle: "italic",
          color: "rgba(255,255,255,.5)",
          letterSpacing: ".08em",
          animation: "loader-tagline 350ms ease 350ms both",
        }}
      >
        {isEn ? "Your real estate ally in Outaouais" : "Votre allié en immobilier en Outaouais"}
      </p>

      {/* Bottom progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: "var(--gold)",
          animation: "loader-bar 800ms ease forwards",
        }}
      />

      <style>{`
        @keyframes loader-logo {
          from { opacity: 0; transform: scale(.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes loader-line {
          from { width: 0; }
          to { width: 32px; }
        }
        @keyframes loader-tagline {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loader-bar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default BrandedLoader;
