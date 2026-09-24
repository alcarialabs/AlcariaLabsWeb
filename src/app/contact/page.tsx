import type { Metadata } from "next";
import { HOME_FAQ } from "@/lib/services";
import { SITE, absoluteUrl } from "@/lib/site";
import { ORG_ID, breadcrumbs, faqPage, graph, webPage } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import ContactSection from "@/components/sections/ContactSection";
import Faq from "@/components/sections/Faq";

const DESCRIPTION =
  "Habla con ALCARIA: diagnóstico gratuito de 30 minutos para descubrir qué procesos de tu empresa puedes automatizar con IA y cuánto tiempo recuperarías.";

export const metadata: Metadata = {
  title: "Contacto: diagnóstico gratuito de automatización",
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: `Contacto | ${SITE.name}`, description: DESCRIPTION },
};

export default function ContactPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Contacto", path: "/contact" },
  ];
  const faq = HOME_FAQ.slice(1, 5);
  return (
    <main className="bg-night pt-16">
      <JsonLd
        data={graph(
          { ...webPage({ path: "/contact", name: "Contacto", description: DESCRIPTION, type: "ContactPage" }), breadcrumb: breadcrumbs(crumbs), mainEntity: { "@id": ORG_ID } },
          faqPage(faq, absoluteUrl("/contact")),
        )}
      />
      <ContactSection headingLevel="h1" />
      <Faq items={faq} title="Antes de escribirnos" />
    </main>
  );
}
