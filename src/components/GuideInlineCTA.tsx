import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Lock, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import GuideModal, { type GuideType } from "@/components/GuideModal";

interface GuideInlineCTAProps {
  guideType: GuideType;
  headline: string;
  text: string;
  ctaLabel?: string;
}

const GuideInlineCTA = ({ guideType, headline, text, ctaLabel = "Recevoir le guide gratuit" }: GuideInlineCTAProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="section-padding"
      >
        <div className="section-container max-w-[52rem]">
          <div className="relative overflow-hidden rounded-2xl border border-accent/15 bg-gradient-to-br from-primary via-primary to-[hsl(200_42%_20%)] px-6 py-8 sm:px-10 sm:py-10">
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <p className="flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.12em] uppercase text-accent/80 mb-2">
                  <BookOpen size={13} className="text-accent" />
                  Guide gratuit
                </p>
                <h3
                  className="text-[1.15rem] sm:text-[1.3rem] font-semibold text-primary-foreground leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {headline}
                </h3>
                <p className="mt-2 text-[0.8125rem] text-primary-foreground/70 leading-relaxed max-w-md">
                  {text}
                </p>
                <div className="mt-2 flex gap-4 text-[0.7rem] text-primary-foreground/40">
                  <span className="flex items-center gap-1"><BadgeCheck size={11} /> Gratuit</span>
                  <span className="flex items-center gap-1"><Lock size={11} /> Sans engagement</span>
                </div>
              </div>
              <div className="shrink-0">
                <Button
                  variant="accent"
                  size="lg"
                  className="font-semibold w-full sm:w-auto"
                  onClick={() => setOpen(true)}
                >
                  {ctaLabel}
                  <ArrowRight size={14} className="ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <GuideModal open={open} onOpenChange={setOpen} guideType={guideType} />
    </>
  );
};

export default GuideInlineCTA;
