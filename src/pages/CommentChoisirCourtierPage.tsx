import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-comment-choisir.webp";
import { heroBgStyle } from "@/lib/hero-backgrounds";

const checklist = [
  { title: "Connaissance locale", text: "Le courtier connaît-il votre quartier et les ventes récentes près de chez vous?" },
  { title: "Communication claire", text: "Est-il facile à joindre et vous répond-il clairement? Vous sentez-vous écouté?" },
  { title: "Stratégie de prix", text: "Propose-t-il un prix appuyé sur des ventes comparables, ou un chiffre gonflé pour obtenir votre contrat?" },
  { title: "Plan de mise en marché", text: "A-t-il un plan concret pour votre propriété : photos, visite virtuelle, diffusion en ligne, publicité ciblée?" },
  { title: "Négociation", text: "A-t-il l'expérience pour défendre vos intérêts face aux acheteurs et à leurs courtiers?" },
  { title: "Transparence", text: "Vous explique-t-il clairement sa commission, les frais, le processus et ce à quoi vous attendre?" },
  { title: "Résultats vérifiables", text: "Peut-il vous montrer des ventes récentes et des témoignages de clients?" },
  { title: "Confiance personnelle", text: "Est-ce quelqu'un avec qui vous êtes à l'aise pour une transaction de cette importance?" },
];

const faq = [
  { q: "Comment choisir un bon courtier immobilier?", a: "Comparez sa connaissance du secteur, sa stratégie de prix, sa façon de communiquer et sa transparence sur les frais. Retenez celui qui vous présente un plan clair, appuyé sur des ventes comparables." },
  { q: "Faut-il toujours choisir le courtier qui propose le prix le plus haut?", a: "Non. Un prix gonflé pour obtenir votre contrat peut faire stagner la propriété sur le marché et mener à des baisses de prix. Demandez plutôt un prix appuyé sur les ventes comparables récentes de votre secteur." },
  { q: "Combien de courtiers devrais-je rencontrer?", a: "En rencontrer deux ou trois est une bonne pratique. Comparez leur stratégie et leur transparence, en plus de la commission demandée." },
  { q: "Comment vérifier qu'un courtier est en règle?", a: "Consultez le registre des titulaires de permis de l'OACIQ (Organisme d'autoréglementation du courtage immobilier du Québec) sur oaciq.com. Il indique si le permis est valide, suspendu ou assorti de conditions. Le registre indique aussi si le courtier a fait l'objet de mesures disciplinaires. Le texte des décisions est publié gratuitement sur citoyens.soquij.qc.ca." },
  { q: "Un courtier local, est-ce un avantage?", a: "Souvent, oui. Un courtier qui connaît votre quartier comprend les ventes comparables et les attentes des acheteurs du secteur. Cela l'aide à fixer un prix juste et à le défendre en négociation." },
  { q: "Quelles questions poser à un courtier avant de signer?", a: "Demandez : quelle est votre stratégie de prix? Comment allez-vous mettre ma propriété en marché? Quelle est votre commission? Comment communiquez-vous avec vos clients? Montrez-moi des résultats récents." },
  { q: "Est-ce que le courtier le moins cher est le meilleur choix?", a: "Pas nécessairement. Ce qui compte, c'est votre résultat net : un prix de vente plus élevé peut compenser une rétribution un peu plus haute. Celle-ci se négocie avant la signature du contrat de courtage." },
  { q: "Puis-je changer de courtier si ça ne fonctionne pas?", a: "Le contrat de courtage précise sa durée et les conditions pour y mettre fin. Si vous êtes un particulier et que l'immeuble résidentiel compte moins de 5 logements, vous pouvez aussi l'annuler sans frais dans les 3 jours suivant la réception de votre copie signée. Lisez cette clause avec le courtier avant de signer. En cas de problème, parlez-en d'abord avec lui, puis avec le dirigeant de l'agence au besoin." },
];

const CommentChoisirCourtierPage = () => (
  <>
    <PageMeta
      title="Comment choisir un courtier immobilier | Guide"
      description="Les critères pour bien choisir votre courtier immobilier au Québec. Checklist pratique, questions à poser et conseils pour prendre la bonne décision." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Comment choisir un courtier immobilier?</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Le bon courtier vous donne un plan clair et un prix appuyé sur des ventes comparables. Ce guide vous aide à comparer les courtiers sur des critères concrets.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Le point de départ" title="Ce qui compte" />
      <p className="prose-body mt-5">
        Choisir un courtier immobilier est une décision importante. Vous lui confiez la vente ou l'achat d'une propriété, souvent votre plus gros actif. Au Québec, tous les courtiers sont encadrés par l'OACIQ. L'expérience et la façon de travailler, elles, varient d'un courtier à l'autre.
      </p>
      <p className="prose-body mt-4">
        Deux pièges à éviter : choisir uniquement selon la commission, ou retenir le courtier qui annonce le prix le plus haut. Les 8 critères ci-dessous vous aident à comparer sur ce qui compte pour votre résultat net.
      </p>
    </ContentBlock>

    <section className="section-padding bg-[var(--cream)]">
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
      buttonLabel="Parler à Yanis →"
      href="/contact-yanis/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="En pratique" title="La question clé à se poser" />
      <p className="prose-body mt-5">
        Au-delà de ces critères, une question reste : <strong>est-ce que je fais confiance à cette personne pour défendre mes intérêts?</strong> Un bon courtier vous écoute et vous donne des réponses franches, même quand elles ne sont pas celles que vous espériez.
      </p>
    </ContentBlock>

    <RelatedPages
      overline="À lire aussi"
      title="Pages connexes"
      pages={[
        { title: "Combien coûte un courtier?", text: "Comment fonctionne la commission au Québec.", href: "/combien-coute-un-courtier-immobilier-au-quebec/" },
        { title: "Vérifier un courtier (OACIQ)", text: "Comment confirmer qu'un courtier est en règle.", href: "/verifier-un-courtier-immobilier-oaciq/" },
        { title: "Vendre à Gatineau", text: "Stratégie et accompagnement pour vendeurs.", href: "/vendre-ma-maison-gatineau/" },
        { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Vous voulez rencontrer un courtier local?"
      text="On discute de votre projet et de vos options, sans engagement."
      buttons={[
        { label: "Parler à Yanis", href: "/contact-yanis/" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/", variant: "outline" },
      ]}
      trustLine="Plus de 9 ans en Outaouais · Transparent dès le départ."
    />

    <FAQSection items={faq} />
  </>
);

export default CommentChoisirCourtierPage;
