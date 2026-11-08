import * as React from "react";
import { canonicalPath } from "@/lib/url-utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { trackCTAClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

const RecommendedLabel = () => <>{useLanguage() === "en" ? "Recommended" : "Recommandé"}</>;

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
  background?: "default" | "alt" | "white";
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
      className={`section-padding ${background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}
    >
      <div className="section-container max-w-[56rem]">
        <div
          className="text-center mb-10 max-w-[40rem] mx-auto"
        >
          <SectionHeading overline={overline} title={title} subtitle={subtitle} centered />
        </div>
        <div className={`grid gap-5 ${steps.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {steps.map((step, i) => (
            <div
              key={step.title}
            >
              <Link
                to={canonicalPath(step.href)}
                className={`group relative flex flex-col h-full border px-6 py-6 sm:px-7 sm:py-7 transition-[border-color,box-shadow] duration-200 ${
                  step.highlight
                    ? "bg-[var(--ink)] border-[var(--ink)] hover:shadow-lg"
                    : "bg-transparent border-[#D9DEEA] hover:border-[var(--gold)]/40"
                }`}
                onClick={() => trackCTAClick(step.cta, "funnel-next-step")}
              >
                {step.highlight && (
                  <span
                    className="self-start mb-4 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.18em] border border-[rgba(247,244,238,0.4)] text-[var(--cream)]"
                    style={{ fontFamily: "var(--sans)" }}
                  >
                    <RecommendedLabel />
                  </span>
                )}
                <h3
                  className={`text-[1.25rem] leading-tight ${step.highlight ? "text-[var(--cream)]" : "text-[var(--ink)] font-semibold"}`}
                  style={step.highlight ? { fontFamily: "var(--serif)" } : undefined}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-2.5 flex-1 text-[0.9375rem] leading-[1.6] ${step.highlight ? "" : "text-muted-foreground"}`}
                  style={step.highlight ? { color: "color-mix(in oklab, var(--cream) 85%, transparent)" } : undefined}
                >
                  {step.text}
                </p>
                <span className={`mt-5 inline-flex items-center gap-2 text-[0.875rem] font-semibold ${step.highlight ? "text-[var(--gold-bright)]" : "text-[var(--ink)]"}`}>
                  {step.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
);

FunnelNextStep.displayName = "FunnelNextStep";

export default FunnelNextStep;
