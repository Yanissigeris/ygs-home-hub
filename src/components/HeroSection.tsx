import * as React from "react";
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

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      overline,
      title,
      subtitle,
      primaryCta,
      secondaryCta,
      trustLine,
      compact,
      backgroundImage,
      agentImage,
      agentName,
      heroBgImage,
    },
    ref,
  ) => (
    <section
      ref={ref}
      className="relative min-h-[400px] overflow-x-clip overflow-y-hidden md:min-h-[440px] lg:min-h-[480px]"
      style={{ background: "#10242D" }}
    >
      {heroBgImage && (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={heroBgImage}
              alt=""
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.90) saturate(0.80) contrast(0.95)" }}
              loading="eager"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: "#17242B",
              opacity: 0.08,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #10242D 0%, hsl(200 42% 14% / 0.85) 18%, hsl(200 42% 14% / 0.35) 45%, hsl(200 42% 14% / 0.20) 70%, hsl(200 42% 14% / 0.15) 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background: "linear-gradient(to top, #10242D 0%, hsl(200 42% 14% / 0.5) 50%, transparent 100%)",
            }}
          />
        </>
      )}

      <div
        className={`section-container relative overflow-x-clip ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[3rem] pb-0 sm:pt-[3.5rem] md:pt-[4rem] lg:pt-[4.5rem]" : "pt-[3rem] pb-[3.5rem] sm:pt-[3.5rem] sm:pb-[4rem] md:pt-[4rem] md:pb-[4.5rem]"}`}
      >
        <div
          className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[56%_44%] lg:grid-cols-[54%_46%]" : backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : ""}`}
        >
          <motion.div
            className={`${backgroundImage || agentImage ? "min-w-0" : "max-w-[40rem]"} ${agentImage ? "pb-[2rem] md:pb-[3.5rem] lg:pb-[4rem]" : ""} relative z-10 min-w-0`}
            {...fade}
          >
            {overline && (
              <div className="mb-6 flex items-center gap-4 overflow-hidden sm:gap-6">
                <span className="h-px w-8 shrink-0" style={{ background: "hsl(36 38% 46% / 0.35)" }} />
                <p
                  className="min-w-0 text-[0.625rem] font-medium uppercase tracking-[0.18em] sm:text-[0.6875rem] sm:tracking-[0.22em]"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#A7B2BA" }}
                >
                  {overline.replace(/[·•]/g, "  ·  ")}
                </p>
              </div>
            )}

            <h1 style={{ color: "#F5F1E8" }} className="max-w-[11ch] leading-[1.05] tracking-[-0.02em] min-[391px]:max-w-[12ch]">
              {title}
            </h1>

            <p className="mt-4 max-w-[26rem] text-[1rem] leading-[1.75] font-light max-[390px]:max-w-[22rem] max-[390px]:pr-3" style={{ color: "#A7B2BA" }}>
              {subtitle}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-7 flex w-full flex-col items-stretch gap-3 min-[391px]:flex-row min-[391px]:items-center max-[390px]:max-w-[18rem]">
                {primaryCta && (
                  <Button size="xl" variant="accent" className="w-full min-[391px]:w-auto min-[391px]:shrink-0 tracking-[0.02em]" asChild>
                    <Link to={primaryCta.href}>{primaryCta.label}</Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button size="xl" variant="hero-outline" className="w-full min-[391px]:w-auto min-[391px]:shrink-0 tracking-[0.02em] whitespace-normal text-center leading-snug" asChild>
                    <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            )}

            {trustLine && (
              <p className="mt-8 max-w-[26rem] text-[0.75rem] font-normal tracking-[0.03em] max-[390px]:pr-2" style={{ color: "hsl(200 15% 55% / 0.5)" }}>
                {trustLine}
              </p>
            )}
          </motion.div>

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

          {agentImage && (
            <motion.div
              className="relative hidden self-end md:flex md:items-end md:justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <div
                className="relative"
                style={{
                  maskImage:
                    "linear-gradient(to top, transparent 0%, black 10%, black 82%, transparent 100%), linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 10%, black 82%, transparent 100%), linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "destination-in",
                }}
              >
                <img
                  src={agentImage}
                  alt={agentName || ""}
                  className="relative z-0 h-auto w-[320px] object-contain object-bottom lg:w-[420px] xl:w-[460px]"
                  style={{
                    filter: "drop-shadow(0 10px 40px rgba(16,36,45,0.5)) brightness(0.90) saturate(0.65)",
                    mixBlendMode: "luminosity",
                  }}
                  loading="eager"
                />
                {/* Color restoration layer */}
                <img
                  src={agentImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 z-[1] h-auto w-[320px] object-contain object-bottom lg:w-[420px] xl:w-[460px]"
                  style={{
                    filter: "drop-shadow(0 10px 40px rgba(16,36,45,0.5)) brightness(0.88) saturate(0.60)",
                    opacity: 0.7,
                  }}
                  loading="eager"
                />
              </div>
            </motion.div>
          )}

          {agentImage && (
            <motion.div
              className="flex justify-center items-end overflow-hidden md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div
                className="relative"
                style={{
                  maskImage:
                    "linear-gradient(to top, transparent 0%, black 6%, black 90%, transparent 100%), linear-gradient(to right, transparent 2%, black 10%, black 90%, transparent 98%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 6%, black 90%, transparent 100%), linear-gradient(to right, transparent 2%, black 10%, black 90%, transparent 98%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "destination-in",
                }}
              >
                <img
                  src={agentImage}
                  alt={agentName || ""}
                  className="relative z-0 w-[260px] object-contain object-bottom sm:w-[300px]"
                  style={{
                    filter: "drop-shadow(0 8px 30px rgba(16,36,45,0.4)) brightness(0.93) saturate(0.82)",
                  }}
                  loading="eager"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  ),
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
