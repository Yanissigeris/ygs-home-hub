import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackCTAClick } from "@/lib/analytics";

interface Props {
  lang?: "fr" | "en";
}

// Replaces the inline ValuationWidget on the homepage (Oct 2026).
// GA4 Apr to Oct 2026: the widget logged 1 address entry and 0 leads, while the
// dedicated valuation page is where valuation requests actually happen.
// Every homepage valuation entry point now leads to that one page.
const t = {
  fr: {
    eyebrow: "ÉVALUATION GRATUITE",
    heading: "Combien vaut votre propriété?",
    sub: "Je compare votre propriété aux ventes récentes de votre secteur et je vous reviens avec une réponse personnalisée.",
    cta: "Obtenir mon évaluation",
    href: "/evaluation-gratuite-gatineau/",
    reassure: "Gratuit et sans engagement. Vos informations restent confidentielles.",
  },
  en: {
    eyebrow: "FREE VALUATION",
    heading: "What is your property worth?",
    sub: "I compare your property to recent sales in your area and get back to you with a personalized answer.",
    cta: "Get my valuation",
    href: "/en/home-valuation/",
    reassure: "Free, no obligation. Your information stays private.",
  },
};

const ValuationCTA = ({ lang: langProp }: Props) => {
  const ctxLang = useLanguage();
  const lang = langProp ?? ctxLang;
  const c = t[lang];
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        background: "var(--white)",
        paddingTop: isMobile ? "4rem" : "6rem",
        paddingBottom: isMobile ? "4rem" : "6rem",
      }}
    >
      <div className="section-container">
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: ".72rem",
              fontWeight: 600,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "hsl(var(--muted-foreground))",
              margin: 0,
            }}
          >
            {c.eyebrow}
          </p>

          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: isMobile ? "1.85rem" : "2.4rem",
              fontWeight: 500,
              color: "var(--ink)",
              lineHeight: 1.15,
              marginTop: "1.25rem",
              marginBottom: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {c.heading}
          </h2>

          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: isMobile ? ".95rem" : "1.05rem",
              color: "hsl(var(--muted-foreground))",
              lineHeight: 1.65,
              marginTop: "1rem",
              marginBottom: 0,
              maxWidth: 540,
              marginInline: "auto",
            }}
          >
            {c.sub}
          </p>

          <Link
            to={c.href}
            onClick={() => trackCTAClick(c.cta, "home-valuation-block")}
            style={{
              marginTop: isMobile ? "2rem" : "2.25rem",
              display: isMobile ? "flex" : "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".6rem",
              minHeight: 56,
              padding: "0 2.25rem",
              background: "var(--gold-bright)",
              color: "var(--ink)",
              fontFamily: "var(--sans)",
              fontSize: ".95rem",
              fontWeight: 600,
              letterSpacing: ".02em",
              borderRadius: 3,
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(23,48,59,.12)",
            }}
          >
            {c.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: ".85rem",
              color: "hsl(var(--muted-foreground))",
              marginTop: "1rem",
              marginBottom: 0,
            }}
          >
            {c.reassure}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuationCTA;
