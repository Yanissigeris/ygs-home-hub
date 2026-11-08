import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-frais-courtage.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "Comment se calcule la commission d'un courtier immobilier?", a: "Le plus souvent, c'est un pourcentage du prix de vente accepté. Il se négocie avec votre courtier et s'inscrit au contrat de courtage, puis les taxes s'ajoutent. Un montant fixe ou un autre mode est aussi possible." },
  { q: "Le pourcentage de commission est-il réglementé au Québec?", a: "Non. Aucune loi ne fixe de taux, et l'OACIQ non plus. Vous le négociez avec votre courtier." },
  { q: "Le pourcentage s'applique-t-il au prix affiché?", a: "Non. Il s'applique au prix de la promesse d'achat que vous acceptez. Si vous affichez à 500 000 $ et acceptez 495 000 $, le calcul se fait sur 495 000 $." },
  { q: "Combien de taxes s'ajoutent à la commission?", a: "La TPS de 5 % et la TVQ de 9,975 %, soit 14,975 % du montant de la commission. Sur une commission de 10 000 $, cela donne 1 497,50 $ de taxes." },
  { q: "Quand doit-on payer la commission?", a: "Elle est payée après la signature de l'acte de vente, à même le produit de la vente. Le droit à la commission existe toutefois plus tôt, dès qu'une promesse d'achat acceptée voit toutes ses conditions remplies." },
  { q: "Dois-je payer la commission si je refuse une offre?", a: "Oui, si l'offre respecte les conditions de vente prévues à votre contrat de courtage. C'est l'un des quatre cas prévus à la clause 7.1 du contrat de l'OACIQ." },
  { q: "Et si je vends après la fin de mon contrat de courtage?", a: "La commission peut être due si vous vendez dans les 180 jours à une personne qui s'est intéressée à la propriété pendant le contrat. Ce n'est pas le cas si vous avez signé de bonne foi un contrat exclusif avec un autre courtier." },
  { q: "La commission est-elle partagée avec le courtier de l'acheteur?", a: "Oui. Quand l'acheteur est représenté par un courtier, le courtier du vendeur partage sa rétribution avec lui." },
];

const cas = [
  { title: "Une promesse d'achat est acceptée", text: "Pendant la durée du contrat, une entente de vente est conclue et toutes ses conditions sont remplies. Il ne reste que l'acte de vente à signer." },
  { title: "Vous refusez une offre conforme", text: "Une promesse d'achat respecte les conditions de vente prévues à votre contrat, mais vous la refusez." },
  { title: "Vous vendez après la fin du contrat", text: "Dans les 180 jours suivant la fin du contrat, vous vendez à une personne qui s'était intéressée à la propriété pendant le contrat. Ce n'est pas le cas si vous avez signé de bonne foi un contrat exclusif avec un autre courtier." },
  { title: "Vous empêchez la vente", text: "Par exemple, vous bloquez les visites ou vous restez injoignable pour recevoir une offre." },
];

const FraisCourtagePage = () => (
  <>
    <PageMeta
      title="Frais de courtage immobilier au Québec : calcul et taxes"
      description="Comment se calcule la commission d'un courtier au Québec : sur quel prix s'applique le pourcentage et dans quels cas elle est due, avec un exemple de taxes." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Frais de courtage immobilier au Québec : comment la commission se calcule</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Sur quel prix s'applique le pourcentage et à quel moment la commission devient due, selon le contrat de courtage de l'OACIQ.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Le calcul" title="Sur quel prix s'applique le pourcentage?" />
      <p className="prose-body mt-5">
        Au Québec, aucune loi ne fixe la commission du courtier, et l'OACIQ non plus. Elle se négocie avec votre courtier, puis s'inscrit au contrat de courtage avant la mise en marché. Le plus souvent, c'est un pourcentage du prix de vente.
      </p>
      <p className="prose-body mt-4">
        Ce pourcentage s'applique au <strong>prix que vous acceptez</strong>, pas au prix affiché. L'OACIQ donne cet exemple : pour une maison affichée à 500 000 $ et vendue 495 000 $, la commission se calcule sur 495 000 $.
      </p>
      <p className="prose-body mt-4">
        D'autres formules existent. Le contrat peut prévoir un montant fixe, peu importe le prix obtenu. Un taux horaire ou un autre mode se note dans une annexe au contrat, l'annexe RC.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Les taxes" title="Combien ajoutent la TPS et la TVQ?" />
      <p className="prose-body mt-5">
        La commission est taxable : la TPS (5 %) et la TVQ (9,975 %) s'ajoutent au montant convenu, soit 14,975 % de plus.
      </p>
      <div className="mt-5 rounded-xl border border-border/40 bg-card p-5">
        <p className="text-[0.9375rem] font-semibold">Exemple de calcul</p>
        <p className="mt-2 text-[0.9375rem] leading-[1.6]">
          Sur une commission de 10 000 $, la TPS donne 500 $ et la TVQ 997,50 $. Le total payé est donc de 11 497,50 $.
        </p>
        <p className="mt-2 text-[0.8125rem] leading-[1.6] text-muted-foreground">
          Ce montant sert seulement à montrer le calcul des taxes. Votre commission réelle dépend de l'entente avec votre courtier.
        </p>
      </div>
      <p className="prose-body mt-5">
        Vérifiez au contrat si le montant est inscrit avant ou après taxes. Pour savoir ce que la vente vous coûtera au total, avec les autres frais du vendeur, lisez{" "}
        <Link to="/combien-coute-un-courtier-immobilier-au-quebec/" className="underline underline-offset-2">combien coûte un courtier immobilier</Link>.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading overline="Le moment" title="Quand la commission devient-elle due?" />
      <p className="prose-body mt-5">
        Le contrat de courtage exclusif de l'OACIQ prévoit quatre situations, à sa clause 7.1.
      </p>
      <div className="mt-5 space-y-3">
        {cas.map((item) => (
          <div key={item.title} className="rounded-xl border border-border/40 bg-card p-4">
            <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
            <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="prose-body mt-5">
        Dans les faits, la commission est payée après la signature de l'acte de vente chez le notaire, à même le produit de la vente. Si l'acheteur a son propre courtier, le courtier du vendeur partage sa rétribution avec lui.
      </p>
      <p className="text-[0.8125rem] text-muted-foreground pt-3">
        Source : OACIQ, rétribution payable par le vendeur (contrat de courtage exclusif, vente).
      </p>
    </ContentBlock>

    <InlineCTA
      text="Si vous le souhaitez, je vous prépare un estimé de ce qui vous resterait dans vos poches après la vente."
      buttonLabel="Demander un estimé →"
      href="/contact-yanis/"
    />

    <RelatedPages
      overline="À lire aussi"
      title="Pages connexes"
      pages={[
        { title: "Combien coûte un courtier?", text: "Pour vendre ou pour acheter, et ce qui vous reste.", href: "/combien-coute-un-courtier-immobilier-au-quebec/" },
        { title: "Courtier ou vendre seul?", text: "Les avantages et les risques comparés.", href: "/courtier-immobilier-ou-vendre-soi-meme/" },
        { title: "Comment choisir un courtier?", text: "Les critères à comparer.", href: "/comment-choisir-un-courtier-immobilier/" },
        { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Envie d'y voir clair?"
      text="Avant toute signature, je vous explique ma rémunération et les autres frais. C'est sans engagement."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Clarté et transparence, dès le premier appel."
    />

    <FAQSection items={faq} />
  </>
);

export default FraisCourtagePage;
