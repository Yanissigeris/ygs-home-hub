import * as React from"react";
import { motion } from"framer-motion";
import ReviewCard from"@/components/ReviewCard";
import type { Review } from"@/data/reviews";

interface ReviewSectionProps {
 overline?: string;
 title?: string;
 reviews: Review[];
 variant?:"compact" |"full";
 background?:"default" |"alt";
 columns?: 2 | 3;
}

const ReviewSection = React.forwardRef<HTMLElement, ReviewSectionProps>(
 ({
 overline ="Témoignages",
 title ="Ce que disent mes clients",
 reviews,
 variant ="compact",
 background ="default",
 columns = reviews.length >= 3 ? 3 : 2,
 }, ref) => (
 <section ref={ref} className={`section-padding ${background ==="alt" ?"bg-secondary/20" :"bg-background"}`}>
 <div className="section-container">
 <motion.div
 className="text-center mb-12"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 >
 {overline && <p className="label-overline mb-3">{overline}</p>}
 <h2>{title}</h2>
 </motion.div>
 <div className={`grid gap-6 ${columns === 3 ?"sm:grid-cols-2 lg:grid-cols-3" :"sm:grid-cols-2"} max-w-[52rem] ${columns === 3 ?"lg:max-w-none" :""} mx-auto`}>
 {reviews.map((review, i) => (
 <ReviewCard key={review.id} review={review} variant={variant} index={i} />
 ))}
 </div>
 </div>
 </section>
 ),
);

ReviewSection.displayName ="ReviewSection";

export default ReviewSection;
