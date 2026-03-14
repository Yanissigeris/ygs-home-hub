import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import InlineCTA from "@/components/InlineCTA";
import { Home, MapPin, Shield, Clock, Award, DollarSign, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-gatineau.jpg";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.png";

const advantages = [
  { icon: DollarSign, title: "Prix plus accessibles", text: "Le marché de Gatineau offre souvent un meilleur rapport qualité-prix que les marchés militaires saturés." },
  { icon: MapPin, title: "Proximité des bases", text: "Accès rapide à la base d'Uplands et aux installations fédérales de la région." },
  { icon: Home, title: "Variété de propriétés", text: "Maisons, condos, jumelés — dans des quartiers familiaux bien desservis." },
  { icon: Shield, title: "Accompagnement bilingue", text: "Service en français et en anglais, adapté à votre réalité militaire." },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste acheteurs militaires" },
  { icon: Shield, label: "Bilingue · Zéro pression" },
];

const faq = [
  { q: "Quels secteurs recommandez-vous pour les militaires?", a: "Ça dépend de votre base et vos priorités familiales. Aylmer, le Plateau et Hull sont populaires — on en discute selon votre situation." },
  { q: "Est-ce que je peux acheter à distance?", a: "Oui. Visites virtuelles, offres à distance et coordination complète — c'est courant pour les mutations." },
  { q: "Comment fonctionne le processus d'achat au Québec?", a: "Promesse d'achat, inspection, conditions, notaire — c'est différent de l'Ontario. Je vous guide étape par étape." },
];

const MilitaryBuyerPage = () => (
  <>
    <HeroSection
      overline="Acheter comme militaire · Gatineau"
      title="Acheter à Gatineau en tant que militaire"
      subtitle="Mutation vers la NCR? Je vous aide à trouver le bon secteur, la bonne propriété et à naviguer le processus d'achat au Québec."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "/plateau-aylmer" }}
      trustLine="Service adapté aux militaires. Zéro pression."
      backgroundImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <CardGrid
      overline="Pourquoi Gatineau"
      title="Acheter à Gatineau — les avantages pour les militaires"
      items={advantages}
    />

    <InlineCTA
      text="Vous devez aussi vendre? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Mon approche"
        title="Un courtier qui s'adapte à votre calendrier"
      />
      <p className="prose-body mt-5">
        Je sais que les mutations imposent des délais serrés. Mon rôle est de simplifier chaque étape pour que vous puissiez vous concentrer sur votre transition.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/contact-yanis">Réserver un appel</Link>
      </Button>
    </ContentBlock>

    <CTASection
      dark
      title="Prêt à trouver votre propriété à Gatineau?"
      text="Parlons de votre mutation et de vos critères — je m'occupe du reste."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Explorer les secteurs", href: "/plateau-aylmer", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default MilitaryBuyerPage;
