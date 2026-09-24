"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SERVICES } from "@/lib/services";
import Arrow from "@/components/ui/Arrow";
import SplitReveal from "@/components/motion/SplitReveal";
import { SERVICE_VIZ } from "./ServiceVisuals";

/**
 * Desktop: the section pins and the four service panels travel horizontally.
 * Mobile/tablet: panels stack as sticky cards (pure CSS).
 */
export default function ServicesScroller() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth + 48;

        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: "[data-pin]",
            pin: true,
            scrub: 0.8,
            start: "top top",
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
          },
        });

        gsap.to("[data-progress]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-pin]", start: "top top", end: () => `+=${distance()}`, scrub: true },
        });

        gsap.utils.toArray<HTMLElement>("[data-panel]").forEach((panel) => {
          gsap.fromTo(
            panel.querySelector("[data-viz]"),
            { scale: 0.82, rotate: -3 },
            {
              scale: 1,
              rotate: 0,
              ease: "none",
              scrollTrigger: { trigger: panel, containerAnimation: tween, start: "left right", end: "center center", scrub: true },
            },
          );
          gsap.from(panel.querySelector("[data-num]"), {
            xPercent: 60,
            ease: "none",
            scrollTrigger: { trigger: panel, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
          });
        });
      });

      mm.add("(max-width: 991px) and (prefers-reduced-motion: no-preference)", () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-panel]");
        panels.forEach((panel, i) => {
          if (i === panels.length - 1) return;
          gsap.to(panel, {
            scale: 0.92,
            filter: "brightness(0.55)",
            ease: "none",
            scrollTrigger: { trigger: panels[i + 1], start: "top bottom", end: "top 20%", scrub: true },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="servicios" aria-labelledby="servicios-title" className="relative bg-night">
      <div data-pin className="relative flex flex-col justify-center py-24 lg:h-screen lg:overflow-hidden lg:py-0">
        <div className="container mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-12">
          <div>
            <p className="eyebrow mb-5">Servicios</p>
            <SplitReveal as="h2" id="servicios-title" className="max-w-[20ch] font-display text-display-md font-extrabold text-white">
              Cuatro soluciones para que tu empresa escale
            </SplitReveal>
          </div>
          <div className="hidden w-56 lg:block">
            <div className="mb-2 flex justify-between font-mono text-[11px] text-white/40">
              <span>01</span>
              <span>04</span>
            </div>
            <div className="h-px w-full bg-white/10">
              <div data-progress className="h-px origin-left scale-x-0 bg-ember" />
            </div>
          </div>
        </div>

        <div
          ref={track}
          className="container flex flex-col gap-5 will-change-transform lg:w-max lg:max-w-none lg:flex-row lg:gap-8 lg:pl-[max(2rem,calc((100vw-1360px)/2+2rem))]"
        >
          {SERVICES.map((s, i) => {
            const Viz = SERVICE_VIZ[s.slug];
            return (
              <article
                key={s.slug}
                data-panel
                className="sticky grid overflow-hidden rounded-[28px] border border-white/10 bg-abyss shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] md:grid-cols-2 lg:static lg:h-[64vh] lg:max-h-[640px] lg:min-h-[480px] lg:w-[min(80vw,1080px)]"
                style={{ top: `${88 + i * 14}px` }}
              >
                <div className="relative flex flex-col justify-between gap-8 p-7 md:p-10">
                  <div
                    className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full opacity-25 blur-[80px]"
                    style={{ background: s.accent }}
                  />
                  <div className="relative">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full" style={{ background: s.accent }} />
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">{s.kicker}</span>
                    </div>
                    <h3 className="mb-4 font-display text-[clamp(1.6rem,2.4vw,2.3rem)] font-extrabold leading-[1.04] tracking-tight text-white">
                      {s.name}
                    </h3>
                    <p className="max-w-[46ch] text-[15px] leading-relaxed text-white/60 md:text-base">{s.description}</p>
                  </div>
                  <div className="relative flex flex-wrap items-end justify-between gap-6">
                    <ul className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link href={s.href} data-cursor="Ver" className="group inline-flex items-center gap-2 font-display text-sm font-bold text-white">
                      <span className="link-underline">Explorar servicio</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-night transition-transform duration-500 ease-expo group-hover:rotate-[-45deg]">
                        <Arrow className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden border-t border-white/10 bg-night/60 md:border-l md:border-t-0">
                  <div className="absolute inset-0 bg-dots opacity-60" />
                  <span
                    data-num
                    aria-hidden
                    className="pointer-events-none absolute -bottom-6 right-2 font-display text-[9rem] font-extrabold leading-none text-outline md:text-[13rem]"
                  >
                    {s.index}
                  </span>
                  <div data-viz className="relative h-full">
                    {Viz && <Viz />}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
