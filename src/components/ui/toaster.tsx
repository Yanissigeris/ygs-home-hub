import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export const Toaster = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { toasts } = useToast();

  return (
    <div ref={ref} {...props}>
      {React.createElement(
        ToastProvider,
        null,
        <>
          {toasts.map(function ({ id, title, description, action, ...toastProps }) {
            return (
              <Toast key={id} {...toastProps}>
                <div className="grid gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}
                  {description && <ToastDescription>{description}</ToastDescription>}
                </div>
                {action}
                <ToastClose />
              </Toast>
            );
          })}
          <ToastViewport />
        </>,
      )}
    </div>
  );
});

Toaster.displayName = "Toaster";
