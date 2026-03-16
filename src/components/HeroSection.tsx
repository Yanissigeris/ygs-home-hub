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
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
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
            style={{ filter: 'brightness(0.44) saturate(0.5)' }}
            loading="eager"
          />
        </div>
        {/* Minimal brand tint — just enough for cohesion */}
        <div className="absolute inset-0 bg-[hsl(200_42%_16%_/_0.25)]" />
        {/* Left readability scrim — three-stop cinematic fade */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, hsl(200 42% 14% / 0.88) 0%, hsl(200 42% 16% / 0.55) 40%, hsl(200 42% 16% / 0.15) 65%, transparent 85%)',
        }} />
        {/* Bottom seamless transition */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[hsl(200_42%_16%)] via-[hsl(200_42%_16%_/_0.5)] to-transparent" />
      </>
    )}

    <div className={`section-container relative ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[5.5rem] pb-0 sm:pt-[6rem] md:pt-[6.5rem]" : "pt-[4.5rem] pb-[5.5rem] sm:pt-[5rem] sm:pb-[5.5rem] md:pt-[5.5rem] md:pb-[6.5rem]"}`}>
      <div className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[54%_46%] lg:grid-cols-[52%_48%]" : (backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : "")}`}>
        {/* Text column */}
        <motion.div className={`${(backgroundImage || agentImage) ? "" : "max-w-[40rem]"} ${agentImage ? "pb-[3.5rem] md:pb-[6rem] lg:pb-[7rem]" : ""} relative z-10`} {...anim}>
          {overline && (
            <p className="mb-8 flex items-center gap-4 text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-primary-foreground/22" style={{ fontFamily: "'Inter', sans-serif" }}>
              {overline.includes("·") || overline.includes("•") ? (
                overline.split(/[·•]/).map((part, i) => (
                  <span key={i} className="flex items-center gap-4">
                    {i > 0 && <span className="inline-block h-[2px] w-[2px] rounded-full bg-primary-foreground/15" />}
                    <span>{part.trim()}</span>
                  </span>
                ))
              ) : (
                <span>{overline}</span>
              )}
            </p>
          )}
          <h1 className="text-primary-foreground leading-[1.06] tracking-[-0.015em]">{title}</h1>
          <p className="mt-8 max-w-[27rem] text-[1.0625rem] leading-[1.8] text-primary-foreground/38">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-12 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button size="xl" variant="accent" className="shadow-[0_2px_16px_-4px_hsl(36_40%_40%_/_0.3)] font-semibold tracking-[0.015em]" asChild>
                  <Link to={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button size="xl" variant="hero-outline" className="border-primary-foreground/[0.1] text-primary-foreground/40 hover:text-primary-foreground/60 hover:border-primary-foreground/[0.16] hover:bg-primary-foreground/[0.03] tracking-[0.015em]" asChild>
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
          {trustLine && (
            <p className="mt-10 text-[0.8125rem] tracking-[0.02em] text-primary-foreground/16 font-medium">
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

        {/* ── Agent portrait — naturally embedded ── */}
        {agentImage && (
          <motion.div
            className="hidden md:flex justify-end items-end self-end relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Portrait with natural edge masking — no glow, just soft fade */}
            <div className="relative" style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 22%), linear-gradient(to left, transparent 0%, black 12%), linear-gradient(to bottom, transparent 0%, black 10%), linear-gradient(to top, transparent 0%, black 6%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 22%), linear-gradient(to left, transparent 0%, black 12%), linear-gradient(to bottom, transparent 0%, black 10%), linear-gradient(to top, transparent 0%, black 6%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
              filter: 'drop-shadow(0 4px 12px hsl(200 30% 12% / 0.2))',
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%), linear-gradient(to left, transparent 0%, black 8%), linear-gradient(to right, transparent 0%, black 8%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%), linear-gradient(to left, transparent 0%, black 8%), linear-gradient(to right, transparent 0%, black 8%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
              filter: 'drop-shadow(0 3px 10px hsl(200 30% 12% / 0.15))',
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
