import * as React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface MiniTestimonial {
  quote: string;
  name: string;
  location: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface SocialProofStripProps {
  stats: StatItem[];
  testimonials: MiniTestimonial[];
}

const ease = [0.22, 1, 0.36, 1] as const;

const SocialProofStrip = React.forwardRef<HTMLElement, SocialProofStripProps>(
  ({ stats, testimonials }, ref) => (
    <section ref={ref} className="section-padding-md bg-secondary/20">
      <div className="section-container max-w-[64rem]">
        {/* Stats row */}
        <motion.div
          className="mb-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 sm:gap-x-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && (
                <div className="hidden h-10 w-px bg-border/40 sm:block" />
              )}
              <div className="text-center">
                <p className="font-heading text-[1.75rem] font-bold leading-none tracking-tight text-foreground sm:text-[2rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[0.8125rem] font-medium tracking-wide text-muted-foreground/60">
                  {stat.label}
                </p>
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Mini testimonials */}
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              className="rounded-2xl border border-border/30 bg-card p-5 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
            >
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-[0.9375rem] leading-[1.6] text-foreground/85">
                "{t.quote}"
              </p>
              <footer className="mt-3 text-[0.8125rem] font-medium text-muted-foreground/55">
                {t.name}
                <span className="mx-1.5 text-border">·</span>
                {t.location}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
);

SocialProofStrip.displayName = "SocialProofStrip";

export default SocialProofStrip;
