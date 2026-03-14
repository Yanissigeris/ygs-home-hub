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
  backgroundImage?: string;
  agentImage?: string;
  agentName?: string;
}

const anim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const HeroSection = ({ overline, title, subtitle, primaryCta, secondaryCta, trustLine, compact, backgroundImage, agentImage, agentName }: HeroSectionProps) => (
  <section className="hero-gradient relative overflow-hidden">
    <div className={`section-container relative ${compact ? "py-12 sm:py-16 md:py-20" : "py-16 sm:py-20 md:py-28 lg:py-32"}`}>
      <div className={`grid items-center gap-8 lg:gap-12 ${(backgroundImage || agentImage) ? "lg:grid-cols-2" : ""}`}>
        {/* Text column */}
        <motion.div className={backgroundImage ? "" : "max-w-[40rem]"} {...anim}>
          {overline && (
            <p className="mb-4 text-[0.625rem] font-bold uppercase tracking-[0.22em] text-primary-foreground/30">
              {overline}
            </p>
          )}
          <h1 className="text-primary-foreground">{title}</h1>
          <p className="mt-5 max-w-[32rem] text-[1rem] leading-[1.7] text-primary-foreground/60">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Button size="xl" variant="hero" asChild>
                  <Link to={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button size="xl" variant="hero-outline" asChild>
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
          {trustLine && (
            <p className="mt-6 text-[0.6875rem] tracking-[0.02em] text-primary-foreground/25">
              {trustLine}
            </p>
          )}
        </motion.div>

        {/* Image column */}
        {backgroundImage && (
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={backgroundImage}
                alt=""
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        )}
      </div>
    </div>

    {/* Subtle radial accent */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(195_30%_28%_/_0.12)_0%,_transparent_50%)] pointer-events-none" />
  </section>
);

export default HeroSection;
