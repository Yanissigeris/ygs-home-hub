import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

interface ClusterLink {
  label: string;
  href: string;
  detail: string;
}

interface LocalSEOClusterProps {
  overline?: string;
  title: string;
  links: ClusterLink[];
  background?: "default" | "alt";
}

const LocalSEOCluster = ({ overline, title, links, background = "default" }: LocalSEOClusterProps) => (
  <section className={background === "alt" ? "section-padding bg-secondary/20" : "section-padding bg-background"}>
    <div className="section-container max-w-[56rem]">
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading overline={overline} title={title} centered />
      </motion.div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to={link.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border/40 bg-card px-5 py-4 transition-all duration-200 hover:border-accent/25 hover:shadow-sm hover:-translate-y-0.5"
            >
              <div className="min-w-0">
                <p className="text-[0.9375rem] font-semibold text-foreground group-hover:text-primary transition-colors truncate">{link.label}</p>
                <p className="mt-0.5 text-[0.8125rem] text-muted-foreground/60 truncate">{link.detail}</p>
              </div>
              <ArrowRight size={14} className="shrink-0 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LocalSEOCluster;
