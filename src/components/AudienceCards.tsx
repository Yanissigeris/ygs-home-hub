import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import cardVendreImg from "@/assets/card-vendre.webp";
import cardVendreSm from "@/assets/card-vendre-sm.webp";
import cardAcheterImg from "@/assets/card-acheter.webp";
import cardAcheterSm from "@/assets/card-acheter-sm.webp";
import cardPlexImg from "@/assets/card-plex.webp";
import cardPlexSm from "@/assets/card-plex-sm.webp";

const audienceCards = [
  {
    title: "Plex & Investissement",
    text: "Analyser le rendement réel, cibler les bons deals et investir avec des chiffres solides en main.",
    cta: "Calculer mon rendement",
    href: "/investir-plex-gatineau",
    image: cardPlexImg,
    imageSm: cardPlexSm,
    imageAlt: "Investir dans un plex à Gatineau — immeuble multilogement",
    badge: "Investisseurs",
    featured: true,
  },
  {
    title: "Vendre",
    text: "Connaître la vraie valeur de votre propriété, vendre au bon moment et maximiser votre profit net.",
    cta: "Estimer ma propriété",
    href: "/vendre-ma-maison-gatineau",
    image: cardVendreImg,
    imageSm: cardVendreSm,
    imageAlt: "Vendre une maison à Gatineau — intérieur résidentiel lumineux",
    badge: null,
    featured: false,
  },
  {
    title: "Acheter",
    text: "Trouver le bon secteur, éviter les erreurs coûteuses et acheter avec confiance à Gatineau.",
    cta: "Voir les propriétés",
    href: "/acheter-a-gatineau",
    image: cardAcheterImg,
    imageSm: cardAcheterSm,
    imageAlt: "Acheter une propriété à Gatineau — quartier résidentiel",
    badge: null,
    featured: false,
  },
];

const AudienceCards = () => (
  <section className="section-padding bg-secondary/25">
    <div className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="label-overline mb-3">À votre service</p>
        <h2>Que cherchez-vous?</h2>
      </motion.div>

      <div className="grid gap-6 sm:gap-7 sm:grid-cols-3">
        {audienceCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to={card.href}
              className={`card-elevated group flex flex-col overflow-hidden border bg-card ${
                card.featured
                  ? "border-accent/25 ring-1 ring-accent/8"
                  : "border-border/40"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={card.imageSm}
                  srcSet={`${card.imageSm} 370w, ${card.image} 648w`}
                  sizes="(max-width: 639px) 90vw, 33vw"
                  alt={card.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                  width={648}
                  height={441}
                />
                {card.badge && (
                  <span className="absolute top-3.5 left-3.5 rounded-none bg-accent px-3 py-1 text-[0.75rem] font-semibold text-white">
                    {card.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-[1.125rem] group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  {card.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">
                  {card.cta}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceCards;
