"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/Common/SectionTitle";

// metadata must be in a separate server component - this page uses "use client" for animations

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-6.75 3h9m-9 3h9M3.375 3h17.25c1.034 0 1.875.841 1.875 1.875v14.25c0 1.034-.841 1.875-1.875 1.875H3.375c-1.034 0-1.875-.841-1.875-1.875V4.875C1.5 3.841 2.341 3 3.375 3z" />
      </svg>
    ),
    title: "Mayor Engagement",
    text: "Canal de comunicación directo y personal con notificaciones push y ofertas relevantes que generan 10× más apertura que el email.",
    color: "#0344DC",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 20.25z" />
      </svg>
    ),
    title: "Ahorro de Costes",
    text: "Elimina gastos de impresión y distribución. Las actualizaciones son instantáneas y gratuitas. Sostenible y eficiente.",
    color: "#FF4F00",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Moderno y Seguro",
    text: "Tecnología compatible con Apple Wallet y Google Wallet. Cumple GDPR con las mejores prácticas de seguridad de datos.",
    color: "#0344DC",
  },
];

const steps = [
  {
    number: "01",
    title: "Diseña Fácilmente",
    desc: "Utiliza nuestro editor visual o plantillas para personalizar tu tarjeta con tu imagen de marca.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Distribuye al Instante",
    desc: "Comparte mediante enlace, QR, email o intégralo en tu app y web. En segundos, en manos de tus clientes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Gestiona y Notifica",
    desc: "Actualiza información, envía notificaciones push segmentadas y analiza el rendimiento en tiempo real.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
  },
];

const features = [
  { title: "Personalización completa de colores, logos y campos" },
  { title: "Notificaciones push por geolocalización e iBeacons" },
  { title: "Analítica detallada de instalaciones y aperturas" },
  { title: "Integración con CRM, TPV y eCommerce vía API" },
  { title: "Gestión multi-idioma para audiencia global" },
  { title: "Cumplimiento GDPR y máxima seguridad de datos" },
];

const WalletPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#01203F] pb-20 pt-32 md:pt-40">
        {/* Orbs */}
        <motion.div
          className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#E3CC9C]/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#0344DC]/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #E3CC9C 1px, transparent 0)`, backgroundSize: "44px 44px" }}
        />

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="mb-12 max-w-[570px] lg:mb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E3CC9C]/25 bg-[#E3CC9C]/10 px-4 py-2 text-sm font-semibold text-[#E3CC9C]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4F00]" />
                  Apple & Google Wallet
                </span>
                <h1 className="font-syne mb-6 mt-2 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                  El Futuro en el{" "}
                  <span className="bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C] bg-clip-text text-transparent">
                    bolsillo
                  </span>{" "}
                  de tus clientes
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-white/70">
                  Conecta, fideliza y sorprende con tarjetas digitales para Apple y Google Wallet. Simple, rápido y potente.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/contact"
                      className="font-syne inline-flex items-center gap-2 rounded-full bg-[#FF4F00] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#FF4F00]/30 duration-300 hover:bg-[#FF4F00]/90"
                    >
                      Solicita una Demo
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="#como-funciona"
                      className="font-syne inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm duration-300 hover:bg-white/20"
                    >
                      Cómo Funciona
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="hidden px-4 lg:block lg:w-1/2">
              <motion.div
                className="relative mx-auto max-w-[460px]"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[#E3CC9C]/20 to-[#0344DC]/10 blur-2xl" />
                <div className="relative aspect-[25/24] overflow-hidden rounded-3xl shadow-2xl">
                  <Image src="/images/about/mockup_wallet_center.png" alt="Tarjeta Wallet ALCARIA" fill className="object-cover" />
                </div>
                <motion.div
                  className="absolute right-4 top-4 rounded-2xl bg-[#FF4F00] px-5 py-3 text-white shadow-xl shadow-[#FF4F00]/30"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="font-syne text-xl font-bold">10×</div>
                  <div className="text-xs opacity-80">más apertura</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="¿Por Qué Tarjetas Wallet Digitales?"
            paragraph="Ventajas reales que transforman la manera en que conectas con tus clientes."
            center
            mb="60px"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 group-hover:border-[#0344DC]/20 group-hover:shadow-xl dark:border-white/10 dark:bg-gray-dark">
                  <div className="absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(to right, ${b.color}, transparent)` }} />
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${b.color}15`, color: b.color }}>
                    {b.icon}
                  </div>
                  <h3 className="font-syne mb-3 text-xl font-bold text-[#01203F] dark:text-white">{b.title}</h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">{b.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="overflow-hidden bg-gray-50 py-16 dark:bg-gray-dark md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Crea Tarjetas Increíbles en 3 Pasos"
            paragraph="Nuestra plataforma intuitiva te permite diseñar y lanzar tus tarjetas Wallet en minutos."
            center
            mb="60px"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-10 shadow-sm transition-all duration-300 group-hover:border-[#0344DC]/20 group-hover:shadow-xl dark:border-white/10 dark:bg-[#1E232E]">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0344DC] to-[#FF4F00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="font-syne mb-4 text-5xl font-bold text-gray-100 dark:text-white/10">{step.number}</div>
                  <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0344DC]/10 text-[#0344DC]">
                    {step.icon}
                  </div>
                  <h3 className="font-syne mb-3 text-xl font-bold text-[#01203F] dark:text-white">{step.title}</h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E3CC9C]/40 bg-[#E3CC9C]/15 px-4 py-2 text-sm font-semibold text-[#01203F] dark:text-[#E3CC9C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF4F00]" />
                  Funcionalidades
                </span>
                <h2 className="font-syne mb-6 mt-4 text-3xl font-bold leading-tight text-[#01203F] dark:text-white sm:text-4xl">
                  Todo lo que necesitas
                  <span className="block bg-gradient-to-r from-[#0344DC] to-[#FF4F00] bg-clip-text text-transparent">
                    para fidelizar más
                  </span>
                </h2>
                <div className="space-y-4">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0344DC]/10 text-[#0344DC]">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-base font-medium text-[#01203F] dark:text-white">{f.title}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link
                    href="/contact"
                    className="font-syne inline-flex items-center gap-2 rounded-full bg-[#01203F] px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-[#0344DC]"
                  >
                    Hablar con un experto
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="relative mx-auto mt-12 max-w-[460px] lg:mt-0 lg:ml-auto"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[#E3CC9C]/15 to-[#0344DC]/10 blur-2xl" />
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <Image src="/images/about/apple_wallet_square.png" alt="Apple Wallet" width={460} height={460} className="w-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#01203F] py-20 md:py-28">
        <motion.div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#FF4F00]/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 9, repeat: Infinity }} />
        <motion.div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0344DC]/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 12, repeat: Infinity }} />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-syne mx-auto mb-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C] bg-clip-text text-transparent">
                modernizar tu comunicación?
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-white/65">
              Demo personalizada sin compromiso. Descubre todo lo que las Tarjetas Wallet pueden hacer por tu negocio.
            </p>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="font-syne inline-flex items-center gap-2 rounded-full bg-[#FF4F00] px-10 py-4 text-base font-bold text-white shadow-2xl shadow-[#FF4F00]/30 duration-300 hover:bg-[#FF4F00]/90"
              >
                Hablar con un Experto
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WalletPage;
