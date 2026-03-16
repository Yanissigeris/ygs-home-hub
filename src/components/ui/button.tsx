import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md rounded-[0.625rem] font-semibold",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[0.625rem] font-semibold",
        outline: "border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/20 rounded-[0.625rem] font-semibold",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/70 rounded-[0.625rem] font-semibold",
        ghost: "hover:bg-secondary hover:text-foreground rounded-[0.5rem] font-medium",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        hero: "bg-primary-foreground text-primary shadow-sm hover:bg-primary-foreground/92 hover:shadow-md font-semibold rounded-[0.625rem]",
        "hero-outline": "border border-primary-foreground/20 text-primary-foreground/60 bg-transparent hover:bg-primary-foreground/[0.05] hover:border-primary-foreground/28 hover:text-primary-foreground/75 font-medium rounded-[0.625rem]",
        accent: "bg-accent text-accent-foreground hover:bg-[hsl(36_38%_42%)] font-semibold rounded-[0.625rem]",
      },
      size: {
        default: "h-11 px-6 py-2 text-[0.8125rem]",
        sm: "h-9 px-4 text-[0.8125rem]",
        lg: "h-12 px-7 text-[0.875rem]",
        xl: "h-[3rem] px-7 text-[0.875rem]",
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
