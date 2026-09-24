import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_PAGES, getService } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbs, faqPage, graph, serviceNode, webPage } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import ServiceDetail from "@/components/sections/ServiceDetail";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.description,
    alternates: { canonical: s.href },
    openGraph: { url: s.href, title: s.seoTitle, description: s.description },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || !service.href.startsWith("/servicios/")) notFound();

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: service.name, path: service.href },
  ];

  return (
    <main>
      <JsonLd
        data={graph(
          { ...webPage({ path: service.href, name: service.headline, description: service.description }), breadcrumb: breadcrumbs(crumbs) },
          serviceNode(service),
          faqPage(service.faq, absoluteUrl(service.href)),
        )}
      />
      <ServiceDetail service={service} crumbs={crumbs} />
    </main>
  );
}
