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
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import { MapPin, DollarSign, Home, FileText, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-buy-from-ottawa.webp";

const advantages = [
  { icon: DollarSign, title: "Prix plus accessibles", text: "Les maisons unifamiliales et condos coûtent souvent nettement moins cher à Gatineau qu'à Ottawa, de l'autre côté de la rivière." },
  { icon: MapPin, title: "Proximité d'Ottawa", text: "Les ponts (Champlain, Alexandra, du Portage), le transport STO et les pistes cyclables rendent le trajet quotidien très faisable." },
  { icon: Home, title: "Plus d'espace", text: "Pour le même budget, vous obtenez souvent plus de pièces, un plus grand terrain et une meilleure qualité de vie à Aylmer, au Plateau ou à Buckingham." },
  { icon: FileText, title: "Processus québécois", text: "Le processus d'achat au Québec a ses propres règles — promesse d'achat, notaire, taxes scolaires. Je vous guide étape par étape." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, nature" },
];


const faq = [
  { q: "Quelles sont les vraies économies en achetant à Gatineau?", a: "Ça dépend du secteur et du type de propriété. En général, 15-30% d'économie sur le prix d'achat, mais il faut aussi considérer les taxes municipales et scolaires." },
  { q: "Comment fonctionne l'achat quand je suis en Ontario?", a: "Vous pouvez travailler en Ontario et vivre à Gatineau. Le processus d'achat se fait au Québec — promesse d'achat, notaire, etc. Je vous guide à chaque étape." },
  { q: "Les taxes sont-elles plus élevées au Québec?", a: "Les taxes municipales varient par secteur. L'impôt sur le revenu est différent aussi. On regarde le portrait complet ensemble." },
];

const BuyFromOttawaPage = () => (
   <>
    <PageMeta title="Acheter à Gatineau depuis Ottawa" description="Vous habitez Ottawa et pensez acheter à Gatineau? Aylmer, Hull, Plateau — taxes, quartiers, avantages et accompagnement bilingue pour votre transition." />
    <HeroSection
      overline="Acheter depuis Ottawa · Gatineau"
      title="Acheter à Gatineau depuis Ottawa"
      subtitle="Plus d'espace, des prix plus accessibles, une qualité de vie différente — sans être loin du travail. Voici ce qu'il faut savoir."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "#secteurs" }}
      trustLine="Spécialiste en relocalisation Ottawa → Gatineau"
      heroBgImage={heroImg}
    />
<CardGrid
      overline="Les avantages"
      title="Pourquoi de plus en plus d'Ottaviens traversent la rivière"
      items={advantages}
    />

    <InlineCTA
      text="Vous vendez aussi à Ottawa? Connaître la valeur de votre propriété actuelle peut clarifier votre budget d'achat."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <SectorLinks
      id="secteurs"
      overline="Secteurs populaires"
      title="Les quartiers les plus recherchés par les Ottaviens"
      sectors={sectors}
      background="alt"
    />

    <ContentBlock narrow>
      <SectionHeading title="Un courtier qui connaît les deux côtés" />
      <p className="prose-body mt-5">
        Après près de 9 ans à Gatineau, j'ai accompagné des dizaines de familles qui traversent la rivière. Je connais les avantages, les compromis et les pièges — et je vous aide à naviguer le tout sans stress.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/consultation-acheteur">Réserver ma consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter à Gatineau"
      text="Processus, budget, secteurs et conseils — tout dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Prêt à explorer Gatineau?"
      text="Réservez une consultation gratuite — on regarde ensemble les secteurs et les options qui correspondent à votre profil."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Explorer les secteurs", href: "/plateau-aylmer", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default BuyFromOttawaPage;
