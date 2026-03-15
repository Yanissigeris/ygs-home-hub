import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import FAQSection from "@/components/FAQSection";
import SuccessMessage from "@/components/SuccessMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Lock, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-hero.png";

const benefits = [
  "Évaluation réaliste basée sur les ventes comparables récentes",
  "Avis sur les améliorations qui valent la peine (ou pas)",
  "Positionnement prix stratégique pour votre secteur",
  "Plan de mise en marché personnalisé",
  "Calendrier et coordination si vous achetez en parallèle",
];

const trustPoints = [
  { icon: Lock, text: "Informations strictement confidentielles" },
  { icon: Clock, text: "Plan personnalisé en 48h" },
  { icon: Shield, text: "Aucune obligation — aucun engagement" },
];

const faq = [
  { q: "En quoi le plan vendeur est différent d'une évaluation?", a: "L'évaluation vous donne la valeur. Le plan vendeur va plus loin — positionnement prix, préparation, améliorations stratégiques, calendrier de mise en marché et coordination achat-vente si nécessaire." },
  { q: "Est-ce que c'est gratuit?", a: "Oui. L'objectif est de vous donner assez d'information pour prendre une décision éclairée, à votre rythme." },
  { q: "Je ne suis pas sûr de vouloir vendre tout de suite", a: "Parfait — c'est exactement le bon moment pour planifier. La plupart de mes vendeurs commencent par un plan bien avant de mettre en vente." },
];

const SellerPlanPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        compact
        overline="Plan vendeur personnalisé · Gatineau"
        title="Recevez votre plan vendeur personnalisé"
        subtitle="Prix, préparation, mise en marché et calendrier — un plan clair adapté à votre propriété et votre situation."
        trustLine="Un plan stratégique, pas une pitch de vente — pour vous aider à vendre au bon prix, au bon moment."
        agentImage={yanisPhoto}
        agentName="Yanis Gauthier-Sigeris"
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
                <h2 className="text-[1.375rem] sm:text-[1.625rem]">Demandez votre plan vendeur</h2>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  Je prépare un plan adapté à votre propriété — pas un template générique.
                </p>

                {submitted ? (
                  <SuccessMessage
                    title="Merci! Demande envoyée."
                    text="Je vous reviens dans les 48 prochaines heures avec votre plan vendeur."
                  />
                ) : (
                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
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
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="delai">Quand pensez-vous vendre?</Label>
                        <Select>
                          <SelectTrigger id="delai" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maintenant">Le plus tôt possible</SelectItem>
                            <SelectItem value="3mois">D'ici 3 mois</SelectItem>
                            <SelectItem value="6mois">6 mois ou plus</SelectItem>
                            <SelectItem value="info">Juste pour planifier</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="achat">Achetez-vous en parallèle?</Label>
                        <Select>
                          <SelectTrigger id="achat" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oui">Oui</SelectItem>
                            <SelectItem value="non">Non</SelectItem>
                            <SelectItem value="possible">Peut-être</SelectItem>
                          </SelectContent>
                        </Select>
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
                      <Label htmlFor="notes">Notes (optionnel)</Label>
                      <Textarea id="notes" rows={3} className="mt-1.5" placeholder="Contexte, questions, situation particulière…" />
                    </div>

                    <Button type="submit" size="xl" variant="accent" className="w-full mt-2 shadow-md font-semibold">
                      Recevoir mon plan vendeur
                    </Button>
                    <p className="text-center text-[0.8125rem] text-muted-foreground/50">
                      Zéro pression — je vous donne les chiffres et les options, vous décidez.
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
                <p className="text-[1rem] font-semibold">Pas encore prêt?</p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-primary-foreground/60">
                  Commencez par une évaluation gratuite — c'est la première étape pour comprendre votre position.
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
        title="Votre plan vendeur inclut"
        items={benefits}
      />

      <ContentBlock narrow centered padSize="md">
        <h3>Planifier ne veut pas dire s'engager</h3>
        <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
          Les meilleurs résultats de vente commencent par une bonne planification. Ce plan est un premier pas — pas un contrat.
        </p>
        <Button className="mt-6" size="lg" asChild>
          <a href="#top">Remplir le formulaire ↑</a>
        </Button>
      </ContentBlock>

      <FAQSection items={faq} />
    </>
  );
};

export default SellerPlanPage;
