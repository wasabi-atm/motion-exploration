"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_DATA, NavItem } from "@/data/navigation";
import { GlowingButton } from "@/components/ui/GlowingButton";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setExpandedItem(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleAccordion = (title: string) => {
    setExpandedItem((prev) => (prev === title ? null : title));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 flex flex-col h-[100dvh] w-screen overflow-hidden bg-[#080610]/98 backdrop-blur-2xl text-white"
        >
          {/* Scrollable navigation list (Superside divided list layout) */}
          <div className="flex-1 overflow-y-auto px-5 pt-24 pb-32">
            <nav className="flex flex-col divide-y divide-white/[0.08]">
              {NAVIGATION_DATA.map((item: NavItem) => {
                const hasSubsections = item.sections && item.sections.length > 0;
                const isExpanded = expandedItem === item.title;

                // Direct page link (e.g. "Our work"): NO chevron, NO arrow icon, pure Superside style
                if (!hasSubsections) {
                  return (
                    <div key={item.title} className="py-1">
                      <Link
                        href={item.href || "#"}
                        onClick={onClose}
                        className="flex items-center w-full py-4 min-h-[52px] text-[24px] font-semibold tracking-tight text-white hover:text-[#ff4dcb] no-underline hover:no-underline active:opacity-80 transition-all"
                      >
                        <span>{item.title}</span>
                      </Link>
                    </div>
                  );
                }

                // Accordion disclosure item (e.g. "Services", "For whom", "Resources", "Pricing")
                return (
                  <div key={item.title} className="py-1">
                    <div className="flex w-full items-center justify-between">
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex-1 py-4 min-h-[52px] flex items-center text-left text-[24px] font-semibold tracking-tight text-white hover:text-[#ff4dcb] no-underline hover:no-underline active:opacity-80 transition-all"
                        >
                          <span>{item.title}</span>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => toggleAccordion(item.title)}
                          className="flex-1 py-4 min-h-[52px] flex items-center text-left text-[24px] font-semibold tracking-tight text-white hover:text-[#ff4dcb] active:opacity-80 transition-all focus:outline-none"
                        >
                          <span>{item.title}</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.title)}
                        aria-expanded={isExpanded}
                        aria-label={`Toggle ${item.title} sub-menu`}
                        className="min-w-[52px] min-h-[52px] p-3 -mr-2 flex items-center justify-center text-white/50 hover:text-white active:text-[#ff4dcb] active:scale-95 focus:outline-none transition-all"
                      >
                        <ChevronDown
                          className={`h-6 w-6 transition-transform duration-300 ease-out ${
                            isExpanded ? "rotate-180 text-[#ff4dcb]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pt-2 pb-4"
                        >
                          {/* Parent Overview Link (e.g. "See all services →", "Compare all plans →") */}
                          {item.href && item.parentLabel && (
                            <div className="mb-3 pb-2.5 border-b border-white/[0.06]">
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between px-4 py-3.5 min-h-[50px] rounded-xl bg-gradient-to-r from-[#ff008e]/15 to-[#ff4dcb]/10 border border-[#ff008e]/25 text-[#ff4dcb] hover:bg-[#ff008e]/20 active:opacity-90 no-underline hover:no-underline transition-all group"
                              >
                                <span className="text-[17px] font-semibold tracking-wide">
                                  {item.parentLabel}
                                </span>
                                <span className="text-lg font-bold transition-transform group-hover:translate-x-1">
                                  →
                                </span>
                              </Link>
                            </div>
                          )}

                          {item.sections?.map((section) => (
                            <div key={section.title} className="mb-4 last:mb-0">
                              {/* Eyebrow text: ONLY rendered when multiple sections exist (suppressed on monolith datasets) */}
                              {item.sections && item.sections.length > 1 && (
                                <div className="text-[12px] font-bold tracking-wider uppercase text-white/40 px-3.5 py-2 mt-1 mb-0.5">
                                  {section.title}
                                </div>
                              )}

                              {/* Sub-item rows: Large, clean text without icons or descriptions */}
                              <div className="flex flex-col gap-1">
                                {section.items.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    onClick={onClose}
                                    className="flex items-center w-full rounded-xl px-3.5 py-3.5 min-h-[48px] text-[19px] font-medium text-white/90 hover:text-white hover:bg-white/[0.06] active:bg-white/[0.1] active:text-[#ff4dcb] no-underline hover:no-underline transition-all"
                                  >
                                    <span>{sub.title}</span>
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
          </div>

          {/* Sticky Bottom CTA Bar */}
          <div className="fixed bottom-0 inset-x-0 z-50 flex gap-3 p-4 bg-[#080610]/90 backdrop-blur-xl border-t border-white/[0.08]">
            <GlowingButton
              href="/contact-us.html"
              variant="white"
              size="md"
              fullWidth
              onClick={onClose}
            >
              Book a call
            </GlowingButton>
            <GlowingButton
              href="/get-free-sample.html"
              variant="gradient"
              size="md"
              fullWidth
              onClick={onClose}
            >
              Get free sample
            </GlowingButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
