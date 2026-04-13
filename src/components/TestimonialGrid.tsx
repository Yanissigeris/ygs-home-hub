import * as React from "react";
import { Link } from "react-router-dom";
import type { Review } from "@/data/reviews";

interface TestimonialGridProps {
  overline?: string;
  title?: string;
  reviews: Review[];
  reviewsPageLabel?: string;
  reviewsPageHref?: string;
}

const GridCard = ({ review, index = 0 }: { review: Review; index?: number }) => (
  <div
    itemScope
    itemType="https://schema.org/Review"
    className="flex h-full flex-col transition-all duration-300"
    style={{
      border: "1px solid var(--border)",
      borderRadius: 3,
      padding: "clamp(1.75rem, 4vw, 2.5rem)",
      background: "#fff",
      transitionDelay: `${index * 0.1}s`,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cream)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = ""; }}
  >
    {/* Stars */}
    <div className="mb-4" style={{ color: "var(--gold)", fontSize: ".75rem", letterSpacing: "2px" }}>★★★★★</div>

    {/* Decorative quote mark */}
    <span className="text-[3rem] md:text-[4.5rem]" style={{ fontFamily: "var(--serif)", lineHeight: ".8", color: "var(--gold)", fontWeight: 300, opacity: .4 }} aria-hidden="true">"</span>

    {/* Quote */}
    <blockquote className="flex-1 mt-2">
      <p itemProp="reviewBody" style={{ fontSize: ".9rem", fontWeight: 300, fontStyle: "italic", color: "var(--muted)", lineHeight: 1.8 }}>
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
        <p itemProp="author" style={{ fontSize: ".85rem", fontWeight: 600, color: "var(--ink)" }}>{review.name}</p>
        {review.location && (
          <p style={{ fontSize: ".75rem", color: "var(--muted)", marginTop: 2 }}>{review.location}</p>
        )}
      </div>
    </div>
  </div>
);

const TestimonialGrid = React.forwardRef<HTMLElement, TestimonialGridProps>(
  ({ overline = "Témoignages", title = "Ce que disent mes clients", reviews, reviewsPageLabel, reviewsPageHref }, ref) => {
    const [expanded, setExpanded] = React.useState(false);
    const visibleCount = 2;

    return (
      <section ref={ref} className="relative overflow-hidden" style={{ background: "#fff", padding: "clamp(3.5rem, 6vw, 7rem) 0" }}>
        {/* Decorative giant quote */}
        <span
          className="pointer-events-none select-none absolute top-0 left-0 hidden lg:block"
          style={{ fontFamily: "var(--serif)", fontSize: "40rem", color: "rgba(23,48,59,.03)", lineHeight: .7 }}
          aria-hidden="true"
        >"</span>

        <div className="section-container relative">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
            <div>
              {overline && <p className="label-overline mb-2" style={{ color: "var(--gold)" }}>{overline}</p>}
              <h2>{title}</h2>
            </div>
            {reviewsPageHref && reviewsPageLabel && (
              <Link
                to={reviewsPageHref}
                className="hidden sm:inline-flex items-center gap-2 transition-colors"
                style={{ fontSize: ".82rem", fontWeight: 500, color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
              >
                {reviewsPageLabel} →
              </Link>
            )}
          </div>

          {/* Desktop: all cards */}
          <div className="hidden md:grid gap-6 md:grid-cols-2">
            {reviews.map((review, i) => (
              <GridCard key={review.id} review={review} index={i} />
            ))}
          </div>

          {/* Mobile: show 2, reveal more */}
          <div className="md:hidden">
            <div className="grid gap-6 grid-cols-1">
              {reviews.slice(0, visibleCount).map((review, i) => (
                <GridCard key={review.id} review={review} index={i} />
              ))}
            </div>

            {reviews.length > visibleCount && !expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="w-full mt-6 transition-colors"
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--border)",
                  color: "var(--ink)",
                  borderRadius: 3,
                  padding: ".75rem 1.5rem",
                  textAlign: "center",
                  fontSize: ".82rem",
                  fontWeight: 600,
                  minHeight: 48,
                }}
              >
                Voir les {reviews.length - visibleCount} autres témoignages ↓
              </button>
            )}

            {expanded && (
              <div className="grid gap-6 grid-cols-1 mt-6 animate-fade-in">
                {reviews.slice(visibleCount).map((review, i) => (
                  <GridCard key={review.id} review={review} index={i} />
                ))}
                <button
                  onClick={() => setExpanded(false)}
                  className="w-full transition-colors"
                  style={{
                    background: "var(--cream)",
                    border: "1px solid var(--border)",
                    color: "var(--ink)",
                    borderRadius: 3,
                    padding: ".75rem 1.5rem",
                    textAlign: "center",
                    fontSize: ".82rem",
                    fontWeight: 600,
                    minHeight: 48,
                  }}
                >
                  Réduire ↑
                </button>
              </div>
            )}
          </div>

          {/* Mobile "see all" link */}
          {reviewsPageHref && reviewsPageLabel && (
            <div className="mt-5 text-center sm:hidden">
              <Link to={reviewsPageHref} className="inline-block" style={{ fontSize: ".82rem", fontWeight: 500, color: "var(--gold)", minHeight: 44, lineHeight: "44px" }}>
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
