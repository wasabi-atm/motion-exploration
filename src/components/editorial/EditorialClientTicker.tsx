"use client";

import React from "react";

const CLIENTS = [
  "Y Combinator",
  "ClickUp",
  "Mirakl",
  "Primer",
  "Sealit",
  "Dext",
  "Sharpish",
  "OpenMoney",
];

export function EditorialClientTicker() {
  return (
    <section className="py-8 sm:py-10 border-y border-[#ece3f5] bg-white/70 backdrop-blur-md overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Editorial Label */}
          <div className="flex-shrink-0 text-xs font-mono font-bold tracking-widest uppercase text-[#581de3] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff008e]" />
            <span>Trusted By Leaders</span>
          </div>

          {/* Clean Minimalist Typographic Roster */}
          <div className="flex-1 flex items-center justify-between gap-6 sm:gap-10 overflow-x-auto no-scrollbar py-2 w-full">
            {CLIENTS.map((client, idx) => (
              <div
                key={client}
                className="flex items-center gap-6 sm:gap-10 flex-shrink-0"
              >
                <span className="text-base sm:text-lg font-black tracking-tight text-[#140e36] hover:text-[#581de3] transition-colors cursor-default whitespace-nowrap">
                  {client}
                </span>
                {idx !== CLIENTS.length - 1 && (
                  <span className="text-gray-300 font-bold">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
