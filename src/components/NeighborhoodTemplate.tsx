import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LucideIcon, CheckCircle2, Clock, Award, Shield } from "lucide-react";
import type { GuideType } from "@/components/GuideModal";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ImageTextSplit from "@/components/ImageTextSplit";
import InlineCTA from "@/components/InlineCTA";
import SectorLinks from "@/components/SectorLinks";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import yanisPortrait from "@/assets/yanis-portrait-nobg.webp";

export interface NeighborhoodProps {
  seoTitle: string;
  metaDesc: string;
  ogImage?: string;
  jsonLd: { name: string; description: string; lat: number; lng: number; url: string };
  hero: { overline: string; title: string; subtitle: string; image: string };
  trustSpecialty: string;
  lifestyle: { image: string; imageAlt: string; title: string; subtitle?: string };
  reasons: string[];
  profilesTitle: string;
  profiles: { icon: LucideIcon; title: string; text: string }[];
  inlineCta: { text: string; label: string; href: string };
  faq: { title: string; items: { q: string; a: string }[] };
  sectors: { overline?: string; title?: string; list: { name: string; href: string; detail: string }[] };
  related: { overline?: string; title?: string; pages: { title: string; text: string; href: string }[] };
  guide: { type: GuideType; headline: string; text: string; ctaLabel: string; stickyLabel: string };
  brokerPerspective?: { title?: string; observation: string; dataPoint?: string; takeaway?: string };
  cta: { title: string; text: string; buttons: { label: string; href: string; variant?: "outline" }[]; trustLine: string };
}

const FAQPageJsonLd = ({ items, url }: { items: { q: string; a: string }[]; url: string }) => {
  useEffect(() => {
    const prev = document.getElementById("ygs-faqpage-jsonld");
    if (prev) prev.remove();

    if (!items.length) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ygs-faqpage-jsonld";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("ygs-faqpage-jsonld");
      if (el) el.remove();
    };
  }, [items, url]);

  return null;
};

const BrokerPerspective = ({
  data,
  neighborhoodName,
}: {
  data: NonNullable<NeighborhoodProps["brokerPerspective"]>;
  neighborhoodName: string;
}) => {
  const lang = useLanguage();
  const title = data.title || (lang === "en" ? `My take on ${neighborhoodName}` : `Mon regard sur ${neighborhoodName}`);
  const label = lang === "en" ? "Broker's take" : "L'avis du courtier";
  const credentials = lang === "en" 
    ? "Real Estate Broker · RE/MAX Hall of Fame · 300+ transactions"
    : "Courtier immobilier · Hall of Fame RE/MAX · 300+ transactions";
  const portraitAlt = lang === "en"
    ? "Yanis Gauthier-Sigeris, Real Estate Broker"
    : "Yanis Gauthier-Sigeris, courtier immobilier";

  return (
    <section className="py-16 md:py-20" style={{ background: "var(--cream)" }}>
      <div className="container max-w-3xl">
        <div
          className="rounded-sm border p-8 md:p-10"
          style={{ background: "#fff", borderColor: "hsl(var(--border))" }}
        >
          <div
            className="text-xs uppercase tracking-[0.18em] font-medium"
            style={{ color: "var(--gold-text)", fontFamily: "var(--sans)" }}
          >
            {label}
          </div>
          <h2
            className="mt-3 text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "var(--serif)", color: "var(--ink)" }}
          >
            {title}
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <div
              className="h-16 w-16 shrink-0 overflow-hidden rounded-full"
              style={{ background: "var(--cream)" }}
            >
              <img
                src={yanisPortrait}
                alt={portraitAlt}
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div
                className="text-base font-medium"
                style={{ color: "var(--ink)", fontFamily: "var(--sans)" }}
              >
                Yanis Gauthier-Sigeris
              </div>
              <div
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "var(--sans)" }}
              >
                {credentials}
              </div>
            </div>
          </div>

          <p
            className="mt-7 text-[1.0625rem] leading-relaxed"
            style={{ color: "var(--ink)", fontFamily: "var(--sans)" }}
          >
            {data.observation}
          </p>

          {data.dataPoint && (
            <div
              className="mt-5 border-l-2 pl-4 py-1 text-[0.9375rem] leading-relaxed text-muted-foreground"
              style={{ borderColor: "var(--gold)", fontFamily: "var(--sans)" }}
            >
              {data.dataPoint}
            </div>
          )}

          {data.takeaway && (
            <p
              className="mt-5 text-[0.9375rem] italic leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--sans)" }}
            >
              {data.takeaway}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

const NeighborhoodTemplate = (p: NeighborhoodProps) => {
  const lang = useLanguage();
  
  return (
    <>
      <PageMeta title={p.seoTitle} description={p.metaDesc} ogImage={p.ogImage} />
      <NeighborhoodJsonLd {...p.jsonLd} />
      <FAQPageJsonLd items={p.faq.items} url={p.jsonLd.url} />
      <HeroSection
        overline={p.hero.overline}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
        primaryCta={{ 
          label: p.cta.buttons[0]?.label ?? (lang === "en" ? "Consultation" : "Consultation"), 
          href: p.cta.buttons[0]?.href ?? (lang === "en" ? "/en/buyer-consultation" : "/consultation-acheteur") 
        }}
        secondaryCta={{ 
          label: p.cta.buttons[1]?.label ?? (lang === "en" ? "Valuation" : "Évaluation"), 
          href: p.cta.buttons[1]?.href ?? (lang === "en" ? "/en/home-valuation" : "/evaluation-gratuite-gatineau") 
        }}
        heroBgImage={p.hero.image}
      />
      <ImageTextSplit image={p.lifestyle.image} imageAlt={p.lifestyle.imageAlt} imagePosition="right">
        <div className="label-overline">{lang === "en" ? "The area" : "Le secteur"}</div>
        <h2 className="mt-3">{p.lifestyle.title}</h2>
        {p.lifestyle.subtitle && <p className="mt-2 text-muted-foreground">{p.lifestyle.subtitle}</p>}
        <div className="mt-7 space-y-3.5">
          {p.reasons.map((r) => (
            <div key={r} className="flex items-center gap-3">
              <CheckCircle2 size={16} className="shrink-0 text-accent" />
              <span className="text-[0.9375rem] text-foreground">{r}</span>
            </div>
          ))}
        </div>
      </ImageTextSplit>

      <CardGrid 
        overline={lang === "en" ? "Who it's for" : "Pour qui"} 
        title={p.profilesTitle} 
        items={p.profiles} 
        background="alt" 
      />

      <InlineCTA text={p.inlineCta.text} buttonLabel={p.inlineCta.label} href={p.inlineCta.href} />

      {p.brokerPerspective && (
        <BrokerPerspective data={p.brokerPerspective} neighborhoodName={p.jsonLd.name} />
      )}

      <FAQSection title={p.faq.title} items={p.faq.items} />

      <SectorLinks
        overline={p.sectors.overline ?? (lang === "en" ? "Other sectors" : "Autres secteurs")}
        title={p.sectors.title ?? (lang === "en" ? "Explore other neighborhoods" : "Explorer d'autres quartiers")}
        sectors={p.sectors.list}
      />

      <RelatedPages
        overline={p.related.overline}
        title={p.related.title ?? (lang === "en" ? "Read also" : "À lire aussi")}
        pages={p.related.pages}
        background="alt"
      />

      <GuideInlineCTA
        guideType={p.guide.type}
        headline={p.guide.headline}
        text={p.guide.text}
        ctaLabel={p.guide.ctaLabel}
      />

      <CTASection
        dark
        title={p.cta.title}
        text={p.cta.text}
        buttons={p.cta.buttons}
        trustLine={p.cta.trustLine}
      />

      <StickyGuideBanner guideType={p.guide.type} label={p.guide.stickyLabel} />
    </>
  );
};

export default NeighborhoodTemplate;
