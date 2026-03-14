import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2 } from "lucide-react";

const questions = [
  "Est-ce que je garde ou je vends?",
  "Est-ce que le prix demandé a du sens?",
  "Quel est le vrai rendement?",
  "Quels travaux ou risques faut-il surveiller?",
  "Comment vendre sans laisser d'argent sur la table?",
];

const faq = [
  { q: "Comment évaluer la valeur d'un plex?", a: "Ça dépend des revenus, de l'état de l'immeuble, du potentiel d'augmentation des loyers et du secteur. Je vous aide à faire le portrait complet." },
  { q: "Est-ce rentable d'acheter un plex en 2024?", a: "Ça dépend du prix d'achat, des revenus locatifs et de votre stratégie. On peut analyser ça ensemble." },
  { q: "Comment vendre un plex occupé?", a: "C'est faisable, mais ça demande une stratégie adaptée. Je vous guide à travers le processus." },
];

const PlexPage = () => (
  <>
    <HeroSection
      title="Plex à Gatineau: acheter, vendre ou analyser le bon timing"
      subtitle="Le marché des plex reste intéressant à Gatineau, mais il faut regarder plus que le prix affiché."
      primaryCta={{ label: "Recevoir une analyse plex", href: "/contact-yanis" }}
    />

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading
          title="Pourquoi cette page existe"
          subtitle="Acheter ou vendre un plex demande une lecture plus complète: valeur, revenus, potentiel, état de l'immeuble, risques et stratégie."
        />
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="section-container">
        <SectionHeading title="J'aide surtout 2 types de clients" centered />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <div className="card-elevated rounded-lg border border-border bg-card p-7">
            <h3 className="text-xl text-foreground">Propriétaires de plex</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Vous voulez savoir si c'est le bon moment pour encaisser, refinancer ou conserver.
            </p>
          </div>
          <div className="card-elevated rounded-lg border border-border bg-card p-7">
            <h3 className="text-xl text-foreground">Acheteurs investisseurs</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Vous voulez comprendre la valeur, le potentiel locatif, les risques et la stratégie d'achat.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading title="Les vraies questions derrière un plex" />
        <div className="mt-8 space-y-3">
          {questions.map((q) => (
            <div key={q} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-foreground">{q}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Recevez une lecture claire de votre situation"
      buttons={[{ label: "Demander une analyse plex", href: "/contact-yanis" }]}
    />

    <FAQSection items={faq} />
  </>
);

export default PlexPage;
