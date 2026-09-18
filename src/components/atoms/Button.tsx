import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold",
    md: "px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold",
    lg: "px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-extrabold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] text-white shadow-[0_0_24px_rgba(255,0,142,0.45)] hover:shadow-[0_0_32px_rgba(255,0,142,0.7)] hover:brightness-110 border border-[#ff4dcb]/30",
    secondary:
      "bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/12 backdrop-blur-md shadow-lg",
    ghost:
      "bg-transparent hover:bg-white/[0.06] text-white/90 hover:text-white border border-transparent",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-all duration-200 active:scale-95 text-center select-none";

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} suppressHydrationWarning>
        {children}
        {icon && <span className="flex-shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}
