import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cardVendreImg from "@/assets/card-vendre.jpg";
import cardAcheterImg from "@/assets/card-acheter.jpg";
import cardPlexImg from "@/assets/card-plex.jpg";

const pathways = [
  {
    title: "Vendre ma propriété",
    text: "Évaluation réaliste, stratégie de prix et mise en marché — pour maximiser votre résultat.",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
    footer: "Évaluation · positionnement · mise en marché",
    image: cardVendreImg,
  },
  {
    title: "Acheter à Gatineau",
    text: "Secteurs, budget et accompagnement terrain — pour acheter avec confiance.",
    cta: "Explorer l'achat",
    href: "/acheter-a-gatineau",
    footer: "Secteurs · budget · accompagnement",
    image: cardAcheterImg,
  },
  {
    title: "Plex & investissement",
    text: "Rendement, valeur marchande et timing — les vrais chiffres avant la décision.",
    cta: "Recevoir une analyse",
    href: "/investir-plex-gatineau",
    footer: "Rendement · valeur · timing",
    image: cardPlexImg,
  },
];

const PathwaySection = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        className="text-center mb-14 max-w-[42rem] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-3">Choisissez votre prochaine étape</p>
        <h2 className="mb-5">Où en êtes-vous dans votre projet?</h2>
        <p className="text-[1.0625rem] leading-[1.65] text-muted-foreground max-w-[38rem] mx-auto">
          Chaque situation est différente. Dites-moi où vous en êtes — je vous donne les chiffres, les options et une stratégie claire.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
        {pathways.map((pathway, i) => (
          <motion.div
            key={pathway.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <Link to={pathway.href} className="card-elevated flex flex-col h-full overflow-hidden border border-border/40 bg-card transition-all duration-220 hover:border-accent/20">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={pathway.image}
                  alt={pathway.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 p-7 sm:p-8">
                <h3 className="mb-3 group-hover:text-primary transition-colors">
                  {pathway.title}
                </h3>
                <p className="flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground mb-6">
                  {pathway.text}
                </p>
                <span className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">
                  {pathway.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
                <p className="mt-4 text-[0.8125rem] text-muted-foreground/40 font-medium tracking-wide">
                  {pathway.footer}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PathwaySection;
