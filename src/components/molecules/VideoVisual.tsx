import React from "react";
import { cn } from "@/lib/utils";

interface VideoVisualProps {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

export function VideoVisual({
  src,
  poster,
  className = "",
  aspectRatio = "16/9",
}: VideoVisualProps) {
  const aspectClasses = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-xl overflow-hidden bg-black/40 border border-white/[0.06]",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <video
        muted
        loop
        autoPlay
        playsInline
        webkit-playsinline="true"
        poster={poster}
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
