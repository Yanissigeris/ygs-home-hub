import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import cardVendreImg from "@/assets/card-vendre.jpg";
import cardAcheterImg from "@/assets/card-acheter.jpg";
import cardPlexImg from "@/assets/card-plex.jpg";

const audienceCards = [
  {
    title: "Vendre",
    text: "Connaître la valeur de votre propriété, planifier le bon timing et obtenir le meilleur prix.",
    cta: "Voir le plan vendeur",
    href: "/vendre-ma-maison-gatineau",
    image: cardVendreImg,
    featured: true,
  },
  {
    title: "Acheter",
    text: "Trouver le bon secteur, éviter les erreurs coûteuses et acheter avec confiance.",
    cta: "Acheter à Gatineau",
    href: "/acheter-a-gatineau",
    image: cardAcheterImg,
  },
  {
    title: "Plex / investissement",
    text: "Analyser la valeur, le rendement et la stratégie avant de prendre une décision.",
    cta: "Voir la page plex",
    href: "/investir-plex-gatineau",
    image: cardPlexImg,
  },
];

const AudienceCards = () => (
  <section className="section-padding bg-secondary/25">
    <div className="section-container">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
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
            viewport={{ once: true, margin: "-100px" }}
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
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {card.featured && (
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-accent px-3 py-1 text-[0.75rem] font-semibold text-white">
                    Populaire
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-[1.125rem] group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.6] text-muted-foreground">{card.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary">
                  {card.cta} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
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
