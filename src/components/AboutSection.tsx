import * as React from"react";
import { Link } from"react-router-dom";
import { motion } from"framer-motion";
import { Clock, Award, Heart } from"lucide-react";

import { Button } from"@/components/ui/button";

const AboutSection = React.forwardRef<HTMLElement>((_, ref) =>
<section ref={ref} className="section-padding bg-background">
 <div className="section-container overflow-hidden grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-14">
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin:"-100px" }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
 
 <div className="overflow-hidden rounded-[1.75rem]">
 <img
 src="/lovable-uploads/8c9ff05f-0837-4203-8947-2da11c503c80.png"
 alt="Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau"
 className="aspect-[3/4] w-full object-cover"
 loading="lazy"
 decoding="async" />
 
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin:"-100px" }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
 
 <p className="label-overline mb-3">Pourquoi YGS</p>
 <h2>Un accompagnement simple, stratégique et humain</h2>
 <p className="prose-body mt-5">
 Son rôle est de donner les bonnes informations et une stratégie claire — pour que vous avanciez avec confiance à votre rythme. 
 </p>
 <p className="prose-body mt-4">
 Il accompagne acheteurs, vendeurs et investisseurs en Outaouais avec une approche claire et avec une excellente connaissance du marché.
 </p>
 <p className="prose-body mt-4">
 Avec plus de 9 ans d’expérience comme courtier immobilier en Outaouais, Yanis offre à ses clients un accompagnement solide, stratégique et rassurant du début à la fin de la transaction. Investisseur immobilier lui-même, il sait également analyser en profondeur les opportunités en multilogement. Son expérience concrète en flips immobiliers, combinée à sa formation en gestion de projet (AEC), fait de lui un allié incontournable pour tout projet immobilier.
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

 <Button className="mt-10" size="lg" asChild>
 <Link to="/contact-yanis">En savoir plus</Link>
 </Button>
 </motion.div>
 </div>
 </section>
);

AboutSection.displayName ="AboutSection";

export default AboutSection;