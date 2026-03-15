import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-properties.jpg";

const SoldRecentlyPage = () => (
  <>
    <HeroSection
      overline="Vendu récemment · Gatineau"
      title="Propriétés vendues récemment à Gatineau"
      subtitle="Consultez les ventes récentes dans votre secteur pour mieux comprendre les prix du marché."
      primaryCta={{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Données de ventes réelles pour des décisions éclairées"
      backgroundImage={heroImg}
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Bientôt disponible"
        title="L'historique des ventes arrive bientôt"
        subtitle="En attendant, demandez votre évaluation gratuite — je vous fournis les ventes comparables récentes dans votre secteur."
      />
      <p className="prose-body mt-5">
        Connaître les prix de vente réels dans votre quartier est la meilleure façon d'établir un prix réaliste, que vous vendiez ou achetiez. Demandez votre analyse personnalisée.
      </p>
    </ContentBlock>

    <CTASection
      dark
      title="Vous voulez connaître les prix réels dans votre secteur?"
      text="Demandez une évaluation gratuite — je vous fournis les ventes comparables récentes."
      buttons={[
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les chiffres, vous décidez."
    />
  </>
);

export default SoldRecentlyPage;
