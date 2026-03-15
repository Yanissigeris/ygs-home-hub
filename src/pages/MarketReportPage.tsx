import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-plex.jpg";

const MarketReportPage = () => (
  <>
    <HeroSection
      overline="Rapport marché · Gatineau"
      title="Rapport du marché immobilier à Gatineau"
      subtitle="Prix, tendances, volumes de ventes — une lecture claire du marché immobilier de Gatineau et de l'Outaouais."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      backgroundImage={heroImg}
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
  </>
);

export default MarketReportPage;
