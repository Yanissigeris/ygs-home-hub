import PageMeta from "@/components/PageMeta";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import RelatedPages from "@/components/RelatedPages";
import InlineCTA from "@/components/InlineCTA";
import { motion } from "framer-motion";
import { Shield, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-verifier-oaciq.webp";

const faq = [
  { q: "Comment vérifier un courtier immobilier au Québec?", a: "Rendez-vous sur le site de l'OACIQ (oaciq.com) et utilisez l'outil de recherche pour confirmer que le courtier détient un permis valide et n'a pas de mesures disciplinaires." },
  { q: "Qu'est-ce que l'OACIQ?", a: "L'Organisme d'autoréglementation du courtage immobilier du Québec. Il encadre tous les courtiers immobiliers et s'assure qu'ils respectent les règles de la profession." },
  { q: "Pourquoi vérifier un courtier avant de signer?", a: "Pour vous assurer que son permis est valide, qu'il est en règle et qu'il n'a pas fait l'objet de plaintes ou de mesures disciplinaires. C'est une étape de base pour protéger votre transaction." },
  { q: "Que faire si un courtier n'est pas inscrit à l'OACIQ?", a: "Au Québec, il est illégal d'exercer le courtage immobilier sans permis de l'OACIQ. Si un courtier n'apparaît pas au registre, ne signez rien et contactez l'OACIQ." },
  { q: "Est-ce que tous les courtiers au Québec sont inscrits à l'OACIQ?", a: "Oui — c'est obligatoire. Tout courtier qui exerce légalement au Québec doit détenir un permis valide de l'OACIQ." },
  { q: "Comment porter plainte contre un courtier immobilier?", a: "L'OACIQ a un processus de plainte formel. Vous pouvez déposer une plainte en ligne ou par téléphone si vous estimez qu'un courtier n'a pas respecté ses obligations." },
  { q: "L'OACIQ protège-t-il les acheteurs et les vendeurs?", a: "Oui — l'OACIQ encadre la profession pour protéger le public. Il vérifie les compétences, impose des règles déontologiques et gère un fonds d'indemnisation en cas de fraude." },
  { q: "Comment savoir si un courtier a des mesures disciplinaires?", a: "Le registre de l'OACIQ affiche les mesures disciplinaires publiques. Vous pouvez vérifier le dossier de n'importe quel courtier en ligne." },
];

const VerifierCourtierOaciqPage = () => (
  <>
    <PageMeta
      title="Vérifier un courtier immobilier · OACIQ"
      description="Comment vérifier qu'un courtier immobilier est en règle au Québec. Guide pratique pour consulter le registre de l'OACIQ et protéger votre transaction." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={{ ["--hero-bg-image" as any]: `url(${heroImg})` }}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="label-overline mb-4 text-primary-foreground/25">Guide · Confiance et vérification</p>
          <h1 className="text-primary-foreground">Vérifier un courtier immobilier avec l'OACIQ</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
            Avant de confier la vente ou l'achat de votre propriété à un courtier, vérifiez qu'il est en règle. C'est simple, rapide et gratuit.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Pourquoi vérifier" title="Protéger votre transaction" />
      <p className="prose-body mt-5">
        Au Québec, tous les courtiers immobiliers doivent détenir un permis valide de l'<strong>OACIQ</strong> (Organisme d'autoréglementation du courtage immobilier du Québec). L'OACIQ vérifie les compétences, impose des règles déontologiques et protège le public en cas de problème.
      </p>
      <p className="prose-body mt-4">
        Vérifier un courtier avant de signer un contrat de courtage est une étape de base pour s'assurer que votre transaction est entre bonnes mains.
      </p>
    </ContentBlock>

    <section className="section-padding bg-secondary/20">
      <div className="section-container max-w-[44rem]">
        <SectionHeading overline="Comment faire" title="3 étapes pour vérifier un courtier" centered />
        <div className="mt-8 space-y-4">
          {[
            { num: "01", title: "Visitez le registre de l'OACIQ", text: "Rendez-vous sur oaciq.com et utilisez l'outil de recherche « Trouver un courtier »." },
            { num: "02", title: "Cherchez par nom", text: "Entrez le nom du courtier pour voir son permis, son agence et son statut actuel." },
            { num: "03", title: "Vérifiez le statut", text: "Assurez-vous que le permis est actif et qu'il n'y a pas de mesures disciplinaires en cours." },
          ].map((step) => (
            <motion.div
              key={step.num}
              className="rounded-xl border border-border/40 bg-card p-5 flex gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[1.5rem] font-bold text-accent/30">{step.num}</span>
              <div>
                <h3 className="text-[0.9375rem] font-semibold">{step.title}</h3>
                <p className="mt-1 text-[0.875rem] leading-[1.6] text-muted-foreground">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4">
          <Shield size={18} className="shrink-0 text-accent" />
          <p className="text-[0.875rem] text-muted-foreground">
            Lien officiel : <a href="https://www.oaciq.com/fr/trouver-un-courtier" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 inline-flex items-center gap-1">oaciq.com <ExternalLink size={12} /></a>
          </p>
        </div>
      </div>
    </section>

    <InlineCTA
      text="Vous cherchez un courtier en règle en Outaouais? Vérifions ensemble."
      buttonLabel="Parler à Yanis →"
      href="/contact-yanis"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Ce que l'OACIQ vérifie" title="Les protections pour vous" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Permis valide", text: "Le courtier a complété sa formation et maintient ses compétences à jour." },
          { title: "Règles déontologiques", text: "Il est tenu de respecter un code de déontologie strict envers ses clients." },
          { title: "Assurance responsabilité", text: "L'OACIQ oblige les courtiers à détenir une assurance en cas d'erreur ou de négligence." },
          { title: "Fonds d'indemnisation", text: "En cas de fraude, un fonds existe pour protéger les consommateurs." },
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
        { title: "Comment choisir un courtier?", text: "Les critères pour bien choisir.", href: "/comment-choisir-un-courtier-immobilier" },
        { title: "Combien coûte un courtier?", text: "Comment fonctionne la commission.", href: "/combien-coute-un-courtier-immobilier-au-quebec" },
        { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau" },
        { title: "Contact", text: "Discuter de votre projet.", href: "/contact-yanis" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Vous voulez un courtier transparent et en règle?"
      text="Discutons de votre projet — je réponds à toutes vos questions, clairement."
      buttons={[
        { label: "Parler à Yanis", href: "/contact-yanis" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Permis OACIQ valide · Transparent dès le départ."
    />

    <FAQSection items={faq} />
  </>
);

export default VerifierCourtierOaciqPage;
