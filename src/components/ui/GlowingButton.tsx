"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  variant?: "gradient" | "white";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function GlowingButton({
  href,
  onClick,
  children,
  className,
  buttonClassName,
  variant = "gradient",
  size = "md",
  fullWidth = false,
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold",
    md: "px-5 py-2.5 text-sm font-semibold",
    lg: "px-7 py-3.5 text-base font-semibold",
  };

  const content = (
    <div
      className={cn(
        "glowing-wrapper",
        variant === "white" && "white-border",
        fullWidth && "w-full flex",
        className
      )}
    >
      <div className="glowing-wrapper-borders-masker">
        <div className="glowing-wrapper-borders" />
      </div>
      <div
        className={cn(
          "glowing-button-inner text-white",
          sizeClasses[size],
          fullWidth && "w-full",
          buttonClassName
        )}
      >
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn(fullWidth && "w-full")}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(fullWidth && "w-full", "bg-transparent border-0 p-0 cursor-pointer")}
    >
      {content}
    </button>
  );
}
