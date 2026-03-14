import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import { Home, Users, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";

const highlights = [
  { icon: MapPin, title: "Centre-ville vibrant", text: "Proximité immédiate du Vieux-Hull, du Musée et de la scène culturelle." },
  { icon: Home, title: "Architecture diversifiée", text: "Des maisons centenaires aux condos modernes — Hull a du caractère." },
  { icon: Coffee, title: "Restaurants et culture", text: "La meilleure scène gastronomique de l'Outaouais, à deux pas d'Ottawa." },
  { icon: Users, title: "Communauté dynamique", text: "Jeunes professionnels, artistes et familles — une communauté en pleine renaissance." },
];

const LivingHullPage = () => (
  <>
    <HeroSection
      overline="Vivre à Hull · Gatineau"
      title="Vivre à Hull — le guide"
      subtitle="Découvrez le mode de vie urbain de Hull: culture, restaurants, proximité Ottawa et prix encore accessibles."
      primaryCta={{ label: "Explorer les propriétés", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Voir le quartier", href: "/hull" }}
      backgroundImage={heroImg}
    />

    <CardGrid
      overline="Mode de vie"
      title="Ce qui rend Hull unique"
      items={highlights}
    />

    <ContentBlock narrow>
      <SectionHeading title="La renaissance de Hull" />
      <p className="prose-body mt-5">
        Hull vit une véritable transformation. De nouveaux projets, une scène gastronomique en plein essor et une communauté dynamique attirent de plus en plus de monde. C'est le moment de découvrir ce secteur — avant que les prix rattrapent la demande.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous cherchez un plex à Hull? Demandez une analyse de rendement."
      buttonLabel="Recevoir une analyse plex →"
      href="/analyse-plex-gatineau"
    />

    <CTASection
      dark
      title="Prêt à découvrir Hull?"
      text="Parlons de vos critères — je vous montre les meilleures options du secteur."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Voir le quartier", href: "/hull", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default LivingHullPage;
