import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

const ImagePlaceholder = ({ label, className = "", aspectRatio = "aspect-[4/3]" }: ImagePlaceholderProps) => (
  <div className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted ${aspectRatio} ${className}`}>
    <ImageIcon className="mb-2 h-8 w-8 text-muted-foreground/40" />
    <span className="text-xs text-muted-foreground/60 text-center px-4">[Placeholder: {label}]</span>
  </div>
);

export default ImagePlaceholder;
