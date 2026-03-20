import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TrustPoint {
  icon: LucideIcon;
  label: string;
}

interface TrustMiniStripProps {
  items: TrustPoint[];
}

const TrustMiniStrip = ({ items }: TrustMiniStripProps) => (
  <section className="border-b border-border/40 bg-secondary/40">
    <div className="section-container py-5 sm:py-6">
      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-muted-foreground/65">
            <item.icon size={14} className="text-accent shrink-0" />
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustMiniStrip;
