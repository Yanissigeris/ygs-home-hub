import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import SectorLinks from "@/components/SectorLinks";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import FAQSection from "@/components/FAQSection";
import { Clock, Award, Shield, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-neighborhoods.webp";

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste de tous les secteurs" },
  { icon: Shield, label: "Accompagnement à votre rythme" },
];

const sectors = [
  { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, quartiers établis, qualité de vie" },
  { name: "Hull", href: "/hull", detail: "Urbain, culture, proximité centre-ville Ottawa" },
  { name: "Plateau", href: "/plateau", detail: "Familles, développements récents, parcs" },
  { name: "Gatineau (centre)", href: "/gatineau", detail: "Résidentiel, services, banlieue accessible" },
  { name: "Chelsea", href: "/chelsea", detail: "Village pittoresque, parc de la Gatineau" },
  { name: "Cantley", href: "/cantley", detail: "Collines, grands terrains, vie rurale" },
  { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, chalets, nature sauvage" },
  { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Rivière, prix accessibles, nature" },
  { name: "Masson-Angers", href: "/masson-angers", detail: "Constructions neuves, familles, en croissance" },
  { name: "Pontiac", href: "/pontiac", detail: "Grands espaces, rivière, vie rurale" },
  { name: "Côte-d'Azur", href: "/cote-dazur-gatineau", detail: "Résidentiel établi, bungalows, abordable" },
  { name: "Limbour", href: "/limbour", detail: "Familial, parcs, banlieue moderne" },
];

const lifestyleGuides = [
  { icon: MapPin, title: "Vivre à Aylmer", text: "Lac, nature, communauté et accès à Ottawa.", cta: "Lire le guide", href: "/vivre-a-aylmer" },
  { icon: Home, title: "Vivre à Hull", text: "Culture, restaurants et proximité Ottawa.", cta: "Lire le guide", href: "/vivre-a-hull" },
  { icon: Coffee, title: "Vivre dans le Plateau", text: "Familles, développements récents et nature.", cta: "Lire le guide", href: "/vivre-dans-le-plateau" },
];

const faq = [
  { q: "Quel est le meilleur quartier de Gatineau?", a: "Ça dépend de votre profil — familles, investisseurs, premiers acheteurs. Chaque secteur a ses forces. Contactez-moi pour une recommandation personnalisée." },
  { q: "Les prix varient-ils beaucoup d'un secteur à l'autre?", a: "Oui, significativement. Buckingham est plus abordable, Aylmer plus cher, et Hull offre un bon compromis. On en discute." },
  { q: "Comment choisir entre Aylmer et le Plateau?", a: "Aylmer offre des quartiers plus établis avec le lac. Le Plateau offre des maisons neuves à meilleur prix. Vos priorités déterminent le meilleur choix." },
];

const NeighborhoodsOverviewPage = () => (
   <>
    <PageMeta title="Quartiers de Gatineau — Guide complet | YGS" description="Comparez les quartiers de Gatineau et de l'Outaouais: Aylmer, Hull, Plateau, Buckingham et Gatineau-centre. Prix, ambiance, écoles et profil de chaque secteur." />
    <HeroSection
      overline="Quartiers · Gatineau et Outaouais"
      title="Les quartiers à considérer à Gatineau"
      subtitle="Chaque secteur de Gatineau a sa personnalité — familial, urbain, nature ou investissement. Explorez les quartiers pour trouver celui qui vous correspond."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Expertise locale. "
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

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

    <LinkedCardGrid
      overline="Mode de vie"
      title="Guides de vie par quartier"
      items={lifestyleGuides}
      columns={3}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — trouvez le bon secteur"
      text="Tout ce qu'il faut savoir pour acheter à Gatineau — processus, budget et quartiers."
      ctaLabel="Recevoir le guide acheteur"
    />

    <FAQSection title="Questions sur les quartiers" items={faq} />

    <CTASection
      dark
      title="Besoin d'aide pour choisir?"
      text="Parlons de vos critères — je vous recommande les secteurs les plus adaptés à votre situation."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default NeighborhoodsOverviewPage;
