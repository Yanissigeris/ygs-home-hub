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
    },
    ref
  ) => {
    const sectionRef = React.useRef<HTMLElement>(null);
    const videoRef = React.useRef<HTMLVideoElement>(null);
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

    /* Compact hero for inner pages */
    if (compact || (!agentImage && !heroVideo && !heroBgImage)) {
      return (
        <section ref={combinedRef} className="relative overflow-hidden" style={{ background: "var(--ink)" }}>
          {heroBgImage && (
             <>
               <div className="absolute inset-0 overflow-hidden">
                 <img src={heroBgImage} alt="" role="presentation" className="h-full w-full object-cover" style={{ filter: "brightness(0.85) saturate(0.8)" }} loading="eager" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
               </div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(23,48,59,.55) 0%, rgba(23,48,59,.2) 100%)" }} />
            </>
          )}
          <div className="section-container relative z-20 py-16 sm:py-20 md:py-24">
            <div className="max-w-[40rem]">
              {overline && <p className="label-overline mb-6" style={{ color: "var(--gold)" }}>{overline}</p>}
              <h1 style={{ color: "#F7F4EE" }}>{title}</h1>
              <p className="mt-4 max-w-[28rem] text-[1rem] font-light leading-[1.8] sm:mt-6" style={{ color: "rgba(255,255,255,.6)" }}>{subtitle}</p>
              {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  {primaryCta && (
                    <Button size="xl" variant="accent" className="tracking-[0.02em] text-[0.85rem] font-semibold" asChild onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}>
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
      <section ref={combinedRef} className="relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="grid min-h-[100svh] lg:grid-cols-2">
          {/* ─── LEFT COLUMN ─── */}
          <div
            className="relative flex flex-col justify-center"
            style={{ background: "var(--ink)" }}
          >
            {/* Mobile padding: 5rem top (nav), 1.5rem sides, 4rem bottom */}
            <div className="px-[1.5rem] pt-[5rem] pb-[4rem] sm:px-[clamp(1.25rem,5vw,5rem)] sm:pt-[clamp(3rem,7vw,7rem)] sm:pb-[clamp(3rem,7vw,7rem)]">
              {/* Decorative right edge line (desktop) */}
              <div className="absolute right-0 top-0 bottom-0 w-px hidden lg:block" style={{ background: "linear-gradient(to bottom, transparent 10%, rgba(168,138,90,.3) 50%, transparent 90%)" }} aria-hidden="true" />

              {overline && (
                <p className="label-overline mb-8 opacity-0 animate-hero-fade-up" style={{ color: "var(--gold)", animationDelay: "0.2s", animationFillMode: "forwards", fontSize: "max(.6rem, .62rem)", letterSpacing: ".15em" }}>
                  {overline.replace(/[·•]/g, "  ·  ")}
                </p>
              )}

              <h1
                className="max-w-[16ch] opacity-0 animate-hero-fade-up"
                style={{
                  color: "#F7F4EE",
                  animationDelay: "0.35s",
                  animationFillMode: "forwards",
                  fontSize: "clamp(2.6rem, 9vw, 5.5rem)",
                  lineHeight: 1.12,
                  letterSpacing: "-.01em",
                }}
              >
                {lang === "fr" ? (
                  <>Votre <em className="not-italic" style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>courtier</em>{" "}<strong style={{ fontWeight: 700 }}>immobilier</strong><br />en Outaouais</>
                ) : (
                  <>Your <em className="not-italic" style={{ fontStyle: "italic", color: "var(--gold)", fontWeight: 300 }}>real estate</em>{" "}<strong style={{ fontWeight: 700 }}>broker</strong><br />in Outaouais</>
                )}
              </h1>

              <p className="mt-6 max-w-[420px] font-light opacity-0 animate-hero-fade-up" style={{ color: "rgba(255,255,255,.6)", animationDelay: "0.5s", animationFillMode: "forwards", fontSize: ".95rem", lineHeight: 1.75 }}>
                {subtitle}
              </p>

              {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 opacity-0 animate-hero-fade-up" style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}>
                  {primaryCta && (
                    <Link
                      to={primaryCta.href}
                      className="inline-flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
                      style={{ background: "var(--gold)", borderRadius: "3px", boxShadow: "0 4px 20px rgba(168,138,90,.3)", padding: ".9rem 1.5rem", fontSize: ".85rem", fontWeight: 600 }}
                      onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}
                    >
                      {primaryCta.label} →
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link
                      to={secondaryCta.href}
                      className="inline-flex items-center justify-center font-medium transition-all duration-300 hover:border-white/50 hover:text-white w-full sm:w-auto text-center"
                      style={{ color: "rgba(255,255,255,.8)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "3px", padding: ".85rem 1.5rem", fontSize: ".85rem" }}
                      onClick={() => trackCTAClick(secondaryCta.label, "hero-secondary")}
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}

              {/* Credentials strip */}
              <div className={`mt-10 pt-8 opacity-0 animate-hero-fade-up${hideCredentialsStrip ? " hidden" : ""}`} style={{ borderTop: "1px solid rgba(255,255,255,.08)", animationDelay: "0.8s", animationFillMode: "forwards" }}>
                <div className="flex items-start gap-5 sm:gap-10">
                  {stats.map((stat, i) => (
                    <React.Fragment key={stat.label}>
                      {i > 0 && <div className="hidden sm:block h-12 w-px" style={{ background: "rgba(255,255,255,.08)" }} />}
                      {i > 0 && <div className="sm:hidden h-[30px] w-px" style={{ background: "rgba(255,255,255,.08)" }} />}
                      <div className="text-center sm:text-left">
                        <p
                          className="font-heading font-semibold leading-none tracking-tight text-white"
                          style={{
                            letterSpacing: "-.02em",
                            fontSize: stat.value === "Hall of Fame" ? "clamp(1.2rem, 4vw, 2.4rem)" : "clamp(1.6rem, 5vw, 2.4rem)",
                          }}
                        >
                          {stat.value}
                        </p>
                        <p className="mt-2 font-medium uppercase" style={{ color: "rgba(255,255,255,.35)", fontSize: ".58rem", letterSpacing: ".08em" }}>{stat.label}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN ─── */}
          <div className="relative hidden lg:block overflow-hidden" style={{ background: "var(--ink2)" }}>
            {/* Background image / video */}
            {heroVideo && (
              <>
                <div className="absolute inset-0 transition-opacity duration-[1.6s]" style={{ opacity: videoReady ? 0 : 1, pointerEvents: "none" }} aria-hidden="true">
                  <div className="absolute inset-0 animate-[hero-shimmer_6s_ease-in-out_infinite]" style={{ background: "radial-gradient(ellipse 120% 80% at 30% 60%, hsl(200 42% 20% / 0.5) 0%, transparent 60%)" }} />
                </div>
                <div className="absolute inset-0">
                  <video ref={videoRef} autoPlay muted loop playsInline poster={heroVideoPoster} preload="none" width={1920} height={1080} className="h-full w-full object-cover" style={{ opacity: 0.55, filter: "brightness(0.85) saturate(0.7)" }} />
                </div>
              </>
            )}
            {heroBgImage && !heroVideo && (
              <div className="absolute inset-0">
                <img src={heroBgImage} alt="" role="presentation" className="h-full w-full object-cover" style={{ opacity: 0.55, filter: "brightness(0.85) saturate(0.7)" }} loading="eager" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(23,48,59,.45) 0%, rgba(23,48,59,.1) 100%)" }} />

            {/* Yanis portrait */}
            {agentImage && (
              <div className="absolute inset-0 z-[2] flex items-end justify-center">
                <img
                  src={agentImage}
                  alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
                  width={640}
                  height={960}
                  className="w-[380px] xl:w-[440px] object-contain object-bottom"
                  style={{ height: "90%", maskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)" }}
                  loading="eager"
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
            <div className="relative flex justify-center items-end overflow-hidden lg:hidden" style={{ background: "var(--ink2)" }}>
              {heroVideo && (
                <div className="absolute inset-0">
                  {heroVideoPoster && <img src={heroVideoPoster} alt="" role="presentation" className="h-full w-full object-cover" style={{ opacity: 0.2 }} />}
                </div>
              )}
              <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg, rgba(23,48,59,.45) 0%, rgba(23,48,59,.15) 100%)" }} />
              <img
                src={agentImageSm || agentImage}
                srcSet={agentImageSm ? `${agentImageSm} 320w, ${agentImage} 640w` : undefined}
                sizes="260px"
                alt={agentName ? `${agentName}, courtier immobilier à Gatineau` : ""}
                width={320}
                height={480}
                className="relative z-[2] w-[260px] sm:w-[300px] object-contain object-bottom"
                style={{ maskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 4%, black 100%)" }}
                loading="eager"
              />
            </div>
          )}
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
