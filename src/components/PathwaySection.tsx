import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pathways = [
  {
    title: "Vendre",
    text: "Obtenez une lecture claire de la valeur de votre propriété, du bon positionnement et de la meilleure stratégie pour vendre au bon moment.",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
    footer: "Évaluation • stratégie • mise en marché",
  },
  {
    title: "Acheter",
    text: "Clarifiez votre budget, vos secteurs à cibler et votre stratégie d'achat pour avancer avec plus de confiance et moins de stress.",
    cta: "Explorer l'achat à Gatineau",
    href: "/acheter-a-gatineau",
    footer: "Secteurs • stratégie • accompagnement",
  },
  {
    title: "Plex / investir",
    text: "Analysez la valeur, le potentiel et le bon timing avant d'acheter, vendre ou conserver un plex ou une propriété d'investissement.",
    cta: "Recevoir une analyse plex",
    href: "/investir-plex-gatineau",
    footer: "Valeur • rendement • timing",
  },
];

const PathwaySection = () => (
  <section className="section-padding bg-background">
    <div className="section-container max-w-6xl">
      <motion.div
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-2">Choisissez votre prochaine étape</p>
        <h2 className="mb-4">Un accompagnement clair, selon votre projet</h2>
        <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
          Que vous pensiez vendre, acheter ou analyser une opportunité d'investissement, je peux vous aider à avancer avec les bons chiffres, les bonnes stratégies et zéro pression.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        {pathways.map((pathway, i) => (
          <motion.div
            key={pathway.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <div className="flex flex-col h-full rounded-xl border border-border/60 bg-card p-7 sm:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-[1.25rem] font-semibold mb-3 group-hover:text-primary transition-colors">
                {pathway.title}
              </h3>
              <p className="flex-1 text-[0.875rem] leading-relaxed text-muted-foreground mb-6">
                {pathway.text}
              </p>
              <Button size="default" variant="outline" asChild className="w-full mb-4 group-hover:border-primary/30 group-hover:bg-primary/5">
                <Link to={pathway.href}>
                  {pathway.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <p className="text-[0.6875rem] text-center text-muted-foreground/50 font-medium tracking-wide">
                {pathway.footer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PathwaySection;
