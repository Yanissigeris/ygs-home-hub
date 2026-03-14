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
  compact?: boolean;
}

const HeroSection = ({ overline, title, subtitle, primaryCta, secondaryCta, trustLine, compact }: HeroSectionProps) => (
  <section className="hero-gradient relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(195_30%_28%_/_0.12)_0%,_transparent_55%)]" />
    <div className={`section-container relative ${compact ? "py-12 sm:py-16 md:py-20" : "section-padding"}`}>
      <motion.div
        className="max-w-[38rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {overline && (
          <p className="mb-3 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-primary-foreground/40">
            {overline}
          </p>
        )}
        <h1 className="text-primary-foreground">{title}</h1>
        <p className="mt-4 max-w-[32rem] text-[0.9375rem] leading-[1.65] text-primary-foreground/70">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
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
          <p className="mt-5 text-[0.6875rem] tracking-wide text-primary-foreground/35">
            {trustLine}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
