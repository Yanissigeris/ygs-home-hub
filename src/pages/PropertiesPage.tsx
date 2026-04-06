import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import FAQSection from "@/components/FAQSection";
import InlineCTA from "@/components/InlineCTA";
import RelatedPages from "@/components/RelatedPages";
import SectorLinks from "@/components/SectorLinks";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Search, Star, Home, Building2, TrendingUp, MapPin, ExternalLink } from "lucide-react";
import { useLocation } from "react-router-dom";
import heroImg from "@/assets/hero-properties.webp";

const profileCards = [
  { icon: Search, title: "Vous cherchez une maison", text: "Unifamiliale, jumelé, maison en rangée — trouvez la propriété qui correspond à votre profil." },
  { icon: Building2, title: "Vous cherchez un plex", text: "Duplex, triplex ou plus — analysez le rendement avant d'acheter." },
  { icon: Home, title: "Vous cherchez un condo", text: "Centre-ville, banlieue ou développement récent — les options ne manquent pas." },
];

const sectors = [
  { name: "Aylmer", href: "/aylmer", detail: "Lac, quartiers établis, qualité de vie" },
  { name: "Plateau", href: "/plateau", detail: "Familles, développements récents" },
  { name: "Hull", href: "/hull", detail: "Urbain, condos, plex, proximité Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Espace, nature, prix accessibles" },
  { name: "Gatineau centre", href: "/gatineau", detail: "Résidentiel, services, banlieue" },
];

const faq = [
  { q: "Comment sont sélectionnées les propriétés vedettes?", a: "Je sélectionne les propriétés selon leur emplacement, leur potentiel, leur rapport qualité-prix et leur pertinence pour les acheteurs actifs à Gatineau." },
  { q: "Comment être informé des nouvelles inscriptions?", a: "Contactez-moi avec vos critères — je vous avise dès qu'une propriété correspondante arrive sur le marché." },
  { q: "Les propriétés se vendent-elles vite à Gatineau?", a: "Oui — les meilleures se vendent souvent en quelques jours. Être informé en priorité fait toute la différence." },
  { q: "Quels sont les prix des maisons déjà vendues à Gatineau?", a: "Les prix de vente ne sont pas publics au Québec. En tant que courtier, j'ai accès aux données" },
  { q: "Avez-vous accès à des propriétés qui ne sont pas affichées publiquement?", a: "Oui. En tant que courtier actif à Gatineau depuis près de 9 ans, j'ai accès à des propriétés avant leur mise en marché officielle." },
];

const related = [
  { title: "Consultation acheteur", text: "Clarifiez vos critères et vos options.", href: "/consultation-acheteur" },
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
  { title: "Rapport du marché", text: "Prix et tendances à Gatineau.", href: "/rapport-marche-gatineau" },
  { title: "Explorer les quartiers", text: "Trouvez le secteur qui vous correspond.", href: "/quartiers-a-considerer-a-gatineau" },
];

const CANONICAL = "https://yanisgauthier.com/proprietes";

const PropertiesPage = () => {
  const { pathname } = useLocation();
  const isAlias = pathname !== "/proprietes";

  return (
  <>
    <PageMeta title="Propriétés à vendre · Gatineau et Outaouais" description="Maisons, condos, plex et terrains à Gatineau — Aylmer, Hull, Plateau, Buckingham. Parcourez les propriétés disponibles en Outaouais." ogImage="https://yanisgauthier.com/og/og-seller.jpg" canonical={isAlias ? CANONICAL : undefined} />
    <HeroSection
      overline="Propriétés · Gatineau et Outaouais"
      title="Trouvez votre propriété en Outaouais"
      subtitle="Maisons, condos, plex et terrains — parcourez les propriétés disponibles dans tous les secteurs de Gatineau et de l'Outaouais."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur" }}
      secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Accompagnement stratégique."
      heroBgImage={heroImg}
    />

    <ContentBlock narrow={false}>
      <SectionHeading
        overline="Inscriptions actives"
        title="Mes propriétés à vendre"
        subtitle="Consultez mes inscriptions — maisons, condos, plex et terrains à Gatineau et en Outaouais."
      />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.filter(p => p.status === "active").map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://www.remax-quebec.com/fr/courtiers-immobiliers/yanis.gauthier-sigeris"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <Home className="h-5 w-5" />
          Voir toutes mes propriétés sur RE/MAX
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {properties.filter(p => p.status === "sold").length > 0 && (
        <div className="mt-16">
          <SectionHeading
            overline="Récemment vendues"
            title="Propriétés vendues"
            subtitle="Des résultats concrets pour mes clients."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties.filter(p => p.status === "sold").map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      )}
      <div className="mt-8 text-center">
        <a
          href="https://www.remax-quebec.com/fr/courtiers-immobiliers/yanis.gauthier-sigeris"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <Home className="h-5 w-5" />
          Voir toutes mes propriétés sur RE/MAX
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading
        overline="Accès prioritaire"
        title="Recevez les meilleures propriétés en premier"
      />
      <p className="prose-body mt-5">
        En tant que courtier actif à Gatineau depuis près de 9 ans, j'ai accès à toutes les inscriptions du marché — y compris celles qui ne sont pas encore publiques. Dites-moi ce que vous cherchez, je fais le travail pour vous.
      </p>
    </ContentBlock>

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

    <SectorLinks
      overline="Par secteur"
      title="Propriétés par quartier"
      sectors={sectors}
      background="alt"
    />

    <InlineCTA
      text="Vous vendez? Découvrez combien vaut votre propriété — c'est gratuit."
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
      title="Vous cherchez une propriété à Gatineau?"
      text="Dites-moi vos critères — je vous envoie les meilleures options avant tout le monde."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur" },
        { label: "Explorer les secteurs", href: "/quartiers-a-considerer-a-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  </>
  );
};

export default PropertiesPage;
