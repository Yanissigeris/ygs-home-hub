import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

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
      className={background === "alt" ? "section-padding bg-secondary/20" : "section-padding bg-background"}
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
                className={`card-elevated group flex flex-col h-full border bg-card px-6 py-6 sm:px-7 sm:py-7 ${
                  step.highlight
                    ? "border-accent/25 ring-1 ring-accent/8"
                    : "border-border/40"
                }`}
              >
                <h3 className="text-[1.0625rem] font-semibold group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.9375rem] leading-[1.6] text-muted-foreground">
                  {step.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary">
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
