import type { Metadata } from "next";
import Image from "next/image";
import { AUTHORS } from "@/content/blog";
import { SITE, absoluteUrl } from "@/lib/site";
import { ORG_ID, breadcrumbs, graph, webPage } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Process from "@/components/home/Process";
import ContactSection from "@/components/sections/ContactSection";
import Manifesto from "@/components/home/Manifesto";

const DESCRIPTION =
  "Conoce a ALCARIA: tres cofundadores con experiencia en IA, ingeniería y negocio que acercan la automatización y la inteligencia artificial a las PYMEs.";

export const metadata: Metadata = {
  title: "Sobre nosotros: el equipo detrás de ALCARIA",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "Sobre ALCARIA", description: DESCRIPTION },
};

const VALUES = [
  { title: "Innovación práctica", text: "Tecnología avanzada aplicada de forma realista, adaptada a las necesidades y al presupuesto de cada empresa." },
  { title: "Resultados tangibles", text: "Solo construimos lo que genera impacto medible en tiempo, costes o experiencia de cliente." },
  { title: "Colaboración cercana", text: "Trabajamos como tu equipo de IA: entendemos tu negocio antes de proponer nada." },
];

const TEAM = [
  { ...AUTHORS.eric, tags: ["Ingeniería Multimedia", "IA y automatización", "Producto"] },
  { ...AUTHORS.joan, tags: ["Estrategia de negocio", "Ventas B2B", "Fidelización"] },
  { ...AUTHORS.vicent, tags: ["Ingeniería", "Sistemas", "IA aplicada"] },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Sobre nosotros", path: "/about" },
  ];

  return (
    <main className="bg-night">
      <JsonLd
        data={graph(
          { ...webPage({ path: "/about", name: "Sobre ALCARIA", description: DESCRIPTION, type: "AboutPage" }), breadcrumb: breadcrumbs(crumbs), mainEntity: { "@id": ORG_ID } },
          ...TEAM.map((m) => ({
            "@type": "Person",
            "@id": `${absoluteUrl("/about")}#${m.id}`,
            name: m.name,
            jobTitle: m.role,
            description: m.bio,
            image: absoluteUrl(m.image),
            worksFor: { "@id": ORG_ID },
            knowsAbout: m.tags,
            ...(m.url ? { url: m.url, sameAs: m.sameAs } : {}),
          })),
        )}
      />

      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute -left-40 -top-20 h-[40rem] w-[40rem] rounded-full bg-cobalt/25 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />
        <div className="container relative">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mb-6">Sobre nosotros · Desde {SITE.foundingDate}</p>
          <SplitReveal as="h1" trigger="load" className="max-w-[16ch] font-display text-display-lg font-extrabold text-white">
            Llevamos a las pymes la tecnología de las grandes empresas
          </SplitReveal>
          <div className="mt-12 grid gap-8 text-lg leading-relaxed text-white/65 md:grid-cols-2">
            <p>
              Vimos una brecha: la inteligencia artificial, la automatización y las soluciones digitales avanzadas
              parecían reservadas a las grandes empresas. <span className="text-white">Decidimos cambiar eso.</span>
            </p>
            <p>
              Tres cofundadores con perfiles complementarios en ingeniería, inteligencia artificial y negocio
              fundamos ALCARIA con una misión clara: convertir la IA en tiempo recuperado, menos errores y clientes
              más fieles para empresas de cualquier tamaño.
            </p>
          </div>
        </div>
      </section>

      <Manifesto />

      <section aria-labelledby="equipo" className="py-24 md:py-32">
        <div className="container">
          <p className="eyebrow mb-5">Equipo</p>
          <SplitReveal as="h2" id="equipo" className="mb-14 max-w-[16ch] font-display text-display-md font-extrabold text-white">
            Tres cofundadores, un mismo objetivo
          </SplitReveal>
          <Reveal className="grid gap-5 md:grid-cols-3" stagger={0.12}>
            {TEAM.map((m) => (
              <article key={m.id} data-reveal className="group overflow-hidden rounded-[28px] border border-white/10 bg-abyss">
                <div className="relative aspect-[4/4.2] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale transition-all duration-[1.2s] ease-expo group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-white">{m.name}</h3>
                  <p className="mb-4 text-sm text-sand">{m.role}</p>
                  <p className="mb-6 text-[15px] leading-relaxed text-white/60">{m.bio}</p>
                  <ul className="flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="valores" className="pb-32 md:pb-40">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Valores</p>
            <h2 id="valores" className="font-display text-display-sm font-extrabold text-white">
              Cómo pensamos
            </h2>
          </div>
          <Reveal className="lg:col-span-8" stagger={0.08} y={24}>
            {VALUES.map((v, i) => (
              <div key={v.title} data-reveal className="grid gap-3 border-b border-white/10 py-8 md:grid-cols-[auto_1fr_1.4fr] md:gap-10">
                <span className="font-mono text-xs text-ember">0{i + 1}</span>
                <h3 className="font-display text-2xl font-bold text-white">{v.title}</h3>
                <p className="text-white/60">{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Process />
      <ContactSection />
    </main>
  );
}
