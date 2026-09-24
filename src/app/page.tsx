import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import Integrations from "@/components/home/Integrations";
import Manifesto from "@/components/home/Manifesto";
import ServicesScroller from "@/components/home/ServicesScroller";
import AgentDemo from "@/components/home/AgentDemo";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/sections/Faq";
import ContactSection from "@/components/sections/ContactSection";
import PostCard from "@/components/blog/PostCard";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Arrow from "@/components/ui/Arrow";
import JsonLd from "@/components/seo/JsonLd";
import { POSTS } from "@/content/blog";
import { HOME_FAQ, SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { faqPage, graph, serviceNode, webPage } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} | Automatización con IA, Agentes y Wallet para PYMEs` },
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  const latest = POSTS.slice(0, 3);

  return (
    <main>
      <JsonLd
        data={graph(
          webPage({ path: "/", name: `${SITE.name}: ${SITE.tagline}`, description: SITE.description }),
          ...SERVICES.map(serviceNode),
          faqPage(HOME_FAQ, SITE.url),
        )}
      />
      <Hero />
      <Integrations />
      <Manifesto />
      <ServicesScroller />
      <AgentDemo />
      <Process />
      <Testimonials />
      <Faq
        items={HOME_FAQ}
        title="Preguntas frecuentes"
        intro="Plazos, costes, integraciones y seguridad: lo que conviene saber antes de empezar."
      />

      {/* Latest guides */}
      <section aria-labelledby="blog-title" className="relative bg-night py-24 md:py-36">
        <div className="container">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-5">Blog</p>
              <SplitReveal as="h2" id="blog-title" className="max-w-[16ch] font-display text-display-md font-extrabold text-white">
                Guías prácticas de IA para empresas
              </SplitReveal>
            </div>
            <Link href="/blog" className="btn-ghost self-start md:self-auto">
              Ver todas las guías <Arrow />
            </Link>
          </div>
          <Reveal className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
            {latest.map((p) => (
              <div key={p.slug} data-reveal>
                <PostCard post={p} />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
