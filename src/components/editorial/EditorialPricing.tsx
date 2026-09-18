"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const PLANS = [
  {
    name: "Fixed-Scope Video",
    tagline: "For flagship product launches & 3D explainers",
    price: "Custom",
    period: "Per Project",
    popular: false,
    features: [
      "Full scriptwriting & narrative arc",
      "Bespoke 3D & 2D styleframes",
      "Custom sound design & voiceover",
      "All formats (16:9, 9:16, Lottie JSON)",
      "Dedicated creative director & animator",
      "Guaranteed delivery timeline",
    ],
    cta: "Request Project Quote",
    href: "/contact-us",
  },
  {
    name: "Motion Subscription",
    tagline: "Unlimited creative bandwidth for scaling tech brands",
    price: "Pause or cancel anytime",
    period: "Monthly retainer",
    popular: true,
    features: [
      "One active request at a time",
      "Average 48h turnaround per milestone",
      "UI animations, 3D, explainers, & ads",
      "Direct Slack channel with our animators",
      "Unlimited revisions & design tweaks",
      "No long-term contracts or lock-in",
    ],
    cta: "Join Subscription",
    href: "/pricing/design-subscription-services",
  },
  {
    name: "Creative Credits",
    tagline: "Pre-purchased hours that never expire",
    price: "Flexible",
    period: "Credits pack",
    popular: false,
    features: [
      "Credits never expire",
      "Use for micro-animations or full videos",
      "Dedicated motion design team",
      "Transparent time tracking dashboard",
      "Prioritized sprint queues",
      "Great for quarterly marketing campaigns",
    ],
    cta: "Explore Credits",
    href: "/pricing/creative-credits",
  },
];

export function EditorialPricing() {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#581de3] mb-4">
            Transparent Engagement
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0e0a20]">
            Simple pricing. <span className="font-serif italic font-normal text-[#ff008e]">Zero</span> surprises.
          </h2>
          <p className="mt-4 text-lg text-[#5e5a73]">
            Choose between predictable fixed-project billing, flexible credits, or an all-inclusive monthly creative subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-[#faf7fd] border-2 border-[#581de3] shadow-[0_25px_60px_rgba(88,29,227,0.12)] -translate-y-2"
                  : "bg-white border border-[#eae2f2] shadow-[0_15px_35px_rgba(35,22,81,0.04)] hover:border-[#581de3]/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff008e] to-[#581de3] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular for SaaS
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-[#0e0a20] tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#5e5a73] mt-2 min-h-[40px]">
                  {plan.tagline}
                </p>

                <div className="mt-6 mb-8 pt-6 border-t border-[#eae2f2]">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#140e36]">
                    {plan.price}
                  </div>
                  <div className="text-xs text-[#706a85] font-semibold mt-1">
                    {plan.period}
                  </div>
                </div>

                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-sm text-[#2d2942]">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={plan.href}
                suppressHydrationWarning
                className={`w-full py-4 rounded-full font-bold text-center text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? "bg-[#ff008e] hover:bg-[#e0007d] text-white shadow-[0_8px_24px_rgba(255,0,142,0.35)]"
                    : "bg-[#faf7fd] hover:bg-[#581de3] text-[#0e0a20] hover:text-white border border-[#eae2f2]"
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
