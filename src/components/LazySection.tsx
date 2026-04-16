import { useRef, useState, useEffect, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  /** Placeholder height while waiting */
  minHeight?: number;
  /** IntersectionObserver rootMargin */
  rootMargin?: string;
  className?: string;
}

/**
 * Wraps children in an IntersectionObserver — renders them only once visible.
 * Use for third-party embeds and heavy below-fold sections.
 */
const LazySection = ({ children, minHeight = 200, rootMargin = "200px", className }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
};

export default LazySection;
