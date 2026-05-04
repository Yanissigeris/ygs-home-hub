import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-combien-courtier.webp";

const faq = [
  { q: "Combien coûte un courtier immobilier au Québec?", a: "Au Québec, la rémunération du courtier est généralement un pourcentage du prix de vente, convenu avant la mise en marché. Il n'y a pas de tarif fixe — chaque entente est négociée entre le vendeur et le courtier." },
  { q: "Qui paie la commission du courtier immobilier?", a: "En pratique, c'est le vendeur qui assume la rémunération du courtier inscripteur. L'acheteur ne paie généralement pas de commission directement." },
  { q: "Est-ce que la commission est négociable?", a: "Oui. La commission n'est pas réglementée par l'OACIQ — elle est convenue librement entre le vendeur et son courtier avant de signer le contrat de courtage." },
  { q: "Quels services sont inclus dans la commission?", a: "Évaluation du prix, stratégie de mise en marché, photos, visites, négociation, coordination jusqu'au notaire. Le détail varie selon le courtier — c'est une question importante à poser." },
  { q: "Un courtier coûte-t-il plus cher que vendre seul?", a: "Un courtier représente un coût, mais il peut aussi maximiser votre prix de vente grâce à une meilleure exposition, une stratégie de prix réaliste et une négociation professionnelle." },
  { q: "Y a-t-il des frais cachés avec un courtier?", a: "Non — tout doit être clair dans le contrat de courtage. Un bon courtier vous explique l'ensemble des frais (commission, notaire, certificat de localisation) avant de commencer." },
  { q: "Combien coûte un courtier pour acheter?", a: "En général, l'acheteur ne paie pas de commission directement. La rémunération du courtier collaborateur est prévue dans l'entente du côté vendeur." },
  { q: "Comment savoir si la commission est juste?", a: "Comparez les services offerts, l'expérience locale et la stratégie proposée. Le prix le plus bas n'est pas toujours le meilleur choix — l'important, c'est le résultat net pour vous." },
];

const CombienCouteCourtierPage = () => (
  <>
    <PageMeta
      title="Combien coûte un courtier immobilier au Québec?"
      description="Comprenez comment fonctionne la rémunération d'un courtier immobilier au Québec. Commission, services inclus et ce que ça signifie pour votre vente." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={{ "--hero-bg-image" as never: `url(${heroImg})` }}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="label-overline mb-4 text-primary-foreground/25">Guide · Vendre au Québec</p>
          <h1 className="text-primary-foreground">Combien coûte un courtier immobilier au Québec?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            La rémunération d'un courtier est l'une des premières questions que se posent les vendeurs. Voici comment ça fonctionne, simplement.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Comprendre" title="Comment fonctionne la commission?" />
      <p className="prose-body mt-5">
        Au Québec, la rémunération du courtier immobilier est convenue entre le vendeur et le courtier <strong>avant la mise en marché</strong>. Elle prend généralement la forme d'un pourcentage du prix de vente final. Il n'y a pas de tarif fixe imposé — chaque entente est personnalisée.
      </p>
      <p className="prose-body mt-4">
        Cette commission couvre l'ensemble des services : analyse de la valeur de votre propriété, stratégie de prix, photos professionnelles, mise en marché, visites, négociation avec les acheteurs et coordination jusqu'à la signature chez le notaire.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="En pratique" title="Ce que ça signifie pour vous" />
      <p className="prose-body mt-5">
        Avant de signer un contrat de courtage, un bon courtier vous expliquera clairement sa rémunération, les services inclus et les autres frais à prévoir (notaire, certificat de localisation, taxe de bienvenue pour l'acheteur). Tout est transparent dès le départ.
      </p>
      <p className="prose-body mt-4">
        La question n'est pas seulement « combien ça coûte? » mais plutôt « quel sera le résultat net pour moi? ». Un courtier local expérimenté peut vous aider à maximiser votre prix de vente, réduire votre temps sur le marché et éviter des erreurs coûteuses.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Première étape : connaître la valeur de votre propriété — c'est gratuit et sans engagement."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Facteurs" title="Qu'est-ce qui influence le coût?" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Type de propriété", text: "Maison unifamiliale, condo, plex — la complexité de la transaction peut varier." },
          { title: "Marché local", text: "Les conditions du marché en Outaouais influencent la stratégie et le temps de vente." },
          { title: "Services offerts", text: "Photos professionnelles, visites virtuelles, marketing ciblé — le niveau de service varie." },
          { title: "Expérience du courtier", text: "Un courtier expérimenté localement peut faire une différence significative sur le prix final." },
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
        { title: "Comment choisir un courtier?", text: "Les critères essentiels pour bien choisir.", href: "/comment-choisir-un-courtier-immobilier" },
        { title: "Vérifier un courtier (OACIQ)", text: "Comment vérifier qu'un courtier est en règle.", href: "/verifier-un-courtier-immobilier-oaciq" },
        { title: "Vendre à Gatineau", text: "Stratégie et accompagnement pour vendeurs.", href: "/vendre-ma-maison-gatineau" },
        { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Vous voulez comprendre vos options?"
      text="Je vous explique tout clairement — commission, services, stratégie — avant même de commencer."
      buttons={[
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" },
        { label: "Parler à Yanis", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Transparent, clair et sans engagement."
    />

    <FAQSection items={faq} />
  </>
);

export default CombienCouteCourtierPage;
