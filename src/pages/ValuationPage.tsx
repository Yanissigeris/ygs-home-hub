import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import SuccessMessage from "@/components/SuccessMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lock, Clock, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero.png";

const benefits = [
  "Fourchette de valeur réaliste basée sur les ventes récentes",
  "Avis sur le positionnement prix pour votre situation",
  "Forces de votre propriété à mettre de l'avant",
  "Points à corriger — et lesquels valent la peine",
  "Prochaines étapes possibles, sans engagement",
];

const trustPoints = [
  { icon: Lock, text: "Informations strictement confidentielles" },
  { icon: Clock, text: "Réponse personnalisée en 24h" },
  { icon: Shield, text: "Aucune obligation — aucun engagement" },
];

const afterSteps = [
  { title: "Plan vendeur", text: "Allez plus loin — recevez un plan complet: prix, préparation, mise en marché et calendrier.", href: "/plan-vendeur-gatineau", cta: "Recevoir mon plan", highlight: true },
  { title: "Parler à Yanis", text: "Discuter de votre situation et vos options — sans engagement.", href: "/contact-yanis", cta: "Réserver un appel" },
];

const ValuationPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        compact
        overline="Évaluation gratuite · Gatineau"
        title="Combien vaut votre propriété?"
        subtitle="Recevez une estimation personnalisée basée sur votre propriété, votre secteur et les ventes comparables récentes — en 24h."
        trustLine="Gratuit · Confidentiel · Sans engagement"
        agentImage={yanisPhoto}
        agentName="Yanis Gauthier-Sigeris"
      />

      {/* Trust bar */}
      <section className="border-b border-border/40 bg-secondary/40">
        <div className="section-container py-4 sm:py-5">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-10">
            {trustPoints.map((t) => (
              <div key={t.text} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-muted-foreground/65">
                <t.icon size={14} className="text-accent shrink-0" />
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-[42rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-elevated border border-border/40 bg-card p-7 sm:p-10">
              <h2 className="text-[1.5rem] sm:text-[1.75rem]">Demandez votre évaluation gratuite</h2>
              <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                Je vous reviens personnellement avec une analyse claire — pas un rapport automatisé.
              </p>

              {submitted ? (
                <SuccessMessage
                  title="Merci! Demande envoyée."
                  text="Je vous reviens dans les 24 prochaines heures avec votre évaluation."
                />
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <Label htmlFor="adresse">Adresse de la propriété</Label>
                    <Input id="adresse" placeholder="123 rue Exemple, Gatineau" className="mt-1.5" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="type">Type de propriété</Label>
                      <Select>
                        <SelectTrigger id="type" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maison">Maison unifamiliale</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="jumelé">Jumelé</SelectItem>
                          <SelectItem value="rangée">Maison en rangée</SelectItem>
                          <SelectItem value="plex">Plex (2-5 logements)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="secteur">Secteur</Label>
                      <Select>
                        <SelectTrigger id="secteur" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aylmer">Aylmer / Plateau</SelectItem>
                          <SelectItem value="hull">Hull</SelectItem>
                          <SelectItem value="gatineau">Gatineau centre</SelectItem>
                          <SelectItem value="buckingham">Buckingham / Masson-Angers</SelectItem>
                          <SelectItem value="autre">Autre secteur</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="delai">Quand pensez-vous vendre?</Label>
                    <Select>
                      <SelectTrigger id="delai" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maintenant">Le plus tôt possible</SelectItem>
                        <SelectItem value="3mois">D'ici 3 mois</SelectItem>
                        <SelectItem value="6mois">6 mois ou plus</SelectItem>
                        <SelectItem value="info">Juste pour savoir</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Label htmlFor="tel">Téléphone (optionnel)</Label>
                    <Input id="tel" type="tel" className="mt-1.5" />
                  </div>

                  <Button type="submit" size="xl" variant="accent" className="w-full mt-2 shadow-md font-semibold">
                    Recevoir mon évaluation gratuite
                  </Button>
                  <p className="text-center text-[0.8125rem] text-muted-foreground/50">
                    Zéro pression — je vous donne les chiffres et les options, vous décidez.
                  </p>
                </form>
              )}
            </div>

            {/* Inline trust proof */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[0.8125rem] text-muted-foreground/50">
              <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-accent" /> Club Platine RE/MAX</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-accent" /> Près de 9 ans en Outaouais</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-accent" /> Spécialiste Gatineau</span>
            </div>
          </motion.div>
        </div>
      </section>

      <BenefitsList
        overline="Ce que vous recevez"
        title="Votre évaluation inclut"
        items={benefits}
      />

      <FunnelNextStep
        overline="Et ensuite?"
        title="Après votre évaluation"
        subtitle="Vous aurez les chiffres. Voici les options pour aller plus loin."
        steps={afterSteps}
        background="alt"
      />
    </>
  );
};

export default ValuationPage;
