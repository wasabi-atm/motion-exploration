"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MousePointer2,
  Hand,
  Search,
  Box,
  Type,
  PenTool,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Crop,
  Layers,
  RotateCw,
  Stamp,
  Eraser,
  Pen,
} from "lucide-react";
import { LottiePlayer } from "./LottiePlayer";

export function EditorialHero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-r from-[#faedf5] via-[#ffffff] to-[#f2ebfb]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#ff008e]/06 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-[-10%] w-[700px] h-[700px] bg-[#581de3]/07 rounded-full blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Signature Horizontal Composition from reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Signature Editorial Mixed Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live Studio Status Eyebrow */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#e8dfef] text-xs font-semibold text-[#581de3] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#ff008e] animate-ping" />
                <span className="font-bold text-[#0e0a20]">Q1 2026 Creative Studio</span>
                <span className="text-black/20">•</span>
                <span className="text-[#581de3]">Accepting New Brands</span>
              </span>
            </div>

            {/* The Signature "Make YOUR Brand Move" Headline */}
            <div className="select-none tracking-tight leading-[1.02]">
              {/* Line 1: "Make YOUR" */}
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                <span className="font-sans font-black text-5xl sm:text-7xl lg:text-[84px] text-[#4d16d6] drop-shadow-[0_4px_14px_rgba(77,22,214,0.16)]">
                  Make
                </span>
                <span className="font-sans font-black text-5xl sm:text-7xl lg:text-[84px] text-transparent [-webkit-text-stroke:2.5px_#4d16d6] sm:[-webkit-text-stroke:3.5px_#4d16d6] tracking-wide">
                  YOUR
                </span>
              </div>

              {/* Line 2: "[Brand] Move" with design-tool selection box */}
              <div className="flex items-center gap-3 sm:gap-5 flex-wrap mt-2 sm:mt-3">
                {/* "Brand" in Instrument Serif with design-tool text selection handle */}
                <div className="relative inline-flex items-center">
                  {/* Left Text Caret Bar */}
                  <span className="absolute -left-1 sm:-left-2 top-[8%] bottom-[8%] w-[2px] bg-[#ff008e] animate-pulse" />

                  {/* Selection Highlight Box */}
                  <span className="relative px-3 sm:px-4 py-0.5 rounded-[4px] bg-[#ff008e]/08 border-[1.5px] border-[#ff008e] font-instrument italic font-normal text-6xl sm:text-8xl lg:text-[98px] text-[#ff008e] leading-none select-text">
                    Brand

                    {/* Bottom-right selection anchor point */}
                    <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border border-[#ff008e] rounded-[1px] shadow-sm pointer-events-none" />

                    {/* Pink selection cursor handle pointing directly to anchor */}
                    <span className="absolute -bottom-6 -right-6 pointer-events-none flex items-center">
                      <svg
                        className="w-5 h-5 text-[#ff008e] drop-shadow-md transform -rotate-45"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3 3l7 18 3-7 7-3L3 3z" />
                      </svg>
                    </span>
                  </span>
                </div>

                {/* "Move" in punchy magenta sans */}
                <span className="font-sans font-black text-5xl sm:text-7xl lg:text-[84px] text-[#ff008e] drop-shadow-[0_4px_16px_rgba(255,0,142,0.18)]">
                  Move
                </span>
              </div>
            </div>

            {/* Subhead */}
            <p className="mt-8 text-lg sm:text-xl text-[#534e68] font-normal max-w-xl leading-relaxed">
              We engineer high-converting 3D motion, UI animations, and product explainer videos for ambitious tech &amp; SaaS companies. Rapid turnaround, zero agency fluff.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/get-free-sample"
                suppressHydrationWarning
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] text-white text-base font-bold shadow-[0_12px_28px_rgba(255,0,142,0.38)] hover:shadow-[0_16px_36px_rgba(255,0,142,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Get Free Sample</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact-us"
                suppressHydrationWarning
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-[#faf7fe] text-[#0e0a20] text-base font-bold border border-[#e2d7ed] shadow-sm hover:border-[#581de3]/40 transition-all"
              >
                <span>Book a Call</span>
              </Link>

              <Link
                href="/our-work"
                suppressHydrationWarning
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[#706a85] hover:text-[#581de3] text-sm font-semibold transition-colors"
              >
                <span>Explore Portfolio →</span>
              </Link>
            </div>

            {/* Trust Bulletpoints */}
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium text-[#706a85]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>First draft in 48h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Subscription or fixed-scope</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>4.9/5 on Clutch &amp; G2</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Design Studio Canvas (Exact Replica of Reference) */}
          <div className="lg:col-span-5 relative">
            {/* Floating Dark Editing Toolbar (floating directly above canvas) */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-[#0e0b1f] text-white/80 shadow-[0_18px_40px_rgba(14,11,31,0.35)] border border-white/10 mb-3 select-none text-xs"
            >
              {/* Blue active cursor tool */}
              <div className="bg-[#2563eb] text-white p-1 rounded">
                <MousePointer2 className="w-3 h-3" />
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <Hand className="w-3 h-3" />
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <Search className="w-3 h-3" />
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <Crop className="w-3 h-3" />
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <RotateCw className="w-3 h-3" />
              </div>
              <div className="h-3.5 w-[1px] bg-white/20 mx-0.5" />
              {/* Active 3D box tool with cursor pointer hovering on it (from reference) */}
              <div className="relative p-1 text-[#ff4dcb] cursor-pointer">
                <Box className="w-3.5 h-3.5" />
                <span className="absolute -top-1 -right-2 pointer-events-none">
                  <svg
                    className="w-3.5 h-3.5 fill-white text-black drop-shadow"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3l7 18 3-7 7-3L3 3z" />
                  </svg>
                </span>
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <Type className="w-3 h-3" />
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <Pen className="w-3 h-3" />
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <Stamp className="w-3 h-3" />
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <Eraser className="w-3 h-3" />
              </div>
              <div className="p-1 hover:text-white transition-colors cursor-pointer">
                <PenTool className="w-3 h-3" />
              </div>
            </motion.div>

            {/* Studio Canvas Frame Container */}
            <div className="relative rounded-2xl bg-white border border-[#e6dbf0] p-4 shadow-[0_25px_65px_rgba(35,22,81,0.08)] overflow-visible">
              {/* Lottie Animation Canvas */}
              <div className="relative rounded-xl overflow-hidden bg-[#0c081a] aspect-[16/10] flex items-center justify-center shadow-inner">
                <LottiePlayer
                  src="/documents/Homepage---Hero-Illustration-v2.json"
                  className="w-full h-full object-contain"
                  loop
                  autoplay
                />
              </div>

              {/* The Proof Card: "2500+ videos produced and counting..." (Exactly as in reference) */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-instrument text-4xl sm:text-5xl font-normal text-[#120d2c] leading-none">
                    2500+
                  </div>
                  <div className="font-sans font-bold text-sm sm:text-base text-[#120d2c] tracking-tight mt-1">
                    videos produced{" "}
                    <span className="font-instrument italic font-normal text-[#581de3]">
                      and counting...
                    </span>
                  </div>
                  {/* Pink scribble brush underline (from reference) */}
                  <svg
                    className="w-40 sm:w-48 h-2 text-[#ff008e] mt-1"
                    viewBox="0 0 160 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5C45 2 110 3 158 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Stacked green proof badges fanning out (from reference) */}
                <div className="relative flex items-center">
                  <div className="bg-[#8ec26f] text-[#133008] text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm transform rotate-6 border border-white">
                    2500+
                  </div>
                  <div className="bg-[#a4d485] text-[#133008] text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm transform -rotate-3 -ml-3 border border-white">
                    vids
                  </div>
                </div>
              </div>

              {/* Floating M4A Audio Badge (bottom-left from reference) */}
              <div className="absolute -bottom-6 -left-5 z-20 hidden sm:flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-[#e4d8ee] shadow-[0_12px_28px_rgba(35,22,81,0.1)]">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#581de3] to-[#7f78ff] flex items-center justify-center text-white text-sm shadow">
                  🎵
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0e0a20] leading-none">M4A</div>
                  <div className="text-[9px] font-medium text-[#706a85] mt-0.5">Spatial Audio</div>
                </div>
              </div>

              {/* Floating "✨ Effects" Tag with Cursor (top-right from reference) */}
              <div className="absolute -top-4 -right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#e4d8ee] shadow-[0_10px_24px_rgba(35,22,81,0.1)] text-xs font-bold text-[#0e0a20] select-none">
                <Sparkles className="w-3.5 h-3.5 text-[#ff008e]" />
                <span>Effects</span>
                <MousePointer2 className="w-3.5 h-3.5 fill-[#120d2c] text-[#120d2c] ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
