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
  <section className={dark ? "py-14 sm:py-20 hero-gradient relative overflow-hidden" : "section-padding bg-secondary/40"}>
    {dark && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(195_30%_28%_/_0.08)_0%,_transparent_50%)]" />}
    <div className={`section-container relative text-center ${dark ? "text-primary-foreground" : ""}`}>
      {overline && <p className={`label-overline mb-2 ${dark ? "text-primary-foreground/30" : ""}`}>{overline}</p>}
      <h2 className={`mx-auto max-w-lg ${dark ? "text-primary-foreground" : ""}`}>{title}</h2>
      {text && <p className={`mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{text}</p>}
      <div className="mt-7 flex flex-wrap justify-center gap-3">
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
        <p className={`mt-3 text-[0.625rem] ${dark ? "text-primary-foreground/28" : "text-muted-foreground/50"}`}>{trustLine}</p>
      )}
    </div>
  </section>
);

export default CTASection;
