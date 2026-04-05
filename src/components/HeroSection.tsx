import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";
/* Inline star SVG — keeps lucide-react out of the critical bundle */
const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" className="fill-[hsl(36_50%_55%/0.7)] text-[hsl(36_50%_55%/0.7)]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

interface HeroSectionProps {
  overline?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLine?: string;
  socialProof?: string;
  compact?: boolean;
  backgroundImage?: string;
  agentImage?: string;
  agentImageSm?: string;
  agentName?: string;
  heroBgImage?: string;
  heroVideo?: string;
  heroVideoPoster?: string;
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      overline,
      title,
      subtitle,
      primaryCta,
      secondaryCta,
      trustLine,
      socialProof,
      compact,
      backgroundImage,
      agentImage,
      agentImageSm,
      agentName,
      heroBgImage,
      heroVideo,
      heroVideoPoster,
    },
    ref
  ) => {
    const sectionRef = React.useRef<HTMLElement>(null);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [videoReady, setVideoReady] = React.useState(false);
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      },
      [ref]
    );

    /* Lazy-load video: wait until section is near-viewport, then set src */
    React.useEffect(() => {
      if (!heroVideo) return;
      const section = sectionRef.current;
      const el = videoRef.current;
      if (!section || !el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            io.disconnect();
            el.src = heroVideo;
            el.load();
          }
        },
        { rootMargin: "200px" }
      );
      io.observe(section);
      return () => io.disconnect();
    }, [heroVideo]);

    React.useEffect(() => {
      const el = videoRef.current;
      if (!el) return;
      const onPlaying = () => setVideoReady(true);
      el.addEventListener("playing", onPlaying);
      return () => el.removeEventListener("playing", onPlaying);
    }, []);

    return (
      <section
        ref={combinedRef}
        className="relative overflow-x-clip overflow-y-hidden"
        style={{ background: "#10242D" }}
      >
        {/* SHIMMER — while video loads */}
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
          </div>
        )}

        {/* VIDEO BACKGROUND */}
        {heroVideo && (
          <>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                backgroundImage: heroBgImage ? `url(${heroBgImage})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={heroVideoPoster || heroBgImage}
                preload="none"
                width={1920}
                height={1080}
                // @ts-ignore
                fetchpriority="high"
                className="h-full w-full object-cover"
                style={{ filter: "brightness(0.78) saturate(0.7) contrast(1.05)" }}
              />
            </div>
            {/* Overlay — stronger, cleaner */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, hsl(200 42% 10% / 0.88) 0%, hsl(200 42% 12% / 0.72) 30%, hsl(200 42% 14% / 0.50) 55%, hsl(200 42% 14% / 0.35) 80%, hsl(200 42% 14% / 0.28) 100%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24"
              style={{
                background: "linear-gradient(to top, #10242D 0%, transparent 100%)",
              }}
            />
          </>
        )}

        {/* STATIC IMAGE BACKGROUND */}
        {heroBgImage && !heroVideo && (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={heroBgImage}
                alt=""
                role="presentation"
                className="h-full w-full object-cover"
                style={{ filter: "brightness(0.85) saturate(0.8) contrast(0.95)" }}
                loading="eager"
                // @ts-ignore
                fetchpriority="high"
              />
            </div>
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, hsl(200 42% 11% / 0.78) 0%, hsl(200 42% 13% / 0.58) 60%, hsl(200 42% 14% / 0.72) 100%)",
              }}
            />
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, #10242D 0%, hsl(200 42% 14% / 0.85) 18%, hsl(200 42% 14% / 0.35) 45%, hsl(200 42% 14% / 0.20) 70%, hsl(200 42% 14% / 0.15) 100%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24"
              style={{
                background: "linear-gradient(to top, #10242D 0%, transparent 100%)",
              }}
            />
          </>
        )}

        {/* CONTENT */}
        <div
          className={`section-container relative z-20 ${
            compact
              ? "py-10 sm:py-18 md:py-20"
              : agentImage
              ? "pt-[2.5rem] pb-0 sm:pt-[6rem] md:pt-[7rem] lg:pt-[8rem]"
              : "pt-[2.5rem] pb-[2.5rem] sm:pt-[6.5rem] sm:pb-[5.5rem] md:pt-[7rem] md:pb-[6rem]"
          }`}
        >
          <div
            className={`grid items-end ${
              agentImage
                ? "gap-0 md:grid-cols-[56%_44%] lg:grid-cols-[54%_46%]"
                : backgroundImage
                ? "gap-8 md:gap-12 lg:gap-16 lg:grid-cols-[55%_45%]"
                : ""
            }`}
          >
            {/* TEXT */}
            <div
              className={`${backgroundImage || agentImage ? "min-w-0" : "max-w-[40rem]"} ${
                agentImage ? "pb-[3rem] md:pb-[4.5rem] lg:pb-[5.5rem]" : ""
              } relative min-w-0 animate-fade-in`}
            >
              {overline && (
                <p
                  className="mb-6 text-[0.6rem] font-medium uppercase tracking-[0.28em] sm:text-[0.65rem]"
                  style={{ color: "hsl(36 38% 56% / 0.5)" }}
                >
                  {overline.replace(/[·•]/g, "  ·  ")}
                </p>
              )}

              <h1
                style={{ color: "#F5F1E8" }}
                className="max-w-[14ch] leading-[1.02] tracking-[-0.03em] text-[1.875rem] min-[391px]:max-w-[16ch] sm:text-[2.875rem] md:text-[3.625rem] xl:text-[4rem]"
              >
                {title}
              </h1>

              <p
                className="mt-3 max-w-[28rem] text-[0.8125rem] leading-[1.55] font-light sm:mt-6 sm:text-[1.0625rem] sm:leading-[1.75] max-[390px]:max-w-[22rem]"
                style={{ color: "hsl(200 15% 68%)" }}
              >
                {subtitle}
              </p>

              {(primaryCta || secondaryCta) && (
                <div className="mt-7 flex w-full flex-col items-stretch gap-4 sm:mt-10 min-[391px]:flex-row min-[391px]:items-center max-[390px]:max-w-[18rem]">
                  {primaryCta && (
                    <Button
                      size="xl"
                      variant="accent"
                      className="w-full min-[391px]:w-auto min-[391px]:shrink-0 tracking-[0.02em] text-[0.9375rem] h-[3.25rem] px-8"
                      asChild
                      onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}
                    >
                      <Link to={primaryCta.href}>{primaryCta.label}</Link>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Link
                      to={secondaryCta.href}
                      className="inline-flex items-center justify-center text-[0.8125rem] font-medium tracking-[0.01em] transition-all duration-200 hover:text-[#F5F1E8]/90 whitespace-nowrap border-b border-current/20 pb-px hover:border-current/40"
                      style={{ color: "hsl(200 15% 72% / 0.65)" }}
                      onClick={() => trackCTAClick(secondaryCta.label, "hero-secondary")}
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}

              {/* Social proof — minimal, quiet */}
              {socialProof && (
                <div className="mt-5 sm:mt-8 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <span
                    className="text-[0.8125rem] font-medium tracking-[0.02em]"
                    style={{ color: "hsl(200 15% 68% / 0.6)" }}
                  >
                    {socialProof}
                  </span>
                </div>
              )}

              {trustLine && (
                <p
                  className="mt-4 sm:mt-6 max-w-[26rem] text-[0.75rem] font-normal tracking-[0.03em] max-[390px]:pr-2"
                  style={{ color: "hsl(200 15% 55% / 0.35)" }}
                >
                  {trustLine}
                </p>
              )}
            </div>

            {/* PORTRAIT — DESKTOP */}
            {agentImage && (
              <div
                className="relative z-10 hidden self-end md:flex md:items-end md:justify-end animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <div
                  className="relative"
                  style={{
                    maskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)",
                    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)",
                  }}
                >
                  <img
                    src={agentImage}
                    alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
                    width={640}
                    height={960}
                    className="relative z-0 w-[340px] aspect-[640/960] object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] lg:w-[400px] xl:w-[440px]"
                    loading="eager"
                    // @ts-ignore
                    fetchpriority="high"
                  />
                </div>
              </div>
            )}

            {/* PORTRAIT — MOBILE */}
            {agentImage && (
              <div
                className="relative z-10 flex justify-center items-end overflow-hidden md:hidden animate-fade-in"
                style={{ animationDelay: "150ms" }}
              >
                <div
                  className="relative"
                  style={{
                    maskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)",
                    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)",
                  }}
                >
                  <img
                    src={agentImageSm || agentImage}
                    srcSet={agentImageSm ? `${agentImageSm} 320w, ${agentImage} 640w` : undefined}
                    sizes="260px"
                    alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
                    width={320}
                    height={480}
                    className="relative z-0 w-[260px] aspect-[640/960] object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] sm:w-[300px]"
                    loading="eager"
                    // @ts-ignore
                    fetchpriority="high"
                  />
                </div>
              </div>
            )}

            {/* BACKGROUND IMAGE DISPLAY (non-agent) */}
            {backgroundImage && !agentImage && (
              <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl">
                  <img
                    src={backgroundImage}
                    alt=""
                    role="presentation"
                    className="aspect-[4/3] w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
