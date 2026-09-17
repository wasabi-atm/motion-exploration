"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { Badge } from "@/components/ui/Badge";
import { Play, Sparkles, Layers, Palette } from "lucide-react";

export function Services() {
  const [activeTab, setActiveTab] = useState<"video" | "3d" | "design">("video");

  const categories = [
    { id: "video", label: "Video Services", icon: Play },
    { id: "3d", label: "Animation & 3D", icon: Sparkles },
    { id: "design", label: "Design & UI", icon: Palette },
  ];

  const servicesData = {
    video: [
      {
        title: "Product Explainer Videos",
        description: "Engaging 60-90 second explainers simplifying complex SaaS, B2B, or AI products with high conversion punch.",
        image: "/images/Showcase-1.avif",
        tag: "High Conversion",
      },
      {
        title: "Interactive Product Demos",
        description: "Pixel-perfect interface animations showcasing key product workflows, onboarding steps, and feature releases.",
        image: "/images/Showcase-1-3.avif",
        tag: "SaaS Favorite",
      },
      {
        title: "Paid Social & Ad Creatives",
        description: "High-energy scroll-stopping video ads optimized for LinkedIn, Meta, YouTube, and X campaigns.",
        image: "/images/Marketing.avif",
        tag: "Growth Engine",
      },
    ],
    "3d": [
      {
        title: "3D Hardware & Device Renders",
        description: "Photorealistic 3D models and lighting environments showcasing hardware, consumer electronics, or abstract concepts.",
        image: "/images/AI.avif",
        tag: "Photorealistic",
      },
      {
        title: "Abstract Particle & Kinetic Motion",
        description: "Mesmerizing visual loops, particle simulations, and brand physics that elevate website hero sections and keynote presentations.",
        image: "/images/Showcase-1.avif",
        tag: "Hero Visuals",
      },
      {
        title: "Animated Brand Identity",
        description: "Logo reveals, motion design systems, and animated typography guidelines built for modern digital platforms.",
        image: "/images/Showcase-1-3.avif",
        tag: "Brand Elevation",
      },
    ],
    design: [
      {
        title: "Investor Pitch Decks & Keynotes",
        description: "Transform dense financial models and strategic visions into cinematic, high-stakes investor presentations.",
        image: "/images/Marketing.avif",
        tag: "Fundraising",
      },
      {
        title: "Modern UI/UX Visual Concepts",
        description: "Futuristic visual prototypes, landing page mockups, and micro-interactions designed to validate features quickly.",
        image: "/images/AI.avif",
        tag: "UI Specialist",
      },
      {
        title: "Digital Vector Illustrations",
        description: "Custom editorial illustrations, iconography, and graphic asset libraries tailored to your company design system.",
        image: "/images/Showcase-1.avif",
        tag: "Design System",
      },
    ],
  };

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="purple">Comprehensive Creative Capabilities</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            <span className="text-[#ff008e]">Everything you need </span>
            to stand out in crowded markets
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            From 60-second viral product launches to detailed 3D hardware animations, our team handles the entire production pipeline.
          </p>

          {/* Interactive Category Selector Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 mt-6 backdrop-blur-xl">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] text-white shadow-lg shadow-pink-500/20"
                      : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="spotlight-card rounded-3xl p-6 flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/90">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#ff4dcb] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/[0.08]">
                <GlowingButton href="/contact-us.html" variant="white" size="sm" fullWidth>
                  Request project
                </GlowingButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
