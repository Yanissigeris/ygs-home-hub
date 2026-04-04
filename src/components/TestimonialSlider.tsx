import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { Review } from "@/data/reviews";

interface TestimonialSliderProps {
  overline?: string;
  title?: string;
  reviews: Review[];
  reviewsPageLabel?: string;
  reviewsPageHref?: string;
}

/* ── Slide card ── */
const SlideCard = ({ review }: { review: Review }) => (
  <div className="testimonial-card flex h-full flex-col border border-border/30 bg-card px-6 py-7 sm:px-8 sm:py-9">
    {/* Stars — minimal */}
    <div className="mb-5 flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className="fill-accent text-accent" />
      ))}
    </div>

    {/* Quote */}
    <blockquote className="flex-1">
      <p className="text-[0.9375rem] sm:text-[1rem] italic leading-[1.7] text-foreground/80">
        "{review.short}"
      </p>
    </blockquote>

    {/* Attribution */}
    <div className="mt-6 flex items-center gap-3 border-t border-border/20 pt-5">
      {/* Monogram */}
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-semibold tracking-wide text-primary-foreground"
        style={{ backgroundColor: "hsl(200 42% 16%)" }}
        aria-hidden
      >
        {review.name
          .split(/[\s.]+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((w) => w[0].toUpperCase())
          .join("")}
      </span>
      <div>
        <p className="text-[0.875rem] font-semibold leading-tight text-foreground">
          {review.name}
        </p>
        {review.location && (
          <p className="mt-0.5 text-[0.8125rem] leading-tight text-muted-foreground/55">
            {review.location}
          </p>
        )}
      </div>
    </div>
  </div>
);

/* ── Main slider ── */
const TestimonialSlider = React.forwardRef<HTMLElement, TestimonialSliderProps>(
  (
    {
      overline = "Témoignages",
      title = "Ce que disent mes clients",
      reviews,
      reviewsPageLabel,
      reviewsPageHref,
    },
    ref,
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: "start",
      skipSnaps: false,
      duration: 32, // slower = more luxurious
    });

    const [canPrev, setCanPrev] = React.useState(false);
    const [canNext, setCanNext] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [slideCount, setSlideCount] = React.useState(0);

    /* Reduced motion */
    const prefersReduced = React.useRef(false);
    React.useEffect(() => {
      prefersReduced.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
    }, []);

    /* Sync state */
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
      return () => {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
      };
    }, [emblaApi, onSelect]);

    /* Autoplay with pause-on-hover */
    const autoplayRef = React.useRef<ReturnType<typeof setInterval>>();
    const hoveringRef = React.useRef(false);

    React.useEffect(() => {
      if (!emblaApi || prefersReduced.current) return;
      const play = () => {
        autoplayRef.current = setInterval(() => {
          if (!hoveringRef.current && emblaApi.canScrollNext()) {
            emblaApi.scrollNext();
          }
        }, 6500);
      };
      play();
      return () => clearInterval(autoplayRef.current);
    }, [emblaApi]);

    const onPointerEnter = () => {
      hoveringRef.current = true;
    };
    const onPointerLeave = () => {
      hoveringRef.current = false;
    };

    return (
      <section ref={ref} className="section-padding bg-background">
        <div className="section-container">
          {/* Heading */}
          <div className="mx-auto mb-8 sm:mb-10 max-w-[42rem] text-center">
            {overline && <p className="label-overline mb-3">{overline}</p>}
            <h2>{title}</h2>
          </div>

          {/* Carousel */}
          <div
            className="relative"
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
          >
            {/* Viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-1/2 lg:basis-1/2 sm:px-3"
                  >
                    <SlideCard review={review} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows — desktop */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous testimonial"
              className="testimonial-nav-btn absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:flex"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next testimonial"
              className="testimonial-nav-btn absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Pagination dots */}
          {slideCount > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2" role="tablist">
              {Array.from({ length: slideCount }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-[5px] rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "w-6 bg-accent"
                      : "w-[5px] bg-border/60 hover:bg-border"
                  }`}
                />
              ))}
            </div>
          )}

          {/* "See all" link */}
          {reviewsPageHref && reviewsPageLabel && (
            <div className="mt-5 text-center">
              <Link
                to={reviewsPageHref}
                className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary hover:underline"
              >
                {reviewsPageLabel}
                <ArrowRight size={14} />
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
