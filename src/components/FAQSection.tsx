import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

const FAQSection = React.forwardRef<HTMLElement, FAQSectionProps>(
  ({ title, items }, ref) => {
    const lang = useLanguage();
    const resolvedTitle = title ?? (lang === "en" ? "Frequently asked questions" : "Questions fréquentes");
    return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container max-w-[44rem]">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-overline mb-3">FAQ</p>
          <h2>{resolvedTitle}</h2>
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
      </div>
    </section>
    );
  },
);



export default FAQSection;
