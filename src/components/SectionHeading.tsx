interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered }: SectionHeadingProps) => (
  <div className={centered ? "text-center" : ""}>
    <h2 className="text-2xl sm:text-3xl text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
