"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** "load" plays immediately (hero), "scroll" plays when entering the viewport. */
  trigger?: "load" | "scroll";
  split?: "lines" | "words" | "chars";
  delay?: number;
  stagger?: number;
  id?: string;
};

/**
 * Masked text reveal. The text is server-rendered as plain text (crawlable);
 * SplitText only wraps it on the client and re-splits on resize / font load.
 */
export default function SplitReveal({
  as: Tag = "div",
  children,
  className,
  trigger = "scroll",
  split = "lines",
  delay = 0,
  stagger,
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { visibility: "visible" });
        return;
      }

      const splitter = SplitText.create(el, {
        type: split === "chars" ? "lines,words,chars" : split === "words" ? "lines,words" : "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { visibility: "visible" });
          const targets = split === "chars" ? self.chars : split === "words" ? self.words : self.lines;
          return gsap.from(targets, {
            yPercent: 115,
            rotate: split === "lines" ? 2.5 : 0,
            duration: split === "chars" ? 1.1 : 1.35,
            ease: "expo.out",
            stagger: stagger ?? (split === "chars" ? 0.022 : split === "words" ? 0.04 : 0.1),
            delay,
            scrollTrigger:
              trigger === "scroll" ? { trigger: el, start: "top 88%", once: true } : undefined,
          });
        },
      });

      return () => splitter.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} id={id} {...(trigger === "load" ? { "data-intro": "" } : {})}>
      {children}
    </Tag>
  );
}
