import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

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
  overline = "Le processus",
  title = "Comment ça fonctionne",
  steps,
  background = "default",
}: ProcessStepsProps) => (
  <section className={background === "alt" ? "section-padding bg-secondary/20" : "section-padding bg-background"}>
    <div className="section-container">
      <motion.div
        className="text-center mb-12 max-w-[40rem] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading overline={overline} title={title} centered />
      </motion.div>
      <div className="grid gap-6 sm:gap-7 sm:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-elevated border border-border/40 bg-card p-7 sm:p-8 h-full">
              <span className="text-[2rem] font-heading font-bold text-accent/20 leading-none">
                {s.num}
              </span>
              <h3 className="mt-4 text-[1.125rem]">{s.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
