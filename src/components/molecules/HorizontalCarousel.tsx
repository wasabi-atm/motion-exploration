import React from "react";
import { cn } from "@/lib/utils";

interface HorizontalCarouselProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function HorizontalCarousel({
  children,
  columns = 3,
  className = "",
}: HorizontalCarouselProps) {
  const desktopGridClasses = {
    2: "md:grid md:grid-cols-2",
    3: "md:grid md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={cn(
        // Mobile: Full-bleed unclipped horizontal scroll container with snap & peek
        "flex flex-nowrap overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-pl-5 scroll-pr-5",
        "-mx-5 px-5 pt-3 pb-6 gap-4",
        "scrollbar-thin [scrollbar-color:rgba(255,0,142,0.4)_transparent]",
        // Desktop: Grid layout
        desktopGridClasses[columns],
        "md:mx-0 md:px-0 md:pt-0 md:pb-0 md:gap-8 md:overflow-visible md:snap-none",
        className
      )}
    >
      {React.Children.map(children, (child, idx) => (
        <div
          key={idx}
          className="flex-none w-[80vw] max-w-[340px] snap-start md:w-auto md:max-w-none md:flex-initial"
        >
          {child}
        </div>
      ))}
      {/* Spacer to guarantee right padding after last item on mobile */}
      <div className="flex-none w-1 md:hidden pointer-events-none" />
    </div>
  );
}
