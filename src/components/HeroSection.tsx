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
  heroBgImage?: string;
}

const anim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const HeroSection = ({ overline, title, subtitle, primaryCta, secondaryCta, trustLine, compact, backgroundImage, agentImage, agentName, heroBgImage }: HeroSectionProps) => (
  <section className="hero-gradient relative overflow-hidden">

    {/* ── Luxury background image ── */}
    {heroBgImage && (
      <>
        <div className="absolute inset-0">
          <img
            src={heroBgImage}
            alt=""
            className="h-full w-full object-cover object-center"
            style={{ filter: 'blur(0.5px) brightness(0.38) saturate(0.5)' }}
            loading="eager"
          />
        </div>
        {/* Subtle brand tint — restrained, not heavy */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200_42%_16%_/_0.55)] via-[hsl(200_42%_16%_/_0.3)] to-[hsl(200_42%_16%_/_0.15)]" />
        {/* Left readability scrim — smooth cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200_42%_14%_/_0.82)] via-[hsl(200_42%_16%_/_0.45)] via-[55%] to-transparent" />
        {/* Bottom seamless transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[hsl(200_42%_16%)] via-[hsl(200_42%_16%_/_0.6)] to-transparent" />
        {/* Top vignette for header blend */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[hsl(200_42%_16%_/_0.3)] to-transparent" />
      </>
    )}

    <div className={`section-container relative ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[5.5rem] pb-0 sm:pt-[6rem] md:pt-[6.5rem]" : "pt-[4.5rem] pb-[5.5rem] sm:pt-[5rem] sm:pb-[5.5rem] md:pt-[5.5rem] md:pb-[6.5rem]"}`}>
      <div className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[54%_46%] lg:grid-cols-[52%_48%]" : (backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : "")}`}>
        {/* Text column */}
        <motion.div className={`${(backgroundImage || agentImage) ? "" : "max-w-[40rem]"} ${agentImage ? "pb-[3.5rem] md:pb-[6rem] lg:pb-[7rem]" : ""} relative z-10`} {...anim}>
          {overline && (
            <p className="mb-7 flex items-center gap-3.5 text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-primary-foreground/25" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.18em' }}>
              {overline.includes("·") || overline.includes("•") ? (
                overline.split(/[·•]/).map((part, i) => (
                  <span key={i} className="flex items-center gap-3.5">
                    {i > 0 && <span className="inline-block h-[2.5px] w-[2.5px] rounded-full bg-accent/30" />}
                    <span>{part.trim()}</span>
                  </span>
                ))
              ) : (
                <span>{overline}</span>
              )}
            </p>
          )}
          <h1 className="text-primary-foreground leading-[1.08] tracking-[-0.01em]">{title}</h1>
          <p className="mt-7 max-w-[28rem] text-[1.0625rem] leading-[1.8] text-primary-foreground/40">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-11 flex flex-wrap items-center gap-5">
              {primaryCta && (
                <Button size="xl" variant="accent" className="shadow-[0_4px_24px_-6px_hsl(36_45%_42%_/_0.35)] font-semibold tracking-[0.01em]" asChild>
                  <Link to={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button size="xl" variant="hero-outline" className="border-primary-foreground/[0.12] text-primary-foreground/45 hover:text-primary-foreground/70 hover:border-primary-foreground/20 hover:bg-primary-foreground/[0.03] tracking-[0.01em]" asChild>
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
          {trustLine && (
            <p className="mt-9 text-[0.8125rem] tracking-[0.02em] text-primary-foreground/18 font-medium">
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

        {/* ── Agent portrait — naturally integrated ── */}
        {agentImage && (
          <motion.div
            className="hidden md:flex justify-end items-end self-end relative"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {/* Very subtle warm ambient light — restrained */}
            <div className="absolute bottom-[12%] right-[18%] w-[55%] h-[45%] bg-[radial-gradient(ellipse,_hsl(36_30%_50%_/_0.06)_0%,_transparent_65%)] pointer-events-none blur-3xl" />
            
            {/* Portrait with natural edge masking + subtle depth shadow */}
            <div className="relative" style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%), linear-gradient(to left, transparent 0%, black 10%), linear-gradient(to bottom, transparent 0%, black 12%), linear-gradient(to top, transparent 0%, black 5%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%), linear-gradient(to left, transparent 0%, black 10%), linear-gradient(to bottom, transparent 0%, black 12%), linear-gradient(to top, transparent 0%, black 5%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
              filter: 'drop-shadow(0 6px 20px hsl(200 42% 10% / 0.3))',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-full max-w-[400px] lg:max-w-[460px] xl:max-w-[520px] 2xl:max-w-[560px] object-contain object-bottom"
                loading="eager"
              />
            </div>
          </motion.div>
        )}

        {/* Mobile portrait */}
        {agentImage && (
          <motion.div
            className="flex md:hidden justify-center items-end overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%), linear-gradient(to left, transparent 0%, black 10%), linear-gradient(to right, transparent 0%, black 10%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%), linear-gradient(to left, transparent 0%, black 10%), linear-gradient(to right, transparent 0%, black 10%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
              filter: 'drop-shadow(0 4px 16px hsl(200 42% 10% / 0.25))',
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
