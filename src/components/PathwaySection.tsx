import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cardVendreImg from "@/assets/card-vendre.webp";
import cardVendreSm from "@/assets/card-vendre-sm.webp";
import cardAcheterImg from "@/assets/card-acheter.webp";
import cardAcheterSm from "@/assets/card-acheter-sm.webp";
import cardPlexImg from "@/assets/card-plex.webp";
import cardPlexSm from "@/assets/card-plex-sm.webp";

const pathways = [
  {
    title: "Vendre ma propriété",
    text: "Évaluation réaliste, stratégie de prix et mise en marché — pour maximiser votre résultat.",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
    footer: "Évaluation · positionnement · mise en marché",
    image: cardVendreImg,
    imageSm: cardVendreSm,
    imageAlt: "Vendre sa maison à Gatineau — salon résidentiel moderne",
  },
  {
    title: "Acheter à Gatineau",
    text: "Secteurs, budget et accompagnement terrain — pour acheter avec confiance.",
    cta: "Explorer l'achat",
    href: "/acheter-a-gatineau",
    footer: "Secteurs · budget · accompagnement",
    image: cardAcheterImg,
    imageSm: cardAcheterSm,
    imageAlt: "Acheter une propriété à Gatineau — rue résidentielle",
  },
  {
    title: "Plex & investissement",
    text: "Rendement, valeur marchande et timing — les vrais chiffres avant la décision.",
    cta: "Recevoir une analyse",
    href: "/investir-plex-gatineau",
    footer: "Rendement · valeur · timing",
    image: cardPlexImg,
    imageSm: cardPlexSm,
    imageAlt: "Investissement plex à Gatineau — immeuble à revenus",
  },
];

const PathwaySection = React.forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className="section-padding bg-background">
    <div className="section-container">
      <motion.div
        className="mx-auto mb-14 max-w-[42rem] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-3">Choisissez votre prochaine étape</p>
        <h2 className="mb-5">Où en êtes-vous dans votre projet?</h2>
        <p className="mx-auto max-w-[38rem] text-[1.0625rem] leading-[1.65] text-muted-foreground">
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
            <Link to={pathway.href} className="card-elevated flex h-full flex-col overflow-hidden border border-border/40 bg-card transition-all duration-220 hover:border-accent/20">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={pathway.imageSm}
                  srcSet={`${pathway.imageSm} 370w, ${pathway.image} 648w`}
                  sizes="(max-width: 767px) 90vw, 33vw"
                  alt={pathway.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={648}
                  height={441}
                />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="mb-3 transition-colors group-hover:text-primary">{pathway.title}</h3>
                <p className="mb-6 flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground">{pathway.text}</p>
                <span className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">
                  {pathway.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
                <p className="mt-4 text-[0.8125rem] font-medium tracking-wide text-muted-foreground/40">{pathway.footer}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
));

PathwaySection.displayName = "PathwaySection";

export default PathwaySection;
