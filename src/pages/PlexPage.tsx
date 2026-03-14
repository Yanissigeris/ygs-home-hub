import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, Building2, TrendingUp } from "lucide-react";

const questions = [
  { text: "Est-ce que je garde ou je vends?", sub: "Rendement actuel, conditions du marché et stratégie à long terme." },
  { text: "Le prix demandé a-t-il du sens?", sub: "Revenus réels, dépenses réelles, potentiel locatif — pas juste le prix affiché." },
  { text: "Quel est le vrai rendement?", sub: "Dépenses, vacance, travaux à prévoir, potentiel de croissance." },
  { text: "Quels risques surveiller?", sub: "Toiture, plomberie, électricité, fondation — certains coûts changent la donne." },
  { text: "Comment vendre sans laisser d'argent sur la table?", sub: "Positionnement prix et mise en marché font la différence sur un plex." },
];

const faq = [
  { q: "Comment évaluer la valeur d'un plex?", a: "Revenus, état de l'immeuble, potentiel locatif et secteur. Après près de 9 ans en Outaouais, je connais bien les particularités des plex locaux." },
  { q: "Est-ce encore rentable d'acheter un plex?", a: "Ça dépend du prix, des revenus et de votre stratégie. On peut analyser ça ensemble." },
  { q: "Comment vendre un plex occupé?", a: "C'est faisable — coordination locataires, visites, documentation. Je vous accompagne à chaque étape." },
  { q: "Refinancer ou vendre?", a: "On compare les deux scénarios ensemble pour voir ce qui fait plus de sens dans votre situation." },
];

const PlexPage = () => (
  <>
    <HeroSection
      overline="Plex et investissement · Gatineau"
      title="Plex à Gatineau: acheter, vendre ou analyser"
      subtitle="Il faut regarder au-delà du prix affiché. Revenus, dépenses, état de l'immeuble, potentiel — chaque facteur compte dans la décision."
      primaryCta={{ label: "Recevoir une analyse plex", href: "/contact-yanis" }}
      trustLine="Stratégie claire. Zéro pression. Pas de mauvaises surprises."
    />

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading overline="Pour qui" title="J'aide deux types de clients" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <Building2 size={20} className="text-primary mb-3" />
            <h3 className="text-base">Propriétaires de plex</h3>
            <p className="mt-2 text-[0.8125rem] text-muted-foreground">
              Vendre, refinancer ou conserver? On analyse votre situation avec des chiffres réels.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <TrendingUp size={20} className="text-primary mb-3" />
            <h3 className="text-base">Acheteurs investisseurs</h3>
            <p className="mt-2 text-[0.8125rem] text-muted-foreground">
              Valeur réelle, potentiel locatif, risques et stratégie d'achat — les chiffres avant la décision.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Inline valuation CTA */}
    <section className="bg-primary py-5">
      <div className="section-container flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-[0.8125rem] font-medium text-primary-foreground/80">
          Vous possédez un plex? Commencez par connaître sa valeur actuelle.
        </p>
        <Button size="sm" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    <section className="section-padding bg-secondary/40">
      <div className="section-container max-w-2xl">
        <SectionHeading overline="Analyse" title="Les vraies questions derrière un plex" />
        <div className="mt-6 space-y-3">
          {questions.map((q) => (
            <div key={q.text} className="flex items-start gap-3">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-[0.8125rem] font-medium text-foreground">{q.text}</p>
                <p className="text-[0.75rem] text-muted-foreground">{q.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      dark
      overline="Prochaine étape"
      title="Recevez une lecture claire de votre situation"
      text="Vendre, acheter ou simplement comprendre votre position — je vous aide à y voir plus clair."
      buttons={[{ label: "Demander une analyse plex", href: "/contact-yanis" }]}
      trustLine="Zéro pression — je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />
  </>
);

export default PlexPage;
