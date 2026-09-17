"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_DATA, NavItem } from "@/data/navigation";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavBanner } from "@/components/layout/NavBanner";

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        {/* Top Announcement Banner (Desktop only) */}
        <div className="pointer-events-auto">
          <NavBanner />
        </div>

        {/* Capsule Navigation Bar */}
        <div className="pt-2 sm:pt-3 px-3 sm:px-6">
          <div className="mx-auto max-w-6xl glass-pill rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all duration-300">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 z-10">
              <Image
                src="/images/Icon-with-White-Text.avif"
                alt="Motion The Agency Logo"
                width={115}
                height={32}
                priority
                style={{ width: "auto" }}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
              {NAVIGATION_DATA.map((item: NavItem) => {
                const hasDropdown = item.sections && item.sections.length > 0;

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      className="px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                    >
                      {item.title}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-200 focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                          activeDropdown === item.title ? "rotate-180 opacity-100" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[440px] rounded-2xl border border-white/10 bg-[#0c081a]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/80"
                        >
                          {item.sections?.map((section) => (
                            <div key={section.title} className="space-y-1.5">
                              <div className="text-[11px] font-bold tracking-wider uppercase text-white/40 px-3 py-1">
                                {section.title}
                              </div>
                              <div className="grid grid-cols-1 gap-1">
                                {section.items.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    className="flex items-start gap-3 rounded-xl p-2.5 hover:bg-white/[0.06] transition-colors group"
                                  >
                                    {sub.icon && (
                                      <div className="h-9 w-9 relative rounded-lg bg-white/5 flex-shrink-0 overflow-hidden border border-white/5">
                                        <Image
                                          src={sub.icon}
                                          alt={sub.title}
                                          fill
                                          className="object-contain p-1.5 group-hover:scale-105 transition-transform"
                                        />
                                      </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="text-sm font-semibold text-white group-hover:text-[#ff4dcb] transition-colors">
                                        {sub.title}
                                      </div>
                                      {sub.description && (
                                        <div className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                                          {sub.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Desktop Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <GlowingButton href="/contact-us.html" variant="white" size="sm">
                Book a call
              </GlowingButton>
              <GlowingButton href="/get-free-sample.html" variant="gradient" size="sm">
                Get free sample
              </GlowingButton>
            </div>

            {/* Mobile Right: Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.07] border border-white/[0.12] text-white active:scale-95 transition-all"
              >
                <div className="flex flex-col justify-center items-center gap-1.5 w-5">
                  <span
                    className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                      mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                      mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
