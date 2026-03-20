import { ReactNode } from"react";
import { motion } from"framer-motion";
import SectionHeading from"@/components/SectionHeading";

interface FormSectionProps {
 id?: string;
 title?: string;
 subtitle?: string;
 centered?: boolean;
 narrow?: boolean;
 background?:"default" |"alt";
 children: ReactNode;
}

const FormSection = ({
 id,
 title,
 subtitle,
 centered = true,
 narrow = true,
 background ="default",
 children,
}: FormSectionProps) => (
 <section id={id} className={background ==="alt" ?"section-padding bg-secondary/20" :"section-padding bg-background"}>
 <div className={`section-container ${narrow ?"max-w-[36rem]" :""}`}>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 >
 {title && <SectionHeading title={title} subtitle={subtitle} centered={centered} />}
 {children}
 </motion.div>
 </div>
 </section>
);

export default FormSection;
