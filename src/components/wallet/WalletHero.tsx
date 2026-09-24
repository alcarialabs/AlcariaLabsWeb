"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, isFinePointer, prefersReducedMotion } from "@/lib/gsap";
import SplitReveal from "@/components/motion/SplitReveal";
import Magnetic from "@/components/motion/Magnetic";
import Arrow from "@/components/ui/Arrow";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Isotipo from "@/components/brand/Isotipo";

export default function WalletHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const q = gsap.utils.selector(root);
      if (prefersReducedMotion()) {
        gsap.set(q("[data-intro]"), { visibility: "visible" });
        return;
      }
      // Depth layers for the 3D tilt (set via GSAP so they compose with its transforms).
      q("[data-z]").forEach((el: HTMLElement) => gsap.set(el, { z: Number(el.dataset.z) }));
      gsap.set(q("[data-card]")[0], { rotation: -10 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.set(q("[data-intro]"), { visibility: "visible" })
        .from(q("[data-card]"), { y: 160, rotateX: 50, rotateZ: -12, autoAlpha: 0, duration: 1.8, stagger: 0.12 }, 0.2)
        .from(q("[data-notif]"), { y: -40, autoAlpha: 0, scale: 0.9, duration: 1, ease: "back.out(1.6)" }, 1.4)
        .from(q("[data-fade]"), { y: 24, autoAlpha: 0, duration: 1, stagger: 0.08 }, 0.5);

      // Notification re-appears every few seconds, like real pass updates.
      gsap.timeline({ repeat: -1, repeatDelay: 3.5, delay: 4 })
        .to(q("[data-notif]"), { y: -30, autoAlpha: 0, duration: 0.5, ease: "power2.in" })
        .set(q("[data-points]"), { textContent: "1.290" })
        .to(q("[data-notif]"), { y: 0, autoAlpha: 1, duration: 0.9, ease: "back.out(1.6)" }, "+=0.6")
        .to(q("[data-notif]"), { y: -30, autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "+=3.5")
        .set(q("[data-points]"), { textContent: "1.240" })
        .to(q("[data-notif]"), { y: 0, autoAlpha: 1, duration: 0.9, ease: "back.out(1.6)" }, "+=0.6");

      // Pointer tilt
      if (!isFinePointer() || !stage.current || !contextSafe) return;
      const rx = gsap.quickTo(q("[data-tilt]"), "rotationX", { duration: 0.9, ease: "power3" });
      const ry = gsap.quickTo(q("[data-tilt]"), "rotationY", { duration: 0.9, ease: "power3" });
      const gx = gsap.quickTo(q("[data-glare]"), "xPercent", { duration: 0.9, ease: "power3" });
      const move = contextSafe((e: PointerEvent) => {
        const r = stage.current!.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry(px * 22);
        rx(-py * 18);
        gx(px * 120);
      });
      const leave = contextSafe(() => {
        rx(0);
        ry(0);
        gx(0);
      });
      window.addEventListener("pointermove", move);
      stage.current.addEventListener("pointerleave", leave);
      return () => window.removeEventListener("pointermove", move);
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-night pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute -right-40 top-0 h-[44rem] w-[44rem] rounded-full bg-sand/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cobalt/25 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />

      <div className="container relative">
        <Breadcrumbs items={crumbs} />
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p data-intro data-fade className="eyebrow mb-6">
              Apple Wallet · Google Wallet
            </p>
            <SplitReveal as="h1" trigger="load" className="mb-8 font-display text-display-lg font-extrabold text-white">
              Tarjetas de fidelización en el bolsillo de tus clientes
            </SplitReveal>
            <p data-intro data-fade className="mb-10 max-w-[50ch] text-lg leading-relaxed text-white/70">
              Tarjetas digitales de fidelización, socio, cupón o entrada para Apple Wallet y Google Wallet. Sin
              descargar ninguna app, sin imprimir y con avisos que llegan a la pantalla de bloqueo del móvil.
            </p>
            <div data-intro data-fade className="flex flex-wrap gap-3">
              <Magnetic>
                <Link href="/contact" className="btn-ember btn-fill">
                  Solicita una demo <Arrow />
                </Link>
              </Magnetic>
              <a href="#como-funciona" className="btn-ghost">
                Cómo funciona
              </a>
            </div>
          </div>

          <div ref={stage} className="relative h-[460px] [perspective:1200px] sm:h-[520px] lg:col-span-6" aria-hidden>
            <div data-tilt className="relative mx-auto h-full w-full max-w-[440px] [transform-style:preserve-3d]">
              {/* Back card */}
              <div
                data-intro
                data-card
                className="absolute left-[8%] top-[12%] aspect-[1.58] w-[78%] rounded-[26px] bg-gradient-to-br from-cobalt to-ink p-6 shadow-2xl ring-1 ring-white/10"
                data-z="-60"
              >
                <p className="font-display text-sm font-bold tracking-[0.2em] text-white/80">CUPÓN</p>
                <p className="mt-6 font-display text-4xl font-extrabold text-white">-20%</p>
                <p className="text-xs text-white/60">Válido hasta el domingo</p>
              </div>

              {/* Main card */}
              <div
                data-intro
                data-card
                className="absolute left-[12%] top-[34%] aspect-[1.58] w-[82%] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0d2f5c] via-ink to-night p-6 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)] ring-1 ring-sand/30"
                data-z="40"
              >
                <div data-glare className="pointer-events-none absolute -inset-y-10 left-1/3 w-1/3 rotate-12 bg-white/10 blur-xl" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Isotipo className="h-6 w-auto" title="" />
                      <span className="font-display text-sm font-bold tracking-[0.2em] text-sand">TU MARCA</span>
                    </span>
                    <span className="rounded-full bg-ember px-2.5 py-0.5 font-mono text-[10px] font-bold text-white">ORO</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/45">Puntos</p>
                      <p data-points className="font-display text-3xl font-extrabold text-white">
                        1.240
                      </p>
                    </div>
                    <span className="grid h-14 w-14 grid-cols-5 gap-[2px] rounded-lg bg-white p-1.5">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <span key={i} className={[0, 1, 3, 5, 7, 9, 12, 14, 16, 18, 20, 21, 23, 24].includes(i) ? "bg-ink" : ""} />
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lock-screen notification */}
              <div
                data-intro
                data-notif
                className="absolute left-0 right-0 top-0 mx-auto flex max-w-[360px] items-center gap-3 rounded-[20px] border border-white/15 bg-white/10 p-3.5 shadow-2xl backdrop-blur-2xl"
                data-z="90"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink">
                  <Isotipo className="h-6 w-auto" title="" />
                </span>
                <span className="min-w-0">
                  <span className="flex justify-between text-[13px] font-semibold text-white">
                    Tu Marca <span className="font-normal text-white/50">ahora</span>
                  </span>
                  <span className="block truncate text-[13px] text-white/75">+50 puntos · ¡Tu café de hoy va por nuestra cuenta! ☕</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
