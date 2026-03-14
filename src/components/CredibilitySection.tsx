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
  <section className="section-padding-md bg-secondary/25">
    <div className="section-container max-w-[52rem]">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-3">Pourquoi les clients me font confiance</p>
        <h2 className="mb-4">Simple, stratégique, sans pression</h2>
        <p className="text-[1.0625rem] leading-[1.65] text-muted-foreground max-w-[34rem] mx-auto">
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
            <h3 className="text-[1.125rem] font-semibold mb-3 tracking-[-0.015em] text-foreground/90">
              {point.title}
            </h3>
            <p className="text-[0.9375rem] leading-[1.65] text-muted-foreground/70 max-w-[18rem] mx-auto">
              {point.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CredibilitySection;
