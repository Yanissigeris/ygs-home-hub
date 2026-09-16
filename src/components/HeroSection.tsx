import * as React from "react";
import { canonicalPath } from "@/lib/url-utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { trackCTAClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHeroPicture, type HeroPicture } from "@/lib/hero-pictures";

import { VideoPerfOverlay, type VideoPerfMetrics } from "@/components/VideoPerfOverlay";


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
  /** Optional supporting headline rendered between the H1 and the subtitle. Not a heading (keeps one H1 per page). */
  headline?: string;
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
  /** High-res variant for desktop/tablet retina (≥768px @ 2x DPR) */
  agentImageLg?: string;
  agentImageLgAvif?: string;
  agentName?: string;
  heroBgImage?: string;
  /** Mobile-optimized AVIF variant of the hero background. Used in <picture>
   *  source with media="(max-width: 767px)" so phones download a tiny file. */
  heroBgImageMobile?: string;
  /** Desktop AVIF variant of the hero background. Same source byte as the
   *  <link rel="preload" media="(min-width: 768px)"> emitted by Vite. */
  heroBgImageAvif?: string;
  /** Responsive AVIF/WebP srcsets (see src/lib/hero-pictures.ts). When omitted,
   *  HeroSection looks `heroBgImage` up in HERO_PICTURES so the 83 pages that
   *  pass a plain import get responsive sources with no page edit. */
  heroBgPicture?: HeroPicture;
  heroVideo?: string;
  heroVideoPoster?: string;
  hideCredentialsStrip?: boolean;
  hideRecognitionCard?: boolean;
  /** Show the 3-stat proof bar at the bottom of the hero. Home page only. */
  showProofBar?: boolean;
  /** Add a diagonal petrol gradient overlay over the hero background image. Defaults to true. Set to false on the homepage. */
  petrolGradient?: boolean;
}

/* Stats data */
const statsFr = [
  { value: "~9 ans", label: "d'expérience" },
  { value: "5/5", label: "Google + Facebook" },
  { value: "Hall of Fame 2024", label: "RE/MAX, LLC" },
];
const statsEn = [
  { value: "~9 yrs", label: "experience" },
  { value: "5/5", label: "Google + Facebook" },
  { value: "Hall of Fame 2024", label: "RE/MAX, LLC" },
];


const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      overline,
      cities,
      title,
      headline,
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
      agentImageLg,
      agentImageLgAvif,
      agentName,
      heroBgImage,
      heroBgImageMobile,
      heroBgImageAvif,
      heroBgPicture,
      heroVideo,
      heroVideoPoster,
      hideCredentialsStrip,
      hideRecognitionCard,
      showProofBar = false,
      petrolGradient = true,
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
      type IdleWindow = Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      const w = window as IdleWindow;
      const ric = w.requestIdleCallback;
      const trigger = () => setVideoDeferReady(true);
      const id = ric ? ric(trigger, { timeout: 3000 }) : window.setTimeout(trigger, 1500);
      return () => {
        if (ric && w.cancelIdleCallback) w.cancelIdleCallback(id);
        else clearTimeout(id);
      };
    }, [heroVideo, isMobile]);
    const renderVideo = !!heroVideo && !isMobile && videoDeferReady;
   const [showScrollHint, setShowScrollHint] = React.useState(true);
   const [atTop, setAtTop] = React.useState(true);
    const [perfMetrics, setPerfMetrics] = React.useState<VideoPerfMetrics>({ src: heroVideo || "", mountTime: 0 });
    const perfStartRef = React.useRef<number>(0);
    const lang = useLanguage();
    const responsiveHero = heroBgPicture ?? getHeroPicture(heroBgImage);
    const stats = lang === "en" ? statsEn : statsFr;
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      },
      [ref]
    );

    // Hero background preload is emitted at build time by htmlOptimizePlugin
    // (vite.config.ts) as an AVIF link with fetchpriority=high. No JS preload
    // here — a duplicate WebP fetch would compete with the portrait LCP.

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
      const setRate = () => { try { el.playbackRate = 0.75; } catch { /* ignore */ } };
      el.addEventListener("playing", onPlaying);
      el.addEventListener("loadeddata", setRate);
      setRate();
      return () => {
        el.removeEventListener("playing", onPlaying);
        el.removeEventListener("loadeddata", setRate);
      };
    }, []);

    /* Static overlay alphas — previously derived from a runtime canvas sample
     * of heroBgImage brightness. The sample forced a second decode of the
     * LCP-candidate image and ran getImageData on the main thread before LCP
     * fired. Values below match the t=0.5 midpoint the sampler used to pick. */
    const baseStart = 0.715;
    const baseMid   = 0.45;
    const baseEnd   = 0.21;
    const leftStart = 0.66;
    const leftMid   = 0.50;
    const leftSoft  = 0.265;
    const mTop      = 0.55;
    const mMid      = 0.415;
    const mBot      = 0.64;
    const imgBrightness = 0.82;
    const imgSaturate   = 0.84;

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
                   {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
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
              {/* overline retiré : le H1 arrive en premier (cohérence accueil) */}
              <h1 style={{ color: "var(--cream)", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>{title}</h1>
              <p className="mt-3 hidden max-w-[28rem] text-[1rem] font-light leading-[1.8] sm:mt-6 sm:block" style={{ color: "rgba(255,255,255,.92)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>{subtitle}</p>
              <p className="mt-3 block max-w-[28rem] text-[0.95rem] font-light leading-[1.7] sm:hidden" style={{ color: "rgba(255,255,255,.92)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>{subtitle}</p>
              {(primaryCta || secondaryCta) && (
                <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                  {primaryCta && (
                    <Button size="xl" variant="accent" className="tracking-[0.02em] text-[0.85rem] font-semibold transition-transform duration-200 ease-out hover:scale-[1.02]" asChild onClick={() => trackCTAClick(primaryCta.label, "hero-primary")}>
                      <Link to={canonicalPath(primaryCta.href)}>{primaryCta.label} →</Link>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Link to={canonicalPath(secondaryCta.href)} className="inline-flex items-center text-[0.85rem] font-medium transition-all duration-200" style={{ color: "rgba(255,255,255,.95)", borderBottom: "1px solid rgba(255,255,255,.6)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }} onClick={() => trackCTAClick(secondaryCta.label, "hero-secondary")}>{secondaryCta.label}</Link>
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
          backgroundColor: "var(--ink)",
        }}
      >
        {/* Background image — when no video is provided */}
        {heroBgImage && !heroVideo && (
          <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }} aria-hidden="true">
            <picture>
              {heroBgImageMobile && (
                <source
                  type="image/avif"
                  media="(max-width: 767px)"
                  srcSet={heroBgImageMobile}
                />
              )}
              {heroBgImageAvif && (
                <source
                  type="image/avif"
                  media="(min-width: 768px)"
                  srcSet={heroBgImageAvif}
                />
              )}
              {/* Width-based sources (768/1280/1920) for every other hero.
                  Explicit heroBgImageMobile/Avif props above win when present. */}
              {!heroBgImageMobile && !heroBgImageAvif && responsiveHero && (
                <source type="image/avif" srcSet={responsiveHero.avif} sizes="100vw" />
              )}
              {!heroBgImageMobile && !heroBgImageAvif && responsiveHero && (
                <source type="image/webp" srcSet={responsiveHero.webp} sizes="100vw" />
              )}
              <img
                src={heroBgImage}
                alt=""
                role="presentation"
                className="hero-bg-image h-full w-full object-cover"
                style={{ transition: "filter 0.35s ease-out" }}
                width={1920}
                height={1080}
                sizes="100vw"
                loading="eager"
                decoding="async"
                {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
              />
            </picture>
          </div>
        )}

        {/* Petrol gradient overlay — diagonal ink veil over the hero image (opt-out via petrolGradient={false}). */}
        {petrolGradient && heroBgImage && !heroVideo && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              zIndex: 2,
              background:
                "linear-gradient(135deg, hsl(200 42% 16% / 0.78) 0%, hsl(200 42% 16% / 0.62) 55%, hsl(200 42% 16% / 0.85) 100%)",
            }}
          />
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
            {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
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
            {...({ "webkit-playsinline": "true", "x-webkit-airplay": "deny" } as React.VideoHTMLAttributes<HTMLVideoElement>)}
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
          className="relative z-[20] flex flex-col pointer-events-none"
          style={{ minHeight: "100svh" }}
        >
          <div
            className={`pointer-events-auto ${headline ? "w-[92%]" : "w-[58%]"} pt-[90px] pb-[90px] pl-[18px] pr-[18px] md:w-auto md:max-w-[50%] md:pt-[90px] md:pb-0 md:pl-[20px] md:pr-[20px]`}
          >
            <div className="md:pt-[30px] md:pl-[3%] md:pr-0">
              {(cities && cities.length > 0) ? (
                <>
                <p
                  className="hero-eyebrow hero-fade-in mb-5 sm:mb-8 uppercase font-semibold hidden md:block"
                  style={{
                    color: "var(--gold2)",
                    fontFamily: "var(--sans)",
                    fontSize: ".72rem",
                    letterSpacing: ".22em",
                    opacity: 1,
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
                    color: "var(--cream)",
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
                  {/* overline retiré : le H1 arrive en premier (cohérence accueil) */}

                  <h1
                    className="hero-fade-in"
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 400,
                      fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.015em",
                      color: "var(--cream)",
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

              {headline && (
                <p
                  className="hero-fade-in mt-3 sm:mt-4 max-w-[520px]"
                  style={{
                    animationDelay: "0.26s",
                    color: "var(--cream)",
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "clamp(1.15rem, 2vw, 1.6rem)",
                    lineHeight: 1.35,
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  }}
                >
                  {headline}
                </p>
              )}

              <p
                className={`hero-fade-in ${headline ? (subtitleShort ? "mt-2.5 sm:mt-4" : "mt-3 sm:mt-4") : "mt-4 sm:mt-6"} block md:hidden max-w-[460px] font-light`}
                style={{
                  animationDelay: "0.32s",
                  color: "var(--white)",
                  fontFamily: "var(--sans)",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {subtitleShort ?? subtitle}
              </p>
              <p
                className={`hero-fade-in ${headline ? "mt-3 sm:mt-4" : "mt-4 sm:mt-6"} hidden md:block max-w-[460px] font-light`}
                style={{
                  animationDelay: "0.32s",
                  color: "var(--white)",
                  fontFamily: "var(--sans)",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {subtitle}
              </p>

              {(primaryCta || secondaryCta) && (
                <div
                  className={`hero-fade-in ${subtitleShort ? "mt-5" : "mt-6"} sm:mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5${headline ? " sm:flex-wrap" : ""}`}
                  style={{ animationDelay: "0.44s" }}
                >

                  {primaryCta && (
                    <Link
                      to={canonicalPath(primaryCta.href)}
                      className={`hero-cta-btn inline-flex items-center justify-center gap-2 w-full max-w-[360px] sm:w-auto sm:max-w-none py-4 px-6 sm:py-3.5 sm:px-8 tracking-normal transition-opacity duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A88A5A]/50${headline ? " sm:whitespace-nowrap" : ""}`}
                      style={{
                        background: "var(--gold-bright)",
                        color: "var(--ink)",
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
                  {secondaryCta && (headline ? (
                    <Link
                      to={canonicalPath(secondaryCta.href)}
                      className="hero-secondary-cta inline-flex items-center justify-center self-start sm:self-auto text-center transition-all duration-200 hover:opacity-100"
                      style={{
                        color: "rgba(255,255,255,.92)",
                        minHeight: 44,
                        minWidth: 44,
                        fontSize: ".9rem",
                        fontWeight: 500,
                        letterSpacing: ".02em",
                        textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                      }}
                      onClick={() => trackCTAClick(secondaryCta.label, "hero-secondary")}
                    >
                      <span style={{ borderBottom: "1px solid rgba(255,255,255,.55)", paddingBottom: "2px" }}>
                        {secondaryCta.label}
                      </span>
                    </Link>
                  ) : (
                    <Link
                      to={canonicalPath(secondaryCta.href)}
                      className="hero-secondary-cta inline-flex items-center self-start sm:self-auto text-center transition-all duration-200 hover:opacity-100"
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
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>

        {/* ─── IMAGE B: Yanis portrait (Layer 4) ───
            Wrapped in <picture> so the browser picks AVIF when supported
            (Chrome/Edge 85+, Firefox 93+, Safari 16+), typically 30-40% smaller
            than WebP at equivalent quality. Falls back to WebP transparently. */}
        {agentImage && (
          <>
            {/* Desktop portrait — wrapped in <picture> with media="(min-width: 768px)"
                on every <source> so mobile browsers SKIP this download entirely.
                Note: Tailwind's `hidden md:block` only hides via CSS, the browser
                still pre-fetches all <img> in the DOM regardless. The media query
                on the <source> is the only reliable way to gate the network request. */}
            <picture className="hidden md:block">
              {agentImageAvif && (
                <source
                  type="image/avif"
                  srcSet={agentImageLgAvif ? `${agentImageAvif} 1x, ${agentImageLgAvif} 2x` : agentImageAvif}
                  media="(min-width: 768px)"
                />
              )}
              <source
                type="image/webp"
                srcSet={agentImageLg ? `${agentImage} 1x, ${agentImageLg} 2x` : agentImage}
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
                {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
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
                same tier that App.tsx preloads, no double-download.
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
                  bottom: "env(safe-area-inset-bottom, 0px)",
                  right: "-2vw",
                  width: "62vw",
                  height: "auto",
                  maxHeight: "68%",
                  objectFit: "contain",
                  objectPosition: "bottom right",
                  zIndex: 4,
                  filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
                  WebkitMaskImage: "linear-gradient(to left, black 72%, transparent 100%)",
                  maskImage: "linear-gradient(to left, black 72%, transparent 100%)",
                }}
                loading="eager"
                decoding="async"
                {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
              />
            </picture>
          </>
        )}


      </section>
      </>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
