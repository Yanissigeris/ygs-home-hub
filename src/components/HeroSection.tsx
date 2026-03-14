import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  overline?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLine?: string;
}

const HeroSection = ({ overline, title, subtitle, primaryCta, secondaryCta, trustLine }: HeroSectionProps) => (
  <section className="hero-gradient relative overflow-hidden">
    {/* Subtle texture overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(195_30%_30%_/_0.15)_0%,_transparent_60%)]" />

    <div className="section-container relative section-padding">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {overline && (
          <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
            {overline}
          </p>
        )}
        <h1 className="text-primary-foreground">{title}</h1>
        <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.7] text-primary-foreground/75 sm:text-base sm:leading-[1.75]">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-wrap gap-4">
            {primaryCta && (
              <Button size="lg" variant="hero" asChild>
                <Link to={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button size="lg" variant="hero-outline" asChild>
                <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        )}
        {trustLine && (
          <p className="mt-6 text-[0.75rem] text-primary-foreground/40">
            {trustLine}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
