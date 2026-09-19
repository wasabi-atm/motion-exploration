"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Clock, Globe, DollarSign } from "lucide-react";

// Real benefits from index.html (lines 3290-3345)
const ASSURANCES = [
  {
    title: "14 Day return policy",
    description: "We want you to feel confident. You can try our service absolutely risk-free.",
    icon: ShieldCheck,
  },
  {
    title: "Upfront pricing",
    description: "Transparent rates and clear deliverables with zero hidden costs or surprises.",
    icon: DollarSign,
  },
  {
    title: "Fast turnaround",
    description: "Request a video sample and we will deliver your bespoke concept within 48 hours.",
    icon: Clock,
  },
  {
    title: "Global working hours",
    description: "UK-registered studio servicing clients across the USA, UK, Europe, and AUS.",
    icon: Globe,
  },
];

export function EditorialCTA() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8fc] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] bg-gradient-to-tr from-[#fbf5fd] via-[#ffffff] to-[#f4edfd] border border-[#e6dbf0] text-[#0e0a20] p-10 sm:p-16 lg:p-20 overflow-hidden shadow-[0_25px_60px_rgba(35,22,81,0.06)]">
          {/* Subtle ambient light glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff008e]/08 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#581de3]/08 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-[#581de3] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#ff008e]" />
              <span>Zero-Risk Creative Sample</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06] text-[#0e0a20]">
              Make your brand{" "}
              <span className="font-instrument italic font-normal text-[#ff008e]">
                move!
              </span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[#5e5a73] max-w-xl mx-auto leading-relaxed">
              Start your first video request risk-free and enjoy our other unique benefits.
            </p>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/get-free-sample"
                suppressHydrationWarning
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] text-white font-bold text-base sm:text-lg shadow-[0_12px_32px_rgba(255,0,142,0.35)] hover:shadow-[0_16px_45px_rgba(255,0,142,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Get free sample</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact-us"
                suppressHydrationWarning
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#faf7fd] text-[#0e0a20] font-bold text-base sm:text-lg border border-[#e2d7ed] shadow-sm hover:border-[#581de3]/40 transition-all"
              >
                <span>Book a call</span>
              </Link>
            </div>

            {/* Real 4 Assurances from index.html (lines 3290-3345) */}
            <div className="mt-16 pt-12 border-t border-[#eae2f2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {ASSURANCES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-white border border-[#eae2f2] shadow-[0_8px_20px_rgba(35,22,81,0.03)]"
                  >
                    <div className="flex items-center gap-2 text-[#581de3] font-bold text-sm mb-1.5">
                      <Icon className="w-4 h-4 text-[#ff008e]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#5e5a73] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
