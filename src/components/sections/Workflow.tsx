import React from "react";
import { Send, Zap, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function Workflow() {
  const steps = [
    {
      num: "01",
      icon: Send,
      title: "Submit your request",
      description:
        "Drop your brief, script, or Figma designs directly into your dedicated Trello board or Slack channel. Request as many videos or animations as you need.",
    },
    {
      num: "02",
      icon: Zap,
      title: "Receive initial draft in 48h",
      description:
        "Our senior motion designers get straight to work. Watch your storyboard and first keyframes take life within 48-72 hours on average.",
    },
    {
      num: "03",
      icon: CheckCircle2,
      title: "Revise until 100% happy",
      description:
        "Leave comments right on the video frame via Frame.io. We iterate and polish until the final animation exceeds your expectations.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[#090614]/70 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="purple">How It Works</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            <span className="text-[#ff008e]">Simple, rapid workflow </span>
            designed for modern product teams
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            No endless proposal meetings or hourly billing negotiations. A seamless creative subscription that runs alongside your sprint schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="spotlight-card rounded-3xl p-8 border border-white/[0.08] bg-white/[0.02] flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff008e] to-[#726eff]">
                      {s.num}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/80">
                      <Icon className="h-5 w-5 text-[#ff4dcb]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white pt-2">{s.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {s.description}
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
