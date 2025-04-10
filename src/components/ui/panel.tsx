import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const panelVariants = cva(
  "border", 
  {
    variants: {
      variant: {
        default: "border-[#374151] rounded-sm",
        primary: "border-emerald-600 rounded-sm",
        success: "border-blue-600 rounded-sm",
        info: "border-cyan-600 rounded-sm",
        warning: "border-orange-500 rounded-sm",
        danger: "border-rose-600 rounded-sm",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof panelVariants> {
  title?: string;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, variant, title, footer, icon, children, ...props }, ref) => {
    return (
      <div
        className={cn(panelVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {title && (
          <div className={cn(
            "text-sm font-semibold p-2 px-4 border-b border-inherit text-left flex items-center gap-2 rounded-sm rounded-b-none",
            {
              "bg-transparent text-white": variant === "default",
              "bg-emerald-500 text-white": variant === "primary",
              "bg-blue-500 text-white": variant === "success",
              "bg-cyan-500 text-white": variant === "info",
              "bg-orange-400 text-white": variant === "warning",
              "bg-rose-500 text-white": variant === "danger",
            }
          )}>
            {variant === "info" && (
              <img
                src="./info.svg"
                alt="info"
                className="h-5 w-5 brightness-0 invert"
              />
            )}
            {variant === "warning" && (
              <img
                src="./warning.svg"
                alt="warning"
                className="h-5 w-5 brightness-0 invert"
              />
            )}
            {icon && <span>{icon}</span>}
            {title}
          </div>
        )}
        <div className="p-4 text-sm text-gray-400 bg-transparent text-left">{children}</div>
        {footer && (
          <div className="px-4 py-3 mt-4 border-t border-inherit text-sm text-white/90 text-left">{footer}</div>
        )}
      </div>
    );
  }
);
Panel.displayName = "Panel";

export { Panel, panelVariants };