/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-[#01203F]"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#0344DC]/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#FF4F00]/20 blur-3xl"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-[#E3CC9C]/10 blur-3xl"
        animate={{ x: [-30, 30, -30], y: [-15, 15, -15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[250px] w-[250px] rounded-full bg-[#0344DC]/15 blur-3xl"
        animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E3CC9C 1px, transparent 0)`,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Background image with strong overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: -60, y: -40 }}
          animate={{ x: 60, y: 40 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 28,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero/hero-background.png"
            alt=""
            className="h-full w-full scale-[1.45] object-cover opacity-20"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#01203F]/60 via-[#01203F]/40 to-[#01203F]/90" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 px-4 pt-24">
        <div className="flex flex-wrap justify-center">
          <div className="w-full max-w-[950px] text-center">
            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E3CC9C]/25 bg-[#E3CC9C]/10 px-5 py-2.5 text-sm font-semibold text-[#E3CC9C] backdrop-blur-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF4F00]" />
              <span className="sm:hidden">IA & Automatización para Empresas</span>
              <span className="hidden sm:inline">Automatización e Inteligencia Artificial para Empresas</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="font-syne mb-7 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Tu negocio,{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#FF4F00] via-[#FF7733] to-[#E3CC9C] bg-clip-text text-transparent">
                  eficiencia total
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C]"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Automatizamos tus procesos con IA, eliminamos tareas repetitivas
              y multiplicamos la productividad de tu equipo. Resultados reales
              en semanas, no meses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#contact"
                  className="font-syne inline-flex items-center gap-2 rounded-full bg-[#FF4F00] px-9 py-4 text-base font-bold text-white shadow-2xl shadow-[#FF4F00]/30 duration-300 hover:bg-[#FF4F00]/90 hover:shadow-[#FF4F00]/50"
                >
                  Solicita tu Demo Gratis
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#features"
                  className="font-syne inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm duration-300 hover:border-white/40 hover:bg-white/15"
                >
                  Cómo Funciona
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="mt-16 grid grid-cols-3 gap-2 border-t border-white/10 pt-10 sm:mt-20 sm:gap-8 sm:pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { value: "+50", label: "Procesos automatizados" },
                { value: "98%", label: "Satisfacción de clientes" },
                { value: "3×", label: "ROI medio generado" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-syne mb-1.5 text-2xl font-bold text-[#E3CC9C] sm:text-4xl md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-white/55 sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
