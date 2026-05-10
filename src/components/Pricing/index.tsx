"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#E3CC9C]/5 to-white dark:from-gray-dark dark:via-[#E3CC9C]/3 dark:to-gray-dark" />

      <div className="container relative z-10">
        <SectionTitle
          title="Planes de Servicio ALCARIA"
          paragraph="Elige el plan que mejor se adapte a tu empresa. Soluciones flexibles para transformar y automatizar tus procesos sin complicaciones."
          center
          width="665px"
        />

        {/* Toggle */}
        <div className="mb-12 flex items-center justify-center gap-5">
          <button
            onClick={() => setIsMonthly(true)}
            className={`font-syne text-sm font-bold transition-colors duration-200 ${
              isMonthly ? "text-[#01203F] dark:text-white" : "text-body-color"
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className="relative flex h-7 w-14 items-center rounded-full bg-[#01203F] p-1 transition-colors duration-300 dark:bg-[#0344DC]"
          >
            <motion.div
              className="h-5 w-5 rounded-full bg-white shadow-md"
              animate={{ x: isMonthly ? 0 : 28 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`font-syne text-sm font-bold transition-colors duration-200 ${
              !isMonthly ? "text-[#01203F] dark:text-white" : "text-body-color"
            }`}
          >
            Anual
            <span className="ml-2 rounded-full bg-[#FF4F00]/15 px-2 py-0.5 text-xs font-bold text-[#FF4F00]">
              -15%
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <PricingBox
              packageName="Básico"
              price={isMonthly ? "99" : "84"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Ideal para pequeñas empresas que inician su transformación digital."
            >
              <OfferList text="Diagnóstico inicial de procesos" status="active" />
              <OfferList text="Chatbot básico de atención" status="active" />
              <OfferList text="Acceso a plataforma de automatización" status="active" />
              <OfferList text="Soporte por email" status="active" />
              <OfferList text="Actualizaciones periódicas" status="inactive" />
              <OfferList text="Capacitación personalizada" status="inactive" />
            </PricingBox>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PricingBox
              packageName="Profesional"
              price={isMonthly ? "199" : "169"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Para empresas en crecimiento que requieren soluciones avanzadas de IA."
              featured
            >
              <OfferList text="Todo en el plan Básico" status="active" featured />
              <OfferList text="Integración de IA avanzada" status="active" featured />
              <OfferList text="Optimización de procesos operativos" status="active" featured />
              <OfferList text="Soporte telefónico prioritario" status="active" featured />
              <OfferList text="Actualizaciones y mejoras continuas" status="active" featured />
              <OfferList text="Capacitación especializada" status="inactive" featured />
            </PricingBox>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PricingBox
              packageName="Empresarial"
              price={isMonthly ? "299" : "254"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="La solución integral para empresas con necesidades complejas y alto volumen."
            >
              <OfferList text="Todo en el plan Profesional" status="active" />
              <OfferList text="Consultoría estratégica personalizada" status="active" />
              <OfferList text="Soporte 24/7 dedicado" status="active" />
              <OfferList text="Implementación integral de automatización" status="active" />
              <OfferList text="Actualizaciones premium" status="active" />
              <OfferList text="Capacitación y formación continua" status="active" />
            </PricingBox>
          </motion.div>
        </div>

        {/* Trust note */}
        <motion.p
          className="mt-10 text-center text-sm text-body-color"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Sin permanencia. Sin comisiones ocultas.{" "}
          <a href="#contact" className="font-semibold text-[#0344DC] hover:underline">
            ¿Necesitas un plan personalizado?
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
