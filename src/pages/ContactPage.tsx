import PageMeta from "@/components/PageMeta";
import heroImg from "@/assets/hero-gatineau.webp";
import { useState, FormEvent } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsById } from "@/data/reviews";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProfileSection from "@/components/ProfileSection";
import ContactCard from "@/components/ContactCard";
import FormSection from "@/components/FormSection";
import SuccessMessage from "@/components/SuccessMessage";
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
import { MapPin, Phone, Mail, Award, Clock, Heart, Home, TrendingUp, Users } from "lucide-react";
import yanisPhoto from "@/assets/yanis-photo.webp";
import logoYgsVertical from "@/assets/logo-ygs-vertical-blue.webp";

const services = [
  { icon: Home, title: "Vente résidentielle", text: "Stratégie, positionnement prix et mise en marché" },
  { icon: Users, title: "Achat résidentiel", text: "Recherche ciblée, négociation et accompagnement" },
  { icon: TrendingUp, title: "Plex et investissement", text: "Analyse, rendement et stratégie d'acquisition" },
  { icon: MapPin, title: "Relocalisation", text: "Guide local pour acheteurs d'Ottawa et Montréal" },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans d'expérience" },
  { icon: Award, label: "Club Platine · Temple de la renommée" },
  { icon: Heart, label: "Approche axée sur la confiance" },
];

const contactItems = [
  { icon: Phone, text: "[819-210-3044]" },
  { icon: Mail, text: "[yanis@martywaite.com]" },
  { icon: MapPin, text: "[ 216 Chem. d'Aylmer, Gatineau, QC]" },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const success = await submit({
      formType: "contact",
      lang: "fr",
      name: formData.get("nom") as string || "",
      email: formData.get("courriel") as string || "",
      phone: formData.get("tel") as string || undefined,
      message: formData.get("message") as string || undefined,
      objective: formData.get("objectif") as string || undefined,
    });
    if (success) setSubmitted(true);
  };

  return (
   <>
    <PageMeta title="Contacter Yanis Gauthier-Sigeris | YGS" description="Contactez Yanis Gauthier-Sigeris, courtier immobilier à Gatineau et en Outaouais. Consultation gratuite — parlons de votre projet immobilier." />
    <HeroSection
        compact
        overline="Yanis Gauthier-Sigeris"
        title="Parlons de votre projet"
        subtitle="En réflexion ou prêt à bouger — je peux vous aider à voir plus clair. "
        primaryCta={{ label: "Envoyer un message", href: "#contact-form" }}
        secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
        heroBgImage={heroImg}
      />

      <TrustMiniStrip items={trustItems} />

      <ProfileSection
        image={yanisPhoto}
        imageAlt="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau"
        name="Yanis Gauthier-Sigeris"
        role="Courtier immobilier · Gatineau et Outaouais"
        subtitle="Affilié RE/MAX · Équipe Marty Waite"
        logo={logoYgsVertical}
        logoAlt="YGS - Yanis Gauthier-Sigeris Inc."
      >
        <p className="prose-body mt-6">
          Courtier immobilier en Outaouais, j'accompagne vendeurs, acheteurs et investisseurs avec une approche simple, stratégique et humaine. Mon objectif : vous aider à prendre une bonne décision, au bon moment, avec les bonnes informations.
        </p>
        <p className="prose-body mt-4">
          Membre de l'Équipe Marty Waite depuis le début et actif en immobilier résidentiel depuis près de 9 ans, j'ai eu la chance d'être reconnu par RE/MAX — Club Platine, Club 100% et Temple de la renommée. Mais ce qui me motive, c'est de savoir que mes clients prennent des décisions éclairées.
        </p>
        <p className="prose-body mt-4">
          Investisseur immobilier moi-même, je sais également analyser en profondeur les opportunités en multilogement. Mon expérience concrète en flips immobiliers, combinée à ma formation en gestion de projet (AEC), fait de moi un allié incontournable pour tout projet immobilier.
        </p>

        <ContactCard items={contactItems} />
      </ProfileSection>

      <CardGrid
        overline="Services"
        title="Comment je peux vous aider"
        items={services}
        background="alt"
      />

      <FormSection id="contact-form" title="Dites-moi où vous en êtes">
        {submitted ? (
          <SuccessMessage />
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
                <Input id="nom" name="nom" className="mt-1.5" required />
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
              Je vous donne les chiffres et les options, vous décidez.
            </p>
          </form>
        )}
      </FormSection>

      <ReviewSection
        overline="Témoignages"
        title="Ce que disent mes clients"
        reviews={getReviewsById(["s1", "b2", "r1"])}
        columns={3}
        background="alt"
      />

      <CTASection
        dark
        overline="Première étape"
        title="Commencez par la bonne première étape"
        text="Évaluation, consultation achat ou analyse plex — on commence là où vous êtes rendu."
        buttons={[
          { label: "Évaluation Gratuite", href: "/evaluation-gratuite-gatineau" },
          { label: "Voir les services", href: "/vendre-ma-maison-gatineau", variant: "outline" },
        ]}
        trustLine="Je vous donne les chiffres et les options, vous décidez."
      />
    </>
  );
};

export default ContactPage;
