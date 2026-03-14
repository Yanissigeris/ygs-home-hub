import { useState, FormEvent } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
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
import { CheckCircle2, Shield, Clock, Lock } from "lucide-react";

const benefits = [
  "Une fourchette de valeur réaliste basée sur les ventes récentes dans votre secteur",
  "Mon avis sur le bon positionnement prix pour votre situation",
  "Les forces de votre propriété à mettre de l'avant",
  "Les points à corriger si nécessaire — et lesquels valent vraiment la peine",
  "Les prochaines étapes possibles, sans engagement ni pression",
];

const trustPoints = [
  { icon: Lock, text: "Vos informations restent strictement confidentielles" },
  { icon: Clock, text: "Réponse personnalisée en 24h — pas un rapport automatisé" },
  { icon: Shield, text: "Aucune obligation, aucun engagement" },
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
        overline="Évaluation gratuite · Gatineau et Outaouais"
        title="Découvrez combien vaut votre propriété à Gatineau"
        subtitle="Recevez une estimation personnalisée basée sur votre propriété, votre secteur et les ventes comparables récentes."
        trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
      />

      {/* Main form section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <p className="label-overline mb-3">Formulaire</p>
              <h2>Demandez votre évaluation gratuite</h2>
              <p className="prose-body mt-3">
                Remplissez ce court formulaire et je vous reviens personnellement avec une analyse de la valeur de votre propriété — pas un rapport automatisé.
              </p>

              {submitted ? (
                <div className="mt-10 rounded-lg border border-accent/30 bg-accent/5 p-10 text-center">
                  <CheckCircle2 size={44} className="mx-auto text-accent" />
                  <h3 className="mt-5">Merci! Votre demande a été envoyée.</h3>
                  <p className="mt-3 text-[0.875rem] text-muted-foreground">Je vous reviens personnellement dans les 24 prochaines heures.</p>
                </div>
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
                          <SelectItem value="3mois">Dans les 3 prochains mois</SelectItem>
                          <SelectItem value="6mois">Dans 6 mois ou plus</SelectItem>
                          <SelectItem value="info">Juste pour savoir</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="my-2 border-t border-border" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="nom">Nom complet</Label>
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
                  <p className="text-center text-[0.75rem] text-muted-foreground/70">
                    Zéro pression — je vous donne les chiffres et les options, vous décidez.
                  </p>
                </form>
              )}
            </div>

            {/* Trust sidebar */}
            <aside className="lg:col-span-2 lg:pt-14">
              <div className="rounded-lg border border-border bg-secondary/50 p-7">
                <h4 className="font-body text-[0.9375rem] font-semibold text-foreground">Une estimation utile, claire et sans pression</h4>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground">
                  Pour vous aider à mieux planifier la suite — que vous soyez prêt à vendre maintenant ou dans quelques mois.
                </p>
                <div className="mt-5 space-y-4">
                  {trustPoints.map((t) => (
                    <div key={t.text} className="flex items-start gap-3">
                      <t.icon size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span className="text-[0.8125rem] text-muted-foreground">{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-dashed border-border bg-card p-7">
                <p className="text-[0.6875rem] text-muted-foreground/50 mb-3">[Témoignage client — à ajouter]</p>
                <p className="text-[0.875rem] italic leading-relaxed text-muted-foreground">
                  "[Témoignage d'un client vendeur qui a apprécié l'approche sans pression de Yanis]"
                </p>
                <p className="mt-3 text-[0.75rem] text-muted-foreground/60">— [Nom du client], [Secteur]</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/40">
        <div className="section-container max-w-3xl">
          <SectionHeading overline="Ce que vous recevez" title="Ce que vous allez obtenir" centered />
          <div className="mt-10 space-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-[0.9375rem] text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Friction reduction */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-2xl text-center">
          <SectionHeading
            title="Pas besoin d'être prêt à vendre tout de suite"
            subtitle="Beaucoup de propriétaires veulent simplement comprendre leur valeur actuelle avant de décider. C'est tout à fait correct. Je vous donne une lecture claire du marché, sans pression et sans obligation."
            centered
          />
          <Button className="mt-8" size="lg" asChild>
            <a href="#top">Remplir le formulaire</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ValuationPage;
