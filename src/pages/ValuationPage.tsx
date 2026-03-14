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
import { CheckCircle2, Shield } from "lucide-react";

const benefits = [
  "Une fourchette de valeur réaliste",
  "Mon avis sur le bon positionnement",
  "Les forces à mettre de l'avant",
  "Les points à corriger si nécessaire",
  "Les prochaines étapes possibles, sans engagement",
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
        title="Découvrez combien vaut votre propriété à Gatineau"
        subtitle="Recevez une estimation personnalisée basée sur votre secteur, le type de propriété et les ventes comparables récentes."
      />

      {/* Form section */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl text-foreground">Demandez votre évaluation gratuite</h2>

              {submitted ? (
                <div className="mt-8 rounded-lg border border-accent bg-accent/10 p-8 text-center">
                  <CheckCircle2 size={40} className="mx-auto text-accent" />
                  <p className="mt-4 text-lg font-medium text-foreground">Merci! Votre demande a été envoyée.</p>
                  <p className="mt-2 text-sm text-muted-foreground">Je vous reviens dans les 24 prochaines heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <Label htmlFor="adresse">Adresse de la propriété</Label>
                    <Input id="adresse" placeholder="123 rue Exemple, Gatineau" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="type">Type de propriété</Label>
                      <Select>
                        <SelectTrigger id="type"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
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
                      <Input id="chambres" placeholder="Ex: 3 ch / 2 sdb" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="secteur">Secteur</Label>
                      <Select>
                        <SelectTrigger id="secteur"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aylmer">Aylmer / Plateau</SelectItem>
                          <SelectItem value="hull">Hull</SelectItem>
                          <SelectItem value="gatineau">Gatineau centre</SelectItem>
                          <SelectItem value="buckingham">Buckingham / Masson-Angers</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="delai">Délais envisagés</Label>
                      <Select>
                        <SelectTrigger id="delai"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maintenant">Le plus tôt possible</SelectItem>
                          <SelectItem value="3mois">Dans les 3 prochains mois</SelectItem>
                          <SelectItem value="6mois">Dans 6 mois</SelectItem>
                          <SelectItem value="info">Juste pour savoir</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <hr className="border-border" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="nom">Nom complet</Label>
                      <Input id="nom" required />
                    </div>
                    <div>
                      <Label htmlFor="courriel">Courriel</Label>
                      <Input id="courriel" type="email" required />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="tel">Téléphone</Label>
                      <Input id="tel" type="tel" />
                    </div>
                    <div>
                      <Label htmlFor="contact-pref">Préférence de contact</Label>
                      <Select>
                        <SelectTrigger id="contact-pref"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appel">Appel</SelectItem>
                          <SelectItem value="texto">Texto</SelectItem>
                          <SelectItem value="courriel">Courriel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">Envoyer ma demande</Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Zéro pression — je vous donne les chiffres et les options, vous décidez.
                  </p>
                </form>
              )}
            </div>

            {/* Trust sidebar */}
            <aside className="lg:col-span-2 lg:pt-10">
              <div className="rounded-lg border border-border bg-secondary p-6">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-accent" />
                  <h3 className="font-body text-base font-semibold text-foreground">Confidentiel et sans engagement</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Vos informations restent confidentielles. Vous recevrez une analyse personnalisée sans aucune obligation.
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-border bg-card p-6">
                <p className="text-sm font-medium text-foreground">[Placeholder: Témoignage client]</p>
                <p className="mt-2 text-sm italic text-muted-foreground">"Yanis m'a donné une lecture claire et réaliste du marché…"</p>
                <p className="mt-2 text-xs text-muted-foreground">— [Nom], [Secteur]</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-3xl">
          <SectionHeading title="Ce que vous allez obtenir" centered />
          <div className="mt-8 space-y-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Friction reduction */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl text-center">
          <SectionHeading
            title="Pas besoin d'être prêt à vendre tout de suite"
            subtitle="Plusieurs propriétaires veulent simplement comprendre leur valeur actuelle avant de décider. C'est correct. Je peux vous donner une lecture claire du marché sans pression."
            centered
          />
        </div>
      </section>
    </>
  );
};

export default ValuationPage;
