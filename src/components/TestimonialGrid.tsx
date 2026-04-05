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

const GridCard = ({ review }: { review: Review }) => (
  <div
    itemScope
    itemType="https://schema.org/Review"
    className="flex h-full flex-col transition-all duration-300"
    style={{
      border: "1px solid rgba(255,255,255,.08)",
      borderRadius: 3,
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
      <p itemProp="reviewBody" style={{ fontSize: ".96rem", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,.7)", lineHeight: 1.85 }}>
        {review.short}
      </p>
    </blockquote>

    {/* Attribution */}
    <div className="mt-6 flex items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: "1.2rem" }}>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-semibold"
        style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "#fff" }}
        aria-hidden
      >
        {review.name.split(/[\s.]+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("")}
      </span>
      <div>
        <p itemProp="author" style={{ fontSize: ".85rem", fontWeight: 600, color: "#fff" }}>{review.name}</p>
        {review.location && (
          <p style={{ fontSize: ".75rem", color: "rgba(255,255,255,.4)", marginTop: 2 }}>{review.location}</p>
        )}
      </div>
    </div>
  </div>
);

const TestimonialGrid = React.forwardRef<HTMLElement, TestimonialGridProps>(
  ({ overline = "Témoignages", title = "Ce que disent mes clients", reviews, reviewsPageLabel, reviewsPageHref }, ref) => (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--ink)", padding: "clamp(3.5rem, 6vw, 7rem) 0" }}>
      {/* Decorative giant quote */}
      <span
        className="pointer-events-none select-none absolute top-0 left-0 hidden lg:block"
        style={{ fontFamily: "var(--serif)", fontSize: "40rem", color: "rgba(255,255,255,.025)", lineHeight: .7 }}
        aria-hidden="true"
      >"</span>

      <div className="section-container relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            {overline && <p className="label-overline mb-2" style={{ color: "var(--gold)" }}>{overline}</p>}
            <h2 style={{ color: "#fff" }}>{title}</h2>
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

        {/* Static 2-column grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {reviews.map((review) => (
            <GridCard key={review.id} review={review} />
          ))}
        </div>

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
  ),
);

TestimonialGrid.displayName = "TestimonialGrid";
export default TestimonialGrid;
