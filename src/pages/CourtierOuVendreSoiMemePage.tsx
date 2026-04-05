import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";

const faq = [
  { q: "Est-ce mieux de vendre avec un courtier ou seul?", a: "Ça dépend de votre expérience, de votre temps disponible et de votre tolérance au risque. Un courtier offre visibilité, négociation et gestion complète — vendre seul peut réduire les frais mais demande beaucoup plus de travail et comporte des risques." },
  { q: "Combien peut-on économiser en vendant sans courtier?", a: "En théorie, on économise la commission. En pratique, les ventes sans courtier se concluent souvent à un prix inférieur, ce qui peut annuler l'économie. L'accès au marché MLS et la portée marketing sont aussi réduits." },
  { q: "Est-ce légal de vendre seul au Québec?", a: "Oui, la vente privée est tout à fait légale au Québec. Cependant, vous devez respecter les mêmes obligations légales (déclaration du vendeur, inspections, etc.)." },
  { q: "Quels risques y a-t-il à vendre sans courtier?", a: "Sous-évaluer le prix, mauvaise négociation, erreurs dans les documents, exposition limitée, litiges potentiels et stress important. Un courtier professionnel réduit significativement ces risques." },
  { q: "Un courtier peut-il vraiment vendre plus cher?", a: "Oui — grâce à une stratégie de prix basée sur des comparables, une exposition MLS maximale, des photos professionnelles, une mise en valeur et une négociation experte." },
  { q: "Quels services un courtier offre-t-il vs vendre seul?", a: "Évaluation professionnelle, accès MLS, photos, marketing, gestion des visites, négociation, rédaction des offres et coordination notariale. Seul, vous gérez tout vous-même." },
  { q: "Comment décider si j'ai besoin d'un courtier?", a: "Si vous avez le temps, les connaissances juridiques et la capacité de négocier fermement, la vente privée est une option. Sinon, un courtier peut vous faire gagner en prix et en tranquillité d'esprit." },
  { q: "Est-ce que les acheteurs préfèrent un vendeur avec courtier?", a: "Beaucoup d'acheteurs (et leurs courtiers) préfèrent traiter avec un courtier inscripteur, car ça simplifie les négociations et réduit les risques de malentendus." },
];

const CourtierOuVendreSoiMemePage = () => (
  <>
    <PageMeta
      title="Courtier immobilier ou vendre seul au Québec?"
      description="Comparaison honnête entre vendre avec un courtier ou seul au Québec. Avantages, risques et ce qui est le mieux pour votre situation à Gatineau."
    />

    <section className="hero-gradient relative overflow-hidden">
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="label-overline mb-4 text-primary-foreground/25">Guide · Vendre au Québec</p>
          <h1 className="text-primary-foreground">Courtier immobilier ou vendre seul?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            Les deux options sont légitimes. Voici une comparaison honnête pour vous aider à faire le bon choix selon votre situation.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Comparaison" title="Les avantages de chaque option" />
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-[1rem] font-semibold mb-3">Avec un courtier</h3>
          <ul className="space-y-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            <li>✓ Accès au réseau MLS et visibilité maximale</li>
            <li>✓ Stratégie de prix basée sur des données réelles</li>
            <li>✓ Photos professionnelles et marketing ciblé</li>
            <li>✓ Négociation experte et protection juridique</li>
            <li>✓ Coordination complète jusqu'au notaire</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1rem] font-semibold mb-3">Vendre seul</h3>
          <ul className="space-y-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            <li>✓ Pas de commission à payer</li>
            <li>✓ Contrôle total du processus</li>
            <li>✗ Visibilité réduite (pas de MLS)</li>
            <li>✗ Risque de sous-évaluation du prix</li>
            <li>✗ Gestion complète à votre charge</li>
          </ul>
        </div>
      </div>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Réalité" title="Ce qu'il faut vraiment considérer" />
      <p className="prose-body mt-5">
        La question n'est pas seulement « combien je peux économiser? » mais plutôt « quel sera mon résultat net? ». Un courtier compétent peut souvent obtenir un prix de vente supérieur qui compense largement sa commission — surtout dans un marché comme celui de Gatineau.
      </p>
      <p className="prose-body mt-4">
        La vente privée peut fonctionner si vous avez le temps, les connaissances et la capacité de négocier. Mais pour la plupart des vendeurs, l'accompagnement d'un professionnel local réduit le stress, les risques et le temps sur le marché.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Curieux de savoir combien vaut votre propriété? Obtenez une estimation gratuite en 24h."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Risques" title="Les risques de vendre sans courtier" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Prix trop bas", text: "Sans accès aux comparables et à l'analyse de marché, vous risquez de sous-évaluer votre propriété." },
          { title: "Exposition limitée", text: "Sans MLS, votre propriété atteint beaucoup moins d'acheteurs potentiels." },
          { title: "Négociation directe", text: "Négocier seul face à un acheteur (ou son courtier) peut être désavantageux sans expérience." },
          { title: "Erreurs administratives", text: "La documentation immobilière est complexe — une erreur peut entraîner des litiges coûteux." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentBlock>

    <RelatedPages
      overline="Explorer"
      title="Pages connexes"
      pages={[
        { title: "Combien coûte un courtier?", text: "Guide sur la rémunération.", href: "/combien-coute-un-courtier-immobilier-au-quebec" },
        { title: "Frais de courtage au Québec", text: "Détail des frais et services.", href: "/frais-de-courtage-immobilier-quebec" },
        { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau" },
        { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Vous hésitez encore?"
      text="Discutons de votre situation — sans engagement. Je vous aide à comprendre vos options et à prendre la meilleure décision."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Accompagnement transparent, à votre rythme."
    />

    <FAQSection items={faq} />
  </>
);

export default CourtierOuVendreSoiMemePage;
