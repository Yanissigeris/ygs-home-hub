import * as React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";
import { useLanguage } from "@/contexts/LanguageContext";
import { getA11yLabel } from "@/lib/a11y";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";

const Stars = ({ lang }: { lang: "fr" | "en" }) => (
  <span role="img" aria-label={lang === "en" ? "5 out of 5 stars" : "5 étoiles sur 5"} style={{ color: "var(--star)", display: "inline-flex", gap: 3 }}>
    {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={20} strokeWidth={1.5} fill="currentColor" />)}
  </span>
);

interface TestimonialGridProps {
  overline?: string;
  title?: string;
  reviews: Review[];
  reviewsPageLabel?: string;
  reviewsPageHref?: string;
}

const GAP = 24; // px between cards
const AUTO_MS = 6000;

/** 1 card on phones, 2 on tablets, 3 on desktop. */
const useVisibleCount = () => {
  const get = () => (typeof window === "undefined" ? 3 : window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
  const [n, setN] = React.useState(get);
  React.useEffect(() => {
    const onResize = () => setN(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return n;
};

const ReviewSlide = ({ review, lang, width }: { review: Review; lang: "fr" | "en"; width: string }) => (
  <article
    className="flex shrink-0 flex-col"
    style={{
      flexBasis: width,
      background: "var(--review-card)",
      borderRadius: 20,
      padding: "clamp(1.5rem, 3vw, 2.25rem)",
      boxShadow: "0 6px 12px rgba(0, 14, 53, 0.06)",
    }}
  >
    <p style={{ fontFamily: "var(--sans)", fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>{review.name}</p>
    {review.location && (
      <p style={{ fontFamily: "var(--sans)", fontSize: ".8125rem", color: "hsl(var(--muted-foreground))", marginTop: 2 }}>{review.location}</p>
    )}
    <div className="mt-4">
      <Stars lang={lang} />
    </div>
    <div aria-hidden="true" style={{ height: 1, background: "hsl(var(--border))", margin: "1.25rem 0" }} />
    <blockquote
      style={{
        fontFamily: "var(--sans)",
        fontSize: "1.0625rem",
        lineHeight: 1.6,
        color: "var(--ink)",
        display: "-webkit-box",
        WebkitLineClamp: 8,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {review.short.trim()}
    </blockquote>
  </article>
);

const TestimonialGrid = React.forwardRef<HTMLElement, TestimonialGridProps>(
  ({ overline = "Témoignages", title = "Ce que disent mes clients", reviews, reviewsPageLabel, reviewsPageHref }, ref) => {
    const lang = useLanguage();
    const visible = useVisibleCount();
    const n = reviews.length;
    // Clone the first cards at the end so the loop can slide forward forever.
    const slides = React.useMemo(() => [...reviews, ...reviews.slice(0, visible)], [reviews, visible]);
    const [index, setIndex] = React.useState(0);
    const [animate, setAnimate] = React.useState(true);
    const [paused, setPaused] = React.useState(false);
    const [stopped, setStopped] = React.useState(false);
    const touchX = React.useRef<number | null>(null);

    const reduceMotion = React.useMemo(
      () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
      [],
    );

    React.useEffect(() => {
      if (paused || stopped || reduceMotion || n <= visible) return;
      const id = setInterval(() => {
        setAnimate(true);
        setIndex((i) => i + 1);
      }, AUTO_MS);
      return () => clearInterval(id);
    }, [paused, stopped, reduceMotion, n, visible]);

    // After sliding onto the clones, jump back to the real first card without animation.
    const onTransitionEnd = () => {
      if (index >= n) {
        setAnimate(false);
        setIndex(index - n);
      }
    };
    React.useEffect(() => {
      if (!animate) {
        const id = requestAnimationFrame(() => setAnimate(true));
        return () => cancelAnimationFrame(id);
      }
    }, [animate]);

    const goTo = (i: number) => {
      setStopped(true);
      setAnimate(true);
      setIndex(((i % n) + n) % n);
    };

    const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
    const onTouchEnd = (e: React.TouchEvent) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      touchX.current = null;
      if (Math.abs(dx) > 40) goTo((index % n) + (dx < 0 ? 1 : -1));
    };

    const cardWidth = `calc((100% - ${GAP * (visible - 1)}px) / ${visible})`;
    const offset = `calc(-${index} * (100% + ${GAP}px) / ${visible})`;
    const active = index % n;
    const fade = visible > 1 ? "linear-gradient(to right, transparent 0, #000 3%, #000 97%, transparent 100%)" : undefined;

    return (
      <section ref={ref} className="relative overflow-hidden section-rhythm" style={{ background: "var(--cream-light)" }}>
        <div className="section-container relative">
          <div className="mx-auto max-w-2xl text-center">
            {overline && (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[.8125rem] font-medium"
                style={{ fontFamily: "var(--sans)", background: "var(--review-card)", color: "var(--ink)" }}
              >
                <Star size={13} strokeWidth={1.5} fill="var(--star)" color="var(--star)" aria-hidden="true" />
                {overline}
              </span>
            )}
            <h2 className="mt-4">{title}</h2>
            <div className="mt-5 flex justify-center">
              <GoogleReviewBadge />
            </div>
          </div>

          <div
            className="mt-10 md:mt-12"
            style={{ overflow: "hidden", WebkitMaskImage: fade, maskImage: fade, padding: "8px 0 16px" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
          >
            <div
              className="flex items-stretch"
              style={{
                gap: GAP,
                transform: `translateX(${offset})`,
                transition: animate && !reduceMotion ? "transform 700ms cubic-bezier(.22,.61,.36,1)" : "none",
              }}
              onTransitionEnd={onTransitionEnd}
            >
              {slides.map((r, i) => (
                <ReviewSlide key={`${r.id}-${i}`} review={r} lang={lang} width={cardWidth} />
              ))}
            </div>
          </div>

          {n > visible && (
            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={getA11yLabel("testimonial.goTo", lang, { n: i + 1 })}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className="flex h-11 w-6 items-center justify-center"
                >
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{ width: i === active ? 10 : 8, height: i === active ? 10 : 8, background: i === active ? "var(--ink)" : "hsl(var(--border))" }}
                  />
                </button>
              ))}
            </div>
          )}

          {reviewsPageHref && reviewsPageLabel && (
            <div className="mt-6 text-center">
              <Link to={reviewsPageHref} className="inline-block transition-colors" style={{ fontSize: ".82rem", fontWeight: 500, color: "hsl(var(--muted-foreground))", borderBottom: "1px solid hsl(var(--border))", paddingBottom: 2, minHeight: 44, lineHeight: "44px" }}>
                {reviewsPageLabel} →
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  },
);

TestimonialGrid.displayName = "TestimonialGrid";
export default TestimonialGrid;
