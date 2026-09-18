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
      "3D animations provide realistic depth that allows the viewer to see into spaces, notice the movement of light, and communicate complex ideas. Product animation brings your product to life using a combination of 2D and 3D techniques to educate, entertain, and convert customers.",
    deliverables: [
      "Series A–D product launch videos",
      "Interactive 3D cloud & API architecture visualization",
      "Executive keynote & investor visual demonstrations",
    ],
    lottieSrc: "/documents/Homepage---Hero-Illustration-v2.json",
    href: "/services/3d-animation",
    reverse: false,
  },
  {
    num: "02",
    title: "UI Animation & Lottie Systems",
    category: "UX/UI Systems & Web Code",
    description:
      "Used by UX/UI and web designers to improve customer experience. UI animations are a personalised way to bring your digital product to life with 60fps micro-interactions, onboarding tours, and interactive states exported cleanly to lightweight Lottie JSON for web and mobile.",
    deliverables: [
      "Ultra-lightweight Lottie JSON exports",
      "Interactive Webflow & React integration",
      "Motion design system token libraries",
    ],
    lottieSrc: "/documents/UI-Animation.json",
    href: "/services/ui-animation",
    reverse: true,
  },
  {
    num: "03",
    title: "Branded Motion & Sizzle Reels",
    category: "Brand Authority & Videography",
    description:
      "Ideal to showcase the unique features and benefits of your products, highlighting what sets them apart from the competition and building an emotional connection with potential customers. Perfect for videography, intros, outros, and transitions that make customers instantly recognise your content.",
    deliverables: [
      "High-energy company manifesto videos",
      "TechCrunch & YC Demo Day openers",
      "Social proof sizzle reels & event openers",
    ],
    lottieSrc: "/documents/Animation-1---Building-Flow.json",
    href: "/services/sizzle-reels",
    reverse: false,
  },
  {
    num: "04",
    title: "2D Animation & High-Converting Social Ads",
    category: "Digital Advertising & Social Media",
    description:
      "2D animation videos come in many forms and are ideal for all kinds of digital advertising, performance marketing, and social media. They're a fast and efficient way of standing out, stopping doom-scrolling, and driving qualified demo requests.",
    deliverables: [
      "Fast turnaround 2D animation packages",
      "Multi-ratio exports (16:9, 9:16 vertical, 1:1 square)",
      "High-converting 3-second hook variations",
    ],
    lottieSrc: "/documents/Fast-Turnaround-lottie.json",
    href: "/services/2d-animation",
    reverse: true,
  },
];

export function EditorialServices() {
  return (
    <section className="py-24 sm:py-36 bg-[#faf8fc] border-b border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-mono font-bold text-[#581de3] uppercase tracking-wider mb-4">
            Our animation and design services
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0e0a20] leading-[1.06]">
            Motion designed for <span className="font-instrument italic font-normal text-[#ff008e]">scale</span> and conversion.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-[#5e5a73] font-normal leading-relaxed">
            Here’s everything we can do for you: four specialized motion disciplines engineered to explain your value proposition faster, retain customers longer, and accelerate commercial pipeline.
          </p>
        </div>

        {/* 4 Clear Editorial Chapters (Alternating Left/Right) */}
        <div className="space-y-24 sm:space-y-36">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.num}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                chapter.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Narrative Column (5/12 width) */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-instrument text-4xl sm:text-5xl font-normal text-[#581de3]">
                    {chapter.num}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#5e5a73] bg-white border border-[#eae2f2] px-3 py-1 rounded-full">
                    {chapter.category}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0e0a20] tracking-tight leading-tight">
                  {chapter.title}
                </h3>

                <p className="mt-5 text-base sm:text-lg text-[#5e5a73] font-normal leading-relaxed">
                  {chapter.description}
                </p>

                {/* Concrete Deliverable Bullet Points */}
                <div className="mt-6 space-y-2.5">
                  {chapter.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2d2942] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#ff008e] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href={chapter.href}
                    suppressHydrationWarning
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#581de3] hover:text-[#ff008e] group transition-colors"
                  >
                    <span>View {chapter.title} details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs font-mono text-[#8a859c]">
                    Turnaround: ~3–5 days
                  </span>
                </div>
              </div>

              {/* Lottie Animation Stage Column (7/12 width) */}
              <div className="w-full lg:w-7/12">
                <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0c081e] p-6 sm:p-10 border border-[#1e1738] shadow-[0_20px_60px_rgba(14,10,32,0.15)] overflow-hidden">
                  {/* Subtle inner viewport highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#581de3]/10 via-transparent to-[#ff008e]/10 pointer-events-none" />
                  
                  <div className="relative aspect-[16/10] w-full flex items-center justify-center">
                    <LottiePlayer
                      src={chapter.lottieSrc}
                      className="w-full h-full max-h-[420px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
