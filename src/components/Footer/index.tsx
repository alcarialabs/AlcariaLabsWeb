"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden bg-[#01203F] pt-16 md:pt-20 lg:pt-24">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0344DC]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-[#FF4F00]/10 blur-3xl" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E3CC9C 1px, transparent 0)`,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap">
          {/* Col 1: Logo & description */}
          <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/LOGO_ALCARIA_BLANCO.png"
                  alt="Logo ALCARIA"
                  className="w-full"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-8 text-base leading-relaxed text-white/55">
                ALCARIA es una startup dedicada a optimizar procesos mediante
                soluciones de automatización y agentes inteligentes
                personalizados, impulsando la transformación digital en empresas
                y PYMEs.
              </p>

              {/* Contact CTA */}
              <Link
                href="/contact"
                className="font-syne inline-flex items-center gap-2 rounded-full bg-[#FF4F00] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#FF4F00]/20 duration-300 hover:bg-[#FF4F00]/90"
              >
                Habla con nosotros
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="w-full px-4 lg:w-7/12 xl:w-7/12">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:gap-x-12">
              {/* Useful Links */}
              <div>
                <h2 className="font-syne mb-8 text-sm font-bold uppercase tracking-[0.12em] text-[#E3CC9C]">
                  Navegación
                </h2>
                <ul className="space-y-4">
                  {[
                    { href: "/", label: "Inicio" },
                    { href: "/about", label: "Sobre Nosotros" },
                    { href: "/wallet", label: "Wallet" },
                    { href: "/blog", label: "Blog" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-syne text-sm font-medium text-white/55 duration-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-syne mb-8 text-sm font-bold uppercase tracking-[0.12em] text-[#E3CC9C]">
                  Servicios
                </h2>
                <ul className="space-y-4">
                  {[
                    { href: "#features", label: "Automatización" },
                    { href: "#features", label: "Agentes de IA" },
                    { href: "/wallet", label: "Tarjetas Wallet" },
                    { href: "#contact", label: "Consultoría" },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="font-syne text-sm font-medium text-white/55 duration-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Support */}
              <div>
                <h2 className="font-syne mb-8 text-sm font-bold uppercase tracking-[0.12em] text-[#E3CC9C]">
                  Legal
                </h2>
                <ul className="space-y-4">
                  {[
                    { href: "/terms-of-service", label: "Términos de Servicio" },
                    { href: "/privacy-policy", label: "Política de Privacidad" },
                    { href: "/cookie-policy", label: "Política de Cookies" },
                    { href: "/contact", label: "Contacto" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-syne text-sm font-medium text-white/55 duration-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} ALCARIA. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF4F00]" />
              <span className="text-xs font-medium text-white/40">
                Sistemas operativos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
