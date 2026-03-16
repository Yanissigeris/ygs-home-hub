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
  <section className="relative overflow-hidden min-h-[540px] md:min-h-[600px] lg:min-h-[640px]" style={{ background: 'hsl(0 0% 7%)' }}>

    {/* ── Background photograph ── */}
    {heroBgImage && (
      <>
        {/* Photo — darkened, desaturated, tinted */}
        <div className="absolute inset-0">
          <img
            src={heroBgImage}
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: 'brightness(0.34) saturate(0.16) contrast(0.8) grayscale(0.18)' }}
            loading="eager"
          />
        </div>
        {/* Neutral dark base overlay */}
        <div className="absolute inset-0" style={{
          background: 'hsl(0 0% 8%)',
          opacity: 0.76,
        }} />
        {/* Text-side scrim only — ends before portrait */}
        <div className="absolute inset-y-0 left-0 right-[46%]" style={{
          background: 'linear-gradient(to right, hsl(0 0% 8% / 0.96) 0%, hsl(0 0% 8% / 0.88) 20%, hsl(0 0% 7% / 0.58) 54%, transparent 100%)',
        }} />
        {/* Portrait-side neutral darkening — no glow */}
        <div className="absolute inset-y-0 left-[54%] right-0" style={{
          background: 'linear-gradient(to right, hsl(0 0% 6% / 0.12) 0%, hsl(0 0% 5% / 0.24) 34%, hsl(0 0% 4% / 0.38) 100%)',
        }} />
        {/* Bottom anchor — neutral */}
        <div className="absolute inset-x-0 bottom-0 h-32" style={{
          background: 'linear-gradient(to top, hsl(0 0% 5%) 0%, hsl(0 0% 5% / 0.45) 52%, transparent 100%)',
        }} />
      </>
    )}

    <div className={`section-container relative ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[5rem] pb-0 sm:pt-[5.5rem] md:pt-[6rem] lg:pt-[6.5rem]" : "pt-[4.5rem] pb-[5.5rem] sm:pt-[5rem] sm:pb-[5.5rem] md:pt-[5.5rem] md:pb-[6.5rem]"}`}>
      <div className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[56%_44%] lg:grid-cols-[54%_46%]" : (backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : "")}`}>

        {/* ── Text column ── */}
        <motion.div className={`${(backgroundImage || agentImage) ? "" : "max-w-[40rem]"} ${agentImage ? "pb-[3rem] md:pb-[5.5rem] lg:pb-[6.5rem]" : ""} relative z-10`} {...fade}>

          {overline && (
            <div className="mb-9 flex items-center gap-6">
              <span className="h-px w-8" style={{ background: 'hsl(36 38% 46% / 0.35)' }} />
              <p className="text-[0.6875rem] font-medium tracking-[0.22em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: '#A7B2BA' }}>
                {overline.replace(/[·•]/g, '  ·  ')}
              </p>
            </div>
          )}

          <h1 style={{ color: '#F5F1E8' }} className="leading-[1.05] tracking-[-0.02em]">{title}</h1>

          <p className="mt-7 max-w-[26rem] text-[1rem] leading-[1.75] font-light" style={{ color: '#A7B2BA' }}>
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
            <p className="mt-10 text-[0.75rem] tracking-[0.03em] font-normal" style={{ color: 'hsl(200 15% 55% / 0.5)' }}>
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
            {/* No glow behind portrait */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'transparent' }} />
            <div className="relative" style={{
              filter: 'brightness(0.90) saturate(0.82) contrast(0.93)',
              maskImage: `
                linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 4%, rgba(0,0,0,0.85) 10%, black 18%),
                linear-gradient(to left, transparent 0%, rgba(0,0,0,0.4) 6%, rgba(0,0,0,0.8) 14%, black 24%),
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 4%, rgba(0,0,0,0.8) 8%, black 14%),
                linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 3%, rgba(0,0,0,0.7) 7%, black 14%)
              `,
              WebkitMaskImage: `
                linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 4%, rgba(0,0,0,0.85) 10%, black 18%),
                linear-gradient(to left, transparent 0%, rgba(0,0,0,0.4) 6%, rgba(0,0,0,0.8) 14%, black 24%),
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 4%, rgba(0,0,0,0.8) 8%, black 14%),
                linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 3%, rgba(0,0,0,0.7) 7%, black 14%)
              `,
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}>
              {/* Neutral contact shadow — no blue tint */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: `
                  linear-gradient(to top, hsl(0 0% 5% / 0.45) 0%, hsl(0 0% 5% / 0.15) 18%, transparent 32%),
                  linear-gradient(to right, hsl(0 0% 7% / 0.25) 0%, transparent 22%),
                  linear-gradient(to left, hsl(0 0% 7% / 0.18) 0%, transparent 18%)
                `,
                zIndex: 1,
              }} />
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-full max-w-[380px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[540px] object-contain object-bottom relative z-0"
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
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[400px] pointer-events-none" style={{ background: 'transparent' }} />
            <div className="relative" style={{
              filter: 'brightness(0.90) saturate(0.82) contrast(0.93)',
              maskImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 5%, black 12%),
                linear-gradient(to left, transparent 0%, rgba(0,0,0,0.5) 5%, black 12%),
                linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 5%, black 12%)
              `,
              WebkitMaskImage: `
                linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 5%, black 12%),
                linear-gradient(to left, transparent 0%, rgba(0,0,0,0.5) 5%, black 12%),
                linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 5%, black 12%)
              `,
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}>
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(to top, hsl(0 0% 5% / 0.40) 0%, transparent 28%)',
                zIndex: 1,
              }} />
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-[270px] sm:w-[310px] object-contain object-bottom relative z-0"
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
