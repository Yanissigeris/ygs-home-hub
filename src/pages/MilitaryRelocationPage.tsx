import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import { MapPin, Home, Shield, Clock, Award, DollarSign } from "lucide-react";
import heroImg from "@/assets/hero-military-relocation.webp";
import sirvaBgrsLogo from "@/assets/logo-sirva-bgrs.webp";

const challenges = [
  { icon: MapPin, title: "Trouver le bon secteur à distance", text: "Vous ne connaissez peut-être pas Gatineau. Je vous guide vers les quartiers qui correspondent à vos priorités." },
  { icon: Home, title: "Coordonner vente et achat", text: "Vendre votre propriété actuelle tout en achetant à Gatineau demande une coordination serrée." },
  { icon: DollarSign, title: "Comprendre le marché", text: "Au Québec, les taxes et l'achat chez le notaire diffèrent des autres provinces. Un courtier local vous aide à vous y retrouver." },
];

const steps = [
  { num: "01", title: "Évaluation de la situation", desc: "Calendrier de mutation, budget, priorités familiales et secteurs ciblés." },
  { num: "02", title: "Recherche ciblée", desc: "Visites virtuelles ou en personne, sélection adaptée à votre profil militaire." },
  { num: "03", title: "Jusqu'aux clés", desc: "Offre, inspection et notaire : je coordonne chaque étape jusqu'à votre emménagement." },
];


const faq = [
  { q: "Comment se passe un achat immobilier lors d'une mutation militaire?", a: "On commence par comprendre votre calendrier et vos besoins. Ensuite, recherche ciblée, visites (virtuelles ou en personne), puis l'offre et le suivi jusqu'au notaire." },
  { q: "Est-ce que vous travaillez avec les dossiers SIRVA et BGRS?", a: "Oui. La réinstallation des FAC suit la Directive sur la réinstallation des Forces armées canadiennes (DRFAC), dont une version est en vigueur depuis le 1er avril 2026. Le fournisseur de services de réinstallation des FAC est SIRVA (Défense nationale), et j'accepte aussi les dossiers BGRS. Je m'adapte aux étapes et aux délais de votre dossier." },
];

const MilitaryRelocationPage = () => (
   <>
    <PageMeta title="Relocalisation militaire à Gatineau" description="Mutation militaire vers Gatineau et l'Outaouais? Processus SIRVA ou BGRS, quartiers selon votre lieu d'affectation, délais et service bilingue." ogImage="https://yanisgauthier.com/og/og-military.jpg" />
    <ServiceJsonLd name="Relocalisation militaire à Gatineau" description="Service immobilier pour militaires en mutation vers Gatineau : SIRVA ou BGRS, quartiers, délais et service bilingue." url="/relocalisation-militaire-gatineau" serviceType="Military Relocation Service" />
    <HeroSection
      overline="Relocalisation militaire · Gatineau"
      title="Relocalisation militaire à Gatineau"
      subtitle="Mutation vers la région? Je vous aide à trouver la bonne propriété en respectant votre calendrier."
      primaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Service adapté aux militaires."
      heroBgImage={heroImg}
    />
<section className="py-8 bg-card border-y border-border/30">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">Dossiers SIRVA et BGRS acceptés</p>
          <img src={sirvaBgrsLogo} alt="SIRVA | BGRS" width={200} height={36} className="h-10 w-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <CardGrid
      overline="Les défis"
      title="Ce qui bloque souvent les militaires relocalisés"
      items={challenges}
      background="alt"
    />

    <ProcessSteps steps={steps} background="white" />

    <ContentBlock narrow background="alt">
      <SectionHeading
        overline="Pourquoi YGS"
        title="À votre rythme, selon votre mutation"
        subtitle="Les mutations ne suivent pas le calendrier immobilier normal. Je m'adapte à votre calendrier et à vos contraintes."
      />
    </ContentBlock>

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Guide relocalisation militaire gratuit"
      text="Ce qu'il faut savoir pour acheter ou vendre lors d'une mutation à Gatineau, dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide"
    />

    <CTASection
      dark
      title="Planifions votre relocalisation"
      text="Parlez-moi de votre mutation et on bâtit un plan ensemble."
      buttons={[
        { label: "Parler à Yanis", href: "/contact-yanis" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation gratuit, recevez-le par courriel" />
  </>
);

export default MilitaryRelocationPage;
