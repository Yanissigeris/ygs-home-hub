import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategory } from "@/data/reviews";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import { CheckCircle2, Clock, Award, Shield, MapPin, Home, DollarSign, FileText } from "lucide-react";
import heroImg from "@/assets/hero-relocalisation.webp";

const challenges = [
  { icon: MapPin, title: "Choisir le bon secteur", text: "Aylmer, Hull, le Plateau ou Buckingham : chaque secteur a sa personnalité. Je vous aide à trouver celui qui vous convient." },
  { icon: DollarSign, title: "Comprendre les prix", text: "Le marché de Gatineau ne fonctionne pas comme ceux d'Ottawa ou de Montréal. Je vous donne une lecture réaliste des prix par secteur." },
  { icon: FileText, title: "Le processus d'achat québécois", text: "Promesse d'achat, inspection, notaire : le processus au Québec a ses particularités. Je vous guide étape par étape." },
  { icon: Home, title: "Trouver la bonne propriété", text: "Une maison, c'est aussi un quartier, une école, un trajet et un mode de vie. On regarde le portrait complet." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer/", detail: "Quartiers familiaux et maisons récentes, à environ 9 à 14 km du centre-ville d'Ottawa" },
  { name: "Hull", href: "/hull/", detail: "Milieu urbain avec condos et plex, à environ 2 km du centre-ville d'Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers/", detail: "Prix médian unifamilial le plus bas des 4 secteurs de la ville (APCIQ, T2 2026) et accès à la nature" },
];

const steps = [
  { num: "01", title: "Consultation initiale", desc: "On parle de votre situation, votre budget, vos priorités et vos questions sur Gatineau." },
  { num: "02", title: "Tour des secteurs", desc: "Je vous présente les quartiers qui correspondent à votre profil, avec leurs avantages et leurs inconvénients." },
  { num: "03", title: "Accompagnement complet", desc: "Recherche ciblée, visites, offre, inspection et notaire : je vous accompagne jusqu'à la remise des clés." },
];


const nextSteps = [
  { title: "Réserver un appel", text: "On discute de votre relocalisation et de vos questions. L'appel est gratuit.", href: "/contact-yanis/", cta: "Réserver un appel", highlight: true },
  { title: "Guide relocalisation", text: "Ce qu'il faut savoir pour s'installer à Gatineau : secteurs, prix, processus et écoles.", href: "/guide-relocalisation-gatineau/", cta: "Lire le guide" },
  { title: "Comparer les quartiers", text: "Les secteurs de Gatineau selon votre style de vie et votre budget.", href: "/quartiers-a-considerer-a-gatineau/", cta: "Voir les quartiers" },
];

const faq = [
  { q: "Est-ce moins cher d'acheter à Gatineau qu'à Ottawa?", a: "En général, oui, surtout pour les maisons unifamiliales et les terrains. Au T2 2026, le prix médian d'une unifamiliale dans la RMR de Gatineau était de 523 500 $ (APCIQ). Il faut aussi tenir compte des taxes et du coût de la vie. On compare tout ça ensemble." },
  { q: "Comment fonctionne l'achat au Québec?", a: "Le processus diffère de celui de l'Ontario. Vous signez une promesse d'achat, généralement conditionnelle à l'inspection et au financement. Une fois les conditions remplies, la vente se conclut chez le notaire. Actif en Outaouais depuis 2017, je vous accompagne à chaque étape." },
  { q: "Quel secteur est le mieux pour une famille?", a: "Ça dépend de votre budget et de votre trajet vers le travail. Au T2 2026, le prix médian unifamilial était de 572 750 $ à Aylmer et de 419 545 $ à Buckingham/Masson-Angers (APCIQ). Hull et le secteur Gatineau se situent entre les deux. On compare les options selon vos priorités." },
  { q: "Est-ce que je peux travailler à Ottawa et vivre à Gatineau?", a: "Oui. Le centre-ville d'Ottawa se trouve à environ 2 km de l'hôtel de ville de Gatineau, dans le secteur Hull (pont du Portage) et à environ 14 km du Vieux-Aylmer (pont Champlain). Plusieurs ponts et le transport en commun relient les deux rives." },
];

const RelocationPage = () => (
   <>
    <PageMeta title="Relocalisation Ottawa vers Gatineau · Outaouais" description="Déménager d'Ottawa à Gatineau? Le guide : Aylmer, Hull, Plateau, Buckingham, taxes, écoles et accompagnement immobilier personnalisé." ogImage="https://yanisgauthier.com/og/og-reloc.jpg" />
    <ServiceJsonLd name="Service de relocalisation immobilière d'Ottawa à Gatineau" description="Accompagnement complet pour déménager d'Ottawa à Gatineau : recherche de quartier, visites, offre d'achat et installation en Outaouais." url="/relocalisation-ottawa-gatineau/" serviceType="Real Estate Relocation Service" />
    <HeroSection
      overline="Ottawa → Gatineau"
      title="S'installer à Gatineau depuis Ottawa ou ailleurs"
      subtitle="Vous pensez traverser la rivière? Je vous aide à comprendre les secteurs et les prix, puis à trouver la bonne propriété."
      primaryCta={{ label: "Réserver un appel", href: "/contact-yanis/" }}
      secondaryCta={{ label: "Guide relocalisation", href: "/guide-relocalisation-gatineau/" }}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
      heroBgImage={heroImg}
    />
<ContentBlock narrow>
      <SectionHeading
        overline="La relocalisation"
        title="Acheter à Gatineau quand on ne connaît pas le terrain"
        subtitle="Plus d'espace et des prix souvent plus accessibles. Encore faut-il savoir où chercher et comment fonctionne le processus."
      />
      <p className="prose-body mt-5">
        Chaque année, des familles et des professionnels traversent la rivière pour s'installer à Gatineau. Un courtier local qui connaît les deux rives vous aide à éviter les erreurs classiques.
      </p>
    </ContentBlock>

    <CardGrid
      overline="Les défis"
      title="Ce qui bloque souvent les acheteurs relocalisés"
      items={challenges}
      background="alt"
    />

    <ProcessSteps steps={steps} />

    <InlineCTA
      text="Vous êtes aussi vendeur? Connaître la valeur de votre propriété actuelle peut clarifier votre budget d'achat."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau/"
    />

    <SectorLinks
      id="secteurs"
      overline="Quelques secteurs"
      title="Les quartiers à considérer"
      sectors={sectors}
      background="alt"
    />

    <ReviewSection
      overline="Témoignages relocalisation"
      title="Ils se sont installés à Gatineau"
      reviews={getReviewsByCategory("relocation").slice(0, 2)}
      columns={2}
    />

    <FunnelNextStep
      overline="Prochaine étape"
      title="Par où commencer?"
      subtitle="Choisissez l'option qui correspond à votre situation."
      steps={nextSteps}
      background="alt"
    />

    <GuideInlineCTA
      guideType="relocation_guide"
      headline="Guide relocalisation gratuit"
      text="Ce qu'il faut savoir pour s'installer à Gatineau : secteurs, prix, processus et écoles."
      ctaLabel="Recevoir le guide"
    />

    <CTASection
      dark
      title="Parlons de votre projet de relocalisation"
      text="On clarifie votre budget et les secteurs à cibler lors d'un premier appel, sans engagement."
      buttons={[
        { label: "Réserver un appel", href: "/contact-yanis/" },
        { label: "Guide relocalisation", href: "/guide-relocalisation-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <RelatedPages
      overline="À lire aussi"
      title="Pages connexes"
      pages={[
        { title: "Guide relocalisation", text: "Le guide pour s'installer à Gatineau.", href: "/guide-relocalisation-gatineau/" },
        { title: "Acheter à Gatineau depuis Ottawa", text: "Le marché et les taxes quand on traverse la rivière.", href: "/acheter-a-gatineau-depuis-ottawa/" },
        { title: "Relocalisation depuis Montréal", text: "Ce qui change quand on quitte Montréal pour l'Outaouais.", href: "/relocalisation-montreal-gatineau/" },
        { title: "Quartiers à considérer", text: "Trouvez le secteur qui vous convient à Gatineau.", href: "/quartiers-a-considerer-a-gatineau/" },
      ]}
      background="alt"
    />

    <StickyGuideBanner guideType="relocation_guide" label="Guide relocalisation gratuit, recevez-le par courriel" />
  </>
);

export default RelocationPage;
