import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { JetBrains_Mono, Poppins, Syne } from "next/font/google";
import "../styles/index.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Cursor from "@/components/motion/Cursor";
import CookieConsentBanner from "@/components/Common/CookieConsentBanner";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { graph, organization, website } from "@/lib/schema";

const display = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Automatización con IA, Agentes y Wallet para PYMEs`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: SITE.founders.map((f) => ({ name: f.name, url: "url" in f ? f.url : undefined })),
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "Blog de ALCARIA" }] },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Automatización con IA para empresas`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Automatización con IA para empresas`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  formatDetection: { telephone: false },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#000D1C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before paint so intro elements can start hidden without a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){document.documentElement.classList.add('js-ready')},3500)",
          }}
        />
        <JsonLd data={graph(organization(), website())} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ember focus:px-5 focus:py-3 focus:text-white"
        >
          Saltar al contenido
        </a>
        <CookieConsentProvider>
          <SmoothScroll />
          <Header />
          <div id="main">{children}</div>
          <Footer />
          <CookieConsentBanner />
          <Cursor />
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        </CookieConsentProvider>
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
