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
import { heroBgStyle } from "@/lib/hero-backgrounds";

const faq = [
  { q: "Comment vérifier un courtier immobilier au Québec?", a: "Rendez-vous sur oaciq.com et cherchez le courtier par son nom dans le registre des titulaires de permis. La consultation est gratuite. Vérifiez que le permis est valide, ni suspendu ni assorti de conditions." },
  { q: "Qu'est-ce que l'OACIQ?", a: "C'est l'Organisme d'autoréglementation du courtage immobilier du Québec. Sa mission est de protéger le public. Il délivre les permis des courtiers et veille au respect des règles de la profession." },
  { q: "Pourquoi vérifier un courtier avant de signer?", a: "Pour confirmer que son permis est valide, sans suspension ni condition. C'est une étape simple qui protège votre transaction avant la signature du contrat de courtage." },
  { q: "Que signifie un permis valide de l'OACIQ?", a: "Le courtier a réussi la formation et les examens exigés, et il suit la formation continue obligatoire. Il est assuré en responsabilité professionnelle et doit respecter les règles de déontologie encadrées par l'OACIQ." },
  { q: "Que faire si un courtier n'est pas inscrit à l'OACIQ?", a: "Au Québec, il est illégal d'exercer le courtage immobilier sans permis de l'OACIQ. Si la personne n'apparaît pas au registre, ne signez rien et communiquez avec Info OACIQ." },
  { q: "Est-ce que tous les courtiers au Québec sont inscrits à l'OACIQ?", a: "Oui, c'est obligatoire. Tout courtier qui exerce légalement au Québec doit détenir un permis valide de l'OACIQ." },
  { q: "Comment porter plainte contre un courtier immobilier?", a: "Communiquez avec Info OACIQ par téléphone, ou remplissez le formulaire de demande d'assistance sur oaciq.com. Selon la situation, votre demande peut être transmise au syndic de l'OACIQ, qui peut faire enquête." },
  { q: "L'OACIQ protège-t-il les acheteurs et les vendeurs?", a: "Oui, sa mission est la protection du public. Il encadre la formation et la déontologie des courtiers. L'OACIQ administre aussi le Fonds d'indemnisation du courtage immobilier (FICI), qui peut indemniser les victimes de fraude, de manœuvres dolosives ou de détournement de fonds." },
  { q: "Comment savoir si un courtier a des mesures disciplinaires?", a: "Le registre de l'OACIQ indique si un permis est suspendu ou assorti de conditions. Il indique aussi si le courtier a fait l'objet de mesures disciplinaires. Le texte des décisions est publié gratuitement sur citoyens.soquij.qc.ca." },
  { q: "L'OACIQ fixe-t-il les taux de commission?", a: "Non. L'OACIQ encadre la pratique et la déontologie des courtiers, mais il ne fixe pas leur rémunération. Celle-ci est négociée entre le client et le courtier, puis inscrite au contrat de courtage." },
];

const VerifierCourtierOaciqPage = () => (
  <>
    <PageMeta
      title="Vérifier un courtier immobilier · OACIQ"
      description="Comment vérifier qu'un courtier immobilier est en règle au Québec. Guide pratique pour consulter le registre de l'OACIQ et protéger votre transaction." ogImage="https://yanisgauthier.com/og/og-guides.jpg" />

    <section className="hero-gradient hero-gradient--with-bg relative overflow-hidden" style={heroBgStyle(heroImg)}>
      <div className="section-container relative py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-primary-foreground">Vérifier un courtier immobilier avec l'OACIQ</h1>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.6] text-primary-foreground/90" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            Avant de confier la vente ou l'achat de votre propriété à un courtier, vérifiez qu'il est en règle. C'est gratuit et ça prend quelques minutes.
          </p>
        </motion.div>
      </div>
    </section>

    <ContentBlock narrow>
      <SectionHeading overline="Pourquoi vérifier" title="Protéger votre transaction" />
      <p className="prose-body mt-5">
        Au Québec, tous les courtiers immobiliers doivent détenir un permis valide de l'<strong>OACIQ</strong> (Organisme d'autoréglementation du courtage immobilier du Québec). L'OACIQ encadre leur formation et leur déontologie, et il offre des recours au public en cas de problème.
      </p>
      <p className="prose-body mt-4">
        Vérifier un courtier avant de signer un contrat de courtage est une étape de base pour s'assurer que votre transaction est entre bonnes mains.
      </p>
    </ContentBlock>

    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container max-w-[44rem]">
        <SectionHeading overline="Comment faire" title="4 étapes pour vérifier un courtier" centered />
        <div className="mt-8 space-y-4">
          {[
            { num: "01", title: "Visitez le registre de l'OACIQ", text: "Rendez-vous sur oaciq.com et utilisez l'outil de recherche « Trouver un courtier »." },
            { num: "02", title: "Cherchez par nom", text: "Entrez le nom du courtier pour afficher sa fiche, avec son permis et l'agence où il exerce." },
            { num: "03", title: "Vérifiez le statut", text: "Assurez-vous que le permis est actif, ni suspendu ni assorti de conditions." },
            { num: "04", title: "Consultez l'historique", text: "Regardez si le registre signale des mesures disciplinaires. Le texte des décisions est publié sur citoyens.soquij.qc.ca." },
          ].map((step) => (
            <motion.div
              key={step.num}
              className="rounded-xl border border-border/40 bg-card p-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
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
            Lien officiel : <a href="https://www.oaciq.com/fr/trouver-un-courtier" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 inline-flex items-center gap-1">oaciq.com <ExternalLink size={12} /></a>
          </p>
        </div>
      </div>
    </section>

    <InlineCTA
      text="Vous cherchez un courtier en Outaouais? Parlons de votre projet."
      buttonLabel="Parler à Yanis →"
      href="/contact-yanis/"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Ce que l'OACIQ vérifie" title="Les protections pour vous" />
      <div className="mt-5 space-y-3">
        {[
          { title: "Permis valide", text: "Le courtier a réussi la formation exigée et suit la formation continue obligatoire." },
          { title: "Règles déontologiques", text: "Il doit respecter des règles de déontologie envers ses clients et le public." },
          { title: "Assurance responsabilité", text: "L'OACIQ oblige les courtiers à détenir une assurance en cas d'erreur ou de négligence." },
          { title: "Fonds d'indemnisation", text: "Le FICI, administré par l'OACIQ, peut indemniser les victimes de fraude, de manœuvres dolosives ou de détournement de fonds par un courtier." },
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
        { title: "Comment choisir un courtier?", text: "Les critères pour bien choisir.", href: "/comment-choisir-un-courtier-immobilier/" },
        { title: "Combien coûte un courtier?", text: "Comment fonctionne la commission.", href: "/combien-coute-un-courtier-immobilier-au-quebec/" },
        { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau/" },
        { title: "Contact", text: "Discuter de votre projet.", href: "/contact-yanis/" },
      ]}
      background="alt"
    />

    <CTASection
      dark
      title="Vous voulez un courtier transparent et en règle?"
      text="Discutons de votre projet. Je réponds à vos questions clairement, sans pression."
      buttons={[
        { label: "Parler à Yanis", href: "/contact-yanis/" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau/", variant: "outline" },
      ]}
      trustLine="Permis OACIQ valide · Club Platine · Temple de la renommée RE/MAX"
    />

    <FAQSection items={faq} />
  </>
);

export default VerifierCourtierOaciqPage;
