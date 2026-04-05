import { useEffect } from "react";
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

export interface NeighborhoodProps {
  seoTitle: string;
  metaDesc: string;
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

const NeighborhoodTemplate = (p: NeighborhoodProps) => (
  <>
    <PageMeta title={p.seoTitle} description={p.metaDesc} />
    <NeighborhoodJsonLd {...p.jsonLd} />
    <FAQPageJsonLd items={p.faq.items} url={p.jsonLd.url} />
    <HeroSection
      overline={p.hero.overline}
      title={p.hero.title}
      subtitle={p.hero.subtitle}
      primaryCta={{ label: p.cta.buttons[0]?.label ?? "Consultation", href: p.cta.buttons[0]?.href ?? "/consultation-acheteur" }}
      secondaryCta={{ label: p.cta.buttons[1]?.label ?? "Évaluation", href: p.cta.buttons[1]?.href ?? "/evaluation-gratuite-gatineau" }}
      heroBgImage={p.hero.image}
    />
<ImageTextSplit image={p.lifestyle.image} imageAlt={p.lifestyle.imageAlt} imagePosition="right">
      <div className="label-overline">Le secteur</div>
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

    <CardGrid overline="Pour qui" title={p.profilesTitle} items={p.profiles} background="alt" />

    <InlineCTA text={p.inlineCta.text} buttonLabel={p.inlineCta.label} href={p.inlineCta.href} />

    <FAQSection title={p.faq.title} items={p.faq.items} />

    <SectorLinks
      overline={p.sectors.overline ?? "Autres secteurs"}
      title={p.sectors.title ?? "Explorer d'autres quartiers"}
      sectors={p.sectors.list}
    />

    <RelatedPages
      overline={p.related.overline}
      title={p.related.title ?? "À lire aussi"}
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

export default NeighborhoodTemplate;
