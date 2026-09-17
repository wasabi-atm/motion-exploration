import React from "react";
import { Check, Sparkles } from "lucide-react";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { Badge } from "@/components/ui/Badge";

export function PricingSection() {
  const plans = [
    {
      name: "Fixed Price",
      description: "Best for single, high-impact video projects with defined scope.",
      price: "$2,490",
      period: "per project",
      highlight: false,
      features: [
        "1 complete 60-90s explainer or product demo",
        "Full storyboard & script assistance",
        "Senior 3D & motion designer",
        "Custom sound design & voiceover",
        "Unlimited revisions during review",
        "Final 4K exports in all formats",
      ],
      ctaText: "Book a project",
      href: "/contact-us.html",
    },
    {
      name: "Creative Subscription",
      description: "A full outsourced motion & UI team for continuous high-growth output.",
      price: "$4,990",
      period: "per month",
      highlight: true,
      badge: "Most Popular",
      features: [
        "Unlimited animation & design requests",
        "Dedicated senior creative director & motion team",
        "Average 48-hour delivery per milestone",
        "Video explainers, 3D motion, UI & pitch decks",
        "Pause or cancel anytime — zero lock-in",
        "14-day 100% money-back guarantee",
      ],
      ctaText: "Start subscription",
      href: "/contact-us.html",
    },
    {
      name: "Creative Credits",
      description: "Prepaid flexible credits for sporadic campaigns and seasonal needs.",
      price: "$3,490",
      period: "pack of 10 credits",
      highlight: false,
      features: [
        "Use credits for explainers, social ads, or 3D",
        "Credits never expire",
        "Same 48-hour rapid turnaround",
        "Top-up whenever needed",
        "Dedicated Slack channel access",
        "Full source files (After Effects, Blender)",
      ],
      ctaText: "Buy credit pack",
      href: "/pricing/creative-credits.html",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[#07050e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="pink">Transparent Pricing</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Simple, predictable pricing.{" "}
            <span className="text-[#ff008e]">Zero hidden fees.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Choose the model that fits your growth stage: flat-rate project, flexible monthly retainer, or on-demand credits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#1c0f38] to-[#0d0820] border-2 border-[#ff008e] shadow-2xl shadow-pink-500/20 lg:-translate-y-2"
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] text-white shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-white/60 mt-1.5 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/50">{plan.period}</span>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                    What's included
                  </div>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-white/80">
                      <Check className="h-4 w-4 text-[#ff008e] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <GlowingButton
                  href={plan.href}
                  variant={plan.highlight ? "gradient" : "white"}
                  size="md"
                  fullWidth
                >
                  {plan.ctaText}
                </GlowingButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
