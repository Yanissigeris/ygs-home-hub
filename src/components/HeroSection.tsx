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
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const HeroSection = ({ overline, title, subtitle, primaryCta, secondaryCta, trustLine, compact, backgroundImage, agentImage, agentName }: HeroSectionProps) => (
  <section className="hero-gradient relative overflow-hidden">
    <div className={`section-container relative ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[4.5rem] pb-0 sm:pt-[5rem] md:pt-[5.5rem]" : "pt-[4.5rem] pb-[5.5rem] sm:pt-[5rem] sm:pb-[5.5rem] md:pt-[5.5rem] md:pb-[6.5rem]"}`}>
      <div className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[52%_48%] lg:grid-cols-[50%_50%]" : (backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : "")}`}>
        {/* Text column */}
        <motion.div className={`${(backgroundImage || agentImage) ? "" : "max-w-[40rem]"} ${agentImage ? "pb-[3rem] md:pb-[5rem] lg:pb-[6rem]" : ""}`} {...anim}>
          {overline && (
            <p className="mb-5 flex items-center gap-2.5 text-[0.8125rem] font-medium tracking-[0.08em] uppercase text-primary-foreground/40">
              {overline.includes("·") || overline.includes("•") ? (
                overline.split(/[·•]/).map((part, i) => (
                  <span key={i} className="flex items-center gap-2.5">
                    {i > 0 && <span className="inline-block h-[3px] w-[3px] rounded-full bg-accent/50" />}
                    <span>{part.trim()}</span>
                  </span>
                ))
              ) : (
                <span>{overline}</span>
              )}
            </p>
          )}
          <h1 className="text-primary-foreground">{title}</h1>
          <p className="mt-5 max-w-[32rem] text-[1.0625rem] leading-[1.7] text-primary-foreground/50">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button size="xl" variant="accent" className="shadow-md font-semibold" asChild>
                  <Link to={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button size="xl" variant="hero-outline" className="opacity-60 hover:opacity-100" asChild>
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
          {trustLine && (
            <p className="mt-7 text-[0.8125rem] tracking-[0.02em] text-primary-foreground/25 font-medium">
              {trustLine}
            </p>
          )}
        </motion.div>

        {/* Background image column */}
        {backgroundImage && !agentImage && (
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl">
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

        {/* Agent portrait column — large cutout anchored bottom */}
        {agentImage && (
          <motion.div
            className="hidden md:flex justify-end items-end self-end overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <img
              src={agentImage}
              alt={agentName || ""}
              className="relative w-full max-w-[380px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[540px] object-contain object-bottom translate-y-[2px]"
              loading="eager"
            />
          </motion.div>
        )}

        {/* Mobile portrait — stacked below text */}
        {agentImage && (
          <motion.div
            className="flex md:hidden justify-center items-end overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <img
              src={agentImage}
              alt={agentName || ""}
              className="w-[300px] sm:w-[340px] object-contain object-bottom translate-y-[2px]"
              loading="eager"
            />
          </motion.div>
        )}
      </div>
    </div>

    {/* Subtle radial accents */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(195_30%_28%_/_0.10)_0%,_transparent_50%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(36_60%_52%_/_0.04)_0%,_transparent_40%)] pointer-events-none" />
  </section>
);

export default HeroSection;
