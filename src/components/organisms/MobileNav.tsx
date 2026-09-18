"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAVIGATION_DATA, NavItem } from "@/data/navigation";

export interface MobileNavProps {
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

                // Direct page link (e.g. "Our work")
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

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pb-4"
                        >
                          {item.sections?.map((sec) => (
                            <div key={sec.title} className="mb-4 last:mb-0">
                              {item.sections && item.sections.length > 1 && (
                                <div className="text-xs font-semibold tracking-wider uppercase text-white/40 mb-2 px-1">
                                  {sec.title}
                                </div>
                              )}
                              <div className="flex flex-col space-y-1">
                                {sec.items.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    onClick={onClose}
                                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-medium text-white/80 hover:text-white hover:bg-white/[0.06] active:bg-white/[0.1] no-underline hover:no-underline transition-colors"
                                  >
                                    <span>{sub.title}</span>
                                    <span className="text-white/30 text-xs">→</span>
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

          {/* Sticky Bottom Actions inside Mobile Menu */}
          <div className="p-5 border-t border-white/[0.08] bg-[#080610]/90 backdrop-blur-xl flex flex-col gap-3">
            <Link
              href="/contact-us"
              onClick={onClose}
              className="flex items-center justify-center w-full py-3.5 rounded-full text-base font-bold text-white tracking-tight bg-gradient-to-r from-[#ff008e] via-[#ff007a] to-[#ff4dcb] shadow-[0_0_24px_rgba(255,0,142,0.5)] active:scale-95 transition-all no-underline hover:no-underline"
            >
              <span>Book a Call</span>
            </Link>
            <div className="flex items-center justify-between px-2 text-xs text-white/40">
              <a href="mailto:hello@motiontheagency.com" className="hover:text-white transition-colors">
                hello@motiontheagency.com
              </a>
              <span>14-Day Money Back</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
