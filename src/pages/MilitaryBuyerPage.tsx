import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
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
  { icon: DollarSign, title: "Repères de prix", text: "Au 2e trimestre 2026, le prix médian d'une unifamiliale était de 523 500 $ dans la RMR de Gatineau (APCIQ). On le compare ensemble avec le marché que vous quittez." },
  { icon: MapPin, title: "Proximité du travail", text: "Accès au campus Carling de la Défense nationale, dans l'ouest d'Ottawa, et aux autres installations fédérales de la région, selon le secteur choisi." },
  { icon: Home, title: "Variété de propriétés", text: "Maisons, jumelés, condos et plex, dans des quartiers familiaux bien desservis." },
  { icon: Shield, title: "Accompagnement bilingue", text: "Service en français et en anglais, adapté à votre réalité militaire." },
];


const faq = [
  { q: "Quels secteurs recommandez-vous pour les militaires?", a: "Ça dépend de votre lieu de travail et de vos priorités familiales. Pour le campus Carling, dans l'ouest d'Ottawa, on regarde souvent Aylmer et le Plateau. Hull convient bien si vous travaillez au centre-ville. On en discute selon votre situation." },
  { q: "Est-ce que je peux acheter à distance?", a: "Oui. Les visites virtuelles et les offres signées à distance sont courantes lors d'une mutation. Si votre dossier prévoit un voyage à la recherche d'un domicile, on planifie les visites en personne autour de ce voyage." },
  { q: "Comment fonctionne le processus d'achat au Québec?", a: "Au Québec, l'achat passe par une promesse d'achat, des conditions (inspection, financement) et une signature chez le notaire. Le notaire joue le rôle que l'avocat joue en Ontario. Je vous guide étape par étape." },
];

const MilitaryBuyerPage = () => (
   <>
    <PageMeta title="Acheter comme militaire à Gatineau" description="Achetez une propriété à Gatineau en tant que militaire FAC. Dossiers SIRVA ou BGRS, quartiers selon votre lieu de travail et accompagnement adapté à votre mutation." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Achat immobilier militaire à Gatineau" description="Accompagnement spécialisé pour militaires FAC achetant à Gatineau. Dossiers SIRVA ou BGRS, quartiers selon votre lieu de travail." url="/acheter-comme-militaire-gatineau/" serviceType="Military Real Estate Buyer Service" />
    <HeroSection
      overline="Acheter comme militaire · Gatineau"
      title="Acheter à Gatineau en tant que militaire"
      subtitle="Mutation vers la RCN? Je vous aide à choisir le secteur et la propriété, puis je vous guide dans le processus d'achat au Québec."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis/" }}
      secondaryCta={{ label: "Voir Plateau et Aylmer", href: "/plateau-aylmer/" }}
      trustLine="Service adapté aux militaires."
      heroBgImage={heroImg}
    />
<section className="py-8 bg-white border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Dossiers SIRVA et BGRS acceptés</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <CardGrid
      overline="Pourquoi Gatineau"
      title="Acheter à Gatineau : les avantages pour les militaires"
      items={advantages}
    />

    <InlineCTA
      text="Vous devez aussi vendre? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
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
        <Link to="/contact-yanis/">Réserver un appel</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Guide relocalisation militaire gratuit"
      text="Tout ce qu'il faut savoir pour acheter à Gatineau lors d'une mutation, dans un guide clair envoyé par courriel."
      ctaLabel="Recevoir le guide"
    />

    <CTASection
      dark
      title="Prêt à trouver votre propriété à Gatineau?"
      text="Parlons de votre mutation et de vos critères. On bâtit le plan ensemble."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis/" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="relocation_guide" label="Guide militaire gratuit, recevez-le par courriel" />
  </>
);

export default MilitaryBuyerPage;
