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
  "Comparer le marché immobilier de Gatineau avec ceux d'Ottawa et de Montréal",
  "Choisir le bon secteur pour votre famille et votre budget",
  "Le processus d'achat et d'installation au Québec",
  "Écoles, services et transports : ce qu'il faut savoir",
  "Taxe de bienvenue, taxes municipales, impôt et coût de la vie",
  "Les erreurs à éviter lors d'une relocalisation",
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer/", detail: "Quartiers familiaux et maisons récentes, à environ 9 à 14 km du centre-ville d'Ottawa" },
  { name: "Hull", href: "/hull/", detail: "Milieu urbain avec condos et plex, à environ 2 km du centre-ville d'Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers/", detail: "Prix médian unifamilial le plus bas des 4 secteurs de la ville (APCIQ, T2 2026) et accès à la nature" },
];

const faq = [
  { q: "Ce guide est-il gratuit?", a: "Oui. Il vous donne les repères de base pour planifier votre relocalisation à Gatineau." },
  { q: "Comment recevoir le guide?", a: "Cliquez sur « Recevoir le guide relocalisation » sur cette page et laissez votre courriel. Vous pouvez aussi me joindre au 819-210-3044 pour des réponses adaptées à votre situation." },
  { q: "Les taxes sont-elles plus élevées au Québec?", a: "Ça dépend de la taxe. À l'achat, vous payez la taxe de bienvenue : à Gatineau, environ 4 486 $ pour une propriété de 425 000 $ selon la grille 2026. Les taxes municipales varient selon la propriété, et l'impôt sur le revenu diffère de l'Ontario. On compare votre situation ensemble." },
  { q: "Faut-il parler français pour vivre à Gatineau?", a: "Pas nécessairement. Aylmer, par exemple, est un secteur très bilingue. Le français reste toutefois un atout au quotidien." },
];

const related = [
  { title: "Acheter à Gatineau depuis Ottawa", text: "Plus d'espace et des prix plus accessibles de l'autre côté de la rivière.", href: "/acheter-a-gatineau-depuis-ottawa/" },
  { title: "Relocalisation depuis Montréal", text: "Ce qui change quand on quitte Montréal pour l'Outaouais.", href: "/relocalisation-montreal-gatineau/" },
  { title: "Relocalisation militaire", text: "Mutation vers la RCN, service adapté aux militaires.", href: "/relocalisation-militaire-gatineau/" },
  { title: "Tous les quartiers", text: "Comparez les secteurs de Gatineau.", href: "/quartiers-a-considerer-a-gatineau/" },
];

const RelocationGuidePage = () => (
   <>
    <PageMeta title="Guide de relocalisation à Gatineau" description="Guide pour vous installer à Gatineau depuis Ottawa. Quartiers, écoles, services et processus québécois expliqués." ogImage="https://yanisgauthier.com/og/og-reloc.jpg" />
    <ServiceJsonLd name="Guide de relocalisation à Gatineau" description="Guide pour s'installer à Gatineau depuis Ottawa. Quartiers, écoles, services et processus québécois expliqués." url="/guide-relocalisation-gatineau/" serviceType="Real Estate Relocation Guide" />
    <HeroSection
      overline="Guide relocalisation · Gatineau"
      title="S'installer à Gatineau : le guide"
      subtitle="Ce qu'il faut savoir pour préparer votre relocalisation : secteurs, prix, processus, écoles et mode de vie."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis/" }}
      secondaryCta={{ label: "Voir les secteurs", href: "/quartiers-a-considerer-a-gatineau/" }}
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
        Vous arrivez d'Ottawa, de Montréal ou d'ailleurs au Canada? Avant d'acheter à Gatineau, il faut connaître le terrain. Ce guide couvre les points de base pour les nouveaux arrivants.
      </p>
    </ContentBlock>

    <SectorLinks
      overline="Quelques secteurs"
      title="Les quartiers à considérer"
      sectors={sectors}
      background="alt"
    />

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Vous déménagez à Gatineau? Recevez le guide."
      text="Un guide clair pour comprendre un achat à Gatineau quand on arrive d'Ottawa ou d'ailleurs, et choisir le bon secteur."
      ctaLabel="Recevoir le guide relocalisation"
    />

    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation gratuit, recevez-le par courriel" />

    <InlineCTA
      text="Vous voulez un accompagnement personnalisé? Réservez un appel gratuit."
      buttonLabel="Réserver un appel →"
      href="/contact-yanis/"
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
      text="Réservez un appel gratuit. On clarifie vos options et vos prochaines étapes."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis/" },
        { label: "Voir les secteurs", href: "/quartiers-a-considerer-a-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />
  </>
);

export default RelocationGuidePage;
