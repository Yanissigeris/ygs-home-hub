import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
  overline?: string;
  title: string;
  subtitle: string;
  primaryCta?: {label: string;href: string;};
  secondaryCta?: {label: string;href: string;};
  trustLine?: string;
  compact?: boolean;
  backgroundImage?: string;
  agentImage?: string;
  agentImageSm?: string;
  agentName?: string;
  heroBgImage?: string;
  heroVideo?: string;
  heroVideoPoster?: string;
}

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.1, ease: "easeOut" as const }
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
    agentImageSm,
    agentName,
    heroBgImage,
    heroVideo,
    heroVideoPoster
  },
  ref) =>
  {
    const sectionRef = React.useRef<HTMLElement>(null);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [videoReady, setVideoReady] = React.useState(false);
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);else
        if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      },
      [ref]
    );

    // Load video src immediately after first paint for fast playback
    React.useEffect(() => {
      if (!heroVideo) return;
      const el = videoRef.current;
      if (el && !el.src) {
        // Use rAF to avoid blocking first paint, then load immediately
        const raf = requestAnimationFrame(() => {
          el.src = heroVideo;
          el.load();
        });
        return () => cancelAnimationFrame(raf);
      }
    }, [heroVideo]);

    // Track when video starts playing
    React.useEffect(() => {
      const el = videoRef.current;
      if (!el) return;
      const onPlaying = () => setVideoReady(true);
      el.addEventListener("playing", onPlaying);
      return () => el.removeEventListener("playing", onPlaying);
    }, []);

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end start"]
    });

    // Background moves at 30% of scroll speed → subtle parallax
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
      <section
        ref={combinedRef}
        className="relative min-h-[400px] overflow-x-clip overflow-y-hidden md:min-h-[440px] lg:min-h-[480px]"
        style={{ background: "#10242D" }}>

      {/* ANIMATED SHIMMER — visible while video loads */}
      {heroVideo && (
        <div
          className="absolute inset-0 transition-opacity duration-[1.6s] ease-out"
          style={{ opacity: videoReady ? 0 : 1, pointerEvents: "none" }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 animate-[hero-shimmer_6s_ease-in-out_infinite]"
            style={{
              background:
                "radial-gradient(ellipse 120% 80% at 30% 60%, hsl(200 42% 20% / 0.5) 0%, transparent 60%), " +
                "radial-gradient(ellipse 100% 60% at 80% 30%, hsl(36 38% 46% / 0.08) 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "128px 128px",
            }}
          />
        </div>
      )}

      {/* VIDEO BACKGROUND LAYER */}
      {heroVideo &&
        <>
          <motion.div
            className="absolute inset-x-0 top-0 bottom-0 overflow-hidden"
            style={{
              y: bgY,
              backgroundImage: heroBgImage ? `url(${heroBgImage})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={heroVideoPoster || heroBgImage}
              preload="auto"
              width={1920}
              height={1080}
              // @ts-ignore — fetchPriority is valid HTML but React 18 types don't include it
              fetchPriority="high"
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.82) saturate(0.75) contrast(1.04)" }} />
            
          </motion.div>
          {/* Dark petrol / navy overlay — stronger left, smoother right */}
          <div
            className="absolute inset-0"
            style={{
              background:
              "linear-gradient(to right, hsl(200 42% 11% / 0.85) 0%, hsl(200 42% 13% / 0.65) 25%, hsl(200 42% 14% / 0.38) 50%, hsl(200 42% 14% / 0.22) 75%, hsl(200 42% 14% / 0.15) 100%)"
            }} />
          
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background: "linear-gradient(to top, #10242D 0%, hsl(200 42% 14% / 0.5) 50%, transparent 100%)"
            }} />
          
        </>
        }

      {/* STATIC IMAGE BACKGROUND LAYER (fallback when no video) */}
      {heroBgImage && !heroVideo &&
        <>
          <motion.div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden" style={{ y: bgY }}>
            <img
              src={heroBgImage}
              alt="" role="presentation"
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.88) saturate(0.85) contrast(0.95)" }}
               loading="eager"
               fetchPriority="high" />
            
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background: "#17242B",
              opacity: 0.08
            }} />
          
          {/* Overlay — stronger on mobile for text readability */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
              "linear-gradient(to bottom, hsl(200 42% 11% / 0.75) 0%, hsl(200 42% 13% / 0.55) 60%, hsl(200 42% 14% / 0.70) 100%)"
            }} />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
              "linear-gradient(to right, #10242D 0%, hsl(200 42% 14% / 0.85) 18%, hsl(200 42% 14% / 0.35) 45%, hsl(200 42% 14% / 0.20) 70%, hsl(200 42% 14% / 0.15) 100%)"
            }} />
          
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background: "linear-gradient(to top, #10242D 0%, hsl(200 42% 14% / 0.5) 50%, transparent 100%)"
            }} />
          
        </>
        }

      <div
          className={`section-container relative overflow-x-clip ${compact ? "py-14 sm:py-18 md:py-20" : agentImage ? "pt-[3rem] pb-0 sm:pt-[3.5rem] md:pt-[4rem] lg:pt-[4.5rem]" : "pt-[3rem] pb-[3.5rem] sm:pt-[3.5rem] sm:pb-[4rem] md:pt-[4rem] md:pb-[4.5rem]"}`}>
          
        <div
            className={`grid items-end ${agentImage ? "gap-0 md:grid-cols-[56%_44%] lg:grid-cols-[54%_46%]" : backgroundImage ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]" : ""}`}>
            
          {/* TEXT + CTA LAYER (z-20 to stay above everything) */}
          <motion.div
              className={`${backgroundImage || agentImage ? "min-w-0" : "max-w-[40rem]"} ${agentImage ? "pb-[2rem] md:pb-[3.5rem] lg:pb-[4rem]" : ""} relative z-20 min-w-0`}
              {...fade}>
              
            {overline &&
              <div className="mb-6 flex items-center gap-4 overflow-hidden sm:gap-6">
                <span className="h-px w-8 shrink-0" style={{ background: "hsl(36 38% 46% / 0.35)" }} />
                <p
                  className="min-w-0 text-[0.625rem] font-medium uppercase tracking-[0.18em] sm:text-[0.6875rem] sm:tracking-[0.22em]"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#A7B2BA" }}>
                  
                  {overline.replace(/[·•]/g, "  ·  ")}
                </p>
              </div>
              }

            <h1 style={{ color: "#F5F1E8" }} className="max-w-[11ch] leading-[1.05] tracking-[-0.02em] min-[391px]:max-w-[12ch]">
              {title}
            </h1>

            <p className="mt-4 max-w-[26rem] text-[1rem] leading-[1.75] font-light max-[390px]:max-w-[22rem] max-[390px]:pr-3" style={{ color: "#A7B2BA" }}>
              {subtitle}
            </p>

            {(primaryCta || secondaryCta) &&
              <div className="mt-7 flex w-full flex-col items-stretch gap-3 min-[391px]:flex-row min-[391px]:items-center max-[390px]:max-w-[18rem]">
                {primaryCta &&
                <Button size="xl" variant="accent" className="w-full min-[391px]:w-auto min-[391px]:shrink-0 tracking-[0.02em]" asChild>
                    <Link to={primaryCta.href}>{primaryCta.label}</Link>
                  </Button>
                }
                {secondaryCta &&
                <Button size="xl" variant="hero-outline" className="w-full min-[391px]:w-auto min-[391px]:shrink-0 tracking-[0.02em] whitespace-normal text-center leading-snug" asChild>
                    <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                }
              </div>
              }

            {trustLine &&
              <p className="mt-8 max-w-[26rem] text-[0.75rem] font-normal tracking-[0.03em] max-[390px]:pr-2" style={{ color: "hsl(200 15% 55% / 0.5)" }}>
                {trustLine}
              </p>
              }
          </motion.div>

          {backgroundImage && !agentImage &&
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}>
              
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl">
                <img src={backgroundImage} alt="" role="presentation" className="aspect-[4/3] w-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
            }

          {/* PORTRAIT LAYER — z-10 to stay above video/overlay, below text */}
          {agentImage &&
            <motion.div
              className="relative z-10 hidden self-end md:flex md:items-end md:justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}>
              
              <div
                className="relative"
                style={{
                  maskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)"
                }}>
                <img
                  src={agentImage}
                  alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
                  width={640}
                  height={960}
                  className="relative z-0 w-[340px] aspect-[640/960] object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] lg:w-[400px] xl:w-[440px]"
                  loading="eager"
                  fetchPriority="high" />

              </div>
            </motion.div>
            }

          {/* PORTRAIT — MOBILE */}
          {agentImage &&
            <motion.div
              className="relative z-10 flex justify-center items-end overflow-hidden md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}>
              
              <div
                className="relative"
                style={{
                  maskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)"
                }}>
                
                <img
                  src={agentImageSm || agentImage}
                  srcSet={agentImageSm ? `${agentImageSm} 320w, ${agentImage} 640w` : undefined}
                  sizes="260px"
                  alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
                  width={320}
                  height={480}
                  className="relative z-0 w-[260px] aspect-[640/960] object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] sm:w-[300px]"
                  loading="eager"
                  fetchPriority="high" />
                
              </div>
            </motion.div>
            }
        </div>
      </div>
    </section>);

  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;