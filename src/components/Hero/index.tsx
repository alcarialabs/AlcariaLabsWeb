/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Actualizamos la creación de componentes animados con motion.create()
const MotionH1 = motion.create("h1");
const MotionP = motion.create("p");
const MotionDiv = motion.create("div");

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex h-screen items-center justify-center overflow-hidden bg-white dark:bg-gray-dark"
    >
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full max-w-[1100px] text-center">
            <MotionDiv
              className="flex flex-col items-center justify-center space-y-6 px-4 text-center sm:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <MotionH1
                className="font-syne text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {/* H1 Enfocado en Intriga y Transformación */}
                El Impulso Inteligente que tu Empresa Merece.
              </MotionH1>

              <MotionP
                className="max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Subtítulo que insinúa beneficios y crea curiosidad */}
                Simplifica cómo conectas con tus clientes. Potencia radicalmente tu eficiencia operativa. Descubre la solución a medida.
              </MotionP>

              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link
                  href="#contact"
                  className="rounded-full bg-white px-6 py-4 text-base font-semibold text-[#0344DC] shadow-md duration-300 hover:bg-gray-100 sm:px-8"
                >
                  Descubre Cómo
                </Link>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </div>

      {/* Fondo animado con más zoom y desplazamiento más amplio */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <motion.div
          initial={{ x: -60, y: -40 }}
          animate={{ x: 60, y: 40 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 25,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <img
            src="/images/hero/hero-background.png"
            alt="Fondo abstracto"
            className="h-full w-full scale-[1.4] object-cover transition-transform duration-1000"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
