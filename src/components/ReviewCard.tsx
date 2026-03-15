import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  variant?: "compact" | "full";
  index?: number;
}

const ReviewCard = ({ review, variant = "compact", index = 0 }: ReviewCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="h-full"
  >
    <div className="card-elevated border border-border/40 bg-card p-6 sm:p-7 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-[0.9375rem] leading-[1.65] text-foreground/85 italic">
          "{variant === "full" ? review.full : review.short}"
        </p>
      </blockquote>

      {/* Attribution */}
      <div className="mt-5 pt-4 border-t border-border/30">
        <p className="text-[0.875rem] font-semibold text-foreground">{review.name}</p>
        {review.location && (
          <p className="text-[0.8125rem] text-muted-foreground/60 mt-0.5">{review.location}</p>
        )}
      </div>
    </div>
  </motion.div>
);

export default ReviewCard;
