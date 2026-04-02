import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategory } from "@/data/reviews";
import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import { Shield, Home, Award, Clock, MapPin, Heart } from "lucide-react";
import heroImg from "@/assets/hero-military.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const challenges = [
  { icon: MapPin, title: "Mutation à court préavis", text: "Le déménagement approche vite — il faut trouver un logement à Gatineau ou vendre rapidement, sans compromettre le prix." },
  { icon: Shield, title: "Comprendre le marché québécois", text: "Taxes municipales et scolaires, processus notarié, zonage — le Québec fonctionne différemment de l'Ontario ou du reste du Canada." },
  { icon: Home, title: "Trouver le bon secteur", text: "Proximité de la BFC Uplands ou du centre d'Ottawa, écoles françaises et anglaises, services bilingues — chaque famille a ses priorités." },
  { icon: Heart, title: "S'installer en famille à Gatineau", text: "Coordonner vente et achat, trouver un quartier familial à Aylmer, au Plateau ou à Hull, inscrire les enfants — tout en gérant le stress de la mutation." },
];

const steps = [
  { num: "01", title: "Appel de découverte", desc: "On comprend votre situation — mutation, calendrier, budget, priorités familiales et secteurs ciblés." },
  { num: "02", title: "Plan personnalisé", desc: "Recherche ciblée, visites virtuelles ou en personne, coordination avec votre horaire de mutation." },
  { num: "03", title: "Accompagnement complet", desc: "Offre, inspection, notaire, coordination — je gère tout jusqu'à votre installation." },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Expérience en relocalisation militaire" },
  { icon: Shield, label: "Bilingue · Service rapide" },
];

const militaryPaths = [
  { title: "Acheter à Gatineau", text: "Trouvez le bon secteur et la bonne propriété pour votre famille — visites virtuelles disponibles.", href: "/acheter-comme-militaire-gatineau", cta: "En savoir plus", highlight: true },
  { title: "Vendre lors d'une mutation", text: "Vendez rapidement et au bon prix, même avec un calendrier serré.", href: "/vendre-lors-dune-mutation-gatineau", cta: "En savoir plus" },
  { title: "Guide militaire", text: "Tout ce qu'il faut savoir pour votre relocalisation immobilière à Gatineau.", href: "/guide-militaire-gatineau", cta: "Lire le guide" },
];

const faq = [
  { q: "Est-ce que vous connaissez les programmes pour militaires?", a: "Oui. Je connais les réalités des mutations, les délais serrés et les besoins spécifiques. On adapte l'approche à votre situation." },
  { q: "Je dois vendre et acheter en même temps — c'est possible?", a: "C'est fréquent dans les mutations. On planifie la coordination dès le départ pour éviter d'être coincé." },
  { q: "Quels secteurs sont proches de la base?", a: "Aylmer et le Plateau sont populaires pour l'accès à la BFC Uplands via le pont Champlain. Hull est idéal pour ceux qui travaillent au centre-ville d'Ottawa. On choisit selon votre trajet et vos priorités familiales." },
  { q: "Est-ce que vous pouvez faire des visites virtuelles?", a: "Absolument. Beaucoup de militaires achètent à distance avant leur arrivée à Gatineau. Je m'adapte à votre horaire et votre fuseau." },
];

const MilitaryPage = () => (
   <>
    <PageMeta title="Militaire à Gatineau — Mutation FAC | YGS" description="Mutation militaire à Gatineau? Accompagnement spécialisé pour membres des FAC: achat, vente, BGRS/SIRVA et installation à Aylmer, Hull ou au Plateau." ogImage="https://yanisgauthier.com/og-relocation.jpg" />
    <HeroSection
      overline="Militaire · Gatineau"
      title="Militaire? Trouvez votre propriété à Gatineau"
      subtitle="Mutation, relocalisation, achat ou vente — je connais les réalités militaires et je vous aide à naviguer le marché de Gatineau efficacement."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Guide militaire", href: "/guide-militaire-gatineau" }}
      trustLine="Service adapté aux militaires."
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-[0.875rem] text-muted-foreground">Partenaire des programmes</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" loading="lazy" />
        </div>
      </div>
    </section>

    <CardGrid
      overline="Vos défis"
      title="Les réalités d'une mutation immobilière"
      items={challenges}
    />

    <InlineCTA
      text="Vous devez vendre avant d'acheter? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    <ProcessSteps steps={steps} background="alt" />

    <FunnelNextStep
      overline="Votre situation"
      title="Comment puis-je vous aider?"
      subtitle="Choisissez le service qui correspond à votre réalité."
      steps={militaryPaths}
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Pourquoi YGS"
        title="Un courtier qui comprend votre réalité"
      />
      <p className="prose-body mt-5">
        Les mutations ne suivent pas le calendrier immobilier normal. Il faut un courtier qui s'adapte — à votre timeline, à votre budget, et à la pression qui vient avec un déménagement militaire.
      </p>
      <p className="prose-body mt-4">
        Après près de 9 ans à Gatineau, j'ai accompagné des familles militaires dans toutes sortes de situations. Mon rôle est de simplifier le processus pour que vous puissiez vous concentrer sur votre mission.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/contact-yanis">Réserver un appel</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Guide relocalisation militaire — recevez-le gratuitement"
      text="Tout ce qu'il faut savoir pour votre mutation immobilière à Gatineau — dans un guide clair envoyé par courriel."
      ctaLabel="Recevoir le guide"
    />


    <CTASection
      dark
      title="Prêt à planifier votre relocalisation?"
      text="Parlons de votre mutation, vos critères et votre calendrier — je m'adapte à vous."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Guide militaire", href: "/guide-militaire-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation militaire gratuit — recevez-le par courriel" />
  </>
);

export default MilitaryPage;
