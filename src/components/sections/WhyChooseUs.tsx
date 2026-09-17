import React from "react";
import { ShieldCheck, Zap, Users, RefreshCw, Layers, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function WhyChooseUs() {
  const perks = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Get your first animation drafts in as little as 48 hours. Rapid iterations keep your marketing sprints on schedule.",
      accent: "text-[#ff008e]",
    },
    {
      icon: Users,
      title: "Senior Motion Artists Only",
      description: "Work directly with battle-tested senior animators and 3D specialists. Zero junior handoffs, zero wasted feedback cycles.",
      accent: "text-[#726eff]",
    },
    {
      icon: DollarSign,
      title: "Transparent Flat Pricing",
      description: "No hidden fees, scope-creep invoices, or surprise hourly rates. Choose fixed-per-project or flexible monthly tiers.",
      accent: "text-[#ff4dcb]",
    },
    {
      icon: RefreshCw,
      title: "Unlimited Revisions",
      description: "We refine every single keyframe until your team is 100% in love with the final cut. Quality without compromise.",
      accent: "text-[#581de3]",
    },
    {
      icon: ShieldCheck,
      title: "14-Day Money Back Guarantee",
      description: "Try our subscription risk-free. If we don't exceed your quality expectations within two weeks, get a complete refund.",
      accent: "text-emerald-400",
    },
    {
      icon: Layers,
      title: "Scalable Output on Demand",
      description: "Need one video this month and eight next month? Scale your creative pipeline seamlessly without hiring headaches.",
      accent: "text-[#ff008e]",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[#090614]/80 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="pink">The Motion Advantage</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            <span className="text-[#ff008e]">Built differently </span>
            than old-school production agencies
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Eliminate lengthy contracts, bloated agency markups, and slow turnarounds. We combine studio-grade fidelity with modern SaaS velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="spotlight-card rounded-2xl p-7 border border-white/[0.08] bg-white/[0.02] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    <Icon className={`h-6 w-6 ${perk.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{perk.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
