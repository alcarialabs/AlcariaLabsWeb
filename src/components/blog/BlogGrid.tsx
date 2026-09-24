"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Category filter over server-rendered cards. All cards are always in the HTML
 * (crawlable); filtering only toggles visibility.
 */
export default function BlogGrid({
  posts,
  categories,
  cards,
}: {
  posts: { slug: string; category: string }[];
  categories: string[];
  cards: Record<string, React.ReactNode>;
}) {
  const params = useSearchParams();
  const router = useRouter();
  const active = params.get("categoria") ?? "";
  const grid = useRef<HTMLDivElement>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    posts.forEach((p) => (c[p.category] = (c[p.category] ?? 0) + 1));
    return c;
  }, [posts]);

  const setCategory = (cat: string) => {
    const url = cat ? `/blog?categoria=${encodeURIComponent(cat)}` : "/blog";
    router.replace(url, { scroll: false });
  };

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-card]:not([hidden])",
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, stagger: 0.07, ease: "expo.out", clearProps: "transform" },
      );
    },
    { scope: grid, dependencies: [active] },
  );

  return (
    <div>
      <div role="group" aria-label="Filtrar por categoría" className="mb-12 flex flex-wrap gap-2">
        {["", ...categories].map((cat) => {
          const on = active === cat;
          return (
            <button
              key={cat || "all"}
              type="button"
              aria-pressed={on}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ease-expo ${
                on ? "border-ember bg-ember text-white" : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat || "Todo"}
              <span className={`ml-2 font-mono text-[11px] ${on ? "text-white/80" : "text-white/35"}`}>
                {cat ? counts[cat] : posts.length}
              </span>
            </button>
          );
        })}
      </div>
      <div ref={grid} className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <div key={p.slug} data-card hidden={Boolean(active) && p.category !== active}>
            {cards[p.slug]}
          </div>
        ))}
      </div>
    </div>
  );
}
