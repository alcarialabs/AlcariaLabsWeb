"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { Wordmark } from "@/components/brand/Isotipo";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { getLenis } from "@/components/motion/SmoothScroll";
import Arrow from "@/components/ui/Arrow";

/** Text that rolls up to a copy of itself on hover. */
function RollText({ children }: { children: string }) {
  return (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-500 ease-expo group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full text-sand transition-transform duration-500 ease-expo group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Hide on scroll down, show on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useGSAP(
    () => {
      if (!overlay.current) return;
      const q = gsap.utils.selector(overlay);
      tl.current = gsap
        .timeline({ paused: true })
        .set(overlay.current, { visibility: "visible" })
        .fromTo(
          overlay.current,
          { clipPath: "circle(0% at calc(100% - 44px) 40px)" },
          { clipPath: "circle(150% at calc(100% - 44px) 40px)", duration: 0.9, ease: "expo.inOut" },
        )
        .from(q("[data-m-link]"), { yPercent: 120, rotate: 4, stagger: 0.06, duration: 0.9, ease: "expo.out" }, "-=0.45")
        .from(q("[data-m-fade]"), { autoAlpha: 0, y: 20, stagger: 0.05, duration: 0.6 }, "-=0.6");
    },
    { scope: overlay },
  );

  useEffect(() => {
    const t = tl.current;
    if (!t) return;
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
      prefersReducedMotion() ? t.progress(1) : t.timeScale(1).play();
    } else {
      lenis?.start();
      document.body.style.overflow = "";
      prefersReducedMotion() ? t.progress(0) : t.timeScale(1.8).reverse();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Pages whose top is light: keep the dark pill visible so the nav stays legible.
  const solid = scrolled || open || ["/privacy-policy", "/cookie-policy", "/terms-of-service"].includes(pathname);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-700 ease-expo ${
          hidden && !open ? "-translate-y-[130%]" : "translate-y-0"
        }`}
      >
        <div className="container pt-3 md:pt-4">
          <div
            className={`flex h-14 items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 ease-expo md:h-16 md:pl-7 ${
              solid
                ? "border border-white/10 bg-night/70 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                : "border border-transparent"
            }`}
          >
            <Link href="/" aria-label="ALCARIA, ir a inicio" className="relative z-10 shrink-0" data-cursor="">
              <Wordmark className="h-[18px] w-auto md:h-5" priority />
            </Link>

            <nav aria-label="Principal" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {NAV.map((item) => (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`group relative block rounded-full px-4 py-2 font-display text-[14px] font-semibold transition-colors ${
                        isActive(item.href) ? "text-white" : "text-white/65 hover:text-white"
                      }`}
                    >
                      <RollText>{item.title}</RollText>
                      {isActive(item.href) && (
                        <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ember" />
                      )}
                    </Link>

                    {item.href === "/servicios" && (
                      <div className="pointer-events-none invisible absolute left-1/2 top-full w-[420px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-expo group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-abyss/95 p-2 shadow-2xl backdrop-blur-xl">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={s.href}
                              className="group/item flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-white/[0.06]"
                            >
                              <span className="font-mono text-[11px] text-white/35">{s.index}</span>
                              <span className="flex-1">
                                <span className="block font-display text-[15px] font-bold text-white">{s.name}</span>
                                <span className="block text-xs text-white/45">{s.tags.join(" · ")}</span>
                              </span>
                              <span
                                className="h-2 w-2 rounded-full transition-transform duration-300 group-hover/item:scale-150"
                                style={{ background: s.accent }}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Link href="/contact" className="btn-ember btn-fill hidden !px-5 !py-2.5 text-sm sm:inline-flex">
                Diagnóstico gratis
                <Arrow />
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
              >
                <span className="relative block h-3 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-white transition-transform duration-500 ease-expo ${
                      open ? "translate-y-[5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded bg-white transition-all duration-500 ease-expo ${
                      open ? "w-5 -translate-y-[5px] -rotate-45" : "w-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile / tablet full-screen menu */}
      <div
        ref={overlay}
        id="mobile-menu"
        aria-hidden={!open}
        className="invisible fixed inset-0 z-40 flex flex-col bg-ink lg:hidden"
        style={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-radial" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-ember/25 blur-[120px]" />
        <nav aria-label="Menú móvil" className="container relative flex flex-1 flex-col justify-center pt-24">
          <ul className="space-y-1">
            {[{ title: "Inicio", href: "/" }, ...NAV].map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <Link
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  data-m-link
                  className="flex items-baseline gap-4 py-1 font-display text-[clamp(2.4rem,11vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
                >
                  <span className="font-mono text-xs font-medium text-sand/60">0{i + 1}</span>
                  <span className={isActive(item.href) ? "text-gradient-ember" : ""}>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container relative pb-10">
          <div data-m-fade className="mb-6 h-px bg-white/10" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a data-m-fade href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1} className="font-display text-lg text-sand">
              {SITE.email}
            </a>
            <Link data-m-fade href="/contact" tabIndex={open ? 0 : -1} className="btn-ember self-start">
              Diagnóstico gratis <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
