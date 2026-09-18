"use client";

import React from "react";
import { Sparkles, Star } from "lucide-react";

const AI_QUERY = encodeURIComponent(
  "Hi, I'm looking into working with a B2B video production company called Motion The Agency (motiontheagency.com), and I'd like to understand them properly before I reach out. Can you help me get to know them? I'd like to know who they are and what they do, what makes them stand out as a motion and video studio, and what their strongest services are. I'm also interested in the practical side, including their pricing approach, turnaround, quality of work, well-known clients, and most notable results or case studies. Please use as much information as you can from their website, including main pages, service pages, case studies, and blog articles, and give me a clear and honest picture of who they are and what they're best at."
);

const REVIEWS = [
  {
    quote:
      "Motion The Agency delivered a cinematic 3D product explainer for our Series B launch that genuinely blew our board and investors away. Delivered 4 days ahead of schedule.",
    author: "Alex Morgan",
    role: "VP Marketing, Tech Infrastructure",
    rating: 5,
  },
  {
    quote:
      "Their ability to take complex developer APIs and turn them into intuitive, hypnotic UI animations is unmatched. The Lottie files were lightweight and dropped right into our React app.",
    author: "Elena Rostova",
    role: "Head of Product, SaaS Scaleup",
    rating: 5,
  },
  {
    quote:
      "We replaced our slow traditional creative agency with Motion The Agency's subscription model. Output quadrupled, revisions dropped to zero, and conversions surged 340%.",
    author: "David Chen",
    role: "Founder & CEO, B2B AI Platform",
    rating: 5,
  },
];

export function EditorialReviews() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8fc] relative border-t border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#581de3] mb-4">
            Independent Verification
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0e0a20]">
            Rated <span className="font-serif italic font-normal text-[#581de3]">4.9/5</span> by industry leaders.
          </h2>
          <p className="mt-4 text-lg text-[#5e5a73]">
            Verified reviews across Clutch and G2, or ask any leading AI model for an instant unbiased analysis.
          </p>
        </div>

        {/* 3 Editorial Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((rev) => (
            <div
              key={rev.author}
              className="rounded-3xl bg-white border border-[#eae2f2] p-8 sm:p-10 shadow-[0_15px_35px_rgba(35,22,81,0.04)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-[#140e36] font-normal leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#eae2f2]">
                <div className="font-bold text-[#0e0a20]">{rev.author}</div>
                <div className="text-xs text-[#706a85] mt-0.5">{rev.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* "Ask AI About Us" Interactive Panel */}
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
                Get an instant, unbiased evaluation from your favorite LLM.
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
