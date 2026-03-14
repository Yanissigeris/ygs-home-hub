import { useState, FormEvent } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
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
import { CheckCircle2, MapPin, Phone, Mail, Award, Clock, Heart } from "lucide-react";
import yanisPhoto from "@/assets/yanis-photo.jpg";

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
        compact
        overline="Yanis Gauthier-Sigeris"
        title="Parlons de votre projet"
        subtitle="En réflexion ou prêt à bouger — je peux vous aider à voir plus clair. Pas de pression, juste une conversation honnête."
      />

      {/* Bio */}
      <section className="section-padding bg-background">
        <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <img 
              src={yanisPhoto} 
              alt="Yanis Gauthier-Sigeris - Courtier immobilier" 
              className="w-full rounded-lg"
            />
          </div>
          <div className="lg:col-span-3">
            <p className="label-overline mb-2">À propos</p>
            <h2>Yanis Gauthier-Sigeris</h2>
            <p className="mt-1 text-[0.8125rem] font-medium text-accent">Courtier immobilier · Gatineau et Outaouais</p>
            <p className="mt-0.5 text-[0.6875rem] text-muted-foreground/40">Affilié RE/MAX · Équipe Marty Waite</p>

            <p className="prose-body mt-5">
              Courtier immobilier en Outaouais, Yanis Gauthier-Sigeris accompagne vendeurs, acheteurs et investisseurs avec une approche simple, stratégique et humaine. Son objectif: vous aider à prendre une bonne décision, au bon moment, avec les bonnes informations.
            </p>
            <p className="prose-body mt-3">
              Membre de l'Équipe Marty Waite depuis le début et actif en immobilier résidentiel depuis près de 9 ans, il a eu la chance d'être reconnu par RE/MAX — Club Platine, Club 100% et Temple de la renommée. Mais ce qui le motive, c'est de savoir que ses clients prennent des décisions éclairées.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-[0.75rem] text-muted-foreground/60">
              {services.map((s) => (
                <span key={s} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-accent" /> {s}
                </span>
              ))}
            </div>

            {/* Credibility */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.6875rem] text-muted-foreground/50">
              <span className="flex items-center gap-1"><Clock size={10} /> Près de 9 ans d'expérience</span>
              <span className="flex items-center gap-1"><Award size={10} /> Club Platine · Club 100% · Temple de la renommée</span>
              <span className="flex items-center gap-1"><Heart size={10} /> Approche axée sur la confiance</span>
            </div>

            {/* Contact card */}
            <div className="mt-8 rounded-lg border border-border bg-secondary/40 p-5">
              <p className="text-[0.8125rem] font-semibold text-foreground mb-3">Coordonnées</p>
              <div className="space-y-2 text-[0.75rem] text-muted-foreground">
                <div className="flex items-center gap-2"><Phone size={12} className="text-muted-foreground/40" /> [Téléphone]</div>
                <div className="flex items-center gap-2"><Mail size={12} className="text-muted-foreground/40" /> [Courriel]</div>
                <div className="flex items-center gap-2"><MapPin size={12} className="text-muted-foreground/40" /> [Adresse / secteur desservi]</div>
              </div>
              <div className="mt-3 flex gap-3 text-[0.6875rem] text-muted-foreground/40">
                <span>[Facebook]</span>
                <span>[Instagram]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-secondary/40">
        <div className="section-container max-w-xl">
          <SectionHeading title="Dites-moi où vous en êtes" centered />

          {submitted ? (
            <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-8 text-center">
              <CheckCircle2 size={36} className="mx-auto text-accent" />
              <h3 className="mt-4">Merci!</h3>
              <p className="mt-2 text-[0.8125rem] text-muted-foreground">Je vous reviens rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <Label htmlFor="objectif">Je veux…</Label>
                <Select>
                  <SelectTrigger id="objectif" className="mt-1"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendre">Vendre</SelectItem>
                    <SelectItem value="acheter">Acheter</SelectItem>
                    <SelectItem value="investir">Investir</SelectItem>
                    <SelectItem value="info">Avoir de l'information</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" className="mt-1" required />
                </div>
                <div>
                  <Label htmlFor="courriel">Courriel</Label>
                  <Input id="courriel" type="email" className="mt-1" required />
                </div>
              </div>
              <div>
                <Label htmlFor="tel">Téléphone</Label>
                <Input id="tel" type="tel" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea id="message" rows={3} className="mt-1" placeholder="Décrivez brièvement votre projet…" />
              </div>
              <Button type="submit" size="lg" className="w-full">Envoyer ma demande</Button>
              <p className="text-center text-[0.6875rem] text-muted-foreground/60">
                Zéro pression — je vous donne les chiffres et les options, vous décidez.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactPage;
