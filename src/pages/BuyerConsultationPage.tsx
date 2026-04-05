import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import FAQSection from "@/components/FAQSection";
import SuccessMessage from "@/components/SuccessMessage";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Lock, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero.webp";
import heroImg from "@/assets/hero-buyer-consultation.webp";

const benefits = [
  "Échange personnalisé sur vos critères et priorités",
  "Présentation des secteurs adaptés à votre profil",
  "Explication du processus d'achat au Québec",
  "Lecture du marché actuel et des prix par secteur",
  "Prochaines étapes claires, sans engagement",
];

const trustPoints = [
  { icon: Lock, text: "Consultation confidentielle" },
  { icon: Clock, text: "Réponse en 24h" },
  { icon: Shield, text: "Aucune obligation — aucun engagement" },
];

const afterSteps = [
  { title: "Explorer les quartiers", text: "Comparer les secteurs de Gatineau selon votre style de vie, votre budget et vos priorités.", href: "/quartiers-a-considerer-a-gatineau", cta: "Voir les quartiers", highlight: true },
  { title: "Guide acheteur", text: "Le processus d'achat au Québec expliqué simplement — de la recherche au notaire.", href: "/guide-acheteur-gatineau", cta: "Lire le guide" },
];

const faq = [
  { q: "Combien coûte la consultation?", a: "C'est gratuit et sans engagement. L'objectif est de comprendre votre situation et de voir si je peux vous aider." },
  { q: "Combien de temps dure la consultation?", a: "Environ 20-30 minutes. On couvre vos critères, le marché actuel et les prochaines étapes." },
  { q: "Je ne suis pas encore prêt à acheter — c'est quand même utile?", a: "Absolument. La plupart des acheteurs commencent par se renseigner. Mieux vous comprenez le marché, meilleure sera votre décision." },
];

const BuyerConsultationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
     <>
      <PageMeta title="Consultation acheteur gratuite · Gatineau" description="Consultation acheteur gratuite à Gatineau. Clarifiez vos critères, budget et options par quartier avec un courtier expérimenté." />
    <ServiceJsonLd name="Consultation acheteur gratuite — Gatineau" description="Consultation gratuite pour acheteurs à Gatineau. Clarifiez vos critères, budget et options par quartier avec un courtier expérimenté." url="/consultation-acheteur" serviceType="Real Estate Buyer Consultation" />
      <HeroSection
        compact
        overline="Consultation acheteur · Gatineau"
        title="Réservez votre consultation acheteur gratuite"
        subtitle="On parle de vos critères, votre budget et vos questions — pour que vous puissiez acheter en toute confiance."
        trustLine="Gratuit, confidentiel et sans engagement."
        heroBgImage={heroImg}
      />

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-5">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-elevated border border-border/40 bg-card p-7 sm:p-9">
                <h2 className="text-[1.375rem] sm:text-[1.625rem]">Réservez votre consultation</h2>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  Dites-moi ce que vous cherchez — je vous reviens avec un plan personnalisé.
                </p>

                {submitted ? (
                  <SuccessMessage
                    title="Merci! Demande envoyée."
                    text="Je vous reviens dans les 24 prochaines heures."
                  />
                ) : (
                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
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
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="tel">Téléphone</Label>
                        <Input id="tel" type="tel" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget approximatif</Label>
                        <Select>
                          <SelectTrigger id="budget" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="300">Moins de 300 000 $</SelectItem>
                            <SelectItem value="400">300 000 $ - 400 000 $</SelectItem>
                            <SelectItem value="500">400 000 $ - 500 000 $</SelectItem>
                            <SelectItem value="600">500 000 $ - 600 000 $</SelectItem>
                            <SelectItem value="700">600 000 $ et plus</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="secteur">Secteur d'intérêt</Label>
                        <Select>
                          <SelectTrigger id="secteur" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aylmer">Aylmer / Plateau</SelectItem>
                            <SelectItem value="hull">Hull</SelectItem>
                            <SelectItem value="gatineau">Gatineau centre</SelectItem>
                            <SelectItem value="buckingham">Buckingham / Masson-Angers</SelectItem>
                            <SelectItem value="indecis">Pas encore décidé</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="delai">Quand pensez-vous acheter?</Label>
                        <Select>
                          <SelectTrigger id="delai" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maintenant">Le plus tôt possible</SelectItem>
                            <SelectItem value="3mois">D'ici 3 mois</SelectItem>
                            <SelectItem value="6mois">6 mois ou plus</SelectItem>
                            <SelectItem value="info">Juste pour me renseigner</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="notes">Questions ou précisions (optionnel)</Label>
                      <Textarea id="notes" rows={3} className="mt-1.5" placeholder="Type de propriété recherché, quartier préféré, questions…" />
                    </div>

                    <Button type="submit" size="xl" variant="accent" className="w-full mt-2 shadow-md font-semibold">
                      Réserver ma consultation
                    </Button>
                    <p className="text-center text-[0.8125rem] text-muted-foreground/50">
                      Gratuit et sans engagement — je vous aide à y voir plus clair.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.aside
              className="lg:col-span-2 space-y-5 lg:pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-elevated border border-border/40 bg-secondary/30 p-7">
                <p className="text-[1rem] font-semibold text-foreground">Gratuit et confidentiel</p>
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
                <p className="text-[1rem] font-semibold">Vous vendez aussi?</p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-primary-foreground/60">
                  Demandez votre évaluation gratuite pour clarifier votre budget d'achat.
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
        title="Votre consultation inclut"
        items={benefits}
      />

      <FunnelNextStep
        overline="En attendant"
        title="Explorez en attendant votre consultation"
        subtitle="Familiarisez-vous avec le marché et les quartiers de Gatineau."
        steps={afterSteps}
        background="alt"
      />

      <FAQSection items={faq} />

      <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
    </>
  );
};

export default BuyerConsultationPage;
