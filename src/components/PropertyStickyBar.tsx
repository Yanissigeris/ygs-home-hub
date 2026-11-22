import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { trackCTAClick, trackContactTap } from "@/lib/analytics";

/**
 * Barre collante des fiches propriété (téléphone seulement).
 * « Planifier une visite » descend jusqu'au formulaire de visite, « Appeler » compose le numéro.
 * Cachée en haut de page, quand le formulaire de visite est à l'écran et quand le pied de page arrive.
 * Même attribut data-sticky-mobile-cta que la barre du site : elle s'efface aussi pendant la bannière cookies.
 */
const PropertyStickyBar = ({ lang, targetId }: { lang: "fr" | "en"; targetId: string }) => {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  const visitLabel = lang === "en" ? "Book a visit" : "Planifier une visite";
  const callLabel = lang === "en" ? "Call" : "Appeler";
  const callAriaLabel = lang === "en"
    ? "Call Yanis Gauthier-Sigeris at 819-210-3044"
    : "Appeler Yanis Gauthier-Sigeris au 819-210-3044";

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const target = document.getElementById(targetId);
        const footer = document.querySelector("footer");
        let targetInView = false;
        if (target) {
          const r = target.getBoundingClientRect();
          targetInView = r.top < vh * 0.85 && r.bottom > vh * 0.15;
        }
        const footerInView = footer ? footer.getBoundingClientRect().top < vh : false;
        setVisible(window.scrollY > vh * 0.55 && !targetInView && !footerInView);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetId]);

  const goToVisit = () => {
    trackCTAClick(visitLabel, "property-sticky-bar");
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    const first = target.querySelector<HTMLInputElement>("input, textarea");
    if (first) window.setTimeout(() => first.focus({ preventScroll: true }), 450);
  };

  return (
    <div
      role="region"
      data-sticky-mobile-cta
      aria-label={lang === "en" ? "Quick actions" : "Actions rapides"}
      aria-hidden={!visible}
      className="fixed inset-x-0 z-[500] md:hidden"
      style={{
        bottom: "var(--cookie-bar-h, 0px)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform .35s cubic-bezier(.22,.61,.36,1), bottom .35s cubic-bezier(.22,.61,.36,1)",
        background: "var(--ink)",
        borderTop: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 -4px 30px rgba(0,0,0,.25)",
        padding: "0.85rem 1.25rem",
        paddingBottom: "calc(0.85rem + var(--cookie-bar-safe, env(safe-area-inset-bottom)))",
      }}
    >
      <div className="flex gap-2">
        <button
          type="button"
          tabIndex={visible ? 0 : -1}
          onClick={goToVisit}
          className="flex-[1.5] inline-flex items-center justify-center text-[var(--on-action)] motion-press"
          style={{
            background: "var(--action)",
            borderRadius: 999,
            padding: ".85rem 1rem",
            fontSize: ".85rem",
            fontWeight: 600,
            minHeight: "48px",
          }}
        >
          {visitLabel}
        </button>
        <a
          href="tel:+18192103044"
          tabIndex={visible ? 0 : -1}
          aria-label={callAriaLabel}
          onClick={() => {
            trackCTAClick("call", "property-sticky-bar");
            trackContactTap({ channel: "phone", location: "sticky_cta", destination: "+18192103044" });
          }}
          className="flex-1 inline-flex items-center justify-center motion-press"
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,.25)",
            color: "rgba(255,255,255,.85)",
            borderRadius: 999,
            padding: ".85rem .75rem",
            fontSize: ".82rem",
            minHeight: "48px",
            fontWeight: 500,
          }}
        >
          <span aria-hidden="true" className="inline-flex items-center gap-1.5"><Phone size={15} strokeWidth={1.75} />{callLabel}</span>
        </a>
      </div>
    </div>
  );
};

export default PropertyStickyBar;
