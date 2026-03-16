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
  <section className="relative overflow-hidden min-h-[440px] md:min-h-[480px] lg:min-h-[520px]" style={{ background: '#10242D' }}>

    {/* ── Background photograph ── */}
    {heroBgImage && (
      <>
        {/* Photo — brightened for visibility */}
        <div className="absolute inset-0">
          <img
            src={heroBgImage}
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: 'brightness(0.90) saturate(0.80) contrast(0.95)' }}
            loading="eager"
          />
        </div>
        {/* Very subtle overlay for text readability */}
        <div className="absolute inset-0" style={{
          background: '#17242B',
          opacity: 0.08,
        }} />
        {/* Gradient scrim — lighter, preserves skyline visibility */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, #10242D 0%, hsl(200 42% 14% / 0.85) 18%, hsl(200 42% 14% / 0.35) 45%, hsl(200 42% 14% / 0.20) 70%, hsl(200 42% 14% / 0.15) 100%)',
        }} />
        {/* Bottom anchor — full width */}
        <div className="absolute inset-x-0 bottom-0 h-32" style={{
          background: 'linear-gradient(to top, #10242D 0%, hsl(200 42% 14% / 0.5) 50%, transparent 100%)',
        }} />
      </>
    )}

    <div className={`section-container relative ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[5rem] pb-0 sm:pt-[5.5rem] md:pt-[6rem] lg:pt-[6.5rem]" : "pt-[4.5rem] pb-[5.5rem] sm:pt-[5rem] sm:pb-[5.5rem] md:pt-[5.5rem] md:pb-[6.5rem]"}`}>
      <div className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[56%_44%] lg:grid-cols-[54%_46%]" : (backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : "")}`}>

        {/* ── Text column ── */}
        <motion.div className={`${(backgroundImage || agentImage) ? "" : "max-w-[40rem]"} ${agentImage ? "pb-[2.5rem] md:pb-[4rem] lg:pb-[5rem]" : ""} relative z-10`} {...fade}>

          {overline && (
            <div className="mb-6 flex items-center gap-6">
              <span className="h-px w-8" style={{ background: 'hsl(36 38% 46% / 0.35)' }} />
              <p className="text-[0.6875rem] font-medium tracking-[0.22em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: '#A7B2BA' }}>
                {overline.replace(/[·•]/g, '  ·  ')}
              </p>
            </div>
          )}

          <h1 style={{ color: '#F5F1E8' }} className="leading-[1.05] tracking-[-0.02em]">{title}</h1>

          <p className="mt-5 max-w-[26rem] text-[1rem] leading-[1.75] font-light" style={{ color: '#A7B2BA' }}>
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex items-center gap-3">
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
            <p className="mt-8 text-[0.75rem] tracking-[0.03em] font-normal" style={{ color: 'hsl(200 15% 55% / 0.5)' }}>
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
              maskImage: 'linear-gradient(to top, transparent 0%, black 4%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 4%, black 100%)',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-full max-w-[460px] lg:max-w-[520px] xl:max-w-[580px] 2xl:max-w-[620px] object-contain object-bottom relative z-0 drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
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
            <div className="relative" style={{
              maskImage: 'linear-gradient(to top, transparent 0%, black 4%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 4%, black 100%)',
            }}>
              <img
                src={agentImage}
                alt={agentName || ""}
                className="w-[320px] sm:w-[360px] object-contain object-bottom relative z-0 drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
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
