import * as React from "react";
import { Link } from "react-router-dom";
import type { Review } from "@/data/reviews";
import { useLanguage } from "@/contexts/LanguageContext";
import { getA11yLabel } from "@/lib/a11y";

interface TestimonialGridProps {
  overline?: string;
  title?: string;
  reviews: Review[];
  reviewsPageLabel?: string;
  reviewsPageHref?: string;
}

const GridCard = ({ review, index = 0 }: { review: Review; index?: number }) => (
  <div
    className="flex h-full flex-col transition-all duration-300"
    style={{
      border: "1px solid var(--border)",
      borderRadius: 3,
      padding: "clamp(1.75rem, 4vw, 2.5rem)",
      background: "#fff",
      transitionDelay: `${index * 0.1}s`,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cream)"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 4px 0 #A88A5A, 0 20px 44px rgba(168,138,90,0.08)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
  >
    {/* Stars */}
    <div className="mb-4" style={{ color: "var(--gold)", fontSize: ".75rem", letterSpacing: "2px" }}>★★★★★</div>

    {/* Decorative quote mark */}
    <span className="text-[3rem] md:text-[4.5rem]" style={{ fontFamily: "var(--serif)", lineHeight: ".8", color: "var(--gold)", fontWeight: 300, opacity: .4 }} aria-hidden="true">"</span>

    {/* Quote */}
    <blockquote className="flex-1 mt-2">
      <p style={{ fontSize: ".92rem", fontWeight: 300, fontStyle: "italic", color: "var(--muted)", lineHeight: 1.82 }}>
        {review.short}
      </p>
    </blockquote>

    {/* Attribution */}
    <div className="mt-6 flex items-center gap-3" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.2rem" }}>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold"
        style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "#fff" }}
        aria-hidden
      >
        {review.name.split(/[\s.]+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("")}
      </span>
      <div>
        <p style={{ fontSize: ".85rem", fontWeight: 600, color: "var(--ink)" }}>{review.name}</p>
        {review.location && (
          <p style={{ fontSize: ".75rem", color: "var(--muted)", marginTop: 2 }}>{review.location}</p>
        )}
      </div>
    </div>
  </div>
);

const TestimonialGrid = React.forwardRef<HTMLElement, TestimonialGridProps>(
  ({ overline = "Témoignages", title = "Ce que disent mes clients", reviews, reviewsPageLabel, reviewsPageHref }, ref) => {
    const lang = useLanguage();
    const [expanded, setExpanded] = React.useState(false);
    const [current, setCurrent] = React.useState(0);
    const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

    const startAuto = React.useCallback(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % reviews.length);
      }, 8000);
    }, [reviews.length]);

    React.useEffect(() => {
      startAuto();
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [startAuto]);

    const stopAuto = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const prev = () => { stopAuto(); setCurrent((c) => (c - 1 + reviews.length) % reviews.length); };
    const next = () => { stopAuto(); setCurrent((c) => (c + 1) % reviews.length); };
    const goTo = (i: number) => { stopAuto(); setCurrent(i); };

    void expanded; void setExpanded; void GridCard;

    const review = reviews[current];

    return (
      <section ref={ref} className="relative overflow-hidden section-rhythm section-gold-divider" style={{ background: "#FAF8F3" }}>
        {/* Decorative giant quote */}
        <span
          className="pointer-events-none select-none absolute top-0 left-0 hidden lg:block"
          style={{ fontFamily: "var(--serif)", fontSize: "clamp(24rem, 38vw, 36rem)", color: "rgba(23,48,59,0.025)", lineHeight: .7 }}
          aria-hidden="true"
        >"</span>

        <div className="section-container relative">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(320px,1fr)_2fr] gap-8 md:gap-12 items-start">
            {/* Left — sticky sidebar */}
            <div className="md:sticky md:top-24">
              {overline && <p className="label-overline mb-2" style={{ color: "var(--gold)" }}>{overline}</p>}
              <h2>{title}</h2>

              <div className="flex gap-2 mt-6">
                <button aria-label={getA11yLabel("carousel.previous", lang)} onClick={prev} style={{ width: 40, height: 40, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".85rem", color: "var(--muted)", cursor: "pointer", transition: "border-color .35s, color .35s, background-color .35s", background: "transparent" }}>←</button>
                <button aria-label={getA11yLabel("carousel.next", lang)} onClick={next} style={{ width: 40, height: 40, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".85rem", color: "var(--muted)", cursor: "pointer", transition: "border-color .35s, color .35s, background-color .35s", background: "transparent" }}>→</button>
              </div>

              <div className="flex gap-1.5 mt-4">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    aria-label={getA11yLabel("testimonial.goTo", lang, { n: i + 1 })}
                    onClick={() => goTo(i)}
                    style={{ width: i === current ? 44 : 20, height: 2, background: i === current ? "#A88A5A" : "var(--border)", cursor: "pointer", transition: "width .45s cubic-bezier(.16,1,.3,1), background .3s", border: "none", padding: 0 }}
                  />
                ))}
              </div>
            </div>

            {/* Right — featured quote */}
            <div
              style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 3, padding: "clamp(2rem, 4vw, 3rem)", transition: "box-shadow .5s cubic-bezier(.16,1,.3,1)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 0 #A88A5A, 0 20px 44px rgba(168,138,90,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ color: "var(--gold)", letterSpacing: "2px", fontSize: ".72rem", marginBottom: "22px" }}>★★★★★</div>
              <blockquote style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontWeight: 300, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.5, marginBottom: "26px" }}>
                {review.short}
              </blockquote>
              <div style={{ width: 40, height: 1, background: "#A88A5A", marginBottom: 14 }} />
              <p style={{ fontSize: ".7rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--ink)", fontWeight: 600 }}>{review.name}</p>
              {review.location && <p style={{ fontSize: ".75rem", fontWeight: 300, color: "var(--muted)" }}>{review.location}</p>}
            </div>
          </div>

          {reviewsPageHref && reviewsPageLabel && (
            <div className="mt-10 text-center">
              <Link to={reviewsPageHref} className="inline-block transition-colors" style={{ fontSize: ".82rem", fontWeight: 500, color: "var(--muted)", borderBottom: "1px solid var(--border)", paddingBottom: 2, minHeight: 44, lineHeight: "44px" }}>
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
