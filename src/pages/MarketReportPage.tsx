import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import { marketArticlePages, marketBlockCopy } from "@/data/market-articles";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-market-report.webp";

const faq = [
  { q: "Comment accéder au rapport du marché?", a: "Contactez-moi pour être informé de la publication du prochain rapport. En attendant, vous pouvez demander une analyse personnalisée de votre secteur." },
  { q: "Les données couvrent quels secteurs?", a: "Tous les secteurs de Gatineau: Aylmer, Hull, Plateau, Buckingham, Gatineau centre et plus." },
  { q: "Le rapport est-il gratuit?", a: "Oui, c'est un outil que j'offre à mes clients et à ceux qui s'intéressent au marché." },
];

const related = [
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété? Réponse personnalisée.", href: "/evaluation-gratuite-gatineau/" },
  { title: "Vendu récemment", text: "Les ventes récentes dans votre secteur.", href: "/vendu-recemment/" },
  { title: "Guide vendeur", text: "Tout pour vendre au meilleur prix.", href: "/guide-vendeur-gatineau/" },
  { title: "Investir en plex", text: "Analyse et stratégie pour les plex à Gatineau.", href: "/investir-plex-gatineau/" },
];

const MarketReportPage = () => (
   <>
    <PageMeta title="Rapport immobilier Gatineau · À venir | YGS" description="Le prochain rapport du marché immobilier de Gatineau est à venir. Contactez Yanis pour être informé de sa publication ou demander une analyse de votre secteur." ogImage="https://yanisgauthier.com/og/og-market.jpg" />
    <HeroSection
      overline="Rapport marché · Gatineau"
      title="Rapport du marché immobilier à Gatineau"
      subtitle="Le prochain rapport est en préparation. En attendant, demandez une analyse personnalisée du marché dans votre secteur."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis/" }}
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
        Le prochain rapport du marché immobilier de Gatineau est en préparation. Contactez-moi pour être informé de sa publication ou pour discuter dès maintenant du marché dans votre secteur.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous voulez connaître la valeur de votre propriété? Demandez une évaluation gratuite."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau/"
    />

    <FAQSection items={faq} />

    <RelatedPages
      title="Explorer aussi"
      pages={related}
      background="alt"
    />
    {/* Internal links to the latest market articles (SEO: they had a single inlink from the blog index) */}
    <RelatedPages
      overline={marketBlockCopy.fr.overline}
      title={marketBlockCopy.fr.title}
      pages={marketArticlePages("fr", "market")}
    />

    <GuideInlineCTA
      guideType="seller_guide"
      headline="Guide vendeur gratuit — vendez au meilleur prix"
      text="Prix, préparation et stratégie, tout dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide vendeur"
    />

    <CTASection
      dark
      title="Recevez le prochain rapport marché"
      text="Contactez-moi pour être sur la liste, vous recevrez l'analyse dès sa publication."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Données objectives et analyse locale claire."
    />
  
    <StickyGuideBanner guideType="seller_guide" label="Guide vendeur gratuit, recevez-le par courriel" />
  </>
);

export default MarketReportPage;
