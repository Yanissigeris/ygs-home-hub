import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-properties.jpg";

const FeaturedPropertiesPage = () => (
  <>
    <HeroSection
      overline="Propriétés vedettes · Gatineau"
      title="Nos coups de cœur à Gatineau"
      subtitle="Découvrez les propriétés les plus intéressantes du moment — sélectionnées pour leur emplacement, leur potentiel et leur rapport qualité-prix."
      primaryCta={{ label: "Réserver une consultation", href: "/contact-yanis" }}
      trustLine="Sélection personnalisée par Yanis Gauthier-Sigeris"
      backgroundImage={heroImg}
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Bientôt disponible"
        title="Les propriétés vedettes arrivent bientôt"
        subtitle="En attendant, contactez-moi directement pour recevoir une sélection personnalisée selon vos critères."
      />
      <p className="prose-body mt-5">
        Chaque semaine, je repère les meilleures opportunités sur le marché de Gatineau. Inscrivez-vous pour les recevoir en priorité.
      </p>
    </ContentBlock>

    <CTASection
      dark
      title="Recevez les meilleures propriétés en priorité"
      text="Dites-moi ce que vous cherchez — je vous envoie les coups de cœur avant tout le monde."
      buttons={[
        { label: "Réserver une consultation", href: "/contact-yanis" },
        { label: "Voir tous les secteurs", href: "/plateau-aylmer", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default FeaturedPropertiesPage;
