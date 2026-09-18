import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function SectionTitle({ children, className, as: Component = "h2" }: HeadingProps) {
  return (
    <Component
      className={cn(
        "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function EyebrowCaps({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "text-xs sm:text-sm font-bold tracking-widest text-[#ff4dcb] uppercase mb-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Subheading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl",
        className
      )}
    >
      {children}
    </p>
  );
}

export function GradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "text-transparent bg-clip-text bg-gradient-to-r from-[#ff008e] via-[#ff4dcb] to-[#726eff]",
        className
      )}
    >
      {children}
    </span>
  );
}
