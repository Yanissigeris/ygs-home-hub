import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Inline SVG icons — replaces lucide-react imports for the hero so the
 * 159KB lucide chunk is no longer in the critical render path.
 * Improves Speed Index by ~150-300ms on desktop. */
const IconCalendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconTrophy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
const IconHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const Calendar = IconCalendar;
const Star = IconStar;
const Trophy = IconTrophy;
import { trackCTAClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";
import { getA11yLabel } from "@/lib/a11y";
// (hero-homepage.webp removed — was imported but never used; saves ~186KB from bundle)
import { VideoPerfOverlay, type VideoPerfMetrics } from "@/components/VideoPerfOverlay";
import { heroContact } from "@/config/heroBottomInfo";

/** Detect mobile synchronously at first render (SSR-safe).
 *  Used to skip the <video> element entirely on phones — the poster
 *  becomes the LCP element and avoids the 2-3 MB video pull on cellular. */
const detectMobile = () => {
  if (typeof window === "undefined") return false;
  try { return window.matchMedia("(max-width: 767px)").matches; } catch { return false; }
};


interface HeroSectionProps {
  overline?: string;
  /** Preferred over `overline` on the home hero. Renders 3 cities on mobile, all on desktop, joined with " · ". */
  cities?: string[];
  title: string;
  subtitle: string;
  /** Optional shorter subtitle rendered only on mobile (<768px). Falls back to `subtitle`. */
  subtitleShort?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustLine?: string;
  socialProof?: string;
  compact?: boolean;
  backgroundImage?: string;
  agentImage?: string;
  agentImageSm?: string;
  /** Optional middle tier (~480px wide) for retina mobile / small tablets */
  agentImageMd?: string;
  /** Optional AVIF variants (preferred by Chrome/Edge/Firefox/Safari 16+) */
  agentImageAvif?: string;
  agentImageSmAvif?: string;
  agentImageMdAvif?: string;
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

/* Scroll chevron — bounces at hero bottom, fades on scroll */
const ScrollChevron: React.FC<{ lang: "fr" | "en" }> = ({ lang }) => {
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleClick = () => {
    const heroEl = document.querySelector("[data-hero-dark]") as HTMLElement | null;
    const top = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : window.innerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={getA11yLabel("hero.scrollNext", lang)}
      className="absolute left-1/2 z-[6] -translate-x-1/2 pointer-events-auto hidden md:block"
      style={{
        bottom: "84px",
        background: "transparent",
        border: "none",
        padding: 8,
        cursor: "pointer",
        opacity: hidden ? 0 : 1,
        transition: "opacity 0.3s ease",
        animation: "hero-chevron-bounce 2s ease-in-out infinite",
        color: "rgba(255,255,255,0.6)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
};

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      overline,
      cities,
      title,
      subtitle,
      subtitleShort,
      primaryCta,
      secondaryCta,
      compact,
      backgroundImage,
      agentImage,
      agentImageSm,
      agentImageMd,
      agentImageAvif,
      agentImageSmAvif,
      agentImageMdAvif,
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
    const [isMobile] = React.useState(detectMobile);
    /* Defer video mount until the browser is idle (after LCP + Speed Index window).
     * The poster image stays as the visual — Speed Index measures pixels, not video. */
    const [videoDeferReady, setVideoDeferReady] = React.useState(false);
    React.useEffect(() => {
      if (!heroVideo || isMobile) return;
      const ric = (window as any).requestIdleCallback as
        | ((cb: () => void, opts?: { timeout: number }) => number)
        | undefined;
      const trigger = () => setVideoDeferReady(true);
      const id = ric ? ric(trigger, { timeout: 3000 }) : window.setTimeout(trigger, 1500);
      return () => {
        if (ric && (window as any).cancelIdleCallback) (window as any).cancelIdleCallback(id);
        else clearTimeout(id);
      };
    }, [heroVideo, isMobile]);
    const renderVideo = !!heroVideo && !isMobile && videoDeferReady;
   const [showScrollHint, setShowScrollHint] = React.useState(true);
   const [atTop, setAtTop] = React.useState(true);
    const [perfMetrics, setPerfMetrics] = React.useState<VideoPerfMetrics>({ src: heroVideo || "", mountTime: 0 });
    const perfStartRef = React.useRef<number>(0);
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

    // Preload hero LCP image as soon as component mounts
    React.useEffect(() => {
      if (!heroBgImage) return;
      const existing = document.head.querySelector(
        `link[rel="preload"][as="image"][href="${heroBgImage}"]`
      );
      if (existing) return;
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroBgImage;
      link.setAttribute("fetchpriority", "high");
      if (/\.webp$/i.test(heroBgImage)) link.type = "image/webp";
      document.head.appendChild(link);
      return () => { link.remove(); };
    }, [heroBgImage]);

    // Hide scroll hint after first scroll
    React.useEffect(() => {
      const onScroll = () => {
        const y = window.scrollY;
        if (y > 50) setShowScrollHint(false);
        setAtTop(y < 40);
      };
      onScroll();
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
      if (!heroVideo || isMobile) return;
      const el = videoRef.current;
      if (!el) return;

      // Pick a viewport-appropriate variant if base file follows the -720/-480 convention.
      // E.g. heroVideo="/hero-interior-720.mp4" → on mobile we swap to -480.mp4
      const isMobileVw = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
      let chosen = heroVideo;
      if (isMobileVw && /-720\.mp4$/i.test(heroVideo)) {
        chosen = heroVideo.replace(/-720\.mp4$/i, "-480.mp4");
      }

      // Prefer AV1 if browser supports it (~40% smaller than H.264).
      // Convention: alongside foo.mp4 we ship foo.av1.mp4
      const av1Supported =
        el.canPlayType('video/mp4; codecs="av01.0.05M.08"') !== "" ||
        el.canPlayType('video/mp4; codecs="av01"') !== "";
      if (av1Supported && /\.mp4$/i.test(chosen) && !/\.av1\.mp4$/i.test(chosen)) {
        chosen = chosen.replace(/\.mp4$/i, ".av1.mp4");
      }

      // Perf tracking
      const t0 = performance.now();
      perfStartRef.current = t0;
      setPerfMetrics({ src: chosen, mountTime: 0 });

      const mark = (key: keyof VideoPerfMetrics) => {
        const dt = performance.now() - t0;
        setPerfMetrics((p) => ({ ...p, [key]: dt }));
      };

      const onLoadStart = () => mark("loadStart");
      const onProgress = () => setPerfMetrics((p) => p.firstByte === undefined ? { ...p, firstByte: performance.now() - t0 } : p);
      const onLoadedMetadata = () => mark("loadedMetadata");
      const onLoadedData = () => mark("loadedData");
      const onCanPlay = () => mark("canPlay");
      const onPlaying = () => {
        const dt = performance.now() - t0;
        setPerfMetrics((p) => p.firstPlay !== undefined ? p : { ...p, firstPlay: dt });
        setTimeout(() => {
          const entries = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
          const match = entries.find((e) => e.name.includes(chosen));
          if (match) {
            setPerfMetrics((p) => ({
              ...p,
              fileSizeKB: (match.transferSize || match.encodedBodySize) / 1024,
              durationMs: match.duration,
            }));
          }
        }, 100);
      };

      // Fallback: if AV1 file fails (404 or decode error), retry with original MP4
      const onError = () => {
        if (/\.av1\.mp4$/i.test(chosen)) {
          const fallback = chosen.replace(/\.av1\.mp4$/i, ".mp4");
          chosen = fallback;
          el.src = fallback;
          el.load();
        }
      };

      el.addEventListener("loadstart", onLoadStart);
      el.addEventListener("progress", onProgress);
      el.addEventListener("loadedmetadata", onLoadedMetadata);
      el.addEventListener("loadeddata", onLoadedData);
      el.addEventListener("canplay", onCanPlay);
      el.addEventListener("playing", onPlaying);
      el.addEventListener("error", onError);

      if (el.src !== chosen) {
        el.src = chosen;
        el.load();
      }

      // iOS Safari: autoplay attribute alone is not always enough when src is set via JS.
      // We must call play() and silently catch the rejection (e.g. Low Power Mode).
      // If play() rejects, the poster <img> below stays visible — no black flicker.
      const tryPlay = () => {
        const p = el.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => { /* poster fallback handles it */ });
        }
      };
      tryPlay();
      el.addEventListener("canplay", tryPlay, { once: true });

      return () => {
        el.removeEventListener("loadstart", onLoadStart);
        el.removeEventListener("progress", onProgress);
        el.removeEventListener("loadedmetadata", onLoadedMetadata);
        el.removeEventListener("loadeddata", onLoadedData);
        el.removeEventListener("canplay", onCanPlay);
        el.removeEventListener("canplay", tryPlay);
        el.removeEventListener("playing", onPlaying);
        el.removeEventListener("error", onError);
      };
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
      const setRate = () => { try { el.playbackRate = 0.75; } catch {} };
      el.addEventListener("playing", onPlaying);
      el.addEventListener("loadeddata", setRate);
      setRate();
      return () => {
        el.removeEventListener("playing", onPlaying);
        el.removeEventListener("loadeddata", setRate);
      };
    }, []);

    /* Adaptive overlay strength based on the brightness of the heroBgImage's
     * left text region (where H1/subtitle/CTAs sit). 0 = very dark image,
     * 1 = very bright image. Defaults to 0.5 so SSR/first paint still gets
     * a safe overlay. Sampled once per image, in an offscreen canvas. */
    const [bgBrightness, setBgBrightness] = React.useState<number>(0.5);
    React.useEffect(() => {
      if (!heroBgImage) return;
      let cancelled = false;
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.src = heroBgImage;
      img.onload = () => {
        if (cancelled) return;
        try {
          const w = 32, h = 18; // tiny sample, cheap
          const c = document.createElement("canvas");
          c.width = w; c.height = h;
          const ctx = c.getContext("2d", { willReadFrequently: true });
          if (!ctx) return;
          ctx.drawImage(img, 0, 0, w, h);
          // Sample left half of the image where text sits
          const data = ctx.getImageData(0, 0, Math.floor(w * 0.55), h).data;
          let sum = 0, n = 0;
          for (let i = 0; i < data.length; i += 4) {
            // Rec. 709 luma
            sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
            n++;
          }
          const avg = (sum / n) / 255; // 0..1
          setBgBrightness(avg);
        } catch { /* CORS or decode failure → keep default */ }
      };
      return () => { cancelled = true; };
    }, [heroBgImage]);

    /* Map brightness → overlay alphas. Floors guarantee minimum protection on
     * dark images; ceilings cap saturation so darks never look muddy. */
    const lerp = (a: number, b: number, t: number) => a + (b - a) * Math.max(0, Math.min(1, t));
    const t = bgBrightness; // 0 dark .. 1 bright
    // Baseline diagonal tint
    const baseStart = lerp(0.55, 0.88, t);
    const baseMid   = lerp(0.30, 0.60, t);
    const baseEnd   = lerp(0.12, 0.30, t);
    // Desktop left text-protect (90deg)
    const leftStart = lerp(0.50, 0.82, t);
    const leftMid   = lerp(0.35, 0.65, t);
    const leftSoft  = lerp(0.15, 0.38, t);
    // Mobile vertical text-protect
    const mTop      = lerp(0.40, 0.70, t);
    const mMid      = lerp(0.28, 0.55, t);
    const mBot      = lerp(0.50, 0.78, t);
    // Image filter: pull bright images down a touch more
    const imgBrightness = lerp(0.92, 0.72, t);
    const imgSaturate   = lerp(0.90, 0.78, t);

    /* Compact hero for inner pages */
    if (compact || (!agentImage && !heroVideo && !heroBgImage)) {
      return (
      <section ref={combinedRef} data-hero-dark className="relative overflow-hidden" style={{ background: "var(--ink)" }}>
        {heroBgImage && (
             <>
               <div className="absolute inset-0 overflow-hidden">
                 <img
                   src={heroBgImage}
                   alt=""
                   role="presentation"
                   className="h-full w-full object-cover"
                   style={{ filter: `brightness(${imgBrightness}) saturate(${imgSaturate})`, transition: "filter 0.4s ease" }}
                   width={1920}
                   height={720}
                   sizes="100vw"
                   loading="eager"
                   decoding="async"
                   {...{ fetchpriority: "high" } as any}
                   onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                 />
               </div>
             <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(23,48,59,${baseStart}) 0%, rgba(23,48,59,${baseMid}) 60%, rgba(23,48,59,${baseEnd}) 100%)`, transition: "background 0.4s ease" }} />
              {/* Left-side text-protect overlay (desktop) — adapts to image brightness */}
              <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true" style={{ background: `linear-gradient(90deg, rgba(23,48,59,${leftStart}) 0%, rgba(23,48,59,${leftMid}) 35%, rgba(23,48,59,${leftSoft}) 55%, transparent 70%)`, transition: "background 0.4s ease" }} />
              {/* Mobile text-protect overlay — full-width darken since text spans the column */}
              <div className="pointer-events-none absolute inset-0 md:hidden" aria-hidden="true" style={{ background: `linear-gradient(180deg, rgba(23,48,59,${mTop}) 0%, rgba(23,48,59,${mMid}) 50%, rgba(23,48,59,${mBot}) 100%)`, transition: "background 0.4s ease" }} />
            </>
          )}
          <div className="section-container relative z-20 py-8 sm:py-20 md:py-24">
            <div className="max-w-[40rem]">
              {overline && <p className="label-overline mb-3 sm:mb-6" style={{ color: "var(--gold)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>{overline}</p>}
              <h1 style={{ color: "#F7F4EE", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>{title}</h1>
              <p className="mt-3 hidden max-w-[28rem] text-[1rem] font-light leading-[1.8] sm:mt-6 sm:block" style={{ color: "rgba(255,255,255,.92)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>{subtitle}</p>
              <p className="mt-3 block max-w-[28rem] text-[0.95rem] font-light leading-[1.7] sm:hidden" style={{ color: "rgba(255,255,255,.92)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>{subtitle}</p>
              {(primaryCta || secondaryCta) && (
                <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                  {primaryCta && (
                    <Button size="xl" variant="accent" className="tracking-[0.02em] text-[0.85rem] font-semibold transition-transform duration-200 ease-out hover:scale-[1.02]" asChild onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}>
                      <Link to={primaryCta.href}>{primaryCta.label} →</Link>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Link to={secondaryCta.href} className="inline-flex items-center text-[0.85rem] font-medium transition-all duration-200" style={{ color: "rgba(255,255,255,.95)", borderBottom: "1px solid rgba(255,255,255,.6)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }} onClick={() => trackCTAClick(secondaryCta.label, "hero-secondary")}>{secondaryCta.label}</Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      );
    }

    return (
      <>
      <section
        ref={combinedRef}
        data-hero-dark
        className="relative overflow-hidden w-full"
        style={{
          minHeight: "100svh",
          backgroundColor: "#17303B",
        }}
      >
        {/* Background image — when no video is provided */}
        {heroBgImage && !heroVideo && (
          <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }} aria-hidden="true">
            <img
              src={heroBgImage}
              alt=""
              role="presentation"
              className="hero-bg-image h-full w-full object-cover"
              style={{
                filter: atTop ? "none" : "brightness(0.85) saturate(0.85)",
                transition: "filter 0.35s ease-out",
              }}
              width={1920}
              height={1080}
              sizes="100vw"
              loading="eager"
              decoding="async"
              {...{ fetchpriority: "high" } as any}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        )}

        {/* Poster image — always visible UNDER the video. Acts as the LCP candidate
            on iOS Safari (where <video poster> is unreliable) and prevents any black
            flicker before the video reaches its first frame. */}
        {heroVideo && heroVideoPoster && (
          <img
            src={heroVideoPoster}
            alt=""
            role="presentation"
            aria-hidden="true"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ zIndex: 1 }}
            loading="eager"
            decoding="async"
            {...{ fetchpriority: "high" } as any}
          />
        )}

        {/* Video background — fades in over the poster once the first frame plays.
            preload="metadata" on mobile to protect LCP; "auto" on desktop. */}
        {renderVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            {...{ "webkit-playsinline": "true", "x-webkit-airplay": "deny" } as any}
            disablePictureInPicture
            disableRemotePlayback
            poster={heroVideoPoster}
            preload={typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches ? "metadata" : "auto"}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: videoReady ? 1 : 0, transition: "opacity 0.6s ease", zIndex: 2 }}
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

        {/* Main gradient overlay — desktop. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] hidden md:block"
          style={{
            background:
              "linear-gradient(135deg, rgba(23,48,59,0.85) 0%, rgba(23,48,59,0.55) 50%, rgba(0,0,0,0.15) 100%)",
            opacity: atTop ? 0 : 1,
            transition: "opacity 0.35s ease-out",
          }}
        />

        {/* Extra left-half text-protect overlay — desktop, hero-image pages only.
            Guarantees subtitle + secondary CTA legibility over bright photo zones
            (sky, sunlit paper, windows). Has zero effect on the home/video hero. */}
        {heroBgImage && !heroVideo && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[3] hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,48,59,0.78) 0%, rgba(23,48,59,0.62) 35%, rgba(23,48,59,0.30) 55%, transparent 70%)",
              opacity: atTop ? 0 : 1,
              transition: "opacity 0.35s ease-out",
            }}
          />
        )}

        {/* Main gradient overlay — mobile (atmospheric base, z-2) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(23,48,59,0.45) 0%, rgba(23,48,59,0.30) 50%, rgba(23,48,59,0.55) 100%)",
            opacity: atTop ? 0 : 1,
            transition: "opacity 0.35s ease-out",
          }}
        />

        {/* Left-side text-protect gradient — mobile only (z-3, anchor-corner composition) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3] md:hidden"
          style={{
            background:
              "linear-gradient(95deg, rgba(23,48,59,0.95) 0%, rgba(23,48,59,0.88) 30%, rgba(23,48,59,0.55) 48%, rgba(23,48,59,0.18) 65%, transparent 80%)",
            opacity: atTop ? 0 : 1,
            transition: "opacity 0.35s ease-out",
          }}
        />

        {/* ─── TEXT CONTENT ─── (z-20 on mobile so it sits above portrait+gradients; desktop unchanged) */}
        <div
          className="relative z-[20] flex flex-col"
          style={{ minHeight: "100svh" }}
        >
          <div
            className="w-[58%] pt-[90px] pb-[90px] pl-[18px] pr-[18px] md:w-auto md:max-w-[50%] md:pt-[90px] md:pb-0 md:pl-[20px] md:pr-[20px]"
          >
            <div className="md:pt-[30px] md:pl-[3%] md:pr-0">
              {(cities && cities.length > 0) ? (
                <>
                <p
                  className="hero-eyebrow hero-fade-in mb-3 sm:mb-6 uppercase font-semibold hidden md:block"
                  style={{
                    color: "#A88A5A",
                    fontFamily: "var(--sans)",
                    fontSize: "max(.6rem, .62rem)",
                    letterSpacing: ".22em",
                    opacity: 0.8,
                    textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {lang === "fr"
                    ? "Courtier immobilier · Gatineau · Aylmer · Hull · Outaouais"
                    : "Real estate broker · Gatineau · Aylmer · Hull · Outaouais"}
                </p>
                <h1
                  className="hero-h1-reveal"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                    color: "#F7F4EE",
                    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                    margin: 0,
                    textWrap: "balance",
                    animationDelay: "0.20s",
                  }}
                >
                  {title.split(/(Outaouais)/).map((part, i) =>
                    part === "Outaouais" ? (
                      <em key={i} style={{ fontStyle: "italic", fontWeight: 300 }}>{part}</em>
                    ) : (
                      <React.Fragment key={i}>{part}</React.Fragment>
                    )
                  )}
                </h1>
                </>
              ) : (
                <>
                  {overline && (
                    <p
                      className="hero-fade-in mb-3 sm:mb-6 uppercase font-semibold"
                      style={{
                        color: "var(--gold)",
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
                    className="hero-fade-in"
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 400,
                      fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.015em",
                      color: "#F7F4EE",
                      textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                      margin: 0,
                      textWrap: "balance",
                      animationDelay: "0.20s",
                    }}
                  >
                    {title}
                  </h1>
                </>
              )}

              <p
                className="hero-fade-in mt-4 sm:mt-6 block md:hidden max-w-[460px] font-light"
                style={{
                  animationDelay: "0.32s",
                  color: "#FFFFFF",
                  fontFamily: "var(--sans)",
                  fontWeight: 400,
                  fontSize: ".95rem",
                  lineHeight: 1.75,
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {subtitleShort ?? subtitle}
              </p>
              <p
                className="hero-fade-in mt-4 sm:mt-6 hidden md:block max-w-[460px] font-light"
                style={{
                  animationDelay: "0.32s",
                  color: "#FFFFFF",
                  fontFamily: "var(--sans)",
                  fontWeight: 400,
                  fontSize: ".95rem",
                  lineHeight: 1.75,
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {subtitle}
              </p>

              {(primaryCta || secondaryCta) && (
                <div
                  className="hero-fade-in mt-6 sm:mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
                  style={{ animationDelay: "0.44s" }}
                >

                  {primaryCta && (
                    <Link
                      to={primaryCta.href}
                      className="hero-cta-btn inline-flex items-center justify-center gap-2 w-full max-w-[360px] sm:w-auto sm:max-w-none py-4 px-6 sm:py-3.5 sm:px-8 tracking-normal transition-opacity duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A88A5A]/50"
                      style={{
                        background: "#A88A5A",
                        color: "#FFFFFF",
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: ".95rem",
                        borderRadius: 0,
                        boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
                      }}
                      onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}
                    >
                      {primaryCta.label}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  )}
                  {secondaryCta && (
                    <Link
                      to={secondaryCta.href}
                      className="inline-flex items-center self-start sm:self-auto text-center transition-all duration-200 hover:opacity-100"
                      style={{
                        color: "rgba(255,255,255,.92)",
                        borderBottom: "1px solid rgba(255,255,255,.55)",
                        paddingBottom: "2px",
                        fontSize: ".85rem",
                        fontWeight: 500,
                        letterSpacing: ".02em",
                        textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                      }}
                      onClick={() => trackCTAClick(secondaryCta.label, "hero-secondary")}
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}

              {/* Trust strip — under CTAs, mobile-friendly with flex-wrap */}
              <div
                className="hero-fade-in mt-8 md:mt-6 flex md:hidden flex-wrap items-center justify-start gap-x-2 md:gap-x-3 gap-y-2 uppercase font-medium tracking-[0.1em] md:tracking-[0.15em] text-[10px] md:text-[11px]"
                style={{
                  animationDelay: "0.5s",
                  color: "rgba(168, 138, 90, 0.7)",
                  fontFamily: "var(--sans)",
                }}
              >
                <span className="hidden min-[381px]:inline">
                  {lang === "fr" ? "9 ans" : "9 years"}
                </span>
                <span aria-hidden="true" className="hidden min-[381px]:inline">·</span>
                <span>{lang === "fr" ? "Hall of Fame RE/MAX" : "RE/MAX Hall of Fame"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── IMAGE B: Yanis portrait (Layer 4) ───
            Wrapped in <picture> so the browser picks AVIF when supported
            (Chrome/Edge 85+, Firefox 93+, Safari 16+) — typically 30-40% smaller
            than WebP at equivalent quality. Falls back to WebP transparently. */}
        {agentImage && (
          <>
            {/* Desktop portrait — wrapped in <picture> with media="(min-width: 768px)"
                on every <source> so mobile browsers SKIP this download entirely.
                Note: Tailwind's `hidden md:block` only hides via CSS — the browser
                still pre-fetches all <img> in the DOM regardless. The media query
                on the <source> is the only reliable way to gate the network request. */}
            <picture className="hidden md:block">
              {agentImageAvif && (
                <source
                  type="image/avif"
                  srcSet={agentImageAvif}
                  media="(min-width: 768px)"
                />
              )}
              <source
                type="image/webp"
                srcSet={agentImage}
                media="(min-width: 768px)"
              />
              <img
                src={agentImage}
                alt={lang === "en" ? "Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais" : "Yanis Gauthier-Sigeris, courtier immobilier à Gatineau en Outaouais"}
                width={640}
                height={960}
                className="hero-portrait-masked hidden md:block absolute object-contain object-bottom pointer-events-none select-none"
                style={{
                  bottom: 0,
                  right: "5%",
                  height: "92%",
                  width: "auto",
                  zIndex: 4,
                  filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.35))",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 45%, black 55%, rgba(0,0,0,0.6) 78%, transparent 96%)",
                  maskImage: "radial-gradient(ellipse 70% 80% at 50% 45%, black 55%, rgba(0,0,0,0.6) 78%, transparent 96%)",
                }}
                loading="eager"
                decoding="auto"
                {...{ fetchpriority: "high" } as any}
                /* On mobile, no <source> matches and the browser would normally
                   download this `src` (29 KB nobg.webp) as the picture fallback,
                   wasting bandwidth that should go to the LCP portrait. We use
                   srcSet with a tiny transparent 1×1 PNG at 1w + the real WebP
                   at 768w, with sizes telling the browser to pick the 1px placeholder
                   below 768 CSS px and the real image at/above 768. */
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII= 1w, ${agentImage} 768w`}
                sizes="(min-width: 768px) 768px, 1px"
              />
            </picture>

            {/* Mobile portrait — plain <picture><img> for fastest LCP (no framer-motion delay).
                Uses DPR descriptors (1x/2x/3x) so the browser picks EXACTLY the
                same tier that App.tsx preloads — no double-download.
                  - 1x phones (low-end Android)        → sm  (~7  KB AVIF)
                  - 2x retina (iPhone 12/13/14)         → md  (~12 KB AVIF)
                  - 3x retina (iPhone Pro Max)          → full(~17 KB AVIF) */}
            <picture className="md:hidden">
              {(agentImageSmAvif || agentImageMdAvif || agentImageAvif) && (
                <source
                  type="image/avif"
                  media="(max-width: 767px)"
                  srcSet={[
                    agentImageSmAvif && `${agentImageSmAvif} 1x`,
                    agentImageMdAvif && `${agentImageMdAvif} 2x`,
                    agentImageAvif && `${agentImageAvif} 3x`,
                  ].filter(Boolean).join(", ")}
                />
              )}
              <source
                type="image/webp"
                media="(max-width: 767px)"
                srcSet={[
                  agentImageSm && `${agentImageSm} 1x`,
                  agentImageMd && `${agentImageMd} 2x`,
                  agentImage && `${agentImage} 3x`,
                ].filter(Boolean).join(", ")}
              />
              <img
                src={agentImageSm || agentImage}
                /* On desktop, no <source> matches and the browser would download
                   `src` (sm.webp ~11 KB) as the picture fallback. We pin the
                   placeholder above 768 CSS px and the real WebP below. */
                srcSet={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII= 1w, ${agentImageSm || agentImage} 320w, ${agentImageMd || agentImage} 480w, ${agentImage} 640w`}
                sizes="(max-width: 767px) 50vw, 1px"
                alt={lang === "en" ? "Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais" : "Yanis Gauthier-Sigeris, courtier immobilier à Gatineau en Outaouais"}
                width={320}
                height={480}
                className="md:hidden absolute pointer-events-none select-none"
                style={{
                  bottom: 0,
                  right: 0,
                  width: "48vw",
                  height: "auto",
                  maxHeight: "75%",
                  objectFit: "contain",
                  objectPosition: "bottom right",
                  zIndex: 4,
                  filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
                }}
                loading="eager"
                decoding="async"
                {...{ fetchpriority: "high" } as any}
              />
            </picture>
          </>
        )}

        {/* Bottom gradient — mobile only, improves readability of credibility bar + NAP */}
        <div
          aria-hidden="true"
          className="md:hidden pointer-events-none absolute left-0 bottom-0 w-full"
          style={{
            height: 180,
            zIndex: 2,
            background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* ─── Scroll chevron ─── */}
        <ScrollChevron lang={lang} />

        {/* ─── Credibility bar (Layer 5) ─── */}
        <div
          className="hero-fade-in hidden md:block absolute left-0 z-[5] w-[58%] pl-[18px] pr-4 text-left pointer-events-auto md:w-full md:text-center md:bg-transparent md:backdrop-blur-0 md:!mx-0 md:!p-0 md:!rounded-none"
          style={{
            animationDelay: "0.5s",
            bottom: "32px",
            color: "rgba(255,255,255,0.62)",
            fontSize: "clamp(0.7rem, 1.6vw, 0.85rem)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            fontFamily: "var(--sans)",
          }}
        >
          <div
            className="whitespace-normal [word-break:keep-all] md:!bg-transparent md:!backdrop-blur-0 md:!p-0 md:!mx-0 md:!rounded-none lg:whitespace-nowrap lg:[word-break:normal]"
            style={{
              background: "rgba(23,48,59,0.6)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              padding: "12px 16px",
              borderRadius: "8px",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {/* Desktop credibility (hidden on mobile) — inline JSX so text is editable via Visual Edits */}
            <div className="hidden md:block">
              {lang === "en" ? (
                <>
                  <span className="pointer-events-auto inline-flex items-center">
                    <IconCalendar aria-hidden="true" className="w-[14px] h-[14px] sm:w-4 sm:h-4 mr-1.5" style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span>~9 years of experience</span>
                  </span>
                  <span className="mx-2 opacity-50" aria-hidden="true">·</span>
                  <span className="pointer-events-auto inline-flex items-center">
                    <IconHome aria-hidden="true" className="w-[14px] h-[14px] sm:w-4 sm:h-4 mr-1.5" style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span>300+ transactions</span>
                  </span>
                  <span className="mx-2 opacity-50" aria-hidden="true">·</span>
                  <a href="#avis" className="pointer-events-auto hover:underline inline-flex items-center" style={{ color: "inherit", textDecoration: "none" }}>
                    <IconStar aria-hidden="true" className="w-[14px] h-[14px] sm:w-4 sm:h-4 mr-1.5" style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span>5★ Google & Facebook</span>
                  </a>
                  <span className="mx-2 opacity-50" aria-hidden="true">·</span>
                  <span className="pointer-events-auto inline-flex items-center">
                    <IconTrophy aria-hidden="true" className="w-[14px] h-[14px] sm:w-4 sm:h-4 mr-1.5" style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span>RE/MAX Hall of Fame</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="pointer-events-auto inline-flex items-center">
                    <IconCalendar aria-hidden="true" className="w-[14px] h-[14px] sm:w-4 sm:h-4 mr-1.5" style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span>~9 ans d'expérience</span>
                  </span>
                  <span className="mx-2 opacity-50" aria-hidden="true">·</span>
                  <span className="pointer-events-auto inline-flex items-center">
                    <IconHome aria-hidden="true" className="w-[14px] h-[14px] sm:w-4 sm:h-4 mr-1.5" style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span>300+ transactions</span>
                  </span>
                  <span className="mx-2 opacity-50" aria-hidden="true">·</span>
                  <a href="#avis" className="pointer-events-auto hover:underline inline-flex items-center" style={{ color: "inherit", textDecoration: "none" }}>
                    <IconStar aria-hidden="true" className="w-[14px] h-[14px] sm:w-4 sm:h-4 mr-1.5" style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span>5★ Google & Facebook</span>
                  </a>
                  <span className="mx-2 opacity-50" aria-hidden="true">·</span>
                  <span className="pointer-events-auto inline-flex items-center">
                    <IconTrophy aria-hidden="true" className="w-[14px] h-[14px] sm:w-4 sm:h-4 mr-1.5" style={{ color: "rgba(255,255,255,0.7)" }} />
                    <span>Hall of Fame RE/MAX</span>
                  </span>
                </>
              )}
            </div>
            {/* Mobile shortened credibility — inline JSX so text is editable via Visual Edits */}
            <div className="md:hidden">
              {lang === "en" ? (
                <span>~9 yrs | 5★ Google | Hall of Fame</span>
              ) : (
                <span>~9 ans | 5★ Google | Hall of Fame</span>
              )}
            </div>

          </div>
        </div>

        {/* ─── NAP (Layer 5) ─── */}
        <address
          className="hero-fade-in hidden md:block absolute left-0 z-[25] w-[58%] pl-[18px] pr-4 text-left not-italic pointer-events-auto md:w-full md:text-center md:!pl-0 md:!pr-0"
          style={{
            animationDelay: "0.5s",
            bottom: "8px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(0.65rem, 1.4vw, 0.7rem)",
            fontStyle: "normal",
            textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            fontFamily: "var(--sans)",
          }}
        >
          <span
            className="inline-block whitespace-normal [word-break:keep-all] md:!bg-transparent md:!backdrop-blur-0 md:!px-0 md:!py-0 md:!rounded-none md:whitespace-nowrap md:[word-break:normal]"
            style={{
              background: "rgba(23,48,59,0.6)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              padding: "6px 12px",
              borderRadius: "6px",
              lineHeight: 1.5,
            }}
          >
            <span>{heroContact.city}</span>
            {" | "}
            <a href={heroContact.phoneHref} style={{ color: "inherit" }} className="md:hover:text-white transition-colors relative z-10 pointer-events-auto">
              {heroContact.phoneDisplay}
            </a>
            {" | "}
            <a
              href={heroContact.emailHref}
              className="[overflow-wrap:anywhere] md:[overflow-wrap:normal] md:underline md:underline-offset-2 md:decoration-white/30 md:hover:decoration-white md:hover:text-white transition-colors cursor-pointer relative z-10 pointer-events-auto"
              style={{ color: "inherit" }}
              aria-label={`${lang === "en" ? "Email" : "Courriel"} ${heroContact.emailDisplay}`}
            >
              {heroContact.emailDisplay}
            </a>
          </span>
        </address>
        {heroVideo && <VideoPerfOverlay metrics={perfMetrics} />}
      </section>
      <section
        className="md:hidden w-full"
        style={{ background: "#0F2129", borderTop: "1px solid rgba(168,138,90,0.22)", padding: "16px 18px 18px", fontFamily: "var(--sans)" }}
        aria-label={lang === "en" ? "Credentials and contact" : "Crédibilité et contact"}
      >
        <div>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#A88A5A", fontWeight: 600, margin: "0 0 4px" }}>
            Contact
          </p>
          <address style={{ fontSize: "0.78rem", lineHeight: 1.55, color: "rgba(247,244,238,0.85)", fontStyle: "normal", margin: 0 }}>
            <span>{heroContact.city}</span>
            <span style={{ margin: "0 6px", opacity: 0.4 }}>·</span>
            <a href={heroContact.phoneHref} style={{ color: "inherit", textDecoration: "none" }}>{heroContact.phoneDisplay}</a>
            <br />
            <a href={heroContact.emailHref} style={{ color: "inherit", textDecoration: "none" }} className="[overflow-wrap:anywhere]">
              {heroContact.emailDisplay}
            </a>
          </address>
        </div>
      </section>
      </>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
