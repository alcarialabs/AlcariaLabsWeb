import type { Metadata } from "next";
import Link from "next/link";
import { getService, TESTIMONIALS } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbs, faqPage, graph, serviceNode, webPage } from "@/lib/schema";
import type { FaqItem } from "@/content/blog/types";
import { getPost } from "@/content/blog";
import type { Post } from "@/content/blog/types";
import JsonLd from "@/components/seo/JsonLd";
import WalletHero from "@/components/wallet/WalletHero";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";
import Faq from "@/components/sections/Faq";
import ContactSection from "@/components/sections/ContactSection";
import PostCard from "@/components/blog/PostCard";
import Arrow from "@/components/ui/Arrow";

const service = getService("tarjetas-wallet")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.description,
  alternates: { canonical: "/wallet" },
  openGraph: { url: "/wallet", title: service.seoTitle, description: service.description },
};

const BENEFITS = [
  { title: "Sin app ni plástico", text: "El cliente la añade al móvil en un toque desde un enlace, QR, email o SMS. Nada que descargar ni imprimir." },
  { title: "Avisos en la pantalla de bloqueo", text: "Cada cambio en la tarjeta (puntos, nivel, oferta) puede mostrar un aviso directo en el móvil del cliente." },
  { title: "Datos en tiempo real", text: "Puntos, sellos, saldo o nivel siempre actualizados, sincronizados con tu TPV, CRM o tienda online." },
  { title: "Relevancia por ubicación", text: "La tarjeta puede aparecer en la pantalla de bloqueo cuando el cliente está cerca de tu establecimiento." },
  { title: "Métricas claras", text: "Instalaciones, bajas, canjes y recurrencia en un panel para saber qué funciona." },
  { title: "Tu marca, en su móvil", text: "Diseño con tus colores y logotipo en iPhone y Android, junto a sus tarjetas bancarias." },
];

const STEPS = [
  { n: "01", title: "Diseñamos", text: "Definimos el programa (puntos, sellos, niveles o cupones) y diseñamos la tarjeta con tu imagen." },
  { n: "02", title: "Conectamos", text: "La integramos con tu TPV, CRM, reservas o e-commerce para que se actualice sola." },
  { n: "03", title: "Distribuimos", text: "Enlace, QR en tienda, email o WhatsApp: tus clientes la añaden en segundos." },
  { n: "04", title: "Comunicas", text: "Envías avisos segmentados y mides instalaciones, canjes y visitas repetidas." },
];

const PASS_TYPES = ["Fidelización", "Socio", "Cupones", "Entradas", "Tarjeta regalo", "Abonos", "Membresía", "Descuentos"];

const FAQ: FaqItem[] = [
  {
    q: "¿Qué es una tarjeta de Apple Wallet o Google Wallet para empresas?",
    a: "Es una tarjeta digital con la imagen de tu negocio que tus clientes guardan en la app Wallet de su iPhone o en Google Wallet en Android. Puede ser de fidelización, socio, cupón, entrada o tarjeta regalo, se actualiza en tiempo real y permite enviar avisos que aparecen en la pantalla de bloqueo.",
  },
  {
    q: "¿Mis clientes tienen que descargar una aplicación?",
    a: "No. Apple Wallet viene instalada en el iPhone y Google Wallet está disponible en Android. El cliente pulsa un enlace o escanea un QR, toca «Añadir» y la tarjeta queda guardada en su móvil. Por eso la adopción es mucho más fácil que con una app propia.",
  },
  {
    q: "¿Puedo enviar notificaciones a los clientes que tienen la tarjeta?",
    a: "Sí. Cuando actualizas la tarjeta (puntos, nivel, una oferta nueva) el cliente puede recibir un aviso en la pantalla de bloqueo. También puedes configurar la tarjeta para que aparezca cuando está cerca de tu tienda. Conviene usarlo con criterio para aportar valor y no saturar.",
  },
  {
    q: "¿Funciona en iPhone y en Android?",
    a: "Sí. Creamos la tarjeta en los dos formatos, Apple Wallet para iPhone y Google Wallet para Android, con el mismo diseño y los mismos datos, y la distribuimos con un único enlace que detecta el dispositivo.",
  },
  {
    q: "¿Se puede integrar con mi TPV, CRM o tienda online?",
    a: "Sí. Conectamos las tarjetas por API con tu TPV, CRM, sistema de reservas o e-commerce para que los puntos, sellos o saldos se actualicen solos con cada compra o visita, sin trabajo manual para tu equipo.",
  },
  {
    q: "¿Qué tipo de negocios usan tarjetas Wallet?",
    a: "Cafeterías, restaurantes, peluquerías, gimnasios, clubes deportivos, comercios, centros de estética, academias y cualquier negocio con clientes recurrentes. También se usan para carnés de socio, entradas a eventos y cupones de campañas.",
  },
];

export default function WalletPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Tarjetas Wallet", path: "/wallet" },
  ];
  const posts = service.relatedPosts.map(getPost).filter(Boolean) as Post[];
  const walletQuotes = TESTIMONIALS.filter((t) => t.service === "Wallet");

  return (
    <main className="bg-night">
      <JsonLd
        data={graph(
          { ...webPage({ path: "/wallet", name: service.headline, description: service.description }), breadcrumb: breadcrumbs(crumbs) },
          serviceNode(service),
          faqPage(FAQ, absoluteUrl("/wallet")),
        )}
      />
      <WalletHero crumbs={crumbs} />

      <div className="border-y border-white/10 py-6">
        <Marquee duration={40} className="mask-fade-x">
          {PASS_TYPES.map((t) => (
            <span key={t} className="flex items-center whitespace-nowrap font-display text-3xl font-bold text-white/80 md:text-5xl">
              {t}
              <span className="mx-10 h-3 w-3 rotate-45 bg-sand" />
            </span>
          ))}
        </Marquee>
      </div>

      <section aria-labelledby="w-benefits" className="py-24 md:py-36">
        <div className="container">
          <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow mb-5">Por qué Wallet</p>
              <SplitReveal as="h2" id="w-benefits" className="max-w-[14ch] font-display text-display-md font-extrabold text-white">
                La tarjeta que nunca se queda en casa
              </SplitReveal>
            </div>
            <p className="max-w-[46ch] text-lg text-white/60 md:justify-self-end">{service.intro}</p>
          </div>
          <Reveal className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {BENEFITS.map((b, i) => (
              <div key={b.title} data-reveal className="group bg-night p-8 transition-colors duration-500 hover:bg-abyss md:p-10">
                <span className="mb-8 block font-mono text-xs text-sand/70">0{i + 1}</span>
                <h3 className="mb-3 font-display text-xl font-bold text-white">{b.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/60">{b.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="como-funciona" aria-labelledby="w-steps" className="rounded-t-[40px] bg-paper py-24 text-ink md:rounded-t-[64px] md:py-36">
        <div className="container">
          <p className="eyebrow-dark mb-5">Cómo funciona</p>
          <SplitReveal as="h2" id="w-steps" className="mb-16 max-w-[16ch] font-display text-display-md font-extrabold">
            De la idea a su móvil en cuatro pasos
          </SplitReveal>
          <Reveal as="ol" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {STEPS.map((s) => (
              <li key={s.n} data-reveal className="relative overflow-hidden rounded-[24px] bg-white p-8">
                <span className="mb-10 block font-display text-6xl font-extrabold leading-none text-ink/10">{s.n}</span>
                <h3 className="mb-3 font-display text-2xl font-bold">{s.title}</h3>
                <p className="leading-relaxed text-ink/65">{s.text}</p>
              </li>
            ))}
          </Reveal>

          {walletQuotes.length > 0 && (
            <div className="mt-20 grid gap-5 md:grid-cols-2">
              {walletQuotes.map((t) => (
                <figure key={t.name} className="rounded-[24px] bg-ink p-8 text-white md:p-10">
                  <blockquote className="mb-6 font-display text-xl font-semibold leading-relaxed">“{t.quote}”</blockquote>
                  <figcaption className="text-sm text-white/55">
                    <span className="font-bold text-white">{t.name}</span> · {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      <Faq items={FAQ} title="Preguntas sobre tarjetas Wallet" />

      {posts.length > 0 && (
        <section aria-labelledby="w-guias" className="py-24 md:py-32">
          <div className="container">
            <div className="mb-12 flex items-end justify-between gap-6">
              <h2 id="w-guias" className="font-display text-display-sm font-extrabold text-white">
                Guías sobre Wallet
              </h2>
              <Link href="/blog?categoria=Wallet" className="btn-ghost hidden sm:inline-flex">
                Ver más <Arrow />
              </Link>
            </div>
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </main>
  );
}
