import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Home, TrendingUp, Calculator } from "lucide-react";

const steps = [
  {
    icon: Calculator,
    title: "Évaluation gratuite",
    text: "Connaître la vraie valeur de votre propriété en quelques jours.",
    href: "/evaluation-gratuite-gatineau",
  },
  {
    icon: TrendingUp,
    title: "Stratégie claire",
    text: "Un plan de vente adapté à votre situation et à votre marché.",
    href: "/vendre-ma-maison-gatineau",
  },
  {
    icon: Home,
    title: "Accompagnement complet",
    text: "De la préparation à la signature, sans pression ni surprise.",
    href: "/contact-yanis",
  },
];

const ConversionSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-2">Comment ça fonctionne</p>
        <h2>Trois étapes vers une transaction réussie</h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to={step.href}
              className="card-elevated group flex flex-col items-start rounded-xl border border-border bg-card p-6 sm:p-7 h-full"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/[0.07] text-primary mb-4">
                <step.icon size={20} />
              </div>
              <span className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-accent mb-1">
                Étape {i + 1}
              </span>
              <h3 className="text-[1rem] font-semibold">{step.title}</h3>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">
                {step.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Button size="lg" asChild>
          <Link to="/evaluation-gratuite-gatineau">
            Commencer par une évaluation gratuite
            <ArrowRight size={15} className="ml-1" />
          </Link>
        </Button>
        <p className="mt-3 text-[0.6875rem] text-muted-foreground/50">
          Zéro pression — je vous donne les chiffres et les options, vous décidez.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ConversionSection;
