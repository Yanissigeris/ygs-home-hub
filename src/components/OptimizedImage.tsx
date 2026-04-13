import { useState, useRef, useEffect, CSSProperties } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
  fetchPriority?: "high" | "low" | "auto";
  role?: string;
  itemProp?: string;
  /** Fallback bg color if image fails to load */
  fallbackColor?: string;
  /** Show blur-up placeholder while loading */
  blurPlaceholder?: boolean;
  /** Aspect ratio for CLS-safe container (e.g. "16/9", "4/3") */
  aspectRatio?: string;
  /** WebP source for <picture> element */
  webpSrc?: string;
}

/**
 * Optimized image component with:
 * - Blur-up placeholder while loading
 * - Graceful fallback on error (solid color, no broken icon)
 * - Aspect-ratio container to prevent CLS
 * - loading="lazy" + decoding="async" by default
 * - Optional <picture> with WebP source
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  style,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  role,
  itemProp,
  fallbackColor,
  blurPlaceholder = true,
  aspectRatio,
  webpSrc,
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if already cached/loaded
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  // Compute aspect ratio from width/height if not explicitly provided
  const computedAspectRatio = aspectRatio || (width && height ? `${width}/${height}` : undefined);

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: fallbackColor || "var(--ink)",
          width: width || "100%",
          height: height || "100%",
          aspectRatio: computedAspectRatio,
        }}
        role={role}
        aria-hidden={role === "presentation" ? true : undefined}
      />
    );
  }

  const imgElement = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        transition: blurPlaceholder ? "filter 0.4s ease-out, opacity 0.4s ease-out" : undefined,
        filter: blurPlaceholder && !loaded ? "blur(12px)" : "none",
        opacity: blurPlaceholder && !loaded ? 0.7 : 1,
      }}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      role={role}
      itemProp={itemProp}
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
    />
  );

  // Wrap in <picture> if webpSrc provided
  const content = webpSrc ? (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      {imgElement}
    </picture>
  ) : imgElement;

  // Wrap in aspect-ratio container if dimensions available
  if (computedAspectRatio) {
    return (
      <div style={{ aspectRatio: computedAspectRatio, overflow: "hidden" }}>
        {content}
      </div>
    );
  }

  return content;
};

export default OptimizedImage;
