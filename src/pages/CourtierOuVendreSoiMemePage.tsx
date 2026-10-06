import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-courtier-vs-fsbo.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "Est-ce mieux de vendre avec un courtier ou seul?", a: "Ça dépend de votre temps disponible et de votre aisance à négocier. Un courtier prend en charge la mise en marché, les visites, la négociation et les documents. Vendre seul évite la commission, mais tout ce travail repose sur vous." },
  { q: "Combien peut-on économiser en vendant sans courtier?", a: "Vous économisez la commission et les taxes qui s'y ajoutent. Par contre, un prix de départ mal établi ou une négociation difficile peut réduire cette économie. Sans courtier, vous n'avez pas accès à Centris, ce qui limite la portée de l'annonce." },
  { q: "Est-ce légal de vendre seul au Québec?", a: "Oui, vendre sans courtier est légal au Québec, que ce soit avec une plateforme comme DuProprio ou une simple pancarte. Le vendeur reste tenu à la garantie légale de qualité, sauf exclusion prévue à l'acte, et doit informer l'acheteur de ce qu'il sait sur l'immeuble. Avec un courtier, le formulaire Déclarations du vendeur de l'OACIQ est obligatoire si le vendeur est une personne physique et que l'immeuble résidentiel compte moins de 5 logements, copropriété comprise." },
  { q: "Quels risques y a-t-il à vendre sans courtier?", a: "Fixer un prix trop bas, négocier sans expérience, faire des erreurs dans les documents ou limiter la visibilité de l'annonce. Ces erreurs peuvent mener à des litiges. Un courtier vous aide à réduire ces risques." },
  { q: "Un courtier peut-il vendre plus cher?", a: "Il peut vous aider à obtenir un prix plus élevé grâce à une stratégie basée sur les ventes comparables, à l'exposition sur Centris et à la négociation. Le résultat dépend toujours de la propriété et du marché." },
  { q: "Quels services offre un courtier par rapport à la vente sans courtier?", a: "Analyse du prix, inscription sur Centris, photos, marketing, gestion des visites, négociation, rédaction des offres et coordination notariale. Seul, vous gérez tout vous-même. Le notaire, lui, reste neutre : il prépare et reçoit l'acte de vente, sans négocier pour vous." },
  { q: "Comment décider si j'ai besoin d'un courtier?", a: "Si vous avez du temps et une bonne connaissance des documents et des obligations du vendeur, la vente privée est une option. Sinon, un courtier prend en charge chaque étape et vous aide à défendre votre prix." },
  { q: "Est-ce que les acheteurs préfèrent un vendeur avec courtier?", a: "Ça dépend des acheteurs. Certains courtiers acheteurs préfèrent traiter avec un courtier inscripteur, qui a déjà les déclarations du vendeur et les documents en main. Un acheteur accompagné peut quand même acheter une propriété vendue sans courtier, selon l'entente sur la rétribution de son courtier." },
];

const CourtierOuVendreSoiMemePage = () => (
  <>
    <PageMeta
      title="Courtier immobilier ou vendre seul au Québec?"
      description="Vendre avec un courtier ou seul au Québec : avantages, risques, obligations du vendeur et résultat net, pour décider selon votre situation à Gatineau." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Courtier immobilier ou vendre soi-même?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Les deux options sont légitimes. Cette comparaison vous aide à choisir selon votre situation, avec les avantages et les risques de chaque côté.
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
            <li>✓ Inscription sur Centris</li>
            <li>✓ Prix appuyé sur des ventes comparables</li>
            <li>✓ Photos professionnelles et marketing ciblé</li>
            <li>✓ Négociation et formulaires encadrés par l'OACIQ</li>
            <li>✓ Coordination complète jusqu'au notaire</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1rem] font-semibold mb-3">Vendre seul</h3>
          <ul className="space-y-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
            <li>✓ Pas de commission à payer</li>
            <li>✓ Contrôle total du processus</li>
            <li>✗ Pas d'accès à Centris (MLS)</li>
            <li>✗ Risque de sous-évaluation du prix</li>
            <li>✗ Gestion complète à votre charge</li>
          </ul>
        </div>
      </div>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Réalité" title="Ce qu'il faut considérer" />
      <p className="prose-body mt-5">
        La question n'est pas seulement « combien je peux économiser? », mais « combien me restera-t-il? ». Si un courtier obtient un prix plus élevé, une partie ou la totalité de la commission peut être compensée. Ça dépend de la propriété et du marché.
      </p>
      <p className="prose-body mt-4">
        La vente privée peut fonctionner si vous avez du temps et de l'aisance en négociation. Dans les autres cas, un courtier local prend en charge les étapes et réduit les risques d'erreur dans les documents.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Curieux de savoir combien vaut votre propriété? Obtenez une évaluation gratuite, basée sur les ventes comparables récentes de votre secteur."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Risques" title="Les risques de vendre sans courtier" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Prix trop bas", text: "Sans analyse des ventes comparables, vous risquez de fixer un prix trop bas." },
          { title: "Exposition limitée", text: "Sans Centris, votre annonce n'apparaît pas dans l'outil que les courtiers utilisent pour chercher des propriétés avec leurs clients." },
          { title: "Négociation directe", text: "Négocier seul face à un acheteur (ou son courtier) peut être désavantageux sans expérience." },
          { title: "Erreurs administratives", text: "La documentation immobilière est complexe. Une erreur peut entraîner des litiges coûteux." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </ContentBlock>

    <RelatedPages
      overline="À lire aussi"
      title="Pages connexes"
      pages={[
        { title: "Combien coûte un courtier?", text: "Guide sur la rémunération.", href: "/combien-coute-un-courtier-immobilier-au-quebec/" },
        { title: "Frais de courtage au Québec", text: "Détail des frais et services.", href: "/frais-de-courtage-immobilier-quebec/" },
        { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau/" },
        { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Vous hésitez encore?"
      text="Discutons de votre situation, sans engagement. Je vous donne les chiffres et les options, vous décidez."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Accompagnement transparent, à votre rythme."
    />

    <FAQSection items={faq} />
  </>
);

export default CourtierOuVendreSoiMemePage;
