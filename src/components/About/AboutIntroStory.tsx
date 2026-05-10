"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutIntroStory = () => {
  return (
    <section className="overflow-hidden bg-white py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Decorative panel */}
          <div className="w-full px-4 lg:w-5/12">
            <motion.div
              className="relative mx-auto mb-12 max-w-[420px] lg:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[#0344DC]/10 to-[#E3CC9C]/15 blur-2xl" />

              {/* Dashboard card */}
              <div className="overflow-hidden rounded-3xl bg-[#01203F] shadow-2xl ring-1 ring-white/10">
                {/* Header bar */}
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF4F00]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E3CC9C]/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 font-syne text-xs font-semibold text-white/40">alcaria · panel</span>
                </div>

                <div className="p-6">
                  {/* Status row */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-syne text-xs font-bold uppercase tracking-widest text-white/30">Estado del sistema</span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#E3CC9C]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E3CC9C]" />
                      Operativo
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="mb-6 grid grid-cols-2 gap-3">
                    {[
                      { label: "Procesos automatizados", value: "+50", color: "#0344DC" },
                      { label: "Ahorro de costes", value: "60%", color: "#FF4F00" },
                      { label: "ROI medio", value: "3×", color: "#E3CC9C" },
                      { label: "Satisfacción cliente", value: "98%", color: "#0344DC" },
                    ].map((m, i) => (
                      <motion.div
                        key={i}
                        className="rounded-xl bg-white/5 p-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                      >
                        <div className="font-syne text-xl font-bold" style={{ color: m.color }}>{m.value}</div>
                        <div className="mt-0.5 text-[11px] leading-tight text-white/40">{m.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="border-t border-white/10 pt-5">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/25">Tecnologías</p>
                    <div className="flex flex-wrap gap-2">
                      {["IA Generativa", "RPA", "Wallet", "APIs", "Agentes"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute bottom-4 right-4 rounded-2xl bg-[#FF4F00] px-5 py-4 text-white shadow-2xl shadow-[#FF4F00]/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="font-syne text-2xl font-bold">+20</div>
                <div className="text-xs text-white/80">Clientes activos</div>
              </motion.div>

            </motion.div>
          </div>

          {/* Text */}
          <div className="w-full px-4 lg:w-7/12">
            <motion.div
              className="lg:pl-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0344DC]/20 bg-[#0344DC]/5 px-4 py-2 text-sm font-semibold text-[#0344DC]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF4F00]" />
                Quiénes Somos
              </span>

              <h1 className="font-syne mb-6 mt-4 text-4xl font-bold leading-tight text-[#01203F] dark:text-white sm:text-5xl">
                Nacimos para que las PYMEs accedan a{" "}
                <span className="bg-gradient-to-r from-[#0344DC] to-[#FF4F00] bg-clip-text text-transparent">
                  tecnología de vanguardia
                </span>
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                Observamos una brecha: herramientas poderosas como la IA, la automatización y las soluciones digitales avanzadas parecían reservadas solo para los gigantes. <strong className="font-bold text-[#01203F] dark:text-white">Decidimos cambiar eso.</strong>
              </p>

              <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                ALCARIA fue fundada por tres apasionados de la tecnología y el emprendimiento con una misión clara:{" "}
                <strong className="font-bold text-[#01203F] dark:text-white">democratizar la innovación</strong> y hacerla accesible, práctica y rentable para empresas como la tuya.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8 dark:border-white/10">
                {[
                  { value: "2025", label: "Fundada" },
                  { value: "+20", label: "Clientes activos" },
                  { value: "100%", label: "A medida" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="font-syne text-2xl font-bold text-[#01203F] dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-body-color">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroStory;
