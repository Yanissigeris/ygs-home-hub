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
import ProcessSteps from "@/components/ProcessSteps";
import InlineCTA from "@/components/InlineCTA";
import { Home, DollarSign, FileText, Shield, Clock, Award } from "lucide-react";
import heroImg from "@/assets/hero-first-buyer.webp";

const considerations = [
  { icon: DollarSign, title: "Mise de fonds et budget", text: "Pour une maison, un condo ou un duplex que vous habitez (moins de 1,5 M$), il faut au moins 5 % sur les premiers 500 000 $, puis 10 % au-delà. On regarde ensemble votre capacité d'emprunt et les programmes offerts aux premiers acheteurs." },
  { icon: Home, title: "Le bon type de propriété", text: "Condo à Hull ou jumelé au Plateau : chaque option a ses avantages pour un premier achat à Gatineau." },
  { icon: FileText, title: "Le processus au Québec", text: "Le notaire et les formulaires obligatoires de l'OACIQ distinguent le processus québécois du reste du Canada. Je vous guide à chaque étape." },
  { icon: Shield, title: "Éviter les erreurs de débutant", text: "Quelques pièges : acheter trop vite, oublier les frais de clôture, survoler le rapport d'inspection ou choisir un secteur qui ne suit pas vos projets." },
];

const steps = [
  { num: "01", title: "Consultation initiale", desc: "On parle de votre budget et de vos priorités, et je réponds à vos questions sur l'achat à Gatineau." },
  { num: "02", title: "Recherche ciblée", desc: "Je vous présente les propriétés qui correspondent à votre profil et à votre budget, à Aylmer, à Hull, au Plateau ou à Buckingham." },
  { num: "03", title: "Accompagnement complet", desc: "De l'offre à la signature chez le notaire, je vous accompagne jusqu'à la remise des clés de votre première propriété." },
];


const faq = [
  { q: "Combien faut-il pour un premier achat à Gatineau?", a: "Au prix médian d'une unifamiliale dans la région au 2e trimestre 2026 (523 500 $, APCIQ), la mise de fonds minimale est de 27 350 $ (5 % sur 500 000 $, 10 % sur le reste). Prévoyez aussi les frais de clôture : notaire, inspection, droits de mutation et ajustements de taxes. On calcule ensemble votre capacité d'emprunt." },
  { q: "Suis-je admissible à des programmes d'aide?", a: "Plusieurs mesures peuvent s'appliquer selon votre situation. Le RAP permet de retirer jusqu'à 60 000 $ de vos REER, et le CELIAPP accepte 8 000 $ de cotisations par année, jusqu'à 40 000 $ à vie. S'ajoutent le crédit d'impôt fédéral pour l'achat d'une première habitation et le crédit d'impôt remboursable du Québec, qui rembourse une partie des droits de mutation. On valide votre admissibilité ensemble, avec votre institution financière." },
  { q: "Qu'est-ce qui est différent au Québec?", a: "Quand un courtier vous représente, la promesse d'achat se fait sur un formulaire de l'OACIQ. La vente se conclut ensuite chez un notaire, et les droits de mutation (taxe de bienvenue) s'ajoutent au budget. Rien de compliqué, à condition d'être bien accompagné." },
];

const FirstTimeBuyerPage = () => (
   <>
    <PageMeta title="Premier achat immobilier à Gatineau" description="Premier acheteur à Gatineau? Mise de fonds, budget, programmes d'aide au Québec et accompagnement personnalisé pour acheter à Aylmer, Hull ou au Plateau." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <ServiceJsonLd name="Accompagnement premier acheteur à Gatineau" description="Accompagnement personnalisé pour premiers acheteurs à Gatineau. Mise de fonds, programmes d'aide au Québec et processus étape par étape." url="/premier-achat-gatineau/" serviceType="First Time Home Buyer Service" />
    <HeroSection
      overline="Premier achat · Gatineau"
      title="Premier achat à Gatineau : par où commencer?"
      subtitle="Devenir propriétaire pour la première fois, c'est emballant et parfois stressant. Je vous aide à franchir chaque étape : budget, secteur, offre et processus."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Guide acheteur", href: "/guide-acheteur-gatineau/" }}
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
      href="/consultation-acheteur/"
    />

    <ProcessSteps steps={steps} background="alt" />

    <ContentBlock narrow>
      <SectionHeading title="Votre premier achat mérite un bon accompagnement" />
      <p className="prose-body mt-5">
        La première propriété est souvent le plus gros investissement de votre vie. Mon rôle est de vous aider à prendre une décision éclairée, à votre rythme et chiffres en main.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/consultation-acheteur/">Réserver ma consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit pour bien démarrer"
      text="Tout ce que vous devez savoir pour acheter votre première propriété à Gatineau."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Prêt à faire le premier pas?"
      text="Réservez une consultation gratuite. On clarifie votre budget et les prochaines étapes."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur/" },
        { label: "Comparer les quartiers", href: "/quartiers-a-considerer-a-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous accompagne à votre rythme."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default FirstTimeBuyerPage;
