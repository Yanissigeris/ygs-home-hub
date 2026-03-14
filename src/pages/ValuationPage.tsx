import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
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
import { CheckCircle2, Lock, Clock, Shield } from "lucide-react";
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
        title="Découvrez combien vaut votre propriété à Gatineau"
        subtitle="Recevez une estimation personnalisée basée sur votre propriété, votre secteur et les ventes comparables récentes."
        trustLine="Une estimation utile, claire et sans pression — pour vous aider à mieux planifier la suite."
        agentImage={yanisPhoto}
        agentName="Yanis Gauthier-Sigeris"
      />

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="card-elevated border border-border/40 bg-card p-7 sm:p-9">
                <h2 className="text-[1.375rem] sm:text-[1.625rem]">Demandez votre évaluation gratuite</h2>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  Je vous reviens personnellement avec une analyse claire, pas un rapport automatisé.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/5 p-8 text-center">
                    <CheckCircle2 size={36} className="mx-auto text-accent" />
                    <h3 className="mt-4 text-[1.125rem]">Merci! Demande envoyée.</h3>
                    <p className="mt-2 text-[0.9375rem] text-muted-foreground">Je vous reviens dans les 24 prochaines heures.</p>
                  </div>
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
                        <Label htmlFor="chambres">Chambres / Salles de bain</Label>
                        <Input id="chambres" placeholder="Ex: 3 ch / 2 sdb" className="mt-1.5" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
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
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="tel">Téléphone</Label>
                        <Input id="tel" type="tel" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="contact-pref">Comment me rejoindre?</Label>
                        <Select>
                          <SelectTrigger id="contact-pref" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="appel">Appel</SelectItem>
                            <SelectItem value="texto">Texto</SelectItem>
                            <SelectItem value="courriel">Courriel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" size="xl" className="w-full mt-2">
                      Recevoir mon évaluation gratuite
                    </Button>
                    <p className="text-center text-[0.8125rem] text-muted-foreground/50">
                      Zéro pression — je vous donne les chiffres et les options, vous décidez.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Trust sidebar */}
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

              <div className="card-elevated border border-dashed border-border/50 p-7">
                <p className="text-[0.9375rem] italic leading-[1.6] text-muted-foreground">
                  "[Témoignage client à ajouter]"
                </p>
                <p className="mt-2 text-[0.8125rem] text-muted-foreground/40">— [Nom], [Secteur]</p>
              </div>

              <div className="card-elevated bg-primary p-7 text-primary-foreground border-0">
                <p className="text-[1rem] font-semibold">Vous vendez à Gatineau?</p>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-primary-foreground/60">
                  Demandez aussi votre plan vendeur personnalisé — prix, préparation et stratégie.
                </p>
                <Button size="default" variant="hero" className="mt-4 w-full" asChild>
                  <Link to="/vendre-ma-maison-gatineau">Voir le plan vendeur</Link>
                </Button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <BenefitsList
        overline="Ce que vous recevez"
        title="Votre évaluation inclut"
        items={benefits}
      />

      <ContentBlock narrow centered padSize="md">
        <h3>Pas besoin d'être prêt à vendre</h3>
        <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
          Beaucoup de propriétaires veulent simplement comprendre leur valeur avant de décider. C'est exactement pour ça que ce service existe.
        </p>
        <Button className="mt-6" size="lg" asChild>
          <a href="#top">Remplir le formulaire ↑</a>
        </Button>
      </ContentBlock>
    </>
  );
};

export default ValuationPage;
