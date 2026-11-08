import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import type { Review } from "@/data/reviews";

interface ReviewSectionProps {
  overline?: string;
  title?: string;
  reviews: Review[];
  variant?: "compact" | "full";
  background?: "default" | "alt" | "white";
  columns?: 2 | 3;
  reviewsPageLabel?: string;
  reviewsPageHref?: string;
  /** Avis présentés comme des citations (grand guillemet, texte plus gros, sans boîte). */
  quote?: boolean;
}

const ReviewSection = React.forwardRef<HTMLElement, ReviewSectionProps>(
  ({
    overline = "Témoignages",
    title = "Ce que disent mes clients",
    reviews,
    variant = "compact",
    background = "default",
    columns = reviews.length >= 3 ? 3 : 2,
    reviewsPageLabel,
    reviewsPageHref,
    quote = false,
  }, ref) => (
    <section ref={ref} className={`section-padding ${background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
      <div className="section-container">
        <div
          className="text-center mb-6 sm:mb-8"
        >
          {/* overline retiré (cohérence accueil) */}
          <h2>{title}</h2>
        </div>
        <div className={`grid gap-6 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"} ${quote ? "max-w-[64rem] sm:gap-14" : "max-w-[52rem]"} ${columns === 3 ? "lg:max-w-none" : ""} mx-auto`}>
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} variant={variant} index={i} quote={quote} />
          ))}
        </div>
        {reviewsPageHref && reviewsPageLabel && (
          <div className="mt-5 text-center">
            <Link to={reviewsPageHref} className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary hover:underline">
              {reviewsPageLabel}
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  ),
);

ReviewSection.displayName = "ReviewSection";

export default ReviewSection;
