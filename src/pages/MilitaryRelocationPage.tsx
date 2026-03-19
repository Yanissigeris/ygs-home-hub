import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import { MapPin, Home, Shield, Clock, Award, DollarSign } from "lucide-react";
import heroImg from "@/assets/hero-military-relocation.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const challenges = [
  { icon: MapPin, title: "Trouver le bon secteur à distance", text: "Vous ne connaissez peut-être pas Gatineau — je vous guide vers les quartiers qui correspondent à vos priorités." },
  { icon: Home, title: "Coordonner vente et achat", text: "Vendre votre propriété actuelle tout en achetant à Gatineau demande une coordination serrée." },
  { icon: DollarSign, title: "Comprendre le marché", text: "Les prix, les taxes et le processus au Québec sont différents — il faut un guide local." },
];

const steps = [
  { num: "01", title: "Évaluation de la situation", desc: "Calendrier de mutation, budget, priorités familiales et secteurs ciblés." },
  { num: "02", title: "Recherche ciblée", desc: "Visites virtuelles ou en personne, sélection adaptée à votre profil militaire." },
  { num: "03", title: "Accompagnement jusqu'aux clés", desc: "Offre, inspection, notaire — tout est géré pour simplifier votre transition." },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Spécialiste relocalisation militaire" },
  { icon: Shield, label: "Service bilingue et rapide" },
];

const faq = [
  { q: "Comment se passe une relocalisation militaire immobilière?", a: "On commence par comprendre votre calendrier et vos besoins. Ensuite, recherche ciblée, visites (virtuelles ou en personne), offre et accompagnement complet." },
  { q: "Est-ce que vous travaillez avec les programmes IRP/BGRS?", a: "Je connais les réalités de ces programmes et je m'adapte aux contraintes et délais qu'ils imposent." },
];

const MilitaryRelocationPage = () => (
   <>
    <PageMeta title="Relocalisation militaire à Gatineau" description="Mutation militaire vers Gatineau? Guide complet: processus BGRS/SIRVA, quartiers près de la base, délais et accompagnement." />
    <HeroSection
      overline="Relocalisation militaire · Gatineau"
      title="Relocalisation militaire à Gatineau"
      subtitle="Mutation vers la région? Je vous aide à trouver la bonne propriété rapidement, sans stress et en respectant votre calendrier."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      trustLine="Service adapté aux militaires. Zéro pression."
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Partenaire des programmes</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" className="h-10 w-auto object-contain" />
        </div>
      </div>
    </section>

    <CardGrid
      overline="Les défis"
      title="Ce qui bloque souvent les militaires relocalisés"
      items={challenges}
    />

    <ProcessSteps steps={steps} background="alt" />

    <ContentBlock narrow>
      <SectionHeading
        overline="Pourquoi YGS"
        title="Un accompagnement adapté à votre rythme"
        subtitle="Les mutations ne suivent pas le calendrier immobilier normal. Je m'adapte à votre timeline et vos contraintes."
      />
    </ContentBlock>

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Guide relocalisation militaire gratuit"
      text="Tout ce qu'il faut savoir pour votre mutation immobilière à Gatineau — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide"
    />

    <CTASection
      dark
      title="Planifions votre relocalisation"
      text="Parlez-moi de votre mutation — on bâtit un plan ensemble."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation gratuit — recevez-le par courriel" />
  </>
);

export default MilitaryRelocationPage;
