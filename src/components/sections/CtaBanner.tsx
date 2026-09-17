import React from "react";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { ShieldCheck, Sparkles } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 text-center border border-white/15 bg-gradient-to-b from-[#180f33] via-[#100824] to-[#080610] shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff008e]/20 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-[#ff008e]" />
              <span>Transform Your Product Storytelling</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to elevate your brand with{" "}
              <span className="text-[#ff008e]">world-class motion?</span>
            </h2>

            <p className="text-base text-white/80 leading-relaxed">
              Book a quick 15-minute discovery call to explore timelines and pricing, or request a complimentary bespoke sample tailored to your product.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <GlowingButton href="/contact-us.html" variant="gradient" size="lg">
                Book an intro call
              </GlowingButton>
              <GlowingButton href="/get-free-sample.html" variant="white" size="lg">
                Request free sample
              </GlowingButton>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-white/50 pt-3">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>14-Day Money Back Guarantee • Cancel or pause anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
