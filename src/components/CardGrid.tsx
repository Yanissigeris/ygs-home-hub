import { motion } from"framer-motion";
import { LucideIcon, CheckCircle2 } from"lucide-react";
import SectionHeading from"@/components/SectionHeading";

interface CardItem {
 icon?: LucideIcon;
 title: string;
 text: string;
}

interface CardGridProps {
 overline?: string;
 title: string;
 items: CardItem[];
 columns?: 2 | 3;
 background?:"default" |"alt";
 variant?:"icon-top" |"icon-inline";
 centered?: boolean;
}

const CardGrid = ({
 overline,
 title,
 items,
 columns = 2,
 background ="default",
 variant ="icon-top",
 centered = true,
}: CardGridProps) => (
 <section className={background ==="alt" ?"section-padding bg-secondary/20" :"section-padding bg-background"}>
 <div className="section-container max-w-[52rem]">
 <motion.div
 className={centered ?"text-center mb-12 max-w-[40rem] mx-auto" :"mb-12"}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 >
 <SectionHeading overline={overline} title={title} centered={centered} />
 </motion.div>
 <div className={`grid gap-5 ${columns === 3 ?"sm:grid-cols-3" :"sm:grid-cols-2"}`}>
 {items.map((item, i) => {
 const Icon = item.icon || CheckCircle2;
 return (
 <motion.div
 key={item.title}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-60px" }}
 transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
 className={`card-elevated border border-border/40 bg-card p-7 ${
 variant ==="icon-inline" ?"flex items-start gap-4" :""
 }`}
 >
 {variant ==="icon-inline" ? (
 <>
 <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
 <div>
 <p className="text-[1rem] font-semibold text-foreground">{item.title}</p>
 <p className="mt-1.5 text-[0.9375rem] leading-[1.6] text-muted-foreground">{item.text}</p>
 </div>
 </>
 ) : (
 <>
 <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary mb-4">
 <Icon size={20} />
 </div>
 <h3 className="text-[1.0625rem]">{item.title}</h3>
 <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">{item.text}</p>
 </>
 )}
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>
);

export default CardGrid;
