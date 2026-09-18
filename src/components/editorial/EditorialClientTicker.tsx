"use client";

import React from "react";

const CLIENTS = [
  { name: "Y Combinator", category: "Venture Accelerator" },
  { name: "ClickUp", category: "Productivity & SaaS" },
  { name: "Mirakl", category: "Enterprise Marketplace" },
  { name: "Primer", category: "Fintech Infrastructure" },
  { name: "Sealit", category: "Zero Trust Security" },
  { name: "Dext", category: "Accounting Automation" },
  { name: "Sharpish", category: "Hospitality Tech" },
  { name: "OpenMoney", category: "Consumer Finance" },
];

export function EditorialClientTicker() {
  return (
    <section className="py-16 sm:py-20 border-y border-[#ece5f3] bg-white/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#736e88]">
            Trusted by fast-moving engineering &amp; marketing teams worldwide
          </p>
        </div>

        {/* Clean Editorial Logo Roster Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-center">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-[#faf7fd] hover:bg-white border border-[#eae2f2] hover:border-[#581de3]/30 hover:shadow-[0_12px_28px_rgba(88,29,227,0.06)] transition-all duration-200"
            >
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#140e36] group-hover:text-[#581de3] transition-colors">
                {client.name}
              </span>
              <span className="text-[11px] font-medium text-[#706a85] mt-0.5">
                {client.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
