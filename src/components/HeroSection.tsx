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

const anim = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const HeroSection = ({ overline, title, subtitle, primaryCta, secondaryCta, trustLine, compact }: HeroSectionProps) => (
  <section className="hero-gradient relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(195_30%_28%_/_0.1)_0%,_transparent_50%)]" />
    <div className={`section-container relative ${compact ? "py-10 sm:py-14 md:py-16" : "py-14 sm:py-20 md:py-24 lg:py-28"}`}>
      <motion.div className="max-w-[36rem]" {...anim}>
        {overline && (
          <p className="mb-3 text-[0.5625rem] font-bold uppercase tracking-[0.22em] text-primary-foreground/35">
            {overline}
          </p>
        )}
        <h1 className="text-primary-foreground">{title}</h1>
        <p className="mt-4 max-w-[30rem] text-[0.9375rem] leading-[1.65] text-primary-foreground/65">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-7 flex flex-wrap gap-3">
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
          <p className="mt-5 text-[0.625rem] tracking-[0.04em] text-primary-foreground/30">
            {trustLine}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
