import React from "react";
import { cn } from "@/lib/utils";

interface GlassPillProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPill({ children, className = "" }: GlassPillProps) {
  return (
    <div
      className={cn(
        "glass-pill rounded-full w-full max-w-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
