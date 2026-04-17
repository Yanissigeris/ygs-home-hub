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
import heroImg from "@/assets/hero-cantley-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Y a-t-il des services à Cantley?",
    a: "Cantley a des services de base — garderies, épicerie, commerces de proximité, trois écoles primaires francophones. Pour tout le reste (hôpital, grandes surfaces, école secondaire, restaurants variés), les résidents se dirigent vers Gatineau (15-20 minutes) ou Ottawa (25-30 minutes selon le secteur). La majorité des familles s'adaptent rapidement et ne regrettent pas le choix — mais c'est important d'en tenir compte dans votre décision.",
  },
  {
    q: "Les propriétés à Cantley ont-elles des puits et fosses?",
    a: "Oui, la majorité du territoire de Cantley n'est pas desservie par l'aqueduc et les égouts municipaux. Les propriétés fonctionnent avec puits artésien et fosse septique. Ces systèmes fonctionnent bien quand ils sont bien entretenus — mais l'inspection complète avant l'achat est non négociable. Un puits ou une fosse en fin de vie peut représenter une dépense importante. Je m'assure que cet aspect est rigoureusement vérifié pour chaque transaction à Cantley.",
  },
  {
    q: "Cantley est-il adapté au télétravail?",
    a: "Oui — et c'est d'ailleurs l'une des raisons pour lesquelles Cantley a attiré beaucoup de nouveaux résidents depuis 2020. La municipalité soutient activement l'expansion de la fibre optique sur son territoire. Pour les travailleurs en télétravail total ou partiel, Cantley offre un cadre de vie exceptionnel à un accès raisonnable de Gatineau et Ottawa.",
  },
];

/* ── Activités cards ── */
const activites = [
  {
    icon: "⛷️",
    title: "Activités récréatives",
    text: "Cantley dispose d'un golf, d'un parc aquatique, d'un centre de ski alpin, d'un terrain de camping, et du plus grand réseau de ski de fond de la région. La municipalité bénéficie d'un fort potentiel récréotouristique et travaille activement à l'offrir à ses résidents. (Source: Harmonie Construction, site Municipalité de Cantley)",
  },
  {
    icon: "🌊",
    title: "Nature et rivière",
    text: "Cantley est délimitée par la rivière Gatineau à l'ouest. Le territoire est caractérisé par un relief vallonné typique des Collines-de-l'Outaouais — forêts, montées, panoramas. Entourée de forêts montagneuses, Cantley s'est officiellement positionnée comme une municipalité de « nature accueillante ». (Source: Municipalité de Cantley)",
  },
  {
    icon: "📡",
    title: "Fibre optique et télétravail",
    text: "Cantley soutient activement l'expansion du réseau de fibre optique sur son territoire, ce qui facilite le télétravail. C'est un facteur qui a contribué à attirer des familles qui travaillent partiellement ou entièrement à distance. (Source: Harmonie Construction/Municipalité de Cantley)",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Chelsea", text: "Parc de la Gatineau, village artistique.", href: "/chelsea" },
  { title: "Buckingham", text: "Espace, prix accessibles.", href: "/buckingham-masson-angers" },
  { title: "Gatineau centre", text: "Services, résidentiel, central.", href: "/gatineau" },
  { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
];

const CantleyPage = () => (
  <>
    <SEO title="Courtier immobilier Cantley Outaouais | YGS" description="Achetez ou vendez à Cantley. Grands terrains, nature à 20 min de Gatineau." canonical="https://yanisgauthier.com/cantley" hreflangFr="https://yanisgauthier.com/cantley" hreflangEn="https://yanisgauthier.com/en/cantley" />
    <PageMeta
      title="Courtier immobilier Cantley Outaouais | Familles & grands terrains | YGS"
      description="Achetez ou vendez à Cantley, Outaouais. Grands terrains, famille, nature. Près de 9 ans d'expérience locale — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd
      name="Cantley"
      description="Achetez ou vendez à Cantley, Outaouais. Grands terrains, famille, nature. Courtier local."
      lat={45.5056}
      lng={-75.7833}
      url="/cantley"
    />
    <ServiceJsonLd
      name="Courtier immobilier à Cantley"
      description="Services de courtage immobilier à Cantley, Outaouais — maisons, terrains, propriétés familiales."
      url="/cantley"
      serviceType="Real Estate Brokerage"
      areaServed={["Cantley", "Outaouais"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="CANTLEY · OUTAOUAIS"
      title="Courtier immobilier à Cantley — l'espace, à 13 km d'Ottawa"
      subtitle="Cantley est à 13 kilomètres du centre-ville d'Ottawa. C'est une municipalité en pleine croissance, connue pour ses grands terrains, son développement résidentiel à faible densité, et sa qualité de vie familiale. Pour les familles qui veulent l'espace sans s'éloigner, Cantley est souvent la conclusion logique."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Voir les propriétés →", href: "/proprietes?secteur=cantley" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">PORTRAIT</p>
      <h2 className="mt-3">Cantley — des faits vérifiés sur cette municipalité en croissance</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Cantley est une municipalité de la MRC des Collines-de-l'Outaouais, à 13 kilomètres du centre-ville d'Ottawa. Sa population était de 11 449 habitants au recensement de 2021, en hausse de 7 % depuis 2016 — une croissance soutenue qui témoigne de l'attrait constant du secteur. Le français est la langue maternelle de 86,7 % des résidents. (Source: Statistique Canada, Recensement 2021)
        </p>
        <p className="prose-body">
          Cantley est reconnue comme une municipalité à faible densité résidentielle — c'est l'un de ses attraits principaux. Les règlements urbanistiques révisés en 2025 fixent la superficie minimale des lots dans le périmètre urbain à 5 000 m². Cela maintient le caractère semi-rural de la municipalité. (Source: Municipalité de Cantley, Plan d'urbanisme 2025)
        </p>
        <p className="prose-body">
          Cantley dispose de trois écoles primaires francophones : l'école Sainte-Élisabeth, l'école de la Rose-des-Vents, et l'école de l'Orée-des-Bois (ouverte en 2014). Pour le secondaire et les services spécialisés, les résidents se dirigent vers Gatineau. Le service de transport en commun Transcollines relie Cantley au réseau Rapibus de la STO et à OC Transpo d'Ottawa. (Source: Municipalité de Cantley, Wikipedia)
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Activités ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">LA VIE À CANTLEY</p>
        <h2 className="mt-3">La vie à Cantley — ce qui distingue ce secteur</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {activites.map((c) => (
            <div key={c.title} className="rounded-md border border-border bg-background p-6 space-y-3">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — Acheter ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">AVANT D'ACHETER</p>
      <h2 className="mt-3">Ce qu'il faut savoir avant d'acheter à Cantley</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Cantley est une municipalité semi-rurale. Plusieurs réalités importantes à comprendre avant d'acheter :
        </p>
        <p className="prose-body">
          La majorité des propriétés à Cantley fonctionnent avec puits artésien et fosse septique — le territoire n'est pas desservi par l'aqueduc et les égouts municipaux sur l'ensemble de son territoire. L'inspection complète de ces systèmes est non négociable avant tout achat.
        </p>
        <p className="prose-body">
          Les services de proximité sont limités à Cantley même — quelques commerces, une épicerie, des garderies, les trois écoles primaires. Pour les grandes surfaces, les spécialistes médicaux, et le secondaire, on se dirige vers Gatineau (15-20 minutes).
        </p>
        <p className="prose-body">
          Le télétravail a profondément changé le profil des acheteurs à Cantley. Des familles qui travaillaient en présentiel à Ottawa ou Gatineau ont pu s'y installer depuis 2020 et y trouvent une qualité de vie qu'elles ne quitteraient plus.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ CTA QUALITÉ ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Cantley est à 13 km du centre-ville d'Ottawa. Population en croissance de 7 % entre 2016 et 2021. (Source: Statistique Canada, Recensement 2021)",
            "3 écoles primaires francophones sur le territoire, plus le service de transport Transcollines vers Ottawa et Gatineau. (Source: Municipalité de Cantley)",
            "Lots résidentiels minimum de 5 000 m² dans le périmètre urbain — ce règlement maintient le caractère spacieux et semi-rural du secteur. (Source: Plan d'urbanisme 2025)",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="shrink-0 text-accent mt-0.5" />
              <p className="text-[0.9375rem] text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link to="/evaluation-gratuite-gatineau">Obtenir les vrais chiffres →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ FAQ ═══ */}
    <FAQSection title="Questions fréquentes — Cantley, Outaouais" items={faq} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter à Cantley"
      text="Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Acheteur ou vendeur à Cantley?"
      text="Je connais le secteur — parlons de votre projet."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" },
        { label: "Réserver une consultation →", href: "/consultation-acheteur", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default CantleyPage;
