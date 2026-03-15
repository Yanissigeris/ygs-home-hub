import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import FAQSection from "@/components/FAQSection";
import InlineCTA from "@/components/InlineCTA";
import { Search, Star, Home, MapPin, TrendingUp, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-properties.jpg";

const features = [
  { icon: Star, title: "Propriétés vedettes", text: "Découvrez nos coups de cœur et les meilleures opportunités du moment à Gatineau.", cta: "Voir les vedettes", href: "/proprietes-vedettes" },
  { icon: Home, title: "Nouvelles inscriptions", text: "Soyez les premiers informés des propriétés fraîchement mises en marché.", cta: "Voir les nouvelles", href: "/nouvelles-inscriptions" },
  { icon: TrendingUp, title: "Vendu récemment", text: "Consultez les ventes récentes pour mieux comprendre les prix.", cta: "Voir les ventes", href: "/vendu-recemment" },
  { icon: MapPin, title: "Par secteur", text: "Explorez les propriétés par quartier — Aylmer, Hull, Plateau et plus.", cta: "Voir les quartiers", href: "/quartiers-a-considerer-a-gatineau" },
];

const profileCards = [
  { icon: Search, title: "Vous cherchez une maison", text: "Unifamiliale, jumelé, maison en rangée — trouvez la propriété qui correspond à votre profil." },
  { icon: Building2, title: "Vous cherchez un plex", text: "Duplex, triplex ou plus — analysez le rendement avant d'acheter." },
  { icon: Home, title: "Vous cherchez un condo", text: "Centre-ville, banlieue ou développement récent — les options ne manquent pas." },
];

const faq = [
  { q: "Comment recevoir les propriétés qui correspondent à mes critères?", a: "Contactez-moi avec vos critères — je vous envoie les meilleures options en priorité, y compris celles qui ne sont pas encore sur le marché." },
  { q: "Est-ce que je peux visiter des propriétés avec vous?", a: "Bien sûr. On commence par une consultation pour clarifier vos critères, puis on organise les visites." },
  { q: "Avez-vous accès à des propriétés qui ne sont pas affichées publiquement?", a: "Oui. En tant que courtier actif à Gatineau depuis près de 9 ans, j'ai accès à des propriétés avant leur mise en marché officielle." },
];

const PropertiesPage = () => (
  <>
    <HeroSection
      overline="Propriétés · Gatineau et Outaouais"
      title="Trouvez votre propriété à Gatineau"
      subtitle="Maisons, condos, plex et terrains — parcourez les propriétés disponibles dans tous les secteurs de Gatineau et de l'Outaouais."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Accompagnement stratégique. Zéro pression."
      backgroundImage={heroImg}
    />

    <LinkedCardGrid
      overline="Explorer"
      title="Parcourez les propriétés par catégorie"
      items={features}
      columns={2}
    />

    <CardGrid
      overline="Votre profil"
      title="Quel type de propriété cherchez-vous?"
      items={profileCards}
      columns={3}
      background="alt"
    />

    <ContentBlock narrow>
      <SectionHeading
        overline="Accès prioritaire"
        title="Recevez les meilleures propriétés en premier"
      />
      <p className="prose-body mt-5">
        En tant que courtier actif à Gatineau depuis près de 9 ans, j'ai accès à toutes les inscriptions du marché — y compris celles qui ne sont pas encore publiques. Dites-moi ce que vous cherchez, je fais le travail pour vous.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Vous vendez? Découvrez combien vaut votre propriété — c'est gratuit."
      buttonLabel="Obtenir ma valeur →"
      href="/evaluation-gratuite-gatineau"
    />

    <FAQSection items={faq} />

    <CTASection
      dark
      title="Vous cherchez une propriété à Gatineau?"
      text="Dites-moi vos critères — je vous envoie les meilleures options avant tout le monde."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Explorer les secteurs", href: "/quartiers-a-considerer-a-gatineau", variant: "outline" },
      ]}
      trustLine="Zéro pression — je vous donne les options, vous décidez."
    />
  </>
);

export default PropertiesPage;
