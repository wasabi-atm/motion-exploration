"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Calculator } from "lucide-react";

const AI_PRICING_QUERY = encodeURIComponent(
  "Hi, I'm considering working with Motion The Agency (motiontheagency.com) and I'm currently looking at their pricing options. They offer a few different models, and I'd like help figuring out which one actually fits my situation. Could you look into their pricing page and explain each option they offer, what it's for, what makes it useful, and the kind of work or client it suits best? Please also check their blog and case studies, since there may be useful context there like past client examples, tips, or how their process works. Once you understand their options, please consult me like an advisor: ask me about my needs, my budget, and the kind of work I need, then recommend the pricing option that fits me best and explain why. I'd like a concrete, on-point recommendation, not just a list."
);

export function EditorialPricing() {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-mono font-bold text-[#581de3] uppercase tracking-wider mb-4">
            Our Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0e0a20]">
            Clear pricing <span className="font-serif italic font-normal text-[#ff008e]">from the start.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5e5a73] leading-relaxed">
            We like to keep pricing simple and transparent, with no hidden fees. We’ve developed options to suit the varying needs of our clients—whether you need one video or an ongoing creative team.
          </p>
        </div>

        {/* 3 Real Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {/* Card 1: Fixed Price */}
          <div className="relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between bg-white border border-[#eae2f2] shadow-[0_15px_35px_rgba(35,22,81,0.04)] hover:border-[#581de3]/30 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#581de3] bg-purple-50 px-3 py-1 rounded-full">
                  One project, one price
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0e0a20] tracking-tight">
                Fixed price package
              </h3>
              <p className="text-sm text-[#5e5a73] mt-2">
                Get amazing motion graphics at a clear, upfront price. With our project-based packages, you’ll know exactly what you’re paying for—no surprises, just great videos tailored to your needs.
              </p>

              <div className="mt-6 mb-8 pt-6 border-t border-[#eae2f2]">
                <div className="text-xs text-[#706a85] font-semibold uppercase tracking-wider">Starting from</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-bold text-[#140e36] tracking-tight">$3,480</span>
                  <span className="text-sm font-semibold text-[#706a85]">/video</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono font-bold text-[#0e0a20] uppercase tracking-wider mb-3">
                  Best fit for:
                </div>
                <ul className="space-y-2 text-sm text-[#2d2942]">
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>You have a defined brief</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>One-off or occasional video need</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>Want upfront cost clarity before kickoff</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#eae2f2] mb-8">
                <div className="text-xs font-mono font-bold text-[#0e0a20] uppercase tracking-wider mb-3">
                  Included deliverables:
                </div>
                <div className="space-y-2.5">
                  {[
                    "Fast turnaround & delivery",
                    "2D & 3D motion design",
                    "Storyboard planning & styleframes",
                    "Transparent upfront pricing",
                    "Full source files available",
                    "Commercial broadcast rights",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2d2942]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#eae2f2]">
              <Link
                href="/pricing/motion-graphics-price"
                suppressHydrationWarning
                className="w-full py-3.5 px-6 rounded-full font-bold text-center text-sm flex items-center justify-center gap-2 bg-[#faf7fd] hover:bg-[#581de3] text-[#0e0a20] hover:text-white border border-[#eae2f2] transition-all"
              >
                <span>See our price</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-free-sample"
                suppressHydrationWarning
                className="w-full py-3 px-6 rounded-full font-semibold text-center text-xs flex items-center justify-center gap-1.5 text-[#581de3] hover:text-[#ff008e] hover:bg-purple-50 transition-colors"
              >
                <span>Get free sample</span>
                <span className="text-[10px] text-[#706a85] font-normal">• No card required</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Subscription Package (Most Popular) */}
          <div className="relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between bg-[#faf7fd] border-2 border-[#581de3] shadow-[0_25px_60px_rgba(88,29,227,0.12)] lg:-translate-y-2 transition-all duration-300">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff008e] to-[#581de3] text-white text-[11px] font-mono font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              Most Popular for SaaS
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff008e] bg-pink-50 px-3 py-1 rounded-full">
                  Ongoing monthly output
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0e0a20] tracking-tight">
                Subscription package
              </h3>
              <p className="text-sm text-[#5e5a73] mt-2">
                Enjoy predictable monthly costs and easy budgeting with our subscription. Benefit from a dedicated creative team and project manager for seamless workflow.
              </p>

              <div className="mt-6 mb-8 pt-6 border-t border-[#eae2f2]">
                <div className="text-xs text-[#706a85] font-semibold uppercase tracking-wider">Starting from</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-bold text-[#140e36] tracking-tight">$3,680</span>
                  <span className="text-sm font-semibold text-[#706a85]">/month</span>
                </div>
                <div className="text-xs text-[#581de3] font-medium mt-1">
                  Basic $3,950/mo • Premium $6,580/mo (Quarterly discounts available)
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono font-bold text-[#0e0a20] uppercase tracking-wider mb-3">
                  Best fit for:
                </div>
                <ul className="space-y-2 text-sm text-[#2d2942]">
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>You need video & motion output every month</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>Want a dedicated team on standby</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>Predictable monthly creative budget</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#eae2f2] mb-8">
                <div className="text-xs font-mono font-bold text-[#0e0a20] uppercase tracking-wider mb-3">
                  Included capabilities:
                </div>
                <div className="space-y-2.5">
                  {[
                    "Interactive media & UI animations",
                    "Complex 2D & 3D motion design",
                    "UI design & web design",
                    "Investor pitch decks & social assets",
                    "Unlimited revisions & design iterations",
                    "Dedicated creative team & 24/7 coverage",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2d2942]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#eae2f2]">
              <Link
                href="/pricing/design-subscription-services"
                suppressHydrationWarning
                className="w-full py-4 px-6 rounded-full font-bold text-center text-sm sm:text-base flex items-center justify-center gap-2 bg-[#ff008e] hover:bg-[#e0007d] text-white shadow-[0_8px_24px_rgba(255,0,142,0.35)] transition-all"
              >
                <span>See plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-free-sample"
                suppressHydrationWarning
                className="w-full py-3 px-6 rounded-full font-semibold text-center text-xs flex items-center justify-center gap-1.5 text-[#581de3] hover:text-[#ff008e] hover:bg-purple-50 transition-colors"
              >
                <span>Get free sample</span>
                <span className="text-[10px] text-[#706a85] font-normal">• Zero commitment</span>
              </Link>
            </div>
          </div>

          {/* Card 3: Creative Credits */}
          <div className="relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between bg-white border border-[#eae2f2] shadow-[0_15px_35px_rgba(35,22,81,0.04)] hover:border-[#581de3]/30 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#581de3] bg-purple-50 px-3 py-1 rounded-full">
                  Pay once, use anytime
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0e0a20] tracking-tight">
                Creative credits
              </h3>
              <p className="text-sm text-[#5e5a73] mt-2">
                Pre-purchased hours that never expire. Perfect for campaign bursts, seasonal launches, and teams that want senior creative talent ready whenever needed.
              </p>

              <div className="mt-6 mb-8 pt-6 border-t border-[#eae2f2]">
                <div className="text-xs text-[#706a85] font-semibold uppercase tracking-wider">From</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-bold text-[#140e36] tracking-tight">$18,000</span>
                  <span className="text-sm font-semibold text-[#706a85]">($18/credit)</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono font-bold text-[#0e0a20] uppercase tracking-wider mb-3">
                  Best fit for:
                </div>
                <ul className="space-y-2 text-sm text-[#2d2942]">
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>Campaign bursts, not every month</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>Want a team on standby with zero retainer</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff008e]" />
                    <span>Large budget, flexible timing</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#eae2f2] mb-8">
                <div className="text-xs font-mono font-bold text-[#0e0a20] uppercase tracking-wider mb-3">
                  Key features:
                </div>
                <div className="space-y-2.5">
                  {[
                    "Credits never expire",
                    "Use for micro-animations or full videos",
                    "Dedicated senior motion team",
                    "Transparent time tracking dashboard",
                    "Prioritized sprint queues",
                    "Zero monthly lock-in or recurring bills",
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2d2942]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#eae2f2]">
              <Link
                href="/pricing/creative-credits"
                suppressHydrationWarning
                className="w-full py-3.5 px-6 rounded-full font-bold text-center text-sm flex items-center justify-center gap-2 bg-[#faf7fd] hover:bg-[#581de3] text-[#0e0a20] hover:text-white border border-[#eae2f2] transition-all"
              >
                <span>Explore credits</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                suppressHydrationWarning
                className="w-full py-3 px-6 rounded-full font-semibold text-center text-xs flex items-center justify-center gap-1.5 text-[#581de3] hover:text-[#ff008e] hover:bg-purple-50 transition-colors"
              >
                <span>Book a call to discuss</span>
                <span className="text-[10px] text-[#706a85] font-normal">• 15 min</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Cost Calculator Banner (Source: index.html lines 3221-3250) */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-[#140e36] via-[#24174d] to-[#140e36] text-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(20,14,54,0.2)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ff4dcb] mb-3">
              <Calculator className="w-4 h-4" />
              <span>Video Cost Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Want to know the cost of your next video? ✨
            </h3>
            <p className="text-white/70 text-sm sm:text-base mt-2 leading-relaxed">
              Answer a few quick questions and get an instant estimate tailored to your project goals. It’s fast, free, and personalized just for you.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
              <span className="flex items-center gap-1.5">✓ On point budget</span>
              <span className="flex items-center gap-1.5">✓ Get precise timelines</span>
              <span className="flex items-center gap-1.5">✓ Extras priced separately</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/resources/video-cost-calculator"
              suppressHydrationWarning
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] text-white font-bold text-sm sm:text-base shadow-[0_8px_24px_rgba(255,0,142,0.4)] hover:shadow-[0_12px_32px_rgba(255,0,142,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Calculate now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Real AI Pricing Consultation Panel (Source: pricing.html lines 1045-1065) */}
        <div className="rounded-3xl bg-[#faf7fd] border border-[#eae2f2] p-8 sm:p-10 shadow-[0_15px_35px_rgba(35,22,81,0.03)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#581de3] to-[#ff008e] flex items-center justify-center text-white shadow-md flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#0e0a20]">
                Not sure which option fits you?
              </h4>
              <p className="text-sm text-[#5e5a73] max-w-xl mt-1">
                An AI reads our pricing, our blog and our case studies, asks about your budget and volume, then recommends one option and explains why.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap justify-center flex-shrink-0">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#706a85] mr-1">Ask:</span>
            <a
              href={`https://chatgpt.com/?q=${AI_PRICING_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
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
              href={`https://claude.ai/new?q=${AI_PRICING_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
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
              href={`https://www.perplexity.ai/search?q=${AI_PRICING_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
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
              href={`https://www.google.com/search?udm=50&aep=11&q=${AI_PRICING_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
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
              href={`https://grok.com/?q=${AI_PRICING_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-[#581de3]/10 border border-[#eae2f2] hover:border-[#581de3]/30 transition-colors"
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
