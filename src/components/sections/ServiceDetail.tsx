import Link from "next/link";
import type { Service } from "@/lib/services";
import { getPost } from "@/content/blog";
import type { Post } from "@/content/blog/types";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import Arrow from "@/components/ui/Arrow";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PostCard from "@/components/blog/PostCard";
import Process from "@/components/home/Process";
import Faq from "./Faq";
import ContactSection from "./ContactSection";
import { SERVICE_VIZ } from "@/components/home/ServiceVisuals";

export default function ServiceDetail({ service, crumbs }: { service: Service; crumbs: { name: string; path: string }[] }) {
  const Viz = SERVICE_VIZ[service.slug];
  const posts = service.relatedPosts.map(getPost).filter(Boolean) as Post[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-night pb-20 pt-36 md:pb-28 md:pt-44">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[44rem] w-[44rem] rounded-full opacity-30 blur-[140px]"
          style={{ background: service.accent }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />
        <div className="container relative">
          <Breadcrumbs items={crumbs} />
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6">
                {service.index} · {service.kicker}
              </p>
              <SplitReveal as="h1" trigger="load" className="mb-8 font-display text-display-lg font-extrabold text-white">
                {service.headline}
              </SplitReveal>
              <p className="mb-10 max-w-[56ch] text-lg leading-relaxed text-white/70">{service.intro}</p>
              <div className="flex flex-wrap gap-3">
                <Magnetic>
                  <Link href="/contact" className="btn-ember btn-fill">
                    Diagnóstico gratis <Arrow />
                  </Link>
                </Magnetic>
                <a href="#faq" className="btn-ghost">
                  Preguntas frecuentes
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass relative aspect-square overflow-hidden rounded-[32px]" aria-hidden>
                <div className="absolute inset-0 bg-dots opacity-60" />
                <span className="pointer-events-none absolute -bottom-10 -right-2 font-display text-[16rem] font-extrabold leading-none text-outline">
                  {service.index}
                </span>
                <div className="relative h-full">{Viz && <Viz />}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section aria-labelledby="beneficios" className="bg-night pb-24 md:pb-32">
        <div className="container">
          <div className="mb-14 border-t border-white/10 pt-16">
            <p className="eyebrow mb-5">Beneficios</p>
            <SplitReveal as="h2" id="beneficios" className="max-w-[18ch] font-display text-display-md font-extrabold text-white">
              Qué ganas desde el primer mes
            </SplitReveal>
          </div>
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {service.benefits.map((b, i) => (
              <div
                key={b.title}
                data-reveal
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-abyss p-7 transition-colors duration-500 hover:border-white/25"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-700 ease-expo group-hover:scale-x-100"
                  style={{ background: service.accent }}
                />
                <span className="mb-10 block font-mono text-xs text-white/35">0{i + 1}</span>
                <h3 className="mb-3 font-display text-xl font-bold text-white">{b.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/60">{b.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Use cases */}
      <section aria-labelledby="casos" className="bg-night pb-24 md:pb-32">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Casos de uso</p>
            <SplitReveal as="h2" id="casos" className="font-display text-display-sm font-extrabold text-white">
              Dónde encaja en tu sector
            </SplitReveal>
          </div>
          <Reveal as="ul" className="lg:col-span-8" stagger={0.07} y={24}>
            {service.useCases.map((u) => (
              <li
                key={u.sector}
                data-reveal
                className="group grid gap-2 border-b border-white/10 py-7 transition-colors md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10"
              >
                <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-sand md:text-2xl">
                  {u.sector}
                </h3>
                <p className="text-white/60">{u.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section aria-labelledby="incluye" className="relative overflow-hidden bg-night pb-32 md:pb-40">
        <div className="container">
          <div className="relative overflow-hidden rounded-[32px] bg-ink p-8 md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-ember/25 blur-[100px]" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <p className="eyebrow mb-5">Qué incluye</p>
                <h2 id="incluye" className="font-display text-display-sm font-extrabold text-white">
                  Un servicio completo, de principio a fin
                </h2>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-white/80">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember text-white">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3.2} aria-hidden>
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <Faq items={service.faq} title={`Preguntas sobre ${service.kicker.toLowerCase()}`} />

      {posts.length > 0 && (
        <section aria-labelledby="guias" className="bg-night py-24 md:py-32">
          <div className="container">
            <h2 id="guias" className="mb-12 font-display text-display-sm font-extrabold text-white">
              Guías relacionadas
            </h2>
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </>
  );
}
