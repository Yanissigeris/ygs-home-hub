import { ReactNode } from "react";
import OptimizedImage from "@/components/OptimizedImage";

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
  <section className={background === "alt" ? "section-padding bg-[var(--cream)]" : "section-padding bg-background"}>
    <div className="section-container grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
      <div
        className={imagePosition === "right" ? "" : "order-2 lg:order-1"}
      >
        {imagePosition === "right" ? (
          children
        ) : (
          <OptimizedImage
            src={image}
            alt={imageAlt}
            className={`rounded-[1.75rem] object-cover ${imageAspect} w-full`}
            fallbackColor="var(--ink)"
            width={648}
            height={486}
          />
        )}
      </div>
      <div
        className={imagePosition === "right" ? "" : "order-1 lg:order-2"}
      >
        {imagePosition === "right" ? (
          <OptimizedImage
            src={image}
            alt={imageAlt}
            className={`rounded-[1.75rem] object-cover ${imageAspect} w-full`}
            fallbackColor="var(--ink)"
            width={648}
            height={486}
          />
        ) : (
          children
        )}
      </div>
    </div>
  </section>
);

export default ImageTextSplit;
