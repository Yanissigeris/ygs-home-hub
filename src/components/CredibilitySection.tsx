import * as React from"react";
import { motion } from"framer-motion";
import { Clock, Shield, Award } from"lucide-react";

const trustPoints = [
{
 icon: Clock,
 title:"Près de 9 ans en Outaouais",
 text:"Connaissance terrain du marché, des secteurs et des réalités locales."
},
{
 icon: Shield,
 title:" zéro surprise",
 text:"Conseils honnêtes, stratégie claire, accompagnement adapté à votre rythme."
},
{
 icon: Award,
 title:"Résultats reconnus",
 text:"Club Platine RE/MAX, Club 100% et Temple de la renommée."
}];


const CredibilitySection = React.forwardRef<HTMLElement>((_, ref) =>
<section ref={ref} className="section-padding-md bg-secondary/20">
 <div className="section-container max-w-[56rem]">
 <motion.div
 className="mb-12 text-center"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
 
 <p className="label-overline mb-3">Pourquoi les clients me font confiance</p>
 <h2 className="mb-4">Simple, stratégique, à votre rythme </h2>
 <p className="mx-auto max-w-[34rem] text-[1.0625rem] leading-[1.65] text-muted-foreground">
 Vous aider à voir clair et prendre la bonne décision au bon moment.
 </p>
 </motion.div>

 <div className="grid gap-6 sm:grid-cols-3">
 {trustPoints.map((point, i) =>
 <motion.div
 key={point.title}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
 
 <div className="h-full p-6 text-center">
 <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/[0.08] text-accent">
 <point.icon size={20} />
 </div>
 <h3 className="text-[1.0625rem] font-semibold tracking-[-0.015em] text-foreground">{point.title}</h3>
 <p className="mx-auto mt-2.5 max-w-[18rem] text-[0.9375rem] leading-[1.65] text-muted-foreground/70">{point.text}</p>
 </div>
 </motion.div>
 )}
 </div>
 </div>
 </section>
);

CredibilitySection.displayName ="CredibilitySection";

export default CredibilitySection;