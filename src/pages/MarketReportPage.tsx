import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-market-report.jpg";

const faq = [
  { q: "Comment accéder au rapport du marché?", a: "Contactez-moi — je vous envoie l'analyse la plus récente pour votre secteur." },
  { q: "Les données couvrent quels secteurs?", a: "Tous les secteurs de Gatineau: Aylmer, Hull, Plateau, Buckingham, Gatineau centre et plus." },
  { q: "Le rapport est-il gratuit?", a: "Oui — c'est un outil que j'offre à mes clients et à ceux qui s'intéressent au marché." },
];

const related = [
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété? Estimation en 24h.", href: "/evaluation-gratuite-gatineau" },
  { title: "Vendu récemment", text: "Les ventes récentes dans votre secteur.", href: "/vendu-recemment" },
  { title: "Guide vendeur", text: "Tout pour vendre au meilleur prix.", href: "/guide-vendeur-gatineau" },
  { title: "Investir en plex", text: "Analyse et stratégie pour les plex à Gatineau.", href: "/investir-plex-gatineau" },
];

const MarketReportPage = () => (
   <>
    <PageMeta title="Rapport du marché immobilier Gatineau" description="Prix, tendances et volumes de ventes à Gatineau et en Outaouais. Rapport du marché immobilier par Yanis Gauthier-Sigeris." />
    <HeroSection
      overline="Rapport marché · Gatineau"
      title="Rapport du marché immobilier à Gatineau"
      subtitle="Prix, tendances, volumes de ventes — une lecture claire du marché immobilier de Gatineau et de l'Outaouais."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Bientôt disponible"
        title="Le rapport marché arrive bientôt"
        subtitle="En attendant, contactez-moi pour recevoir une analyse personnalisée du marché dans votre secteur."
      />
      <p className="prose-body mt-5">
        Chaque trimestre, je prépare une analyse du marché immobilier de Gatineau — prix médians, volume de ventes, tendances par secteur et prévisions. Contactez-moi pour recevoir la prochaine édition.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous voulez connaître la valeur de votre propriété? Demandez une évaluation gratuite."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <FAQSection items={faq} />

    <RelatedPages
      title="Explorer aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="seller_guide"
      headline="Guide vendeur gratuit — vendez au meilleur prix"
      text="Prix, préparation et stratégie — tout dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide vendeur"
    />

    <CTASection
      dark
      title="Recevez le prochain rapport marché"
      text="Contactez-moi pour être sur la liste — vous recevrez l'analyse dès sa publication."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — données objectives et analyse locale."
    />
  
    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit — recevez-le par courriel" />
  </>
);

export default MarketReportPage;
