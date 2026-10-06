import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { trackCTAClick } from "@/lib/analytics";

interface InlineCTAProps {
  text: string;
  buttonLabel: string;
  href: string;
}

const InlineCTA = React.forwardRef<HTMLElement, InlineCTAProps>(({ text, buttonLabel, href }, ref) => (
  <section ref={ref} className="cta-band">
    <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p>{text}</p>
      {/* The "hero" variant uses dark --gold-text for light backgrounds. This band is dark (--ink),
          so the label and border switch to --gold-bright here (6.67:1 on --ink). */}
      <Button
        size="default"
        variant="hero"
        asChild
        className="border-[var(--gold-bright)] text-[var(--gold-bright)] hover:bg-[var(--gold-bright)] hover:text-[var(--ink)]"
        onClick={() => trackCTAClick(buttonLabel, "inline-cta")}
      >
        <Link to={href}>{buttonLabel}</Link>
      </Button>
    </motion.div>
  </section>
));

InlineCTA.displayName = "InlineCTA";

export default InlineCTA;
