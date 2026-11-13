import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  overline?: string;
  title?: string;
  steps: Step[];
  background?: "default" | "alt" | "white";
  /** Fond bleu nuit pour créer une pause visuelle dans la page. */
  tone?: "default" | "night";
}

const ProcessSteps = ({
  overline,
  title,
  steps,
  background = "default",
  tone = "default",
}: ProcessStepsProps) => {
  const night = tone === "night";
  const lang = useLanguage();
  const resolvedOverline = overline ?? (lang === "en" ? "The process" : "Le processus");
  const resolvedTitle = title ?? (lang === "en" ? "How it works" : "Comment ça fonctionne");
  return (
  <section className={`section-padding ${night ? "process-night" : background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
    <div className="section-container">
      <div
        className="mb-12 max-w-[40rem]"
      >
        <SectionHeading overline={resolvedOverline} title={resolvedTitle} />
      </div>
      <div className="grid gap-6 sm:gap-7 sm:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.num}
          >
            <div className={night ? "border border-[rgba(247,244,238,0.18)] p-7 sm:p-8 h-full rounded-[var(--radius)]" : "card-elevated border border-border/40 bg-card p-7 sm:p-8 h-full"}>
              <h3 className="text-[1.125rem]" style={night ? { color: "var(--cream)" } : undefined}>{s.title}</h3>
              <p className={`mt-3 text-[0.9375rem] leading-[1.6] ${night ? "text-[rgba(247,244,238,0.78)]" : "text-muted-foreground"}`}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ProcessSteps;
