import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import { Home, Users, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";

const highlights = [
  { icon: MapPin, title: "Lac Deschênes", text: "Plage, sports nautiques et couchers de soleil spectaculaires — à deux pas de la maison." },
  { icon: Home, title: "Quartiers de caractère", text: "Rues arborées, maisons avec cachet et communauté soudée." },
  { icon: Coffee, title: "Vie de quartier", text: "Restaurants, cafés, boutiques et marché local — tout à distance de marche." },
  { icon: Users, title: "Communauté bilingue", text: "Écoles françaises et anglaises, activités communautaires et services de proximité." },
];

const LivingAylmerPage = () => (
  <>
    <HeroSection
      overline="Vivre à Aylmer · Gatineau"
      title="Vivre à Aylmer — le guide"
      subtitle="Découvrez le mode de vie à Aylmer: lac, nature, communauté et accès à Ottawa. Tout ce qu'il faut savoir avant de s'installer."
      primaryCta={{ label: "Explorer les propriétés", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Voir le quartier", href: "/aylmer" }}
      backgroundImage={heroImg}
    />

    <CardGrid
      overline="Mode de vie"
      title="Ce qui rend Aylmer unique"
      items={highlights}
    />

    <ContentBlock narrow>
      <SectionHeading title="Un cadre de vie exceptionnel" />
      <p className="prose-body mt-5">
        Aylmer combine le charme d'une petite ville avec les avantages d'une grande région métropolitaine. Accès au lac, au parc de la Gatineau, aux écoles bilingues et à Ottawa en quelques minutes. C'est difficile de faire mieux en termes de qualité de vie.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous pensez vous installer à Aylmer? Réservez une consultation gratuite."
      buttonLabel="Réserver une consultation →"
      href="/consultation-acheteur"
    />

    <CTASection
      dark
      title="Prêt à découvrir Aylmer?"
      text="Parlons de vos critères — je vous montre les meilleures options du secteur."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Voir le quartier", href: "/aylmer", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default LivingAylmerPage;
