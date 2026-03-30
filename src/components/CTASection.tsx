import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CTASectionProps {
  overline?: string;
  title: string;
  text?: string;
  buttons: { label: string; href: string; variant?: "default" | "outline" | "accent" }[];
  trustLine?: string;
  dark?: boolean;
}

const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
  ({ overline, title, text, buttons, trustLine, dark }, ref) => (
    <section
      ref={ref}
      className={dark ? "py-16 sm:py-24 hero-gradient relative overflow-hidden" : "section-padding bg-secondary/30"}
    >
      {dark && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(195_30%_28%_/_0.08)_0%,_transparent_50%)]" />}
      <motion.div
        className={`section-container relative text-center ${dark ? "text-primary-foreground" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {overline && <p className={`label-overline mb-3 ${dark ? "text-primary-foreground/25" : ""}`}>{overline}</p>}
        <h2 className={`mx-auto max-w-lg ${dark ? "text-primary-foreground" : ""}`}>{title}</h2>
        {text && <p className={`mx-auto mt-4 max-w-md text-[1.0625rem] leading-[1.6] ${dark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{text}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          {buttons.map((btn) => (
            <Button
              key={btn.label}
              size="xl"
              variant={dark
                ? (btn.variant === "outline" ? "hero-outline" : "accent")
                : (btn.variant === "outline" ? "outline" : "accent")
              }
              className={dark && btn.variant !== "outline" ? "shadow-md" : ""}
              asChild
            >
              <Link to={btn.href}>{btn.label === "Obtenir ma valeur" ? "Évaluation gratuite" : btn.label}</Link>
            </Button>
          ))}
        </div>
        {trustLine && (
          <p className={`mt-5 text-[0.8125rem] ${dark ? "text-primary-foreground/25" : "text-muted-foreground/45"}`}>{trustLine}</p>
        )}
      </motion.div>
    </section>
  ),
);

CTASection.displayName = "CTASection";

export default CTASection;
