"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Eric Duró",
    role: "Co-Fundador",
    tags: ["Ingeniería Multimedia", "IA & Automatización", "Producto"],
    bio: "Ingeniero Multimedia con Máster en Desarrollo Full Stack y Máster en Inteligencia Artificial. Lidera la visión tecnológica y de producto de ALCARIA, transformando ideas en soluciones reales.",
    image: "/images/blog/author-eric.jpeg",
    color: "#0344DC",
  },
  {
    name: "Joan Aparici",
    role: "Co-Fundador",
    tags: ["Estrategia de Negocio", "Ventas B2B", "Fidelización"],
    bio: "Apasionado por construir proyectos que funcionen en el mundo real. Perfil híbrido entre el desarrollo y el negocio: entiende la tecnología desde dentro para adaptarla exactamente a lo que el mercado necesita.",
    image: "/images/blog/author-joan.jpg",
    color: "#FF4F00",
  },
  {
    name: "Vicent Reig",
    role: "Co-Fundador",
    tags: ["Ingeniería", "Sistemas", "IA Aplicada"],
    bio: "Ingeniero especializado en Inteligencia Artificial. Aporta rigor técnico y visión sistémica al desarrollo de las soluciones más complejas de ALCARIA.",
    image: "/images/blog/author-vicent.jpeg",
    color: "#0344DC",
  },
];

const AboutTeamConcept = () => {
  return (
    <section className="relative overflow-hidden bg-[#01203F] py-16 md:py-20 lg:py-28">
      {/* Orb decorations */}
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#0344DC]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-[#FF4F00]/15 blur-3xl" />
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E3CC9C 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E3CC9C]/25 bg-[#E3CC9C]/10 px-4 py-2 text-sm font-semibold text-[#E3CC9C]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4F00]" />
            Nuestro Equipo
          </span>
          <h2 className="font-syne mt-4 text-4xl font-bold text-white sm:text-5xl">
            Impulsado por la{" "}
            <span className="bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C] bg-clip-text text-transparent">
              experiencia
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Detrás de ALCARIA hay un equipo multidisciplinar con experiencia real en IA, ingeniería, estrategia de negocio y automatización. Tres cofundadores con distintas fortalezas, un mismo objetivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#0344DC]/40 bg-gradient-to-b from-[#0344DC]/15 to-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-[#0344DC]/70 group-hover:shadow-xl group-hover:shadow-[#0344DC]/10">
                {/* Accent bar */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#0344DC] via-[#E3CC9C] to-[#FF4F00]" />

                <div className="flex flex-1 flex-col p-8">
                  {/* Photo */}
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full"
                      style={{ outline: `2px solid ${member.color}40` }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="font-syne text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-[#E3CC9C]">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="mb-5 flex-grow text-sm leading-relaxed text-white/60">
                    {member.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: `${member.color}18`,
                          color: member.color,
                          border: `1px solid ${member.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamConcept;
