import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import SectorLinks from "@/components/SectorLinks";
import heroImg from "@/assets/hero-neighborhoods.jpg";

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, nature et accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, proximité centre-ville Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, campagne" },
  { name: "Gatineau (centre)", href: "/gatineau", detail: "Résidentiel, services, banlieue accessible" },
  { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, quartiers établis, qualité de vie" },
  { name: "Plateau", href: "/plateau", detail: "Familles, développements récents, parcs" },
];

const NeighborhoodsOverviewPage = () => (
  <>
    <HeroSection
      overline="Quartiers · Gatineau et Outaouais"
      title="Les quartiers à considérer à Gatineau"
      subtitle="Chaque secteur de Gatineau a sa personnalité — familial, urbain, nature ou investissement. Explorez les quartiers pour trouver celui qui vous correspond."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Expertise locale. Zéro pression."
      backgroundImage={heroImg}
    />

    <SectorLinks
      overline="Explorer les secteurs"
      title="Tous les quartiers de Gatineau"
      sectors={sectors}
    />

    <ContentBlock narrow>
      <SectionHeading title="Chaque quartier a son caractère" />
      <p className="prose-body mt-5">
        Le bon secteur dépend de votre budget, votre trajet, votre style de vie et vos priorités familiales. Après près de 9 ans à Gatineau, je connais les avantages et les compromis de chaque quartier — et je peux vous aider à choisir le bon.
      </p>
    </ContentBlock>

    <CTASection
      dark
      title="Besoin d'aide pour choisir?"
      text="Parlons de vos critères — je vous recommande les secteurs les plus adaptés à votre situation."
      buttons={[
        { label: "Réserver une consultation", href: "/contact-yanis" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default NeighborhoodsOverviewPage;
