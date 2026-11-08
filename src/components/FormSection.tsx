import { ReactNode } from "react";
import SectionHeading from "@/components/SectionHeading";

interface FormSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  narrow?: boolean;
  background?: "default" | "alt";
  children: ReactNode;
}

const FormSection = ({
  id,
  title,
  subtitle,
  centered = true,
  narrow = true,
  background = "default",
  children,
}: FormSectionProps) => (
  <section id={id} className={background === "alt" ? "section-padding bg-[var(--cream)]" : "section-padding bg-background"}>
    <div className={`section-container ${narrow ? "max-w-[36rem]" : ""}`}>
      <div
      >
        {title && <SectionHeading title={title} subtitle={subtitle} centered={centered} />}
        {children}
      </div>
    </div>
  </section>
);

export default FormSection;
