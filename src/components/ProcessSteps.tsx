import { motion } from "framer-motion";
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
  background?: "default" | "alt";
}

const ProcessSteps = ({
  overline,
  title,
  steps,
  background = "default",
}: ProcessStepsProps) => {
  const lang = useLanguage();
  const resolvedOverline = overline ?? (lang === "en" ? "The process" : "Le processus");
  const resolvedTitle = title ?? (lang === "en" ? "How it works" : "Comment ça fonctionne");
  return (
  <section className={background === "alt" ? "section-padding bg-[var(--cream)]" : "section-padding bg-background"}>
    <div className="section-container">
      <motion.div
        className="text-center mb-12 max-w-[40rem] mx-auto"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading overline={resolvedOverline} title={resolvedTitle} centered />
      </motion.div>
      <div className="grid gap-6 sm:gap-7 sm:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-elevated border border-border/40 bg-card p-7 sm:p-8 h-full">
              <h3 className="text-[1.125rem]">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ProcessSteps;
