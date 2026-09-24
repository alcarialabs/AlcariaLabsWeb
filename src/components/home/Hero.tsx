"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { ISO_A_PATH, ISO_FLAME_PATH } from "@/components/brand/Isotipo";
import Magnetic from "@/components/motion/Magnetic";
import CountUp from "@/components/motion/CountUp";
import Arrow from "@/components/ui/Arrow";
import NetworkCanvas from "./NetworkCanvas";
import { STATS } from "@/lib/services";

const LINES = ["Tu empresa,", "en piloto", "automático"];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      if (prefersReducedMotion()) {
        gsap.set(q("[data-intro]"), { visibility: "visible" });
        return;
      }

      // --- Intro -----------------------------------------------------------
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .set(q("[data-intro]"), { visibility: "visible" })
        .from(q("[data-bg]"), { opacity: 0, duration: 2.4, ease: "power2.out" }, 0)
        .from(q("[data-line] > span"), { yPercent: 118, rotate: 3, duration: 1.5, stagger: 0.11 }, 0.15)
        .from(q("[data-dot]"), { scale: 0, y: -80, duration: 1.3, ease: "elastic.out(1,0.45)" }, 0.95)
        .from(q("[data-kicker]"), { autoAlpha: 0, y: 16, duration: 1 }, 0.35)
        .from(q("[data-rocket-a]"), { yPercent: 40, autoAlpha: 0, duration: 1.8 }, 0.25)
        .from(q("[data-rocket-flame]"), { scale: 0, duration: 1.2, ease: "elastic.out(1,0.4)" }, 1.1)
        .from(q("[data-fade]"), { autoAlpha: 0, y: 28, duration: 1.2, stagger: 0.08 }, 0.8);

      // Idle hover of the rocket
      gsap.to(q("[data-rocket]"), { y: -14, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });

      // --- Scroll: lift-off --------------------------------------------------
      const lift = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.7 },
      });
      lift
        .to(q("[data-rocket-body]"), { yPercent: -95, ease: "power2.in" }, 0)
        .fromTo(q("[data-exhaust]"), { scaleY: 0.05, opacity: 0.4 }, { scaleY: 1, opacity: 1, ease: "power1.in" }, 0)
        .to(q("[data-content]"), { yPercent: -18, opacity: 0, ease: "none" }, 0)
        .to(q("[data-bg]"), { opacity: 0.25, ease: "none" }, 0);
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-night"
    >
      {/* Background layers */}
      <div data-bg className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[20%] -top-[30%] h-[80vmax] w-[80vmax] rounded-full bg-[radial-gradient(circle,rgba(3,68,220,0.42),transparent_62%)]" />
        <div className="absolute -bottom-[35%] -left-[20%] h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle,rgba(255,79,0,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid opacity-50 mask-radial" />
        <div className="absolute inset-0">
          <NetworkCanvas />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-night to-transparent" />
      </div>

      {/* Rocket (brand isotype) */}
      <div
        data-rocket-body
        className="pointer-events-none absolute right-[-14%] top-[14%] h-[46vh] w-auto opacity-30 sm:right-[-6%] sm:opacity-40 lg:right-[4%] lg:top-[18%] lg:h-[54vh] lg:opacity-100"
        aria-hidden
      >
        <div data-rocket className="relative h-full">
          <div className="absolute left-1/2 top-[55%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt/30 blur-[90px]" />
          <svg viewBox="340 200 1260 1560" className="relative h-full w-auto overflow-visible">
            <defs>
              <linearGradient id="hero-a" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#F4E6C4" />
                <stop offset="1" stopColor="#C9AE78" />
              </linearGradient>
              <linearGradient id="hero-exhaust" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FFFFFF" />
                <stop offset="0.08" stopColor="#FFB27A" />
                <stop offset="0.35" stopColor="#FF4F00" />
                <stop offset="1" stopColor="#FF4F00" stopOpacity="0" />
              </linearGradient>
              <filter id="hero-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="28" />
              </filter>
            </defs>
            {/* Exhaust trail grows while scrolling */}
            <g data-exhaust style={{ transformOrigin: "969px 1500px" }}>
              <path d="M900 1500 L1038 1500 L1000 3600 L938 3600 Z" fill="url(#hero-exhaust)" filter="url(#hero-glow)" />
              <path d="M940 1500 L998 1500 L982 3000 L956 3000 Z" fill="url(#hero-exhaust)" />
            </g>
            <path data-rocket-a d={ISO_A_PATH} fill="url(#hero-a)" />
            <g data-rocket-flame style={{ transformOrigin: "969px 1388px" }}>
              <path d={ISO_FLAME_PATH} fill="#FF4F00" filter="url(#hero-glow)" opacity="0.9" />
              <path d={ISO_FLAME_PATH} fill="#FF4F00" className="origin-[969px_1388px] animate-flicker" />
            </g>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div data-content className="container relative z-10 flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-14">
        <h1 id="hero-title" data-intro data-kicker className="eyebrow mb-6 !leading-relaxed md:mb-8">
          Automatización con IA, agentes y tarjetas Wallet para empresas y PYMEs
        </h1>

        <p
          data-intro
          className="font-display text-display-xl font-extrabold text-white"
        >
          {LINES.map((line, i) => (
            <span key={line} data-line className="split-line block">
              <span className={`inline-block ${i === 2 ? "text-gradient-ember" : ""}`}>
                {line}
                {i === 2 && (
                  <svg
                    data-dot
                    viewBox="860 1380 220 345"
                    className="ml-[0.06em] inline-block h-[0.32em] w-auto align-baseline"
                    aria-hidden
                  >
                    <path d={ISO_FLAME_PATH} fill="#FF4F00" />
                  </svg>
                )}
              </span>
            </span>
          ))}
        </p>

        <div className="mt-10 grid items-end gap-10 md:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p data-intro data-fade className="max-w-[46ch] text-[17px] leading-relaxed text-white/70 md:text-lg">
              Diseñamos e implantamos sistemas de inteligencia artificial que automatizan tus procesos, atienden a
              tus clientes y trabajan 24/7 conectados a tus herramientas.{" "}
              <span className="text-white">Resultados medibles en semanas, no en meses.</span>
            </p>
            <div data-intro data-fade className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link href="/contact" className="btn-ember btn-fill" data-cursor="">
                  Solicitar diagnóstico gratuito
                  <Arrow />
                </Link>
              </Magnetic>
              <Link href="/servicios" className="btn-ghost">
                Ver servicios
              </Link>
            </div>
          </div>

          <dl data-intro data-fade className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 lg:col-span-5 lg:col-start-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-[11px] leading-snug text-white/45 sm:text-xs">{s.label}</dt>
                <dd className="order-1 font-display text-3xl font-bold text-sand sm:text-4xl xl:text-5xl">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
