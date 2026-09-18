import React from "react";
import { EditorialTemplate } from "@/components/templates/EditorialTemplate";
import {
  EditorialHero,
  EditorialClientTicker,
  EditorialServices,
  EditorialWorkShowcase,
  EditorialMetrics,
  EditorialProcess,
  EditorialReviews,
  EditorialPricing,
  EditorialCTA,
} from "@/components/editorial";

export const metadata = {
  title: "Motion The Agency | High-Impact 3D, Video & UI Motion Studio",
  description:
    "We engineer high-converting 3D motion, UI animations, and product explainer videos for ambitious tech & SaaS companies. Delivered in days, not months.",
};

export default function Home() {
  return (
    <EditorialTemplate>
      {/* 01. Signature Editorial Hero (Figma-Style Canvas & Lottie) */}
      <EditorialHero />

      {/* 02. Trusted By Leading Tech & SaaS Logos */}
      <EditorialClientTicker />

      {/* 03. 4 Core Capabilities with Integrated Lottie Animations */}
      <EditorialServices />

      {/* 04. Curated Works & Measurable Outcomes */}
      <EditorialWorkShowcase />

      {/* 05. Bold Proof Numbers */}
      <EditorialMetrics />

      {/* 06. 3-Step Production Pipeline */}
      <EditorialProcess />

      {/* 07. Social Proof, 5-Star Reviews & Interactive Ask-AI Panel */}
      <EditorialReviews />

      {/* 08. Transparent Pricing (Subscription, Fixed, Credits) */}
      <EditorialPricing />

      {/* 09. Closing Editorial Call to Action */}
      <EditorialCTA />
    </EditorialTemplate>
  );
}
