import { Award, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Award, text: "Club Platine RE/MAX · Temple de la renommée" },
  { icon: MapPin, text: "Spécialiste Gatineau · Aylmer · Hull · Outaouais" },
  { icon: Shield, text: "Près de 9 ans d'expérience en Outaouais" },
];

const TrustStrip = () => (
  <section className="border-b border-border/40 bg-secondary/40">
    <div className="section-container py-5 sm:py-6">
      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-muted-foreground/65">
            <item.icon size={14} className="text-accent shrink-0" />
            <span>{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustStrip;
