"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LottiePlayer } from "./LottiePlayer";

const SERVICES = [
  {
    number: "01",
    title: "3D & Product Explainer Videos",
    description:
      "Transform complex cloud architectures, developer tools, and SaaS software into hypnotic, crystal-clear 3D and 2D product videos that turn visitors into pipeline.",
    lottieSrc: "/documents/Homepage---Hero-Illustration-v2.json",
    href: "/services/explainer-video",
    tags: ["Product Demos", "3D Modeling", "SaaS Narrative"],
    color: "#581de3",
  },
  {
    number: "02",
    title: "UI Animation & Lottie Systems",
    description:
      "Frame-perfect, responsive in-app animations and website micro-interactions exported directly to lightweight JSON/Lottie for iOS, Android, and modern web.",
    lottieSrc: "/documents/UI-Animation.json",
    href: "/services/ui-animation",
    tags: ["Lottie Exports", "Design Systems", "Webflow/React"],
    color: "#ff008e",
  },
  {
    number: "03",
    title: "Branded Motion & Sizzle Reels",
    description:
      "Cinematic brand reels, high-energy manifesto videos, and keynote motion graphics engineered to build instant category authority during major launches and funding rounds.",
    lottieSrc: "/documents/Animation-1---Building-Flow.json",
    href: "/services/sizzle-reels",
    tags: ["Funding Announcements", "Keynote Visuals", "Brand Identity"],
    color: "#581de3",
  },
  {
    number: "04",
    title: "High-Converting Performance Ads",
    description:
      "Data-driven, hook-optimized motion ads tailored for LinkedIn, YouTube, and Meta. Tested to maximize CTR, brand recall, and qualified demo bookings.",
    lottieSrc: "/documents/Fast-Turnaround-lottie.json",
    href: "/services/social-media",
    tags: ["Paid Acquisition", "3-Second Hooks", "Rapid Variations"],
    color: "#ff008e",
  },
];

export function EditorialServices() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8fc] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#581de3] mb-4">
            Studio Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0e0a20] leading-[1.08]">
            Motion design that drives real <span className="font-serif italic font-normal text-[#ff008e]">revenue</span>, not just views.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-[#5e5a73] font-normal leading-relaxed">
            Every animation is purpose-built to solve a specific commercial objective: explain faster, retain longer, and close enterprise deals with confidence.
          </p>
        </div>

        {/* 4 Clean Editorial Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {SERVICES.map((srv) => (
            <div
              key={srv.number}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-[#eae2f2] p-8 sm:p-10 shadow-[0_20px_45px_rgba(35,22,81,0.05)] hover:shadow-[0_25px_60px_rgba(88,29,227,0.12)] hover:border-[#581de3]/40 transition-all duration-300"
            >
              <div>
                {/* Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#140e36]">
                    {srv.number}
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {srv.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#faf7fd] text-[#5e5a73] border border-[#ece5f3]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-[#0e0a20] tracking-tight group-hover:text-[#581de3] transition-colors">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-base text-[#5e5a73] leading-relaxed">
                  {srv.description}
                </p>
              </div>

              {/* Lottie Animation Canvas */}
              <div className="mt-8 pt-6 border-t border-[#f2edf7]">
                <div className="w-full h-48 sm:h-56 rounded-2xl bg-[#0c081a] overflow-hidden flex items-center justify-center p-2 relative shadow-inner">
                  <LottiePlayer
                    src={srv.lottieSrc}
                    className="w-full h-full object-contain"
                    loop
                    autoplay
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={srv.href}
                    suppressHydrationWarning
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#581de3] hover:text-[#ff008e] transition-colors"
                  >
                    <span>Explore {srv.title.split(" ")[0]} details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <span className="text-xs font-semibold text-[#8a859c]">
                    Turnaround: ~3–5 days
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
