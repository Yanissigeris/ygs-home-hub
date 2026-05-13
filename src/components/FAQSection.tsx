import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
  /** How many items to show before "Show more" (default 5) */
  initialVisible?: number;
}

const FAQ_JSONLD_PREFIX = "ygs-faq-jsonld";

const FAQSection = React.forwardRef<HTMLElement, FAQSectionProps>(
  ({ title, items, initialVisible = 5 }, ref) => {
    const lang = useLanguage();
    const resolvedTitle = title ?? (lang === "en" ? "Frequently asked questions" : "Questions fréquentes");
    const [expanded, setExpanded] = React.useState(false);
    const accordionRef = React.useRef<HTMLDivElement | null>(null);
    const firstNewIndexRef = React.useRef<number>(initialVisible);
    // Stable per-instance id so multiple <FAQSection> on the same page
    // (e.g. /faq has 4) each emit their own JSON-LD instead of overwriting
    // a shared element id. Google accepts multiple FAQPage blocks per page.
    const instanceId = React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
    const jsonLdId = `${FAQ_JSONLD_PREFIX}-${instanceId}`;

    const visibleItems = expanded ? items : items.slice(0, initialVisible);
    const hasMore = items.length > initialVisible;

    // Full schema with ALL items (not just visible) for SEO
    React.useEffect(() => {
      const prev = document.getElementById(jsonLdId);
      if (prev) prev.remove();

      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = jsonLdId;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        const el = document.getElementById(jsonLdId);
        if (el) el.remove();
      };
    }, [items, jsonLdId]);

    // After expanding, move keyboard focus to the first newly revealed question
    // so screen-reader and keyboard users land on the new content (WCAG 2.4.3 / 4.1.3).
    React.useEffect(() => {
      if (!expanded || !accordionRef.current) return;
      const triggers = accordionRef.current.querySelectorAll<HTMLButtonElement>(
        '[data-radix-collection-item] button, button[aria-expanded]'
      );
      const target = triggers[firstNewIndexRef.current];
      if (target) {
        // next tick to let Radix mount the new items
        const id = window.setTimeout(() => target.focus(), 50);
        return () => window.clearTimeout(id);
      }
    }, [expanded]);

    const accordionId = React.useId();

    return (
      <section ref={ref} className="section-padding bg-background">
        <div className="section-container max-w-[44rem]">
          <motion.div
            className="text-center mb-5 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-overline mb-2">FAQ</p>
            <h2>{resolvedTitle}</h2>
          </motion.div>

          <div ref={accordionRef} id={accordionId}>
            <Accordion type="single" collapsible defaultValue="faq-0">
              {visibleItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-body text-[0.9375rem] font-medium text-foreground hover:no-underline gap-3">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.875rem] leading-[1.65] text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Hidden items for SEO crawlability — always in DOM.
              Note: sr-only + aria-hidden is intentional: visible to crawlers
              (text in DOM) but excluded from screen-reader DOM since the
              same Q&A is exposed via the interactive accordion above when
              the user clicks "Show all". */}
          {!expanded && hasMore && (
            <div className="sr-only" aria-hidden="true">
              {items.slice(initialVisible).map((item, i) => (
                <div key={`seo-${i}`}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          )}

          {hasMore && !expanded && (
            <button
              onClick={() => setExpanded(true)}
              aria-expanded={expanded}
              aria-controls={accordionId}
              className="mt-4 mx-auto flex items-center gap-1.5 text-[0.875rem] font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {lang === "en" ? `Show all ${items.length} questions` : `Voir les ${items.length} questions`}
              <ChevronDown size={14} aria-hidden="true" />
            </button>
          )}
        </div>
      </section>
    );
  },
);

export default FAQSection;
