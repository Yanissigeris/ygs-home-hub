import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import ProcessSteps from "@/components/ProcessSteps";
import InlineCTA from "@/components/InlineCTA";
import { Home, DollarSign, FileText, Shield, Clock, Award } from "lucide-react";
import heroImg from "@/assets/hero-first-buyer.webp";

const considerations = [
  { icon: DollarSign, title: "Mise de fonds et budget", text: "5% minimum pour un premier achat. On regarde ensemble votre capacité réelle et les programmes disponibles au Québec." },
  { icon: Home, title: "Le bon type de propriété", text: "Condo à Hull, maison à Aylmer, jumelé au Plateau — chaque option a ses avantages pour un premier achat à Gatineau." },
  { icon: FileText, title: "Le processus au Québec", text: "Promesse d'achat, inspection, notaire — le processus québécois est différent d'ailleurs au Canada. Je vous guide à chaque étape." },
  { icon: Shield, title: "Éviter les erreurs de débutant", text: "Ne pas se précipiter, bien comprendre les frais, choisir le bon quartier en Outaouais — je vous guide." },
];

const steps = [
  { num: "01", title: "Consultation initiale", desc: "On parle de votre budget, vos priorités et vos questions sur l'achat à Gatineau. Transparence totale." },
  { num: "02", title: "Recherche ciblée", desc: "Je vous présente les meilleures options à Aylmer, Hull, au Plateau ou à Buckingham — les secteurs qui correspondent à votre profil et votre budget." },
  { num: "03", title: "Accompagnement complet", desc: "Offre, inspection, notaire — je vous accompagne dans le processus québécois jusqu'aux clés de votre première propriété." },
];


const faq = [
  { q: "Combien faut-il pour un premier achat à Gatineau?", a: "Avec 5% de mise de fonds, vous pouvez accéder à plusieurs propriétés en Outaouais — des condos à Hull aux maisons sur le Plateau. On analyse ensemble votre capacité réelle." },
  { q: "Est-ce que je qualifie pour des programmes d'aide?", a: "Il existe des incitatifs fédéraux et provinciaux québécois pour les premiers acheteurs. On regarde ça ensemble lors de la consultation." },
  { q: "Qu'est-ce qui est différent au Québec?", a: "Le processus notarié, la promesse d'achat et certaines particularités fiscales québécoises. Rien de compliqué — il faut juste être bien guidé par quelqu'un qui connaît le marché local." },
];

const FirstTimeBuyerPage = () => (
   <>
    <SEO title="Premier achat immobilier à Gatineau | Guide YGS" description="Guide complet pour votre premier achat à Gatineau. Mise de fonds, RAP, CELIAPP, pré-approbation, processus au Québec." canonical="https://yanisgauthier.com/premier-achat-gatineau" hreflangFr="https://yanisgauthier.com/premier-achat-gatineau" hreflangEn="https://yanisgauthier.com/en/first-time-buyer" />
    <PageMeta title="Premier achat immobilier à Gatineau" description="Premier acheteur à Gatineau? Mise de fonds, budget, programmes d'aide au Québec et accompagnement personnalisé pour acheter à Aylmer, Hull ou au Plateau." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <ServiceJsonLd name="Accompagnement premier acheteur — Gatineau" description="Accompagnement personnalisé pour premiers acheteurs à Gatineau. Mise de fonds, programmes d'aide au Québec et processus étape par étape." url="/premier-achat-gatineau" serviceType="First Time Home Buyer Service" />
    <HeroSection
      overline="Premier achat · Gatineau"
      title="Premier achat à Gatineau — par où commencer?"
      subtitle="Devenir propriétaire pour la première fois, c'est excitant et stressant. Je vous aide à naviguer chaque étape — budget, secteur, offre et processus."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Guide acheteur", href: "/guide-acheteur-gatineau" }}
      trustLine="Accompagnement personnalisé."
      heroBgImage={heroImg}
    />
<CardGrid
      overline="À considérer"
      title="Ce que tout premier acheteur doit savoir"
      items={considerations}
    />

    <InlineCTA
      text="Pas encore sûr de votre budget? On peut en discuter lors d'une consultation gratuite."
      buttonLabel="Réserver une consultation →"
      href="/consultation-acheteur"
    />

    <ProcessSteps steps={steps} background="alt" />

    <ContentBlock narrow>
      <SectionHeading title="Votre premier achat mérite un bon accompagnement" />
      <p className="prose-body mt-5">
        La première propriété est souvent le plus gros investissement de votre vie. Mon rôle est de m'assurer que vous prenez une décision éclairée — pas pressée, pas stressée, pas basée sur l'émotion seule.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/consultation-acheteur">Réserver ma consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — pour bien démarrer"
      text="Tout ce que vous devez savoir pour acheter votre première propriété à Gatineau."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Prêt à faire le premier pas?"
      text="Réservez une consultation gratuite — on clarifie votre budget, vos options et les prochaines étapes."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Explorer les secteurs", href: "/plateau-aylmer", variant: "outline" },
      ]}
      trustLine="Je vous accompagne à votre rythme."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default FirstTimeBuyerPage;
