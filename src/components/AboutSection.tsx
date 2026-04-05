import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Award, Heart, Shield } from "lucide-react";
import yanisAbout from "@/assets/yanis-about.webp";
import yanisAboutSm from "@/assets/yanis-about-sm.webp";
import { Button } from "@/components/ui/button";

const contentFr = {
  overline: "Pourquoi YGS",
  title: "Un accompagnement simple, stratégique et humain",
  p1: "Mon rôle est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance, que ce soit à Gatineau, Aylmer, Hull ou ailleurs en Outaouais.",
  p2: "J'accompagne acheteurs, vendeurs et investisseurs en Outaouais avec une approche claire, terrain, et une connaissance approfondie du marché local — prix par quartier, tendances, potentiel de revente et réalités du terrain.",
  p3: "Avec plus de 9 ans d'expérience comme courtier immobilier en Outaouais au sein de l'équipe Marty Waite chez ReMax, j'offre à mes clients un accompagnement solide, stratégique et rassurant du début à la fin. Investisseur immobilier moi-même, je sais aussi analyser en profondeur les opportunités en multilogement à Gatineau et dans la région. Mon expérience terrain en flips immobiliers, combinée à ma formation en gestion de projets, fait de moi un allié incontournable pour tout projet immobilier en Outaouais.",
  exp: "Près de 9 ans d'expérience",
  awards: "Club Platine · Club 100% · Temple de la renommée",
  trust: "Approche axée sur la confiance",
  cta: "En savoir plus",
  ctaHref: "/contact-yanis",
  imgAlt: "Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau",
  TrustIcon: Heart,
};

const contentEn = {
  overline: "Why YGS",
  title: "Simple, strategic and human guidance",
  p1: "My role is to provide the right information and a clear strategy — so you can move forward with confidence when you're ready, whether in Gatineau, Aylmer, Hull or anywhere in Outaouais.",
  p2: "I support sellers, buyers and investors across Outaouais with a clear, hands-on approach and deep knowledge of the local market — prices by neighborhood, trends, resale potential and on-the-ground realities.",
  p3: "With nearly 9 years of experience as a real estate broker in Outaouais with Team Marty Waite from ReMax, I offer my clients solid, strategic and reassuring support from start to finish. A real estate investor myself, I can also analyze multi-unit opportunities in Gatineau and area in depth. My hands-on experience in property flips, combined with my project management training, makes me an indispensable ally for any real estate project in Outaouais.",
  exp: "Nearly 9 years of experience",
  awards: "Platinum Club · 100% Club · Hall of Fame",
  trust: "Trust-centered approach",
  cta: "Learn more",
  ctaHref: "/en/contact",
  imgAlt: "Yanis Gauthier-Sigeris, real estate broker in Gatineau, Outaouais",
  TrustIcon: Shield,
};

interface AboutSectionProps { lang?: "fr" | "en"; }

const AboutSection = React.forwardRef<HTMLElement, AboutSectionProps>(({ lang = "fr" }, ref) => {
  const c = lang === "en" ? contentEn : contentFr;

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container overflow-hidden grid gap-6 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-14">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="overflow-hidden rounded-[1.75rem]">
            <img src={yanisAbout} srcSet={`${yanisAboutSm} 400w, ${yanisAbout} 565w`} sizes="(max-width: 1023px) 90vw, 40vw" alt={c.imgAlt} className="aspect-[3/4] md:aspect-[3/4] w-full object-cover" loading="lazy" decoding="async" width={565} height={800} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
          <p className="label-overline mb-2">{c.overline}</p>
          <h2>{c.title}</h2>
          <p className="prose-body mt-4">{c.p1}</p>
          <p className="prose-body mt-4 hidden md:block">{c.p2}</p>
          <p className="prose-body mt-4 hidden md:block">{c.p3}</p>

          <div className="mt-5 sm:mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] sm:text-[0.875rem] text-muted-foreground/55">
            <span className="flex items-center gap-2"><Clock size={14} /> {c.exp}</span>
            <span className="flex items-center gap-2"><Award size={14} /> {c.awards}</span>
            <span className="flex items-center gap-2"><c.TrustIcon size={14} /> {c.trust}</span>
          </div>

          <Button className="mt-5 sm:mt-8" size="lg" asChild>
            <Link to={c.ctaHref}>{c.cta}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
