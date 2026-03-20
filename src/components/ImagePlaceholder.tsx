import { ImageIcon } from"lucide-react";

interface ImagePlaceholderProps {
 label: string;
 className?: string;
 aspectRatio?: string;
}

const ImagePlaceholder = ({ label, className ="", aspectRatio ="aspect-[4/3]" }: ImagePlaceholderProps) => (
 <div className={`flex flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-border bg-muted/30 ${aspectRatio} ${className}`}>
 <ImageIcon className="mb-2 h-7 w-7 text-muted-foreground/20" />
 <span className="text-[0.8125rem] text-muted-foreground/35 text-center px-8 leading-relaxed">[{label}]</span>
 </div>
);

export default ImagePlaceholder;
