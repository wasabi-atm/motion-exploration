"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_DATA, NavItem } from "@/data/navigation";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/atoms/Button";
import { GlassPill } from "@/components/molecules/GlassPill";
import { MobileNav } from "./MobileNav";
import { NavBanner } from "./NavBanner";

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
          <GlassPill className="mx-auto max-w-6xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all duration-300">
            {/* Logo: Atomic component with standalone "M" on mobile and full logo on desktop */}
            <Logo />

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
              {NAVIGATION_DATA.map((item: NavItem) => {
                const hasDropdown = item.sections && item.sections.length > 0;

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      className="px-3.5 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/[0.06] no-underline hover:no-underline transition-all duration-200"
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
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/[0.06] no-underline hover:no-underline transition-all duration-200 focus:outline-none"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                            activeDropdown === item.title ? "rotate-180 opacity-100" : ""
                          }`}
                        />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/[0.06] transition-all duration-200 focus:outline-none"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                            activeDropdown === item.title ? "rotate-180 opacity-100" : ""
                          }`}
                        />
                      </button>
                    )}

                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[460px] rounded-2xl border border-white/10 bg-[#0c081a]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/80"
                        >
                          {/* Parent Overview Link if exists */}
                          {item.href && item.parentLabel && (
                            <div className="mb-2 pb-2 border-b border-white/[0.08]">
                              <Link
                                href={item.href}
                                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#ff4dcb] hover:bg-white/[0.06] no-underline hover:no-underline transition-colors"
                              >
                                <span>{item.parentLabel}</span>
                                <span className="text-sm">→</span>
                              </Link>
                            </div>
                          )}

                          {item.sections?.map((section) => (
                            <div key={section.title} className="space-y-1.5 mb-3 last:mb-0">
                              {item.sections && item.sections.length > 1 && (
                                <div className="text-[11px] font-bold tracking-wider uppercase text-white/40 px-3 py-1">
                                  {section.title}
                                </div>
                              )}
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

            {/* Desktop Right CTA: Prominent Pink "Book a Call" only */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="primary"
                size="sm"
                href="/contact-us"
                className="px-6 py-2.5 text-[15px] font-bold tracking-tight shadow-[0_0_24px_rgba(255,0,142,0.55)] hover:shadow-[0_0_36px_rgba(255,0,142,0.85)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Book a Call
              </Button>
            </div>

            {/* Mobile Right: Prominent Pink "Book a Call" CTA + Pink Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
              <Button
                variant="primary"
                size="sm"
                href="/contact-us"
                className="px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold tracking-tight shadow-[0_0_18px_rgba(255,0,142,0.5)] hover:shadow-[0_0_26px_rgba(255,0,142,0.75)] active:scale-95"
              >
                Book a Call
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center p-2 text-white active:scale-90 transition-all focus:outline-none"
              >
                <div className="relative flex flex-col justify-center items-center w-5 h-4 pointer-events-none">
                  {/* Top Bar */}
                  <span
                    className={`absolute h-[2.5px] w-5 rounded-full bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "rotate-45 translate-y-0"
                        : "-translate-y-1.5"
                    }`}
                  />
                  {/* Middle Bar */}
                  <span
                    className={`absolute h-[2.5px] w-5 rounded-full bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                    }`}
                  />
                  {/* Bottom Bar */}
                  <span
                    className={`absolute h-[2.5px] w-5 rounded-full bg-gradient-to-r from-[#ff008e] to-[#ff4dcb] transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "-rotate-45 translate-y-0"
                        : "translate-y-1.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </GlassPill>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
