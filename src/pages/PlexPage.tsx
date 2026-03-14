import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, TrendingUp, Building2 } from "lucide-react";

const questions = [
  { text: "Est-ce que je garde ou je vends?", sub: "La réponse dépend de votre rendement, de votre stratégie à long terme et de ce que le marché offre en ce moment." },
  { text: "Est-ce que le prix demandé a du sens?", sub: "Un prix affiché ne reflète pas toujours la valeur réelle. Il faut regarder les revenus, les dépenses et le potentiel." },
  { text: "Quel est le vrai rendement?", sub: "Au-delà des revenus bruts: dépenses réelles, vacance, travaux à prévoir, potentiel de croissance." },
  { text: "Quels travaux ou risques faut-il surveiller?", sub: "Toiture, plomberie, électricité, fondation — certains coûts peuvent changer complètement l'équation." },
  { text: "Comment vendre sans laisser d'argent sur la table?", sub: "Le positionnement prix et la stratégie de mise en marché font toute la différence sur un plex." },
];

const faq = [
  { q: "Comment évaluer la valeur d'un plex?", a: "Ça dépend des revenus, de l'état de l'immeuble, du potentiel locatif et du secteur. Après près de 9 ans dans le marché local, je connais bien les particularités des plex en Outaouais." },
  { q: "Est-ce encore rentable d'acheter un plex à Gatineau?", a: "Ça dépend du prix, des revenus et de votre stratégie. On peut analyser ça ensemble pour voir si les chiffres fonctionnent dans votre cas précis." },
  { q: "Comment vendre un plex occupé?", a: "C'est faisable, mais ça demande une coordination avec les locataires, une gestion des visites et une documentation complète. Je vous accompagne à chaque étape." },
  { q: "Dois-je refinancer ou vendre?", a: "Ça dépend de votre situation financière, de vos objectifs et du marché. On peut comparer les deux scénarios ensemble." },
];

const PlexPage = () => (
  <>
    <HeroSection
      overline="Plex et investissement · Gatineau et Outaouais"
      title="Plex à Gatineau: acheter, vendre ou analyser le bon timing"
      subtitle="Le marché des plex reste intéressant en Outaouais, mais il faut regarder au-delà du prix affiché. Revenus, dépenses, état de l'immeuble, potentiel — chaque facteur compte dans la décision."
      primaryCta={{ label: "Recevoir une analyse plex", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
    />

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading
          overline="Contexte"
          title="Pourquoi cette page existe"
          subtitle="Acheter ou vendre un plex, ce n'est pas la même chose qu'une maison unifamiliale. La lecture est plus complexe: valeur, revenus, potentiel, état de l'immeuble, risques et stratégie — il faut tout considérer avant de bouger."
        />
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="section-container">
        <SectionHeading overline="Pour qui" title="J'aide surtout 2 types de clients" centered />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          <div className="card-elevated rounded-lg border border-border bg-card p-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-secondary">
              <Building2 size={22} className="text-primary" />
            </div>
            <h3>Propriétaires de plex</h3>
            <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
              Vous voulez savoir si c'est le bon moment pour encaisser votre gain, refinancer pour investir ailleurs, ou conserver et optimiser vos revenus locatifs.
            </p>
          </div>
          <div className="card-elevated rounded-lg border border-border bg-card p-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-secondary">
              <TrendingUp size={22} className="text-primary" />
            </div>
            <h3>Acheteurs investisseurs</h3>
            <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
              Vous voulez comprendre la valeur réelle d'un immeuble, le potentiel locatif, les risques cachés et la stratégie d'achat qui fait du sens pour vous.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Analyse" title="Les vraies questions derrière un plex" />
        <div className="mt-10 space-y-4">
          {questions.map((q) => (
            <div key={q.text} className="flex items-start gap-4">
              <CheckCircle2 size={18} className="mt-1 shrink-0 text-accent" />
              <div>
                <p className="font-medium text-foreground">{q.text}</p>
                <p className="mt-1 text-[0.8125rem] text-muted-foreground">{q.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      overline="Prochaine étape"
      title="Recevez une lecture claire de votre situation"
      text="Que vous pensiez vendre, acheter ou simplement comprendre votre position — je peux vous aider à voir plus clair."
      buttons={[{ label: "Demander une analyse plex", href: "/contact-yanis" }]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default PlexPage;
