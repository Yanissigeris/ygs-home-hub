import PageMeta from "@/components/PageMeta";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByCategory } from "@/data/reviews";
import FAQSection from "@/components/FAQSection";
import ProcessSteps from "@/components/ProcessSteps";
import CardGrid from "@/components/CardGrid";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import FunnelNextStep from "@/components/FunnelNextStep";
import ContentBlock from "@/components/ContentBlock";
import SectorLinks from "@/components/SectorLinks";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import CalculatorsSection from "@/components/CalculatorsSection";
import { CheckCircle2, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-acheter.webp";

const buyerProfiles = [
  { icon: CheckCircle2, title: "Premier acheteur en Outaouais", text: "Comprendre chaque étape de l'achat au Québec, de la promesse d'achat à la signature chez le notaire." },
  { icon: CheckCircle2, title: "Famille qui veut plus d'espace", text: "Trouver un quartier familial à Gatineau avec plus de pièces, un terrain, de bonnes écoles et les bons services à proximité." },
  { icon: CheckCircle2, title: "Relocalisé d'Ottawa ou Montréal", text: "Un courtier local qui connaît Aylmer, Hull, le Plateau et Buckingham, ainsi que les prix et les règles propres au Québec, taxe de bienvenue comprise." },
  { icon: CheckCircle2, title: "Hésitant entre secteurs", text: "Comparer les secteurs de Gatineau selon le prix, le potentiel de revente, l'accès à Ottawa et le style de vie, pour choisir celui qui vous convient." },
];

const sectors = [
  { name: "Aylmer", href: "/aylmer/", detail: "Familles, quartiers établis" },
  { name: "Plateau", href: "/plateau/", detail: "Maisons récentes, accès à Ottawa" },
  { name: "Hull", href: "/hull/", detail: "Urbain, condos, plex, proximité Ottawa" },
  { name: "Chelsea", href: "/chelsea/", detail: "Village, parc de la Gatineau" },
  { name: "Cantley", href: "/cantley/", detail: "Grands terrains, milieu rural" },
  { name: "Buckingham", href: "/buckingham-masson-angers/", detail: "Prix plus accessibles, rivière" },
  { name: "Masson-Angers", href: "/masson-angers/", detail: "Résidentiel, familles" },
  { name: "Val-des-Monts", href: "/val-des-monts/", detail: "Lacs, chalets" },
  { name: "Pontiac", href: "/pontiac/", detail: "Grands espaces, rivière" },
  { name: "Côte-d'Azur", href: "/cote-dazur-gatineau/", detail: "Bungalows, résidentiel établi" },
  { name: "Limbour", href: "/limbour/", detail: "Familial moderne, parcs" },
  { name: "Gatineau-centre", href: "/gatineau/", detail: "Services, plex" },
];

const steps = [
  { num: "01", title: "Clarifier votre projet", desc: "Budget, secteurs cibles à Gatineau, style de propriété, besoins familiaux et accès à Ottawa : on pose les bases ensemble." },
  { num: "02", title: "Recherche ciblée", desc: "Je vous envoie les propriétés qui correspondent à vos critères, dans les quartiers retenus. Vous visitez seulement ce qui vaut le déplacement." },
  { num: "03", title: "Offre et négociation", desc: "Une offre adaptée au marché local, puis l'inspection et les conditions, jusqu'à la signature chez le notaire." },
];


const nextSteps = [
  { title: "Consultation gratuite", text: "On fait le point sur vos critères et votre budget avant les visites.", href: "/consultation-acheteur/", cta: "Réserver ma consultation", highlight: true },
  { title: "Comparer les quartiers", text: "Les secteurs de Gatineau côte à côte : prix, style de vie, avantages et inconvénients.", href: "/quartiers-a-considerer-a-gatineau/", cta: "Voir les quartiers" },
  { title: "Guide acheteur", text: "Le processus d'achat au Québec expliqué simplement, de la recherche au notaire.", href: "/guide-acheteur-gatineau/", cta: "Lire le guide" },
];

const faq = [
  { q: "Est-ce le bon moment pour acheter à Gatineau?", a: "Ça dépend surtout de votre situation. Sur 12 mois, les conditions favorisaient les vendeurs pour les unifamiliales (APCIQ, juin 2026). On regarde ensemble votre budget et les ventes récentes du secteur visé." },
  { q: "Je viens d'Ottawa, comment ça fonctionne au Québec?", a: "Au Québec, la vente se conclut chez un notaire. Quand un courtier vous représente, la promesse d'achat se fait sur un formulaire de l'OACIQ. Prévoyez aussi les droits de mutation (taxe de bienvenue), facturés par la municipalité après l'achat. J'accompagne des acheteurs de l'Ontario depuis 2017 et je vous explique chaque étape avant que vous signiez." },
  { q: "Dois-je obtenir une préapprobation hypothécaire?", a: "Oui, c'est fortement recommandé. La préapprobation clarifie votre budget et rend votre offre plus crédible aux yeux du vendeur. Ce n'est pas une approbation finale : le prêteur analysera aussi la propriété choisie." },
  { q: "Comment choisir le bon secteur à Gatineau?", a: "Mode de vie, budget, famille, trajet vers Ottawa, écoles : on regarde tout ça ensemble pour trouver l'équilibre qui vous convient entre Aylmer, Hull, le Plateau et Buckingham. Pour situer le trajet, l'hôtel de ville de Gatineau, dans Hull, est à environ 2 km du centre-ville d'Ottawa, le Plateau à environ 9 km et le Vieux-Aylmer à environ 14 km." },
];

const BuyerPage = () => (
   <>
    <PageMeta title="Acheter une propriété à Gatineau · Outaouais" description="Trouvez et achetez votre propriété à Gatineau : Aylmer, Hull, Plateau ou Buckingham. Consultation personnalisée et accompagnement à votre rythme." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <ServiceJsonLd name="Accompagnement acheteur à Gatineau" description="Service d'accompagnement pour l'achat immobilier à Gatineau et en Outaouais : recherche, visites, analyse de quartier, offre d'achat et inspection." url="/acheter-a-gatineau/" serviceType="Real Estate Buyer Agent Service" />
    <HeroSection
      overline="Pour acheteurs · Gatineau"
      title="Acheter à Gatineau avec clarté et confiance"
      subtitle="Premier achat ou arrivée d'Ottawa ou de Montréal : je vous accompagne à chaque étape, chiffres en main."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Comparer les quartiers", href: "/quartiers-a-considerer-a-gatineau/" }}
      trustLine="Stratégie claire."
      heroBgImage={heroImg}
    />

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Contexte 2026" title="Acheter à Gatineau en 2026 : ce que disent les chiffres" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Au 2e trimestre 2026, la région métropolitaine de Gatineau a enregistré 1 310 ventes résidentielles. Le prix médian d'une unifamiliale y atteignait 523 500 $, avec un délai de vente de 27 jours (APCIQ, données Centris).
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Selon l'APCIQ, sur les 12 mois terminés en juin 2026, les conditions étaient favorables aux vendeurs pour les unifamiliales dans toutes les gammes de prix. Une propriété bien située peut donc se vendre vite. Arriver avec une préapprobation et des critères clairs vous permet de faire une offre sans vous précipiter.
      </p>
      <p className="mt-4 text-xs text-muted-foreground italic">Source&nbsp;: APCIQ, baromètre résidentiel du 2e trimestre 2026, région métropolitaine de Gatineau.</p>
    </ContentBlock>

<ContentBlock narrow>
      <SectionHeading
        overline="L'achat immobilier"
        title="Choisir une propriété, c'est aussi choisir un secteur et une stratégie"
        subtitle="Au-delà de la maison, il faut comprendre les secteurs, la valeur marchande, les taxes, le potentiel de revente et la bonne stratégie d'offre d'achat."
      />
    </ContentBlock>

    <CardGrid
      overline="Pour qui"
      title="Les acheteurs que j'accompagne"
      items={buyerProfiles}
      background="alt"
      variant="icon-inline"
    />

    <ProcessSteps steps={steps} />

    <InlineCTA
      text="Vous êtes aussi vendeur? Connaître la valeur de votre propriété peut clarifier votre budget d'achat."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau/"
    />

    <SectorLinks sectors={sectors} />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Votre premier achat? Recevez le guide complet."
      text="Le processus d'achat au Québec expliqué simplement, de la recherche au notaire, étape par étape."
      ctaLabel="Recevoir le guide acheteur"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />

    <CalculatorsSection />

    <ReviewSection
      overline="Témoignages acheteurs"
      title="Ce que disent mes clients acheteurs"
      reviews={getReviewsByCategory("buyer").slice(0, 2)}
      columns={2}
      background="alt"
    />

    <FunnelNextStep
      overline="Prochaine étape"
      title="Par où commencer?"
      subtitle="Choisissez l'étape qui correspond le mieux à votre situation."
      steps={nextSteps}
    />

    <CTASection
      dark
      title="Parlons de votre projet d'achat"
      text="Budget et secteurs : on clarifie tout ça avant les premières visites."
      buttons={[
        { label: "Réserver ma consultation", href: "/consultation-acheteur/" },
        { label: "Comparer les quartiers", href: "/quartiers-a-considerer-a-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <RelatedPages
      overline="À lire aussi"
      title="Pages connexes"
      pages={[
        { title: "Guide acheteur complet", text: "Tout le processus d'achat au Québec, étape par étape.", href: "/guide-acheteur-gatineau/" },
        { title: "Premier achat à Gatineau", text: "Budget, mise de fonds et conseils pour les premiers acheteurs.", href: "/premier-achat-gatineau/" },
        { title: "Acheter depuis Ottawa", text: "Ce qu'il faut savoir pour traverser la rivière.", href: "/acheter-a-gatineau-depuis-ottawa/" },
        { title: "Quartiers à considérer", text: "Aylmer, Hull, le Plateau, Buckingham : trouvez le secteur qui vous convient.", href: "/quartiers-a-considerer-a-gatineau/" },
      ]}
      background="alt"
    />
  </>
);

export default BuyerPage;
