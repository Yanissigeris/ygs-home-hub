import * as React from"react";
import { Star } from"lucide-react";
import { motion } from"framer-motion";
import type { Review } from"@/data/reviews";

interface ReviewStripProps {
 review: Review;
}

const ReviewStrip = React.forwardRef<HTMLElement, ReviewStripProps>(({ review }, ref) => (
 <section ref={ref} className="border-y border-border/30 bg-secondary/20">
 <div className="section-container py-6 sm:py-7">
 <motion.div
 className="mx-auto flex max-w-[36rem] flex-col items-center gap-3 text-center"
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-60px" }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 >
 <div className="flex gap-0.5">
 {Array.from({ length: 5 }).map((_, i) => (
 <Star key={i} size={12} className="fill-accent text-accent" />
 ))}
 </div>
 <p className="text-[0.9375rem] italic leading-[1.6] text-muted-foreground">&quot;{review.short}&quot;</p>
 <p className="text-[0.8125rem] font-medium text-foreground/70">
 — {review.name}
 {review.location ? `, ${review.location}` :""}
 </p>
 </motion.div>
 </div>
 </section>
));

ReviewStrip.displayName ="ReviewStrip";

export default ReviewStrip;
