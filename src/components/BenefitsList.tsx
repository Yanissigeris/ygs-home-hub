import { CheckCircle2 } from"lucide-react";
import { motion } from"framer-motion";
import SectionHeading from"@/components/SectionHeading";

interface BenefitsListProps {
 overline?: string;
 title: string;
 items: string[];
 background?:"default" |"alt";
}

const BenefitsList = ({ overline, title, items, background ="alt" }: BenefitsListProps) => (
 <section className={background ==="alt" ?"section-padding bg-secondary/25" :"section-padding bg-background"}>
 <div className="section-container max-w-[44rem]">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 >
 <SectionHeading overline={overline} title={title} />
 </motion.div>
 <div className="mt-8 space-y-4">
 {items.map((item, i) => (
 <motion.div
 key={item}
 className="flex items-start gap-3.5"
 initial={{ opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-60px" }}
 transition={{ duration: 0.3, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
 >
 <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
 <span className="text-[1rem] text-foreground">{item}</span>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
);

export default BenefitsList;
