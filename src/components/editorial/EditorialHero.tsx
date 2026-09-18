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
  Play,
  CheckCircle2,
} from "lucide-react";
import { LottiePlayer } from "./LottiePlayer";

export function EditorialHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow: Studio Status */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#e8dfef] shadow-[0_2px_8px_rgba(88,29,227,0.06)] text-xs font-semibold text-[#581de3]"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#ff008e] animate-ping" />
            <span className="font-bold text-[#0e0a20]">Q1 2026 Creative Studio</span>
            <span className="text-black/30">•</span>
            <span className="text-[#581de3]">Accepting New Brands</span>
          </motion.div>
        </div>

        {/* The Signature Editorial Mixed Typography Headline */}
        <div className="relative text-center max-w-5xl mx-auto">
          {/* Floating Figma-style Canvas Toolbar (Exact replica of attached reference) */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#130f26] text-white/80 shadow-[0_18px_36px_rgba(19,15,38,0.25)] border border-white/10 mb-8 select-none"
          >
            <div className="bg-[#3b82f6] text-white p-1 rounded-lg">
              <MousePointer2 className="w-3.5 h-3.5" />
            </div>
            <div className="p-1 hover:text-white transition-colors cursor-pointer">
              <Hand className="w-3.5 h-3.5" />
            </div>
            <div className="p-1 hover:text-white transition-colors cursor-pointer">
              <Search className="w-3.5 h-3.5" />
            </div>
            <div className="h-4 w-[1px] bg-white/20 mx-1" />
            <div className="p-1 hover:text-white transition-colors cursor-pointer">
              <Box className="w-3.5 h-3.5 text-[#ff4dcb]" />
            </div>
            <div className="p-1 hover:text-white transition-colors cursor-pointer">
              <Type className="w-3.5 h-3.5" />
            </div>
            <div className="p-1 hover:text-white transition-colors cursor-pointer">
              <PenTool className="w-3.5 h-3.5" />
            </div>
            <div className="h-4 w-[1px] bg-white/20 mx-1" />
            <span className="text-[11px] font-mono font-medium text-white/50 pr-1">100% Canvas</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-tight leading-[1.05] sm:leading-[1.02] text-[#0e0a20] select-none"
          >
            {/* Line 1: "Make YOUR" */}
            <span className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <span className="text-[#581de3] drop-shadow-[0_4px_16px_rgba(88,29,227,0.15)] font-sans">
                Make
              </span>
              <span className="font-sans font-black text-transparent [-webkit-text-stroke:2px_#581de3] sm:[-webkit-text-stroke:3px_#581de3] uppercase tracking-wider">
                YOUR
              </span>
            </span>
            <br />
            {/* Line 2: "[Brand] Move" with Figma selection highlight & cursor */}
            <span className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-2 sm:mt-4">
              {/* "Brand" with interactive selection handle */}
              <span className="relative inline-block px-3 sm:px-6 py-0 sm:py-1 rounded-2xl bg-pink-50/90 border-[2.5px] border-[#ff008e] text-[#ff008e] font-serif italic font-normal tracking-normal shadow-[0_8px_24px_rgba(255,0,142,0.15)]">
                Brand
                {/* Selection Handle & Cursor (from reference) */}
                <span className="absolute -bottom-2.5 -right-2.5 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 bg-white border-2 border-[#ff008e] rounded-sm shadow-sm" />
                </span>
                <span className="absolute -bottom-7 -right-8 flex items-center gap-1 bg-[#ff008e] text-white text-[10px] font-mono px-1.5 py-0.5 rounded shadow-md pointer-events-none">
                  <MousePointer2 className="w-3 h-3 fill-current" />
                  <span>Text: Serif</span>
                </span>
              </span>

              {/* "Move" */}
              <span className="text-[#ff008e] font-sans font-black drop-shadow-[0_4px_16px_rgba(255,0,142,0.2)]">
                Move
              </span>
            </span>
          </motion.h1>

          {/* Subheading with editorial clarity */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-[#5e5a73] font-normal max-w-2xl mx-auto leading-relaxed"
          >
            We engineer high-converting 3D motion, UI animations, and product explainer videos for ambitious tech &amp; SaaS companies. Rapid turnaround, zero agency fluff.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link
              href="/contact-us"
              suppressHydrationWarning
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] text-white text-base sm:text-lg font-bold shadow-[0_12px_32px_rgba(255,0,142,0.4)] hover:shadow-[0_16px_40px_rgba(255,0,142,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Book a 15-Min Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/our-work"
              suppressHydrationWarning
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-[#fbf9fe] text-[#0e0a20] text-base sm:text-lg font-bold border border-[#e6ddf0] shadow-[0_4px_16px_rgba(35,22,81,0.06)] hover:border-[#581de3]/40 transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-current text-[#581de3]" />
              <span>Watch Showreel</span>
            </Link>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-[#706a85]"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>First draft in 48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Fixed price or monthly subscription</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>4.9/5 on Clutch &amp; G2</span>
            </div>
          </motion.div>
        </div>

        {/* Visual Showcase Canvas (Matching reference floating cards & Lottie animation) */}
        <div className="relative mt-16 sm:mt-24 max-w-6xl mx-auto">
          {/* Main Visual Frame */}
          <div className="relative rounded-3xl bg-white border border-[#e8dfef] p-3 sm:p-5 shadow-[0_30px_70px_rgba(88,29,227,0.08)] overflow-hidden">
            {/* Ambient inner soft glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#faf7fd] to-[#f4edfb]/60 rounded-3xl -z-10" />

            <div className="relative rounded-2xl overflow-hidden bg-[#0c081a] aspect-[16/9] max-h-[560px] flex items-center justify-center">
              {/* Lottie Animation or High-Def Video Reel */}
              <LottiePlayer
                src="/documents/Homepage---Hero-Illustration-v2.json"
                className="w-full h-full object-contain"
                loop
                autoplay
              />
            </div>
          </div>

          {/* Floating Proof Card (Exact replica from reference image: "2500+ videos produced and counting...") */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 sm:-bottom-10 right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#e8dfef] p-5 sm:p-6 shadow-[0_20px_50px_rgba(20,14,54,0.12)] max-w-xs sm:max-w-sm"
          >
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#140e36]">
              2500+
            </div>
            <div className="text-sm sm:text-base font-bold text-[#140e36] tracking-tight mt-0.5">
              videos produced <span className="font-normal italic text-[#5e5a73]">and counting...</span>
            </div>
            {/* Pink handwriting scribble underline */}
            <svg
              className="w-40 h-2.5 text-[#ff008e] mt-1"
              viewBox="0 0 160 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7C45 2 115 3 158 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#706a85]">
              <span className="font-semibold text-emerald-600">★★★★★ 4.9 Rating</span>
              <span className="bg-purple-50 text-[#581de3] font-bold px-2 py-0.5 rounded-full">
                Tech &amp; SaaS
              </span>
            </div>
          </motion.div>

          {/* Floating Creative Tag 1: "✨ Effects" Cursor Badge (from reference) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -top-6 sm:-top-8 -right-3 sm:right-10 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#e8dfef] shadow-[0_12px_30px_rgba(88,29,227,0.12)] text-xs font-bold text-[#0e0a20] select-none pointer-events-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff008e]" />
            <span>Effects</span>
            <MousePointer2 className="w-3.5 h-3.5 fill-[#140e36] text-[#140e36] ml-1" />
          </motion.div>

          {/* Floating Creative Tag 2: M4A Audio Asset Badge (from reference) */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="absolute -bottom-6 sm:-bottom-8 left-2 sm:-left-6 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e8dfef] shadow-[0_16px_40px_rgba(88,29,227,0.1)] select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#581de3] to-[#726eff] flex items-center justify-center text-white text-base font-bold shadow-md">
              🎵
            </div>
            <div>
              <div className="text-xs font-bold text-[#0e0a20]">sound_fx.m4a</div>
              <div className="text-[10px] font-medium text-[#706a85]">Spatial Audio • 48kHz</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
