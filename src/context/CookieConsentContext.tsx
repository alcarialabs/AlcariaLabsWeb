"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Cookies } from 'react-cookie-consent'; // Usamos la utilidad de la librería

// Define las categorías que gestionaremos
export const CONSENT_CATEGORIES = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing',
};

// Nombre de la cookie donde guardamos las preferencias
const COOKIE_NAME = "AlcariaCookieConsentPreferences";

// Estado inicial por defecto (solo necesarias activas)
const defaultConsentState = {
  [CONSENT_CATEGORIES.NECESSARY]: true,
  [CONSENT_CATEGORIES.ANALYTICS]: false,
  [CONSENT_CATEGORIES.MARKETING]: false,
};

// Tipado para el estado del consentimiento
type ConsentState = typeof defaultConsentState;

// Tipado para el valor del contexto
interface CookieConsentContextType {
  consentState: ConsentState;
  hasConsent: (category: keyof ConsentState) => boolean;
  // Podríamos añadir una función para actualizar el consentimiento si fuera necesario
  // updateConsent: (newState: Partial<ConsentState>) => void;
}

// Crear el contexto
const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

// Proveedor del contexto
export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consentState, setConsentState] = useState<ConsentState>(defaultConsentState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Leer la cookie solo en el cliente
    const savedConsent = Cookies.get(COOKIE_NAME);
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        // Asegurarse de que siempre incluya 'necessary: true'
        setConsentState({
          ...defaultConsentState, // Empezar con el default
          ...parsedConsent,       // Sobrescribir con lo guardado
          [CONSENT_CATEGORIES.NECESSARY]: true, // Forzar necesarias
        });
      } catch (e) {
        console.error("Error parsing cookie consent from context:", e);
        setConsentState(defaultConsentState); // Volver al default en caso de error
      }
    } else {
      // Si no hay cookie guardada, usar el estado por defecto
      setConsentState(defaultConsentState);
    }
    setIsLoaded(true);
  }, []);

  // Función para verificar fácilmente el consentimiento de una categoría
  const hasConsent = (category: keyof ConsentState): boolean => {
    if (!isLoaded) return false; // No dar consentimiento hasta que se cargue desde la cookie
    return consentState[category] === true;
  };

  // El valor que proporcionará el contexto
  const value = {
    consentState,
    hasConsent,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const useCookieConsent = (): CookieConsentContextType => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}; 