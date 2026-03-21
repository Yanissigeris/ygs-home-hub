import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      <Button size="default" variant="hero" asChild>
        <Link to={href}>{buttonLabel}</Link>
      </Button>
    </motion.div>
  </section>
));

InlineCTA.displayName = "InlineCTA";

export default InlineCTA;
