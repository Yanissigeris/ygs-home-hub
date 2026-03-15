import { Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Review } from "@/data/reviews";

interface ReviewStripProps {
  review: Review;
}

const ReviewStrip = ({ review }: ReviewStripProps) => (
  <section className="border-y border-border/30 bg-secondary/20">
    <div className="section-container py-6 sm:py-7">
      <motion.div
        className="flex flex-col items-center text-center max-w-[36rem] mx-auto gap-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="fill-accent text-accent" />
          ))}
        </div>
        <p className="text-[0.9375rem] leading-[1.6] text-muted-foreground italic">
          "{review.short}"
        </p>
        <p className="text-[0.8125rem] font-medium text-foreground/70">
          — {review.name}{review.location ? `, ${review.location}` : ""}
        </p>
      </motion.div>
    </div>
  </section>
);

export default ReviewStrip;
