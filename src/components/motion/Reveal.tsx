"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Animate children marked with [data-reveal] in sequence; otherwise the wrapper itself. */
  stagger?: number;
  y?: number;
  delay?: number;
  start?: string;
};

export default function Reveal({
  as: Tag = "div",
  children,
  className,
  stagger = 0.09,
  y = 48,
  delay = 0,
  start = "top 85%",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const items = el.querySelectorAll("[data-reveal]");
      const targets = items.length ? Array.from(items) : [el];
      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger,
        delay,
        scrollTrigger: { trigger: el, start, once: true },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
