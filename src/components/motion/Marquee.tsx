"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Infinite marquee (pure CSS loop) that skews with scroll velocity and reverses
 * direction when the user scrolls up.
 */
export default function Marquee({
  children,
  duration = 40,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!track.current || prefersReducedMotion()) return;
      const skewTo = gsap.quickTo(track.current, "skewX", { duration: 0.6, ease: "power3" });
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const v = gsap.utils.clamp(-8, 8, self.getVelocity() / -300);
          skewTo(v);
          const dir = self.direction === 1 ? (reverse ? "reverse" : "normal") : reverse ? "normal" : "reverse";
          track.current!.style.animationDirection = dir;
        },
        onLeave: () => skewTo(0),
        onLeaveBack: () => skewTo(0),
      });
      return () => st.kill();
    },
    { scope: root },
  );

  return (
    <div ref={root} className={`relative flex overflow-hidden ${className}`}>
      <div
        ref={track}
        className="flex w-max shrink-0 animate-marquee will-change-transform"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
