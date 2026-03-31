import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
{
  number: "01",
  title: "Évaluation gratuite",
  text: "Connaître la vraie valeur de votre propriété à Gatineau en quelques jours.",
  href: "/evaluation-gratuite-gatineau"
},
{
  number: "02",
  title: "Stratégie claire",
  text: "Un plan de vente adapté à votre propriété et au marché de l'Outaouais.",
  href: "/vendre-ma-maison-gatineau"
},
{
  number: "03",
  title: "Accompagnement complet",
  text: "De la préparation à la signature, à votre rythme.",
  href: "/contact-yanis"
}];


const ConversionSection = React.forwardRef<HTMLElement>((_, ref) =>
<section ref={ref} className="section-padding bg-background">
    <div className="section-container">
      <motion.div
      className="mb-8 sm:mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      
        <p className="label-overline mb-3">Comment ça fonctionne</p>
        <h2>Trois étapes vers une transaction réussie</h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-3 sm:gap-7">
        {steps.map((step, i) =>
      <motion.div
        key={step.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
        
            <Link to={step.href} className="card-elevated group flex h-full flex-col items-start border border-border/40 bg-card p-7 sm:p-8 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_4px_24px_-6px_hsl(var(--accent)/0.10)] hover:-translate-y-0.5">
              <span className="mb-4 font-heading text-[2rem] leading-none text-accent/20">{step.number}</span>
              <h3 className="text-[1.125rem] font-semibold">{step.title}</h3>
              <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground">{step.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                En savoir plus <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
      )}
      </div>

      <motion.div
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}>
      
        <Button size="lg" variant="accent" className="font-semibold shadow-sm" asChild>
          <Link to="/evaluation-gratuite-gatineau">
            Commencer par une évaluation gratuite
            <ArrowRight size={15} className="ml-1" />
          </Link>
        </Button>
        

      
      </motion.div>
    </div>
  </section>
);

ConversionSection.displayName = "ConversionSection";

export default ConversionSection;