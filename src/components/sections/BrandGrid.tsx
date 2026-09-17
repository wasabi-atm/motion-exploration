import React from "react";
import Image from "next/image";
import { GlowingButton } from "@/components/ui/GlowingButton";

export function BrandGrid() {
  const logos = [
    { name: "HackerRank", src: "/images/logos01.avif" },
    { name: "ClickUp", src: "/images/Client-Logo.avif" },
    { name: "Apollo.io", src: "/images/logos02.avif" },
    { name: "Attio", src: "/images/logos07.avif" },
    { name: "Venly", src: "/images/logos06.avif" },
    { name: "SparkLoop", src: "/images/logos04.avif" },
    { name: "Verifone", src: "/images/logos11.avif" },
    { name: "vidIQ", src: "/images/logos14.avif" },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#0a0716]/60 border-y border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Media */}
          <div className="lg:col-span-6 relative aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/homehero2.avif"
              alt="Motion design and 3D visual workspace"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              <span className="text-[#ff008e] block">We are your outsourced </span>
              motion and design team
            </h2>

            <p className="text-base text-white/80 leading-relaxed">
              Our team specialises in communicating your message using animation, motion graphics, and 3D renders with software like Figma, After Effects, and Blender. Whether you need a new sizzle reel video or assistance with a multi-channel video campaign, our expert agency is ready to support your business.
            </p>

            {/* Client Badges Grid */}
            <div className="grid grid-cols-4 gap-4 pt-2">
              {logos.map((l) => (
                <div
                  key={l.name}
                  className="flex items-center justify-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] transition-colors"
                >
                  <div className="relative h-6 w-full">
                    <Image
                      src={l.src}
                      alt={`${l.name} logo`}
                      fill
                      className="object-contain filter brightness-90 contrast-125"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <GlowingButton href="/our-work.html" variant="gradient" size="md">
                See our work
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
