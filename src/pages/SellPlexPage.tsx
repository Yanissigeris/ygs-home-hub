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
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import { Building2, TrendingUp, DollarSign, Users, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-sell-plex.webp";

const challenges = [
  { icon: Building2, title: "Évaluer un plex correctement", text: "La valeur d'un plex se calcule surtout à partir de ses revenus et de ses dépenses. Les comparables viennent compléter l'analyse." },
  { icon: TrendingUp, title: "Aller chercher le bon prix", text: "Une présentation soignée et des baux bien documentés avant la vente peuvent influencer le prix obtenu." },
  { icon: DollarSign, title: "Comprendre la fiscalité", text: "Gain en capital et récupération d'amortissement : ces implications fiscales se planifient avant la vente." },
  { icon: Users, title: "Gérer les locataires", text: "La transition avec les locataires pendant la vente demande un plan clair." },
];

const steps = [
  { num: "01", title: "Analyse de rentabilité", desc: "Revenus, dépenses, taux d'inoccupation et potentiel de l'immeuble : on établit la valeur de votre plex." },
  { num: "02", title: "Positionnement", desc: "Le prix de départ et les améliorations à considérer, avec une stratégie pour attirer les acheteurs-investisseurs." },
  { num: "03", title: "Mise en marché et vente", desc: "Visibilité ciblée, négociation et coordination complète jusqu'au notaire." },
];


const faq = [
  { q: "Comment évaluer la valeur d'un plex?", a: "On utilise l'approche des revenus (multiplicateur de revenus bruts) et les ventes comparables. L'état et le potentiel de l'immeuble comptent aussi, tout comme les loyers actuels." },
  { q: "Quand est-ce le bon moment pour vendre un plex?", a: "Ça dépend de vos objectifs, par exemple réinvestir ailleurs ou alléger votre gestion. On compare aussi la vente à un refinancement avant de choisir le moment." },
  { q: "Qu'arrive-t-il aux locataires quand je vends?", a: "Les baux suivent l'immeuble et lient le nouveau propriétaire. La loi protège les locataires, et je coordonne la transition avec eux." },
];

const SellPlexPage = () => (
   <>
    <PageMeta title="Vendre un plex à Gatineau · Outaouais" description="Vendez votre duplex, triplex ou immeuble à revenus à Gatineau. Évaluation précise et stratégie de mise en marché spécialisée." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="Vendre un plex à Gatineau" description="Vente spécialisée de duplex, triplex et immeubles à revenus à Gatineau. Évaluation précise et stratégie de mise en marché adaptée." url="/vendre-un-plex-a-gatineau/" serviceType="Multi-Family Property Listing Service" />
    <HeroSection
      overline="Vendre un plex · Gatineau"
      title="Vendre votre plex à Gatineau"
      subtitle="Duplex, triplex ou plus : je vous aide à vendre au bon prix, avec une stratégie pensée pour les immeubles à revenus."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Recevoir une analyse", href: "/analyse-plex-gatineau/" }}
      trustLine="Spécialiste plex."
      heroBgImage={heroImg}
    />
<CardGrid
      overline="Les enjeux"
      title="Vendre un plex, c'est différent d'une maison"
      items={challenges}
    />

    <InlineCTA
      text="Première étape : connaître la valeur de votre plex. C'est gratuit."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
    />

    <ProcessSteps steps={steps} background="alt" />

    <ContentBlock narrow>
      <SectionHeading title="Bien vendre sans se compliquer la vie" />
      <p className="prose-body mt-5">
        Beaucoup de propriétaires de plex sous-estiment la valeur de leur immeuble, ou ne savent pas comment la faire valoir avant de vendre. Mon rôle est de vous donner une lecture claire de votre situation et une stratégie pour vendre votre immeuble au bon prix.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/analyse-plex-gatineau/">Recevoir mon analyse plex</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="investor_guide"
      headline="Guide investisseur gratuit pour les propriétaires de plex"
      text="Le rendement et la fiscalité d'un plex, expliqués dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide investisseur"
    />

    <CTASection
      dark
      title="Prêt à faire le point sur vos options?"
      text="Demandez une analyse de votre plex : sa valeur selon ses revenus, avec ma recommandation."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" },
        { label: "Analyse plex gratuite", href: "/analyse-plex-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="investor_guide" label="Guide investisseur gratuit, recevez-le par courriel" />
  </>
);

export default SellPlexPage;
