import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  overline?: string;
  title: string;
  text?: string;
  buttons: { label: string; href: string; variant?: "default" | "outline" | "accent" }[];
  trustLine?: string;
}

const CTASection = ({ overline, title, text, buttons, trustLine }: CTASectionProps) => (
  <section className="section-padding bg-secondary/60">
    <div className="section-container text-center">
      {overline && <p className="label-overline mb-3">{overline}</p>}
      <h2 className="mx-auto max-w-2xl">{title}</h2>
      {text && <p className="prose-body mx-auto mt-4 text-center">{text}</p>}
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        {buttons.map((btn) => (
          <Button key={btn.label} size="lg" variant={btn.variant || "default"} asChild>
            <Link to={btn.href}>{btn.label}</Link>
          </Button>
        ))}
      </div>
      {trustLine && (
        <p className="mt-5 text-[0.75rem] text-muted-foreground/70">{trustLine}</p>
      )}
    </div>
  </section>
);

export default CTASection;
