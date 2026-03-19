import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import GuideModal, { type GuideType } from "@/components/GuideModal";

interface GuideOfferBlockProps {
  guideType: GuideType;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  background?: "default" | "alt";
}

const GuideOfferBlock = ({
  guideType,
  title,
  subtitle,
  ctaLabel,
  background = "default",
}: GuideOfferBlockProps) => {
  const [open, setOpen] = useState(false);

  const label =
    ctaLabel ??
    (guideType === "seller_guide"
      ? "Recevoir le guide vendeur"
      : "Recevoir le guide acheteur");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`rounded-[var(--card-radius)] border border-border p-6 sm:p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300 ${
          background === "alt" ? "bg-secondary/30" : "bg-card"
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
            <BookOpen size={20} className="text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-[1.05rem] font-semibold text-foreground leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h3>
            <p className="mt-1.5 text-[0.8125rem] text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
            <Button
              variant="accent"
              size="default"
              className="mt-4"
              onClick={() => setOpen(true)}
            >
              {label}
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </div>
      </motion.div>

      <GuideModal open={open} onOpenChange={setOpen} guideType={guideType} />
    </>
  );
};

export default GuideOfferBlock;
