import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategory } from "@/data/reviews";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import { CheckCircle2, Clock, Award, Shield, MapPin, Home, DollarSign, FileText } from "lucide-react";
import heroImg from "@/assets/hero-relocation.webp";

const challenges = [
  { icon: MapPin, title: "Choisir le bon secteur", text: "Aylmer, Hull, Plateau, Buckingham — chaque quartier a sa personnalité. Je vous aide à trouver le bon fit." },
  { icon: DollarSign, title: "Comprendre les prix", text: "Le marché de Gatineau est différent d'Ottawa ou Montréal. Je vous donne une lecture réaliste des prix par secteur." },
  { icon: FileText, title: "Naviguer le processus québécois", text: "Promesse d'achat, inspection, notaire — le processus au Québec a ses particularités. Je vous guide étape par étape." },
  { icon: Home, title: "Trouver la bonne propriété", text: "Pas juste une maison — un quartier, une école, un trajet, un mode de vie. On regarde le portrait complet." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, nature" },
];

const steps = [
  { num: "01", title: "Consultation initiale", desc: "On parle de votre situation, votre budget, vos priorités et vos questions sur Gatineau." },
  { num: "02", title: "Tour des secteurs", desc: "Je vous présente les quartiers qui correspondent à votre profil — avec les vrais avantages et inconvénients." },
  { num: "03", title: "Accompagnement complet", desc: "Recherche ciblée, visites, offre, inspection, notaire — je vous accompagne jusqu'aux clés." },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste relocalisation Ottawa → Gatineau" },
  { icon: Shield, label: "Accompagnement bilingue" },
];

const nextSteps = [
  { title: "Réserver un appel", text: "On discute de votre relocalisation, vos priorités et vos questions — 100% gratuit.", href: "/contact-yanis", cta: "Réserver un appel", highlight: true },
  { title: "Guide relocalisation", text: "Tout ce qu'il faut savoir pour s'installer à Gatineau — secteurs, prix, processus, écoles.", href: "/guide-relocalisation-gatineau", cta: "Lire le guide" },
  { title: "Explorer les quartiers", text: "Comparer les secteurs de Gatineau selon votre style de vie et votre budget.", href: "/quartiers-a-considerer-a-gatineau", cta: "Voir les quartiers" },
];

const faq = [
  { q: "Est-ce vraiment moins cher à Gatineau qu'à Ottawa?", a: "En général, oui — surtout pour les maisons unifamiliales et les terrains. Mais il faut aussi considérer les taxes, les services et le mode de vie. On regarde tout ça ensemble." },
  { q: "Comment fonctionne l'achat au Québec?", a: "Le processus est différent de l'Ontario — promesse d'achat, inspection, conditions, notaire. Après près de 9 ans en Outaouais, j'ai accompagné beaucoup d'acheteurs dans cette transition." },
  { q: "Quel secteur est le mieux pour une famille?", a: "Ça dépend de vos priorités — Aylmer et le Plateau sont très populaires pour les familles, mais Hull et Buckingham ont aussi leurs avantages. On en discute." },
  { q: "Est-ce que je peux travailler à Ottawa et vivre à Gatineau?", a: "Absolument. La majorité de mes clients relocalisés font exactement ça. Les ponts, le transport en commun et les pistes cyclables rendent la chose très faisable." },
];

const RelocationPage = () => (
   <>
    <PageMeta title="Relocalisation Ottawa vers Gatineau" description="Déménager d'Ottawa à Gatineau? Guide complet: quartiers, taxes, écoles et accompagnement immobilier personnalisé." />
    <HeroSection
      overline="Ottawa → Gatineau"
      title="S'installer à Gatineau depuis Ottawa ou ailleurs"
      subtitle="Vous pensez traverser la rivière? Je vous aide à comprendre les secteurs, les prix, le processus et à trouver la bonne propriété."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Guide relocalisation", href: "/guide-relocalisation-gatineau" }}
      trustLine="Stratégie claire."
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <ContentBlock narrow>
      <SectionHeading
        overline="La relocalisation"
        title="Acheter à Gatineau quand on ne connaît pas le terrain"
        subtitle="Plus d'espace, des prix plus accessibles, une qualité de vie différente — mais encore faut-il savoir où chercher et comment naviguer le processus."
      />
      <p className="prose-body mt-5">
        Chaque année, des dizaines de familles et de professionnels traversent la rivière. Ce qui fait la différence, c'est d'avoir un guide local qui connaît les deux côtés — et qui peut vous aider à éviter les erreurs classiques.
      </p>
    </ContentBlock>

    <CardGrid
      overline="Les défis"
      title="Ce qui bloque souvent les acheteurs relocalisés"
      items={challenges}
      background="alt"
    />

    <ProcessSteps steps={steps} />

    <InlineCTA
      text="Vous êtes aussi vendeur? Connaître la valeur de votre propriété actuelle peut clarifier votre budget d'achat."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    <SectorLinks
      id="secteurs"
      overline="Secteurs populaires"
      title="Les quartiers les plus recherchés par les relocalisés"
      sectors={sectors}
      background="alt"
    />

    <ReviewSection
      overline="Témoignages relocalisation"
      title="Ils se sont installés à Gatineau avec confiance"
      reviews={getReviewsByCategory("relocation").slice(0, 2)}
      columns={2}
    />

    <FunnelNextStep
      overline="Prochaine étape"
      title="Par où commencer?"
      subtitle="Choisissez l'option qui correspond à votre situation."
      steps={nextSteps}
      background="alt"
    />

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Guide relocalisation gratuit"
      text="Tout ce qu'il faut savoir pour s'installer à Gatineau — secteurs, prix, processus et écoles."
      ctaLabel="Recevoir le guide"
    />

    <CTASection
      dark
      title="Parlons de votre projet de relocalisation"
      text="Budget, secteurs, processus québécois — on clarifie tout ça lors d'un premier appel, sans engagement."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Guide relocalisation", href: "/guide-relocalisation-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation gratuit — recevez-le par courriel" />
  </>
);

export default RelocationPage;
