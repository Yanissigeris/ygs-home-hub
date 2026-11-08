import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
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
import heroImg from "@/assets/hero-gatineau-centre-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Gatineau centre ou Aylmer : quoi choisir?",
    a: "La différence principale tient au style de vie et à votre lieu de travail. Gatineau centre offre un meilleur accès aux services (hôpital, cégep, grandes surfaces) et est généralement plus accessible financièrement qu'Aylmer. Aylmer offre des maisons plus récentes et un mode de vie plus près de la nature, dans un milieu plus bilingue. Si vous travaillez à Gatineau, le centre peut être plus pratique. Pour ceux qui viennent d'Ottawa, Aylmer est souvent préféré. Je peux vous aider à comparer selon votre situation.",
  },
  {
    q: "Est-ce un bon secteur pour investir dans un plex?",
    a: "C'est dans le secteur Gatineau qu'il s'est vendu le plus de plex au cours des 12 derniers mois : 135, selon l'APCIQ (3e trimestre 2026). La demande locative a baissé depuis la COVID, ici comme ailleurs en Outaouais. Dans mes dossiers, un plex mal loué ou mal entretenu reste plus longtemps sur le marché, et son prix se négocie. Faites une analyse de rendement avant d'acheter : je la fais avec vous.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Limbour",
    text: "Quartier résidentiel établi, maisons sur rues arborées. Bon accès aux commerces et aux services du boulevard Maloney.",
  },
  {
    title: "La Gappe",
    text: "Quartier résidentiel du secteur Gatineau, surtout des maisons unifamiliales, avec des écoles et des parcs à proximité.",
  },
  {
    title: "Secteur plex du centre",
    text: "Concentration historique de duplex et triplex proches des commerces et des transports en commun STO. Sur les 12 derniers mois, le prix médian d'un plex dans le secteur Gatineau était de 556 000 $, en baisse de 7 % (APCIQ, 3e trimestre 2026).",
  },
  {
    title: "Secteur boulevard Maloney",
    text: "Axe commercial principal de Gatineau. Toutes les grandes surfaces, services médicaux, restaurants. Propriétés résidentielles proches de cet axe sont pratiques mais l'environnement est plus urbain et plus passant.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Investir dans un plex", text: "Analyse de rendement, stratégie d'investissement.", href: "/investir-plex-gatineau/" },
  { title: "Hull", text: "Urbain, culture, condos.", href: "/hull/" },
  { title: "Aylmer", text: "Familles, bilingue.", href: "/aylmer/" },
  { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
];

const GatineauCentrePage = () => (
  <>
    <PageMeta
      title="Gatineau centre : maisons, plex et condos | YGS"
      description="Achetez, vendez ou investissez à Gatineau centre. Plex, maisons unifamiliales et condos. Courtier local depuis 2017 : Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd
      name="Gatineau (centre)"
      description="Achetez, vendez ou investissez à Gatineau centre. Plex, maisons unifamiliales et condos. Courtier local."
      lat={45.4765}
      lng={-75.7013}
      url="/gatineau/"
    />
    <ServiceJsonLd
      name="Courtier immobilier à Gatineau centre"
      description="Services de courtage immobilier à Gatineau centre : plex, maisons et condos."
      url="/gatineau/"
      serviceType="Real Estate Brokerage"
      areaServed={["Gatineau (centre)", "Québec"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="GATINEAU CENTRE · QUÉBEC"
      title="Acheter ou vendre à Gatineau centre, près des services"
      subtitle="Le secteur central de Gatineau est souvent sous-estimé. On y trouve pourtant l'Hôpital de Gatineau et un campus du Cégep de l'Outaouais, avec de grandes surfaces à proximité. Ses prix restent parmi les plus accessibles de la ville pour les familles et les investisseurs."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Voir les propriétés →", href: "/proprietes?secteur=gatineau" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Gatineau centre, bien desservi, bien positionné</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Le secteur Gatineau (au sens du district municipal, distinct d'Aylmer et de Hull) couvre une zone étendue au nord et à l'est de la ville. Il comprend entre autres Limbour et La Gappe, jusqu'aux abords du boulevard Maloney. C'est le cœur résidentiel de Gatineau, avec une bonne partie des services et des commerces : l'Hôpital de Gatineau, le Cégep de l'Outaouais, plusieurs écoles secondaires et de grandes surfaces commerciales.
        </p>
        <p className="prose-body">
          Pour les familles qui travaillent à Gatineau (plutôt qu'à Ottawa), ce secteur offre souvent un bon équilibre entre accessibilité aux services et qualité de vie résidentielle. Côté investissement, on y trouve des duplex et triplex bien situés, proches des services et des axes de transport.
        </p>
        <p className="prose-body">
          La Ville de Gatineau, avec une population de 298 000 habitants, est la quatrième ville en importance au Québec. (Source : Ville de Gatineau, 2024). Le secteur central bénéficie directement de tous les investissements municipaux en infrastructure.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sous-secteurs ═══ */}
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="mt-3">Les quartiers de Gatineau centre à connaître</h2>
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

    {/* ═══ CTA QUALITÉ ═══ */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Gatineau est la 4e ville en importance au Québec avec 298 000 habitants. (Source : Ville de Gatineau, 2024)",
            "L'Hôpital de Gatineau, le Cégep de l'Outaouais et le réseau STO sont tous situés dans ce secteur.",
            "Au 3e trimestre 2026, le prix médian d'une unifamiliale dans le secteur Gatineau de l'APCIQ était de 464 900 $, en baisse de 2 % sur un an.",
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
    <FAQSection title="Questions fréquentes sur Gatineau centre" items={faq} updated={{ date: "2026-11-04", source: "Chiffres de marché : APCIQ, 3e trimestre 2026" }} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit : acheter à Gatineau"
      text="Processus, budget et conseils pour acheter dans le secteur, dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Acheteur ou vendeur à Gatineau centre?"
      text="Je connais le secteur, parlons de votre projet."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" },
        { label: "Analyser un plex →", href: "/investir-plex-gatineau/", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default GatineauCentrePage;
