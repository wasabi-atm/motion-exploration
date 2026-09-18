import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 flex-shrink-0 z-10 p-1.5 -ml-1.5 rounded-full hover:opacity-90 active:scale-95 transition-all focus:outline-none ${className}`}
      aria-label="Motion The Agency Home"
      suppressHydrationWarning
    >
      {/* Mobile mark: Standalone pink "M" icon (<lg) */}
      <Image
        src="/images/motion-m-logo.png"
        alt="Motion Logo"
        width={34}
        height={34}
        priority
        className="h-8 w-8 object-contain lg:!hidden"
      />
      {/* Desktop logo: Full "Motion" mark with white typography (>=lg) */}
      <Image
        src="/images/Icon-with-White-Text.avif"
        alt="Motion The Agency Logo"
        width={115}
        height={32}
        priority
        style={{ width: "auto" }}
        className="!hidden lg:!inline-block h-8 w-auto object-contain"
      />
    </Link>
  );
}
