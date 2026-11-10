import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bath, CheckCircle2, MountainSnow, Trees } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import ContentBlock from "@/components/ContentBlock";
import heroImg from "@/assets/hero-chelsea-photo.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Chelsea est-il trop cher comparé à Gatineau?",
    a: "À Chelsea, les prix sont plus élevés qu'à Gatineau, parce que les terrains sont grands et que peu de propriétés sont à vendre. Mais « trop cher » dépend de ce que vous cherchez. Si la nature et le bilinguisme passent en premier pour vous, Chelsea est souvent le bon choix. Je peux vous aider à comparer Chelsea avec Cantley ou Aylmer selon votre budget et vos critères.",
  },
  {
    q: "Puis-je construire sur un terrain à Chelsea?",
    a: "Chelsea a des règlements stricts sur la construction, particulièrement en zones adjacentes au parc de la Gatineau et en bord de rivière. Le zonage agricole, la bande de protection riveraine et les contraintes de la MRC peuvent limiter ou encadrer les projets. Avant d'acheter un terrain, vérifiez auprès de la municipalité de Chelsea et de la MRC des Collines-de-l'Outaouais.",
  },
  {
    q: "Mes enfants peuvent-ils fréquenter une école anglophone à Chelsea?",
    a: "Oui, si votre enfant est admissible à l'enseignement en anglais (certificat d'admissibilité). L'école primaire Chelsea Elementary, du Western Québec School Board, est dans la municipalité. Pour le secondaire, les écoles anglophones les plus proches sont à Gatineau, dans les secteurs Hull et Aylmer. Selon le recensement de 2021, la population de Chelsea se partage presque également entre francophones et anglophones.",
  },
];

/* ── Atouts cards ── */
const atouts = [
  {
    icon: Trees,
    title: "Parc de la Gatineau",
    text: "Le parc de la Gatineau couvre 361 km² de forêts, lacs et rivières. Créé en 1938, il s'étend sur plusieurs municipalités, dont Chelsea. On y fait de la randonnée, du vélo, du ski de fond, de la raquette et de la baignade au lac Meech. (Source : Commission de la capitale nationale)",
  },
  {
    icon: Bath,
    title: "Nordik Spa-Nature",
    text: "Le Nordik Spa-Nature est situé à Chelsea. C'est un des plus grands spas nordiques en Amérique du Nord. Sa présence contribue à l'attractivité et au rayonnement de la municipalité, et attire une clientèle qui découvre souvent Chelsea comme destination résidentielle. (Source : nordikspanature.com)",
  },
  {
    icon: MountainSnow,
    title: "Old Chelsea / Camp Fortune",
    text: "Le village d'Old Chelsea est le cœur historique de la municipalité. Quelques commerces, restaurants locaux, et un caractère de village préservé. Camp Fortune, tout proche, est un club de ski alpin à environ 21 km du centre-ville d'Ottawa par la route. (Source : Wikipedia/Chelsea)",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Cantley", text: "Rural, grands terrains, collines.", href: "/cantley/" },
  { title: "Aylmer", text: "Familles, bilingue.", href: "/aylmer/" },
  { title: "Relocalisation depuis Ottawa", text: "Acheter à Gatineau depuis l'Ontario.", href: "/relocalisation-ottawa-gatineau/" },
  { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
];

const ChelseaPage = () => (
  <>
    <PageMeta
      title="Courtier immobilier Chelsea Québec | Parc de la Gatineau | YGS"
      description="Achetez ou vendez à Chelsea, Québec. Maisons sur grands terrains, Parc de la Gatineau, communauté bilingue. Courtier local : Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-chelsea.jpg" />
    <NeighborhoodJsonLd
      name="Chelsea"
      description="Achetez ou vendez à Chelsea, Québec. Maisons sur grands terrains, Parc de la Gatineau, communauté bilingue. Courtier local."
      lat={45.5200}
      lng={-75.7870}
      url="/chelsea/"
    />
    <ServiceJsonLd
      name="Courtier immobilier à Chelsea"
      description="Services de courtage immobilier à Chelsea, Québec : maisons, terrains, propriétés de caractère."
      url="/chelsea/"
      serviceType="Real Estate Brokerage"
      areaServed={["Chelsea", "Québec"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="CHELSEA · QUÉBEC"
      title="Courtier immobilier à Chelsea, entre la nature et Ottawa"
      subtitle="Chelsea est une municipalité distincte au nord de Gatineau. Une partie de son territoire est occupée par le parc de la Gatineau. Le village d'Old Chelsea est à environ 15 km du centre-ville d'Ottawa par la route."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Voir les propriétés →", href: "/proprietes?secteur=chelsea" }}
      heroBgImage={heroImg}
      photoCredit={{ text: "Photo : cjuneau, CC BY 2.0, Wikimedia Commons (recadrée)", href: "https://commons.wikimedia.org/wiki/File:Etienne_Br%C3%BBl%C3%A9_Lookout,_Gatineau_Park_(10396087056).jpg" }}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Chelsea, des faits vérifiés sur la municipalité</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Chelsea est une municipalité de la MRC des Collines-de-l'Outaouais, chef-lieu de cette MRC. Sa population était de 8 000 habitants au recensement de 2021, contre 6 909 en 2016. Une partie de son territoire est dans le parc de la Gatineau, géré par la Commission de la capitale nationale, ce qui limite les terrains constructibles. (Sources : Statistique Canada, Recensement 2021, et Commission de la capitale nationale)
        </p>
        <p className="prose-body">
          La population de Chelsea est presque également divisée entre francophones et anglophones, et 70,8 % des résidents parlent le français et l'anglais (Statistique Canada, Recensement 2021).
        </p>
        <p className="prose-body">
          L'autoroute 5, dite autoroute de la Gatineau, relie Chelsea directement à Gatineau et Ottawa. Le service de transport en commun Transcollines relie Chelsea à Gatineau, avec correspondance vers le réseau de la STO. Pour les familles, les activités se concentrent au Centre Meredith (hockey, soccer, espaces communautaires). (Source : Wikipedia/Chelsea, Municipalité de Chelsea)
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Atouts ═══ */}
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="mt-3">Ce que l'on trouve à Chelsea</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {atouts.map((c) => (
            <div key={c.title} className="rounded-lg border border-border bg-background p-6 space-y-3">
              <c.icon size={26} strokeWidth={1.5} aria-hidden="true" style={{ color: "var(--ink)" }} />
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — Acheter à Chelsea ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Ce qu'il faut savoir avant d'acheter à Chelsea</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Acheter à Chelsea, c'est acheter dans un marché de niche, avec peu de ventes comparables. Plusieurs caractéristiques sont importantes à comprendre :
        </p>
        <p className="prose-body">
          Premièrement, les règlements municipaux de Chelsea encadrent strictement la construction. Les terrains sont soumis aux règles de la MRC des Collines-de-l'Outaouais et aux règles de protection du parc de la Gatineau pour les propriétés adjacentes. Avant d'acheter un terrain, ou une propriété à rénover ou à agrandir, vérifiez le zonage.
        </p>
        <p className="prose-body">
          Deuxièmement, Chelsea n'est pas desservie par les services d'aqueduc et d'égouts municipaux sur l'ensemble de son territoire. Beaucoup de propriétés fonctionnent avec puits artésien et fosse septique. L'inspection complète de ces systèmes avant l'achat est non négociable.
        </p>
        <p className="prose-body">
          Troisièmement, Chelsea est une municipalité semi-rurale : les services de proximité (épicerie, clinique, pharmacie) sont limités sur place. Pour les courses, on se rend à Gatineau ou à Ottawa : Les Galeries de Hull sont à environ 10 km du village d'Old Chelsea par la route.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ CTA QUALITÉ ═══ */}
    <section className="section-padding bg-white">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Chelsea est la porte principale du parc de la Gatineau, 361 km² de nature accessible depuis votre propriété. (Source : Commission de la capitale nationale)",
            "70,8 % des résidents de Chelsea parlent le français et l'anglais, ce qui facilite la vie des familles francophones comme anglophones. (Source : Statistique Canada, Recensement 2021)",
            "Une partie du territoire est dans le parc de la Gatineau. (Source : Commission de la capitale nationale)",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-[var(--ink-soft)] mt-0.5" />
              <p className="text-[0.9375rem] text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link to="/evaluation-gratuite-gatineau/">Évaluation gratuite →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ FAQ ═══ */}
    <FAQSection title="Questions fréquentes sur Chelsea, Québec" items={faq} updated={{ date: "2026-11-04", source: "Chiffres de marché : APCIQ, 3e trimestre 2026" }} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit : acheter à Chelsea"
      text="Processus, budget et conseils pour acheter dans le secteur, dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Acheteur ou vendeur à Chelsea?"
      text="Je connais Chelsea par cœur, parlons de votre projet."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" },
        { label: "Réserver une consultation →", href: "/consultation-acheteur/", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default ChelseaPage;
