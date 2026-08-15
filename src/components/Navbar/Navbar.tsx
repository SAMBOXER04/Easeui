import React from "react";
import { cn } from "@/libs/utils";

interface NavbarProps {
  logo?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;

  variant?: "default" | "dark" | "transparent" | "outline";

  sticky?: boolean;
  fullWidth?: boolean;

  className?: string;
}

const Navbar = ({
  logo,
  children,
  actions,
  variant = "default",
  sticky = false,
  fullWidth = false,
  className,
}: NavbarProps) => {
  const variants = {
    default:
      "bg-white border-b border-gray-200 text-gray-700",

    dark:
      "bg-slate-900 text-white",

    transparent:
      "bg-transparent text-white",

    outline:
      "bg-white border border-gray-300 text-gray-700 rounded-lg",
  };

  return (
    <nav
      className={cn(
        "w-full",
        variants[variant],
        sticky && "sticky top-0 z-50",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-6 px-6 py-4",
          !fullWidth && "max-w-7xl mx-auto"
        )}
      >
        {/* Logo */}
        {logo && (
          <div className="shrink-0">
            {logo}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {children}
        </div>

        {/* Actions */}
        {actions && (
          <div className="flex items-center gap-3">
            {actions}
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.displayName = "Navbar";

export { Navbar };