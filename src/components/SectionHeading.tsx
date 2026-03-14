interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ overline, title, subtitle, centered }: SectionHeadingProps) => (
  <div className={centered ? "text-center" : ""}>
    {overline && <p className="label-overline mb-3">{overline}</p>}
    <h2>{title}</h2>
    {subtitle && (
      <p className={`prose-body mt-4 ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
