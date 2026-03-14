import { motion } from "framer-motion";

const trustPoints = [
  {
    title: "Près de 9 ans en Outaouais",
    text: "Une connaissance concrète du marché local, des secteurs et des réalités des vendeurs, acheteurs et investisseurs.",
  },
  {
    title: "Approche sans pression",
    text: "Des conseils honnêtes, une stratégie claire et un accompagnement adapté à votre situation.",
  },
  {
    title: "Reconnaissance et confiance",
    text: "Distinctions RE/MAX, service personnalisé et priorité absolue à la satisfaction du client.",
  },
];

const CredibilitySection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container max-w-5xl">
      <motion.div
        className="text-center mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-2">Pourquoi les clients me font confiance</p>
        <h2 className="mb-3">Une approche simple, stratégique et sans pression</h2>
        <p className="text-[0.875rem] leading-[1.7] text-muted-foreground">
          Mon rôle est de vous aider à voir clair, comprendre vos options et prendre une bonne décision au bon moment.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
        {trustPoints.map((point, i) => (
          <motion.div
            key={point.title}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-[1rem] font-semibold mb-2.5 tracking-[-0.015em]">
              {point.title}
            </h3>
            <p className="text-[0.8125rem] leading-[1.7] text-muted-foreground">
              {point.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CredibilitySection;
