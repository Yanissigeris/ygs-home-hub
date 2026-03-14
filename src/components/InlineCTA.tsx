import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface InlineCTAProps {
  text: string;
  buttonLabel: string;
  href: string;
}

const InlineCTA = ({ text, buttonLabel, href }: InlineCTAProps) => (
  <section className="cta-band">
    <div className="section-container">
      <p>{text}</p>
      <Button size="default" variant="hero" asChild>
        <Link to={href}>{buttonLabel}</Link>
      </Button>
    </div>
  </section>
);

export default InlineCTA;
