import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  overline?: string;
  title: string;
  text?: string;
  buttons: { label: string; href: string; variant?: "default" | "outline" | "accent" }[];
  trustLine?: string;
  dark?: boolean;
}

const CTASection = ({ overline, title, text, buttons, trustLine, dark }: CTASectionProps) => (
  <section className={dark ? "section-padding hero-gradient relative overflow-hidden" : "section-padding bg-secondary/50"}>
    {dark && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(195_30%_28%_/_0.1)_0%,_transparent_55%)]" />}
    <div className={`section-container relative text-center ${dark ? "text-primary-foreground" : ""}`}>
      {overline && <p className={`label-overline mb-3 ${dark ? "text-primary-foreground/40" : ""}`}>{overline}</p>}
      <h2 className={`mx-auto max-w-xl ${dark ? "text-primary-foreground" : ""}`}>{title}</h2>
      {text && <p className={`mx-auto mt-3 max-w-lg text-[0.9375rem] leading-relaxed ${dark ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{text}</p>}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {buttons.map((btn) => (
          <Button
            key={btn.label}
            size="lg"
            variant={dark ? (btn.variant === "outline" ? "hero-outline" : "hero") : (btn.variant || "default")}
            asChild
          >
            <Link to={btn.href}>{btn.label}</Link>
          </Button>
        ))}
      </div>
      {trustLine && (
        <p className={`mt-4 text-[0.6875rem] ${dark ? "text-primary-foreground/35" : "text-muted-foreground/60"}`}>{trustLine}</p>
      )}
    </div>
  </section>
);

export default CTASection;
