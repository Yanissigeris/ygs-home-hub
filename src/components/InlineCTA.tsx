import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface InlineCTAProps {
  text: string;
  buttonLabel: string;
  href: string;
}

const InlineCTA = React.forwardRef<HTMLElement, InlineCTAProps>(({ text, buttonLabel, href }, ref) => (
  <section ref={ref} className="cta-band">
    <div className="section-container">
      <p>{text}</p>
      <Button size="default" variant="hero" asChild>
        <Link to={href}>{buttonLabel}</Link>
      </Button>
    </div>
  </section>
));

InlineCTA.displayName = "InlineCTA";

export default InlineCTA;
