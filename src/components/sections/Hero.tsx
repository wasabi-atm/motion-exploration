"use client";

import React from "react";
import Image from "next/image";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-[#ff008e]/15 via-[#581de3]/20 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left z-10">
            <Badge variant="pink">Motion Graphics & Design Agency</Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              <span className="text-[#ff008e] block sm:inline">High-quality video, </span>
              <br className="hidden sm:inline" />
              animation & design for less
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Use our specialist motion graphics and design agency to access a highly skilled team of motion designers, animators, and UI specialists. Get modern, fast-turnaround video and design content for a simple fixed price—or a full creative team for less than the cost of one employee.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <GlowingButton
                href="/get-free-sample.html"
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get free sample
              </GlowingButton>
              <GlowingButton
                href="/contact-us.html"
                variant="white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a call
              </GlowingButton>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (Natural dimensions, zero clipping) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full flex items-center justify-center p-2 sm:p-0">
              <Image
                src="/images/homepage-hero.avif"
                alt="Motion The Agency hero video graphics showcase"
                width={1359}
                height={706}
                priority
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Client Logos Strip */}
        <div className="mt-20 sm:mt-24 border-t border-white/[0.08] pt-10 text-center">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-white/60 mb-6">
            500+ Motion graphics videos made for clients in 2025
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {["Logo.avif", "Logo-1.avif", "Logo-2.avif", "Logo-3.avif", "Logo-4.avif", "Logo-5.avif"].map(
              (logo, idx) => (
                <div key={idx} className="relative h-7 sm:h-8 w-24 sm:w-28">
                  <Image
                    src={`/images/${logo}`}
                    alt={`Client logo ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
