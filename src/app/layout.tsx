"use client";

import { Suspense } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsentBanner from "@/components/Common/CookieConsentBanner";
import { CookieConsentProvider } from "@/context/CookieConsentContext";
import "../styles/index.css";
import "node_modules/react-modal-video/css/modal-video.css";
import { Providers } from "./providers";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";

// ✅ Importamos la fuente Syne desde next/font/google
import { Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-syne',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-white" font-[var(--font-syne)]>
        <CookieConsentProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
            <CookieConsentBanner />
            <ScrollToTop />
          </Providers>
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
