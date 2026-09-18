"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const PROJECTS = [
  {
    title: "ClickUp: Reimagining the All-In-One Workspace",
    client: "ClickUp",
    category: "Product Explainer & 3D",
    metric: "+320% Demo Conversions",
    videoPoster:
      "https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6762d12035bb6b0be95f50f5_AI-Enhanced%20Analytics%20(1)%20(1)-p-800.avif",
    href: "/customer-stories/clickup",
  },
  {
    title: "Primer: Payment Infrastructure for Global Commerce",
    client: "Primer",
    category: "Technical Architecture Motion",
    metric: "Series B Announcement Reel",
    videoPoster:
      "https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/671f9c9ac06267864b559c34_Frame%201707478781-p-800.png",
    href: "/customer-stories/primer",
  },
  {
    title: "Sealit: Zero-Trust Encryption Simplified",
    client: "Sealit",
    category: "Security Software Demo",
    metric: "4.2x LinkedIn Engagement",
    videoPoster:
      "https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/67b824f7928bc2daa0b3e427_Gradient%20Background%20purple-p-500.png",
    href: "/customer-stories/sealit",
  },
];

export function EditorialWorkShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-xs font-bold text-[#ff008e] mb-4">
              Featured Case Studies
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0e0a20]">
              Selected <span className="font-serif italic font-normal text-[#581de3]">Motion</span> Works
            </h2>
            <p className="mt-4 text-lg text-[#5e5a73] max-w-xl">
              Real projects delivered for industry leaders, designed to captivate audiences and deliver measurable ROI.
            </p>
          </div>

          <Link
            href="/our-work"
            suppressHydrationWarning
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#faf7fd] hover:bg-[#581de3] text-[#0e0a20] hover:text-white font-bold text-sm border border-[#eae2f2] transition-all duration-200"
          >
            <span>View All 80+ Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Bold Editorial Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              suppressHydrationWarning
              className="group flex flex-col rounded-3xl bg-[#faf7fd] hover:bg-white border border-[#eae2f2] hover:border-[#581de3]/40 overflow-hidden shadow-[0_15px_35px_rgba(35,22,81,0.04)] hover:shadow-[0_20px_50px_rgba(88,29,227,0.1)] transition-all duration-300"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-[16/10] bg-[#100b24] overflow-hidden">
                <img
                  src={project.videoPoster}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#ff008e] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="absolute top-4 left-4 bg-[#140e36]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                  {project.metric}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#8a859c] uppercase tracking-wider mb-2">
                    <span>{project.client}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0e0a20] group-hover:text-[#581de3] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-[#eae2f2] flex items-center text-sm font-bold text-[#ff008e] group-hover:translate-x-1 transition-transform">
                  <span>Read full case study</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
