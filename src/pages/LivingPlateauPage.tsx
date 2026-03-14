import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import { Home, Users, MapPin, TreePine } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";

const highlights = [
  { icon: MapPin, title: "Développements récents", text: "Maisons modernes dans des quartiers neufs avec parcs et pistes cyclables." },
  { icon: Home, title: "Excellent rapport qualité-prix", text: "Plus d'espace et de maison pour votre budget qu'en centre-ville." },
  { icon: TreePine, title: "Nature et plein air", text: "Proximité du parc de la Gatineau, sentiers et espaces verts." },
  { icon: Users, title: "Quartiers familiaux", text: "Écoles, garderies, parcs et communauté jeune et dynamique." },
];

const LivingPlateauPage = () => (
  <>
    <HeroSection
      overline="Vivre dans le Plateau · Gatineau"
      title="Vivre dans le Plateau — le guide"
      subtitle="Découvrez le mode de vie dans le Plateau: développements récents, familles, nature et excellent rapport qualité-prix."
      primaryCta={{ label: "Explorer les propriétés", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Voir le quartier", href: "/plateau" }}
      backgroundImage={heroImg}
    />

    <CardGrid
      overline="Mode de vie"
      title="Ce qui rend le Plateau unique"
      items={highlights}
    />

    <ContentBlock narrow>
      <SectionHeading title="Le Plateau, c'est pour les familles" />
      <p className="prose-body mt-5">
        Le Plateau est devenu l'un des secteurs les plus populaires de Gatineau pour les jeunes familles. Maisons neuves, parcs, écoles et accès rapide à tout — c'est un choix de vie qui fait de plus en plus d'adeptes.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous êtes propriétaire dans le Plateau? Découvrez combien vaut votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <CTASection
      dark
      title="Prêt à découvrir le Plateau?"
      text="Parlons de vos critères — je vous montre les meilleures options du secteur."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Voir le quartier", href: "/plateau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default LivingPlateauPage;
