import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { POSTS } from "@/content/blog";
import { Wordmark } from "@/components/brand/Isotipo";
import Arrow from "@/components/ui/Arrow";
import Magnetic from "@/components/motion/Magnetic";
import FooterParallax from "./FooterParallax";

const COMPANY = [
  { href: "/about", label: "Sobre nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacto" },
  { href: "/feed.xml", label: "RSS" },
];

const LEGAL = [
  { href: "/privacy-policy", label: "Privacidad" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/terms-of-service", label: "Términos" },
];

export default function Footer() {
  const latest = POSTS.slice(0, 4);

  return (
    <footer className="relative overflow-hidden bg-night pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-cobalt/20 blur-[140px]" />

      <div className="container relative">
        {/* Closing CTA */}
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-16 md:flex-row md:items-end md:pb-20">
          <div>
            <p className="eyebrow mb-6">¿Empezamos?</p>
            <h2 className="max-w-3xl font-display text-display-md font-extrabold text-white">
              Tu próxima hora libre empieza con una{" "}
              <span className="text-gradient-ember">conversación</span>.
            </h2>
          </div>
          <Magnetic strength={0.4}>
            <Link
              href="/contact"
              data-cursor="Hablemos"
              className="group relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-ember font-display text-lg font-bold text-white shadow-[0_20px_80px_-20px_rgba(255,79,0,0.9)] transition-transform duration-500 ease-expo hover:scale-105 md:h-44 md:w-44"
            >
              <span className="flex flex-col items-center gap-1">
                Hablemos
                <Arrow className="h-5 w-5 -rotate-45 transition-transform duration-500 ease-expo group-hover:rotate-0" />
              </span>
            </Link>
          </Magnetic>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Wordmark className="mb-6 h-6 w-auto" />
            <p className="max-w-xs text-[15px] leading-relaxed text-white/50">{SITE.shortDescription}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="link-underline mt-6 inline-block font-display text-lg font-semibold text-sand"
            >
              {SITE.email}
            </a>
          </div>

          <FooterCol title="Servicios" className="md:col-span-3">
            {SERVICES.map((s) => (
              <FooterLink key={s.slug} href={s.href}>
                {s.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Empresa" className="md:col-span-2">
            {COMPANY.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Últimas guías" className="col-span-2 md:col-span-3">
            {latest.map((p) => (
              <FooterLink key={p.slug} href={`/blog/${p.slug}`}>
                {p.title}
              </FooterLink>
            ))}
          </FooterCol>
        </div>
      </div>

      {/* Official wordmark, full width, rising as the page ends */}
      <FooterParallax>
        <div className="container pb-8 md:pb-12" aria-hidden>
          <Wordmark className="h-auto w-full select-none" sizes="(min-width: 1400px) 1300px, 92vw" />
        </div>
      </FooterParallax>

      <div className="container relative border-t border-white/10 py-6">
        <div className="flex flex-col gap-4 text-[13px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Automatización e IA hecha en España.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Agentes en línea
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-sand/60">{title}</p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="link-underline text-[15px] leading-snug text-white/65 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
