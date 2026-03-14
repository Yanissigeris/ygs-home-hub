import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ImageTextSplitProps {
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children: ReactNode;
  background?: "default" | "alt";
  imageAspect?: string;
}

const ImageTextSplit = ({
  image,
  imageAlt,
  imagePosition = "right",
  children,
  background = "default",
  imageAspect = "aspect-[4/3]",
}: ImageTextSplitProps) => (
  <section className={background === "alt" ? "section-padding bg-secondary/20" : "section-padding bg-background"}>
    <div className="section-container grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
      <motion.div
        className={imagePosition === "right" ? "" : "order-2 lg:order-1"}
        initial={{ opacity: 0, x: imagePosition === "right" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {imagePosition === "right" ? (
          children
        ) : (
          <img
            src={image}
            alt={imageAlt}
            className={`rounded-[1.75rem] object-cover ${imageAspect} w-full`}
            loading="lazy"
          />
        )}
      </motion.div>
      <motion.div
        className={imagePosition === "right" ? "" : "order-1 lg:order-2"}
        initial={{ opacity: 0, x: imagePosition === "right" ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        {imagePosition === "right" ? (
          <img
            src={image}
            alt={imageAlt}
            className={`rounded-[1.75rem] object-cover ${imageAspect} w-full`}
            loading="lazy"
          />
        ) : (
          children
        )}
      </motion.div>
    </div>
  </section>
);

export default ImageTextSplit;
