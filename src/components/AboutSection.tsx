import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, Award, Heart } from "lucide-react";
import yanisPhoto from "@/assets/yanis-photo.jpg";

const AboutSection = () => (
  <section className="section-padding bg-background">
    <div className="section-container grid gap-12 lg:gap-14 lg:grid-cols-[42%_58%] lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden rounded-[1.75rem]">
          <img
            src={yanisPhoto}
            alt="Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <p className="label-overline mb-3">Pourquoi YGS</p>
        <h2>Un accompagnement simple, stratégique et humain</h2>
        <p className="prose-body mt-5">
          En immobilier, les bonnes décisions commencent par de bonnes informations. Yanis Gauthier-Sigeris accompagne vendeurs, acheteurs et investisseurs à Gatineau avec une approche claire, locale et sans pression.
        </p>
        <p className="prose-body mt-4">
          Son rôle n'est pas de pousser. C'est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance quand vous êtes prêt.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[0.875rem] text-muted-foreground/55">
          <span className="flex items-center gap-2"><Clock size={14} /> Près de 9 ans d'expérience</span>
          <span className="flex items-center gap-2"><Award size={14} /> Club Platine · Club 100% · Temple de la renommée</span>
          <span className="flex items-center gap-2"><Heart size={14} /> Approche axée sur la confiance</span>
        </div>

        <Button className="mt-10" size="lg" asChild>
          <Link to="/contact-yanis">En savoir plus</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
