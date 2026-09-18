import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "pink" | "purple" | "neutral" | "glass";
}

export function Badge({ children, className, variant = "pink" }: BadgeProps) {
  const variantStyles = {
    pink: "bg-pink-500/10 text-[#ff008e] border-pink-500/20 shadow-[0_0_12px_rgba(255,0,142,0.15)]",
    purple: "bg-purple-500/10 text-[#726eff] border-purple-500/20 shadow-[0_0_12px_rgba(114,110,255,0.15)]",
    neutral: "bg-white/5 text-white/80 border-white/10",
    glass: "bg-white/[0.06] text-white border-white/12 backdrop-blur-md",
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
