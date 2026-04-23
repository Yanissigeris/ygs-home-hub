import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

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

    /* Full homepage hero — 2-column layout */
    return (
      <section
        ref={combinedRef}
        data-hero-dark
        className="relative overflow-hidden flex flex-col justify-between min-h-dvh md:min-h-0 pb-[70px] md:pb-0"
        style={{ background: "var(--ink)" }}
      >
        <div className="flex flex-col lg:grid min-h-[auto] sm:min-h-[78svh] md:min-h-[88svh] lg:grid-cols-[40%_60%] flex-1">
          {/* ─── LEFT COLUMN ─── */}
          <div
            className="relative flex flex-col justify-center order-2 md:order-none mt-[-1rem] md:mt-0 z-10"
            style={{ background: "linear-gradient(175deg, #0a1a22, #17303B)" }}
          >
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 70% 50% at 65% 45%, rgba(168,138,90,0.05), transparent)" }} />
            {/* Mobile padding: tightened to keep proof bar above the fold */}
            <div className="px-[1.5rem] pt-[calc(4rem-64px)] pb-[2.25rem] sm:px-[clamp(1.25rem,5vw,5rem)] sm:pt-[calc(clamp(2rem,5vw,5rem)-40px)] sm:pb-[clamp(2rem,5vw,5rem)]">
              {/* Decorative right edge line (desktop) */}
              <div className="absolute right-0 top-0 bottom-0 w-px hidden lg:block" style={{ background: "linear-gradient(to bottom, transparent 10%, rgba(168,138,90,.3) 50%, transparent 90%)" }} aria-hidden="true" />

              {overline && (
                <p
                  className="mb-3 sm:mb-8 opacity-0 animate-hero-fade-up uppercase font-semibold"
                  style={{
                    color: "var(--gold)",
                    animationDelay: "0.2s",
                    animationFillMode: "forwards",
                    fontFamily: "var(--sans)",
                    fontSize: "max(.6rem, .62rem)",
                    letterSpacing: ".22em",
                  }}
                >
                  {overline.replace(/[·•]/g, "  ·  ")}
                </p>
              )}

              <h1
                className="max-w-[16ch] opacity-0 animate-hero-fade-up hero-h1-fix"
                style={{
                  color: "#F7F4EE",
                  animationDelay: "0.35s",
                  animationFillMode: "forwards",
                  letterSpacing: "-.01em",
                  fontFeatureSettings: '"liga" 1, "kern" 1',
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontFamily: "var(--serif)",
                }}
              >
                {lang === "fr" ? (
                  <>
                    <span className="sm:hidden" aria-hidden="true">Courtier immobilier <span style={{ color: "var(--gold)" }}>en Outaouais</span></span>
                    <span className="hidden sm:inline">Votre courtier immobilier à <span style={{ color: "var(--gold)" }}>Gatineau</span> — Outaouais</span>
                  </>
                ) : (
                  <>
                    <span className="sm:hidden" aria-hidden="true">Real estate broker in <span style={{ color: "var(--gold)" }}>Outaouais</span></span>
                    <span className="hidden sm:inline">Your real estate broker in <span style={{ color: "var(--gold)" }}>Gatineau</span> — Outaouais</span>
                  </>
                )}
              </h1>

              <p className="mt-4 sm:mt-6 hidden sm:block max-w-[420px] font-light opacity-0 animate-hero-fade-up" style={{ color: "rgba(255,255,255,.7)", animationDelay: "0.5s", animationFillMode: "forwards", fontSize: ".95rem", lineHeight: 1.75 }}>
                {subtitle}
              </p>

              {(primaryCta || secondaryCta) && (
                <div className="mt-[1.4rem] flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 opacity-0 animate-hero-fade-up" style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}>
                  {primaryCta && (
                    <Link
                      to={primaryCta.href}
                      className="inline-flex items-center justify-center uppercase transition-all duration-200 ease-out hover:scale-[1.02] w-full sm:w-auto text-center"
                      style={{ background: "transparent", border: "1.5px solid #A88A5A", borderRadius: 0, color: "#FFFFFF", padding: ".9rem 1.5rem", fontSize: ".8rem", fontWeight: 600, letterSpacing: ".14em", transition: "all .2s ease" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#A88A5A"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                      onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}
                    >
                      {primaryCta.label} →
                    </Link>
                  )}
                  {secondaryCta && (
                      <Link to={secondaryCta.href}
                      className="hidden sm:inline-flex items-center justify-center uppercase transition-all duration-300 hover:border-white/50 w-full sm:w-auto text-center"
                      style={{ color: "#FFFFFF", border: "1.5px solid rgba(255,255,255,.30)", borderRadius: 0, padding: ".85rem 1.5rem", fontSize: ".8rem", fontWeight: 500, letterSpacing: ".14em", transition: "all .2s ease" }}
                      onClick={() => trackCTAClick(secondaryCta.label, "hero-secondary")}
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}

              {/* Credentials strip */}
              <div className={`mt-10 pt-8 py-3 md:py-6 border-t border-white/10 md:border-t-0 opacity-0 animate-hero-fade-up order-last md:order-none${hideCredentialsStrip ? " hidden" : ""}`} style={{ borderTop: "1px solid rgba(168,138,90,0.12)", animationDelay: "0.8s", animationFillMode: "forwards" }}>
                <div className="flex items-start justify-between sm:justify-start gap-3 sm:gap-10 w-full">
                  {stats.map((stat, i) => (
                    <React.Fragment key={stat.label}>
                      {i > 0 && <div className="hidden sm:block h-12 w-px shrink-0" style={{ background: "linear-gradient(to bottom, transparent, rgba(168,138,90,0.2), transparent)" }} />}
                      {i > 0 && <div className="sm:hidden h-[30px] w-px shrink-0" style={{ background: "linear-gradient(to bottom, transparent, rgba(168,138,90,0.2), transparent)" }} />}
                      <div className="text-center sm:text-left min-w-0 flex-1 sm:flex-initial">
                        <p
                          className="font-heading font-semibold leading-none tracking-tight text-white"
                          style={{
                            letterSpacing: "-.02em",
                            fontSize: stat.value === "Hall of Fame" ? "clamp(1.05rem, 3.6vw, 2.4rem)" : "clamp(1.5rem, 5vw, 2.4rem)",
                          }}
                        >
                          {stat.value}
                        </p>
                        <p className="mt-2 font-medium uppercase" style={{ color: "rgba(168,138,90,0.5)", fontSize: ".58rem", letterSpacing: ".08em" }}>{stat.label}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN ─── */}
          <div ref={rightColRef} className="relative hidden lg:block overflow-hidden will-change-transform" style={{ background: "var(--ink2)" }}>
            {/* Background image / video */}
            {heroVideo && (
              <>
                <div className="absolute inset-0 transition-opacity" style={{ opacity: videoReady ? 0 : 1, pointerEvents: "none", transitionDuration: "1600ms" }} aria-hidden="true">
                  <div className="absolute inset-0 animate-[hero-shimmer_6s_ease-in-out_infinite]" style={{ background: "radial-gradient(ellipse 120% 80% at 30% 60%, hsl(200 42% 20% / 0.5) 0%, transparent 60%)" }} />
                </div>
                <div className="absolute inset-0">
                  <video ref={videoRef} autoPlay muted loop playsInline poster={heroVideoPoster} preload="none" width={1920} height={1080} className="h-full w-full object-cover" style={{ opacity: 0.5, filter: "brightness(0.88) saturate(0.65)" }} aria-hidden="true" />
                </div>
              </>
            )}
            {heroBgImage && !heroVideo && (
              <div className="absolute inset-0">
                <img src={heroBgImage} alt="" role="presentation" className="h-full w-full object-cover" style={{ opacity: 0.55, filter: "brightness(0.85) saturate(0.7)" }} loading="eager" decoding="auto" {...{"fetchpriority": "high"} as any} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(145deg, rgba(23,48,59,.45) 0%, rgba(23,48,59,.15) 40%, rgba(17,37,48,.05) 100%)" }} />

            {/* Left edge separation overlay */}
            <div className="absolute inset-y-0 left-0 z-[1] w-1/2 pointer-events-none" style={{ background: "linear-gradient(to right, #17303B 0%, transparent 40%)", opacity: 0.35 }} aria-hidden="true" />

            {/* Warm glow behind portrait */}
            <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 55%, rgba(168,138,90,0.12), transparent 60%)" }} />

            {/* Yanis portrait */}
            {agentImage && (
              <div ref={portraitRef} className="absolute inset-0 z-[2] flex items-end justify-center will-change-transform">
                <img
                  src={agentImage}
                  alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
                  width={640}
                  height={960}
                  className="w-[420px] xl:w-[500px] 2xl:w-[540px] object-contain object-bottom"
                  style={{ height: "95%", maskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)" }}
                  loading="eager"
                  decoding="auto"
                  {...{"fetchpriority": "high"} as any}
                />
              </div>
            )}

            {/* Floating stats card */}
            {!hideRecognitionCard && (
              <div className="absolute bottom-12 left-10 right-10 z-[3] opacity-0 animate-hero-fade-up" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
                <div className="backdrop-blur-xl" style={{ background: "rgba(247,244,238,.96)", borderLeft: "3px solid var(--gold)", borderRadius: "3px", padding: "1.6rem 2rem" }}>
                  <p className="text-[.62rem] font-semibold uppercase tracking-[.14em] mb-4" style={{ color: "var(--gold)" }}>
                    {lang === "en" ? "PROFESSIONAL RECOGNITION" : "RECONNAISSANCES PROFESSIONNELLES"}
                  </p>
                  <div className="grid grid-cols-3 gap-0">
                    {stats.map((stat, i) => (
                      <div key={stat.label} className="text-center" style={{ borderLeft: i > 0 ? "1px solid rgba(23,48,59,.1)" : "none" }}>
                        <p className="font-heading text-[2rem] font-semibold leading-none" style={{ color: "var(--ink)", letterSpacing: "-.02em" }}>{stat.value}</p>
                        <p className="mt-1.5 text-[.65rem] font-medium uppercase tracking-[.1em]" style={{ color: "var(--gold)" }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ─── MOBILE: Agent image below text ─── */}
          {agentImage && (
            <div className="relative flex justify-center items-end overflow-hidden lg:hidden order-first md:order-none" style={{ background: "var(--ink2)" }}>
              {heroVideo && (
                <div className="absolute inset-0">
                  {heroVideoPoster && <img src={heroVideoPoster} alt="" role="presentation" className="h-full w-full object-cover" style={{ opacity: 0.2 }} loading="eager" decoding="auto" />}
                </div>
              )}
              <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(23,48,59,.45) 0%, rgba(23,48,59,.15) 100%)" }} />
              <img
                src={agentImageSm || agentImage}
                srcSet={agentImageSm ? `${agentImageSm} 320w, ${agentImage} 640w` : undefined}
                sizes="100vw"
                alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
                width={320}
                height={480}
                className="relative z-[2] w-auto max-w-[75%] mx-auto max-h-[42vh] object-contain object-bottom rounded-none md:rounded-lg md:w-full md:max-w-none md:max-h-[55vh] md:object-cover md:object-top"
                loading="eager"
                decoding="auto"
                {...{"fetchpriority": "high"} as any}
              />
              
            </div>
          )}
          {/* Scroll indicator — mobile only */}
          {showScrollHint && (
            <div
              className="absolute bottom-6 left-1/2 z-10 md:hidden"
              style={{
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,.4)",
                fontSize: "1.5rem",
                animation: "hero-bounce 2s ease infinite",
              }}
              aria-hidden="true"
            >
              ⌄
            </div>
          )}
        </div>

        {/* ─── PROOF BAR (home only) ─── */}
        {showProofBar && (
          <div
            className="relative z-10 w-full"
            style={{
              background: "var(--ink)",
              borderTop: "1px solid rgba(255,255,255,.15)",
            }}
          >
            <div className="mx-auto flex w-full max-w-[80rem] items-stretch justify-center px-4 py-6 sm:py-8">
              {stats.map((stat, i) => (
                <React.Fragment key={`proof-${stat.label}`}>
                  {i > 0 && (
                    <div
                      aria-hidden="true"
                      className="self-stretch"
                      style={{ width: 1, background: "rgba(255,255,255,.20)" }}
                    />
                  )}
                  <div className="flex flex-1 flex-col items-center justify-center px-3 text-center sm:px-6">
                    <p
                      style={{
                        color: "#F7F4EE",
                        fontFamily: "var(--serif)",
                        fontWeight: 500,
                        fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
                        lineHeight: 1.1,
                        letterSpacing: "-.01em",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-2 uppercase"
                      style={{
                        color: "#F7F4EE",
                        fontFamily: "var(--sans)",
                        fontSize: ".7rem",
                        letterSpacing: ".18em",
                        opacity: 0.85,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
