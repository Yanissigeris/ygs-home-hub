import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
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
import { CheckCircle2, Lock, Clock, Shield } from "lucide-react";

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
      />

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-[0_2px_12px_-4px_hsl(200_30%_14%_/_0.06)]">
                <h2 className="text-[1.25rem] sm:text-[1.5rem]">Demandez votre évaluation gratuite</h2>
                <p className="mt-1.5 text-[0.8125rem] text-muted-foreground">
                  Je vous reviens personnellement avec une analyse claire, pas un rapport automatisé.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-6 text-center">
                    <CheckCircle2 size={32} className="mx-auto text-accent" />
                    <h3 className="mt-3 text-base">Merci! Demande envoyée.</h3>
                    <p className="mt-1.5 text-[0.8125rem] text-muted-foreground">Je vous reviens dans les 24 prochaines heures.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                    <div>
                      <Label htmlFor="adresse">Adresse de la propriété</Label>
                      <Input id="adresse" placeholder="123 rue Exemple, Gatineau" className="mt-1" required />
                    </div>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="type">Type de propriété</Label>
                        <Select>
                          <SelectTrigger id="type" className="mt-1"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
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
                        <Input id="chambres" placeholder="Ex: 3 ch / 2 sdb" className="mt-1" />
                      </div>
                    </div>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="secteur">Secteur</Label>
                        <Select>
                          <SelectTrigger id="secteur" className="mt-1"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
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
                          <SelectTrigger id="delai" className="mt-1"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maintenant">Le plus tôt possible</SelectItem>
                            <SelectItem value="3mois">D'ici 3 mois</SelectItem>
                            <SelectItem value="6mois">6 mois ou plus</SelectItem>
                            <SelectItem value="info">Juste pour savoir</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="h-px bg-border" />

                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="nom">Nom</Label>
                        <Input id="nom" className="mt-1" required />
                      </div>
                      <div>
                        <Label htmlFor="courriel">Courriel</Label>
                        <Input id="courriel" type="email" className="mt-1" required />
                      </div>
                    </div>
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="tel">Téléphone</Label>
                        <Input id="tel" type="tel" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="contact-pref">Comment me rejoindre?</Label>
                        <Select>
                          <SelectTrigger id="contact-pref" className="mt-1"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="appel">Appel</SelectItem>
                            <SelectItem value="texto">Texto</SelectItem>
                            <SelectItem value="courriel">Courriel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" size="xl" className="w-full mt-1">
                      Recevoir mon évaluation gratuite
                    </Button>
                    <p className="text-center text-[0.625rem] text-muted-foreground/55">
                      Zéro pression — je vous donne les chiffres et les options, vous décidez.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Trust sidebar */}
            <aside className="lg:col-span-2 space-y-4 lg:pt-2">
              <div className="rounded-lg border border-border bg-secondary/40 p-5">
                <p className="text-[0.8125rem] font-semibold text-foreground">Confidentiel et sans engagement</p>
                <div className="mt-3 space-y-2.5">
                  {trustPoints.map((t) => (
                    <div key={t.text} className="flex items-center gap-2">
                      <t.icon size={13} className="shrink-0 text-accent" />
                      <span className="text-[0.75rem] text-muted-foreground">{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-dashed border-border p-5">
                <p className="text-[0.8125rem] italic leading-relaxed text-muted-foreground">
                  "[Témoignage client à ajouter]"
                </p>
                <p className="mt-1.5 text-[0.625rem] text-muted-foreground/45">— [Nom], [Secteur]</p>
              </div>

              <div className="rounded-lg bg-primary p-5 text-primary-foreground">
                <p className="text-[0.8125rem] font-semibold">Vous vendez à Gatineau?</p>
                <p className="mt-1 text-[0.75rem] leading-relaxed text-primary-foreground/65">
                  Demandez aussi votre plan vendeur personnalisé — prix, préparation et stratégie.
                </p>
                <Button size="sm" variant="hero" className="mt-3 w-full" asChild>
                  <Link to="/vendre-ma-maison-gatineau">Voir le plan vendeur</Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/40">
        <div className="section-container max-w-2xl">
          <SectionHeading overline="Ce que vous recevez" title="Votre évaluation inclut" />
          <div className="mt-5 space-y-2">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-[0.8125rem] text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Friction reduction */}
      <section className="py-10 bg-background">
        <div className="section-container max-w-md text-center">
          <h3>Pas besoin d'être prêt à vendre</h3>
          <p className="mt-1.5 text-[0.8125rem] text-muted-foreground">
            Beaucoup de propriétaires veulent simplement comprendre leur valeur avant de décider. C'est exactement pour ça que ce service existe.
          </p>
          <Button className="mt-4" size="default" asChild>
            <a href="#top">Remplir le formulaire ↑</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ValuationPage;
