import * as React from "react";
import type { Review } from "@/data/reviews";

/* Inline Star SVG — avoids lucide-react in critical path */
const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

interface ReviewStripProps {
  review: Review;
}

const ReviewStrip = React.forwardRef<HTMLElement, ReviewStripProps>(({ review }, ref) => (
  <section ref={ref} className="border-y border-border/30 bg-secondary/20">
    <div className="section-container py-6 sm:py-7">
      <div className="mx-auto flex max-w-[36rem] flex-col items-center gap-3 text-center animate-fade-in">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <p className="text-[0.9375rem] italic leading-[1.6] text-muted-foreground">&quot;{review.short}&quot;</p>
        <p className="text-[0.8125rem] font-medium text-foreground/70">
          — {review.name}
          {review.location ? `, ${review.location}` : ""}
        </p>
      </div>
    </div>
  </section>
));

ReviewStrip.displayName = "ReviewStrip";

export default ReviewStrip;
