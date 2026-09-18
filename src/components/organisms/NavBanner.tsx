import React from "react";
import Image from "next/image";

export function NavBanner() {
  return (
    <div className="hidden lg:block w-full border-b border-white/[0.08] bg-[#080610]/95 backdrop-blur-md py-2.5 text-[12px] font-medium text-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 xl:px-8">
        {/* Left Features */}
        <div className="flex items-center gap-6 xl:gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Frame-1707478768.svg"
              alt="14-day policy"
              width={16}
              height={16}
              className="h-4 w-4 opacity-80"
            />
            <span className="text-white/80">14-Day Money Back Policy</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/images/Frame-1707478769.svg"
              alt="Fast turnaround"
              width={16}
              height={16}
              className="h-4 w-4 opacity-80"
            />
            <span className="text-white/80">Fast Turnaround Solution</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/images/Frame-1707478770.svg"
              alt="Global clients"
              width={16}
              height={16}
              className="h-4 w-4 opacity-80"
            />
            <span className="text-white/80">Global Clients - USA, UK, AUS + more</span>
          </div>
        </div>

        {/* Right Contact */}
        <a
          href="mailto:hello@motiontheagency.com"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <Image
            src="/images/Frame-1707478664.svg"
            alt="Email icon"
            width={16}
            height={16}
            className="h-4 w-4 opacity-80"
          />
          <span>hello@motiontheagency.com</span>
        </a>
      </div>
    </div>
  );
}
