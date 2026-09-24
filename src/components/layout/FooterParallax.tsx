"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export default function FooterParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      gsap.fromTo(
        ref.current.firstElementChild,
        { yPercent: 55, opacity: 0.2 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom bottom", scrub: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative overflow-hidden pt-4">
      {children}
    </div>
  );
}
