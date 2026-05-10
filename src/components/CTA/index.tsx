"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#01203F] py-24 md:py-32">
      {/* Animated background orbs */}
      <motion.div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF4F00]/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#0344DC]/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3CC9C]/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E3CC9C 1px, transparent 0)`,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FF4F00]/30 bg-[#FF4F00]/10 px-5 py-2 text-sm font-semibold text-[#FF4F00]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4F00]" />
            ¿Listo para transformar tu empresa?
          </motion.div>

          {/* Headline */}
          <h2 className="font-syne mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Empieza a automatizar{" "}
            <span className="bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C] bg-clip-text text-transparent">
              hoy mismo
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-white/70">
            Consulta gratuita sin compromiso. Descubre cómo ALCARIA puede
            transformar tu negocio con IA en semanas, no meses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#contact"
                className="font-syne inline-flex items-center gap-2 rounded-full bg-[#FF4F00] px-10 py-4 text-base font-bold text-white shadow-2xl shadow-[#FF4F00]/30 duration-300 hover:bg-[#FF4F00]/90 hover:shadow-[#FF4F00]/50"
              >
                Solicitar Consulta Gratuita
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/about"
                className="font-syne inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-10 py-4 text-base font-semibold text-white backdrop-blur-sm duration-300 hover:border-white/40 hover:bg-white/15"
              >
                Conoce ALCARIA
              </Link>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              "Sin permanencia",
              "Consulta 100% gratuita",
              "Resultados en semanas",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/50">
                <svg className="h-4 w-4 text-[#E3CC9C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
