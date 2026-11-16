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
  /** Optional real photo per step: edge-to-edge photo strip. */
  images?: { src: string; alt: string; width: number; height: number }[];
}

const ProcessSteps = ({
  overline,
  title,
  steps,
  background = "default",
  tone = "default",
  images,
}: ProcessStepsProps) => {
  const night = tone === "night";
  const lang = useLanguage();
  const resolvedOverline = overline ?? (lang === "en" ? "The process" : "Le processus");
  const resolvedTitle = title ?? (lang === "en" ? "How it works" : "Comment ça fonctionne");
  if (images) {
    return (
      <section className={`section-padding ${night ? "process-night" : background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
        <div className="section-container">
          <h2 className="max-w-[40rem]" style={night ? { color: "var(--cream)" } : undefined}>{resolvedTitle}</h2>
        </div>
        <ol className="mt-10 flex snap-x snap-mandatory gap-[3px] overflow-x-auto lg:mt-14 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {steps.map((s, i) => (
            <li key={s.num} className="w-[86vw] shrink-0 snap-start lg:w-auto">
              <img
                src={images[i]?.src}
                alt={images[i]?.alt ?? ""}
                width={images[i]?.width}
                height={images[i]?.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
              />
              <div className={`px-5 pt-7 sm:px-6 lg:pr-10 ${i === 0 ? "lg:pl-[max(2rem,calc((100vw-1240px)/2+2rem))]" : "lg:pl-10"}`}>
                <p aria-hidden="true" className="[font-family:var(--display)] text-[0.9375rem] font-semibold tabular-nums text-[var(--action)]">{i + 1}</p>
                <h3 className="mt-2 [font-family:var(--display)] text-[1.625rem] font-semibold leading-[1.1] tracking-[-0.03em] lg:text-[1.875rem]" style={night ? { color: "var(--cream)" } : undefined}>{s.title}</h3>
                <p className={`mt-3 max-w-[24rem] text-[0.9375rem] leading-[1.6] ${night ? "text-[rgba(247,244,238,0.78)]" : "text-muted-foreground"}`}>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }
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
