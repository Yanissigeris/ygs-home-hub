import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategory } from "@/data/reviews";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import CalculatorsSection from "@/components/CalculatorsSection";
import { CheckCircle2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-acheter.webp";

const buyerProfiles = [
  { icon: CheckCircle2, title: "Premier acheteur en Outaouais", text: "Comprendre le processus québécois étape par étape sans se sentir dépassé — promesse d'achat, inspection, notaire." },
  { icon: CheckCircle2, title: "Famille qui veut plus d'espace", text: "Trouver un quartier familial à Gatineau avec plus de pièces, un terrain, de bonnes écoles et les bons services à proximité." },
  { icon: CheckCircle2, title: "Relocalisé d'Ottawa ou Montréal", text: "Un guide local qui connaît vraiment Aylmer, Hull, le Plateau et Buckingham — prix, taxes et particularités du Québec." },
  { icon: CheckCircle2, title: "Hésitant entre secteurs", text: "Comparer objectivement les quartiers de Gatineau — prix, potentiel de revente, accès Ottawa, style de vie — pour trouver le parfait quartier pour vous." },
];

const sectors = [
  { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, familles, quartiers établis" },
  { name: "Plateau", href: "/plateau", detail: "Maisons neuves, familial, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, condos, plex, proximité Ottawa" },
  { name: "Chelsea", href: "/chelsea", detail: "Village, nature, parc de la Gatineau" },
  { name: "Cantley", href: "/cantley", detail: "Rural, grands terrains, collines" },
  { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Rivière, prix accessibles, nature" },
  { name: "Masson-Angers", href: "/masson-angers", detail: "Neufs, familles, en croissance" },
  { name: "Val-des-Monts", href: "/val-des-monts", detail: "Lacs, chalets, villégiature" },
  { name: "Pontiac", href: "/pontiac", detail: "Rural, grands espaces, rivière" },
  { name: "Côte-d'Azur", href: "/cote-dazur-gatineau", detail: "Bungalows, résidentiel établi" },
  { name: "Limbour", href: "/limbour", detail: "Familial moderne, parcs" },
  { name: "Gatineau-centre", href: "/gatineau", detail: "Services, central, plex" },
];

const steps = [
  { num: "01", title: "Clarifier votre projet", desc: "Budget, secteurs cibles à Gatineau, style de propriété, besoins familiaux et accès Ottawa — on pose les bases ensemble." },
  { num: "02", title: "Recherche ciblée", desc: "Je vous envoie les propriétés qui correspondent vraiment dans les quartiers qui vous conviennent. Pas de bruit, pas de perte de temps." },
  { num: "03", title: "Offre et négociation", desc: "Stratégie d'offre adaptée au marché local, inspection, conditions — jusqu'à la signature chez le notaire." },
];


const nextSteps = [
  { title: "Consultation gratuite", text: "On discute de vos critères, votre budget et vos questions — pour acheter en confiance.", href: "/consultation-acheteur", cta: "Réserver ma consultation", highlight: true },
  { title: "Explorer les quartiers", text: "Comparer les secteurs de Gatineau — prix, style de vie, avantages et inconvénients.", href: "/quartiers-a-considerer-a-gatineau", cta: "Voir les quartiers" },
  { title: "Guide acheteur", text: "Le processus d'achat au Québec expliqué simplement — de la recherche au notaire.", href: "/guide-acheteur-gatineau", cta: "Lire le guide" },
];

const faq = [
  { q: "Est-ce le bon moment pour acheter à Gatineau?", a: "Chaque situation est différente. Le marché de l'Outaouais a ses propres dynamiques. On évalue votre budget, vos priorités et les conditions actuelles ensemble." },
  { q: "Je viens d'Ottawa — comment ça fonctionne au Québec?", a: "Promesse d'achat, inspection, notaire — le processus québécois a ses particularités. Après près de 9 ans en Outaouais, j'ai accompagné beaucoup d'acheteurs ontariens dans cette transition." },
  { q: "Dois-je avoir une pré-approbation?", a: "Fortement recommandé. Ça clarifie votre budget et renforce votre position lors de l'offre, surtout dans les secteurs populaires comme Aylmer et le Plateau." },
  { q: "Comment choisir le bon secteur à Gatineau?", a: "Mode de vie, budget, famille, trajet vers Ottawa, écoles — on regarde tout ça ensemble pour trouver le meilleur équilibre entre Aylmer, Hull, le Plateau et Buckingham." },
];

const BuyerPage = () => (
   <>
    <PageMeta title="Acheter une propriété à Gatineau · Outaouais" description="Trouvez et achetez votre propriété à Gatineau — Aylmer, Hull, Plateau ou Buckingham. Consultation personnalisée et accompagnement à votre rythme." ogImage="https://yanisgauthier.com/og-buyer.jpg" />
    <ServiceJsonLd name="Accompagnement acheteur à Gatineau" description="Service d'accompagnement pour l'achat immobilier à Gatineau et en Outaouais — recherche, visites, analyse de quartier, offre d'achat et inspection." url="/acheter-a-gatineau" serviceType="Real Estate Buyer Agent Service" />
    <HeroSection
      overline="Pour acheteurs · Gatineau"
      title="Acheter à Gatineau avec clarté et confiance"
      subtitle="Premier acheteur, famille qui grandit ou relocalisé d'Ottawa — je vous guide à chaque étape pour acheter sans erreur."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Explorer les quartiers", href: "/quartiers-a-considerer-a-gatineau" }}
      trustLine="Stratégie claire."
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading
        overline="L'achat immobilier"
        title="Choisir une propriété, c'est aussi choisir un secteur et une stratégie"
        subtitle="Au-delà de la maison, il faut comprendre les secteurs, la valeur réelle, les taxes, le potentiel de revente et la bonne stratégie d'offre d'achat."
      />
    </ContentBlock>

    <CardGrid
      overline="Pour qui"
      title="Je peux vous aider si vous êtes…"
      items={buyerProfiles}
      background="alt"
      variant="icon-inline"
    />

    <ProcessSteps steps={steps} />

    <InlineCTA
      text="Vous êtes aussi vendeur? Connaître la valeur de votre propriété peut clarifier votre budget d'achat."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    <SectorLinks sectors={sectors} />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Votre premier achat? Recevez le guide complet."
      text="Le processus d'achat au Québec expliqué simplement — de la recherche au notaire, étape par étape."
      ctaLabel="Recevoir le guide acheteur"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />

    <CalculatorsSection />

    <ReviewSection
      overline="Témoignages acheteurs"
      title="Ils ont acheté en toute confiance"
      reviews={getReviewsByCategory("buyer").slice(0, 2)}
      columns={2}
      background="alt"
    />

    <FunnelNextStep
      overline="Prochaine étape"
      title="Par où commencer?"
      subtitle="Choisissez l'étape qui correspond le mieux à votre situation."
      steps={nextSteps}
    />

    <CTASection
      dark
      title="Parlons de votre projet d'achat"
      text="Budget, secteurs, stratégie — on clarifie tout ça avant de commencer les visites."
      buttons={[
        { label: "Réserver ma consultation", href: "/consultation-acheteur" },
        { label: "Explorer les quartiers", href: "/quartiers-a-considerer-a-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default BuyerPage;
