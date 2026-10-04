import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import { Clock, TrendingUp, Home, AlertTriangle, Award, Shield } from "lucide-react";
import heroImg from "@/assets/home-interior.webp";

const factors = [
  { icon: TrendingUp, title: "Le marché local", text: "Les conditions du marché à Gatineau varient d'un secteur à l'autre et d'une saison à l'autre." },
  { icon: Home, title: "Votre situation personnelle", text: "Une mutation ou une famille qui s'agrandit peut fixer votre calendrier avant même le marché." },
  { icon: AlertTriangle, title: "Les pièges de l'attente", text: "Attendre un hypothétique sommet de prix peut coûter plus cher que de vendre au bon moment, avec une bonne préparation." },
];


const faq = [
  { q: "Le printemps est-il le meilleur moment pour vendre?", a: "C'est souvent la saison la plus active, mais pas forcément la plus payante. En automne ou en hiver, il y a généralement moins de propriétés en vente, ce qui peut jouer en votre faveur." },
  { q: "Est-ce que le marché de Gatineau va baisser?", a: "Personne ne peut prédire le marché avec certitude. Ce que je peux faire, c'est vous donner une analyse réaliste basée sur les données actuelles." },
  { q: "Comment savoir si c'est le bon moment pour moi?", a: "On regarde ensemble votre situation. Souvent, le bon moment dépend plus de votre plan que des conditions générales." },
];

const WhenToSellPage = () => (
   <>
    <PageMeta title="Quand vendre sa propriété à Gatineau" description="Le bon moment pour vendre à Gatineau et en Outaouais dépend de votre situation. Analyse du marché local et conseils d'un courtier expérimenté." ogImage="https://yanisgauthier.com/og/og-seller.jpg" />
    <ServiceJsonLd name="Quand vendre sa propriété à Gatineau" description="Analyse du marché immobilier de Gatineau pour choisir le bon moment de vendre votre propriété en Outaouais." url="/quand-vendre-a-gatineau/" serviceType="Real Estate Market Analysis" />
    <HeroSection
      overline="Quand vendre · Gatineau"
      title="Quand vendre sa propriété à Gatineau?"
      subtitle="Le bon moment pour vendre dépend de votre situation, pas seulement du marché. Quelques repères pour y voir plus clair."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis/" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />
<CardGrid
      overline="Les facteurs"
      title="Ce qui influence le bon moment"
      items={factors}
      columns={3}
    />

    <ContentBlock narrow>
      <SectionHeading title="Le sommet du marché ne s'annonce pas" />
      <p className="prose-body mt-5">
        Beaucoup de vendeurs attendent ce sommet, mais on ne le reconnaît presque jamais sur le coup. Ce qui pèse le plus, c'est la préparation : le bon prix et une mise en marché bien pensée.
      </p>
      <p className="prose-body mt-4">
        Depuis 2017 à Gatineau, j'ai vu des vendeurs réussir dans tous les types de marchés, avec le bon plan.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Commencez par connaître la valeur actuelle de votre propriété. C'est gratuit."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
    />

    <GuideInlineCTA
      guideType="seller_guide"
      headline="Guide vendeur gratuit : vendez au bon moment"
      text="Le prix et le choix du moment, expliqués dans un guide envoyé gratuitement par courriel."
      ctaLabel="Recevoir le guide vendeur"
    />

    <CTASection
      dark
      title="Vous hésitez sur le moment de vendre?"
      text="Demandez une évaluation gratuite. On regardera ensemble si le moment est bon pour vous."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit, recevez-le par courriel" />
  </>
);

export default WhenToSellPage;
