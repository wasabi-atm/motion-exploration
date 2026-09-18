import React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function SpotlightCard({
  children,
  className = "",
  href,
  onClick,
}: SpotlightCardProps) {
  const baseClasses =
    "spotlight-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/[0.08] bg-[#140d24]/60 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 block";

  if (href) {
    return (
      <a href={href} className={cn(baseClasses, className)}>
        {children}
      </a>
    );
  }

  return (
    <div onClick={onClick} className={cn(baseClasses, className)}>
      {children}
    </div>
  );
}
