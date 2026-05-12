import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { trackCTAClick } from "@/lib/analytics";

interface FunnelStep {
  title: string;
  text: string;
  href: string;
  cta: string;
  highlight?: boolean;
}

interface FunnelNextStepProps {
  overline?: string;
  title: string;
  subtitle?: string;
  steps: FunnelStep[];
  background?: "default" | "alt";
}

const FunnelNextStep = React.forwardRef<HTMLElement, FunnelNextStepProps>(
  ({
    overline,
    title,
    subtitle,
    steps,
    background = "default",
  }, ref) => (
    <section
      ref={ref}
      className={background === "alt" ? "section-padding bg-[var(--cream)]" : "section-padding bg-background"}
    >
      <div className="section-container max-w-[56rem]">
        <motion.div
          className="text-center mb-10 max-w-[40rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading overline={overline} title={title} subtitle={subtitle} centered />
        </motion.div>
        <div className={`grid gap-5 ${steps.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={step.href}
                className={`group relative flex flex-col h-full border px-6 py-6 sm:px-7 sm:py-7 transition-all duration-200 ${
                  step.highlight
                    ? "bg-[var(--ink)] border-[var(--ink)] hover:shadow-lg"
                    : "bg-transparent border-[#D9E1E5] hover:border-[var(--gold)]/40"
                }`}
                onClick={() => trackCTAClick(step.cta, "funnel-next-step")}
              >
                {step.highlight && (
                  <span
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.18em] bg-[var(--gold)] text-[var(--cream)]"
                    style={{ fontFamily: "var(--sans)" }}
                  >
                    Recommandé
                  </span>
                )}
                <h3
                  className={`text-[1.25rem] leading-tight ${step.highlight ? "text-[var(--cream)]" : "text-[var(--ink)] font-semibold"}`}
                  style={step.highlight ? { fontFamily: "var(--serif)" } : undefined}
                >
                  {step.title}
                </h3>
                <p className={`mt-2.5 flex-1 text-[0.9375rem] leading-[1.6] ${step.highlight ? "text-[var(--cream)]/85" : "text-muted-foreground"}`}>
                  {step.text}
                </p>
                <span className={`mt-5 inline-flex items-center gap-2 text-[0.875rem] font-semibold ${step.highlight ? "text-[var(--gold)]" : "text-[var(--ink)]"}`}>
                  {step.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  ),
);

FunnelNextStep.displayName = "FunnelNextStep";

export default FunnelNextStep;
