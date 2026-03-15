import { TrendingUp, Home, Clock } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: TrendingUp, label: "Marché vendeur", value: "Unifamiliale médiane : 485 000 $" },
  { icon: Home, label: "Plex médian", value: "621 000 $ · Rendement en hausse" },
  { icon: Clock, label: "Délai moyen", value: "32 jours sur le marché" },
];

const TrustStrip = () => (
  <section className="border-b border-border/30 bg-secondary/30">
    <div className="section-container py-5 sm:py-6">
      <motion.div
        className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 text-[0.8125rem]">
            <item.icon size={14} className="text-accent shrink-0" />
            <span className="font-semibold text-foreground/80">{item.label}</span>
            <span className="text-muted-foreground/60 font-medium">{item.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustStrip;
