import type { Author, AuthorId, Post } from "./types";

import iaPymes from "./posts/ia-transformando-pymes-2024";
import walletCanal from "./posts/tarjetas-wallet-canal-comunicacion";
import rpaIa from "./posts/automatizacion-inteligente-rpa-ia";
import elegirIa from "./posts/elegir-solucion-ia-negocio";
import walletTendencias from "./posts/futuro-wallet-tendencias";
import fuerzasAutomatizacion from "./posts/automatizacion-transforma-negocio-2025";
import stablecoin from "./posts/futuro-pagos-tarjetas-digitales-stablecoin";
import agentesRevolucion from "./posts/agentes-ia-revolucion-pymes-2025";
import cuantoCuesta from "./posts/cuanto-cuesta-automatizar-procesos-ia-pyme";
import agentesGuia from "./posts/agentes-ia-empresas-guia-ejemplos";
import chatbotWhatsapp from "./posts/chatbot-whatsapp-ia-empresas";
import walletComercios from "./posts/tarjetas-fidelizacion-apple-google-wallet-comercios";
import facturasIa from "./posts/automatizar-facturas-con-ia";

export const AUTHORS: Record<AuthorId, Author> = {
  eric: {
    id: "eric",
    name: "Eric Duró",
    role: "CEO & Co-Fundador · Tecnología e IA",
    image: "/images/blog/author-eric.jpeg",
    bio: "Ingeniero Multimedia con Máster en Desarrollo Full Stack y Máster en Inteligencia Artificial. Lidera la visión tecnológica y de producto de ALCARIA.",
    url: "https://ericduro.com",
    sameAs: ["https://ericduro.com"],
  },
  joan: {
    id: "joan",
    name: "Joan Aparici",
    role: "Co-Fundador · Negocio y Ventas",
    image: "/images/blog/author-joan.jpg",
    bio: "Perfil híbrido entre desarrollo y negocio. Traduce la tecnología a lo que cada empresa necesita de verdad y lidera la estrategia comercial de ALCARIA.",
  },
  vicent: {
    id: "vicent",
    name: "Vicent Reig",
    role: "Co-Fundador · Ingeniería y Sistemas",
    image: "/images/blog/author-vicent.jpeg",
    bio: "Ingeniero especializado en Inteligencia Artificial. Aporta rigor técnico y visión sistémica a las soluciones más complejas de ALCARIA.",
  },
};

const ALL: Post[] = [
  iaPymes,
  walletCanal,
  rpaIa,
  elegirIa,
  walletTendencias,
  fuerzasAutomatizacion,
  stablecoin,
  agentesRevolucion,
  cuantoCuesta,
  agentesGuia,
  chatbotWhatsapp,
  walletComercios,
  facturasIa,
];

/** Newest first; ties broken by most recently updated. */
export const POSTS: Post[] = [...ALL].sort(
  (a, b) =>
    b.publishDate.localeCompare(a.publishDate) ||
    b.updatedDate.localeCompare(a.updatedDate),
);

export const CATEGORIES = Array.from(new Set(POSTS.map((p) => p.category)));

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const getAuthor = (id: AuthorId) => AUTHORS[id];

export function getRelated(post: Post, count = 3): Post[] {
  const explicit = (post.related ?? [])
    .map(getPost)
    .filter((p): p is Post => Boolean(p) && p!.slug !== post.slug);
  const sameCategory = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category && !explicit.includes(p),
  );
  const rest = POSTS.filter(
    (p) => p.slug !== post.slug && !explicit.includes(p) && !sameCategory.includes(p),
  );
  return [...explicit, ...sameCategory, ...rest].slice(0, count);
}

export const readingTime = (post: Post) =>
  Math.max(1, Math.round(post.content.split(/\s+/).length / 220));

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/** Plain text of a heading's markdown (strips emphasis and links). */
export const stripMarkdown = (text: string) =>
  text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~]/g, "")
    .trim();

export function getHeadings(post: Post) {
  return post.content
    .split("\n")
    .map((line) => /^(##|###)\s+(.+)$/.exec(line.trim()))
    .filter((m): m is RegExpExecArray => Boolean(m))
    .map((m) => {
      const text = stripMarkdown(m[2]);
      return { depth: m[1].length, text, id: slugify(text) };
    });
}

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
