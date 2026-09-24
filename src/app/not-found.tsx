import Link from "next/link";
import type { Metadata } from "next";
import Isotipo from "@/components/brand/Isotipo";
import Arrow from "@/components/ui/Arrow";
import { POSTS } from "@/content/blog";

export const metadata: Metadata = { title: "Página no encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center overflow-hidden bg-night pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-radial" />
      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-6">Error 404</p>
          <h1 className="mb-6 font-display text-display-lg font-extrabold text-white">Este cohete se ha salido de órbita</h1>
          <p className="mb-10 max-w-[44ch] text-lg text-white/60">
            La página que buscas no existe o ha cambiado de sitio. Vuelve a la base o explora nuestras guías.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-ember btn-fill">
              Volver al inicio <Arrow />
            </Link>
            <Link href="/blog" className="btn-ghost">
              Ir al blog
            </Link>
          </div>
          <ul className="mt-12 space-y-3">
            {POSTS.slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="link-underline text-white/70 hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Isotipo className="mx-auto h-[40vh] w-auto -rotate-12 opacity-80" title="" aria-hidden />
      </div>
    </main>
  );
}
