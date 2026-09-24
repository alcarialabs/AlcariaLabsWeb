"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { PROCESS } from "@/lib/services";
import SplitReveal from "@/components/motion/SplitReveal";

export default function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-line-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-steps]", start: "top 60%", end: "bottom 60%", scrub: true },
        },
      );
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: step, start: "top 62%", toggleActions: "play none none reverse" } });
        tl.to(step.querySelector("[data-dot]"), { backgroundColor: "#FF4F00", scale: 1.25, duration: 0.4 })
          .from(step.querySelector("[data-body]"), { autoAlpha: 0.25, x: 24, duration: 0.8 }, 0)
          .to(step.querySelector("[data-n]"), { color: "#01203F", duration: 0.6 }, 0);
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      aria-labelledby="proceso-title"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-paper py-24 text-ink md:-mt-16 md:rounded-t-[64px] md:py-36"
    >
      <div className="container grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow-dark mb-5">Cómo trabajamos</p>
            <SplitReveal as="h2" id="proceso-title" className="mb-6 font-display text-display-md font-extrabold text-ink">
              De la idea a producción en semanas
            </SplitReveal>
            <p className="max-w-[40ch] text-lg leading-relaxed text-ink/65">
              Un método en cuatro fases con entregas cortas, métricas desde el primer día y un foco claro: el
              retorno de cada euro invertido.
            </p>
          </div>
        </div>

        <ol data-steps className="relative lg:col-span-6 lg:col-start-7">
          <div className="absolute bottom-6 left-[11px] top-6 w-px bg-ink/10" aria-hidden>
            <div data-line-fill className="h-full w-px origin-top bg-ember" />
          </div>
          {PROCESS.map((p) => (
            <li key={p.step} data-step className="relative flex gap-8 pb-16 last:pb-0 md:gap-12">
              <span data-dot className="relative z-10 mt-3 h-[23px] w-[23px] shrink-0 rounded-full border-4 border-paper bg-ink/20" aria-hidden />
              <div data-body>
                <span data-n className="mb-2 block font-display text-6xl font-extrabold leading-none text-ink/15 md:text-7xl">
                  {p.step}
                </span>
                <h3 className="mb-3 font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                <p className="max-w-[42ch] text-[17px] leading-relaxed text-ink/65">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
