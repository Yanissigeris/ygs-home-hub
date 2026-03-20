import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface RelatedPage {
  title: string;
  text: string;
  href: string;
}

interface RelatedPagesProps {
  overline?: string;
  title?: string;
  pages: RelatedPage[];
  background?: "default" | "alt";
}

const RelatedPages = ({
  overline = "À lire aussi",
  title = "Pages connexes",
  pages,
  background = "default",
}: RelatedPagesProps) => (
  <section className={background === "alt" ? "section-padding bg-secondary/20" : "section-padding bg-background"}>
    <div className="section-container max-w-[52rem]">
      <motion.div
        className="text-center mb-10 max-w-[40rem] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading overline={overline} title={title} centered />
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        {pages.map((page, i) => (
          <motion.div
            key={page.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to={page.href}
              className="card-elevated group flex items-start gap-4 border border-border/40 bg-card px-6 py-5 h-full"
            >
              <div className="flex-1">
                <h3 className="text-[1rem] font-semibold group-hover:text-primary transition-colors">{page.title}</h3>
                <p className="mt-1.5 text-[0.875rem] leading-[1.6] text-muted-foreground">{page.text}</p>
              </div>
              <ArrowRight size={16} className="mt-1 shrink-0 text-muted-foreground/30 group-hover:text-primary transition-all group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedPages;
