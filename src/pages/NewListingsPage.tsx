import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-properties.jpg";

const NewListingsPage = () => (
  <>
    <HeroSection
      overline="Nouvelles inscriptions · Gatineau"
      title="Nouvelles propriétés sur le marché"
      subtitle="Les propriétés fraîchement inscrites à Gatineau — soyez parmi les premiers à les découvrir."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      trustLine="Mises à jour régulières par Yanis Gauthier-Sigeris"
      backgroundImage={heroImg}
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Bientôt disponible"
        title="Les nouvelles inscriptions arrivent bientôt"
        subtitle="En attendant, contactez-moi pour être informé en priorité des nouvelles propriétés dans votre secteur."
      />
      <p className="prose-body mt-5">
        Le marché bouge vite à Gatineau. Les meilleures propriétés se vendent souvent en quelques jours. En me contactant, vous serez avisé dès qu'une opportunité correspondant à vos critères apparaît.
      </p>
    </ContentBlock>

    <CTASection
      dark
      title="Ne manquez pas les nouvelles inscriptions"
      text="Contactez-moi pour être avisé en priorité des nouvelles propriétés à Gatineau."
      buttons={[
        { label: "Réserver une consultation", href: "/contact-yanis" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default NewListingsPage;
