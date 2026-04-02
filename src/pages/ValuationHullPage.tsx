import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import BenefitsList from "@/components/BenefitsList";
import FunnelNextStep from "@/components/FunnelNextStep";
import SuccessMessage from "@/components/SuccessMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Clock, Shield, CheckCircle2, Send, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import yanisPhoto from "@/assets/yanis-hero-cutout.webp";

const benefits = [
  "Fourchette de valeur réaliste basée sur les ventes récentes à Hull",
  "Avis sur le positionnement prix adapté à votre secteur de Hull",
  "Forces de votre propriété à mettre de l'avant — condo, plex ou maison",
  "Points à corriger et lesquels valent la peine dans le marché de Hull",
  "Prochaines étapes possibles, sans engagement",
];

const trustBullets = [
  { icon: Shield, text: "Gratuit et sans engagement" },
  { icon: Clock, text: "Réponse personnalisée en 24h" },
  { icon: CheckCircle2, text: "Basé sur les ventes récentes à Hull" },
];

const faq = [
  { q: "Comment obtenir une évaluation de maison à Hull?", a: "Remplissez le formulaire sur cette page avec l'adresse de votre propriété à Hull. Je vous reviens en 24h avec une analyse basée sur les ventes comparables récentes dans votre secteur." },
  { q: "Est-ce que l'évaluation est vraiment gratuite?", a: "Oui, c'est gratuit, confidentiel et sans engagement. Vous recevez un rapport clair — aucune obligation de vendre." },
  { q: "Combien vaut ma maison à Hull?", a: "La valeur dépend de votre rue, du type de propriété (condo, plex, unifamiliale) et des ventes récentes dans votre secteur de Hull." },
  { q: "Sur quoi se base l'évaluation à Hull?", a: "Je me base sur les ventes récentes dans votre rue et votre secteur de Hull, l'état de votre propriété, la taille du terrain et les conditions du marché local." },
  { q: "Quelle est la différence avec une évaluation en ligne?", a: "Les outils en ligne donnent une estimation approximative. Mon évaluation tient compte des particularités locales de Hull et de l'état réel de votre propriété." },
  { q: "Combien de temps prend l'évaluation?", a: "Vous recevez une réponse personnalisée en 24 heures. Pour une analyse approfondie avec visite à Hull, on planifie un rendez-vous." },
  { q: "Faut-il faire visiter ma maison pour l'évaluation?", a: "Pas nécessairement pour une première estimation. Si vous souhaitez un rapport plus détaillé, une visite peut être planifiée — sans engagement." },
  { q: "L'évaluation m'engage-t-elle à vendre?", a: "Non, absolument pas. Beaucoup de propriétaires à Hull demandent une évaluation simplement pour connaître leur valeur." },
  { q: "Les condos de Hull sont-ils couverts?", a: "Oui — je couvre tous les types de propriétés à Hull : condos, plex, unifamiliales, peu importe le quartier." },
  { q: "Que faire après avoir reçu mon évaluation?", a: "Vous aurez les chiffres et les options. Si vous voulez aller plus loin, je peux préparer un plan vendeur complet pour Hull." },
];

const afterSteps = [
  { title: "Vendre à Hull", text: "Allez plus loin — recevez un plan complet pour vendre votre propriété à Hull.", href: "/vendre-maison-hull", cta: "Voir le processus", highlight: true },
  { title: "Parler à Yanis", text: "Discuter de votre situation et vos options — sans engagement.", href: "/contact-yanis", cta: "Réserver un appel" },
];

const anim = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const ValuationHullPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    const ok = await submit({
      formType: "valuation",
      lang: "fr",
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: (fd.get("phone") as string) || "",
      address: fd.get("address") as string,
      message: `[Hull] ${(fd.get("message") as string) || ""}`,
    });
    if (ok) setSubmitted(true);
  };

  return (
    <>
      <PageMeta
        title="Évaluation maison Hull | Gratuite et sans engagement"
        description="Obtenez une évaluation gratuite de votre maison à Hull. Analyse basée sur les ventes récentes dans votre secteur — réponse en 24h, sans engagement."
      />

      <section className="hero-gradient relative overflow-hidden">
        <div className="section-container relative grid items-center gap-8 py-12 md:grid-cols-[1fr_420px] md:py-20 lg:gap-14">
          <motion.div {...anim}>
            <p className="label-overline mb-4 text-primary-foreground/25">Évaluation gratuite · Hull</p>
            <h1 className="text-primary-foreground">Combien vaut votre propriété à Hull?</h1>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.6] text-primary-foreground/50">
              Recevez une évaluation personnalisée basée sur les ventes récentes dans votre secteur de Hull — gratuit, confidentiel et sans engagement.
            </p>
            <ul className="mt-6 space-y-2">
              {trustBullets.map((b) => (
                <li key={b.text} className="flex items-center gap-2 text-[0.875rem] text-primary-foreground/40">
                  <b.icon size={15} className="text-accent" />
                  {b.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }}>
            {submitted ? (
              <SuccessMessage title="Demande envoyée!" text="Je vous reviens en 24h avec votre évaluation personnalisée pour Hull." />
            ) : (
              <form onSubmit={handleSubmit} className="card-elevated space-y-4 rounded-2xl bg-card p-6 shadow-xl sm:p-8">
                <div className="flex items-center gap-2 text-[0.8125rem] text-muted-foreground">
                  <Lock size={13} /> Confidentiel — aucune obligation
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" name="name" required placeholder="Votre nom" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Courriel</Label>
                  <Input id="email" name="email" type="email" required placeholder="courriel@exemple.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="819 000-0000" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="address">Adresse de la propriété à Hull</Label>
                  <Input id="address" name="address" required placeholder="123 rue Exemple, Hull" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Détails (optionnel)</Label>
                  <Textarea id="message" name="message" rows={3} placeholder="Type de propriété, nombre de chambres, etc." />
                </div>
                <Button type="submit" size="xl" variant="accent" className="w-full" disabled={submitting}>
                  {submitting ? "Envoi…" : <><Send size={15} className="mr-2" /> Recevoir mon évaluation</>}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-[44rem]">
          <motion.div {...anim} className="flex items-center gap-4 mb-6">
            <img src={yanisPhoto} alt="Yanis Gauthier" className="h-14 w-14 rounded-full object-cover" loading="lazy" />
            <div>
              <p className="font-semibold text-[0.9375rem]">Yanis Gauthier-Sigeris</p>
              <p className="text-[0.8125rem] text-muted-foreground flex items-center gap-1"><BadgeCheck size={13} className="text-accent" /> Courtier immobilier · Hull et Outaouais</p>
            </div>
          </motion.div>
          <BenefitsList title="Ce que vous recevez" items={benefits} />
        </div>
      </section>

      <RelatedPages
        overline="Explorer"
        title="Pages connexes"
        pages={[
          { title: "Vendre à Hull", text: "Processus et stratégie pour vendre à Hull.", href: "/vendre-maison-hull" },
          { title: "Hull — portrait du quartier", text: "Marché, profil et tendances.", href: "/hull" },
          { title: "Évaluation Gatineau", text: "Évaluation pour tout l'Outaouais.", href: "/evaluation-gratuite-gatineau" },
          { title: "Courtier Outaouais", text: "Services dans toute la région.", href: "/courtier-immobilier-outaouais" },
        ]}
        background="alt"
      />

      <FunnelNextStep overline="Et ensuite?" title="Vous avez votre évaluation — voici la suite" subtitle="Choisissez l'étape qui correspond à votre situation." steps={afterSteps} />

      <FAQSection items={faq} />
    </>
  );
};

export default ValuationHullPage;
