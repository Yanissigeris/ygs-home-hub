import { ReactNode } from"react";
import { motion } from"framer-motion";

interface ContentBlockProps {
 children: ReactNode;
 background?:"default" |"alt";
 narrow?: boolean;
 centered?: boolean;
 padSize?:"default" |"md";
}

const ContentBlock = ({
 children,
 background ="default",
 narrow = false,
 centered = false,
 padSize ="default",
}: ContentBlockProps) => (
 <section className={`${padSize ==="md" ?"section-padding-md" :"section-padding"} ${background ==="alt" ?"bg-secondary/20" :"bg-background"}`}>
 <div className={`section-container ${narrow ?"max-w-[44rem]" :""} ${centered ?"text-center" :""}`}>
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin:"-80px" }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 >
 {children}
 </motion.div>
 </div>
 </section>
);

export default ContentBlock;
