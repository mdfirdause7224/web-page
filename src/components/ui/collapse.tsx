import * as React from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const collapseVariants = cva(
  "max-w-96 rounded-sm border", 
  {
    variants: {
      variant: {
        default: "border-gray-400",
        primary: "border-emerald-500",
        success: "border-blue-500",
        info: "border-cyan-500",
        warning: "border-orange-400",
        danger: "border-rose-500",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CollapseProps extends VariantProps<typeof collapseVariants> {
  heading: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  footer?: React.ReactNode;
}

export function Collapse({
  heading,
  children,
  className,
  defaultOpen = false,
  variant,
  footer,
}: CollapseProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(collapseVariants({ variant, className }))}
      style={{
        backgroundColor: "rgb(27, 36, 44)",
        color: "rgb(170, 184, 197)",
      }}
    >
      <button
        className={cn(
          "flex w-full items-center justify-between px-4 py-3 cursor-default",
          isOpen ? "rounded-t-sm" : "rounded-sm",
          {
            "border border-b-gray-400 bg-transparent text-white": variant === "default",
            "border border-emerald-500 bg-emerald-500 text-white": variant === "primary",
            "border border-blue-500 bg-blue-500 text-white": variant === "success",
            "border border-cyan-500 bg-cyan-500 text-white": variant === "info",
            "border border-orange-400 bg-orange-400 text-white": variant === "warning",
            "border border-rose-500 bg-rose-500 text-white": variant === "danger",
            "bg-[rgb(43,62,78)]": !variant
          }
        )}
        aria-expanded={isOpen}
      >
        <div
          className="font-medium cursor-pointer flex items-center gap-2"
          style={{
            backgroundColor: "transparent",
            color: "white",
          }}
          onClick={toggleCollapse}
        >
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
          {heading}
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-1000 ease-in-out bg-[rgb(27,36,44)] pl-0 rounded-sm",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className="px-5 py-4 text-left"
          style={{
            backgroundColor: "transparent",
            color: "rgb(170, 184, 197)",
          }}
        >
          {children}
        </div>
        {footer && isOpen && (
          <div className={cn(
            "px-4 py-3 mt-4 border-t text-sm text-white/90 text-left",
            {
              "border-gray-400": variant === "default",
              "border-emerald-500": variant === "primary",
              "border-blue-500": variant === "success",
              "border-cyan-500": variant === "info",
              "border-orange-400": variant === "warning",
              "border-rose-500": variant === "danger",
              "border-gray-300": !variant
            }
          )}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
