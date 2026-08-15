import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/libs/utils";

type TooltipSide = "top" | "bottom" | "left" | "right";
type TooltipAlign = "start" | "center" | "end";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;

  side?: TooltipSide;
  align?: TooltipAlign;
  sideOffset?: number;
  delayDuration?: number;

  disabled?: boolean;
  className?: string;
}

const Tooltip = ({
  children,
  content,
  side = "top",
  align = "center",
  sideOffset = 8,
  delayDuration = 200,
  disabled = false,
  className,
}: TooltipProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = () => {
    if (disabled) return;

    timeoutRef.current = setTimeout(() => {
      setOpen(true);
    }, delayDuration);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const getPositionClasses = () => {
    const positions = {
      top: {
        base: "bottom-full left-1/2 -translate-x-1/2 mb-[var(--tooltip-offset)]",
        start: "bottom-full left-0 mb-[var(--tooltip-offset)]",
        center:
          "bottom-full left-1/2 -translate-x-1/2 mb-[var(--tooltip-offset)]",
        end: "bottom-full right-0 mb-[var(--tooltip-offset)]",
      },

      bottom: {
        base: "top-full left-1/2 -translate-x-1/2 mt-[var(--tooltip-offset)]",
        start: "top-full left-0 mt-[var(--tooltip-offset)]",
        center:
          "top-full left-1/2 -translate-x-1/2 mt-[var(--tooltip-offset)]",
        end: "top-full right-0 mt-[var(--tooltip-offset)]",
      },

      left: {
        base: "right-full top-1/2 -translate-y-1/2 mr-[var(--tooltip-offset)]",
        start: "right-full top-0 mr-[var(--tooltip-offset)]",
        center:
          "right-full top-1/2 -translate-y-1/2 mr-[var(--tooltip-offset)]",
        end: "right-full bottom-0 mr-[var(--tooltip-offset)]",
      },

      right: {
        base: "left-full top-1/2 -translate-y-1/2 ml-[var(--tooltip-offset)]",
        start: "left-full top-0 ml-[var(--tooltip-offset)]",
        center:
          "left-full top-1/2 -translate-y-1/2 ml-[var(--tooltip-offset)]",
        end: "left-full bottom-0 ml-[var(--tooltip-offset)]",
      },
    };

    return positions[side][align];
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      style={
        {
          "--tooltip-offset": `${sideOffset}px`,
        } as React.CSSProperties
      }
    >
      {children}

      {!disabled && (
        <div
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-50 whitespace-nowrap",
            "rounded-md bg-slate-900 px-3 py-1.5",
            "text-xs font-medium text-white",
            "shadow-md",
            "transition-all duration-150",
            getPositionClasses(),
            open
              ? "visible scale-100 opacity-100"
              : "invisible scale-95 opacity-0",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = "Tooltip";

export { Tooltip };