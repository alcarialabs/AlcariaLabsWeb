"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

// Define consent categories
export const CONSENT_CATEGORIES = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing',
};

// Default consent state (Necessary is always true)
const defaultConsent = {
  [CONSENT_CATEGORIES.NECESSARY]: true,
  [CONSENT_CATEGORIES.ANALYTICS]: false,
  [CONSENT_CATEGORIES.MARKETING]: false,
};

const COOKIE_NAME = "AlcariaCookieConsentPreferences";

const CookieConsentBanner = () => {
  const [consent, setConsent] = useState(defaultConsent);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedConsent = Cookies.get(COOKIE_NAME);
    if (savedConsent) {
      try {
        setConsent(JSON.parse(savedConsent));
      } catch (e) {
        console.error("Error parsing cookie consent:", e);
        // Fallback to default if parsing fails
        setConsent(defaultConsent);
      }
    } else {
       setConsent(defaultConsent); // Ensure default is set if no cookie
    }
  }, []);

  const handleAccept = () => {
    // Accept all categories when general accept is clicked
    const acceptedConsent = {
      [CONSENT_CATEGORIES.NECESSARY]: true,
      [CONSENT_CATEGORIES.ANALYTICS]: true,
      [CONSENT_CATEGORIES.MARKETING]: true,
    };
    Cookies.set(COOKIE_NAME, JSON.stringify(acceptedConsent), { expires: 150 });
    setConsent(acceptedConsent);
    // Optionally reload or trigger updates if needed after consent change
    // window.location.reload();
  };

  const handleDecline = () => {
    // Decline optional categories
    const declinedConsent = {
      ...defaultConsent, // Necessary is true
      [CONSENT_CATEGORIES.ANALYTICS]: false,
      [CONSENT_CATEGORIES.MARKETING]: false,
    };
    Cookies.set(COOKIE_NAME, JSON.stringify(declinedConsent), { expires: 150 });
    setConsent(declinedConsent);
    // window.location.reload(); // Optional reload
  };

  const handleCheckboxChange = (category: string) => {
     setConsent(prevConsent => {
        const newState = {
            ...prevConsent,
            [category]: !prevConsent[category],
        };
        // Save immediately on change? Or wait for a save button?
        // For now, let's save immediately for simplicity
        Cookies.set(COOKIE_NAME, JSON.stringify(newState), { expires: 150 });
        return newState;
     });
  };

  // Render only on the client-side where cookies are available
  if (!isClient) {
    return null;
  }

  // Don't show the banner if consent has already been given/declined (cookie exists)
  if (getCookieConsentValue(COOKIE_NAME)) {
      return null;
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar Todas"
      declineButtonText="Rechazar Opcionales"
      enableDeclineButton
      cookieName={COOKIE_NAME} // Use the specific preferences cookie name
      expires={150}
      onAccept={handleAccept}
      onDecline={handleDecline}
      // Styling using Tailwind classes via props
      containerClasses="!bg-gray-dark text-white p-4 md:p-5 shadow-lg z-[9999] flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4"
      contentClasses="text-sm md:text-base text-body-color-dark flex-grow mb-3 md:mb-0"
      buttonWrapperClasses="flex flex-shrink-0 items-center space-x-3"
      buttonClasses="!bg-primary !text-white !text-sm !font-semibold !px-5 !py-2.5 !rounded-md hover:!bg-primary/90 transition-colors duration-200"
      declineButtonClasses="!bg-gray-600 !text-gray-200 !text-sm !font-medium !px-4 !py-2.5 !rounded-md hover:!bg-gray-500 transition-colors duration-200"
      // Explicit style for zIndex needed as Tailwind might conflict
      style={{ zIndex: 9999 }}
    >
      <div className="space-y-2">
        <p>
            Este sitio web utiliza cookies para mejorar tu experiencia. Algunas son esenciales, otras nos ayudan a entender cómo usas el sitio y a personalizar contenido.
            Puedes aceptar todas o configurar tus preferencias. Consulta nuestra{" "}
            <Link href="/cookie-policy" className="text-primary hover:underline font-semibold">
                Política de Cookies
            </Link>.
        </p>
        {/* Checkboxes styled with Tailwind */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center text-sm">
             <label className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white">
                <input
                    type="checkbox"
                    checked={consent[CONSENT_CATEGORIES.ANALYTICS]}
                    onChange={() => handleCheckboxChange(CONSENT_CATEGORIES.ANALYTICS)}
                    className="rounded border-gray-500 bg-gray-700 text-primary focus:ring-primary focus:ring-offset-gray-800 h-4 w-4"
                />
                <span>Analíticas</span>
            </label>
             <label className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-white">
                <input
                    type="checkbox"
                    checked={consent[CONSENT_CATEGORIES.MARKETING]}
                    onChange={() => handleCheckboxChange(CONSENT_CATEGORIES.MARKETING)}
                     className="rounded border-gray-500 bg-gray-700 text-primary focus:ring-primary focus:ring-offset-gray-800 h-4 w-4"
               />
                <span>Marketing</span>
            </label>
            {/* Necesarias (siempre activas) - Opcional mostrarla */}
            {/*
            <label className="flex items-center space-x-2 cursor-not-allowed opacity-70 text-gray-400">
                <input type="checkbox" checked disabled className="rounded border-gray-600 bg-gray-800 text-gray-400 focus:ring-0 h-4 w-4" />
                <span>Necesarias</span>
            </label>
            */}
        </div>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner; 