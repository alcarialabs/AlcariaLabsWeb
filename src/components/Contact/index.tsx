"use client";

import { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "tickets"), formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#E3CC9C]/5 to-white dark:from-gray-dark dark:via-[#E3CC9C]/3 dark:to-gray-dark" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0344DC]/20 bg-[#0344DC]/5 px-4 py-2 text-sm font-semibold text-[#0344DC]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4F00]" />
            Contacto directo
          </span>
          <h2 className="font-syne mt-4 text-4xl font-bold leading-tight text-[#01203F] dark:text-white sm:text-5xl">
            ¿Listo para transformar
            <span className="block bg-gradient-to-r from-[#0344DC] to-[#FF4F00] bg-clip-text text-transparent">
              tu negocio?
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body-color md:text-lg">
            Cuéntanos tu proyecto y te preparamos una consulta gratuita adaptada a tus necesidades reales.
          </p>
        </motion.div>

        <div className="-mx-4 flex flex-wrap lg:flex">
          {/* Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <motion.div
              className="mb-12 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/5 dark:border-white/10 dark:bg-gray-dark lg:mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#0344DC] via-[#FF4F00] to-[#E3CC9C]" />

              <div className="p-8 sm:p-10">
                <h3 className="font-syne mb-2 text-2xl font-bold text-[#01203F] dark:text-white">
                  Envíanos un mensaje
                </h3>
                <p className="mb-8 text-sm text-body-color">
                  Respuesta garantizada en menos de 24 horas laborables.
                </p>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 px-5 py-4 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">¡Mensaje enviado! Te contactaremos pronto.</span>
                  </motion.div>
                )}
                {error && (
                  <div className="mb-6 rounded-xl bg-red-50 px-5 py-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-6">
                        <label className="mb-2 block text-sm font-semibold text-[#01203F] dark:text-white">
                          Tu Nombre *
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Ej: María García"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-body-color outline-none transition-all duration-200 focus:border-[#0344DC] focus:bg-white focus:ring-3 focus:ring-[#0344DC]/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-[#0344DC]"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-6">
                        <label className="mb-2 block text-sm font-semibold text-[#01203F] dark:text-white">
                          Tu Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Ej: maria@empresa.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-body-color outline-none transition-all duration-200 focus:border-[#0344DC] focus:bg-white focus:ring-3 focus:ring-[#0344DC]/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-[#0344DC]"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-6">
                        <label className="mb-2 block text-sm font-semibold text-[#01203F] dark:text-white">
                          Tu Mensaje *
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Cuéntanos tu empresa, qué procesos quieres automatizar o cualquier pregunta que tengas..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-5 py-3.5 text-sm text-body-color outline-none transition-all duration-200 focus:border-[#0344DC] focus:bg-white focus:ring-3 focus:ring-[#0344DC]/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-[#0344DC]"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="font-syne inline-flex items-center gap-2 rounded-full bg-[#FF4F00] px-9 py-4 text-base font-bold text-white shadow-lg shadow-[#FF4F00]/25 duration-300 hover:bg-[#FF4F00]/90 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            Solicitar Consulta Gratuita
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Info panel */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <motion.div
              className="h-full overflow-hidden rounded-2xl bg-[#01203F] p-8 text-white"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Top accent */}
              <div className="mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-[#FF4F00] to-[#E3CC9C]" />

              <h3 className="font-syne mb-4 text-2xl font-bold text-white">
                ¿Por qué ALCARIA?
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-white/60">
                Somos especialistas en automatización e IA aplicada a empresas. No vendemos software genérico, diseñamos soluciones a medida que realmente funcionan.
              </p>

              <ul className="space-y-5">
                {[
                  { icon: "⚡", title: "Implementación rápida", desc: "Resultados en semanas" },
                  { icon: "🎯", title: "A medida", desc: "Adaptado a tu empresa" },
                  { icon: "💬", title: "Soporte continuo", desc: "Siempre disponibles" },
                  { icon: "📈", title: "ROI garantizado", desc: "Media de 3× de retorno" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-syne text-sm font-bold text-white">{item.title}</div>
                      <div className="text-xs text-white/50">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-xs text-white/40">
                  O escríbenos directamente a:
                </p>
                <a
                  href="mailto:hola@alcaria.es"
                  className="mt-1 block text-sm font-semibold text-[#E3CC9C] hover:text-white"
                >
                  hola@alcaria.es
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
