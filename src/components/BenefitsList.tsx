import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface BenefitsListProps {
  overline?: string;
  title: string;
  items: string[];
  background?: "default" | "alt";
}

const BenefitsList = ({ overline, title, items, background = "alt" }: BenefitsListProps) => (
  <section className={background === "alt" ? "section-padding bg-secondary/25" : "section-padding bg-background"}>
    <div className="section-container max-w-[44rem]">
      <div
      >
        <SectionHeading overline={overline} title={title} />
      </div>
      <div className="mt-8 space-y-4">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-start gap-3.5"
          >
            <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[var(--ink-soft)]" />
            <span className="text-[1rem] text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsList;
