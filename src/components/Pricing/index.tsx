"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Planes de Servicio ALCARIA"
          paragraph="Elige el plan que mejor se adapte a las necesidades de tu empresa. Nuestros planes flexibles están diseñados para transformar y automatizar tus procesos operativos de forma sencilla y eficiente."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Anual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Básico"
            price={isMonthly ? "99" : "999"}
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
          <PricingBox
            packageName="Profesional"
            price={isMonthly ? "199" : "1999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Para empresas en crecimiento que requieren soluciones avanzadas."
          >
            <OfferList text="Todo en el plan Básico" status="active" />
            <OfferList text="Integración de IA avanzada" status="active" />
            <OfferList text="Optimización de procesos operativos" status="active" />
            <OfferList text="Soporte telefónico" status="active" />
            <OfferList text="Actualizaciones y mejoras continuas" status="active" />
            <OfferList text="Capacitación especializada" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Empresarial"
            price={isMonthly ? "299" : "2999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="La solución integral para grandes empresas con necesidades complejas."
          >
            <OfferList text="Todo en el plan Profesional" status="active" />
            <OfferList text="Consultoría estratégica personalizada" status="active" />
            <OfferList text="Soporte 24/7" status="active" />
            <OfferList text="Implementación integral de automatización" status="active" />
            <OfferList text="Actualizaciones premium" status="active" />
            <OfferList text="Capacitación y formación continua" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
