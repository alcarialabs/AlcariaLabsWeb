/**
 * Single source of truth for brand, URLs and contact data.
 * Every canonical, sitemap entry, JSON-LD block and OG image reads from here.
 */
export const SITE = {
  name: "ALCARIA",
  legalName: "ALCARIA Labs",
  url: "https://www.alcarialabs.com",
  locale: "es_ES",
  lang: "es-ES",
  email: "info@alcarialabs.com",
  foundingDate: "2025",
  country: "ES",
  tagline: "Automatización e IA para empresas y PYMEs",
  description:
    "ALCARIA automatiza procesos con inteligencia artificial, crea agentes de IA y tarjetas Apple y Google Wallet para empresas y PYMEs en España. Resultados medibles en semanas.",
  shortDescription:
    "Agencia de automatización con IA, agentes inteligentes y tarjetas Wallet para PYMEs en España.",
  logo: "/images/logo/LOGO_ALCARIA_AZUL.png",
  logoWhite: "/images/logo/LOGO_ALCARIA_BLANCO.png",
  isotipo: "/images/alcaria_isotipo.png",
  keywords: [
    "automatización de procesos con IA",
    "agencia de inteligencia artificial",
    "agentes de IA para empresas",
    "chatbot WhatsApp IA",
    "automatización PYMEs",
    "tarjetas Apple Wallet",
    "tarjetas Google Wallet",
    "tarjetas de fidelización digitales",
    "consultoría IA",
    "transformación digital PYMEs",
  ],
  founders: [
    { name: "Eric Duró", url: "https://ericduro.com" },
    { name: "Joan Aparici" },
    { name: "Vicent Reig" },
  ],
  sameAs: ["https://ericduro.com"],
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "") ||
  SITE.url;

export const NAV = [
  { title: "Servicios", href: "/servicios" },
  { title: "Wallet", href: "/wallet" },
  { title: "Nosotros", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contacto", href: "/contact" },
] as const;
