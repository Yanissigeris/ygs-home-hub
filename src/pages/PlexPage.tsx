import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { CheckCircle2, Building2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className="section-container max-w-[52rem]">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Pour qui" title="J'aide deux types de clients" />
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Building2,
              title: "Propriétaires de plex",
              text: "Vendre, refinancer ou conserver? On analyse votre situation avec des chiffres réels.",
            },
            {
              icon: TrendingUp,
              title: "Acheteurs investisseurs",
              text: "Valeur réelle, potentiel locatif, risques et stratégie d'achat — les chiffres avant la décision.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-elevated border border-border/40 bg-card p-7 sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/[0.06] text-primary mb-5">
                <card.icon size={22} />
              </div>
              <h3 className="text-[1.125rem]">{card.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Inline valuation CTA */}
    <section className="cta-band">
      <div className="section-container">
        <p>Vous possédez un plex? Commencez par connaître sa valeur actuelle.</p>
        <Button size="default" variant="hero" asChild>
          <Link to="/evaluation-gratuite-gatineau">Obtenir ma valeur →</Link>
        </Button>
      </div>
    </section>

    <section className="section-padding bg-secondary/25">
      <div className="section-container max-w-[44rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline="Analyse" title="Les vraies questions derrière un plex" />
        </motion.div>
        <div className="mt-8 space-y-5">
          {questions.map((q, i) => (
            <motion.div
              key={q.text}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-[1rem] font-medium text-foreground">{q.text}</p>
                <p className="mt-1 text-[0.9375rem] leading-[1.6] text-muted-foreground">{q.sub}</p>
              </div>
            </motion.div>
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
