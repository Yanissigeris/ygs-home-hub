import * as React from "react";
import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReviewCardProps {
  review: Review;
  variant?: "compact" | "full";
  index?: number;
  /** Présentation en citation : sans boîte, grand guillemet (CSS), texte plus gros. */
  quote?: boolean;
}

const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ review, variant = "compact", index = 0, quote = false }, ref) => {
    const isEn = useLanguage() === "en";
    /* Citation : le grand guillemet décoratif (CSS) suffit. Cartes : guillemets selon la langue. */
    const [open, close] = quote ? ["", ""] : isEn ? ["\u201C", "\u201D"] : ["«\u00A0", "\u00A0»"];
    return (
    <div
      ref={ref}
      className="h-full"
    >
      <div className={quote ? "review-quote relative h-full flex flex-col" : "card-elevated relative border border-border/40 bg-card p-5 sm:p-6 h-full flex flex-col"}>
        <div className="relative z-[1] mb-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="fill-[var(--star)] text-[var(--star)]" />
          ))}
        </div>

        <blockquote className="relative z-[1] flex-1">
          <p className={quote ? "review-quote-text italic text-foreground" : "text-[0.9375rem] italic leading-[1.65] text-foreground/85"}>
            {open}{variant === "full" ? review.full : review.short}{close}
          </p>
        </blockquote>

        <div className="relative z-[1] mt-4 border-t border-border/30 pt-3 flex items-center gap-2.5">
          <span
            className="flex shrink-0 items-center justify-center rounded-full"
            style={{ width: 32, height: 32, background: "#000E35", fontFamily: "var(--serif)", fontSize: 12, color: "var(--white)", fontWeight: 600 }}
          >
            {review.name.charAt(0)}
          </span>
          <div>
            <p className="text-[0.875rem] font-semibold text-foreground">{review.name}</p>
            {review.location && <p className="mt-0.5 text-[0.8125rem] text-muted-foreground">{review.location}</p>}
          </div>
        </div>
      </div>
    </div>
    );
  },
);

ReviewCard.displayName = "ReviewCard";

export default ReviewCard;
