"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const values = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Innovación Práctica",
    description: "Aplicamos la tecnología más avanzada de forma realista y adaptada a las necesidades y presupuesto de cada empresa.",
    color: "#FF4F00",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Resultados Tangibles",
    description: "Nos enfocamos en soluciones que generan impacto medible en eficiencia, ahorro de costes y experiencia del cliente.",
    color: "#0344DC",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Colaboración Cercana",
    description: "Trabajamos como un socio estratégico, entendiendo a fondo tu negocio para ofrecer la mejor solución personalizada.",
    color: "#FF4F00",
  },
];

const AboutValues = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Beige gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E3CC9C]/20 via-[#E3CC9C]/8 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #01203F 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10">
        <SectionTitle
          title="Nuestra Filosofía de Trabajo"
          paragraph="Los pilares que guían cada proyecto y colaboración en ALCARIA."
          center
          mb="60px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:ring-[#E3CC9C]/40 dark:bg-gray-dark dark:ring-white/10">
                {/* Top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to right, ${value.color}, transparent)` }}
                />

                <div
                  className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${value.color}15`, color: value.color }}
                >
                  {value.icon}
                </div>

                <h3 className="font-syne mb-4 text-xl font-bold text-[#01203F] dark:text-white">
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
