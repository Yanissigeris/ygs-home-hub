import * as React from "react";
import { Star, Quote } from "lucide-react";
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

/** Generate a stable warm hue from a name string */
const avatarColor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const hue = ((hash % 60) + 200) % 360; // petrol-warm range
  return `hsl(${hue} 25% 35%)`;
};

const initials = (name: string) =>
  name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

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
              className="relative rounded-2xl border border-border/30 bg-card p-6 sm:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
            >
              <Quote size={20} className="mb-3 text-accent/20" />
              <p className="text-[0.9375rem] leading-[1.65] text-foreground/80 italic">
                {t.quote}
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-semibold tracking-wide text-primary-foreground"
                  style={{ backgroundColor: avatarColor(t.name) }}
                >
                  {initials(t.name)}
                </div>
                <div>
                  <p className="text-[0.8125rem] font-semibold text-foreground/85">{t.name}</p>
                  <p className="text-[0.75rem] text-muted-foreground/50">{t.location}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={11} className="fill-accent text-accent" />
                  ))}
                </div>
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
