import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialPlaceholder = () => (
  <section className="section-padding bg-background">
    <div className="section-container max-w-[52rem]">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-3">Témoignages</p>
        <h2>Ce que mes clients disent</h2>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-3">
        {[
          { context: "Vente · Aylmer" },
          { context: "Achat · Plateau" },
          { context: "Plex · Hull" },
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-elevated border border-dashed border-border/60 bg-card p-7 sm:p-8 h-full">
              <Quote size={16} className="text-accent/20 mb-3" />
              <p className="text-[1rem] leading-[1.6] text-muted-foreground italic">
                "[Témoignage client à ajouter]"
              </p>
              <div className="mt-5 pt-4 border-t border-border/50">
                <p className="text-[0.875rem] font-medium text-foreground">[Nom]</p>
                <p className="text-[0.75rem] text-muted-foreground/50 mt-0.5">{t.context}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialPlaceholder;
