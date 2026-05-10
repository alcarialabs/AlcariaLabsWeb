"use client";

import { motion } from "framer-motion";

const ChartBarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const BoltIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);

const UserCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const points = [
  {
    Icon: ChartBarIcon,
    title: "IA Aplicada: Decisiones Inteligentes",
    body: "Transforma datos en ventaja competitiva. Implementamos IA para análisis predictivo, detección de patrones y optimización de estrategias de negocio.",
    color: "#0344DC",
  },
  {
    Icon: BoltIcon,
    title: "Automatización que Libera Potencial",
    body: "Elimina tareas manuales con RPA + IA. Agiliza flujos, reduce costes hasta un 60% y permite a tu equipo centrarse en lo que realmente importa.",
    color: "#FF4F00",
  },
  {
    Icon: UserCircleIcon,
    title: "Agentes Inteligentes 24/7",
    body: "Soporte instantáneo y personalizado sin descanso. Desarrollamos agentes que resuelven consultas, gestionan tareas y mejoran la satisfacción del cliente.",
    color: "#0344DC",
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="border-b border-gray-100 dark:border-white/10">
          <div className="-mx-4 flex flex-wrap items-center py-16 md:py-20 lg:py-28">
            {/* Image side */}
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="relative mx-auto my-8 max-w-[500px] lg:my-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Decorative background blob */}
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#0344DC]/10 to-[#FF4F00]/5 blur-xl" />

                <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 bg-[#01203F]">
                  {/* Terminal bar */}
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF4F00]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E3CC9C]/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="ml-3 font-syne text-xs font-semibold text-white/40">alcaria · motor IA</span>
                  </div>

                  <div className="p-6">
                    {/* Flow diagram */}
                    <div className="mb-5">
                      <svg viewBox="0 0 360 190" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Lines: input → center */}
                        <line x1="73" y1="54" x2="152" y2="92" stroke="#0344DC" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="5 3"/>
                        <line x1="73" y1="136" x2="152" y2="98" stroke="#0344DC" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="5 3"/>
                        {/* Lines: center → output */}
                        <line x1="208" y1="92" x2="283" y2="44" stroke="#FF4F00" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="5 3"/>
                        <line x1="208" y1="95" x2="283" y2="95" stroke="#FF4F00" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="5 3"/>
                        <line x1="208" y1="98" x2="283" y2="146" stroke="#FF4F00" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="5 3"/>

                        {/* Input node: Datos */}
                        <rect x="12" y="30" width="60" height="47" rx="10" fill="#0344DC" fillOpacity="0.12" stroke="#0344DC" strokeWidth="1.5" strokeOpacity="0.6"/>
                        <text x="42" y="52" textAnchor="middle" fill="#60A5FA" fontSize="10" fontWeight="600" fontFamily="system-ui">Datos</text>
                        <text x="42" y="66" textAnchor="middle" fill="#ffffff" fontSize="8" opacity="0.4" fontFamily="system-ui">entrada</text>

                        {/* Input node: Tareas */}
                        <rect x="12" y="112" width="60" height="47" rx="10" fill="#0344DC" fillOpacity="0.12" stroke="#0344DC" strokeWidth="1.5" strokeOpacity="0.6"/>
                        <text x="42" y="134" textAnchor="middle" fill="#60A5FA" fontSize="10" fontWeight="600" fontFamily="system-ui">Tareas</text>
                        <text x="42" y="148" textAnchor="middle" fill="#ffffff" fontSize="8" opacity="0.4" fontFamily="system-ui">manuales</text>

                        {/* Central AI node - outer glow */}
                        <circle cx="180" cy="95" r="40" fill="#E3CC9C" fillOpacity="0.03" stroke="#E3CC9C" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 3"/>
                        {/* Central AI node - main */}
                        <circle cx="180" cy="95" r="28" fill="#01203F" stroke="#E3CC9C" strokeWidth="2" strokeOpacity="0.85"/>
                        <text x="180" y="89" textAnchor="middle" fill="#E3CC9C" fontSize="8" fontWeight="700" fontFamily="system-ui">MOTOR</text>
                        <text x="180" y="103" textAnchor="middle" fill="#E3CC9C" fontSize="13" fontWeight="700" fontFamily="system-ui">IA</text>

                        {/* Output node: RPA */}
                        <rect x="286" y="20" width="65" height="47" rx="10" fill="#FF4F00" fillOpacity="0.12" stroke="#FF4F00" strokeWidth="1.5" strokeOpacity="0.6"/>
                        <text x="318" y="42" textAnchor="middle" fill="#FF6B35" fontSize="10" fontWeight="600" fontFamily="system-ui">RPA</text>
                        <text x="318" y="56" textAnchor="middle" fill="#ffffff" fontSize="8" opacity="0.4" fontFamily="system-ui">automático</text>

                        {/* Output node: Análisis */}
                        <rect x="286" y="72" width="65" height="47" rx="10" fill="#FF4F00" fillOpacity="0.12" stroke="#FF4F00" strokeWidth="1.5" strokeOpacity="0.6"/>
                        <text x="318" y="93" textAnchor="middle" fill="#FF6B35" fontSize="10" fontWeight="600" fontFamily="system-ui">Análisis</text>
                        <text x="318" y="108" textAnchor="middle" fill="#ffffff" fontSize="8" opacity="0.4" fontFamily="system-ui">predictivo</text>

                        {/* Output node: Agentes */}
                        <rect x="286" y="124" width="65" height="47" rx="10" fill="#FF4F00" fillOpacity="0.12" stroke="#FF4F00" strokeWidth="1.5" strokeOpacity="0.6"/>
                        <text x="318" y="146" textAnchor="middle" fill="#FF6B35" fontSize="10" fontWeight="600" fontFamily="system-ui">Agentes</text>
                        <text x="318" y="161" textAnchor="middle" fill="#ffffff" fontSize="8" opacity="0.4" fontFamily="system-ui">24/7</text>
                      </svg>
                    </div>

                    {/* Metrics */}
                    <div className="mb-4 grid grid-cols-3 gap-3">
                      {[
                        { value: "1.2k", label: "Tareas/día", color: "#0344DC" },
                        { value: "99.8%", label: "Uptime", color: "#E3CC9C" },
                        { value: "60%", label: "Ahorro", color: "#FF4F00" },
                      ].map((m) => (
                        <div key={m.label} className="rounded-xl bg-white/5 p-3 text-center">
                          <div className="font-syne text-base font-bold" style={{ color: m.color }}>{m.value}</div>
                          <div className="text-[10px] text-white/40">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Live status */}
                    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#E3CC9C]" />
                      <span className="text-xs text-white/50">Sistema operativo · Procesando tareas en tiempo real</span>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute left-4 top-14 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl dark:bg-gray-dark"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#FF4F00]" />
                  <span className="font-syne text-xs font-bold text-[#01203F] dark:text-white">IA Activa</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Text side */}
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="max-w-[500px] lg:ml-auto"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* Label */}
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0344DC]/20 bg-[#0344DC]/5 px-4 py-2 text-sm font-semibold text-[#0344DC]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF4F00]" />
                  Automatización e IA
                </span>

                <h2 className="font-syne mb-6 mt-4 text-3xl font-bold leading-tight text-[#01203F] dark:text-white sm:text-4xl">
                  Tecnología que trabaja
                  <span className="block bg-gradient-to-r from-[#0344DC] to-[#FF4F00] bg-clip-text text-transparent">
                    por ti, no al revés
                  </span>
                </h2>

                <div className="space-y-8">
                  {points.map(({ Icon, title, body, color }, i) => (
                    <motion.div
                      key={i}
                      className="group flex items-start gap-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                    >
                      <div
                        className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${color}15`, color }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-syne mb-2 text-lg font-bold text-[#01203F] dark:text-white">
                          {title}
                        </h3>
                        <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                          {body}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
