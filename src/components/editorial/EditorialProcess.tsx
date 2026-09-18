"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Layers, Rocket, ArrowRight } from "lucide-react";

// Real process steps from index.html (lines 2040-2115)
const PROCESS_STEPS = [
  {
    num: "01",
    tag: "TRY OUR SERVICE FOR FREE",
    title: "Free sample",
    description:
      "We believe that the best way to see our work is to experience it for yourself. This way, you can see our work for yourself and decide if we’re a good fit for your needs.",
    image: "/images/Frame-1707478607_1.avif",
    action: {
      text: "Get free sample",
      href: "/get-free-sample",
    },
    icon: Sparkles,
  },
  {
    num: "02",
    tag: "PROJECT PLANNING",
    title: "Planning & collaboration",
    description:
      "Once you’re happy with our sample, we’ll move on to the storyboard planning stage. This is where we’ll work with you to create a detailed plan for your video.",
    image: "/images/Frame-1707478608_1.avif",
    action: {
      text: "Explore our process",
      href: "/contact-us",
    },
    icon: Layers,
  },
  {
    num: "03",
    tag: "SWIFT & EASY ACCESS",
    title: "Final delivery",
    description:
      "Once the storyboard is approved, we’ll start producing the video. We’ll also work with you to make sure that the video is match with expectation.",
    image: "/images/Frame-1707478584_1.avif",
    action: {
      text: "See video pricing",
      href: "/pricing/motion-graphics-price",
    },
    icon: Rocket,
  },
];

export function EditorialProcess() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-mono font-bold text-[#581de3] uppercase tracking-wider mb-4">
            Streamlined Process
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0e0a20]">
            Powerful systems for{" "}
            <span className="font-serif italic font-normal text-[#581de3]">
              effective workflow.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5e5a73] leading-relaxed">
            Our workflow process is designed to be streamlined and stress-free, allowing you to have full creative control or a completely hands-off approach. One thing remains true: we start every project with a sample so you know you are in the hands of designers who understand your brand.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative rounded-3xl bg-[#faf7fd] hover:bg-white border border-[#eae2f2] hover:border-[#581de3]/40 p-8 sm:p-10 shadow-[0_15px_35px_rgba(35,22,81,0.03)] hover:shadow-[0_20px_50px_rgba(88,29,227,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-5xl sm:text-6xl font-normal text-[#140e36]">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#581de3] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0e0a20] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#5e5a73] leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#140e36]/5 border border-[#eae2f2]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#eae2f2] flex items-center justify-between">
                  <Link
                    href={step.action.href}
                    suppressHydrationWarning
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#581de3] hover:text-[#ff008e] transition-colors"
                  >
                    <span>{step.action.text}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#eae2f2] flex items-center justify-center text-[#581de3] shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
