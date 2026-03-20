import PageMeta from"@/components/PageMeta";
import { Link } from"react-router-dom";
import { Button } from"@/components/ui/button";
import { CheckCircle2, ArrowRight } from"lucide-react";
import { motion } from"framer-motion";
import FunnelNextStep from"@/components/FunnelNextStep";

const nextSteps = [
 { title:"Explorer les quartiers", text:"Découvrez les secteurs de Gatineau — Aylmer, Hull, Plateau, Buckingham et plus.", href:"/quartiers-a-considerer-a-gatineau", cta:"Voir les quartiers" },
 { title:"Guides et ressources", text:"Consultez nos guides gratuits pour vendeurs, acheteurs et investisseurs.", href:"/ressources", cta:"Voir les ressources" },
 { title:"Rapport du marché", text:"Prix, tendances et volumes de ventes à Gatineau et en Outaouais.", href:"/rapport-marche-gatineau", cta:"Voir le rapport" },
];

const ThankYouPage = () => (
 <>
 <PageMeta title="Merci — Demande envoyée" description="Votre demande a été envoyée avec succès. Yanis vous contactera dans les prochaines 24 heures." />
 <section className="section-padding bg-background">
 <div className="section-container max-w-[36rem]">
 <motion.div
 className="text-center"
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <CheckCircle2 size={56} className="mx-auto text-accent" />
 <h1 className="mt-6">Merci! Votre demande a été envoyée.</h1>
 <p className="prose-body mt-4">
 Je vous reviens personnellement dans les prochaines 24 heures avec une réponse adaptée à votre situation. En attendant, explorez les ressources ci-dessous.
 </p>
 <Button className="mt-8" size="lg" asChild>
 <Link to="/">Retour à l'accueil</Link>
 </Button>
 </motion.div>
 </div>
 </section>

 <FunnelNextStep
 overline="En attendant"
 title="Explorez pendant que je prépare votre réponse"
 steps={nextSteps}
 background="alt"
 />
 </>
);

export default ThankYouPage;
