import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import heroImg from "@/assets/hero-combien-courtier.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "Combien coûte un courtier immobilier au Québec?", a: "Il n'y a pas de tarif fixe. Le vendeur négocie la commission avec son courtier, puis elle s'inscrit au contrat de courtage. Pour l'acheteur, il n'y a souvent rien à payer directement." },
  { q: "Qui paie le courtier immobilier, le vendeur ou l'acheteur?", a: "Le vendeur paie la commission de son courtier, à même le produit de la vente. Celui de l'acheteur est le plus souvent payé à même cette commission." },
  { q: "Est-ce que la commission est négociable?", a: "Oui. L'OACIQ ne fixe aucun taux de commission. Le montant est convenu librement entre le vendeur et son courtier, puis inscrit au contrat de courtage." },
  { q: "Quels services sont inclus dans la commission?", a: "Habituellement, l'évaluation du prix, la mise en marché, les photos, les visites et la négociation, jusqu'à la signature chez le notaire. Le détail varie d'un courtier à l'autre. Demandez la liste précise avant de signer." },
  { q: "Combien coûte un courtier pour acheter une maison?", a: "Dans bien des cas, vous n'avez rien à payer. Si la rétribution prévue au contrat du vendeur est égale ou supérieure à celle de votre contrat de courtage achat, vous n'avez rien à payer. Sinon, la rétribution peut être financée à même votre hypothèque." },
  { q: "Quels autres frais paie le vendeur?", a: "Prévoyez un certificat de localisation à jour et les frais de quittance hypothécaire chez le notaire. Si vous remboursez votre hypothèque avant terme, votre prêteur peut aussi exiger une pénalité." },
  { q: "Un courtier coûte-t-il plus cher que vendre seul?", a: "Vendre seul évite la commission. Avec un courtier, vous payez pour l'inscription sur Centris, l'analyse des ventes comparables, la négociation et le suivi jusqu'au notaire. Comparez le montant net probable des deux options." },
  { q: "Pouvez-vous estimer ce qui me restera après la vente?", a: "Oui. Si vous le souhaitez, je vous prépare un estimé de ce qui vous resterait dans vos poches après la commission et les autres frais." },
];

const CombienCouteCourtierPage = () => (
  <>
    <PageMeta
      title="Combien coûte un courtier immobilier au Québec?"
      description="Ce que coûte un courtier immobilier au Québec pour vendre ou pour acheter, les autres frais du vendeur et ce qui vous reste après la vente." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <div
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Combien coûte un courtier immobilier au Québec, pour vendre ou acheter?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Ce que vous payez au total, selon que vous vendez ou que vous achetez, et ce qui vous reste après la vente.
          </p>
        </div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="En rencontre" title="Les deux questions qu'on me pose en premier" />
      <p className="prose-body mt-5">
        Quand je rencontre un vendeur, la première question, c'est sûr, porte sur mon taux de commission. Ensuite vient ce qui est inclus. Les deux réponses comptent, mais elles ne disent pas combien il vous restera.
      </p>
      <p className="prose-body mt-4">
        Si vous le souhaitez, je vous prépare donc un estimé de ce qui vous resterait dans vos poches après la vente. Vous voyez ce chiffre avant de signer quoi que ce soit.
      </p>
      <p className="text-[0.8125rem] text-muted-foreground pt-3">
        <Link to="/contact-yanis/" className="underline underline-offset-2 hover:text-foreground">Yanis Gauthier-Sigeris</Link>, courtier immobilier · novembre 2026
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Pour vendre" title="Ce que coûte un courtier quand vous vendez" />
      <p className="prose-body mt-5">
        Le vendeur paie la commission de son courtier. Son montant se négocie et s'inscrit au contrat de courtage, avec les taxes en plus. Le détail du calcul se trouve dans le guide des{" "}
        <Link to="/frais-de-courtage-immobilier-quebec/" className="underline underline-offset-2">frais de courtage immobilier</Link>.
      </p>
      <p className="prose-body mt-4">
        Ce qui est inclus varie d'un courtier à l'autre. On y trouve habituellement l'évaluation du prix, la mise en marché sur Centris, les photos, les visites et la négociation, jusqu'à la signature chez le notaire. Demandez la liste précise avant de signer.
      </p>
      <h3 className="mt-6 text-[1.0625rem] font-semibold">Les autres frais du vendeur</h3>
      <p className="prose-body mt-2">
        La commission n'est pas le seul coût d'une vente. Prévoyez aussi un certificat de localisation à jour et les frais de quittance hypothécaire chez le notaire. Si vous remboursez votre hypothèque avant terme, votre prêteur peut exiger une pénalité.
      </p>
    </ContentBlock>

    <ContentBlock narrow>
      <SectionHeading overline="Pour acheter" title="Ce que coûte un courtier quand vous achetez" />
      <p className="prose-body mt-5">
        Le plus souvent, l'acheteur ne paie rien directement. Son courtier est payé à même la rétribution prévue au contrat du vendeur.
      </p>
      <p className="prose-body mt-4">
        Si vous signez un contrat de courtage achat, lisez sa clause de rétribution. Quand la rétribution prévue du côté vendeur est égale ou supérieure à celle de votre contrat, vous n'avez rien à payer. Si un montant reste à payer, il peut être financé à même votre hypothèque.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="Vendre seul?" title="Courtier ou vendre seul : comparez ce qui vous reste" />
      <p className="prose-body mt-5">
        Vendre seul évite la commission. Le prix obtenu et le temps de vente peuvent toutefois changer. La bonne comparaison, c'est le montant net des deux options une fois tous les frais payés. Les deux approches sont comparées dans{" "}
        <Link to="/courtier-immobilier-ou-vendre-soi-meme/" className="underline underline-offset-2">courtier ou vendre soi-même</Link>.
      </p>
      <div className="mt-5 rounded-xl border border-border/40 bg-card p-4">
        <h3 className="text-[0.9375rem] font-semibold">Vous cherchiez un courtier hypothécaire?</h3>
        <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">
          C'est un autre métier : il s'occupe de votre prêt, pas de la vente ou de l'achat de la propriété. Cette page parle du courtier immobilier.
        </p>
      </div>
    </ContentBlock>

    <InlineCTA
      text="Première étape : connaître la valeur de votre propriété. C'est gratuit et sans engagement."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau/"
    />

    <RelatedPages
      overline="À lire aussi"
      title="Pages connexes"
      pages={[
        { title: "Frais de courtage", text: "Le calcul de la commission et les taxes.", href: "/frais-de-courtage-immobilier-quebec/" },
        { title: "Comment choisir un courtier?", text: "Les critères à comparer avant de signer.", href: "/comment-choisir-un-courtier-immobilier/" },
        { title: "Vérifier un courtier (OACIQ)", text: "Comment vérifier qu'un courtier est en règle.", href: "/verifier-un-courtier-immobilier-oaciq/" },
        { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Vous voulez comprendre vos options?"
      text="Avant toute signature, je vous explique ma rémunération et les services inclus. Je vous donne les chiffres et les options, vous décidez."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/" },
        { label: "Parler à Yanis", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="Réponses claires, sans engagement."
    />

    <FAQSection items={faq} />
  </>
);

export default CombienCouteCourtierPage;
