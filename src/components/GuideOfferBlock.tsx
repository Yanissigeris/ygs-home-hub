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

  const defaultLabels: Record<string, string> = {
    seller_guide: "Recevoir le guide vendeur",
    buyer_guide: "Recevoir le guide acheteur",
    investor_guide: "Recevoir le guide investisseur",
    relocation_guide: "Recevoir le guide relocalisation",
  };
  const label = ctaLabel ?? defaultLabels[guideType] ?? "Recevoir le guide";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`flex flex-col h-full overflow-hidden rounded-[var(--card-radius)] border border-border p-4 sm:p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300 ${
          background === "alt" ? "bg-secondary/30" : "bg-card"
        }`}
      >
        <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 mb-3 sm:mb-4">
          <BookOpen size={20} className="text-accent" />
        </div>
        <h3
          className="text-[1.05rem] font-semibold text-foreground leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-[0.8125rem] text-muted-foreground leading-relaxed flex-1">
          {subtitle}
        </p>
        <Button
          variant="accent"
          size="default"
          className="mt-3 sm:mt-5 w-full sm:w-auto self-start text-[0.8125rem] max-w-full"
          onClick={() => setOpen(true)}
        >
          <span className="truncate">{label}</span>
          <ArrowRight size={14} className="ml-1 shrink-0" />
        </Button>
      </motion.div>

      <GuideModal open={open} onOpenChange={setOpen} guideType={guideType} />
    </>
  );
};

export default GuideOfferBlock;
