import type { Metadata } from "next";
import { HOME_FAQ, SERVICES } from "@/lib/services";
import { SITE, absoluteUrl } from "@/lib/site";
import { breadcrumbs, faqPage, graph, serviceNode, webPage } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SplitReveal from "@/components/motion/SplitReveal";
import ServiceRows from "@/components/sections/ServiceRows";
import Process from "@/components/home/Process";
import Faq from "@/components/sections/Faq";
import ContactSection from "@/components/sections/ContactSection";

const DESCRIPTION =
  "Servicios de ALCARIA: automatización de procesos con IA, agentes de IA y chatbots de WhatsApp, tarjetas Apple y Google Wallet y consultoría de IA para PYMEs.";

export const metadata: Metadata = {
  title: "Servicios de IA y automatización para empresas",
  description: DESCRIPTION,
  alternates: { canonical: "/servicios" },
  openGraph: { url: "/servicios", title: `Servicios de ${SITE.name}`, description: DESCRIPTION },
};

export default function ServiciosPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
  ];
  const faq = HOME_FAQ.slice(1, 5);

  return (
    <main className="bg-night">
      <JsonLd
        data={graph(
          { ...webPage({ path: "/servicios", name: "Servicios de ALCARIA", description: DESCRIPTION, type: "CollectionPage" }), breadcrumb: breadcrumbs(crumbs) },
          {
            "@type": "ItemList",
            name: "Servicios de ALCARIA",
            itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(s.href), name: s.name })),
          },
          ...SERVICES.map(serviceNode),
          faqPage(faq, absoluteUrl("/servicios")),
        )}
      />
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-cobalt/25 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b" />
        <div className="container relative">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mb-6">Servicios</p>
          <SplitReveal as="h1" trigger="load" className="max-w-[15ch] font-display text-display-lg font-extrabold text-white">
            Servicios de IA y automatización para empresas
          </SplitReveal>
          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-white/65">
            Automatizamos procesos, creamos agentes de IA que atienden y actúan, digitalizamos la fidelización con
            tarjetas Wallet y te ayudamos a decidir qué hacer con la IA. Todo a medida y conectado a tus
            herramientas.
          </p>
        </div>
      </section>

      <section aria-label="Lista de servicios" className="container pb-32 md:pb-40">
        <ServiceRows />
      </section>

      <Process />
      <Faq items={faq} />
      <ContactSection />
    </main>
  );
}
