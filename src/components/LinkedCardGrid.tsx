import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface LinkedCard {
  icon: LucideIcon;
  title: string;
  text: string;
  cta: string;
  href: string;
}

interface LinkedCardGridProps {
  overline?: string;
  title: string;
  items: LinkedCard[];
  columns?: 2 | 3;
  background?: "default" | "alt";
}

const LinkedCardGrid = ({
  overline,
  title,
  items,
  columns = 2,
  background = "default",
}: LinkedCardGridProps) => (
  <section className={background === "alt" ? "section-padding bg-[var(--cream)]" : "section-padding bg-background"}>
    <div className="section-container max-w-[52rem]">
      <motion.div
        className="text-center mb-12 max-w-[40rem] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading overline={overline} title={title} centered />
      </motion.div>
      <div className={`grid gap-6 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {items.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={card.href} className="card-elevated group block border border-border/40 bg-card p-7 sm:p-8 h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary mb-5">
                <card.icon size={24} />
              </div>
              <h3 className="text-[1.125rem]">{card.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">{card.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">
                {card.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LinkedCardGrid;
