import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
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
import { CheckCircle2, MapPin, Phone, Mail, Award, Clock, Heart, Home, TrendingUp, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import yanisPhoto from "@/assets/yanis-photo.jpg";
import logoYgsVertical from "@/assets/logo-ygs-vertical-blue.png";

const services = [
  { icon: Home, title: "Vente résidentielle", desc: "Stratégie, positionnement prix et mise en marché" },
  { icon: Users, title: "Achat résidentiel", desc: "Recherche ciblée, négociation et accompagnement" },
  { icon: TrendingUp, title: "Plex et investissement", desc: "Analyse, rendement et stratégie d'acquisition" },
  { icon: MapPin, title: "Relocalisation", desc: "Guide local pour acheteurs d'Ottawa et Montréal" },
];

const credPoints = [
  { icon: Clock, label: "Près de 9 ans d'expérience" },
  { icon: Award, label: "Club Platine · Temple de la renommée" },
  { icon: Heart, label: "Approche axée sur la confiance" },
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
        primaryCta={{ label: "Envoyer un message", href: "#contact-form" }}
        secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      />

      {/* Credibility mini-strip */}
      <section className="border-b border-border/30 bg-secondary/30">
        <div className="section-container py-5 sm:py-6">
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {credPoints.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-muted-foreground/60">
                <item.icon size={14} className="text-accent shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-background">
        <div className="section-container grid gap-12 lg:gap-16 lg:grid-cols-[38%_62%] lg:items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={yanisPhoto}
              alt="Yanis Gauthier-Sigeris - Courtier immobilier"
              className="w-full rounded-[1.75rem] object-cover aspect-[3/4]"
            />
            <div className="text-center">
              <img
                src={logoYgsVertical}
                alt="YGS - Yanis Gauthier-Sigeris Inc."
                className="mx-auto h-auto"
                style={{ width: "clamp(145px, 20vw, 180px)" }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <p className="label-overline mb-3">À propos</p>
            <h2>Yanis Gauthier-Sigeris</h2>
            <p className="mt-2 text-[1.0625rem] font-medium text-accent">Courtier immobilier · Gatineau et Outaouais</p>
            <p className="mt-1.5 text-[0.875rem] text-muted-foreground/45">Affilié RE/MAX · Équipe Marty Waite</p>

            <p className="prose-body mt-6">
              Courtier immobilier en Outaouais, Yanis Gauthier-Sigeris accompagne vendeurs, acheteurs et investisseurs avec une approche simple, stratégique et humaine. Son objectif: vous aider à prendre une bonne décision, au bon moment, avec les bonnes informations.
            </p>
            <p className="prose-body mt-4">
              Membre de l'Équipe Marty Waite depuis le début et actif en immobilier résidentiel depuis près de 9 ans, il a eu la chance d'être reconnu par RE/MAX — Club Platine, Club 100% et Temple de la renommée. Mais ce qui le motive, c'est de savoir que ses clients prennent des décisions éclairées.
            </p>

            {/* Contact card */}
            <div className="mt-10 card-elevated border border-border/40 bg-secondary/25 p-7">
              <p className="text-[1.0625rem] font-semibold text-foreground mb-5">Coordonnées</p>
              <div className="space-y-3.5 text-[0.9375rem] text-muted-foreground">
                <div className="flex items-center gap-3"><Phone size={16} className="text-accent/50" /> [Téléphone]</div>
                <div className="flex items-center gap-3"><Mail size={16} className="text-accent/50" /> [Courriel]</div>
                <div className="flex items-center gap-3"><MapPin size={16} className="text-accent/50" /> [Adresse / secteur desservi]</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/20">
        <div className="section-container max-w-[52rem]">
          <motion.div
            className="text-center mb-12 max-w-[40rem] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading overline="Services" title="Comment je peux vous aider" centered />
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card-elevated border border-border/40 bg-card p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary mb-4">
                  <s.icon size={20} />
                </div>
                <h3 className="text-[1.0625rem]">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="contact-form" className="section-padding bg-background">
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

      <CTASection
        dark
        overline="Prochaine étape"
        title="Commencez par la bonne première étape"
        text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
        buttons={[
          { label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" },
          { label: "Voir les services", href: "/vendre-ma-maison-gatineau", variant: "outline" },
        ]}
        trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
      />
    </>
  );
};

export default ContactPage;
