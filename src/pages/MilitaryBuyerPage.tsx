import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import { Home, MapPin, Shield, Clock, Award, DollarSign, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-military-buyer.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const advantages = [
  { icon: DollarSign, title: "Prix plus accessibles", text: "Le marché de Gatineau offre souvent un meilleur rapport qualité-prix que les marchés militaires saturés." },
  { icon: MapPin, title: "Proximité des bases", text: "Accès rapide à la base d'Uplands et aux installations fédérales de la région." },
  { icon: Home, title: "Variété de propriétés", text: "Maisons, condos, jumelés — dans des quartiers familiaux bien desservis." },
  { icon: Shield, title: "Accompagnement bilingue", text: "Service en français et en anglais, adapté à votre réalité militaire." },
];


const faq = [
  { q: "Quels secteurs recommandez-vous pour les militaires?", a: "Ça dépend de votre base et vos priorités familiales. Aylmer, le Plateau et Hull sont populaires — on en discute selon votre situation." },
  { q: "Est-ce que je peux acheter à distance?", a: "Oui. Visites virtuelles, offres à distance et coordination complète — c'est courant pour les mutations." },
  { q: "Comment fonctionne le processus d'achat au Québec?", a: "Promesse d'achat, inspection, conditions, notaire — c'est différent de l'Ontario. Je vous guide étape par étape." },
];

const MilitaryBuyerPage = () => (
   <>
    <PageMeta title="Acheter comme militaire à Gatineau" description="Achetez une propriété à Gatineau en tant que militaire FAC. Processus BGRS, quartiers près de la BFC Uplands et accompagnement adapté à votre mutation." />
    <HeroSection
      overline="Acheter comme militaire · Gatineau"
      title="Acheter à Gatineau en tant que militaire"
      subtitle="Mutation vers la RCN? Je vous aide à trouver le bon secteur, la bonne propriété et à naviguer le processus d'achat au Québec."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "/plateau-aylmer" }}
      trustLine="Service adapté aux militaires."
      heroBgImage={heroImg}
    />
<section className="py-8 bg-white border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Partenaire des programmes</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" loading="lazy" />
        </div>
      </div>
    </section>

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

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Guide relocalisation militaire gratuit"
      text="Tout ce qu'il faut savoir pour acheter à Gatineau lors d'une mutation — dans un guide clair envoyé par courriel."
      ctaLabel="Recevoir le guide"
    />

    <CTASection
      dark
      title="Prêt à trouver votre propriété à Gatineau?"
      text="Parlons de votre mutation et de vos critères — je m'occupe du reste."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="relocation_guide" label="Guide militaire gratuit — recevez-le par courriel" />
  </>
);

export default MilitaryBuyerPage;
