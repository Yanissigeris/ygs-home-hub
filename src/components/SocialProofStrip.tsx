/* refresh */
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
  testimonials?: MiniTestimonial[];
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
  ({ stats }, ref) => (
    <section ref={ref} className="py-5 sm:py-7 bg-secondary/20">
      <div className="section-container max-w-[64rem]">
        <motion.div
          className="flex items-center justify-center gap-x-6 sm:gap-x-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && (
                <div className="h-9 w-px bg-border/40" />
              )}
              <div className="text-center">
                <p className="font-heading text-[1.25rem] font-bold leading-none tracking-tight text-foreground sm:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[0.8125rem] font-medium tracking-wide text-muted-foreground/60">
                  {stat.label}
                </p>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
);

SocialProofStrip.displayName = "SocialProofStrip";

export default SocialProofStrip;
