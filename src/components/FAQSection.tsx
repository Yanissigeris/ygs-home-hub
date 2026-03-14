import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

const FAQSection = ({ title = "Questions fréquentes", items }: FAQSectionProps) => (
  <section className="section-padding bg-background">
    <div className="section-container max-w-3xl">
      <h2 className="text-center">{title}</h2>
      <Accordion type="single" collapsible className="mt-10">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
            <AccordionTrigger className="text-left font-body text-[0.9375rem] font-medium text-foreground hover:no-underline py-5">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="prose-body pb-5">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
