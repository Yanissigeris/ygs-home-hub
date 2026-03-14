import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer" },
  { name: "Hull", href: "/plateau-aylmer" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer" },
];

const SectorsSection = () => (
  <section className="section-padding-md bg-secondary/30">
    <div className="section-container max-w-[48rem]">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-3">Gatineau et environs</p>
        <h2>Secteurs à surveiller</h2>
      </motion.div>
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
        {sectors.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={s.href} className="card-elevated group flex items-center gap-3.5 border border-border/40 bg-card px-6 py-5">
              <MapPin size={15} className="text-accent shrink-0" />
              <span className="text-[1rem] font-medium text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              <ArrowRight size={14} className="ml-auto text-muted-foreground/20 group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
