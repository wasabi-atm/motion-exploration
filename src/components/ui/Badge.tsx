import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "pink" | "purple" | "neutral";
}

export function Badge({ children, className, variant = "pink" }: BadgeProps) {
  const variantStyles = {
    pink: "bg-pink-500/10 text-[#ff008e] border-pink-500/20",
    purple: "bg-purple-500/10 text-[#726eff] border-purple-500/20",
    neutral: "bg-white/5 text-white/80 border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
