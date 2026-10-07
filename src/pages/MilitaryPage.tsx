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
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import { Shield, Home, Award, Clock, MapPin, Heart } from "lucide-react";
import heroImg from "@/assets/hero-military.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const challenges = [
  { icon: MapPin, title: "Mutation à court préavis", text: "Le déménagement approche vite. Il faut trouver un logement à Gatineau ou vendre rapidement, sans sacrifier le prix." },
  { icon: Shield, title: "Comprendre le marché québécois", text: "Taxes municipales et scolaires, taxe de bienvenue, processus notarié, zonage : le Québec fonctionne différemment de l'Ontario et du reste du Canada." },
  { icon: Home, title: "Trouver le bon secteur", text: "Trajet vers le campus Carling de la Défense nationale (ouest d'Ottawa) ou le centre-ville, école française ou anglaise : chaque famille a ses priorités." },
  { icon: Heart, title: "S'installer en famille à Gatineau", text: "Coordonner la vente et l'achat, puis choisir un quartier à Aylmer, au Plateau ou à Hull et une école pour les enfants, pendant que la mutation avance." },
];

const steps = [
  { num: "01", title: "Premier appel", desc: "On fait le point sur votre situation : mutation, calendrier, budget, priorités familiales et secteurs ciblés." },
  { num: "02", title: "Plan personnalisé", desc: "Recherche ciblée et visites virtuelles ou en personne, au rythme de votre horaire de mutation." },
  { num: "03", title: "Accompagnement complet", desc: "Offre, inspection, notaire et coordination des dates : je vous accompagne jusqu'à la remise des clés." },
];


const militaryPaths = [
  { title: "Acheter à Gatineau", text: "Trouvez le bon secteur et la bonne propriété pour votre famille. Visites virtuelles possibles.", href: "/acheter-comme-militaire-gatineau/", cta: "En savoir plus", highlight: true },
  { title: "Vendre lors d'une mutation", text: "Vendez rapidement et au bon prix, même avec un calendrier serré.", href: "/vendre-lors-dune-mutation-gatineau/", cta: "En savoir plus" },
  { title: "Guide militaire", text: "Tout ce qu'il faut savoir pour votre relocalisation immobilière à Gatineau.", href: "/guide-militaire-gatineau/", cta: "Lire le guide" },
];

const faq = [
  { q: "Est-ce que vous connaissez les programmes pour militaires?", a: "Oui. Depuis le 1er avril 2026, la réinstallation des membres des FAC suit la Directive sur la réinstallation des Forces armées canadiennes (DRFAC). SIRVA gère les dossiers autorisés à compter du 6 janvier 2026, et BGRS, ceux autorisés avant cette date. J'adapte mon travail aux étapes et aux délais de votre dossier." },
  { q: "Je dois vendre et acheter en même temps. Est-ce possible?", a: "C'est fréquent dans les mutations. On planifie la coordination dès le départ pour éviter d'être coincé." },
  { q: "Quels secteurs sont proches des installations militaires?", a: "Ça dépend de votre lieu de travail. La Défense nationale regroupe plusieurs de ses bureaux au campus Carling, sur l'avenue Carling dans l'ouest d'Ottawa : depuis Aylmer et le Plateau, on y va par le pont Champlain. D'autres bureaux sont au centre-ville d'Ottawa, plus près de Hull. On compare vos trajets selon votre affectation et vos priorités familiales." },
  { q: "Est-ce que vous pouvez faire des visites virtuelles?", a: "Oui. Il est possible d'acheter à distance avant votre arrivée à Gatineau, avec des visites virtuelles. Je m'adapte à votre horaire et à votre fuseau horaire." },
];

const MilitaryPage = () => (
   <>
    <PageMeta title="Militaire à Gatineau : mutation FAC" description="Mutation militaire à Gatineau? Accompagnement spécialisé pour membres des FAC : achat, vente, BGRS/SIRVA et installation à Aylmer, Hull ou au Plateau." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Service immobilier pour militaires, mutation FAC à Gatineau" description="Accompagnement spécialisé pour les membres des Forces armées canadiennes en mutation à Gatineau : achat, vente, SIRVA ou BGRS et installation." url="/militaire-gatineau/" serviceType="Military Real Estate Relocation Service" />
    <HeroSection
      overline="Militaire · Gatineau"
      title="Militaire? Trouvez votre propriété à Gatineau"
      subtitle="Acheter ou vendre lors d'une mutation? Je vous aide à comprendre le marché de Gatineau et à respecter votre calendrier."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis/" }}
      secondaryCta={{ label: "Guide militaire", href: "/guide-militaire-gatineau/" }}
      trustLine="Service adapté aux militaires."
      heroBgImage={heroImg}
    />
<section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-[0.875rem] text-muted-foreground">Dossiers SIRVA et BGRS acceptés</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <CardGrid
      overline="Vos défis"
      title="Les réalités immobilières d'une mutation"
      items={challenges}
    />

    <InlineCTA
      text="Vous devez vendre avant d'acheter? Commencez par connaître la valeur de votre propriété."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau/"
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
        Les mutations ne suivent pas le calendrier immobilier normal. Il faut un courtier qui s'adapte à votre calendrier et à la pression d'un déménagement militaire.
      </p>
      <p className="prose-body mt-4">
        Depuis 2017 à Gatineau, j'ai accompagné des familles militaires dans toutes sortes de situations. Mon rôle est de simplifier le processus pour que vous puissiez vous concentrer sur votre mission.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/contact-yanis/">Réserver un appel</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Guide relocalisation militaire : recevez-le gratuitement"
      text="Ce qu'il faut savoir pour acheter ou vendre lors d'une mutation à Gatineau, dans un guide clair envoyé par courriel."
      ctaLabel="Recevoir le guide"
    />


    <CTASection
      dark
      title="Prêt à planifier votre relocalisation?"
      text="Parlons de votre mutation et de votre calendrier. Je m'adapte à vous."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis/" },
        { label: "Guide militaire", href: "/guide-militaire-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation militaire gratuit, recevez-le par courriel" />
  </>
);

export default MilitaryPage;
