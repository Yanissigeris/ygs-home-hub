import * as React from"react";

import { cn } from"@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, . .props }, ref) => {
 return (
 <textarea
 className={cn("flex min-h-[100px] w-full rounded-xl border border-input bg-background px-4 py-3 text-[0.9375rem] ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:border-primary/30 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
 className,
 )}
 ref={ref}
 {...props}
 />
 );
});
Textarea.displayName ="Textarea";

export { Textarea };
