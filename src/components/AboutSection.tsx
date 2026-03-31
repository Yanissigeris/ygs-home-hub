import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Award, Heart } from "lucide-react";
import yanisAbout from "@/assets/yanis-about.webp";
import yanisAboutSm from "@/assets/yanis-about-sm.webp";

import { Button } from "@/components/ui/button";

const AboutSection = React.forwardRef<HTMLElement>((_, ref) =>
<section ref={ref} className="section-padding bg-background">
    <div className="section-container overflow-hidden grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-14">
      <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      
        <div className="overflow-hidden rounded-[1.75rem]">
          <img
          src={yanisAbout}
          srcSet={`${yanisAboutSm} 400w, ${yanisAbout} 565w`}
          sizes="(max-width: 1023px) 90vw, 40vw"
          alt="Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau"
          className="aspect-[3/4] w-full object-cover"
          loading="lazy"
          decoding="async"
          width={565}
          height={800} />
        
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
      
        <p className="label-overline mb-3">Pourquoi YGS</p>
        <h2>Un accompagnement simple, stratégique et humain</h2>
        <p className="prose-body mt-5">
          Mon rôle est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance à votre rythme, que ce soit à Gatineau, Aylmer, Hull ou ailleurs en Outaouais.
        </p>
        <p className="prose-body mt-4 hidden sm:block">
          J'accompagne acheteurs, vendeurs et investisseurs partout en Outaouais avec une approche claire et une excellente connaissance du marché local — prix par secteur, tendances, potentiel de revente et réalités terrain.
        </p>
        <p className="prose-body mt-4 hidden sm:block">
          Avec plus de 9 ans d'expérience comme courtier immobilier en Outaouais, j'offre à mes clients un accompagnement solide, stratégique et rassurant du début à la fin de la transaction. Investisseur immobilier moi-même, je sais également analyser en profondeur les opportunités en multilogement à Gatineau et dans les environs. Mon expérience concrète en flips immobiliers, combinée à ma formation en gestion de projet (AEC), fait de moi un allié incontournable pour tout projet immobilier en Outaouais.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[0.875rem] text-muted-foreground/55">
          <span className="flex items-center gap-2">
            <Clock size={14} /> Près de 9 ans d&apos;expérience
          </span>
          <span className="flex items-center gap-2">
            <Award size={14} /> Club Platine · Club 100% · Temple de la renommée
          </span>
          <span className="flex items-center gap-2">
            <Heart size={14} /> Approche axée sur la confiance
          </span>
        </div>

        <Button className="mt-7 sm:mt-10" size="lg" asChild>
          <Link to="/contact-yanis">En savoir plus</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

AboutSection.displayName = "AboutSection";

export default AboutSection;