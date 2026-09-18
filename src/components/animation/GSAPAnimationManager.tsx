"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GSAPAnimationManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure code runs strictly on client side
    if (typeof window === "undefined") return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Respect user's accessibility motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Use gsap.context for easy, leak-free cleanup
    const ctx = gsap.context(() => {
      // Allow DOM and any async layout scripts (like Webflow or fonts) to settle
      const initTimer = setTimeout(() => {
        // --------------------------------------------------------------------
        // 1. Initial Page Load Entrance Animations (Navbar & Hero)
        // --------------------------------------------------------------------
        const navPill = document.querySelector(".glass-pill");
        if (navPill) {
          gsap.fromTo(
            navPill,
            { opacity: 0, y: -16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "transform,opacity",
            }
          );
        }

        // Hero title & intro text on page load
        const heroHeadings = document.querySelectorAll(
          ".section-hero h1, .section-hero .h1, .hero-heading, main > div:first-child h1"
        );
        if (heroHeadings.length > 0) {
          gsap.fromTo(
            heroHeadings,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              stagger: 0.1,
              clearProps: "transform,opacity",
            }
          );
        }

        // --------------------------------------------------------------------
        // 2. Section Headings & Intro Reveals (ScrollTrigger)
        // --------------------------------------------------------------------
        const sectionHeaders = gsap.utils.toArray<HTMLElement>(
          "section .h2, .section-expect .h2, .section-workflow .h2, .top-services .h2, .wrapper-case .h2, main h2"
        );

        sectionHeaders.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        // Section badge eyebrows & subtitles
        const sectionEyebrows = gsap.utils.toArray<HTMLElement>(
          ".text-caps, .header--p p, .max-w-700, .why-left p"
        );
        sectionEyebrows.forEach((eyebrow) => {
          gsap.fromTo(
            eyebrow,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: eyebrow,
                start: "top 90%",
                once: true,
              },
            }
          );
        });

        // --------------------------------------------------------------------
        // 3. Batched Card & Grid Staggered Reveals
        // --------------------------------------------------------------------
        ScrollTrigger.batch(
          ".bottom-services > .card-contaiiner, .expect-cards-scroll > .card-contaiiner, .progress-content > .card-contaiiner, .spotlight-card, .card-price, .case-card-wrapper",
          {
            start: "top 88%",
            once: true,
            onEnter: (batch) => {
              gsap.fromTo(
                batch,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power2.out",
                  stagger: 0.08,
                  clearProps: "transform,opacity",
                }
              );
            },
          }
        );

        // --------------------------------------------------------------------
        // 4. Testimonials & Media Visuals
        // --------------------------------------------------------------------
        const mediaVisuals = gsap.utils.toArray<HTMLElement>(
          ".testimonials-card, .why-right, .image-wrapper-grogress"
        );
        mediaVisuals.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power2.out",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        // --------------------------------------------------------------------
        // 5. Interactive Floating Buttons / CTA Glow Elements
        // --------------------------------------------------------------------
        const ctaButtons = gsap.utils.toArray<HTMLElement>(
          ".section-expect .glowing-wrapper, .section-why .glowing-wrapper, .wrap-btn-price .glowing-wrapper"
        );
        ctaButtons.forEach((btn) => {
          gsap.fromTo(
            btn,
            { opacity: 0, scale: 0.94 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "back.out(1.5)",
              clearProps: "transform,opacity",
              scrollTrigger: {
                trigger: btn,
                start: "top 90%",
                once: true,
              },
            }
          );
        });

        // Refresh calculations now that triggers are bound
        ScrollTrigger.refresh();
      }, 60);

      return () => clearTimeout(initTimer);
    });

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
