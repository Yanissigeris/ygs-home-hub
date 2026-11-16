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
  /** Optional real photo per step: steps then descend like a staircase. */
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
  return (
  <section className={`section-padding ${night ? "process-night" : background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
    <div className="section-container">
      <div
        className="mb-12 max-w-[40rem]"
      >
        <SectionHeading overline={resolvedOverline} title={resolvedTitle} />
      </div>
      {images ? (
        <ol className="scroll-px-5 sm:scroll-px-6 md:scroll-px-8 lg:scroll-px-0 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className={`w-[78%] max-w-[20rem] shrink-0 snap-start sm:w-[55%] lg:w-auto lg:max-w-none ${i === 1 ? "lg:mt-24" : i === 2 ? "lg:mt-48" : ""}`}
            >
              <img
                src={images[i]?.src}
                alt={images[i]?.alt ?? ""}
                width={images[i]?.width}
                height={images[i]?.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover lg:rounded-[1.5rem]"
              />
              <div className="mt-6 flex items-baseline gap-4">
                <span aria-hidden="true" className="[font-family:var(--display)] text-[0.9375rem] font-semibold tabular-nums text-[var(--action)]">{s.num}</span>
                <h3 className="text-[1.375rem] lg:text-[1.5rem]" style={night ? { color: "var(--cream)" } : undefined}>{s.title}</h3>
              </div>
              <p className={`mt-3 text-[0.9375rem] leading-[1.6] ${night ? "text-[rgba(247,244,238,0.78)]" : "text-muted-foreground"}`}>{s.desc}</p>
            </li>
          ))}
        </ol>
      ) : (
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
      )}
    </div>
  </section>
  );
};

export default ProcessSteps;
