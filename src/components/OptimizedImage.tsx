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
  role?: string;
  itemProp?: string;
  /** Fallback bg color if image fails to load */
  fallbackColor?: string;
  /** Show blur-up placeholder while loading */
  blurPlaceholder?: boolean;
}

/**
 * Optimized image component with:
 * - Blur-up placeholder while loading
 * - Graceful fallback on error (solid color, no broken icon)
 * - loading="lazy" by default
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
  role,
  itemProp,
  fallbackColor,
  blurPlaceholder = true,
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

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: fallbackColor || "var(--ink)",
          width: width || "100%",
          height: height || "100%",
        }}
        role={role}
        aria-hidden={role === "presentation" ? true : undefined}
      />
    );
  }

  return (
    <div className="relative" style={{ display: "contents" }}>
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
        role={role}
        itemProp={itemProp}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default OptimizedImage;
