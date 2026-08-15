import React from "react";
import { cn } from "@/libs/utils";

type LayoutDirection = "row" | "column";
type LayoutAlign = "start" | "center" | "end" | "stretch";
type LayoutJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  direction?: LayoutDirection;
  align?: LayoutAlign;
  justify?: LayoutJustify;

  gap?: number;
  padding?: number;

  fullWidth?: boolean;
  fullHeight?: boolean;
}

const Layout = ({
  children,
  direction = "row",
  align = "stretch",
  justify = "start",
  gap = 4,
  padding = 0,
  fullWidth = false,
  fullHeight = false,
  className,
  style,
  ...props
}: LayoutProps) => {
  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  return (
    <div
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        alignClasses[align],
        justifyClasses[justify],
        fullWidth && "w-full",
        fullHeight && "h-full",
        className
      )}
      style={{
        gap: `${gap * 4}px`,
        padding: `${padding * 4}px`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Layout.displayName = "Layout";

export { Layout };