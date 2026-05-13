import PageMeta from "@/components/PageMeta";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import SectorLinks from "@/components/SectorLinks";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import FAQSection from "@/components/FAQSection";
import { Clock, Award, Shield, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-neighborhoods.webp";


const sectors = [
  { name: "Aylmer", href: "/aylmer/", detail: "Lac Deschênes, quartiers établis, qualité de vie" },
  { name: "Hull", href: "/hull/", detail: "Urbain, culture, proximité centre-ville Ottawa" },
  { name: "Plateau", href: "/plateau/", detail: "Familles, développements récents, parcs" },
  { name: "Gatineau (centre)", href: "/gatineau/", detail: "Résidentiel, services, banlieue accessible" },
  { name: "Chelsea", href: "/chelsea/", detail: "Village pittoresque, parc de la Gatineau" },
  { name: "Cantley", href: "/cantley/", detail: "Collines, grands terrains, vie rurale" },
  { name: "Val-des-Monts", href: "/val-des-monts/", detail: "Lacs, chalets, nature sauvage" },
  { name: "Buckingham", href: "/buckingham-masson-angers/", detail: "Rivière, prix accessibles, nature" },
  { name: "Masson-Angers", href: "/masson-angers/", detail: "Constructions neuves, familles, en croissance" },
  { name: "Pontiac", href: "/pontiac/", detail: "Grands espaces, rivière, vie rurale" },
  { name: "Côte-d'Azur", href: "/cote-dazur-gatineau/", detail: "Résidentiel établi, bungalows, abordable" },
  { name: "Limbour", href: "/limbour/", detail: "Familial, parcs, banlieue moderne" },
];

const lifestyleGuides = [
  { icon: MapPin, title: "Vivre à Aylmer", text: "Lac, nature, communauté et accès à Ottawa.", cta: "Lire le guide", href: "/vivre-a-aylmer/" },
  { icon: Home, title: "Vivre à Hull", text: "Culture, restaurants et proximité Ottawa.", cta: "Lire le guide", href: "/vivre-a-hull/" },
  { icon: Coffee, title: "Vivre dans le Plateau", text: "Familles, développements récents et nature.", cta: "Lire le guide", href: "/vivre-dans-le-plateau/" },
];

const faq = [
  { q: "Quel est le meilleur quartier de Gatineau?", a: "Ça dépend de votre profil — familles avec enfants d'âge scolaire, investisseurs en plex, premiers acheteurs, retraités qui rationalisent. Aylmer et le Plateau sont familiaux; Hull convient aux professionnels urbains; Chelsea et Cantley plaisent aux amateurs de nature; Buckingham et Masson-Angers offrent le meilleur rapport pied carré-prix. Contactez-moi pour une recommandation personnalisée." },
  { q: "Les prix varient-ils beaucoup d'un secteur à l'autre?", a: "Oui, significativement. En mai 2026, Buckingham et Pontiac sont les plus abordables, Aylmer et certaines portions du Plateau sont au sommet, et Hull offre un bon compromis près d'Ottawa. Cantley, Chelsea et Val-des-Monts échangent l'accès urbain contre l'espace et la nature." },
  { q: "Comment choisir entre Aylmer et le Plateau?", a: "Aylmer offre des quartiers plus établis avec le lac Deschênes, des écoles bilingues reconnues et un sentiment de communauté maritime. Le Plateau offre des constructions plus récentes à meilleur prix au pied carré, des parcs neufs et un accès direct à l'autoroute 50. Vos priorités déterminent le meilleur choix." },
  { q: "Quels secteurs conviennent le mieux aux familles?", a: "Aylmer (surtout autour du lac Deschênes), le Plateau, Limbour et Masson-Angers se classent constamment en tête pour les familles grâce aux écoles, parcs, équipements sportifs et rues plus calmes. L'admissibilité aux commissions scolaires (anglophone vs francophone) peut aussi influencer la décision." },
  { q: "Quels secteurs sont les meilleurs pour les acheteurs d'Ottawa?", a: "Hull, Aylmer, le Plateau et Côte-d'Azur sont les choix Ottawa-Gatineau les plus populaires en raison de l'accès aux ponts, des services bilingues et du compromis style de vie/valeur. Chacun a un point de prix et une ambiance très distincts." },
  { q: "Où chercher un plex ou un immeuble à revenus?", a: "Hull, Gatineau-centre et certaines portions d'Aylmer demeurent les marchés actifs pour le plex, grâce à une demande locative stable des fonctionnaires fédéraux, des étudiants et des professionnels. Chaque poche a son propre profil de rendement — je fais les chiffres avant que vous ne déposiez une offre." },
  { q: "Combien de temps prend la vente d'une bonne inscription?", a: "Cela varie selon le secteur et le segment. Les maisons clé-en-main à Aylmer, au Plateau ou à Chelsea partent souvent en quelques jours lorsque correctement positionnées; les propriétés plus anciennes ou de prix supérieur peuvent prendre plus longtemps. Les alertes acheteur donnent un vrai avantage." },
];

const NeighborhoodsOverviewPage = () => (
   <>
    <PageMeta title="Quartiers de Gatineau — Guide complet" description="Comparez les quartiers de Gatineau et de l'Outaouais: Aylmer, Hull, Plateau, Buckingham et Gatineau-centre. Prix, ambiance, écoles et profil de chaque secteur." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <HeroSection
      overline="Quartiers · Gatineau et Outaouais"
      title="Les quartiers à considérer en Outaouais/Gatineau"
      subtitle="Chaque secteur de l'Outaouais a sa personnalité — familial, urbain, nature ou investissement. Explorez les quartiers pour trouver celui qui vous correspond."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" }}
      trustLine="Expertise locale. "
      heroBgImage={heroImg}
    />
<SectorLinks
      overline="Explorer les secteurs"
      title="Les quartiers en Outaouais"
      sectors={sectors}
    />

    <ContentBlock narrow>
      <SectionHeading overline="Choisir un secteur" title="Chaque quartier a son caractère" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Le bon secteur dépend de votre budget, de votre trajet, de votre style de vie et de vos priorités familiales. L'Outaouais n'est pas un seul marché — c'est une douzaine de micromarchés distincts, chacun avec son propre plafond de prix, son bassin scolaire, ses options de transport et sa dynamique de revente. Une maison qui a l'air d'être au même prix à Buckingham qu'à Aylmer se comporte rarement de la même manière cinq ans plus tard.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Actif en immobilier en Outaouais depuis 2017, j'ai représenté des acheteurs et vendeurs dans presque chacun des quartiers listés ci-dessous. Cela veut dire que je peux vous dire quelles rues inondent, lesquelles prennent le soleil du matin, quels secteurs s'embourgeoisent tranquillement, et où la prochaine vague d'investissements municipaux va probablement se déposer. C'est le genre de contexte qui n'apparaît pas dans une fiche Centris.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Utilisez les cartes ci-dessus pour explorer les quartiers individuellement, puis réservez une consultation pour qu'on identifie ensemble les deux ou trois secteurs réellement adaptés à vos critères de vie — pas seulement les plus googlés.
      </p>
    </ContentBlock>

    <LinkedCardGrid
      overline="Mode de vie"
      title="Guides de vie par quartier"
      items={lifestyleGuides}
      columns={3}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — trouvez le bon secteur"
      text="Tout ce qu'il faut savoir pour acheter à Gatineau — processus, budget et quartiers."
      ctaLabel="Recevoir le guide acheteur"
    />

    <FAQSection title="Questions sur les quartiers" items={faq} />

    <CTASection
      dark
      title="Besoin d'aide pour choisir?"
      text="Parlons de vos critères — je vous recommande les secteurs les plus adaptés à votre situation."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur/" },
        { label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  
    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default NeighborhoodsOverviewPage;
