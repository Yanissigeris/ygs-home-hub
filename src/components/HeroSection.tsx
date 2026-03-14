import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const HeroSection = ({ title, subtitle, primaryCta, secondaryCta }: HeroSectionProps) => (
  <section className="hero-gradient section-padding text-primary-foreground">
    <div className="section-container">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <Button size="lg" variant="secondary" asChild>
                <Link to={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
            )}
            {secondaryCta && (
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
