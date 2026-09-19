"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Real case studies from index.html (lines 2400-2750) and customer-stories/
const FEATURED_STORIES = [
  {
    client: "ClickUp",
    title: "How ClickUp Used Animation to Support Retention and Customer Enablement",
    summary:
      "ClickUp is a long-time customer returning across multiple projects. We acted as an extension of their marketing and customer enablement team, producing short explainer videos, tutorial animations, and product assets.",
    tags: ["Animation video", "Fixed price", "17+ months & ongoing"],
    metric: "17+ Months Partnership",
    video: "https://motiontheagency.b-cdn.net/Case%20studies/Clickup/clickup%20clip2.mp4",
    poster: "https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6762d12035bb6b0be95f50f5_AI-Enhanced%20Analytics%20(1)%20(1)-p-800.avif",
    href: "/customer-stories/clickup",
  },
  {
    client: "Primer",
    title: "Turning Product Launches into Animated Videos that Convert",
    summary:
      "Primer, a VC-backed payments platform, returned to Motion across 3 projects. We translated evolving visual direction into clear UI assets and product launch videos.",
    tags: ["Animation video", "Product launch", "Fintech architecture"],
    metric: "3 Consecutive Projects",
    image: "/images/cover-component.avif",
    href: "/customer-stories/primer",
  },
  {
    client: "Obrizum",
    title: "Delivering Hundreds of Animations & Saving Over $350,000",
    summary:
      "Discover how Motion The Agency partnered with Obrizum to power both client-facing and internal content, delivering hundreds of animations and saving over $350,000 across two years.",
    tags: ["Animation video", "Event video", "Saved $350,000+"],
    metric: "Saved $350,000+",
    image: "/images/obrizum-section-cover.avif",
    href: "/customer-stories/obrizum",
  },
  {
    client: "Mirakl",
    title: "Explaining Enterprise Platform Value Fast to Drive Trust",
    summary:
      "Mirakl needed to explain real product value, fast. We built a video that addresses the audience's pain point first, then makes the solution easy to trust.",
    tags: ["Explainer video", "UI animation", "Product demo"],
    metric: "Enterprise Explainer",
    image: "/images/cover-mirakl-component.avif",
    href: "/customer-stories/mirakl",
  },
];

export function EditorialWorkShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-mono font-bold text-[#581de3] uppercase tracking-wider mb-4">
              Customer Stories
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0e0a20]">
              Selected{" "}
              <span className="font-instrument italic font-normal text-[#581de3]">
                Motion
              </span>{" "}
              Works.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5e5a73] max-w-2xl leading-relaxed">
              Real projects delivered for fast-moving startups and enterprise brands. Many of these case studies are long-running partnerships that have helped clients launch, raise investment, or accelerate growth.
            </p>
          </div>

          <Link
            href="/our-work"
            suppressHydrationWarning
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#faf7fd] hover:bg-[#581de3] text-[#0e0a20] hover:text-white font-bold text-sm border border-[#e4d8ee] transition-all duration-200 flex-shrink-0"
          >
            <span>See all customer stories</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Editorial Case Studies Grid */}
        <div className="space-y-12">
          {/* Main Hero Case Study: ClickUp */}
          <Link
            href={FEATURED_STORIES[0].href}
            suppressHydrationWarning
            className="group block rounded-3xl bg-[#faf7fd] hover:bg-white border border-[#eae2f2] hover:border-[#581de3]/40 overflow-hidden shadow-[0_20px_50px_rgba(35,22,81,0.05)] hover:shadow-[0_25px_65px_rgba(88,29,227,0.12)] transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#faf7fd] border border-[#eae2f2]">
                <video
                  src={FEATURED_STORIES[0].video}
                  poster={FEATURED_STORIES[0].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#140e36] text-xs font-mono font-bold px-3 py-1.5 rounded-full border border-[#eae2f2] shadow-sm">
                  {FEATURED_STORIES[0].metric}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {FEATURED_STORIES[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#581de3] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0e0a20] group-hover:text-[#581de3] transition-colors leading-tight">
                    {FEATURED_STORIES[0].title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#5e5a73] leading-relaxed">
                    {FEATURED_STORIES[0].summary}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#ff008e] group-hover:translate-x-1 transition-transform">
                  <span>Read full case study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* 3-Column Grid for Primer, Obrizum, and Mirakl */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_STORIES.slice(1).map((story) => (
              <Link
                key={story.client}
                href={story.href}
                suppressHydrationWarning
                className="group flex flex-col rounded-3xl bg-[#faf7fd] hover:bg-white border border-[#eae2f2] hover:border-[#581de3]/40 overflow-hidden shadow-[0_15px_40px_rgba(35,22,81,0.04)] hover:shadow-[0_20px_50px_rgba(88,29,227,0.1)] transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-[#faf7fd] border-b border-[#eae2f2] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#140e36] text-xs font-mono font-bold px-3 py-1.5 rounded-full border border-[#eae2f2] shadow-sm">
                    {story.metric}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#581de3] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0e0a20] group-hover:text-[#581de3] transition-colors leading-snug">
                      {story.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#5e5a73] line-clamp-3 leading-relaxed">
                      {story.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#eae2f2] flex items-center text-xs sm:text-sm font-bold text-[#ff008e] group-hover:translate-x-1 transition-transform">
                    <span>Read case study</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
