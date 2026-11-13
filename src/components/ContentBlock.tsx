import { ReactNode } from "react";

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
    <div className={`section-container ${narrow && !split ? "max-w-[44rem]" : ""} ${centered ? "text-center" : ""}`}>
      <div
        className={split ? "content-split" : undefined}
      >
        {children}
      </div>
    </div>
  </section>
);

export default ContentBlock;
