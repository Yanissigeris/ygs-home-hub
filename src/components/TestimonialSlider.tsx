import * as React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { Review } from "@/data/reviews";
import { useLanguage } from "@/contexts/LanguageContext";
import { getA11yLabel } from "@/lib/a11y";

interface TestimonialSliderProps {
  overline?: string;
  title?: string;
  reviews: Review[];
  reviewsPageLabel?: string;
  reviewsPageHref?: string;
}

/* ── Slide card ── */
const SlideCard = ({ review }: { review: Review }) => (
  <div
    className="flex h-full flex-col transition-all duration-300"
    style={{
      border: "1px solid rgba(255,255,255,.07)",
      borderRadius: 2,
      padding: "2.5rem",
      background: "rgba(255,255,255,.03)",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.03)"; e.currentTarget.style.transform = ""; }}
  >
    {/* Stars */}
    <div className="mb-4" style={{ color: "var(--gold)", fontSize: ".75rem", letterSpacing: "2px" }}>★★★★★</div>

    {/* Decorative quote mark */}
    <span style={{ fontFamily: "var(--serif)", fontSize: "4.5rem", lineHeight: ".8", color: "var(--gold)", fontWeight: 300 }} aria-hidden="true">"</span>

    {/* Quote */}
    <blockquote className="flex-1 mt-2">
      <p style={{ fontSize: ".96rem", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,.7)", lineHeight: 1.85 }}>
        {review.short}
      </p>
    </blockquote>

    {/* Attribution */}
    <div className="mt-6 flex items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: "1.2rem" }}>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold"
        style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "var(--white)" }}
        aria-hidden
      >
        {review.name.split(/[\s.]+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("")}
      </span>
      <div>
        <p style={{ fontSize: ".85rem", fontWeight: 600, color: "var(--white)" }}>{review.name}</p>
        {review.location && (
          <p style={{ fontSize: ".75rem", color: "rgba(255,255,255,.4)", marginTop: 2 }}>{review.location}</p>
        )}
      </div>
    </div>
  </div>
);

/* ── Main slider ── */
const TestimonialSlider = React.forwardRef<HTMLElement, TestimonialSliderProps>(
  ({ overline = "Témoignages", title = "Ce que disent mes clients", reviews, reviewsPageLabel, reviewsPageHref }, ref) => {
    const lang = useLanguage();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false, duration: 32 });

    const [canPrev, setCanPrev] = React.useState(false);
    const [canNext, setCanNext] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [slideCount, setSlideCount] = React.useState(0);

    const prefersReduced = React.useRef(false);
    React.useEffect(() => { prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches; }, []);

    const onSelect = React.useCallback(() => {
      if (!emblaApi) return;
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
      setActiveIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
      if (!emblaApi) return;
      setSlideCount(emblaApi.scrollSnapList().length);
      onSelect();
      emblaApi.on("select", onSelect);
      emblaApi.on("reInit", onSelect);
      return () => { emblaApi.off("select", onSelect); emblaApi.off("reInit", onSelect); };
    }, [emblaApi, onSelect]);

    const autoplayRef = React.useRef<ReturnType<typeof setInterval>>();
    const hoveringRef = React.useRef(false);

    React.useEffect(() => {
      if (!emblaApi || prefersReduced.current) return;
      autoplayRef.current = setInterval(() => {
        if (!hoveringRef.current && emblaApi.canScrollNext()) emblaApi.scrollNext();
      }, 6500);
      return () => clearInterval(autoplayRef.current);
    }, [emblaApi]);

    return (
      <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--ink)", padding: "clamp(3.5rem, 6vw, 7rem) 0" }}>
        {/* Decorative giant quote */}
        <span
          className="pointer-events-none select-none absolute top-0 left-0 hidden lg:block"
          style={{ fontFamily: "var(--serif)", fontSize: "40rem", color: "rgba(255,255,255,.025)", lineHeight: .7 }}
          aria-hidden="true"
        >"</span>

        <div className="section-container relative">
          {/* Header: 2 columns */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
            <div>
              {overline && <p className="label-overline mb-2" style={{ color: "var(--gold)" }}>{overline}</p>}
              <h2 style={{ color: "var(--white)" }}>{title}</h2>
            </div>
            {reviewsPageHref && reviewsPageLabel && (
              <Link
                to={reviewsPageHref}
                className="hidden sm:inline-flex items-center gap-2 transition-colors"
                style={{ fontSize: ".82rem", fontWeight: 500, color: "rgba(255,255,255,.5)", borderBottom: "1px solid rgba(255,255,255,.2)" }}
              >
                {reviewsPageLabel} →
              </Link>
            )}
          </div>

          {/* Carousel */}
          <div className="relative" onPointerEnter={() => { hoveringRef.current = true; }} onPointerLeave={() => { hoveringRef.current = false; }}>
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {reviews.map((review) => (
                  <div key={review.id} className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-1/2 lg:basis-1/2 sm:px-3">
                    <SlideCard review={review} />
                  </div>
                ))}
              </div>
            </div>

            {/* Nav arrows — desktop */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label={getA11yLabel("testimonial.previous", lang)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              style={{ border: "1px solid rgba(255,255,255,.12)", color: "rgba(255,255,255,.5)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label={getA11yLabel("testimonial.next", lang)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              style={{ border: "1px solid rgba(255,255,255,.12)", color: "rgba(255,255,255,.5)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          {slideCount > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2" role="tablist">
              {Array.from({ length: slideCount }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={getA11yLabel("testimonial.goTo", lang, { n: i + 1 })}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className="h-[5px] rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? 24 : 5,
                    background: i === activeIndex ? "var(--gold)" : "rgba(255,255,255,.2)",
                  }}
                />
              ))}
            </div>
          )}

          {/* Mobile "see all" link */}
          {reviewsPageHref && reviewsPageLabel && (
            <div className="mt-5 text-center sm:hidden">
              <Link to={reviewsPageHref} style={{ fontSize: ".82rem", fontWeight: 500, color: "var(--gold)" }}>
                {reviewsPageLabel} →
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  },
);

TestimonialSlider.displayName = "TestimonialSlider";
export default TestimonialSlider;
