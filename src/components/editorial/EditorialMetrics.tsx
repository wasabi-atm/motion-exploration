"use client";

import React from "react";

// Real metrics from index.html, pricing.html, and customer stories
const REAL_METRICS = [
  {
    value: "2,500+",
    label: "Videos Produced",
    description: "High-impact 3D, 2D, and UI motion graphics shipped across 18 countries.",
  },
  {
    value: "48h",
    label: "Sample Turnaround",
    description: "Request a custom video sample and receive your concept within 48 hours.",
  },
  {
    value: "4.9/5",
    label: "Clutch & G2 Rating",
    description: "Verified 5-star reviews from Y Combinator founders and enterprise marketing leaders.",
  },
  {
    value: "$350k+",
    label: "Saved for Clients",
    description: "Proven cost savings through dedicated agile production vs traditional agency overhead.",
  },
];

export function EditorialMetrics() {
  return (
    <section className="py-20 sm:py-28 bg-[#faf8fc] border-b border-[#eae2f2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {REAL_METRICS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-6 sm:p-8 flex flex-col justify-between ${
                idx !== REAL_METRICS.length - 1
                  ? "lg:border-r border-[#eae2f2]"
                  : ""
              }`}
            >
              <div>
                <div className="font-instrument italic text-5xl sm:text-6xl font-normal text-[#140e36] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-[#581de3] mt-3">
                  {stat.label}
                </div>
                <p className="text-sm text-[#5e5a73] mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
