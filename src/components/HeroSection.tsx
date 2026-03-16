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

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.1, ease: "easeOut" as const },
};

const HeroSection = ({ overline, title, subtitle, primaryCta, secondaryCta, trustLine, compact, backgroundImage, agentImage, agentName, heroBgImage }: HeroSectionProps) => (
  <section className="hero-gradient relative overflow-hidden min-h-[540px] md:min-h-[600px] lg:min-h-[640px]">

    {/* ── Background photograph ── */}
    {heroBgImage && (
      <>
        <div className="absolute inset-0">
          <img
            src={heroBgImage}
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: 'brightness(0.42) saturate(0.5)' }}
            loading="eager"
          />
        </div>
        {/* Clean scrim — left for text, transparent right for portrait */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, hsl(0 0% 10% / 0.92) 0%, hsl(0 0% 12% / 0.7) 35%, hsl(0 0% 14% / 0.25) 58%, transparent 72%)',
        }} />
        {/* Bottom anchor */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[hsl(0_0%_12%)] to-transparent" />
      </>
    )}

    <div className={`section-container relative ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[5rem] pb-0 sm:pt-[5.5rem] md:pt-[6rem] lg:pt-[6.5rem]" : "pt-[4.5rem] pb-[5.5rem] sm:pt-[5rem] sm:pb-[5.5rem] md:pt-[5.5rem] md:pb-[6.5rem]"}`}>
      <div className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[56%_44%] lg:grid-cols-[54%_46%]" : (backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : "")}`}>

        {/* ── Text column ── */}
        <motion.div className={`${(backgroundImage || agentImage) ? "" : "max-w-[40rem]"} ${agentImage ? "pb-[3rem] md:pb-[5.5rem] lg:pb-[6.5rem]" : ""} relative z-10`} {...fade}>

          {overline && (
            <div className="mb-9 flex items-center gap-6">
              <span className="h-px w-8 bg-accent/40" />
              <p className="text-[0.6875rem] font-medium tracking-[0.22em] uppercase text-primary-foreground/45" style={{ fontFamily: "'Inter', sans-serif" }}>
                {overline.replace(/[·•]/g, '  ·  ')}
              </p>
            </div>
          )}

          <h1 className="text-primary-foreground leading-[1.05] tracking-[-0.02em]">{title}</h1>

          <p className="mt-7 max-w-[26rem] text-[1rem] leading-[1.75] text-primary-foreground/65 font-light">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex items-center gap-3">
              {primaryCta && (
                <Button size="xl" variant="accent" className="tracking-[0.02em]" asChild>
                  <Link to={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button size="xl" variant="hero-outline" className="tracking-[0.02em]" asChild>
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}

          {trustLine && (
            <p className="mt-10 text-[0.75rem] tracking-[0.03em] text-primary-foreground/35 font-normal">
              {trustLine}
            </p>
          )}
        </motion.div>

        {/* Background image column (non-portrait variant) */}
        {backgroundImage && !agentImage && (
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl">
              <img src={backgroundImage} alt="" className="aspect-[4/3] w-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        )}

        {/* ── Portrait — desktop/tablet ── */}
        {agentImage && (
          <motion.div
            className="hidden md:flex justify-end items-end self-end relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative" style={{
              maskImage: 'linear-gradient(to right, transparent 2%, black 20%), linear-gradient(to left, transparent 0%, black 15%), linear-gradient(to bottom, transparent 0%, black 8%), linear-gradient(to top, transparent 0%, black 8%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 2%, black 20%), linear-gradient(to left, transparent 0%, black 15%), linear-gradient(to bottom, transparent 0%, black 8%), linear-gradient(to top, transparent 0%, black 8%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-full max-w-[380px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[540px] object-contain object-bottom"
                loading="eager"
              />
            </div>
          </motion.div>
        )}

        {/* Portrait — mobile */}
        {agentImage && (
          <motion.div
            className="flex md:hidden justify-center items-end overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%), linear-gradient(to left, transparent 0%, black 6%), linear-gradient(to right, transparent 0%, black 6%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%), linear-gradient(to left, transparent 0%, black 6%), linear-gradient(to right, transparent 0%, black 6%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-[270px] sm:w-[310px] object-contain object-bottom"
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
