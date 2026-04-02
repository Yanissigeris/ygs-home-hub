import * as React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  variant?: "compact" | "full";
  index?: number;
}

const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ review, variant = "compact", index = 0 }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div className="card-elevated border border-border/40 bg-card p-5 sm:p-6 h-full flex flex-col">
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={13} className="fill-accent text-accent" />
          ))}
        </div>

        <blockquote className="flex-1">
          <p className="text-[0.9375rem] italic leading-[1.65] text-foreground/85">
            "{variant === "full" ? review.full : review.short}"
          </p>
        </blockquote>

        <div className="mt-4 border-t border-border/30 pt-3">
          <p className="text-[0.875rem] font-semibold text-foreground">{review.name}</p>
          {review.location && <p className="mt-0.5 text-[0.8125rem] text-muted-foreground/60">{review.location}</p>}
        </div>
      </div>
    </motion.div>
  ),
);

ReviewCard.displayName = "ReviewCard";

export default ReviewCard;
