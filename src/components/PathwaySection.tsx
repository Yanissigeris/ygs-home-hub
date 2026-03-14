import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pathways = [
  {
    title: "Vendre ma propriété",
    text: "Vous pensez vendre à Gatineau, mais vous ne savez pas si c'est le bon moment ou le bon prix? On commence par une évaluation réaliste de votre propriété — puis on bâtit une stratégie claire pour maximiser votre résultat.",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
    footer: "Évaluation · positionnement · mise en marché",
  },
  {
    title: "Acheter à Gatineau",
    text: "Que vous arriviez d'Ottawa, de Montréal ou que vous cherchiez dans Aylmer, Hull ou le Plateau — je vous aide à cibler les bons secteurs, éviter les pièges et acheter avec confiance.",
    cta: "Explorer l'achat à Gatineau",
    href: "/acheter-a-gatineau",
    footer: "Secteurs · budget · accompagnement terrain",
  },
  {
    title: "Plex & investissement",
    text: "Avant d'acheter, vendre ou garder un plex en Outaouais, il faut connaître les vrais chiffres. Je vous fournis une analyse claire du rendement, de la valeur et du meilleur timing.",
    cta: "Recevoir une analyse plex",
    href: "/investir-plex-gatineau",
    footer: "Rendement · valeur marchande · timing",
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
        <h2 className="mb-4">Où en êtes-vous dans votre projet?</h2>
        <p className="text-[0.9375rem] leading-[1.8] text-muted-foreground">
          Chaque situation est différente. Dites-moi où vous en êtes — je vous donne les chiffres, les options et une stratégie claire. Zéro pression.
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
