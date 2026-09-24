import Image from "next/image";
import { TESTIMONIALS } from "@/lib/services";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonios-title" className="relative bg-paper pb-24 text-ink md:pb-36">
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-6 border-t border-ink/10 pt-20 md:flex-row md:items-end md:pt-28">
          <div>
            <p className="eyebrow-dark mb-5">Clientes</p>
            <SplitReveal as="h2" id="testimonios-title" className="max-w-[14ch] font-display text-display-md font-extrabold">
              Empresas que ya trabajan con ALCARIA
            </SplitReveal>
          </div>
          <p className="max-w-[34ch] text-ink/60">
            Clubes deportivos, comercios y pymes que han digitalizado su fidelización y automatizado su gestión.
          </p>
        </div>

        <Reveal className="grid gap-5 md:grid-cols-3" stagger={0.12}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} data-reveal className="flex">
            <figure
              className={`group relative flex w-full flex-col justify-between overflow-hidden rounded-[28px] p-8 transition-transform duration-700 ease-expo hover:-translate-y-2 md:p-10 ${
                i === 1 ? "bg-ink text-white md:translate-y-10 md:hover:translate-y-8" : "bg-white text-ink"
              }`}
            >
              <span
                aria-hidden
                className={`pointer-events-none absolute -right-2 -top-10 font-display text-[12rem] font-extrabold leading-none ${
                  i === 1 ? "text-white/5" : "text-ink/5"
                }`}
              >
                “
              </span>
              <div className="relative">
                <span
                  className={`mb-6 inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
                    i === 1 ? "bg-ember text-white" : "bg-ink/5 text-ink/60"
                  }`}
                >
                  {t.service}
                </span>
                <blockquote className={`text-[17px] leading-relaxed ${i === 1 ? "text-white/85" : "text-ink/75"}`}>
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="relative mt-10 flex items-center gap-4">
                {t.image ? (
                  <Image src={t.image} alt={t.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                ) : (
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-display font-bold ${
                      i === 1 ? "bg-sand text-ink" : "bg-ink text-sand"
                    }`}
                    aria-hidden
                  >
                    {initials(t.name)}
                  </span>
                )}
                <span>
                  <span className="block font-display font-bold">{t.name}</span>
                  <span className={`block text-sm ${i === 1 ? "text-white/50" : "text-ink/50"}`}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
