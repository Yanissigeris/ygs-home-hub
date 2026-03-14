import { useState, FormEvent } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Vente résidentielle",
  "Achat résidentiel",
  "Relocalisation Ottawa / Montréal",
  "Plex et investissement",
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        title="Parlons de votre projet immobilier"
        subtitle="Que vous soyez en réflexion ou prêt à passer à l'action, je peux vous aider à voir plus clair."
      />

      {/* Bio */}
      <section className="section-padding bg-background">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagePlaceholder label="Photo professionnelle de Yanis" aspectRatio="aspect-[3/4]" />
          <div>
            <h2 className="text-2xl sm:text-3xl text-foreground">Yanis Gauthier-Sigeris</h2>
            <p className="mt-1 text-sm font-medium text-accent">Courtier immobilier — Gatineau</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Courtier immobilier à Gatineau, j'accompagne vendeurs, acheteurs et investisseurs avec une approche simple, stratégique et humaine. Mon objectif est de vous aider à prendre une bonne décision, au bon moment, avec les bonnes infos.
            </p>
            <div className="mt-6">
              <h3 className="font-body text-base font-semibold text-foreground">Ce que je fais</h3>
              <div className="mt-3 space-y-2">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span className="text-sm text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-2xl">
          <SectionHeading title="Dites-moi où vous en êtes" centered />

          {submitted ? (
            <div className="mt-8 rounded-lg border border-accent bg-accent/10 p-8 text-center">
              <CheckCircle2 size={40} className="mx-auto text-accent" />
              <p className="mt-4 text-lg font-medium text-foreground">Merci pour votre message!</p>
              <p className="mt-2 text-sm text-muted-foreground">Je vous reviens rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <Label htmlFor="objectif">Je veux…</Label>
                <Select>
                  <SelectTrigger id="objectif"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendre">Vendre</SelectItem>
                    <SelectItem value="acheter">Acheter</SelectItem>
                    <SelectItem value="investir">Investir</SelectItem>
                    <SelectItem value="info">Avoir de l'information</SelectItem>
                  </SelectContent>
                </Select>
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
                  <Label htmlFor="delai">Délais</Label>
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
              <div>
                <Label htmlFor="tel">Téléphone</Label>
                <Input id="tel" type="tel" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Décrivez brièvement votre projet ou posez votre question…" />
              </div>
              <Button type="submit" size="lg" className="w-full">Envoyer ma demande</Button>
              <p className="text-center text-xs text-muted-foreground">
                Réponse rapide, sans engagement.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactPage;
