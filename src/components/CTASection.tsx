import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  text?: string;
  buttons: { label: string; href: string; variant?: "default" | "outline" }[];
}

const CTASection = ({ title, text, buttons }: CTASectionProps) => (
  <section className="section-padding bg-secondary">
    <div className="section-container text-center">
      <h2 className="text-2xl sm:text-3xl text-foreground">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{text}</p>}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {buttons.map((btn) => (
          <Button key={btn.label} size="lg" variant={btn.variant || "default"} asChild>
            <Link to={btn.href}>{btn.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  </section>
);

export default CTASection;
