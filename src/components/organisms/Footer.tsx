import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06040c] pt-16 pb-12 text-sm text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Icon-with-White-Text.avif"
                alt="Motion The Agency Logo"
                width={130}
                height={36}
                style={{ width: "auto" }}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              High-quality video, 3D animation, and motion design for high-growth tech, SaaS, and AI brands. Rapid delivery without the traditional agency bloat.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">Available for new projects</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              For Whom
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/for-whom/saas" className="hover:text-white transition-colors">
                  SaaS
                </Link>
              </li>
              <li>
                <Link href="/for-whom/ai" className="hover:text-white transition-colors">
                  AI & Tech
                </Link>
              </li>
              <li>
                <Link href="/for-whom/b2b" className="hover:text-white transition-colors">
                  B2B
                </Link>
              </li>
              <li>
                <Link href="/for-whom/startup" className="hover:text-white transition-colors">
                  Startups
                </Link>
              </li>
              <li>
                <Link href="/for-whom/enterprise" className="hover:text-white transition-colors">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Actions & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get Started
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contact-us" className="text-[#ff4dcb] hover:text-white transition-colors">
                  Book an Intro Call →
                </Link>
              </li>
              <li>
                <Link href="/get-free-sample" className="text-white hover:text-[#ff4dcb] transition-colors">
                  Request Free Sample
                </Link>
              </li>
              <li>
                <a href="mailto:hello@motiontheagency.com" className="hover:text-white transition-colors">
                  hello@motiontheagency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} Motion The Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
