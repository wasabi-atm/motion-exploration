"use client";

import React, { useState } from "react";
import { Sparkles, Star, Play, X } from "lucide-react";

const AI_QUERY = encodeURIComponent(
  "Hi, I'm looking into working with a B2B video production company called Motion The Agency (motiontheagency.com), and I'd like to understand them properly before I reach out. Can you help me get to know them? I'd like to know who they are and what they do, what makes them stand out as a motion and video studio, and what their strongest services are. I'm also interested in the practical side, including their pricing approach, turnaround, quality of work, well-known clients, and most notable results or case studies. Please use as much information as you can from their website, including main pages, service pages, case studies, and blog articles, and give me a clear and honest picture of who they are and what they're best at."
);

// Real client testimonials from index.html (lines 1877-1955)
const CLIENT_TESTIMONIALS = [
  {
    name: "Ellen Kasinopoulou",
    role: "Head of Marketing at Attractions.io",
    country: "UK",
    flag: "🇬🇧",
    videoId: "O5xibKNNL1w",
    quote:
      "Motion The Agency helped us translate our complex attractions platform into an engaging, visual narrative that our buyers immediately understood.",
  },
  {
    name: "Kurt Jones",
    role: "Product Marketing Manager at HackerRank",
    country: "USA",
    flag: "🇺🇸",
    videoId: "PyZz16CtX-0",
    quote:
      "Working with Motion The Agency was seamless from brief to delivery. The motion design quality and turnaround speed exceeded our expectations.",
  },
  {
    name: "Matthew Springer",
    role: "Chief Revenue Officer at Navatar",
    country: "USA",
    flag: "🇺🇸",
    videoId: "G0ZHbVIleu4",
    quote:
      "Their videos directly helped our sales team explain our software value proposition in minutes, driving tangible improvements in our deal velocity.",
  },
  {
    name: "Carlos Morales",
    role: "Operations Lead at StockRX",
    country: "USA",
    flag: "🇺🇸",
    videoId: "AqWlk4iItX4",
    quote:
      "Rapid turnaround, zero fuss, and high-fidelity 3D and 2D motion graphics that elevated our brand presence across all marketing channels.",
  },
  {
    name: "Oscar Forshaw-Swift",
    role: "Head of Content & Strategy at Obrizum Group",
    country: "UK",
    flag: "🇬🇧",
    videoId: "9DGNgQ-reDc",
    quote:
      "Delivering hundreds of animations and saving over $350,000 across two years—Motion has been an indispensable creative partner for our team.",
  },
  {
    name: "Vanlizza Chau",
    role: "Product Marketing at Gem",
    country: "USA",
    flag: "🇺🇸",
    videoId: "5JOb8IlK_m8",
    quote:
      "Clear communication, iterative feedback, and animations that fit directly into our product marketing launches.",
  },
];

export function EditorialReviews() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#faf8fc] relative border-t border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-mono font-bold text-[#581de3] uppercase tracking-wider mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0e0a20]">
            See what our <span className="font-serif italic font-normal text-[#581de3]">clients say.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5e5a73] leading-relaxed">
            We work with teams of varying sizes all across the world. A large majority of our work supports the marketing function of high-growth tech & SaaS businesses, with videos also used across product, HR, and sales.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#5e5a73]">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#eae2f2]">
              <span className="text-amber-400">★★★★★</span>
              <span>4.9/5 Rating on Clutch & G2</span>
            </span>
            <a
              href="https://clutch.co/profile/motion-agency"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#581de3] transition-colors"
            >
              Read Clutch Reviews →
            </a>
            <span>•</span>
            <a
              href="https://www.g2.com/products/motion-the-agency/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#581de3] transition-colors"
            >
              Read G2 Reviews →
            </a>
          </div>
        </div>

        {/* Real Client Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CLIENT_TESTIMONIALS.map((testi) => (
            <div
              key={testi.name}
              className="group rounded-3xl bg-white border border-[#eae2f2] p-6 sm:p-8 shadow-[0_15px_35px_rgba(35,22,81,0.04)] hover:border-[#581de3]/40 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* YouTube Video Player Embed */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#0e0a20] mb-6 shadow-inner">
                  <iframe
                    src={`https://www.youtube.com/embed/${testi.videoId}?controls=1&rel=0&modestbranding=1`}
                    title={`${testi.name} - Testimonial`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#140e36] leading-snug">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#eae2f2] flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#0e0a20]">{testi.name}</div>
                  <div className="text-xs text-[#706a85] mt-0.5">{testi.role}</div>
                </div>
                <span className="text-base" title={testi.country}>
                  {testi.flag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* "Ask AI About Us" Real Interactive Panel */}
        <div className="rounded-3xl bg-white border border-[#eae2f2] p-8 sm:p-10 shadow-[0_15px_35px_rgba(35,22,81,0.04)] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#581de3] to-[#ff008e] flex items-center justify-center text-white shadow-md flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#0e0a20]">
                Ask AI about Motion The Agency
              </div>
              <div className="text-sm text-[#706a85]">
                Get an instant, unbiased evaluation from your favorite LLM before reaching out.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <a
              href={`https://chatgpt.com/?q=${AI_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#faf7fd] hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
              title="Ask ChatGPT"
              suppressHydrationWarning
            >
              <img
                src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7da16e53465ab40c5b45_gpt.svg"
                alt="ChatGPT"
                className="w-6 h-6"
              />
            </a>
            <a
              href={`https://claude.ai/new?q=${AI_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#faf7fd] hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
              title="Ask Claude"
              suppressHydrationWarning
            >
              <img
                src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7f728a319236392a6ba4_claude.svg"
                alt="Claude"
                className="w-6 h-6"
              />
            </a>
            <a
              href={`https://www.perplexity.ai/search?q=${AI_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#faf7fd] hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
              title="Ask Perplexity"
              suppressHydrationWarning
            >
              <img
                src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7f72f9060f446fb18c76_perplexity.svg"
                alt="Perplexity"
                className="w-6 h-6"
              />
            </a>
            <a
              href={`https://www.google.com/search?udm=50&aep=11&q=${AI_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#faf7fd] hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
              title="Ask Gemini"
              suppressHydrationWarning
            >
              <img
                src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7f721bd3eb3282d22794_gemini.svg"
                alt="Gemini"
                className="w-6 h-6"
              />
            </a>
            <a
              href={`https://grok.com/?q=${AI_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#faf7fd] hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
              title="Ask Grok"
              suppressHydrationWarning
            >
              <img
                src="https://cdn.prod.website-files.com/66ebfb6ec8f20d5eda50eb34/6a8d7f723e587379b2ee1e9e_grok.svg"
                alt="Grok"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
