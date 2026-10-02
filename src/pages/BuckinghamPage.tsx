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
import heroImg from "@/assets/hero-buckingham-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Buckingham est-il trop loin d'Ottawa pour y habiter?",
    a: "Le centre de Buckingham est à environ 38 km du centre-ville d'Ottawa par la route. Aux heures de pointe, il faut prévoir plus de temps. Si vous travaillez en présentiel tous les jours à Ottawa, c'est un trajet important. En télétravail partiel ou avec un emploi à Gatineau, ça se gère bien, et vous gagnez de l'espace. Lors de notre consultation, on regarde ce compromis ensemble selon votre situation.",
  },
  {
    q: "Y a-t-il des services à Buckingham?",
    a: "Oui, Buckingham a un centre-ville fonctionnel avec les services du quotidien : épiceries, pharmacie, clinique médicale, restaurants, bibliothèque, école primaire et secondaire, aréna. L'offre est plus petite qu'à Aylmer ou à Hull, mais les besoins quotidiens sont couverts. L'Hôpital de Papineau est aussi à Buckingham. Pour les grandes surfaces, on va vers le centre de Gatineau : Les Promenades Gatineau sont à une trentaine de kilomètres par la route (de 30 à 36 km selon l'itinéraire).",
  },
  {
    q: "Les propriétés à Buckingham ont-elles des puits?",
    a: "Une bonne partie de Buckingham est connectée à l'aqueduc et aux égouts municipaux, contrairement aux secteurs plus ruraux comme Cantley ou L'Ange-Gardien. Dans le cœur du secteur Buckingham, les propriétés sont généralement sur les services municipaux. En périphérie, vérification nécessaire. Je confirme systématiquement ce point pour chaque propriété visitée.",
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
    text: "Plus proche du centre de Gatineau, Masson-Angers longe la rivière des Outaouais. Secteur résidentiel calme, avec des maisons sur de grands terrains et des sentiers près de la rivière. Il attire les familles qui veulent se rapprocher un peu de la ville sans perdre d'espace.",
  },
  {
    title: "Angers / L'Ange-Gardien",
    text: "Zone de transition vers les MRC rurales. Grandes propriétés et terrains boisés, pour les acheteurs qui veulent de l'espace avant tout. Les puits et les fosses septiques sont fréquents, alors l'inspection compte beaucoup dans ce secteur.",
  },
];

/* ── Related pages ── */
const related = [
  { title: "Cantley", text: "Rural, grands terrains, collines.", href: "/cantley/" },
  { title: "Gatineau centre", text: "Services, résidentiel, central.", href: "/gatineau/" },
  { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
  { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
];

const BuckinghamPage = () => (
  <>
    <PageMeta
      title="Courtier immobilier Buckingham Masson-Angers | Grands terrains | YGS"
      description="Achetez ou vendez à Buckingham et Masson-Angers, Gatineau. Grands terrains, espace, prix accessibles. Courtier local Outaouais : Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
    <NeighborhoodJsonLd
      name="Buckingham"
      description="Achetez ou vendez à Buckingham et Masson-Angers, Gatineau. Grands terrains, espace, prix accessibles."
      lat={45.5860}
      lng={-75.4190}
      url="/buckingham-masson-angers/"
    />
    <ServiceJsonLd
      name="Courtier immobilier à Buckingham"
      description="Services de courtage immobilier à Buckingham et Masson-Angers, Gatineau."
      url="/buckingham-masson-angers/"
      serviceType="Real Estate Brokerage"
      areaServed={["Buckingham", "Masson-Angers", "Gatineau"]}
    />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="BUCKINGHAM · MASSON-ANGERS · GATINEAU"
      title="Courtier immobilier à Buckingham, de l'espace dans l'est de Gatineau"
      subtitle="Buckingham et Masson-Angers sont les secteurs est de Gatineau. Les terrains y sont grands et les maisons spacieuses, avec un rythme de vie plus calme. Pour les acheteurs qui ont fait le calcul et veulent de l'espace, c'est souvent une belle surprise."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" }}
      secondaryCta={{ label: "Voir les propriétés →", href: "/proprietes?secteur=buckingham" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — Portrait ═══ */}
    <ContentBlock background="alt">
      <h2 className="mt-3">Buckingham et Masson-Angers, les faits</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          Buckingham est l'un des cinq secteurs historiques qui ont fusionné pour former la ville de Gatineau en 2002. Ancienne ville industrielle, Buckingham a vécu des papetières pendant plus d'un siècle. C'est aujourd'hui un secteur résidentiel tranquille, avec une forte identité communautaire et un centre-ville fonctionnel. Masson-Angers, plus proche du centre de Gatineau, longe la rivière des Outaouais et offre une ambiance semi-rurale appréciée des familles.
        </p>
        <p className="prose-body">
          Ce qui distingue fondamentalement ce secteur de tous les autres à Gatineau : l'espace. Les terrains sont plus grands, les maisons sont plus spacieuses, et les rues sont plus calmes. Ce secteur attire principalement des familles établies, des acheteurs en upsizing qui veulent plus d'espace, et, depuis 2020, des travailleurs en télétravail qui n'ont plus besoin d'être proches d'Ottawa au quotidien.
        </p>
        <p className="prose-body">
          Buckingham dispose d'un centre-ville vivant : épiceries, pharmacie, restaurants, clinique médicale, bibliothèque, aréna, école secondaire. Pour les grandes surfaces et les services spécialisés, on se dirige vers le centre de Gatineau, à une trentaine de kilomètres par la route (de 30 à 36 km jusqu'aux Promenades Gatineau, selon l'itinéraire).
        </p>
      </div>
    </ContentBlock>

    {/* ═══ SECTION 2 — Sous-secteurs ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
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
      <h2 className="mt-3">La question de la distance, une réponse honnête</h2>
      <div className="mt-6 space-y-4 max-w-3xl">
        <p className="prose-body">
          La principale question que les acheteurs posent sur Buckingham : « N'est-ce pas trop loin? »
        </p>
        <p className="prose-body">
          Ça dépend de votre situation. Buckingham est à environ 38 km du centre-ville d'Ottawa et à une trentaine de kilomètres des Promenades Gatineau par la route, et la durée du trajet dépend beaucoup de la circulation. Pour quelqu'un qui travaille à temps plein en présentiel à Ottawa, c'est un long trajet au quotidien.
        </p>
        <p className="prose-body">
          Pour quelqu'un en télétravail partiel (2-3 jours/semaine) ou qui travaille à Gatineau, la distance devient un avantage, vous obtenez beaucoup plus d'espace pour le même budget.
        </p>
        <p className="prose-body">
          C'est une décision de style de vie autant que de budget. Je vous aide à la peser, sans vous pousser vers une propriété qui ne correspond pas à votre réalité.
        </p>
      </div>
    </ContentBlock>

    {/* ═══ CTA QUALITÉ ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <div className="space-y-4">
          {[
            "Buckingham est un des cinq secteurs historiques qui ont formé la ville de Gatineau. Centre-ville fonctionnel, avec les services du quotidien sur place.",
            "Masson-Angers longe la rivière des Outaouais et offre l'ambiance semi-rurale la plus proche du centre de Gatineau dans ce secteur est.",
            "Au 2e trimestre 2026, le prix médian d'une unifamiliale dans le secteur Buckingham/Masson-Angers était de 419 545 $, le plus bas des quatre secteurs de la ville de Gatineau (APCIQ).",
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
    <FAQSection title="Questions fréquentes sur Buckingham et Masson-Angers" items={faq} />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="À lire aussi"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit : acheter à Buckingham"
      text="Processus, budget et conseils pour acheter dans le secteur, dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    {/* ═══ CTA FINAL ═══ */}
    <CTASection
      dark
      title="Acheteur ou vendeur à Buckingham?"
      text="Je connais le secteur, parlons de votre projet."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" },
        { label: "Réserver une consultation →", href: "/consultation-acheteur/", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default BuckinghamPage;
