"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LottiePlayer } from "./LottiePlayer";

// Real service definitions and descriptions from index.html (lines 1700-1790)
const CHAPTERS = [
  {
    num: "01",
    title: "3D Animation & Product Videos",
    category: "3D Motion & Product Demos",
    description:
      "3D animations provide realistic depth that communicates complex tech ideas. Product animation brings your product to life using 2D and 3D techniques to educate and convert customers.",
    deliverables: [
      "Series A–D product launch videos",
      "Interactive 3D cloud & API architecture visualization",
      "Executive keynote & investor demonstrations",
    ],
    lottieSrc: "/documents/02---Choose-Course-and-Edit---Cut-V1---Shadow.json",
    href: "/services/3d-animation",
  },
  {
    num: "02",
    title: "UI Animation & Lottie Systems",
    category: "UX/UI Systems & Web Code",
    description:
      "Used by UX/UI and web designers to improve customer experience. UI animations bring your product to life with 60fps micro-interactions, exported cleanly to lightweight Lottie JSON.",
    deliverables: [
      "Ultra-lightweight Lottie JSON exports",
      "Interactive Webflow & React integration",
      "Motion design system token libraries",
    ],
    lottieSrc: "/documents/04---Track-Progress---Shadow.json",
    href: "/services/ui-animation",
  },
  {
    num: "03",
    title: "Branded Motion & Sizzle Reels",
    category: "Brand Authority & Videography",
    description:
      "Showcase the unique features of your products, highlight what sets them apart, and build emotional connection. Perfect for videography, intros, and high-energy transitions.",
    deliverables: [
      "High-energy company manifesto videos",
      "TechCrunch & YC Demo Day openers",
      "Social proof sizzle reels & event openers",
    ],
    lottieSrc: "/documents/Animation-1---Building-Flow.json",
    href: "/services/sizzle-reels",
  },
  {
    num: "04",
    title: "2D Animation & High-Converting Social Ads",
    category: "Digital Advertising & Social Media",
    description:
      "2D animation videos are ideal for digital advertising and social media. Fast and efficient for standing out, stopping doom-scrolling, and driving qualified demo requests.",
    deliverables: [
      "Fast turnaround 2D animation packages",
      "Multi-ratio exports (16:9, 9:16 vertical, 1:1)",
      "High-converting 3-second hook variations",
    ],
    lottieSrc: "/documents/Fast-Turnaround-lottie.json",
    href: "/services/2d-animation",
  },
];

export function EditorialServices() {
  return (
    <section className="py-20 sm:py-28 bg-[#faf8fc] border-b border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-mono font-bold text-[#581de3] uppercase tracking-wider mb-4">
            Our animation and design services
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0e0a20] leading-[1.08]">
            Motion designed for{" "}
            <span className="font-instrument italic font-normal text-[#ff008e]">
              scale
            </span>{" "}
            and conversion.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5e5a73] font-normal leading-relaxed">
            Here’s everything we can do for you: four specialized motion disciplines engineered to explain your value proposition faster, retain customers longer, and accelerate commercial pipeline.
          </p>
        </div>

        {/* 2x2 Luminous Service Discipline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.num}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-[#eae2f2] hover:border-[#581de3]/40 p-6 sm:p-8 shadow-[0_12px_30px_rgba(35,22,81,0.03)] hover:shadow-[0_18px_40px_rgba(88,29,227,0.07)] transition-all duration-300"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-instrument italic text-4xl sm:text-5xl font-normal text-[#581de3]">
                    {chapter.num}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#581de3] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                    {chapter.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0e0a20] tracking-tight group-hover:text-[#581de3] transition-colors leading-tight">
                  {chapter.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#5e5a73] font-normal leading-relaxed">
                  {chapter.description}
                </p>

                {/* Compact Light Porcelain Lottie Stage (Zero dark container) */}
                <div className="relative rounded-2xl bg-[#faf7fd] border border-[#eae2f2] p-4 my-5 h-56 sm:h-64 overflow-hidden flex items-center justify-center shadow-inner">
                  <LottiePlayer
                    src={chapter.lottieSrc}
                    className="w-full h-full max-h-full object-contain"
                  />
                </div>

                {/* Deliverable Checkmarks */}
                <div className="space-y-1.5">
                  {chapter.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#2d2942] font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff008e] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-8 pt-5 border-t border-[#eae2f2] flex items-center justify-between">
                <Link
                  href={chapter.href}
                  suppressHydrationWarning
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#581de3] hover:text-[#ff008e] group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explore {chapter.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-mono text-[#8a859c]">
                  Turnaround: ~3–5 days
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
