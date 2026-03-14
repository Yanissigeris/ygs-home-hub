import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

const ImagePlaceholder = ({ label, className = "", aspectRatio = "aspect-[4/3]" }: ImagePlaceholderProps) => (
  <div className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 ${aspectRatio} ${className}`}>
    <ImageIcon className="mb-1.5 h-6 w-6 text-muted-foreground/25" />
    <span className="text-[0.625rem] text-muted-foreground/40 text-center px-6 leading-relaxed">[{label}]</span>
  </div>
);

export default ImagePlaceholder;
