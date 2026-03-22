import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import CTASection from "@/components/CTASection";
import GuideModal, { type GuideType } from "@/components/GuideModal";
import { Button } from "@/components/ui/button";
import { getReviewsById } from "@/data/reviews";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Target, MapPin, MessageCircle, Users } from "lucide-react";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";
import yanisPortraitSm from "@/assets/yanis-portrait-nobg-sm.webp";
import yanisAbout from "@/assets/yanis-about.webp";
import yanisAboutSm from "@/assets/yanis-about-sm.webp";

const homepageReviews = getReviewsById(["s1", "b1", "r2", "m1"]);

/* ── PATH CARDS DATA ── */
const paths: { title: string; text: string; cta: string; guideType: GuideType }[] = [
  {
    title: "Vendre une propriété",
    text: "Prix, timing, préparation et stratégie de mise en marché — en toute clarté.",
    cta: "Recevoir le guide vendeur",
    guideType: "seller_guide",
  },
  {
    title: "Acheter une première maison",
    text: "Comprendre votre budget, vos options et comment acheter en confiance.",
    cta: "Recevoir le guide acheteur",
    guideType: "buyer_guide",
  },
  {
    title: "Se relocaliser en Outaouais",
    text: "Comparer les secteurs, comprendre le processus local et planifier votre déménagement.",
    cta: "Recevoir le guide relocalisation",
    guideType: "relocation_guide",
  },
  {
    title: "Relocalisation militaire",
    text: "Un guide pratique pour les membres des FAC et leurs familles qui déménagent dans la région.",
    cta: "Recevoir le guide militaire",
    guideType: "military_guide",
  },
  {
    title: "Plex / investissement",
    text: "Évaluer les opportunités, comprendre les chiffres et avancer stratégiquement.",
    cta: "Recevoir le guide investisseur",
    guideType: "investor_guide",
  },
];

/* ── VALUE BLOCKS DATA ── */
const values = [
  { icon: Target, title: "Stratégie claire", text: "Vous recevez un plan, pas juste de l'information." },
  { icon: MapPin, title: "Connaissance du marché local", text: "Les secteurs, les prix et les opportunités en Outaouais, expliqués clairement." },
  { icon: MessageCircle, title: "Conseils directs", text: "Pas de flafla. Pas de pression. Juste des conseils honnêtes." },
  { icon: Users, title: "Accompagnement de A à Z", text: "De la préparation à la négociation, vous êtes bien guidé." },
];

/* ── GUIDE SHOWCASE DATA ── */
const mainGuides: { title: string; value: string; cta: string; guideType: GuideType }[] = [
  { title: "Guide vendeur", value: "Tout pour vendre au meilleur prix — préparation, prix, mise en marché.", cta: "Recevoir le guide", guideType: "seller_guide" },
  { title: "Guide premier acheteur", value: "Le processus d'achat au Québec, étape par étape.", cta: "Recevoir le guide", guideType: "buyer_guide" },
  { title: "Guide relocalisation", value: "Secteurs, processus et conseils pour s'établir en Outaouais.", cta: "Recevoir le guide", guideType: "relocation_guide" },
];
const secondaryGuides: { title: string; value: string; cta: string; guideType: GuideType }[] = [
  { title: "Guide militaire", value: "Pour les FAC : mutation, BGRS/SIRVA et conseils locaux.", cta: "Recevoir le guide", guideType: "military_guide" },
  { title: "Guide investisseur / plex", value: "Rendement, analyse et stratégie d'acquisition.", cta: "Recevoir le guide", guideType: "investor_guide" },
];

/* ── GUIDE CTA BUTTON COMPONENT ── */
const GuideCta = ({ guideType, label, variant = "accent", size = "default", className = "" }: {
  guideType: GuideType; label: string; variant?: "accent" | "outline" | "default"; size?: "default" | "lg" | "xl"; className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
        <span className="truncate">{label}</span>
        <ArrowRight size={14} className="ml-1.5 shrink-0" />
      </Button>
      <GuideModal open={open} onOpenChange={setOpen} guideType={guideType} />
    </>
  );
};

const anim = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } as const, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } };

const Index = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <PageMeta
      title="Courtier immobilier Gatineau | YGS"
      description="Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Vendre, acheter, relocaliser ou investir en Outaouais — stratégie claire, sans pression."
    />

    {/* ═══ SECTION 1 — HERO ═══ */}
    <HeroSection
      overline="GATINEAU · AYLMER · HULL · OUTAOUAIS"
      title="Accompagnement immobilier stratégique en Outaouais"
      subtitle="Acheter, vendre, relocaliser ou investir? Obtenez la bonne stratégie locale, le bon guide et la bonne prochaine étape — sans pression."
      primaryCta={{ label: "Recevoir mon guide gratuit", href: "#choisir-votre-parcours" }}
      secondaryCta={{ label: "Réserver un appel stratégique", href: "/contact-yanis" }}
      trustLine="YGS — Votre allié en immobilier. Connaissance locale. Stratégie claire. Sans pression."
      heroVideo="/hero-video-compressed.mp4"
      heroVideoPoster="/hero-video-poster.webp"
      agentImage={yanisPortrait}
      agentImageSm={yanisPortraitSm}
      agentName="Yanis Gauthier-Sigeris"
    />

    {/* ═══ SECTION 2 — CHOOSE YOUR PATH ═══ */}
    <section id="choisir-votre-parcours" className="section-padding bg-background">
      <div className="section-container">
        <motion.div className="mx-auto mb-14 max-w-[42rem] text-center" {...anim}>
          <p className="label-overline mb-3">Choisissez votre parcours</p>
          <h2>Où en êtes-vous?</h2>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[var(--card-radius)] border border-border/40 bg-card p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300"
            >
              <h3 className="text-[1.0625rem] font-semibold">{p.title}</h3>
              <p className="mt-2.5 flex-1 text-[0.9375rem] leading-[1.65] text-muted-foreground">{p.text}</p>
              <GuideCta guideType={p.guideType} label={p.cta} variant="accent" size="default" className="mt-5 w-full sm:w-auto self-start text-[0.8125rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — LEAD CAPTURE PROMPT ═══ */}
    <section className="bg-secondary/30 py-16 sm:py-20">
      <motion.div className="section-container text-center" {...anim}>
        <p className="label-overline mb-3">Guides gratuits</p>
        <h2 className="mx-auto max-w-lg">Obtenez le bon guide pour votre prochain pas</h2>
        <p className="mx-auto mt-4 max-w-md text-[1.0625rem] leading-[1.6] text-muted-foreground">
          Choisissez le guide qui correspond à votre situation — je vous l'envoie directement.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <GuideCta guideType="seller_guide" label="Guide vendeur" size="lg" />
          <GuideCta guideType="buyer_guide" label="Guide acheteur" size="lg" />
          <GuideCta guideType="relocation_guide" label="Guide relocalisation" size="lg" />
          <GuideCta guideType="investor_guide" label="Guide investisseur" size="lg" />
        </div>
        <p className="mt-5 text-[0.8125rem] text-muted-foreground/45">
          Zéro pression — juste de l'information locale utile et une prochaine étape claire.
        </p>
      </motion.div>
    </section>

    {/* ═══ SECTION 4 — WHY CLIENTS CHOOSE YGS ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-[60rem]">
        <motion.div className="mb-14 text-center" {...anim}>
          <p className="label-overline mb-3">Pourquoi choisir YGS</p>
          <h2>Pourquoi mes clients me font confiance</h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center p-6"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/[0.08] text-accent">
                <v.icon size={22} />
              </div>
              <h3 className="text-[1rem] font-semibold">{v.title}</h3>
              <p className="mx-auto mt-2.5 max-w-[16rem] text-[0.9375rem] leading-[1.6] text-muted-foreground/70">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — GUIDE SHOWCASE ═══ */}
    <section className="section-padding-md bg-secondary/20">
      <div className="section-container">
        <motion.div className="mb-14 text-center" {...anim}>
          <p className="label-overline mb-3">Ressources gratuites</p>
          <h2>Des guides conçus pour de vraies décisions</h2>
        </motion.div>
        {/* Main guides */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainGuides.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[var(--card-radius)] border border-border bg-card p-6 sm:p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 mb-4">
                <BookOpen size={20} className="text-accent" />
              </div>
              <h3 className="text-[1.05rem] font-semibold leading-tight">{g.title}</h3>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">{g.value}</p>
              <GuideCta guideType={g.guideType} label={g.cta} className="mt-5 w-full sm:w-auto self-start text-[0.8125rem]" />
            </motion.div>
          ))}
        </div>
        {/* Secondary guides */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:max-w-[66%] lg:mx-auto">
          {secondaryGuides.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-[var(--card-radius)] border border-border bg-card p-6 sm:p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 mb-4">
                <BookOpen size={20} className="text-accent" />
              </div>
              <h3 className="text-[1.05rem] font-semibold leading-tight">{g.title}</h3>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted-foreground">{g.value}</p>
              <GuideCta guideType={g.guideType} label={g.cta} className="mt-5 w-full sm:w-auto self-start text-[0.8125rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 6 — PERSONAL BRAND ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={yanisAbout}
              srcSet={`${yanisAboutSm} 400w, ${yanisAbout} 565w`}
              sizes="(max-width: 1023px) 90vw, 40vw"
              alt="Yanis Gauthier-Sigeris — Courtier immobilier, Gatineau"
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
              decoding="async"
              width={565}
              height={800}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <p className="label-overline mb-3">À propos</p>
          <h2>Bonjour, moi c'est Yanis.</h2>
          <p className="prose-body mt-5">
            J'accompagne acheteurs, vendeurs, personnes en relocalisation et investisseurs dans leurs décisions immobilières en Outaouais — avec une stratégie claire, une solide connaissance du marché local et une approche sans pression.
          </p>
          <p className="prose-body mt-4">
            Avec plus de 9 ans d'expérience comme courtier en Outaouais, investisseur immobilier et une formation en gestion de projet, je suis un allié stratégique pour tout projet immobilier — qu'il soit simple ou complexe.
          </p>
          <Button className="mt-8" size="lg" variant="accent" asChild>
            <Link to="/contact-yanis">
              Réserver un appel stratégique
              <ArrowRight size={15} className="ml-1.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* ═══ SECTION 7 — SOCIAL PROOF ═══ */}
    <ReviewSection
      overline="Témoignages"
      title="Un accompagnement de confiance pour des décisions qui comptent"
      reviews={homepageReviews}
      columns={2}
      background="alt"
    />

    {/* ═══ SECTION 8 — BOTTOM CTA ═══ */}
    <CTASection
      dark
      overline="Prochaine étape"
      title="Vous ne savez pas par où commencer?"
      text="Dites-moi où vous en êtes dans votre processus — je vous pointe vers le bon guide ou la bonne prochaine étape."
      buttons={[
        { label: "Recevoir mon guide gratuit", href: "#choisir-votre-parcours" },
        { label: "Réserver un appel stratégique", href: "/contact-yanis", variant: "outline" },
      ]}
      trustLine="Connaissance locale · Stratégie claire · Sans pression"
    />
  </div>
));

Index.displayName = "Index";

export default Index;
