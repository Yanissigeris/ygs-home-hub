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
import heroImg from "@/assets/hero-hull-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Quel type de propriété achète-t-on à Hull?",
    a: "Hull offre la plus grande variété de Gatineau : condos anciens et neufs, duplex, triplex, maisons unifamiliales, maisons de ville. C'est aussi le secteur avec le plus grand choix de propriétés à revenus. Selon votre objectif — habiter, louer, investir — les options sont différentes. Je peux vous guider selon votre profil lors d'une consultation gratuite.",
  },
  {
    q: "Le projet Zibi — est-ce une bonne opportunité?",
    a: "Zibi est un développement en cours sur l'île de Hull. Les premières phases résidentielles sont habitées. C'est un secteur moderne, carboneutre, avec une belle vue sur la rivière — mais les condos neufs sont généralement plus chers que la revente dans le secteur adjacent. Les propriétés dans les quartiers autour de Zibi (Vieux-Hull, Wrightville) ont bénéficié de l'effet de valorisation à des prix plus accessibles. Je peux vous aider à comparer les options.",
  },
  {
    q: "Hull est-il un bon choix pour les fonctionnaires fédéraux?",
    a: "Oui — beaucoup de ministères et organismes fédéraux ont leurs bureaux du côté québécois à Gatineau (Complex Portage, Tour de la Paix, etc.). Et même pour ceux qui travaillent à Ottawa, les ponts sont à vélo ou à pied depuis plusieurs secteurs de Hull. C'est une des raisons pour lesquelles Hull reste très demandé par les fonctionnaires des deux côtés de la rivière.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Vieux-Hull",
    text: "Le cœur historique. Le Sentier culturel, les murales, les restaurants de la rue Laramée, les bars du boulevard Fournier. Architecture de caractère, immeubles à revenus anciens, vie de quartier animée. À deux pas du Musée canadien de l'histoire.",
  },
  {
    title: "Île de Hull / Projet Zibi",
    text: "Développement en cours sur l'ancienne usine Domtar. Condos neufs, vue sur la rivière, système de chauffage carboneutre, espaces publics riverains. Les premières phases sont habitées. Un secteur en construction active.",
  },
  {
    title: "Wrightville / Val-Tétreau",
    text: "Secteur central, bungalows des années 60-80, terrain plus grand, prix encore accessibles. Situé sur le corridor du futur tramway Gatineau-Ottawa — un projet d'infrastructure en développement actif qui pourrait transformer la mobilité de ce secteur.",
  },
  {
    title: "Lac Leamy",
    text: "Secteur du Casino du Lac-Leamy et du Parc Lac-Leamy. Condos et propriétés avec accès au lac, plage, sentiers. Clientèle plus aisée, vie animée l'été.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Investir dans un plex", text: "Analyse de rendement, stratégie d'investissement.", href: "/investir-plex-gatineau" },
  { title: "Aylmer", text: "Lac Deschênes, familles, bilingue.", href: "/aylmer" },
  { title: "Relocalisation depuis Ottawa", text: "Acheter à Gatineau depuis l'Ontario.", href: "/relocalisation-ottawa-gatineau" },
  { title: "Gatineau centre", text: "Résidentiel, services, abordable.", href: "/gatineau" },
];

const HullPage = () => (
  <>
    <SEO title="Courtier immobilier Hull Gatineau | YGS" description="Achetez ou vendez à Hull avec un courtier local. Secteur urbain, projet Zibi, proximité Ottawa." canonical="https://yanisgauthier.com/hull" hreflangFr="https://yanisgauthier.com/hull" hreflangEn="https://yanisgauthier.com/en/hull" />
    <PageMeta
      title="Courtier immobilier Hull Gatineau | Condos, plexs, maisons | YGS — Yanis Gauthier-Sigeris"
      description="Achetez ou vendez à Hull, Gatineau. Condos, plexs, maisons près d'Ottawa. Projet Zibi, Île de Hull, Vieux-Hull. Courtier local — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-hull.jpg" />
    <NeighborhoodJsonLd
      name="Hull"
      description="Achetez ou vendez à Hull, Gatineau. Condos, plexs, maisons près d'Ottawa. Projet Zibi, Île de Hull, Vieux-Hull. Courtier local."
      lat={45.4283}
      lng={-75.7140}
      url="/hull"
    />
    <ServiceJsonLd
      name="Courtier immobilier à Hull"
      description="Services de courtage immobilier à Hull, Gatineau — condos, plexs, maisons."
      url="/hull"
      serviceType="Real Estate Brokerage"
      areaServed={["Hull", "Gatineau"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="HULL · GATINEAU (QUÉBEC)"
      title="Courtier immobilier à Hull — au cœur de l'Outaouais urbain"
      subtitle="Hull est le secteur le plus urbain de Gatineau. Directement en face d'Ottawa, en pleine transformation avec le projet Zibi, Hull attire les professionnels, les familles bilingues et les investisseurs. C'est ici que la ville bouge le plus."
      primaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Voir les propriétés à Hull", href: "/proprietes?secteur=hull" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Pourquoi Hull ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">POURQUOI HULL</p>
      <h2 className="mt-3">Hull : le secteur qui se réinvente</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull est le secteur historique de Gatineau, situé directement en face d'Ottawa de l'autre côté de la rivière des Outaouais. C'est le secteur le plus dense de la ville — condos, plexs, maisons de caractère, restaurants, musées. Pour les travailleurs fédéraux qui veulent traverser le pont à pied ou à vélo, c'est souvent le premier choix.
        </p>
        <p className="prose-body">
          Le projet Zibi transforme actuellement l'île de Hull et l'île Chaudière. Ce développement de 34 acres construit sur les deux rives de la rivière des Outaouais — à la fois à Gatineau et à Ottawa — comprend des condos résidentiels, des espaces de bureaux, des commerces et des espaces publics. C'est le premier quartier carboneutre de la région de la capitale nationale, utilisant un système énergétique unique en Amérique du Nord. Les premières phases sont habitées. (Source: zibi.ca, Radio-Canada)
        </p>
        <p className="prose-body">
          Pour les investisseurs, Hull concentre la majorité du parc de plexs de Gatineau. La demande locative provient des fonctionnaires fédéraux, des étudiants de l'Université du Québec en Outaouais (UQO) — dont le campus est situé à Hull — et des jeunes professionnels. Un marché locatif ancré dans une base d'emploi stable.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sous-secteurs ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">LES SECTEURS</p>
        <h2 className="mt-3">Les secteurs de Hull à connaître</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {subSectors.map((s) => (
            <div key={s.title} className="rounded-md border border-border bg-background p-6 space-y-3 hover:-translate-y-0.5 transition-transform">
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — Investir ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">INVESTISSEMENT</p>
      <h2 className="mt-3">Investir dans un plex à Hull — ce qu'il faut comprendre</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Hull est historiquement le secteur de Gatineau le plus actif pour l'investissement en multiplex. La densité résidentielle, la proximité d'Ottawa, la présence de l'UQO et de fonctionnaires fédéraux créent une demande locative soutenue — particulièrement pour les logements à prix abordables.
        </p>
        <p className="prose-body">
          Le marché locatif de Gatineau a connu un rééquilibrage en 2025-2026 avec l'arrivée d'un grand nombre de nouvelles constructions. Ce changement rend l'analyse de rendement encore plus critique. Les anciens plexs à loyers modérés restent les plus demandés.
        </p>
        <p className="prose-body">
          Je suis investisseur immobilier moi-même — mon analyse est honnête, pas un argumentaire de vente.
        </p>
      </div>
      <div className="mt-6">
        <Button size="lg" asChild>
          <Link to="/investir-plex-gatineau">Analyser un plex avec moi →</Link>
        </Button>
      </div>
    </ContentBlock>

    {/* ═══ CTA QUALITÉ ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Hull est le secteur le plus proche d'Ottawa à Gatineau — ponts Alexandra, Champlain, Portage et des Chaudières.",
            "Le projet Zibi est un développement actif en cours — les secteurs adjacents bénéficient de cette transformation.",
            "L'UQO et les bureaux fédéraux du côté québécois ancrent une demande locative stable à Hull.",
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
    <FAQSection title="Questions fréquentes — Hull, Gatineau" items={faq} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="investor_guide"
      headline="Guide investisseur gratuit — plex à Hull"
      text="Rendement, fiscalité et stratégie d'investissement — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide investisseur"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Votre projet à Hull — par où commencer?"
      text="Achat, vente, investissement locatif — Hull est un secteur que je connais en profondeur. Parlons de votre projet."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" },
        { label: "Analyser un plex →", href: "/investir-plex-gatineau", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    <StickyGuideBanner guideType="investor_guide" label="Guide investisseur gratuit — recevez-le par courriel" />
  </>
);

export default HullPage;
