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
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-photo.jpg";
import logoYgsVertical from "@/assets/logo-ygs-vertical-blue.png";

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
        <div className="section-container grid gap-12 lg:gap-16 lg:grid-cols-5 lg:items-start">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={yanisPhoto}
              alt="Yanis Gauthier-Sigeris - Courtier immobilier"
              className="w-full rounded-[1.75rem] object-cover"
            />
            <img
              src={logoYgsVertical}
              alt="YGS - Yanis Gauthier-Sigeris Inc."
              className="mx-auto h-auto"
              style={{ width: "clamp(145px, 20vw, 190px)" }}
            />
          </motion.div>
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <p className="label-overline mb-3">À propos</p>
            <h2>Yanis Gauthier-Sigeris</h2>
            <p className="mt-2 text-[0.9375rem] font-medium text-accent">Courtier immobilier · Gatineau et Outaouais</p>
            <p className="mt-1 text-[0.8125rem] text-muted-foreground/45">Affilié RE/MAX · Équipe Marty Waite</p>

            <p className="prose-body mt-6">
              Courtier immobilier en Outaouais, Yanis Gauthier-Sigeris accompagne vendeurs, acheteurs et investisseurs avec une approche simple, stratégique et humaine. Son objectif: vous aider à prendre une bonne décision, au bon moment, avec les bonnes informations.
            </p>
            <p className="prose-body mt-4">
              Membre de l'Équipe Marty Waite depuis le début et actif en immobilier résidentiel depuis près de 9 ans, il a eu la chance d'être reconnu par RE/MAX — Club Platine, Club 100% et Temple de la renommée. Mais ce qui le motive, c'est de savoir que ses clients prennent des décisions éclairées.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-[0.875rem] text-muted-foreground/55">
              {services.map((s) => (
                <span key={s} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-accent" /> {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] text-muted-foreground/45">
              <span className="flex items-center gap-1.5"><Clock size={12} /> Près de 9 ans d'expérience</span>
              <span className="flex items-center gap-1.5"><Award size={12} /> Club Platine · Club 100% · Temple de la renommée</span>
              <span className="flex items-center gap-1.5"><Heart size={12} /> Approche axée sur la confiance</span>
            </div>

            {/* Contact card */}
            <div className="mt-10 card-elevated border border-border/40 bg-secondary/30 p-7">
              <p className="text-[1rem] font-semibold text-foreground mb-4">Coordonnées</p>
              <div className="space-y-3 text-[0.9375rem] text-muted-foreground">
                <div className="flex items-center gap-3"><Phone size={15} className="text-muted-foreground/35" /> [Téléphone]</div>
                <div className="flex items-center gap-3"><Mail size={15} className="text-muted-foreground/35" /> [Courriel]</div>
                <div className="flex items-center gap-3"><MapPin size={15} className="text-muted-foreground/35" /> [Adresse / secteur desservi]</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-secondary/25">
        <div className="section-container max-w-[36rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading title="Dites-moi où vous en êtes" centered />

            {submitted ? (
              <div className="mt-10 card-elevated border border-accent/25 bg-accent/5 p-10 text-center">
                <CheckCircle2 size={40} className="mx-auto text-accent" />
                <h3 className="mt-5">Merci!</h3>
                <p className="mt-3 text-[0.9375rem] text-muted-foreground">Je vous reviens rapidement.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div>
                  <Label htmlFor="objectif">Je veux…</Label>
                  <Select>
                    <SelectTrigger id="objectif" className="mt-1.5"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
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
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea id="message" rows={4} className="mt-1.5" placeholder="Décrivez brièvement votre projet…" />
                </div>
                <Button type="submit" size="xl" className="w-full">Envoyer ma demande</Button>
                <p className="text-center text-[0.8125rem] text-muted-foreground/50">
                  Zéro pression — je vous donne les chiffres et les options, vous décidez.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
