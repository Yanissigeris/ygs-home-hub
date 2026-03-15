import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import { Search, Star, Home, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-properties.jpg";

const features = [
  { icon: Search, title: "Recherche personnalisée", text: "Filtres par secteur, prix, type de propriété et caractéristiques — pour trouver exactement ce que vous cherchez." },
  { icon: Star, title: "Propriétés vedettes", text: "Découvrez nos coups de cœur et les meilleures opportunités du moment à Gatineau." },
  { icon: Home, title: "Nouvelles inscriptions", text: "Soyez les premiers informés des propriétés fraîchement mises en marché." },
  { icon: MapPin, title: "Vendu récemment", text: "Consultez les ventes récentes pour mieux comprendre les prix dans votre secteur." },
];

const PropertiesPage = () => (
  <>
    <HeroSection
      overline="Propriétés · Gatineau et Outaouais"
      title="Trouvez votre propriété à Gatineau"
      subtitle="Maisons, condos, plex et terrains — parcourez les propriétés disponibles dans tous les secteurs de Gatineau et de l'Outaouais."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Accompagnement stratégique. Zéro pression."
      backgroundImage={heroImg}
    />

    <CardGrid
      overline="Explorer"
      title="Parcourez les propriétés par catégorie"
      items={features}
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Bientôt disponible"
        title="Un outil de recherche sur mesure"
        subtitle="La section propriétés est en cours de développement. En attendant, contactez-moi directement pour recevoir les inscriptions qui correspondent à vos critères."
      />
      <p className="prose-body mt-5">
        En tant que courtier actif à Gatineau depuis près de 9 ans, j'ai accès à toutes les inscriptions du marché — y compris celles qui ne sont pas encore publiques. Dites-moi ce que vous cherchez, je fais le travail pour vous.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous vendez? Découvrez combien vaut votre propriété — c'est gratuit."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <CTASection
      dark
      title="Vous cherchez une propriété à Gatineau?"
      text="Dites-moi vos critères — je vous envoie les meilleures options avant tout le monde."
      buttons={[
        { label: "Réserver une consultation", href: "/contact-yanis" },
        { label: "Explorer les secteurs", href: "/plateau-aylmer", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default PropertiesPage;
