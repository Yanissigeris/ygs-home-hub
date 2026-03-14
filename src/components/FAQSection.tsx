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
    <div className="section-container max-w-2xl">
      <h2 className="text-center">{title}</h2>
      <Accordion type="single" collapsible className="mt-8">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
            <AccordionTrigger className="text-left font-body text-[0.875rem] font-medium text-foreground hover:no-underline py-4">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="prose-body pb-4 text-[0.8125rem]">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
