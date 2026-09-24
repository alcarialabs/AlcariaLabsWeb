"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const TEXT =
  "Tu equipo no está para copiar datos entre programas, perseguir facturas ni responder cien veces la misma pregunta. Diseñamos la inteligencia artificial que asume ese trabajo, para que tus personas se dediquen a lo que de verdad hace crecer tu empresa.";

// Words highlighted in ember once lit.
const HOT = new Set(["inteligencia", "artificial", "personas", "crecer"]);

export default function Manifesto() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const words = gsap.utils.toArray<HTMLElement>("[data-word]", root.current);
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 75%", end: "bottom 60%", scrub: true },
        },
      );
      gsap.from("[data-orb]", {
        scale: 0.4,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "center center", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-label="Nuestra misión" className="relative overflow-hidden bg-night py-28 md:py-44">
      <div
        data-orb
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(3,68,220,0.22),transparent_60%)]"
      />
      <div className="container relative">
        <p className="eyebrow mb-10">Manifiesto</p>
        <p className="max-w-[22ch] font-display text-[clamp(2rem,5.4vw,5.2rem)] font-bold leading-[1.04] tracking-[-0.035em] sm:max-w-[24ch]">
          {TEXT.split(" ").map((w, i) => (
            <span
              key={i}
              data-word
              className={`inline-block pr-[0.25em] ${HOT.has(w.replace(/[.,]/g, "")) ? "text-ember" : "text-white"}`}
            >
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
