"use client";

import React from "react";

const STATS = [
  {
    value: "2,500+",
    label: "Videos Produced",
    description: "High-impact 3D, 2D, and UI animations shipped across 18 countries.",
  },
  {
    value: "48h",
    label: "First Draft Delivery",
    description: "Lightning-fast storyboards and styleframes to keep your launch on schedule.",
  },
  {
    value: "4.9/5",
    label: "Clutch & G2 Rating",
    description: "Verified 5-star reviews from Y Combinator founders and tech CMOs.",
  },
  {
    value: "3.4x",
    label: "Average Conversion Lift",
    description: "Measurable pipeline impact across landing pages and paid acquisition.",
  },
];

export function EditorialMetrics() {
  return (
    <section className="py-20 sm:py-28 bg-[#130e26] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff008e]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#581de3]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#ff4dcb]">
            Proven Track Record
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Built for velocity, trusted for <span className="font-serif italic font-normal text-[#ff4dcb]">craft</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#ff008e]/40 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-base font-bold text-[#ff4dcb] mt-2">
                {stat.label}
              </div>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
