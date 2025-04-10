import * as React from "react";
import { cn } from "../../lib/utils";

interface CollapseProps {
  heading: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function Collapse({
  heading,
  children,
  className,
  defaultOpen = false,
}: CollapseProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn("max-w-96 rounded-sm border-0", className)}
      style={{
        backgroundColor: "rgb(27, 36, 44)",
        color: "rgb(170, 184, 197)",
      }}
    >
      <button
        className={cn(
          "flex w-full items-center justify-between px-4 py-3 bg-[rgb(43,62,78)] cursor-default",
          isOpen ? "rounded-t-sm" : "rounded-sm"
        )}
        aria-expanded={isOpen}
      >
        <div
          className="font-medium cursor-pointer"
          style={{
            backgroundColor: "transparent",
            color: "rgb(170, 184, 197)",
          }}
          onClick={toggleCollapse}
        >
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
      </div>
    </div>
  );
}
