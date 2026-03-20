import { useState, FormEvent } from"react";
import { Link } from"react-router-dom";
import PageMeta from"@/components/PageMeta";
import HeroSection from"@/components/HeroSection";
import BenefitsList from"@/components/BenefitsList";
import FAQSection from"@/components/FAQSection";
import SuccessMessage from"@/components/SuccessMessage";
import StickyGuideBanner from"@/components/StickyGuideBanner";
import { Button } from"@/components/ui/button";
import { Input } from"@/components/ui/input";
import { Label } from"@/components/ui/label";
import { Textarea } from"@/components/ui/textarea";
import {
 Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from"@/components/ui/select";
import { Lock, Clock, Shield } from"lucide-react";
import { motion } from"framer-motion";
import yanisPhoto from"@/assets/yanis-hero.webp";
import heroImg from"@/assets/hero-plex.webp";

const benefits = ["Estimation de la valeur marchande actuelle de votre plex","Analyse des revenus locatifs vs dépenses réelles","Potentiel d'optimisation des loyers","Recommandation: garder, vendre ou refinancer","Prochaines étapes concrètes, sans engagement",
];

const trustPoints = [
 { icon: Lock, text:"Informations strictement confidentielles" },
 { icon: Clock, text:"Analyse personnalisée en 48h" },
 { icon: Shield, text:"Aucune obligation — aucun engagement" },
];

const faq = [
 { q:"Qu'est-ce qui est inclus dans l'analyse plex?", a:"Valeur marchande estimée, analyse des revenus et dépenses, potentiel locatif, et une recommandation stratégique adaptée à votre situation." },
 { q:"Est-ce que c'est vraiment gratuit?", a:"Oui. L'objectif est de vous aider à prendre une décision éclairée. Si vous décidez d'aller de l'avant, on en discute — mais." },
 { q:"Je ne suis pas sûr de vouloir vendre — est-ce quand même utile?", a:"Absolument. Beaucoup de propriétaires veulent simplement comprendre leur position avant de décider. C'est exactement pour ça que ce service existe." },
];

const PlexAnalysisPage = () => {
 const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: FormEvent) => {
 e.preventDefault();
 setSubmitted(true);
 };

 return (
 <>
 <PageMeta title="Analyse de plex à Gatineau" description="Faites analyser votre plex à Gatineau: rendement, revenus, dépenses et potentiel. Analyse gratuite par un courtier spécialisé." />
 <HeroSection
 compact
 overline="Analyse plex gratuite · Gatineau"
 title="Recevez une analyse claire de votre plex"
 subtitle="Valeur, revenus, dépenses, potentiel — je vous donne une lecture objective de votre situation d'investisseur."
 trustLine="Une analyse utile et sans pression — pour vous aider à décider en connaissance de cause."
 agentImage={yanisPhoto}
 agentName="Yanis Gauthier-Sigeris"
 heroBgImage={heroImg}
 />

 <section className="section-padding bg-background">
 <div className="section-container">
 <div className="grid gap-10 lg:grid-cols-5">
 <motion.div
 className="lg:col-span-3"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 >
 <div className="card-elevated border border-border/40 bg-card p-7 sm:p-9">
 <h2 className="text-[1.375rem] sm:text-[1.625rem]">Demandez votre analyse plex</h2>
 <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
 Je vous reviens personnellement avec une analyse complète — pas un rapport générique.
 </p>

 {submitted ? (
 <SuccessMessage
 title="Merci! Demande envoyée."
 text="Je vous reviens dans les 48 prochaines heures avec votre analyse."
 />
 ) : (
 <form onSubmit={handleSubmit} className="mt-7 space-y-5">
 <div>
 <Label htmlFor="adresse">Adresse du plex</Label>
 <Input id="adresse" placeholder="123 rue Exemple, Gatineau" className="mt-1.5" required />
 </div>
 <div className="grid gap-5 sm:grid-cols-2">
 <div>
 <Label htmlFor="type">Type de plex</Label>
 <Select>
 <SelectTrigger id="type" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
 <SelectContent>
 <SelectItem value="duplex">Duplex</SelectItem>
 <SelectItem value="triplex">Triplex</SelectItem>
 <SelectItem value="quadruplex">Quadruplex</SelectItem>
 <SelectItem value="5plus">5 logements et plus</SelectItem>
 </SelectContent>
 </Select>
 </div>
 <div>
 <Label htmlFor="secteur">Secteur</Label>
 <Select>
 <SelectTrigger id="secteur" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
 <SelectContent>
 <SelectItem value="hull">Hull</SelectItem>
 <SelectItem value="aylmer">Aylmer / Plateau</SelectItem>
 <SelectItem value="gatineau">Gatineau centre</SelectItem>
 <SelectItem value="buckingham">Buckingham / Masson-Angers</SelectItem>
 <SelectItem value="autre">Autre secteur</SelectItem>
 </SelectContent>
 </Select>
 </div>
 </div>
 <div className="grid gap-5 sm:grid-cols-2">
 <div>
 <Label htmlFor="situation">Votre situation</Label>
 <Select>
 <SelectTrigger id="situation" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
 <SelectContent>
 <SelectItem value="proprietaire">Je possède ce plex</SelectItem>
 <SelectItem value="acheteur">Je veux acheter un plex</SelectItem>
 <SelectItem value="curieux">Je veux comprendre ma position</SelectItem>
 </SelectContent>
 </Select>
 </div>
 <div>
 <Label htmlFor="revenus">Revenus mensuels bruts (approx.)</Label>
 <Input id="revenus" placeholder="Ex: 3 200 $" className="mt-1.5" />
 </div>
 </div>

 <div className="h-px bg-border/50" />

 <div className="grid gap-5 sm:grid-cols-2">
 <div>
 <Label htmlFor="nom">Nom</Label>
 <Input id="nom" className="mt-1.5" required />
 </div>
 <div>
 <Label htmlFor="courriel">Courriel</Label>
 <Input id="courriel" type="email" className="mt-1.5" required />
 </div>
 </div>
 <div>
 <Label htmlFor="tel">Téléphone</Label>
 <Input id="tel" type="tel" className="mt-1.5" />
 </div>
 <div>
 <Label htmlFor="notes">Notes additionnelles (optionnel)</Label>
 <Textarea id="notes" rows={3} className="mt-1.5" placeholder="Contexte, questions, détails pertinents…" />
 </div>

 <Button type="submit" size="xl" variant="accent" className="w-full mt-2 shadow-md font-semibold">
 Recevoir mon analyse plex
 </Button>
 <p className="text-center text-[0.8125rem] text-muted-foreground/50">
 Je vous donne les chiffres et les options, vous décidez.
 </p>
 </form>
 )}
 </div>
 </motion.div>

 <motion.aside
 className="lg:col-span-2 space-y-5 lg:pt-2"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
 >
 <div className="card-elevated border border-border/40 bg-secondary/30 p-7">
 <p className="text-[1rem] font-semibold text-foreground">Confidentiel et sans engagement</p>
 <div className="mt-4 space-y-3.5">
 {trustPoints.map((t) => (
 <div key={t.text} className="flex items-center gap-3">
 <t.icon size={15} className="shrink-0 text-accent" />
 <span className="text-[0.9375rem] text-muted-foreground">{t.text}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="card-elevated bg-primary p-7 text-primary-foreground border-0">
 <p className="text-[1rem] font-semibold">Vous pensez vendre votre plex?</p>
 <p className="mt-2 text-[0.9375rem] leading-[1.6] text-primary-foreground/60">
 Connaître la valeur actuelle est la première étape — avant de décider quoi que ce soit.
 </p>
 <Button size="default" variant="hero" className="mt-4 w-full" asChild>
 <Link to="/evaluation-gratuite-gatineau">Évaluation gratuite</Link>
 </Button>
 </div>
 </motion.aside>
 </div>
 </div>
 </section>

 <BenefitsList
 overline="Ce que vous recevez"
 title="Votre analyse plex inclut"
 items={benefits}
 />

 <FAQSection items={faq} />

 <StickyGuideBanner guideType="investor_guide" label="Guide investisseur gratuit — recevez-le par courriel" />
 </>
 );
};

export default PlexAnalysisPage;
