import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQTeaserProps {
  overline?: string;
  title?: string;
  items: { q: string; a: string }[];
  linkLabel?: string;
  linkHref?: string;
}

const HomeFAQTeaser = React.forwardRef<HTMLElement, FAQTeaserProps>(
  ({ overline = "FAQ", title = "Questions fréquentes", items, linkLabel = "Voir toutes les questions", linkHref = "/faq" }, ref) => (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="section-container max-w-[44rem]">
        <motion.div
          className="text-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-overline mb-3">{overline}</p>
          <h2>{title}</h2>
        </motion.div>
        <Accordion type="single" collapsible>
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-body text-[1rem] font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[0.9375rem] leading-[1.65] text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-6 text-center">
          <Link
            to={linkHref}
            className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary hover:underline"
          >
            {linkLabel}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  ),
);

HomeFAQTeaser.displayName = "HomeFAQTeaser";

export default HomeFAQTeaser;
