import { motion } from "framer-motion";

const trustPoints = [
  {
    title: "9 ans en Outaouais",
    text: "Connaissance approfondie du marché, des secteurs et des réalités locales.",
  },
  {
    title: "Zéro pression",
    text: "Conseils honnêtes, stratégie claire, accompagnement adapté à votre rythme.",
  },
  {
    title: "Résultats reconnus",
    text: "Distinctions RE/MAX et priorité absolue à la satisfaction client.",
  },
];

const CredibilitySection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container max-w-4xl">
      <motion.div
        className="text-center mb-12 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="mb-3.5 text-[1.5rem] sm:text-[1.75rem]">Simple, stratégique, sans pression</h2>
        <p className="text-[0.875rem] leading-[1.75] text-muted-foreground/75">
          Vous aider à voir clair et prendre la bonne décision au bon moment.
        </p>
      </motion.div>

      <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
        {trustPoints.map((point, i) => (
          <motion.div
            key={point.title}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-[0.9375rem] font-semibold mb-2 tracking-[-0.015em] text-foreground/90">
              {point.title}
            </h3>
            <p className="text-[0.8125rem] leading-[1.75] text-muted-foreground/70 max-w-[16rem] mx-auto">
              {point.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CredibilitySection;
