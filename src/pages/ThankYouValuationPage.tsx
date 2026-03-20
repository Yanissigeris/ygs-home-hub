import PageMeta from"@/components/PageMeta";
import { Link } from"react-router-dom";
import { Button } from"@/components/ui/button";
import { CheckCircle2, Clock, Shield, FileText } from"lucide-react";
import { motion } from"framer-motion";
import FunnelNextStep from"@/components/FunnelNextStep";

const whatsNext = [
 { icon: Clock, text:"Réponse personnalisée en moins de 24h" },
 { icon: FileText, text:"Analyse basée sur les ventes comparables récentes" },
 { icon: Shield, text:"Aucune obligation — aucun engagement" },
];

const nextSteps = [
 { title:"Plan vendeur", text:"Allez plus loin — recevez un plan complet: prix, préparation, mise en marché et calendrier.", href:"/plan-vendeur-gatineau", cta:"Recevoir mon plan", highlight: true },
 { title:"Guide vendeur", text:"Tout ce que vous devez savoir pour vendre au meilleur prix à Gatineau.", href:"/guide-vendeur-gatineau", cta:"Lire le guide" },
 { title:"Parler à Yanis", text:"Discuter de votre situation et vos options — sans engagement.", href:"/contact-yanis", cta:"Réserver un appel" },
];

const ThankYouValuationPage = () => (
 <>
 <PageMeta title="Merci — Évaluation demandée" description="Votre demande d'évaluation a été envoyée. Yanis prépare votre analyse personnalisée et vous contacte sous 24 heures." />
 <section className="section-padding bg-background">
 <div className="section-container max-w-[36rem]">
 <motion.div
 className="text-center"
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <CheckCircle2 size={56} className="mx-auto text-accent" />
 <h1 className="mt-6">Merci! Votre demande d'évaluation est en route.</h1>
 <p className="prose-body mt-4">
 Je prépare votre évaluation personnalisée basée sur votre propriété, votre secteur et les ventes comparables récentes.
 </p>
 </motion.div>

 <motion.div
 className="mt-10 flex flex-col gap-4"
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
 >
 {whatsNext.map((item) => (
 <div key={item.text} className="flex items-center gap-3.5 rounded-xl border border-border/40 bg-card px-5 py-4">
 <item.icon size={18} className="text-accent shrink-0" />
 <span className="text-[0.9375rem] font-medium text-foreground">{item.text}</span>
 </div>
 ))}
 </motion.div>

 <div className="mt-8 text-center">
 <Button size="lg" asChild>
 <Link to="/">Retour à l'accueil</Link>
 </Button>
 </div>
 </div>
 </section>

 <FunnelNextStep
 overline="En attendant"
 title="Préparez votre prochaine étape"
 subtitle="Vous aurez les chiffres bientôt. Voici les options pour aller plus loin."
 steps={nextSteps}
 background="alt"
 />
 </>
);

export default ThankYouValuationPage;
