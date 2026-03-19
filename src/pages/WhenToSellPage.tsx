import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import TrustMiniStrip from "@/components/TrustMiniStrip";
import InlineCTA from "@/components/InlineCTA";
import { Clock, TrendingUp, Home, AlertTriangle, Award, Shield } from "lucide-react";
import heroImg from "@/assets/home-interior.jpg";

const factors = [
  { icon: TrendingUp, title: "Le marché local", text: "Les conditions du marché à Gatineau varient d'un secteur à l'autre et d'une saison à l'autre." },
  { icon: Home, title: "Votre situation personnelle", text: "Mutation, retraite, agrandissement de famille — votre timing dépend de votre vie, pas seulement du marché." },
  { icon: AlertTriangle, title: "Les pièges du timing", text: "Attendre le 'moment parfait' peut coûter plus cher que vendre au bon moment avec la bonne stratégie." },
];

const trustItems = [
  { icon: Clock, label: "Près de 9 ans en Outaouais" },
  { icon: Award, label: "Club Platine · Temple de la renommée" },
  { icon: Shield, label: "Analyse objective du marché" },
];

const faq = [
  { q: "Le printemps est-il vraiment le meilleur moment pour vendre?", a: "C'est souvent le plus actif, mais pas toujours le plus rentable. Moins de compétition en automne ou en hiver peut jouer en votre faveur." },
  { q: "Est-ce que le marché de Gatineau va baisser?", a: "Personne ne peut prédire le marché avec certitude. Ce que je peux faire, c'est vous donner une analyse réaliste basée sur les données actuelles." },
  { q: "Comment savoir si c'est le bon moment pour moi?", a: "On regarde ensemble votre situation — pas juste le marché. Souvent, le bon moment dépend plus de votre plan que des conditions générales." },
];

const WhenToSellPage = () => (
   <>
    <PageMeta title="Quand vendre sa propriété à Gatineau" description="Le bon moment pour vendre à Gatineau dépend de votre situation. Analyse du marché, facteurs clés et conseils d'un courtier expérimenté." />
    <HeroSection
      overline="Quand vendre · Gatineau"
      title="Quand vendre sa propriété à Gatineau?"
      subtitle="Le bon moment pour vendre dépend de votre situation, pas seulement du marché. Voici comment y voir plus clair."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    <TrustMiniStrip items={trustItems} />

    <CardGrid
      overline="Les facteurs"
      title="Ce qui influence le bon timing"
      items={factors}
      columns={3}
    />

    <ContentBlock narrow>
      <SectionHeading title="Le timing parfait n'existe pas" />
      <p className="prose-body mt-5">
        Beaucoup de vendeurs attendent le « moment parfait » — mais ce moment n'arrive jamais vraiment. Ce qui fait la différence, c'est la préparation: un bon prix, une bonne mise en marché et une stratégie solide.
      </p>
      <p className="prose-body mt-4">
        En près de 9 ans à Gatineau, j'ai vu des vendeurs réussir dans tous les types de marchés — avec le bon plan.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Commencez par connaître la valeur actuelle de votre propriété — c'est gratuit."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <GuideInlineCTA
      guideType="seller_guide"
      headline="Guide vendeur gratuit — vendez au bon moment"
      text="Prix, préparation, timing — tout dans un guide envoyé gratuitement par courriel."
      ctaLabel="Recevoir le guide vendeur"
    />

    <CTASection
      dark
      title="Vous hésitez sur le timing?"
      text="Demandez une évaluation gratuite — on regarde ensemble si le moment est bon pour vous."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit — recevez-le par courriel" />
  </>
);

export default WhenToSellPage;
