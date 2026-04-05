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

const pathwaysFr = [
  { title: "Vendre ma propriété en Outaouais", text: "Évaluation réaliste, stratégie de prix et mise en marché ciblée pour maximiser votre résultat.", cta: "Voir le plan vendeur", href: "/vendre-ma-maison-gatineau", image: cardVendreImg, imageSm: cardVendreSm, imageAlt: "Vendre sa maison à Gatineau — salon résidentiel moderne" },
  { title: "Acheter à Gatineau", text: "Les bons secteurs, le bon budget et un accompagnement terrain pour acheter avec confiance.", cta: "Explorer l'achat", href: "/acheter-a-gatineau", image: cardAcheterImg, imageSm: cardAcheterSm, imageAlt: "Acheter une propriété à Gatineau — rue résidentielle" },
  { title: "Plex & investissement", text: "Rendement, valeur marchande et timing — les vrais chiffres avant la décision.", cta: "Recevoir une analyse", href: "/investir-plex-gatineau", image: cardPlexImg, imageSm: cardPlexSm, imageAlt: "Investissement plex à Gatineau — immeuble à revenus" },
];

const pathwaysEn = [
  { title: "Sell my property", text: "Realistic valuation, pricing strategy and targeted marketing to maximize your result.", cta: "See the seller plan", href: "/en/sell", image: cardVendreImg, imageSm: cardVendreSm, imageAlt: "Sell a home in Gatineau — bright residential interior" },
  { title: "Buy in Gatineau", text: "The right neighborhoods, the right budget and hands-on guidance to buy with confidence.", cta: "Explore buying", href: "/en/buy", image: cardAcheterImg, imageSm: cardAcheterSm, imageAlt: "Buy a property in Gatineau — residential neighborhood" },
  { title: "Plex & Investment", text: "Returns, market value and timing — the real numbers before the decision.", cta: "Get an analysis", href: "/en/plex", image: cardPlexImg, imageSm: cardPlexSm, imageAlt: "Invest in a plex in Gatineau — multi-unit building" },
];

const headingFr = { overline: "Choisissez votre prochaine étape", title: "Où en êtes-vous dans votre projet?" };
const headingEn = { overline: "Choose your next step", title: "Where are you in your project?" };

interface PathwaySectionProps { lang?: "fr" | "en"; }

const PathwaySection = React.forwardRef<HTMLElement, PathwaySectionProps>(({ lang = "fr" }, ref) => {
  const pathways = lang === "en" ? pathwaysEn : pathwaysFr;
  const heading = lang === "en" ? headingEn : headingFr;

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container">
        <motion.div className="mx-auto mb-6 sm:mb-10 max-w-[42rem] text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <p className="label-overline mb-3">{heading.overline}</p>
          <h2>{heading.title}</h2>
        </motion.div>
        <div className="grid gap-4 sm:gap-7 md:grid-cols-3">
          {pathways.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="group">
              <Link to={p.href} className="card-elevated flex h-full flex-col overflow-hidden border border-border/40 bg-card transition-all duration-300 hover:border-accent/25 hover:shadow-[0_4px_24px_-6px_hsl(var(--accent)/0.10)] hover:-translate-y-0.5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.imageSm} srcSet={`${p.imageSm} 370w, ${p.image} 648w`} sizes="(max-width: 767px) 90vw, 33vw" alt={p.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" width={648} height={441} />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="mb-1.5 sm:mb-2 text-[1rem] transition-colors group-hover:text-primary">{p.title}</h3>
                  <p className="mb-3 sm:mb-4 flex-1 text-[0.8125rem] sm:text-[0.875rem] leading-[1.5] sm:leading-[1.6] text-muted-foreground line-clamp-2 sm:line-clamp-none">{p.text}</p>
                  <span className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary">{p.cta}<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

PathwaySection.displayName = "PathwaySection";

export default PathwaySection;

