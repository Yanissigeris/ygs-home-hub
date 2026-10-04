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
  { q: "Quels sont les frais de courtage immobilier au Québec?", a: "Les frais de courtage prennent généralement la forme d'un pourcentage du prix de vente, convenu entre le vendeur et le courtier avant la mise en marché. Aucun tarif n'est réglementé. La TPS et la TVQ s'ajoutent généralement à ce montant." },
  { q: "La commission est-elle réglementée?", a: "Non. L'OACIQ ne fixe pas de tarif. La rémunération est librement négociée entre les parties dans le contrat de courtage." },
  { q: "Que couvrent les frais de courtage?", a: "Évaluation du prix, mise en marché, photos, visites, négociation, coordination avec le notaire et suivi de la transaction complète. Le détail varie d'un courtier à l'autre." },
  { q: "Y a-t-il des frais supplémentaires?", a: "En plus de la commission, le vendeur prévoit habituellement un certificat de localisation à jour et les frais de quittance hypothécaire chez le notaire. L'acheteur, lui, paie les droits de mutation (taxe de bienvenue). Votre courtier devrait vous présenter ces frais clairement." },
  { q: "Qui paie les frais de courtage?", a: "En pratique, c'est le vendeur qui assume la rémunération du courtier inscripteur. L'acheteur ne paie généralement pas de commission directement." },
  { q: "Comment comparer les frais entre courtiers?", a: "Ne comparez pas uniquement le pourcentage. Évaluez l'ensemble : services offerts, expérience locale, stratégie de mise en marché et résultats passés." },
  { q: "Un courtier moins cher est-il un meilleur choix?", a: "Pas nécessairement. Ce qui compte, c'est votre produit net : le prix obtenu moins tous les frais. Le délai de vente compte aussi." },
  { q: "Est-ce que les frais varient selon le type de propriété?", a: "Oui, un plex, un condo ou une maison unifamiliale peuvent impliquer des niveaux de complexité différents, ce qui peut influencer l'entente." },
];

const FraisCourtagePage = () => (
  <>
    <PageMeta
      title="Frais de courtage immobilier au Québec · Guide"
      description="Comprenez les frais de courtage immobilier au Québec : commission, services inclus, facteurs et ce que ça signifie pour votre vente à Gatineau." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Frais de courtage immobilier au Québec</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Combien coûte un courtier? Quels services sont inclus? Ce guide explique les frais de courtage au Québec, en termes clairs.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Comprendre" title="Comment sont calculés les frais de courtage?" />
      <p className="prose-body mt-5">
        Au Québec, la rémunération du courtier est convenue <strong>avant la mise en marché</strong> dans le contrat de courtage. Elle prend généralement la forme d'un pourcentage du prix de vente final. L'OACIQ n'impose aucun barème. La TPS (5 %) et la TVQ (9,975 %) s'ajoutent généralement à la rémunération.
      </p>
      <p className="prose-body mt-4">
        Cette rémunération couvre habituellement les services du courtier : analyse de la valeur marchande, stratégie de prix, marketing, visites, négociation et coordination jusqu'à la signature chez le notaire.
      </p>
    </ContentBlock>

    <ContentBlock narrow background="alt">
      <SectionHeading overline="En pratique" title="Les autres frais à prévoir" />
      <p className="prose-body mt-5">
        En plus de la commission, une vente immobilière implique d'autres frais : certificat de localisation, quittance hypothécaire chez le notaire et, dans certains cas, ajustements de taxes. Un bon courtier vous présente <strong>l'ensemble des coûts</strong> dès le départ pour éviter les surprises.
      </p>
      <p className="prose-body mt-4">
        Votre courtier devrait aussi vous aider à calculer votre <strong>produit net de vente</strong>, ce qui reste dans vos poches une fois tous les frais déduits. C'est le chiffre qui compte pour prendre une décision éclairée.
      </p>
    </ContentBlock>

    <InlineCTA
      text="Première étape : connaître la valeur marchande de votre propriété. C'est gratuit."
      buttonLabel="Évaluation gratuite →"
      href="/evaluation-gratuite-gatineau/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Conseils" title="Comment évaluer si les frais sont justes?" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Comparez les services", text: "Photos, visite virtuelle, publicité ciblée, plans : regardez ce que le pourcentage comprend." },
          { title: "Vérifiez l'expérience locale", text: "Un courtier qui connaît Gatineau et l'Outaouais appuie son prix sur des ventes comparables du secteur." },
          { title: "Demandez le produit net", text: "Un courtier transparent vous montrera le calcul complet avant de signer." },
          { title: "Évaluez la stratégie", text: "Demandez comment le courtier compte établir le prix et le défendre en négociation." },
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
        { title: "Combien coûte un courtier?", text: "Guide complet sur la rémunération.", href: "/combien-coute-un-courtier-immobilier-au-quebec/" },
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
