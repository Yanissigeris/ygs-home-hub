import { lazy, Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";

const MortgageCalculator = lazy(() => import("@/components/MortgageCalculator"));
const WelcomeTaxCalculator = lazy(() => import("@/components/WelcomeTaxCalculator"));

const t = {
  fr: {
    overline: "Calculateurs",
    title: "Estimez vos coûts avant de vous lancer",
    subtitle: "Simulez vos paiements hypothécaires et votre taxe de bienvenue en quelques clics.",
    cta: "Besoin d'aide avec vos chiffres? Contactez-moi pour une estimation personnalisée.",
    ctaLabel: "Me contacter",
    ctaHref: "/contact-yanis/",
  },
  en: {
    overline: "Calculators",
    title: "Estimate your costs before making your move",
    subtitle: "Estimate your mortgage payments and welcome tax before making your move.",
    cta: "Need help understanding your numbers? Contact me for a personalized estimate.",
    ctaLabel: "Contact me",
    ctaHref: "/en/contact/",
  },
};

const CalculatorsSection = () => {
  const lang = useLanguage();
  const l = t[lang];

  return (
    <section id={lang === "en" ? "calculators" : "calculateurs"} className="section-padding bg-[var(--cream)]">
      <div className="section-container">
        <div
        >
          <SectionHeading overline={l.overline} title={l.title} subtitle={l.subtitle} />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Suspense fallback={<div className="h-64 animate-pulse rounded-[var(--card-radius)] bg-muted/30" />}>
              <MortgageCalculator />
            </Suspense>
            <Suspense fallback={<div className="h-64 animate-pulse rounded-[var(--card-radius)] bg-muted/30" />}>
              <WelcomeTaxCalculator />
            </Suspense>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10">
            <p className="prose-body mb-5">{l.cta}</p>
            <Button
              asChild
              size="lg"
              onClick={() => trackCTAClick("calculators_contact_cta", l.ctaLabel)}
            >
              <a href={l.ctaHref}>{l.ctaLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
