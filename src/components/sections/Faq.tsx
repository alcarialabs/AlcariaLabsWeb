import type { FaqItem } from "@/content/blog/types";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";

/**
 * Native <details> accordion: answers are always in the HTML (crawlable, quotable by
 * answer engines) and it works without JS. Height animates via ::details-content.
 */
export default function Faq({
  items,
  title = "Preguntas frecuentes",
  eyebrow = "FAQ",
  tone = "light",
  id = "faq",
  intro,
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  tone?: "light" | "dark";
  id?: string;
  intro?: string;
}) {
  const light = tone === "light";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative py-24 md:py-32 ${light ? "bg-paper text-ink" : "bg-night text-white"}`}
    >
      <div className="container grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className={`${light ? "eyebrow-dark" : "eyebrow"} mb-5`}>{eyebrow}</p>
            <SplitReveal as="h2" id={`${id}-title`} className="font-display text-display-sm font-extrabold">
              {title}
            </SplitReveal>
            {intro && <p className={`mt-5 max-w-[34ch] ${light ? "text-ink/60" : "text-white/60"}`}>{intro}</p>}
          </div>
        </div>
        <Reveal className="lg:col-span-8" stagger={0.06} y={24}>
          {items.map((f, i) => (
            <details
              key={f.q}
              data-reveal
              className={`faq group border-b ${light ? "border-ink/10" : "border-white/10"}`}
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg font-bold leading-snug md:text-xl">{f.q}</h3>
                <span
                  className={`relative mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-expo group-open:rotate-45 group-open:border-ember group-open:bg-ember group-open:text-white ${
                    light ? "border-ink/20" : "border-white/20"
                  }`}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4}>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className={`max-w-[65ch] pb-7 pr-12 text-[16px] leading-relaxed ${light ? "text-ink/70" : "text-white/65"}`}>
                {f.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
