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
  heroBackgroundImage?: string;
}

const anim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const HeroSection = ({ overline, title, subtitle, primaryCta, secondaryCta, trustLine, compact, backgroundImage, agentImage, agentName }: HeroSectionProps) => (
  <section className="hero-gradient relative overflow-hidden">
    {/* Shared ambient lighting — unifies text + portrait */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_60%_45%,_hsl(200_38%_20%_/_0.4)_0%,_transparent_70%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_40%,_hsl(200_30%_22%_/_0.15)_0%,_transparent_60%)] pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_80%_35%,_hsl(200_35%_22%_/_0.2)_0%,_transparent_55%)] pointer-events-none" />
    {/* Warm accent wash */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(36_40%_50%_/_0.02)_0%,_transparent_40%)] pointer-events-none" />
    {/* Top edge softener — blends header into hero */}
    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-primary/30 to-transparent pointer-events-none" />

    <div className={`section-container relative ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[5rem] pb-0 sm:pt-[5.5rem] md:pt-[6rem]" : "pt-[4.5rem] pb-[5.5rem] sm:pt-[5rem] sm:pb-[5.5rem] md:pt-[5.5rem] md:pb-[6.5rem]"}`}>
      <div className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[52%_48%] lg:grid-cols-[50%_50%]" : (backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : "")}`}>
        {/* Text column */}
        <motion.div className={`${(backgroundImage || agentImage) ? "" : "max-w-[40rem]"} ${agentImage ? "pb-[3.5rem] md:pb-[5.5rem] lg:pb-[6.5rem]" : ""} relative z-10`} {...anim}>
          {overline && (
            <p className="mb-6 flex items-center gap-3 text-[0.75rem] font-medium tracking-[0.14em] uppercase text-primary-foreground/30" style={{ fontFamily: "'Inter', sans-serif" }}>
              {overline.includes("·") || overline.includes("•") ? (
                overline.split(/[·•]/).map((part, i) => (
                  <span key={i} className="flex items-center gap-3">
                    {i > 0 && <span className="inline-block h-[3px] w-[3px] rounded-full bg-accent/40" />}
                    <span>{part.trim()}</span>
                  </span>
                ))
              ) : (
                <span>{overline}</span>
              )}
            </p>
          )}
          <h1 className="text-primary-foreground">{title}</h1>
          <p className="mt-6 max-w-[30rem] text-[1.0625rem] leading-[1.75] text-primary-foreground/45">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button size="xl" variant="accent" className="shadow-[0_4px_20px_-4px_hsl(36_45%_48%_/_0.3)] font-semibold" asChild>
                  <Link to={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button size="xl" variant="hero-outline" className="border-primary-foreground/15 text-primary-foreground/50 hover:text-primary-foreground/80 hover:border-primary-foreground/25 hover:bg-primary-foreground/[0.04]" asChild>
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
          {trustLine && (
            <p className="mt-8 text-[0.8125rem] tracking-[0.02em] text-primary-foreground/20 font-medium">
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

        {/* Agent portrait — fully integrated into hero */}
        {agentImage && (
          <motion.div
            className="hidden md:flex justify-end items-end self-end relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Soft glow behind subject */}
            <div className="absolute bottom-[15%] right-[20%] w-[60%] h-[50%] bg-[radial-gradient(ellipse,_hsl(200_35%_22%_/_0.4)_0%,_transparent_70%)] pointer-events-none blur-2xl" />
            
            {/* Portrait with aggressive edge masking */}
            <div className="relative" style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to left, transparent 0%, black 8%), linear-gradient(to bottom, transparent 0%, black 15%), linear-gradient(to top, transparent 0%, black 4%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to left, transparent 0%, black 8%), linear-gradient(to bottom, transparent 0%, black 15%), linear-gradient(to top, transparent 0%, black 4%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[540px] 2xl:max-w-[580px] object-contain object-bottom"
                loading="eager"
              />
            </div>
          </motion.div>
        )}

        {/* Mobile portrait */}
        {agentImage && (
          <motion.div
            className="flex md:hidden justify-center items-end overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%), linear-gradient(to left, transparent 0%, black 10%), linear-gradient(to right, transparent 0%, black 10%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%), linear-gradient(to left, transparent 0%, black 10%), linear-gradient(to right, transparent 0%, black 10%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-[300px] sm:w-[340px] object-contain object-bottom"
                loading="eager"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

export default HeroSection;
