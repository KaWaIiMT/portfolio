"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(delay?: number) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: delay ?? 0,
        ease: "power3.out",
      });
    },
    { scope: ref }
  );

  return ref;
}
