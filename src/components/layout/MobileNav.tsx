"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-40 flex flex-col h-[100dvh] w-screen overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,#1c1038_0%,#0e0822_35%,#080610_70%)] text-white"
        >
          {/* Scrollable navigation list */}
          <div className="flex-1 overflow-y-auto px-4 pt-24 pb-28">
            <div className="text-[10px] font-bold tracking-widest uppercase text-white/35 px-2 mb-3">
              Navigation
            </div>

            <div className="flex flex-col gap-2">
              {NAVIGATION_DATA.map((item: NavItem) => {
                const hasSubsections = item.sections && item.sections.length > 0;
                const isExpanded = expandedItem === item.title;

                if (!hasSubsections) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href || "#"}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3.5 text-base font-semibold text-white active:bg-white/[0.08] transition-colors"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="h-4 w-4 text-white/40" />
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.title}
                    className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.title)}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-semibold text-white focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-white/50 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-white/[0.06] bg-black/20 px-3 py-3"
                        >
                          {item.sections?.map((section) => (
                            <div key={section.title} className="mb-3 last:mb-0">
                              <div className="text-[10px] font-bold tracking-wider uppercase text-white/35 px-2 py-1">
                                {section.title}
                              </div>
                              <div className="flex flex-col gap-1.5 mt-1">
                                {section.items.map((sub) => (
                                  <Link
                                    key={sub.title}
                                    href={sub.href}
                                    onClick={onClose}
                                    className="flex items-center gap-3 rounded-lg px-2.5 py-2 hover:bg-white/[0.06] active:bg-white/[0.08] transition-colors"
                                  >
                                    {sub.icon && (
                                      <div className="h-8 w-8 relative flex-shrink-0 overflow-hidden rounded-md bg-white/5">
                                        <Image
                                          src={sub.icon}
                                          alt={sub.title}
                                          fill
                                          className="object-contain p-1"
                                        />
                                      </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="text-sm font-semibold text-white/90">
                                        {sub.title}
                                      </div>
                                      {sub.description && (
                                        <div className="text-xs text-white/50 truncate">
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
            </div>
          </div>

          {/* Sticky Bottom CTA Bar */}
          <div className="fixed bottom-0 inset-x-0 z-50 flex gap-2.5 p-4 bg-gradient-to-t from-[#080610] via-[#080610]/95 to-transparent backdrop-blur-md border-t border-white/[0.08]">
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
