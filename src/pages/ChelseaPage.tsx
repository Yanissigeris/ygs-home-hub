import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import ContentBlock from "@/components/ContentBlock";
import heroImg from "@/assets/hero-chelsea-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Chelsea est-il trop cher comparé à Gatineau?",
    a: "Chelsea est effectivement un marché premium par rapport à la ville de Gatineau — les propriétés sur grands terrains, la rareté de l'inventaire, et la qualité du cadre de vie se reflètent dans les prix. Mais « trop cher » dépend de ce que vous cherchez. Si l'accès à la nature, la tranquillité, le bilinguisme, et la qualité de vie sont vos priorités, Chelsea est souvent le bon choix. Je peux vous aider à comparer Chelsea avec Cantley ou Aylmer selon votre budget et vos critères.",
  },
  {
    q: "Puis-je construire sur un terrain à Chelsea?",
    a: "Chelsea a des règlements stricts sur la construction, particulièrement en zones adjacentes au Parc de la Gatineau et en bord de rivière. Le zonage agricole, les bandes riveraines (10-15 mètres), et les contraintes de la MRC peuvent limiter ou encadrer les projets. Avant tout achat de terrain, une vérification complète auprès de la municipalité de Chelsea et de la MRC des Collines-de-l'Outaouais est indispensable.",
  },
  {
    q: "Mes enfants peuvent-ils fréquenter une école anglophone à Chelsea?",
    a: "Oui. Chelsea est desservie par la Commission scolaire Western Québec pour l'éducation en anglais. L'école élémentaire Chelsea Elementary School est située dans la municipalité. Étant donné la répartition presque égale entre francophones et anglophones, Chelsea est l'une des communautés les plus naturellement bilingues de tout l'Outaouais.",
  },
];

/* ── Atouts cards ── */
const atouts = [
  {
    icon: "🌲",
    title: "Parc de la Gatineau",
    text: "Le Parc de la Gatineau couvre 360 km² de forêts, lacs et rivières. Créé en 1938, il s'étend sur plusieurs municipalités dont Chelsea en est la porte d'entrée principale. Randonnée, vélo, ski de fond, raquettes, baignade au Lac Meech — les activités sont accessibles à pied ou à vélo depuis les propriétés résidentielles. (Source: Commission de la capitale nationale)",
  },
  {
    icon: "♨️",
    title: "Nordik Spa-Nature",
    text: "Le Nordik Spa-Nature est situé à Chelsea. C'est un des plus grands spas nordiques en Amérique du Nord. Sa présence contribue à l'attractivité et au rayonnement de la municipalité, et attire une clientèle qui découvre souvent Chelsea comme destination résidentielle. (Source: nordikspanature.com)",
  },
  {
    icon: "⛷️",
    title: "Old Chelsea / Camp Fortune",
    text: "Le village d'Old Chelsea est le cœur historique de la municipalité. Quelques commerces, restaurants locaux, et un caractère de village préservé. Camp Fortune, tout proche, est un club de ski alpin à 15 minutes du centre d'Ottawa. (Source: Wikipedia/Chelsea)",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Cantley", text: "Rural, grands terrains, collines.", href: "/cantley/" },
  { title: "Aylmer", text: "Lac Deschênes, familles, bilingue.", href: "/aylmer/" },
  { title: "Relocalisation depuis Ottawa", text: "Acheter à Gatineau depuis l'Ontario.", href: "/relocalisation-ottawa-gatineau/" },
  { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
];

const ChelseaPage = () => (
  <>
    <SEO title="Courtier immobilier Chelsea Québec | YGS" description="Achetez ou vendez à Chelsea. Village aux portes du parc de la Gatineau, 20 min d'Ottawa." canonical="https://yanisgauthier.com/chelsea" hreflangFr="https://yanisgauthier.com/chelsea" hreflangEn="https://yanisgauthier.com/en/chelsea" />
    <PageMeta
      title="Courtier immobilier Chelsea Québec | Parc de la Gatineau | YGS"
      description="Achetez ou vendez à Chelsea, Québec. Maisons sur grands terrains, Parc de la Gatineau, communauté bilingue. Courtier local — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-chelsea.jpg" />
    <NeighborhoodJsonLd
      name="Chelsea"
      description="Achetez ou vendez à Chelsea, Québec. Maisons sur grands terrains, Parc de la Gatineau, communauté bilingue. Courtier local."
      lat={45.5200}
      lng={-75.7870}
      url="/chelsea/"
    />
    <ServiceJsonLd
      name="Courtier immobilier à Chelsea"
      description="Services de courtage immobilier à Chelsea, Québec — maisons, terrains, propriétés de caractère."
      url="/chelsea/"
      serviceType="Real Estate Brokerage"
      areaServed={["Chelsea", "Québec"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="CHELSEA · QUÉBEC"
      title="Courtier immobilier à Chelsea — vivre entre nature et Ottawa"
      subtitle="Chelsea est une municipalité distincte au nord de Gatineau, à environ 10 kilomètres d'Ottawa. Soixante pour cent de son territoire est occupé par le Parc de la Gatineau. C'est un des rares endroits en Amérique du Nord où l'on peut habiter dans un parc national tout en étant à 15 minutes du centre d'une capitale."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Voir les propriétés →", href: "/proprietes?secteur=chelsea" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">PORTRAIT</p>
      <h2 className="mt-3">Chelsea — des faits vérifiés sur cette municipalité unique</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Chelsea est une municipalité de la MRC des Collines-de-l'Outaouais, chef-lieu de cette MRC. Sa population était d'environ 8 000 habitants au recensement de 2021, en croissance constante. Ce qui la distingue fondamentalement : environ 60 % de son territoire appartient au Parc de la Gatineau, géré par la Commission de la capitale nationale. Cette réalité limite considérablement les terrains constructibles disponibles — ce qui explique la rareté des propriétés et leur valeur stable dans le temps. (Source: Wikipedia/Chelsea, Commission de la capitale nationale)
        </p>
        <p className="prose-body">
          La population de Chelsea est presque également divisée entre francophones et anglophones — environ 70 % des ménages parlent les deux langues officielles. Chelsea fut l'une des premières municipalités au Canada à interdire l'utilisation des pesticides. Ces deux caractéristiques — bilinguisme et sensibilité environnementale — définissent l'identité de la communauté. (Source: Wikipedia/Chelsea, Québec)
        </p>
        <p className="prose-body">
          L'autoroute 5 — dite autoroute de la Gatineau — relie Chelsea directement à Gatineau et Ottawa. Le service de transport en commun Transcollines dessert Chelsea et la connecte au réseau Rapibus de la STO et à OC Transpo d'Ottawa. Le Centre sportif Meredith (hockey, soccer, espaces communautaires) est le cœur des activités familiales de Chelsea. (Source: Wikipedia/Chelsea, Municipalité de Chelsea)
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Atouts ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">À DÉCOUVRIR</p>
        <h2 className="mt-3">Ce que l'on trouve à Chelsea</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {atouts.map((c) => (
            <div key={c.title} className="rounded-md border border-border bg-background p-6 space-y-3">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — Acheter à Chelsea ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">AVANT D'ACHETER</p>
      <h2 className="mt-3">Ce qu'il faut savoir avant d'acheter à Chelsea</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Acheter à Chelsea, c'est acheter dans un marché de niche avec peu d'inventaire et une demande constante. Plusieurs caractéristiques importantes à comprendre :
        </p>
        <p className="prose-body">
          Premièrement, les règlements municipaux de Chelsea encadrent strictement la construction. Les terrains sont soumis aux règles de la MRC des Collines-de-l'Outaouais et aux règles de protection du Parc de la Gatineau pour les propriétés adjacentes. Avant tout achat de terrain ou de propriété à rénover ou agrandir, une vérification du zonage est indispensable.
        </p>
        <p className="prose-body">
          Deuxièmement, Chelsea n'est pas desservie par les services d'aqueduc et d'égouts municipaux sur l'ensemble de son territoire. Beaucoup de propriétés fonctionnent avec puits artésien et fosse septique. L'inspection complète de ces systèmes avant l'achat est non négociable.
        </p>
        <p className="prose-body">
          Troisièmement, Chelsea est une municipalité semi-rurale : les services de proximité (épicerie, clinique, pharmacie) sont limités sur place. La majorité des résidents font leurs courses à Gatineau ou à Ottawa (15-20 minutes).
        </p>
      </div>
    </ContentBlock>

    {/* ═══ CTA QUALITÉ ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Chelsea est la porte principale du Parc de la Gatineau — 360 km² de nature accessible depuis votre propriété. (Source: Commission de la capitale nationale)",
            "~70 % des ménages de Chelsea sont bilingues — un environnement unique pour les familles francophones et anglophones. (Source: Wikipedia/Chelsea, Québec)",
            "Environ 60 % du territoire est le Parc de la Gatineau, ce qui limite l'offre constructible et soutient la valeur des propriétés existantes à long terme. (Source: Commission de la capitale nationale)",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-accent mt-0.5" />
              <p className="text-[0.9375rem] text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link to="/evaluation-gratuite-gatineau/">Obtenir les vrais chiffres →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ FAQ ═══ */}
    <FAQSection title="Questions fréquentes — Chelsea, Québec" items={faq} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter à Chelsea"
      text="Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Acheteur ou vendeur à Chelsea?"
      text="Je connais Chelsea par cœur — parlons de votre projet."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" },
        { label: "Réserver une consultation →", href: "/consultation-acheteur/", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default ChelseaPage;
