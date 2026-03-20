import { Award, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Award,
    title: "Club Platine RE/MAX",
    text: "Temple de la renommée et Club 100% — résultats reconnus par l'industrie.",
  },
  {
    icon: MapPin,
    title: "100% Gatineau",
    text: "Plateau, Aylmer, Hull, Buckingham — chaque secteur, chaque quartier.",
  },
  {
    icon: Shield,
    title: "Accompagnement à votre rythme",
    text: "Je vous donne les chiffres, les options et une stratégie — vous décidez à votre rythme.",
  },
];

const TestimonialPlaceholder = () => (
  <section className="section-padding bg-secondary/20">
    <div className="section-container max-w-[52rem]">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-3">Pourquoi YGS</p>
        <h2>Une approche qui fait la différence</h2>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-elevated border border-border/40 bg-card p-7 sm:p-8 h-full text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary mb-5">
                <h.icon size={22} />
              </div>
              <h3 className="text-[1.0625rem]">{h.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.65] text-muted-foreground">
                {h.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialPlaceholder;
