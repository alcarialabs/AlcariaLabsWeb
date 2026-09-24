import { SERVICE_PAGES, getService } from "@/lib/services";
import { OG_SIZE, renderOg } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Servicio de ALCARIA";

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  return renderOg({ kicker: `Servicio · ${s?.kicker ?? ""}`, title: s?.headline ?? "Servicios de ALCARIA" });
}
