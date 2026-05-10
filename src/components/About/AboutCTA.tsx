"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-[#01203F] px-10 py-16 text-center md:px-20 md:py-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background orbs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#FF4F00]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0344DC]/20 blur-3xl" />
          {/* Dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #E3CC9C 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF4F00]/30 bg-[#FF4F00]/10 px-4 py-2 text-sm font-semibold text-[#FF4F00]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4F00]" />
              ¿Listo para el siguiente paso?
            </span>

            <h2 className="font-syne mb-5 mt-4 text-4xl font-bold text-white sm:text-5xl">
              Hablemos sobre tu{" "}
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C] bg-clip-text text-transparent">
                transformación digital
              </span>
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-white/65">
              Consulta gratuita y sin compromiso. Exploramos juntos cómo ALCARIA puede impulsar tu negocio con IA y automatización.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="font-syne inline-flex items-center gap-2 rounded-full bg-[#FF4F00] px-9 py-4 text-base font-bold text-white shadow-2xl shadow-[#FF4F00]/30 duration-300 hover:bg-[#FF4F00]/90"
                >
                  Contactar Ahora
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/"
                  className="font-syne inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm duration-300 hover:border-white/40 hover:bg-white/20"
                >
                  Ver Soluciones
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
