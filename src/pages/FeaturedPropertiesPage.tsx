import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-properties.jpg";

const faq = [
  { q: "Comment sont sélectionnées les propriétés vedettes?", a: "Je sélectionne les propriétés selon leur emplacement, leur potentiel, leur rapport qualité-prix et leur pertinence pour les acheteurs actifs à Gatineau." },
  { q: "À quelle fréquence la liste est-elle mise à jour?", a: "Chaque semaine — les meilleures opportunités arrivent et partent rapidement." },
  { q: "Puis-je recevoir les vedettes par courriel?", a: "Oui — contactez-moi avec vos critères et je vous envoie les coups de cœur en priorité." },
];

const related = [
  { title: "Nouvelles inscriptions", text: "Les propriétés fraîchement mises en marché à Gatineau.", href: "/nouvelles-inscriptions" },
  { title: "Vendu récemment", text: "Les ventes récentes pour comprendre les prix.", href: "/vendu-recemment" },
  { title: "Toutes les propriétés", text: "Parcourez les propriétés par catégorie.", href: "/proprietes" },
  { title: "Explorer les quartiers", text: "Trouvez le secteur qui vous correspond.", href: "/quartiers-a-considerer-a-gatineau" },
];

const FeaturedPropertiesPage = () => (
  <>
    <HeroSection
      overline="Propriétés vedettes · Gatineau"
      title="Nos coups de cœur à Gatineau"
      subtitle="Découvrez les propriétés les plus intéressantes du moment — sélectionnées pour leur emplacement, leur potentiel et leur rapport qualité-prix."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
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

    <InlineCTA
      text="Vous vendez? Découvrez combien vaut votre propriété."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <FAQSection items={faq} />

    <RelatedPages
      title="Explorer aussi"
      pages={related}
      background="alt"
    />

    <CTASection
      dark
      title="Recevez les meilleures propriétés en priorité"
      text="Dites-moi ce que vous cherchez — je vous envoie les coups de cœur avant tout le monde."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Voir tous les secteurs", href: "/quartiers-a-considerer-a-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default FeaturedPropertiesPage;
