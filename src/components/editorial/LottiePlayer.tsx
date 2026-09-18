"use client";

import React, { useEffect, useRef, useState } from "react";

export interface LottiePlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

declare global {
  interface Window {
    lottie?: any;
  }
}

export function LottiePlayer({
  src,
  className = "w-full h-full",
  loop = true,
  autoplay = true,
  speed = 1,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const initAnimation = () => {
      if (!containerRef.current || !window.lottie || isCancelled) return;

      try {
        if (animRef.current) {
          animRef.current.destroy();
        }

        const anim = window.lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop,
          autoplay,
          path: src,
        });

        if (speed !== 1) {
          anim.setSpeed(speed);
        }

        anim.addEventListener("DOMLoaded", () => {
          if (!isCancelled) setIsLoaded(true);
        });

        animRef.current = anim;
      } catch (err) {
        console.warn("Lottie loading warning:", err);
      }
    };

    if (window.lottie) {
      initAnimation();
    } else {
      // Load lottie.min.js if not already present
      const scriptId = "motion-lottie-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement;

      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "/js/lottie.min.js";
        script.async = true;
        script.onload = () => {
          if (!isCancelled) initAnimation();
        };
        document.body.appendChild(script);
      } else {
        const checkInterval = setInterval(() => {
          if (window.lottie) {
            clearInterval(checkInterval);
            if (!isCancelled) initAnimation();
          }
        }, 50);
        setTimeout(() => clearInterval(checkInterval), 3000);
      }
    }

    return () => {
      isCancelled = true;
      if (animRef.current) {
        try {
          animRef.current.destroy();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [src, loop, autoplay, speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ minHeight: "120px" }}
    />
  );
}
