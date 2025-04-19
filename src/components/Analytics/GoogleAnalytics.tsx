"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useCookieConsent, CONSENT_CATEGORIES } from '@/context/CookieConsentContext';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { hasConsent } = useCookieConsent();
  const analyticsConsentGiven = hasConsent(CONSENT_CATEGORIES.ANALYTICS);

  useEffect(() => {
    // Enviar pageview en cambio de ruta si hay consentimiento y ID
    if (analyticsConsentGiven && GA_MEASUREMENT_ID && typeof window.gtag === 'function') {
      const url = pathname + searchParams.toString();
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
      console.log(`GA Pageview sent for: ${url}`); // Log para depuración
    }
  }, [pathname, searchParams, analyticsConsentGiven]); // Ejecutar en cambio de ruta o consentimiento

  // No renderizar los scripts si no hay ID o no hay consentimiento
  if (!GA_MEASUREMENT_ID || !analyticsConsentGiven) {
    // Podrías añadir un log aquí si quieres saber por qué no se carga
    // console.log("GA scripts not loaded. ID missing or consent not given.");
    return null;
  }

  return (
    <>
      {/* Cargar el script de gtag.js */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      {/* Script inline para inicializar gtag y configurar el ID */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname + window.location.search,
            });
            console.log('Google Analytics initialized with consent.'); // Log para depuración
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics; 