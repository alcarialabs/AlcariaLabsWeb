"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.99l0 0c0 .377.145.75.438.99l1.003.827c.447.368.574.984.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.075.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.99l0 0c0-.377-.145-.75-.437-.99l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.075-.124a6.57 6.57 0 01.22-.128c.332-.183.582-.495.644-.869l.213-1.28Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

const benefits = [
  {
    Icon: CogIcon,
    title: "Digitalización Inteligente",
    body: "Tarjetas siempre actualizadas y accesibles desde el móvil. Moderniza tu imagen y facilita la vida a tus clientes sin coste de impresión.",
    color: "#0344DC",
  },
  {
    Icon: BellIcon,
    title: "Engagement Potenciado",
    body: "Envía notificaciones push relevantes y ofertas personalizadas directamente al bolsillo de tus clientes. Tasas de apertura 10× superiores al email.",
    color: "#FF4F00",
  },
  {
    Icon: LinkIcon,
    title: "Integración Sencilla",
    body: "Conecta fácilmente con tu CRM, base de datos o POS actual. Automatiza y gestiona toda la fidelización de forma fluida y centralizada.",
    color: "#0344DC",
  },
];

const AboutSectionWallet = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="py-16 md:py-20 lg:py-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text side (left) */}
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="max-w-[500px]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Label */}
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E3CC9C]/40 bg-[#E3CC9C]/15 px-4 py-2 text-sm font-semibold text-[#01203F] dark:text-[#E3CC9C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF4F00]" />
                  Apple & Google Wallet
                </span>

                <h2 className="font-syne mb-4 mt-4 text-3xl font-bold leading-tight text-[#01203F] dark:text-white sm:text-4xl">
                  Tarjetas Wallet:{" "}
                  <span className="bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C] bg-clip-text text-transparent">
                    Conexión Directa
                  </span>
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Transforma la interacción con tus clientes. Con las Tarjetas Wallet de ALCARIA para Apple y Google, creas un canal de comunicación potente y fidelizas de forma eficaz y medible.
                </p>

                <div className="space-y-7">
                  {benefits.map(({ Icon, title, body, color }, i) => (
                    <motion.div
                      key={i}
                      className="group flex items-start gap-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                    >
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${color}15`, color }}
                      >
                        <Icon />
                      </div>
                      <div>
                        <h3 className="font-syne mb-1.5 text-lg font-bold text-[#01203F] dark:text-white">
                          {title}
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          {body}
                        </p>
                      </div>
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
                    href="/wallet"
                    className="font-syne inline-flex items-center gap-2 rounded-full bg-[#01203F] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#01203F]/20 transition-all duration-300 hover:bg-[#0344DC] hover:shadow-[#0344DC]/30"
                  >
                    Descubre el Poder de Wallet
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Image side (right) */}
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="relative mx-auto mb-12 max-w-[480px] lg:mb-0 lg:ml-auto"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* Background glow */}
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[#E3CC9C]/20 to-[#0344DC]/10 blur-2xl" />

                <div className="relative aspect-[25/24] overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/images/about/mockup_wallet_center.png"
                    alt="Tarjetas Wallet ALCARIA"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -right-2 -top-3 rounded-2xl bg-[#FF4F00] px-5 py-3 text-white shadow-xl shadow-[#FF4F00]/30 sm:-right-6 sm:-top-4"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="font-syne text-xl font-bold">10×</div>
                  <div className="text-xs opacity-80">más apertura</div>
                </motion.div>

                {/* Bottom badge */}
                <motion.div
                  className="absolute -bottom-3 -left-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl dark:bg-gray-dark sm:-bottom-4 sm:-left-4"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#01203F]">
                    <svg className="h-4 w-4 text-[#E3CC9C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-syne text-xs font-bold text-[#01203F] dark:text-white">Apple & Google</div>
                    <div className="text-xs text-body-color">Wallet compatible</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionWallet;
