"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap, isFinePointer, prefersReducedMotion } from "@/lib/gsap";

/**
 * Two-part cursor: a precise dot plus a lagging ring that grows over interactive
 * elements and shows a label from [data-cursor="Texto"].
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");
    return () => document.documentElement.classList.remove("has-cursor");
  }, []);

  useEffect(() => setLabel(""), [pathname]);

  useEffect(() => {
    if (!enabled || !dot.current || !ring.current) return;
    const d = dot.current;
    const r = ring.current;
    gsap.set([d, r], { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    const dx = gsap.quickTo(d, "x", { duration: 0.12, ease: "power3" });
    const dy = gsap.quickTo(d, "y", { duration: 0.12, ease: "power3" });
    const rx = gsap.quickTo(r, "x", { duration: 0.55, ease: "power3" });
    const ry = gsap.quickTo(r, "y", { duration: 0.55, ease: "power3" });

    const move = (e: PointerEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("a, button, [data-cursor], input, textarea, label");
      const text = target?.dataset.cursor ?? "";
      const isField = target?.matches("input, textarea");
      setLabel(text);
      gsap.to(r, {
        scale: text ? 3.2 : target && !isField ? 1.9 : 1,
        opacity: isField ? 0 : 1,
        backgroundColor: text ? "rgba(255,79,0,1)" : target ? "rgba(255,79,0,0.12)" : "rgba(255,79,0,0)",
        borderColor: text ? "rgba(255,79,0,0)" : "rgba(255,79,0,0.8)",
        duration: 0.45,
        ease: "expo.out",
      });
      gsap.to(d, { scale: target ? 0 : 1, duration: 0.3 });
    };
    const down = () => gsap.to(r, { scale: "-=0.25", duration: 0.15 });
    const up = () => gsap.to(r, { scale: "+=0.25", duration: 0.3 });
    const hide = () => gsap.to([d, r], { opacity: 0, duration: 0.3 });
    const show = () => gsap.to([d, r], { opacity: 1, duration: 0.3 });

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("pointerleave", hide);
    document.documentElement.addEventListener("pointerenter", show);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("pointerleave", hide);
      document.documentElement.removeEventListener("pointerenter", show);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] flex h-9 w-9 items-center justify-center rounded-full border border-ember/80"
      >
        <span className="whitespace-nowrap font-mono text-[4px] font-bold uppercase tracking-[0.12em] text-white">
          {label}
        </span>
      </div>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 rounded-full bg-ember"
      />
    </>
  );
}
