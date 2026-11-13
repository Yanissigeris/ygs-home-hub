import { Link } from "react-router-dom";
import { canonicalPath } from "@/lib/url-utils";
import { ArrowRight } from "lucide-react";
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
  background?: "default" | "alt" | "white";
}

const RelatedPages = ({
  overline = "À lire aussi",
  title = "Pages connexes",
  pages,
  background = "default",
}: RelatedPagesProps) => (
  <section className={`section-padding ${background === "alt" ? "bg-[var(--cream)]" : background === "white" ? "bg-white" : "bg-background"}`}>
    <div className="section-container">
      <div
        className="mb-6 sm:mb-10 max-w-[40rem]"
      >
        <SectionHeading overline={overline} title={title} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {pages.map((page, i) => (
          <div
            key={page.href}
          >
            <Link
              to={canonicalPath(page.href)}
              className="card-elevated group flex items-start gap-4 border border-border/40 bg-card px-6 py-5 h-full"
            >
              <div className="flex-1">
                <h3 className="text-[1rem] font-semibold group-hover:text-primary transition-colors">{page.title}</h3>
                <p className="mt-1.5 text-[0.875rem] leading-[1.6] text-muted-foreground">{page.text}</p>
              </div>
              <ArrowRight size={16} className="mt-1 shrink-0 text-muted-foreground/30 group-hover:text-primary transition-[color,transform] group-hover:translate-x-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedPages;
