import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface Sector {
  name: string;
  href: string;
  detail?: string;
}

export interface SectorLinksProps {
  id?: string;
  overline?: string;
  title?: string;
  sectors: Sector[];
  background?: "default" | "alt";
}

const SectorLinks = ({
  id,
  overline = "Quartiers",
  title = "Secteurs à comparer",
  sectors,
  background = "default",
}: SectorLinksProps) => (
  <section id={id} className={background === "alt" ? "section-padding bg-secondary/20" : "section-padding bg-background"}>
    <div className="section-container max-w-[52rem]">
      <motion.div
        className="text-center mb-6 sm:mb-10 max-w-[40rem] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading overline={overline} title={title} centered />
      </motion.div>
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 md:grid-cols-3">
        {sectors.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={s.href} className="card-elevated group flex flex-col border border-border/40 bg-card px-6 py-5 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_4px_24px_-6px_hsl(var(--accent)/0.10)] hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-accent shrink-0" />
                <span className="text-[1rem] font-semibold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
                <ArrowRight size={14} className="ml-auto text-muted-foreground/20 group-hover:text-primary transition-colors" />
              </div>
              {s.detail && (
                <p className="mt-2 text-[0.875rem] text-muted-foreground/60">{s.detail}</p>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorLinks;
