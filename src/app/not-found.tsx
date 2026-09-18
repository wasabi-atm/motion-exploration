import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import { SubpageTemplate } from "@/components/templates/SubpageTemplate";

export default function NotFound() {
  return (
    <SubpageTemplate withTopPadding={false}>
      <div className="min-h-[70vh] flex items-center justify-center pt-36 pb-20 px-4">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <Badge variant="pink">404 Error</Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            🌍 <span className="text-[#ff008e]">Oops,</span> You Took a Wrong Turn!
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
            Looks like you’ve touched down in the wrong place. Let’s get you back on track! 🚀
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="md" href="/">
              Back to Homepage
            </Button>
            <Button variant="secondary" size="md" href="/services">
              Explore Services
            </Button>
            <Button variant="ghost" size="md" href="/contact-us">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </SubpageTemplate>
  );
}
