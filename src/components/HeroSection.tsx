import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";
import heroHomepageBg from "@/assets/hero-homepage.webp";

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
  hideCredentialsStrip?: boolean;
  hideRecognitionCard?: boolean;
  /** Show the 3-stat proof bar at the bottom of the hero. Home page only. */
  showProofBar?: boolean;
}

/* Stats data */
const statsFr = [
  { value: "~9 ans", label: "d'expérience" },
  { value: "5 ★", label: "Google + Facebook" },
  { value: "Hall of Fame", label: "RE/MAX" },
];
const statsEn = [
  { value: "~9 yrs", label: "experience" },
  { value: "5 ★", label: "Google + Facebook" },
  { value: "Hall of Fame", label: "RE/MAX" },
];

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      overline,
      title,
      subtitle,
      primaryCta,
      secondaryCta,
      compact,
      backgroundImage,
      agentImage,
      agentImageSm,
      agentName,
      heroBgImage,
      heroVideo,
      heroVideoPoster,
      hideCredentialsStrip,
      hideRecognitionCard,
      showProofBar = false,
    },
    ref
  ) => {
    const sectionRef = React.useRef<HTMLElement>(null);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const rightColRef = React.useRef<HTMLDivElement>(null);
    const portraitRef = React.useRef<HTMLDivElement>(null);
    const [videoReady, setVideoReady] = React.useState(false);
    const [showScrollHint, setShowScrollHint] = React.useState(true);
    const lang = useLanguage();
    const stats = lang === "en" ? statsEn : statsFr;
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      },
      [ref]
    );

    // Hide scroll hint after first scroll
    React.useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) setShowScrollHint(false);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Parallax effect — desktop only (≥1024px)
    React.useEffect(() => {
      const section = sectionRef.current;
      const rightCol = rightColRef.current;
      const portrait = portraitRef.current;
      if (!section || !rightCol || !portrait) return;

      let raf = 0;
      const mql = window.matchMedia("(min-width: 1024px)");

      const update = () => {
        const scrollY = window.scrollY;
        const sectionH = section.offsetHeight;
        if (scrollY > sectionH) return;
        rightCol.style.transform = `translateY(${scrollY * 0.2}px)`;
        portrait.style.transform = `translateY(${scrollY * 0.4}px)`;
      };

      const onScroll = () => {
        if (!mql.matches) return;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(update);
      };

      const reset = () => {
        rightCol.style.transform = "";
        portrait.style.transform = "";
      };

      const onMediaChange = () => {
        if (!mql.matches) { cancelAnimationFrame(raf); reset(); }
        else update();
      };

      mql.addEventListener("change", onMediaChange);
      window.addEventListener("scroll", onScroll, { passive: true });
      if (mql.matches) update();

      return () => {
        mql.removeEventListener("change", onMediaChange);
        window.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(raf);
        reset();
      };
    }, []);

    React.useEffect(() => {
      if (!heroVideo) return;
      const section = sectionRef.current;
      const el = videoRef.current;
      if (!section || !el) return;
      if (window.innerWidth < 1024) return;     const io = new IntersectionObserver(
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

    /* VideoObject JSON-LD for pages with hero video */
    React.useEffect(() => {
      if (!heroVideo) return;
      const BASE = "https://yanisgauthier.com";
      const schema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: title,
        description: subtitle,
        thumbnailUrl: heroVideoPoster ? `${BASE}${heroVideoPoster}` : undefined,
        contentUrl: `${BASE}${heroVideo}`,
        uploadDate: "2026-03-18",
        publisher: {
          "@type": "RealEstateAgent",
          "@id": `${BASE}/#realestateagent`,
          name: "Yanis Gauthier-Sigeris — Courtier immobilier RE/MAX",
        },
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ygs-jsonld-video";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return () => { script.remove(); };
    }, [heroVideo, heroVideoPoster, title, subtitle]);

    React.useEffect(() => {
      const el = videoRef.current;
      if (!el) return;
      const onPlaying = () => setVideoReady(true);
      el.addEventListener("playing", onPlaying);
      return () => el.removeEventListener("playing", onPlaying);
    }, []);

    /* Compact hero for inner pages */
    if (compact || (!agentImage && !heroVideo && !heroBgImage)) {
      return (
      <section ref={combinedRef} data-hero-dark className="relative overflow-hidden" style={{ background: "var(--ink)" }}>
        {heroBgImage && (
             <>
               <div className="absolute inset-0 overflow-hidden">
                 <img src={heroBgImage} alt="" role="presentation" className="h-full w-full object-cover" style={{ filter: "brightness(0.85) saturate(0.8)" }} loading="eager" decoding="auto" {...{"fetchpriority": "high"} as any} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
               </div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(23,48,59,.55) 0%, rgba(23,48,59,.2) 100%)" }} />
            </>
          )}
          <div className="section-container relative z-20 py-8 sm:py-20 md:py-24">
            <div className="max-w-[40rem]">
              {overline && <p className="label-overline mb-3 sm:mb-6" style={{ color: "var(--gold)" }}>{overline}</p>}
              <h1 style={{ color: "#F7F4EE" }}>{title}</h1>
              <p className="mt-3 hidden max-w-[28rem] text-[1rem] font-light leading-[1.8] sm:mt-6 sm:block" style={{ color: "rgba(255,255,255,.7)" }}>{subtitle}</p>
              {(primaryCta || secondaryCta) && (
                <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                  {primaryCta && (
                    <Button size="xl" variant="accent" className="tracking-[0.02em] text-[0.85rem] font-semibold transition-transform duration-200 ease-out hover:scale-[1.02]" asChild onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}>
                      <Link to={primaryCta.href}>{primaryCta.label} →</Link>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Link to={secondaryCta.href} className="inline-flex items-center text-[0.85rem] font-medium transition-all duration-200" style={{ color: "rgba(255,255,255,.5)", borderBottom: "1px solid rgba(255,255,255,.2)" }} onClick={() => trackCTAClick(secondaryCta.label, "hero-secondary")}>{secondaryCta.label}</Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      );
    }

    /* Full-bleed immersive homepage hero */
    const bgImage = heroBgImage || "/src/assets/hero-homepage.webp";
    return (
      <section
        ref={combinedRef}
        data-hero-dark
        className="relative overflow-hidden w-full"
        style={{
          minHeight: "100svh",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "var(--ink)",
        }}
      >
        {/* Hidden video preload (desktop) — kept for VideoObject schema */}
        {heroVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={heroVideoPoster}
            preload="none"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover hidden md:block"
            style={{ opacity: videoReady ? 0.55 : 0, transition: "opacity 1.2s ease", zIndex: 1 }}
            aria-hidden="true"
            onPlaying={() => setVideoReady(true)}
          />
        )}

        {/* Top gradient overlay — header contrast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-0 z-[15]"
          style={{
            height: 150,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))",
          }}
        />

        {/* Main gradient overlay — desktop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] hidden md:block"
          style={{
            background:
              "linear-gradient(135deg, rgba(23,48,59,0.85) 0%, rgba(23,48,59,0.55) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Main gradient overlay — mobile */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23,48,59,0.85) 0%, rgba(23,48,59,0.6) 55%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* ─── TEXT CONTENT (Layer 3) ─── */}
        <div
          className="relative z-[3] flex flex-col"
          style={{ minHeight: "100svh" }}
        >
          <div
            className="w-full md:max-w-[50%]"
            style={{
              padding: "90px 20px 0 20px",
            }}
          >
            <div className="md:pt-[30px] md:pl-[3%] md:pr-0">
              {overline && (
                <p
                  className="mb-3 sm:mb-6 opacity-0 animate-hero-fade-up uppercase font-semibold"
                  style={{
                    color: "var(--gold)",
                    animationDelay: "0.2s",
                    animationFillMode: "forwards",
                    fontFamily: "var(--sans)",
                    fontSize: "max(.6rem, .62rem)",
                    letterSpacing: ".22em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  {overline.replace(/[·•]/g, "  ·  ")}
                </p>
              )}

              <h1
                className="opacity-0 animate-hero-fade-up"
                style={{
                  color: "#FFFFFF",
                  animationDelay: "0.35s",
                  animationFillMode: "forwards",
                  letterSpacing: "-.01em",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontFamily: "var(--serif)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {lang === "fr" ? (
                  <>
                    <span className="block" style={{ fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#FFFFFF", letterSpacing: "0.01em", marginBottom: "0.3rem" }}>
                      Votre courtier immobilier
                    </span>
                    <span className="block" style={{ fontStyle: "italic", fontWeight: 600, fontSize: "clamp(2.4rem, 5.5vw, 5rem)", color: "var(--gold)", lineHeight: 1.0, letterSpacing: "-0.01em", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                      en Outaouais
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block" style={{ fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#FFFFFF", letterSpacing: "0.01em", marginBottom: "0.3rem" }}>
                      Your real estate broker
                    </span>
                    <span className="block" style={{ fontStyle: "italic", fontWeight: 600, fontSize: "clamp(2.4rem, 5.5vw, 5rem)", color: "var(--gold)", lineHeight: 1.0, letterSpacing: "-0.01em", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                      in Outaouais
                    </span>
                  </>
                )}
              </h1>

              <p
                className="mt-4 sm:mt-6 block max-w-[460px] font-light opacity-0 animate-hero-fade-up"
                style={{
                  color: "#FFFFFF",
                  animationDelay: "0.5s",
                  animationFillMode: "forwards",
                  fontSize: ".95rem",
                  lineHeight: 1.75,
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {lang === "fr"
                  ? "Je vous donne les chiffres et les options, vous décidez. Stratégie claire pour vendre, acheter ou investir en Outaouais."
                  : "I give you the numbers and the options — you decide. Clear strategy to sell, buy, or invest in Outaouais."}
              </p>

              {primaryCta && (
                <div className="mt-6 sm:mt-7 opacity-0 animate-hero-fade-up" style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}>
                  <Link
                    to={primaryCta.href}
                    className="inline-flex items-center justify-center uppercase transition-all duration-200 ease-out hover:scale-[1.02] w-full sm:w-auto text-center"
                    style={{
                      background: "#A88A5A",
                      border: "1.5px solid #A88A5A",
                      borderRadius: 0,
                      color: "#FFFFFF",
                      padding: ".95rem 1.75rem",
                      fontSize: ".82rem",
                      fontWeight: 600,
                      letterSpacing: ".14em",
                      boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#917745"; e.currentTarget.style.borderColor = "#917745"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#A88A5A"; e.currentTarget.style.borderColor = "#A88A5A"; }}
                    onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}
                  >
                    {primaryCta.label} →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ─── IMAGE B: Yanis portrait (Layer 4) ─── */}
        {agentImage && (
          <>
            {/* Desktop portrait */}
            <img
              src={agentImage}
              alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
              width={640}
              height={960}
              className="hidden md:block absolute object-contain object-bottom pointer-events-none select-none"
              style={{
                bottom: 0,
                right: "5%",
                height: "92%",
                width: "auto",
                zIndex: 4,
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.35))",
              }}
              loading="eager"
              decoding="auto"
              {...{ fetchpriority: "high" } as any}
            />
            {/* Mobile portrait */}
            <img
              src={agentImageSm || agentImage}
              srcSet={agentImageSm ? `${agentImageSm} 320w, ${agentImage} 640w` : undefined}
              sizes="100vw"
              alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
              width={320}
              height={480}
              className="md:hidden absolute object-contain object-bottom pointer-events-none select-none"
              style={{
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                maxHeight: "45vh",
                width: "auto",
                zIndex: 4,
                filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
              }}
              loading="eager"
              decoding="auto"
              {...{ fetchpriority: "high" } as any}
            />
          </>
        )}

        {/* Scroll indicator — mobile only */}
        {showScrollHint && (
          <div
            className="absolute bottom-3 left-1/2 z-[5] md:hidden"
            style={{
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,.7)",
              fontSize: "1.5rem",
              animation: "hero-bounce 2s ease infinite",
              textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            }}
            aria-hidden="true"
          >
            ⌄
          </div>
        )}
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
