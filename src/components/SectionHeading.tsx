import * as React from"react";

interface SectionHeadingProps {
 overline?: string;
 title: string;
 subtitle?: string;
 centered?: boolean;
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
 ({ overline, title, subtitle, centered }, ref) => (
 <div ref={ref} className={centered ?"text-center" :""}>
 {overline && <p className="label-overline mb-3">{overline}</p>}
 <h2>{title}</h2>
 {subtitle && (
 <p className={`prose-body mt-4 ${centered ?"mx-auto" :""}`}>{subtitle}</p>
 )}
 </div>
 ),
);

SectionHeading.displayName ="SectionHeading";

export default SectionHeading;
