import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

const ImagePlaceholder = ({ label, className = "", aspectRatio = "aspect-[4/3]" }: ImagePlaceholderProps) => (
  <div className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 ${aspectRatio} ${className}`}>
    <ImageIcon className="mb-2 h-7 w-7 text-muted-foreground/30" />
    <span className="text-[0.6875rem] text-muted-foreground/50 text-center px-6 leading-relaxed">[{label}]</span>
  </div>
);

export default ImagePlaceholder;
