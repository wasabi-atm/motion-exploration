"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles } from "lucide-react";
import { GlowingButton } from "@/components/ui/GlowingButton";

interface VideoItem {
  id: string;
  title: string;
  client: string;
  category: "Explainer" | "SaaS Demo" | "3D Motion" | "Social Ads";
  thumbnail: string;
  videoUrl: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "1",
    title: "ClickUp Platform Walkthrough & 3D Feature Launch",
    client: "ClickUp",
    category: "SaaS Demo",
    thumbnail: "/images/Showcase-1-3.avif",
    videoUrl: "https://www.youtube.com/watch?v=r0y_C24-e5Y",
  },
  {
    id: "2",
    title: "Apollo.io High-Growth B2B Sizzle Reel",
    client: "Apollo.io",
    category: "Explainer",
    thumbnail: "/images/Showcase-1.avif",
    videoUrl: "https://www.youtube.com/watch?v=r0y_C24-e5Y",
  },
  {
    id: "3",
    title: "Autonomous AI Intelligence Explainer",
    client: "AI Venture",
    category: "3D Motion",
    thumbnail: "/images/AI.avif",
    videoUrl: "https://www.youtube.com/watch?v=r0y_C24-e5Y",
  },
  {
    id: "4",
    title: "High-Velocity Multi-Channel Growth Ad",
    client: "Scaleup Inc",
    category: "Social Ads",
    thumbnail: "/images/Marketing.avif",
    videoUrl: "https://www.youtube.com/watch?v=r0y_C24-e5Y",
  },
];

export function VideoShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);

  const categories = ["All", "Explainer", "SaaS Demo", "3D Motion", "Social Ads"];

  const filteredVideos =
    activeCategory === "All"
      ? VIDEOS
      : VIDEOS.filter((v) => v.category === activeCategory);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#07050e] border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#ff008e]/10 via-[#581de3]/15 to-transparent blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-white/50">
            Our Latest Work
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff008e] via-[#ff4dcb] to-[#726eff]">
              Video examples
            </span>{" "}
            that show our capabilities
          </h2>

          <div className="pt-2">
            <GlowingButton href="/our-work.html" variant="gradient" size="md">
              See our works
            </GlowingButton>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-white text-black shadow-md"
                    : "bg-white/[0.05] text-white/70 hover:bg-white/[0.1] hover:text-white border border-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Video Player Card */}
        <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group">
          <div className="relative aspect-video w-full">
            <Image
              src={activeVideo.thumbnail}
              alt={activeVideo.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

            {/* Glowing Play Button Trigger */}
            <a
              href={activeVideo.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-20 w-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white shadow-2xl shadow-pink-500/30 group-hover:scale-110 group-hover:bg-[#ff008e] transition-all duration-300"
            >
              <Play className="h-8 w-8 fill-current translate-x-0.5" />
            </a>

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="space-y-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#ff008e]/20 text-[#ff4dcb] border border-[#ff008e]/30">
                  {activeVideo.category} • {activeVideo.client}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white max-w-xl drop-shadow-md">
                  {activeVideo.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnail Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 max-w-5xl mx-auto">
          {filteredVideos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video)}
              className={`relative rounded-2xl overflow-hidden border p-1 text-left transition-all group ${
                activeVideo.id === video.id
                  ? "border-[#ff008e] ring-2 ring-[#ff008e]/40 shadow-lg shadow-pink-500/20"
                  : "border-white/10 hover:border-white/30 bg-white/[0.02]"
              }`}
            >
              <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-[11px] font-semibold text-white truncate">
                    {video.client}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
