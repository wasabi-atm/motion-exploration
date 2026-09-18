import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlowingButton } from "@/components/atoms/GlowingButton";
import { Badge } from "@/components/atoms/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Whom | Tailored Motion & Video Solutions",
  description:
    "Explore our dedicated video production and motion design solutions categorized by company scale and industry focus.",
};

const scales = [
  {
    title: "Startup",
    description: "Crafting impactful visual stories and product explainers that power your initial launch and seed rounds.",
    href: "/for-whom/startup",
    icon: "/images/startup-icon.avif",
  },
  {
    title: "Scaleup",
    description: "Creative support that scales with your growth, from Series A to expansion, managing high-volume campaigns.",
    href: "/for-whom/scaleup",
    icon: "/images/scaleupMenuIcon.avif",
  },
  {
    title: "Enterprise",
    description: "Scalable creative solutions that help large-scale enterprise teams maintain strict brand consistency and global quality.",
    href: "/for-whom/enterprise",
    icon: "/images/enterprise-icon.avif",
  },
];

const industries = [
  {
    title: "B2B",
    description: "Professional animations that clearly communicate business value and accelerate enterprise sales cycles.",
    href: "/for-whom/b2b",
    icon: "/images/B2B-1.avif",
  },
  {
    title: "SaaS",
    description: "Clear, impactful product walkthroughs and feature previews that reduce churn and boost user onboarding.",
    href: "/for-whom/saas",
    icon: "/images/Showcase-1-3.avif",
  },
  {
    title: "AI",
    description: "Captivating visuals and diagrammatic animations that make complex algorithms and neural workflows instantly intuitive.",
    href: "/for-whom/ai",
    icon: "/images/AI.avif",
  },
  {
    title: "Tech",
    description: "Cutting-edge 3D motion and UI micro-interactions designed to showcase innovation and inspire tech leaders.",
    href: "/for-whom/tech",
    icon: "/images/Showcase-1.avif",
  },
  {
    title: "Marketing",
    description: "Scroll-stopping video creative engineered for performance marketing, social ads, and paid conversion funnels.",
    href: "/for-whom/marketing",
    icon: "/images/Marketing.avif",
  },
  {
    title: "Web3",
    description: "Futuristic visual storytelling that brings decentralized protocols, cryptographic proofs, and blockchain ecosystems to life.",
    href: "/for-whom/web3",
    icon: "/images/web-3-icon.svg",
  },
];

export default function ForWhomPage() {
  return (
    <main className="min-h-screen bg-[#080610] text-white pt-36 sm:pt-44 pb-28">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#ff008e]/15 via-[#581de3]/20 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <Badge variant="pink">Tailored Solutions</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Built for your <span className="text-[#ff008e]">scale</span> and{" "}
            <span className="text-[#ff4dcb]">industry</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Discover how Motion The Agency crafts bespoke 2D, 3D, and UI animation tailored to your specific organizational needs and growth targets.
          </p>
        </div>

        {/* Section 1: By Scale */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-6 w-1 rounded-full bg-[#ff008e]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              By Company Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scales.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative rounded-2xl p-7 bg-white/[0.03] border border-white/[0.08] hover:border-[#ff008e]/50 hover:bg-white/[0.05] no-underline hover:no-underline transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={36}
                      height={36}
                      className="object-contain p-1 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#ff4dcb] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-2 text-sm font-semibold text-[#ff008e] group-hover:text-[#ff4dcb]">
                  <span>Explore {item.title} solutions</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: By Industry */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-6 w-1 rounded-full bg-[#ff4dcb]" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              By Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative rounded-2xl p-7 bg-white/[0.03] border border-white/[0.08] hover:border-[#ff008e]/50 hover:bg-white/[0.05] no-underline hover:no-underline transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={36}
                      height={36}
                      className="object-contain p-1 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#ff4dcb] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-2 text-sm font-semibold text-[#ff008e] group-hover:text-[#ff4dcb]">
                  <span>Explore {item.title} animations</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-b from-[#180e30] to-[#0d071d] border border-white/10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Not sure where your brand fits?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            Book a 15-minute discovery call with our creative directors or request a complimentary custom video sample.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <GlowingButton href="/get-free-sample" variant="gradient" size="lg">
              Get free sample
            </GlowingButton>
            <GlowingButton href="/contact-us" variant="white" size="lg">
              Book a call
            </GlowingButton>
          </div>
        </div>
      </div>
    </main>
  );
}
