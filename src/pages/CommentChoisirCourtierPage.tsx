import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const checklist = [
  { title: "Connaissance locale", text: "Le courtier connaît-il votre quartier, les ventes récentes dans votre rue et les particularités du marché local?" },
  { title: "Communication claire", text: "Est-il facile à joindre? Vous répond-il rapidement et clairement? Vous sentez-vous écouté?" },
  { title: "Stratégie de prix", text: "Propose-t-il un prix basé sur des comparables réels ou un chiffre gonflé juste pour obtenir votre contrat?" },
  { title: "Plan de mise en marché", text: "Photos professionnelles, visibilité en ligne, ciblage des bons acheteurs — a-t-il un plan concret?" },
  { title: "Négociation", text: "A-t-il l'expérience pour défendre vos intérêts face aux acheteurs et à leurs courtiers?" },
  { title: "Transparence", text: "Vous explique-t-il clairement sa commission, les frais, le processus et ce à quoi vous attendre?" },
  { title: "Résultats vérifiables", text: "Peut-il montrer des témoignages, des ventes récentes et un historique de résultats concrets?" },
  { title: "Confiance personnelle", text: "Au-delà des compétences, est-ce quelqu'un avec qui vous vous sentez en confiance pour une transaction aussi importante?" },
];

const faq = [
  { q: "Comment choisir un bon courtier immobilier?", a: "Évaluez sa connaissance locale, sa stratégie de prix, sa communication, son plan de mise en marché et sa transparence. Le bon courtier est celui qui vous donne un plan clair, pas celui qui promet le prix le plus élevé." },
  { q: "Faut-il toujours choisir le courtier qui propose le prix le plus haut?", a: "Non — un prix gonflé pour obtenir votre contrat peut vous coûter cher. Un bon courtier vous donne un prix réaliste basé sur les ventes comparables récentes dans votre secteur." },
  { q: "Combien de courtiers devrais-je rencontrer?", a: "Rencontrer 2-3 courtiers est une bonne pratique. Comparez leurs stratégies, leur connaissance locale et leur transparence — pas seulement le prix proposé." },
  { q: "Comment vérifier qu'un courtier est en règle?", a: "Consultez le registre de l'OACIQ (Organisme d'autoréglementation du courtage immobilier du Québec) pour confirmer que son permis est valide et qu'il n'a pas de mesures disciplinaires." },
  { q: "Un courtier local est-il vraiment mieux?", a: "Oui — un courtier qui connaît votre quartier comprend les comparables, les tendances du marché local et les attentes des acheteurs. C'est un avantage concret pour le résultat." },
  { q: "Quelles questions poser à un courtier avant de signer?", a: "Demandez : quelle est votre stratégie de prix? Comment allez-vous mettre ma propriété en marché? Quelle est votre commission? Comment communiquez-vous avec vos clients? Montrez-moi des résultats récents." },
  { q: "Est-ce que le courtier le moins cher est le meilleur choix?", a: "Pas nécessairement. L'important est le résultat net : un courtier qui obtient un meilleur prix de vente grâce à une bonne stratégie peut vous rapporter plus, même avec une commission standard." },
  { q: "Puis-je changer de courtier si ça ne fonctionne pas?", a: "Le contrat de courtage a une durée définie. Discutez des conditions de résiliation dès le départ pour être clair sur vos options." },
];

const CommentChoisirCourtierPage = () => (
  <>
    <PageMeta
      title="Comment choisir un courtier immobilier | Guide"
      description="Les critères essentiels pour bien choisir votre courtier immobilier au Québec. Checklist pratique, questions à poser et conseils pour prendre la bonne décision."
    />

    <section className="hero-gradient relative overflow-hidden">
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="label-overline mb-4 text-primary-foreground/25">Guide · Choisir un courtier</p>
          <h1 className="text-primary-foreground">Comment choisir un courtier immobilier?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            Le bon courtier n'est pas celui qui promet le prix le plus haut. C'est celui qui vous donne un plan clair, une stratégie réaliste et un accompagnement transparent du début à la fin.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="L'essentiel" title="Ce qui compte vraiment" />
      <p className="prose-body mt-5">
        Choisir un courtier immobilier est une décision importante — vous lui confiez la vente ou l'achat de l'un de vos actifs les plus précieux. Au Québec, tous les courtiers sont encadrés par l'OACIQ, mais l'expérience, la stratégie et la communication varient énormément d'un courtier à l'autre.
      </p>
      <p className="prose-body mt-4">
        Voici les critères concrets à évaluer avant de faire votre choix.
      </p>
    </ContentBlock>

    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-[44rem]">
        <SectionHeading overline="Checklist" title="8 critères pour choisir votre courtier" centered />
        <div className="mt-8 space-y-3">
          {checklist.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-xl border border-border/40 bg-card p-4 flex gap-3.5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h3 className="text-[0.9375rem] font-semibold">{item.title}</h3>
                <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <InlineCTA
      text="Vous cherchez un courtier local en Outaouais? Parlons de votre projet."
      buttonLabel="Réserver un appel →"
      href="/contact-yanis"
    />

    <ContentBlock narrow>
      <SectionHeading overline="En pratique" title="La question clé à se poser" />
      <p className="prose-body mt-5">
        Au-delà de la checklist, la question fondamentale est : <strong>est-ce que je fais confiance à cette personne pour défendre mes intérêts?</strong> Un bon courtier vous écoute, vous donne des réponses honnêtes (même si elles ne sont pas toujours ce que vous voulez entendre) et vous accompagne avec clarté tout au long du processus.
      </p>
    </ContentBlock>

    <RelatedPages
      overline="Explorer"
      title="Pages connexes"
      pages={[
        { title: "Combien coûte un courtier?", text: "Comment fonctionne la commission au Québec.", href: "/combien-coute-un-courtier-immobilier-au-quebec" },
        { title: "Vérifier un courtier (OACIQ)", text: "Comment confirmer qu'un courtier est en règle.", href: "/verifier-un-courtier-immobilier-oaciq" },
        { title: "Vendre à Gatineau", text: "Stratégie et accompagnement pour vendeurs.", href: "/vendre-ma-maison-gatineau" },
        { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Vous voulez rencontrer un courtier local?"
      text="On discute de votre projet, de vos questions et de vos options — sans engagement."
      buttons={[
        { label: "Parler à Yanis", href: "/contact-yanis" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Près de 9 ans en Outaouais · Transparent dès le départ."
    />

    <FAQSection items={faq} />
  </>
);

export default CommentChoisirCourtierPage;
