import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import { CheckCircle2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";

const buyerProfiles = [
  { icon: CheckCircle2, title: "Premier acheteur", text: "Comprendre le processus étape par étape sans se sentir dépassé." },
  { icon: CheckCircle2, title: "Famille qui veut plus d'espace", text: "Trouver un quartier familial avec plus de pièces, un terrain et les bons services à proximité." },
  { icon: CheckCircle2, title: "Relocalisé d'Ottawa ou Montréal", text: "Un guide local qui connaît vraiment le terrain — secteurs, prix, taxes et particularités du Québec." },
  { icon: CheckCircle2, title: "Hésitant entre secteurs", text: "Comparer les quartiers objectivement — prix, potentiel, style de vie — pour trouver le bon fit." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/plateau-aylmer", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/plateau-aylmer", detail: "Terrain, prix accessibles, nature" },
];

const steps = [
  { num: "01", title: "Clarifier votre projet", desc: "Budget, secteurs cibles, style de propriété, besoins familiaux — on pose les bases ensemble." },
  { num: "02", title: "Recherche ciblée", desc: "Je vous envoie les propriétés qui correspondent vraiment. Pas de bruit, pas de perte de temps." },
  { num: "03", title: "Offre et négociation", desc: "Stratégie d'offre, inspection, conditions — jusqu'à la signature chez le notaire." },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste des secteurs locaux" },
  { icon: Shield, label: "Accompagnement sans pression" },
];

const faq = [
  { q: "Est-ce le bon moment pour acheter à Gatineau?", a: "Chaque situation est différente. On évalue votre budget, vos priorités et les conditions du marché ensemble." },
  { q: "Je viens d'Ottawa — comment ça fonctionne au Québec?", a: "Promesse d'achat, inspection, notaire — le processus a ses particularités. Après près de 9 ans en Outaouais, j'ai accompagné beaucoup d'acheteurs dans cette transition." },
  { q: "Dois-je avoir une pré-approbation?", a: "Fortement recommandé. Ça clarifie votre budget et renforce votre position lors de l'offre." },
  { q: "Comment choisir le bon secteur?", a: "Mode de vie, budget, famille, trajets quotidiens — on regarde tout ça ensemble pour trouver le meilleur équilibre." },
];

const BuyerPage = () => (
  <>
    <HeroSection
      overline="Pour acheteurs · Gatineau"
      title="Acheter à Gatineau avec clarté et confiance"
      subtitle="Premier acheteur, famille qui grandit ou relocalisé d'Ottawa — je vous guide à chaque étape pour acheter sans stress et sans erreur."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      secondaryCta={{ label: "Valeur de ma propriété", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
      backgroundImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <ContentBlock narrow>
      <SectionHeading
        overline="L'achat immobilier"
        title="Choisir une propriété, c'est aussi choisir un secteur et une stratégie"
        subtitle="Au-delà de la maison, il faut comprendre les secteurs, la valeur réelle, les taxes, le potentiel de revente et la bonne stratégie d'offre."
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
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <SectorLinks sectors={sectors} />

    <CTASection
      dark
      overline="Consultation"
      title="Parlons de votre projet d'achat"
      text="Budget, secteurs, stratégie — on clarifie tout ça avant de commencer les visites."
      buttons={[
        { label: "Réserver ma consultation", href: "/contact-yanis" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default BuyerPage;
