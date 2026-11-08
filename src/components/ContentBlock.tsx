import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContentBlockProps {
  children: ReactNode;
  background?: "default" | "alt" | "white";
  narrow?: boolean;
  centered?: boolean;
  padSize?: "default" | "md";
  /** Titre à gauche, texte à droite (ordinateur). Le premier enfant doit être le titre. */
  split?: boolean;
}

const ContentBlock = ({
  children,
  background = "default",
  narrow = false,
  centered = false,
  padSize = "default",
  split = false,
}: ContentBlockProps) => (
  <section className={`${padSize === "md" ? "section-padding-md" : "section-padding"} ${background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
    <div className={`section-container ${narrow && !split ? "max-w-[44rem]" : ""}${split ? " max-w-[72rem]" : ""} ${centered ? "text-center" : ""}`}>
      <motion.div
        className={split ? "content-split" : undefined}
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  </section>
);

export default ContentBlock;
