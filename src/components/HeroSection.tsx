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
    {/* ── Atmospheric depth layers ── */}
    {/* Primary atmosphere — broad warm petrol wash */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_50%,_hsl(200_40%_18%_/_0.5)_0%,_transparent_65%)] pointer-events-none" />
    {/* Text-side warmth — subtle ivory/gold tonal lift */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_18%_45%,_hsl(36_25%_30%_/_0.06)_0%,_transparent_55%)] pointer-events-none" />
    {/* Portrait-side depth — darker anchor behind subject */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_78%_55%,_hsl(200_42%_12%_/_0.45)_0%,_transparent_60%)] pointer-events-none" />
    {/* Center bridge — connects text and portrait zones */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_55%_50%,_hsl(200_38%_17%_/_0.25)_0%,_transparent_55%)] pointer-events-none" />
    {/* Top vignette — softens header→hero seam */}
    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[hsl(200_42%_14%_/_0.5)] to-transparent pointer-events-none" />
    {/* Bottom edge vignette */}
    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[hsl(200_42%_12%_/_0.3)] to-transparent pointer-events-none" />
    {/* Very subtle warm accent at bottom-left */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_8%_85%,_hsl(36_30%_40%_/_0.04)_0%,_transparent_50%)] pointer-events-none" />

    <div className={`section-container relative ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[5.5rem] pb-0 sm:pt-[6rem] md:pt-[6.5rem]" : "pt-[4.5rem] pb-[5.5rem] sm:pt-[5rem] sm:pb-[5.5rem] md:pt-[5.5rem] md:pb-[6.5rem]"}`}>
      <div className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[54%_46%] lg:grid-cols-[52%_48%]" : (backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : "")}`}>
        {/* Text column */}
        <motion.div className={`${(backgroundImage || agentImage) ? "" : "max-w-[40rem]"} ${agentImage ? "pb-[3.5rem] md:pb-[5rem] lg:pb-[6rem]" : ""} relative z-10`} {...anim}>
          {overline && (
            <p className="mb-7 flex items-center gap-3 text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-primary-foreground/25" style={{ fontFamily: "'Inter', sans-serif" }}>
              {overline.includes("·") || overline.includes("•") ? (
                overline.split(/[·•]/).map((part, i) => (
                  <span key={i} className="flex items-center gap-3">
                    {i > 0 && <span className="inline-block h-[2.5px] w-[2.5px] rounded-full bg-accent/30" />}
                    <span>{part.trim()}</span>
                  </span>
                ))
              ) : (
                <span>{overline}</span>
              )}
            </p>
          )}
          <h1 className="text-primary-foreground">{title}</h1>
          <p className="mt-5 max-w-[28rem] text-[1rem] leading-[1.8] text-primary-foreground/40">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              {primaryCta && (
                <Button size="xl" variant="accent" className="shadow-[0_6px_24px_-6px_hsl(36_35%_40%_/_0.35)] font-semibold" asChild>
                  <Link to={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button size="xl" variant="hero-outline" className="border-primary-foreground/[0.08] text-primary-foreground/40 hover:text-primary-foreground/70 hover:border-primary-foreground/[0.16] hover:bg-primary-foreground/[0.03] backdrop-blur-sm" asChild>
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
          {trustLine && (
            <p className="mt-8 text-[0.8125rem] tracking-[0.02em] text-primary-foreground/18 font-medium">
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

        {/* Agent portrait — embedded into hero atmosphere */}
        {agentImage && (
          <motion.div
            className="hidden md:flex justify-end items-end self-end relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Deep ambient glow behind the subject */}
            <div className="absolute bottom-[10%] right-[15%] w-[70%] h-[60%] bg-[radial-gradient(ellipse,_hsl(200_38%_20%_/_0.5)_0%,_transparent_65%)] pointer-events-none blur-3xl" />
            {/* Warm highlight glow — subtle face-level warmth */}
            <div className="absolute top-[20%] right-[25%] w-[40%] h-[30%] bg-[radial-gradient(ellipse,_hsl(36_20%_40%_/_0.04)_0%,_transparent_60%)] pointer-events-none blur-2xl" />
            
            {/* Portrait with deep edge dissolution */}
            <div className="relative" style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to left, transparent 0%, black 5%), linear-gradient(to bottom, transparent 0%, black 18%), linear-gradient(to top, transparent 0%, black 3%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%), linear-gradient(to left, transparent 0%, black 5%), linear-gradient(to bottom, transparent 0%, black 18%), linear-gradient(to top, transparent 0%, black 3%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-full max-w-[440px] lg:max-w-[500px] xl:max-w-[560px] 2xl:max-w-[600px] object-contain object-bottom"
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
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%), linear-gradient(to left, transparent 0%, black 8%), linear-gradient(to right, transparent 0%, black 8%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%), linear-gradient(to left, transparent 0%, black 8%), linear-gradient(to right, transparent 0%, black 8%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-[280px] sm:w-[320px] object-contain object-bottom"
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
