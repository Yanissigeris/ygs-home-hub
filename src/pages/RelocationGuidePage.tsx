import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import BenefitsList from "@/components/BenefitsList";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import heroImg from "@/assets/hero-relocation-guide.webp";

const topics = [
  "Comprendre le marché immobilier de Gatineau vs Ottawa et Montréal",
  "Choisir le bon secteur pour votre famille et votre budget",
  "Le processus d'achat et d'installation au Québec",
  "Écoles, services, transports — ce qu'il faut savoir",
  "Taxes, coût de la vie et avantages fiscaux",
  "Les erreurs à éviter lors d'une relocalisation",
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer", detail: "Familial, maisons récentes, accès Ottawa" },
  { name: "Hull", href: "/hull", detail: "Urbain, proche centre-ville, condos et plex" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers", detail: "Terrain, prix accessibles, nature" },
];

const faq = [
  { q: "Ce guide est-il gratuit?", a: "Oui. L'objectif est de vous donner une base solide pour planifier votre relocalisation en confiance." },
  { q: "Comment recevoir le guide complet?", a: "Contactez-moi directement — je vous envoie toutes les informations pertinentes pour votre situation." },
  { q: "Les taxes sont-elles plus élevées au Québec?", a: "Les taxes municipales varient par secteur. L'impôt sur le revenu est différent aussi. On regarde le portrait complet ensemble." },
  { q: "Faut-il parler français pour vivre à Gatineau?", a: "Pas nécessairement — plusieurs secteurs comme Aylmer sont très bilingues. Mais le français est un atout dans la vie quotidienne." },
];

const related = [
  { title: "Relocalisation depuis Ottawa", text: "Plus d'espace et des prix plus accessibles de l'autre côté de la rivière.", href: "/acheter-a-gatineau-depuis-ottawa" },
  { title: "Relocalisation depuis Montréal", text: "Qualité de vie et espace pour les familles montréalaises.", href: "/relocalisation-montreal-gatineau" },
  { title: "Relocalisation militaire", text: "Mutation vers la RCN — service adapté aux militaires.", href: "/relocalisation-militaire-gatineau" },
  { title: "Tous les quartiers", text: "Comparez les secteurs de Gatineau.", href: "/quartiers-a-considerer-a-gatineau" },
];

const RelocationGuidePage = () => (
   <>
    <PageMeta title="Guide de relocalisation à Gatineau" description="Guide complet pour vous installer à Gatineau depuis Ottawa. Quartiers, écoles, services et processus québécois expliqués." />
    <ServiceJsonLd name="Guide de relocalisation à Gatineau" description="Guide complet pour s'installer à Gatineau depuis Ottawa. Quartiers, écoles, services et processus québécois expliqués." url="/guide-relocalisation-gatineau" serviceType="Real Estate Relocation Guide" />
    <HeroSection
      overline="Guide relocalisation · Gatineau"
      title="Guide complet pour s'installer à Gatineau"
      subtitle="Tout ce que vous devez savoir pour réussir votre relocalisation — secteurs, prix, processus, écoles et mode de vie."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis" }}
      secondaryCta={{ label: "Explorer les secteurs", href: "/quartiers-a-considerer-a-gatineau" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    <BenefitsList
      overline="Dans ce guide"
      title="Ce que vous allez apprendre"
      items={topics}
    />

    <ContentBlock narrow>
      <SectionHeading title="S'installer à Gatineau, ça se prépare" />
      <p className="prose-body mt-5">
        Que vous veniez d'Ottawa, de Montréal ou d'ailleurs au Canada, Gatineau offre une qualité de vie exceptionnelle — mais il faut connaître le terrain. Ce guide couvre tout ce que les nouveaux arrivants doivent savoir.
      </p>
    </ContentBlock>

    <SectorLinks
      overline="Secteurs populaires"
      title="Les quartiers à considérer"
      sectors={sectors}
      background="alt"
    />

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Vous déménagez à Gatineau? Recevez le guide complet."
      text="Un guide clair pour mieux comprendre un achat à Gatineau en venant d'Ottawa ou d'ailleurs, éviter les surprises et choisir le bon secteur."
      ctaLabel="Recevoir le guide relocalisation"
    />

    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation gratuit — recevez-le par courriel" />

    <InlineCTA
      text="Vous voulez un accompagnement personnalisé? Réservez un appel gratuit."
      buttonLabel="Réserver un appel →"
      href="/contact-yanis"
    />

    <FAQSection items={faq} />

    <RelatedPages
      title="Pages connexes"
      pages={related}
      background="alt"
    />

    <CTASection
      dark
      title="Planifions votre installation"
      text="Réservez un appel gratuit — on clarifie vos options et vos prochaines étapes."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis" },
        { label: "Explorer les secteurs", href: "/quartiers-a-considerer-a-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  </>
);

export default RelocationGuidePage;
