import * as React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const STORAGE_KEY = "ygs_cookie_consent";
const STORAGE_PREFS_KEY = "ygs_cookie_prefs";
const GA_ID = "G-P4Y8089EGB";

type ConsentValue = "accepted" | "refused" | "partial";
interface CookiePrefs {
  analytics: boolean;
  marketing: boolean;
}

function getConsent(): ConsentValue | null {
  try {
    return localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
  } catch {
    return null;
  }
}
function getPrefs(): CookiePrefs {
  try {
    const raw = localStorage.getItem(STORAGE_PREFS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { analytics: true, marketing: false };
}
function saveConsent(value: ConsentValue, prefs?: CookiePrefs) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
    if (prefs) localStorage.setItem(STORAGE_PREFS_KEY, JSON.stringify(prefs));
  } catch {}
}

/** Load GA4 script dynamically */
function loadGA() {
  if (document.getElementById("ygs-ga-script")) return;
  const s = document.createElement("script");
  s.id = "ygs-ga-script";
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer!.push(args); }
  gtag("js", new Date());
  gtag("config", GA_ID);
  (window as any).gtag = gtag;
}

declare global {
  interface Window { dataLayer?: unknown[] }
}

/** Execute tracking based on consent */
function applyConsent() {
  const consent = getConsent();
  if (!consent || consent === "refused") return;
  const prefs = getPrefs();
  if (consent === "accepted" || prefs.analytics) {
    loadGA();
  }
}

/* ── Toggle component ── */
const Toggle = ({ checked, onChange, disabled, id }: { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean; id: string }) => (
  <button
    role="switch"
    aria-checked={checked}
    id={id}
    onClick={() => !disabled && onChange(!checked)}
    className="relative shrink-0 transition-colors duration-200"
    style={{
      width: 44, height: 24, borderRadius: 12,
      background: checked ? "var(--gold)" : "hsl(var(--border))",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.7 : 1,
    }}
  >
    <span
      className="absolute top-0.5 block rounded-full bg-white transition-transform duration-200"
      style={{ width: 20, height: 20, transform: checked ? "translateX(22px)" : "translateX(2px)" }}
    />
  </button>
);

/* ── Preferences Modal ── */
const PreferencesModal = ({ open, onClose, onSave, lang }: {
  open: boolean;
  onClose: () => void;
  onSave: (prefs: CookiePrefs) => void;
  lang: "fr" | "en";
}) => {
  const [analytics, setAnalytics] = React.useState(() => getPrefs().analytics);
  const [marketing, setMarketing] = React.useState(() => getPrefs().marketing);

  if (!open) return null;

  const t = lang === "en" ? {
    title: "Manage my preferences",
    necessary: "Necessary cookies",
    necessaryDesc: "Essential for the site to function.",
    alwaysOn: "Always active",
    analyticsLabel: "Analytics cookies",
    analyticsDesc: "Google Analytics — helps us understand how you use the site.",
    marketingLabel: "Marketing cookies",
    marketingDesc: "Facebook Pixel, personalized ads.",
    save: "Save my choices",
  } : {
    title: "Gérer mes préférences",
    necessary: "Cookies nécessaires",
    necessaryDesc: "Essentiels au fonctionnement du site.",
    alwaysOn: "Toujours actifs",
    analyticsLabel: "Cookies analytiques",
    analyticsDesc: "Google Analytics — nous aide à comprendre comment vous utilisez le site.",
    marketingLabel: "Cookies marketing",
    marketingDesc: "Facebook Pixel, publicités personnalisées.",
    save: "Sauvegarder mes choix",
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center" style={{ background: "rgba(0,0,0,.6)" }} onClick={onClose}>
      <div className="relative w-[90%] max-w-[480px] rounded bg-white p-8" style={{ color: "var(--ink)" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-xl" style={{ color: "hsl(var(--muted-foreground))" }} aria-label="Close">×</button>
        <h3 className="font-serif text-[1.3rem] font-semibold mb-6">{t.title}</h3>

        <div className="space-y-5">
          {/* Necessary */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[.875rem] font-semibold">{t.necessary}</p>
              <p className="text-[.78rem] mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{t.necessaryDesc}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Toggle checked disabled id="toggle-necessary" onChange={() => {}} />
              <span className="text-[.65rem] font-medium" style={{ color: "var(--gold)" }}>{t.alwaysOn}</span>
            </div>
          </div>

          {/* Analytics */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <label htmlFor="toggle-analytics" className="text-[.875rem] font-semibold cursor-pointer">{t.analyticsLabel}</label>
              <p className="text-[.78rem] mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{t.analyticsDesc}</p>
            </div>
            <Toggle checked={analytics} onChange={setAnalytics} id="toggle-analytics" />
          </div>

          {/* Marketing */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <label htmlFor="toggle-marketing" className="text-[.875rem] font-semibold cursor-pointer">{t.marketingLabel}</label>
              <p className="text-[.78rem] mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{t.marketingDesc}</p>
            </div>
            <Toggle checked={marketing} onChange={setMarketing} id="toggle-marketing" />
          </div>
        </div>

        <button
          onClick={() => onSave({ analytics, marketing })}
          className="mt-6 w-full rounded py-3 text-[.88rem] font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--ink)" }}
        >
          {t.save}
        </button>
      </div>
    </div>
  );
};

/* ── Main Banner ── */
const CookieConsent = () => {
  const lang = useLanguage();
  const [visible, setVisible] = React.useState(false);
  const [showPrefs, setShowPrefs] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const existing = getConsent();
    if (existing) {
      setDismissed(true);
      applyConsent();
      return;
    }
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    saveConsent("accepted", { analytics: true, marketing: true });
    setVisible(false);
    setDismissed(true);
    applyConsent();
  };
  const handleRefuse = () => {
    saveConsent("refused", { analytics: false, marketing: false });
    setVisible(false);
    setDismissed(true);
  };
  const handleSavePrefs = (prefs: CookiePrefs) => {
    const value: ConsentValue = prefs.analytics || prefs.marketing ? "partial" : "refused";
    saveConsent(value, prefs);
    setShowPrefs(false);
    setVisible(false);
    setDismissed(true);
    applyConsent();
  };
  const handleReopen = () => {
    setShowPrefs(true);
  };

  const t = lang === "en" ? {
    title: "This site uses cookies",
    body: "We use cookies to improve your experience, analyze traffic and personalize content. In accordance with Quebec's Law 25, your consent is required.",
    learnMore: "Learn more",
    privacyHref: "/en/privacy-policy",
    refuse: "Refuse all",
    customize: "Customize",
    accept: "Accept all",
  } : {
    title: "Ce site utilise des cookies",
    body: "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. Conformément à la Loi 25 du Québec, votre consentement est requis.",
    learnMore: "En savoir plus",
    privacyHref: "/politique-de-confidentialite",
    refuse: "Tout refuser",
    customize: "Personnaliser",
    accept: "Tout accepter",
  };

  return (
    <>
      {/* Banner */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[9999]"
        style={{
          background: "var(--ink)",
          borderTop: "2px solid var(--gold)",
          boxShadow: "0 -4px 30px rgba(0,0,0,.2)",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform .4s cubic-bezier(.22,.61,.36,1)",
          paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
        }}
        role="dialog"
        aria-label={t.title}
      >
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-5">
          {/* Text */}
          <div className="max-w-[580px]">
            <p className="flex items-center gap-2 font-serif text-[1rem] font-semibold text-white mb-1">
              <span>🍪</span> {t.title}
            </p>
            <p className="text-[.78rem] leading-[1.6]" style={{ color: "rgba(255,255,255,.6)" }}>
              {t.body}{" "}
              <Link to={t.privacyHref} className="underline transition-colors" style={{ color: "var(--gold)", fontSize: ".75rem" }}>
                {t.learnMore}
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 shrink-0">
            <button
              onClick={handleRefuse}
              className="flex-1 md:flex-none rounded px-5 py-2.5 text-[.78rem] font-medium transition-colors"
              style={{ background: "transparent", border: "1px solid rgba(255,255,255,.25)", color: "rgba(255,255,255,.7)", minHeight: 44 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.5)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.25)"; e.currentTarget.style.color = "rgba(255,255,255,.7)"; }}
            >
              {t.refuse}
            </button>
            <button
              onClick={() => setShowPrefs(true)}
              className="flex-1 md:flex-none rounded px-5 py-2.5 text-[.78rem] font-medium transition-colors"
              style={{ background: "transparent", border: "1px solid rgba(255,255,255,.25)", color: "rgba(255,255,255,.7)", minHeight: 44 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.5)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,.25)"; e.currentTarget.style.color = "rgba(255,255,255,.7)"; }}
            >
              {t.customize}
            </button>
            <button
              onClick={handleAccept}
              className="flex-[2] md:flex-none rounded px-6 py-2.5 text-[.78rem] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--gold)", border: "none", minHeight: 44 }}
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>

      {/* Re-open cookie button (bottom-left) */}
      {dismissed && !visible && !showPrefs && (
        <button
          onClick={handleReopen}
          className="fixed z-[9998] flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
          style={{
            bottom: "1rem", left: "1rem", width: 32, height: 32,
            background: "var(--ink)", border: "1px solid rgba(255,255,255,.1)",
            fontSize: "1rem", lineHeight: 1,
          }}
          aria-label={lang === "en" ? "Cookie preferences" : "Préférences cookies"}
        >
          🍪
        </button>
      )}

      {/* Preferences Modal */}
      <PreferencesModal open={showPrefs} onClose={() => setShowPrefs(false)} onSave={handleSavePrefs} lang={lang} />
    </>
  );
};

export default CookieConsent;
