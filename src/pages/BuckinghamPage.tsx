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
import heroImg from "@/assets/hero-buckingham-gen.jpg";

/* ── FAQ data ── */
const faq = [
  {
    q: "Buckingham est-il trop loin d'Ottawa pour y habiter?",
    a: "Buckingham est à environ 45-50 minutes d'Ottawa en voiture selon le trafic. Pour un travail en présentiel quotidien à Ottawa, c'est effectivement un trajet important. Pour du télétravail partiel ou un emploi à Gatineau, c'est tout à fait gérable — et le gain en espace et en qualité de vie est significatif. Lors de notre consultation, je peux vous aider à peser honnêtement ce compromis selon votre situation réelle.",
  },
  {
    q: "Y a-t-il des services à Buckingham?",
    a: "Oui — Buckingham a un centre-ville fonctionnel avec les services du quotidien : épiceries, pharmacie, clinique médicale, restaurants, bibliothèque, école primaire et secondaire, aréna. Ce n'est pas l'offre d'Aylmer ou de Hull, mais les besoins quotidiens sont couverts. Pour les grandes surfaces et les spécialistes médicaux, on va vers le centre de Gatineau (30-40 minutes).",
  },
  {
    q: "Les propriétés à Buckingham ont-elles des puits?",
    a: "Une bonne partie de Buckingham est connectée à l'aqueduc et aux égouts municipaux — contrairement aux secteurs plus ruraux comme Cantley ou L'Ange-Gardien. Dans le cœur du secteur Buckingham, les propriétés sont généralement sur les services municipaux. En périphérie, vérification nécessaire. Je confirme systématiquement ce point pour chaque propriété visitée.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Buckingham",
    text: "Le cœur historique de l'est gatinois. Centre-ville avec services complets, maisons variées allant des propriétés de caractère du début du 20e siècle aux constructions récentes sur grand terrain. Communauté enracinée, ambiance de petite ville.",
  },
  {
    title: "Masson-Angers",
    text: "Plus proche du centre de Gatineau, Masson-Angers longe la rivière des Outaouais. Secteur résidentiel calme, maisons sur terrains généreux, accès à des sentiers riverains. Attire les familles qui veulent être un peu plus proches de la ville tout en gardant l'espace et la tranquillité.",
  },
  {
    title: "Angers / L'Ange-Gardien",
    text: "Zone de transition vers les MRC rurales. Grandes propriétés, boisés, silence. Pour ceux qui cherchent vraiment l'espace. Puits et fosses septiques fréquents — l'inspection est cruciale dans ce secteur.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Cantley", text: "Rural, grands terrains, collines.", href: "/cantley" },
  { title: "Gatineau centre", text: "Services, résidentiel, central.", href: "/gatineau-centre" },
  { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
];

const BuckinghamPage = () => (
  <>
    <PageMeta
      title="Courtier immobilier Buckingham Masson-Angers | Grands terrains | YGS"
      description="Achetez ou vendez à Buckingham et Masson-Angers, Gatineau. Grands terrains, espace, prix accessibles. Courtier local Outaouais — Yanis Gauthier-Sigeris."
    />
    <NeighborhoodJsonLd
      name="Buckingham"
      description="Achetez ou vendez à Buckingham et Masson-Angers, Gatineau. Grands terrains, espace, prix accessibles."
      lat={45.5860}
      lng={-75.4190}
      url="/buckingham-masson-angers"
    />
    <ServiceJsonLd
      name="Courtier immobilier à Buckingham"
      description="Services de courtage immobilier à Buckingham et Masson-Angers, Gatineau."
      url="/buckingham-masson-angers"
      serviceType="Real Estate Brokerage"
      areaServed={["Buckingham", "Masson-Angers", "Gatineau"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="BUCKINGHAM · MASSON-ANGERS · GATINEAU"
      title="Courtier immobilier à Buckingham — l'espace que Gatineau n'offre plus"
      subtitle="Buckingham et Masson-Angers sont les secteurs est de Gatineau. C'est ici que les terrains sont grands, que les maisons ont de l'espace, et que le rythme de vie est différent. Pour les acheteurs qui ont fait le calcul et veulent vraiment l'espace, c'est souvent la révélation du marché outaouais."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Voir les propriétés →", href: "/proprietes?secteur=buckingham" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">PORTRAIT</p>
      <h2 className="mt-3">Buckingham et Masson-Angers — les faits</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Buckingham est l'un des cinq secteurs historiques qui ont fusionné pour former la ville de Gatineau en 2002. Ancienne ville industrielle — son économie était fondée sur les papetières pendant plus d'un siècle — Buckingham est aujourd'hui un secteur résidentiel tranquille avec une identité communautaire forte et un centre-ville fonctionnel. Masson-Angers, plus proche du centre de Gatineau, longe la rivière des Outaouais et offre une ambiance semi-rurale appréciée des familles.
        </p>
        <p className="prose-body">
          Ce qui distingue fondamentalement ce secteur de tous les autres à Gatineau : l'espace. Les terrains sont plus grands, les maisons sont plus spacieuses, et les rues sont plus calmes. Ce secteur attire principalement des familles établies, des acheteurs en upsizing qui veulent plus d'espace, et — depuis 2020 — des travailleurs en télétravail qui n'ont plus besoin d'être proches d'Ottawa au quotidien.
        </p>
        <p className="prose-body">
          Buckingham dispose d'un centre-ville vivant : épiceries, pharmacie, restaurants, clinique médicale, bibliothèque, aréna, école secondaire. Pour les grandes surfaces et les services spécialisés, on se dirige vers le centre de Gatineau (30-40 minutes).
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sous-secteurs ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">LES SECTEURS</p>
        <h2 className="mt-3">Buckingham vs Masson-Angers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {subSectors.map((s) => (
            <div key={s.title} className="rounded-md border border-border bg-background p-6 space-y-3 hover:-translate-y-0.5 transition-transform">
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — La distance ═══ */}
    <ContentBlock background="alt">
      <p className="label-overline">HONNÊTETÉ</p>
      <h2 className="mt-3">La question de la distance — une réponse honnête</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          La principale question que les acheteurs posent sur Buckingham : « N'est-ce pas trop loin? »
        </p>
        <p className="prose-body">
          La réponse honnête dépend de votre situation. Buckingham est à environ 45-50 minutes d'Ottawa selon le trafic, et à 30-40 minutes du centre de Gatineau. Pour quelqu'un qui travaille à temps plein en présentiel à Ottawa, c'est effectivement un trajet significatif au quotidien.
        </p>
        <p className="prose-body">
          Pour quelqu'un en télétravail partiel (2-3 jours/semaine) ou qui travaille à Gatineau, la distance devient un avantage — vous obtenez beaucoup plus d'espace pour le même budget.
        </p>
        <p className="prose-body">
          C'est une décision de style de vie autant que de budget. Je vous aide à la peser honnêtement, sans vous vendre une propriété qui ne correspondrait pas à votre réalité.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ CTA QUALITÉ ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Buckingham est un des cinq secteurs historiques qui ont formé la ville de Gatineau. Centre-ville fonctionnel avec services essentiels sur place.",
            "Masson-Angers longe la rivière des Outaouais et offre l'ambiance semi-rurale la plus proche du centre de Gatineau dans ce secteur est.",
            "En 2026, la Chambre immobilière de l'Outaouais note un intérêt accru pour les propriétés clé en main — le secteur Buckingham bénéficie de cet attrait croissant pour l'espace et l'accessibilité.",
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
    <FAQSection title="Questions fréquentes — Buckingham et Masson-Angers" items={faq} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter à Buckingham"
      text="Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Acheteur ou vendeur à Buckingham?"
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

export default BuckinghamPage;
