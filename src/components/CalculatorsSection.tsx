import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
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
    ctaHref: "/contact",
  },
  en: {
    overline: "Calculators",
    title: "Estimate your costs before making your move",
    subtitle: "Estimate your mortgage payments and welcome tax before making your move.",
    cta: "Need help understanding your numbers? Contact me for a personalized estimate.",
    ctaLabel: "Contact me",
    ctaHref: "/en/contact",
  },
};

const CalculatorsSection = () => {
  const lang = useLanguage();
  const l = t[lang];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline={l.overline} title={l.title} subtitle={l.subtitle} centered />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Suspense fallback={<div className="h-64 animate-pulse rounded-[var(--card-radius)] bg-muted/30" />}>
              <MortgageCalculator />
            </Suspense>
            <Suspense fallback={<div className="h-64 animate-pulse rounded-[var(--card-radius)] bg-muted/30" />}>
              <WelcomeTaxCalculator />
            </Suspense>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="prose-body mx-auto mb-5">{l.cta}</p>
            <Button
              asChild
              size="lg"
              onClick={() => trackCTAClick("calculators_contact_cta", l.ctaLabel)}
            >
              <a href={l.ctaHref}>{l.ctaLabel}</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
