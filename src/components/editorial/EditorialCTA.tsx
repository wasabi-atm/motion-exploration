"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Clock } from "lucide-react";

export function EditorialCTA() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf8fc] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] bg-gradient-to-b from-[#181135] to-[#0f0a24] text-white p-10 sm:p-16 lg:p-20 overflow-hidden shadow-[0_30px_80px_rgba(20,14,54,0.3)]">
          {/* Subtle ambient light discs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff008e]/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#581de3]/25 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#ff4dcb] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Risk Creative Sample</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06]">
              Ready to make your brand <span className="font-serif italic font-normal text-[#ff4dcb]">move</span>?
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
              Book a quick 15-minute introductory call, or request a custom video concept crafted specifically for your product within 48 hours.
            </p>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact-us"
                suppressHydrationWarning
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] text-white font-bold text-base sm:text-lg shadow-[0_12px_32px_rgba(255,0,142,0.45)] hover:shadow-[0_16px_45px_rgba(255,0,142,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Book a 15-Min Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/get-free-sample"
                suppressHydrationWarning
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-base sm:text-lg border border-white/20 transition-all"
              >
                <span>Get Free Sample</span>
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ff4dcb]" />
                <span>48-Hour concept turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA protected • 100% confidential</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
