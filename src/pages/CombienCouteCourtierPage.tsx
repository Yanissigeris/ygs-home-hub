import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-combien-courtier.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "Combien coûte un courtier immobilier au Québec?", a: "Il n'y a pas de tarif fixe. La rémunération est négociée entre le vendeur et le courtier, puis inscrite au contrat de courtage avant la mise en marché. Elle prend généralement la forme d'un pourcentage du prix de vente." },
  { q: "Qui paie la commission du courtier immobilier?", a: "En pratique, c'est le vendeur qui paie la rémunération du courtier inscripteur, à même le produit de la vente. L'acheteur ne paie généralement pas de commission directement." },
  { q: "Est-ce que la commission est négociable?", a: "Oui. L'OACIQ ne fixe aucun taux de commission. Le montant est convenu librement entre le vendeur et son courtier, puis inscrit au contrat de courtage." },
  { q: "Quels services sont inclus dans la commission?", a: "Habituellement : évaluation du prix, mise en marché, photos, visites, négociation et coordination jusqu'au notaire. Le détail varie d'un courtier à l'autre. Demandez la liste précise avant de signer." },
  { q: "Un courtier coûte-t-il plus cher que vendre seul?", a: "Vendre seul évite la commission. Avec un courtier, vous payez pour l'inscription sur Centris, l'analyse des ventes comparables, la négociation et le suivi jusqu'au notaire. Comparez le produit net probable des deux options." },
  { q: "Y a-t-il des frais cachés avec un courtier?", a: "Tout ce que vous payez au courtier doit être prévu au contrat de courtage. Un courtier sérieux vous présente aussi les autres frais avant de commencer (taxes sur la commission, certificat de localisation, quittance hypothécaire chez le notaire, pénalité hypothécaire s'il y a lieu)." },
  { q: "La commission est-elle taxable?", a: "Oui, en général. La TPS (5 %) et la TVQ (9,975 %) s'ajoutent à la rémunération du courtier, soit 14,975 % au total. Vérifiez au contrat de courtage si le montant convenu est indiqué avant ou après taxes." },
  { q: "Combien coûte un courtier pour acheter?", a: "En général, l'acheteur ne paie pas de commission directement. Le plus souvent, son courtier est payé à même la rémunération prévue du côté vendeur. Si vous signez un contrat de courtage achat, lisez d'abord sa clause sur la rétribution." },
  { q: "Comment savoir si la commission est juste?", a: "Comparez les services inclus et le plan proposé pour votre propriété. Le taux le plus bas ne donne pas toujours le produit net le plus élevé. Demandez une estimation écrite de ce qui vous restera après les frais." },
];

const CombienCouteCourtierPage = () => (
  <>
    <PageMeta
      title="Combien coûte un courtier immobilier au Québec?"
      description="Comprenez comment fonctionne la rémunération d'un courtier immobilier au Québec. Commission, services inclus et ce que ça signifie pour votre vente." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Combien coûte un courtier immobilier au Québec?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            La rémunération d'un courtier est l'une des premières questions que se posent les vendeurs. Ce guide explique comment elle fonctionne au Québec, en termes simples.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Comprendre" title="Comment fonctionne la commission?" />
      <p className="prose-body mt-5">
        Au Québec, la rémunération du courtier immobilier est convenue entre le vendeur et le courtier <strong>avant la mise en marché</strong>. Elle prend généralement la forme d'un pourcentage du prix de vente final. Aucun tarif n'est imposé. Le montant est négocié puis inscrit au contrat de courtage, et la TPS et la TVQ s'y ajoutent généralement.
      </p>
      <p className="prose-body mt-4">
        Elle couvre habituellement les services du courtier : analyse de la valeur de votre propriété, stratégie de prix, photos, mise en marché, visites, négociation avec les acheteurs et coordination jusqu'à la signature chez le notaire.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="En pratique" title="Ce que ça signifie pour vous" />
      <p className="prose-body mt-5">
        Avant de signer un contrat de courtage, demandez au courtier de vous expliquer sa rémunération et les services inclus. Demandez aussi la liste des autres frais à prévoir, comme le certificat de localisation et la quittance hypothécaire chez le notaire.
      </p>
      <p className="prose-body mt-4">
        La bonne question : combien vous restera-t-il après la vente? Un courtier qui connaît votre secteur peut établir un prix appuyé sur les ventes comparables et défendre ce prix en négociation.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Première étape : connaître la valeur de votre propriété. C'est gratuit et sans engagement."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Facteurs" title="Qu'est-ce qui influence le coût?" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Type de propriété", text: "Une maison unifamiliale, un condo ou un plex ne demandent pas le même travail. La complexité du dossier peut influencer l'entente." },
          { title: "Marché local", text: "Les conditions du marché en Outaouais influencent la stratégie et le temps de vente." },
          { title: "Services offerts", text: "Photos professionnelles, visite virtuelle, plans et publicité ciblée : le niveau de service varie d'un courtier à l'autre." },
          { title: "Expérience du courtier", text: "Un courtier qui connaît bien votre secteur peut mieux appuyer votre prix sur des ventes comparables." },
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
        { title: "Comment choisir un courtier?", text: "Les critères à comparer avant de signer.", href: "/comment-choisir-un-courtier-immobilier/" },
        { title: "Vérifier un courtier (OACIQ)", text: "Comment vérifier qu'un courtier est en règle.", href: "/verifier-un-courtier-immobilier-oaciq/" },
        { title: "Vendre à Gatineau", text: "Stratégie et accompagnement pour vendeurs.", href: "/vendre-ma-maison-gatineau/" },
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
