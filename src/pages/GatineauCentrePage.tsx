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
    q: "Gatineau centre vs Aylmer — quoi choisir?",
    a: "La différence principale tient au style de vie et à votre lieu de travail. Gatineau centre offre un meilleur accès aux services (hôpital, cégep, grandes surfaces) et est généralement plus accessible financièrement qu'Aylmer. Aylmer offre une qualité de vie plus orientée nature, des maisons plus récentes, et un environnement plus bilingue. Si vous travaillez à Gatineau, le centre peut être plus pratique. Si vous venez d'Ottawa, Aylmer est souvent préféré. Je peux vous aider à comparer honnêtement selon votre situation.",
  },
  {
    q: "Est-ce un bon secteur pour investir dans un plex?",
    a: "Gatineau centre concentre une bonne partie du parc de plexs existants de la ville. La demande locative est soutenue par la présence du Cégep de l'Outaouais, de l'hôpital, et des services dans un rayon accessible. Comme partout, l'analyse de rendement honnête est indispensable avant tout achat. Je m'en occupe avec vous.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Limbour",
    text: "Quartier résidentiel établi, maisons sur rues arborées, Parc du Bois-Dollard. Clientèle familiale enracinée. Bon accès aux commerces et aux services du boulevard Maloney.",
  },
  {
    title: "Manoir-des-Trembles / La Gappe",
    text: "Quartiers planifiés développés principalement dans les années 1990-2000. Maisons deux étages, rues tranquilles, écoles à proximité. Populaire auprès des jeunes familles qui s'établissent à Gatineau.",
  },
  {
    title: "Secteur plex — centre",
    text: "Concentration historique de duplex et triplex proches des commerces et des transports en commun STO. Clientèle locative variée : étudiants du Cégep, familles, travailleurs. Marché d'investissement actif.",
  },
  {
    title: "Secteur boulevard Maloney",
    text: "Axe commercial principal de Gatineau. Toutes les grandes surfaces, services médicaux, restaurants. Propriétés résidentielles proches de cet axe sont pratiques mais l'environnement est plus urbain et plus passant.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Investir dans un plex", text: "Analyse de rendement, stratégie d'investissement.", href: "/investir-plex-gatineau" },
  { title: "Hull", text: "Urbain, culture, condos.", href: "/hull" },
  { title: "Aylmer", text: "Lac Deschênes, familles, bilingue.", href: "/aylmer" },
  { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
];

const GatineauCentrePage = () => (
  <>
    <PageMeta
      title="Courtier immobilier Gatineau centre | Plexs, maisons, condos | YGS"
      description="Achetez, vendez ou investissez à Gatineau centre. Plexs, maisons unifamiliales, condos. Courtier local depuis près de 9 ans — Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd
      name="Gatineau (centre)"
      description="Achetez, vendez ou investissez à Gatineau centre. Plexs, maisons unifamiliales, condos. Courtier local."
      lat={45.4765}
      lng={-75.7013}
      url="/gatineau-centre"
    />
    <ServiceJsonLd
      name="Courtier immobilier à Gatineau centre"
      description="Services de courtage immobilier à Gatineau centre — plexs, maisons, condos."
      url="/gatineau-centre"
      serviceType="Real Estate Brokerage"
      areaServed={["Gatineau (centre)", "Québec"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="GATINEAU CENTRE · QUÉBEC"
      title="Courtier immobilier à Gatineau centre — accessibilité, services et valeur"
      subtitle="Le secteur central de Gatineau est souvent sous-estimé. C'est pourtant le secteur le mieux desservi de la ville — hôpital, universités, cégep, transports, commerces. Et l'un des plus accessibles pour les familles et les investisseurs."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Voir les propriétés →", href: "/proprietes?secteur=gatineau" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">PORTRAIT DU SECTEUR</p>
      <h2 className="mt-3">Gatineau centre — bien desservi, bien positionné</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Le secteur Gatineau (au sens du district municipal, distinct d'Aylmer et de Hull) couvre une zone étendue au nord et à l'est de la ville — incluant les quartiers Limbour, La Gappe, Manoir-des-Trembles, et les abords du boulevard Maloney. C'est le cœur résidentiel de Gatineau, avec la plus forte concentration de services publics : l'Hôpital de Gatineau, le Cégep de l'Outaouais, plusieurs écoles secondaires, le réseau de transports en commun STO, et les grandes surfaces commerciales.
        </p>
        <p className="prose-body">
          Pour les familles qui travaillent à Gatineau (plutôt qu'à Ottawa), ce secteur offre souvent le meilleur équilibre entre accessibilité aux services et qualité de vie résidentielle. Pour les investisseurs, Gatineau centre concentre une forte proportion du parc de plexs existants — des duplex et triplex bien situés, proches des services et des axes de transport.
        </p>
        <p className="prose-body">
          La Ville de Gatineau, avec une population de 298 000 habitants, est la quatrième ville en importance au Québec. (Source: Ville de Gatineau, 2024). Le secteur central bénéficie directement de tous les investissements municipaux en infrastructure.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sous-secteurs ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">LES QUARTIERS</p>
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
    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Gatineau est la 4e ville en importance au Québec avec 298 000 habitants. (Source: Ville de Gatineau, 2024)",
            "L'Hôpital de Gatineau, le Cégep de l'Outaouais et le réseau STO sont tous situés dans ce secteur.",
            "En 2026, la Chambre immobilière de l'Outaouais note un intérêt accru pour les propriétés clé en main — ce secteur bénéficie de cette tendance.",
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
    <FAQSection title="Questions fréquentes — Gatineau centre" items={faq} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter à Gatineau"
      text="Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Acheteur ou vendeur à Gatineau centre?"
      text="Je connais le secteur — parlons de votre projet."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" },
        { label: "Analyser un plex →", href: "/investir-plex-gatineau", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default GatineauCentrePage;
