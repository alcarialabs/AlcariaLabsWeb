"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { SERVICES } from "@/lib/services";
import { SERVICE_VIZ } from "@/components/home/ServiceVisuals";
import { gsap, useGSAP, isFinePointer, prefersReducedMotion } from "@/lib/gsap";
import Arrow from "@/components/ui/Arrow";

/** Big editorial rows; on desktop a preview card follows the pointer. */
export default function ServiceRows() {
  const root = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = preview.current;
      if (!el || !contextSafe || !isFinePointer() || prefersReducedMotion()) return;
      gsap.set(el, { xPercent: -50, yPercent: -50 });
      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
      const move = contextSafe((e: PointerEvent) => {
        const r = root.current!.getBoundingClientRect();
        xTo(e.clientX - r.left);
        yTo(e.clientY - r.top);
      });
      root.current!.addEventListener("pointermove", move);
      return () => root.current?.removeEventListener("pointermove", move);
    },
    { scope: root },
  );

  useGSAP(
    () => {
      if (!preview.current || !isFinePointer()) return;
      gsap.to(preview.current, {
        scale: hovered === null ? 0.6 : 1,
        autoAlpha: hovered === null ? 0 : 1,
        rotate: hovered === null ? -6 : 0,
        duration: 0.6,
        ease: "expo.out",
      });
    },
    { dependencies: [hovered], scope: root },
  );

  return (
    <div ref={root} className="relative" onPointerLeave={() => setHovered(null)}>
      <ul className="border-t border-white/10">
        {SERVICES.map((s, i) => (
          <li key={s.slug} onPointerEnter={() => setHovered(i)} className="border-b border-white/10">
            <Link
              href={s.href}
              data-cursor="Ver"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-8 md:gap-10 md:py-12"
            >
              <span className="font-mono text-xs text-white/35">{s.index}</span>
              <span>
                <span className="block font-display text-[clamp(1.9rem,5.5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition-all duration-700 ease-expo group-hover:translate-x-3 group-hover:text-sand">
                  {s.name}
                </span>
                <span className="mt-3 block max-w-[60ch] text-[15px] text-white/50">{s.description}</span>
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-500 ease-expo group-hover:rotate-[-45deg] group-hover:border-ember group-hover:bg-ember md:h-16 md:w-16">
                <Arrow className="h-5 w-5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none invisible absolute left-0 top-0 z-20 hidden h-64 w-80 overflow-hidden rounded-[24px] border border-white/15 bg-abyss shadow-2xl lg:block"
      >
        {SERVICES.map((s, i) => {
          const Viz = SERVICE_VIZ[s.slug];
          return (
            <div
              key={s.slug}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: hovered === i ? 1 : 0, background: `radial-gradient(circle at 70% 20%, ${s.accent}33, transparent 60%)` }}
            >
              {Viz && <Viz />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
