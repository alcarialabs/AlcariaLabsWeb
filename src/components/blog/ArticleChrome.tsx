"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!bar.current) return;
    gsap.fromTo(
      bar.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: "[data-article]", start: "top 20%", end: "bottom bottom", scrub: prefersReducedMotion() ? true : 0.3 },
      },
    );
  });
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden>
      <div ref={bar} className="h-full origin-left scale-x-0 bg-gradient-to-r from-ember to-sand" />
    </div>
  );
}

export function Toc({ headings }: { headings: { id: string; text: string; depth: number }[] }) {
  const [active, setActive] = useState(headings[0]?.id);

  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [headings]);

  const h2s = headings.filter((h) => h.depth === 2);
  if (!h2s.length) return null;

  return (
    <nav aria-label="Índice del artículo">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">En este artículo</p>
      <ol className="space-y-1 border-l border-ink/10">
        {h2s.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-[13.5px] leading-snug transition-colors duration-300 ${
                active === h.id ? "border-ember font-medium text-ink" : "border-transparent text-ink/50 hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const links = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: "X", href: `https://x.com/intent/post?url=${enc(url)}&text=${enc(title)}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${enc(`${title} ${url}`)}` },
  ];
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">Compartir</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-white"
        >
          {l.label}
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-white"
      >
        {copied ? "¡Copiado!" : "Copiar enlace"}
      </button>
    </div>
  );
}
