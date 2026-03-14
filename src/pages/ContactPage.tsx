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
import { CheckCircle2, MapPin, Phone, Mail, Award, Clock, Heart } from "lucide-react";

const services = [
  "Vente résidentielle",
  "Achat résidentiel",
  "Relocalisation Ottawa / Montréal",
  "Plex et investissement",
];

const credPoints = [
  { icon: Clock, text: "Près de 9 ans d'expérience en Outaouais" },
  { icon: Award, text: "Distinctions RE/MAX: Club Platine, Club 100%, Temple de la renommée" },
  { icon: Heart, text: "Approche axée sur la confiance et la satisfaction client" },
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
        overline="Contact · Yanis Gauthier-Sigeris"
        title="Parlons de votre projet immobilier"
        subtitle="Que vous soyez en réflexion ou prêt à passer à l'action, je peux vous aider à voir plus clair. Pas de pression — juste une conversation honnête sur votre situation."
      />

      {/* Bio section */}
      <section className="section-padding bg-background">
        <div className="section-container grid gap-14 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <ImagePlaceholder label="Photo professionnelle de Yanis — à ajouter" aspectRatio="aspect-[3/4]" />
          </div>
          <div className="lg:col-span-3">
            <p className="label-overline mb-3">À propos</p>
            <h2>Yanis Gauthier-Sigeris</h2>
            <p className="mt-1 text-[0.875rem] font-medium text-accent">Courtier immobilier · Gatineau et Outaouais</p>
            <p className="mt-1 text-[0.75rem] text-muted-foreground/50">Affilié RE/MAX · Équipe Marty Waite</p>

            <p className="prose-body mt-6">
              Courtier immobilier en Outaouais, j'accompagne vendeurs, acheteurs et investisseurs avec une approche simple, stratégique et humaine. Mon objectif: vous aider à prendre une bonne décision, au bon moment, avec les bonnes informations.
            </p>
            <p className="prose-body mt-4">
              Après près de 9 ans dans l'immobilier résidentiel en Outaouais, je connais bien le marché local, les secteurs et les réalités terrain. J'ai fait partie de l'Équipe Marty Waite depuis le début, et j'ai eu la chance d'être reconnu par RE/MAX à plusieurs reprises — Club Platine, Club 100% et Temple de la renommée.
            </p>
            <p className="prose-body mt-4">
              Mais au-delà des reconnaissances, ce qui me motive, c'est de savoir que mes clients prennent des décisions éclairées. Je ne suis pas là pour pousser. Je suis là pour guider.
            </p>

            <div className="mt-8">
              <h4 className="font-body text-[0.875rem] font-semibold text-foreground">Ce que je fais</h4>
              <div className="mt-3 space-y-2.5">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-accent" />
                    <span className="text-[0.875rem] text-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credibility */}
            <div className="mt-8 space-y-3">
              {credPoints.map((c) => (
                <div key={c.text} className="flex items-start gap-3">
                  <c.icon size={15} className="mt-0.5 shrink-0 text-muted-foreground/40" />
                  <span className="text-[0.8125rem] text-muted-foreground">{c.text}</span>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="mt-10 rounded-lg border border-border bg-secondary/40 p-6">
              <h4 className="font-body text-[0.875rem] font-semibold text-foreground mb-4">Coordonnées</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-muted-foreground/50" />
                  <span className="text-[0.8125rem] text-muted-foreground">[Téléphone — à ajouter]</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-muted-foreground/50" />
                  <span className="text-[0.8125rem] text-muted-foreground">[Courriel — à ajouter]</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={15} className="text-muted-foreground/50" />
                  <span className="text-[0.8125rem] text-muted-foreground">Gatineau, Aylmer, Hull, Plateau, Buckingham, Masson-Angers</span>
                </div>
              </div>
              <div className="mt-4 flex gap-4 text-[0.75rem] text-muted-foreground/50">
                <span>[Facebook — à ajouter]</span>
                <span>[Instagram — à ajouter]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding bg-secondary/40">
        <div className="section-container max-w-2xl">
          <SectionHeading overline="Formulaire" title="Dites-moi où vous en êtes" centered />
          <p className="prose-body mx-auto mt-3 text-center">
            Décrivez brièvement votre situation et je vous reviens rapidement — habituellement en moins de 24h.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-lg border border-accent/30 bg-accent/5 p-10 text-center">
              <CheckCircle2 size={44} className="mx-auto text-accent" />
              <h3 className="mt-5">Merci pour votre message!</h3>
              <p className="mt-3 text-[0.875rem] text-muted-foreground">Je vous reviens rapidement — habituellement en moins de 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <Label htmlFor="objectif">Je veux…</Label>
                <Select>
                  <SelectTrigger id="objectif" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vendre">Vendre ma propriété</SelectItem>
                    <SelectItem value="acheter">Acheter une propriété</SelectItem>
                    <SelectItem value="investir">Investir (plex ou autre)</SelectItem>
                    <SelectItem value="info">Avoir de l'information</SelectItem>
                  </SelectContent>
                </Select>
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
                  <Label htmlFor="delai">Délais</Label>
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
              <div>
                <Label htmlFor="tel">Téléphone</Label>
                <Input id="tel" type="tel" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea id="message" rows={4} className="mt-1.5" placeholder="Décrivez brièvement votre projet ou posez votre question…" />
              </div>
              <Button type="submit" size="xl" className="w-full">Envoyer ma demande</Button>
              <p className="text-center text-[0.75rem] text-muted-foreground/70">
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
