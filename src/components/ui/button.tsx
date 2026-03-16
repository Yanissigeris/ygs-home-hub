import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md rounded-[0.875rem]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[0.875rem]",
        outline: "border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/20 rounded-[0.875rem]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70 rounded-[0.875rem]",
        ghost: "hover:bg-secondary hover:text-foreground rounded-[0.75rem]",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary-foreground text-primary shadow-sm hover:bg-primary-foreground/90 hover:shadow-md font-semibold rounded-[0.875rem]",
        "hero-outline": "border border-primary-foreground/20 text-primary-foreground/50 bg-transparent hover:bg-primary-foreground/[0.05] hover:border-primary-foreground/25 hover:text-primary-foreground/70 font-medium rounded-[0.875rem] backdrop-blur-sm",
        accent: "bg-accent text-accent-foreground shadow-sm hover:bg-[hsl(36_38%_42%)] hover:shadow-md font-semibold rounded-[0.875rem]",
      },
      size: {
        default: "h-11 px-6 py-2 text-[0.875rem]",
        sm: "h-10 px-5 text-[0.8125rem]",
        lg: "h-12 px-7 text-[0.9375rem]",
        xl: "h-[3.25rem] px-8 text-[0.9375rem] sm:text-[0.9375rem]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
