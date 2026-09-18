"use client";

import React from "react";
import { Sparkles, Layers, Rocket } from "lucide-react";

const STEPS = [
  {
    step: "Step 01",
    title: "Deep-Dive Strategy & Script",
    description:
      "We interview your product team, understand your exact ICP, and distill complex features into a punchy, persuasive narrative script within 48 hours.",
    icon: Sparkles,
    timeline: "Days 1–3",
  },
  {
    step: "Step 02",
    title: "Styleframes, 3D & Motion Craft",
    description:
      "Our motion directors develop bespoke 3D assets, typography systems, and soundscapes. You receive interactive Figma styleframes before animation begins.",
    icon: Layers,
    timeline: "Days 4–9",
  },
  {
    step: "Step 03",
    title: "Polish & Multi-Format Launch",
    description:
      "Iterate in real-time via Slack or Frame.io. Final exports delivered in 4K, 16:9, 9:16 vertical, and ultra-lightweight Lottie JSON for web apps.",
    icon: Rocket,
    timeline: "Days 10–12",
  },
];

export function EditorialProcess() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8fc] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#581de3] mb-4">
            Studio Operating Model
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0e0a20]">
            How we deliver <span className="font-serif italic font-normal text-[#581de3]">without</span> the agency bloat.
          </h2>
          <p className="mt-4 text-lg text-[#5e5a73]">
            A streamlined 3-phase production pipeline designed for product leaders who value speed, precision, and zero time-wasting meetings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-3xl bg-white border border-[#eae2f2] p-8 sm:p-10 shadow-[0_15px_35px_rgba(35,22,81,0.04)] hover:border-[#581de3]/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#faf7fd] border border-[#ece5f3] flex items-center justify-center text-[#581de3]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#706a85] bg-[#faf7fd] px-3 py-1 rounded-full border border-[#ece5f3]">
                    {item.timeline}
                  </span>
                </div>

                <div className="text-sm font-bold text-[#ff008e] uppercase tracking-wider mb-2">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-[#0e0a20] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-[#5e5a73] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
