"use client";

import Link from "next/link";
import { useState } from "react";
import { CONSENT_CATEGORIES, useCookieConsent } from "@/context/CookieConsentContext";

/** Floating consent card. Same cookie name/format as before, now wired to the context live. */
export default function CookieConsentBanner() {
  const { decided, updateConsent } = useCookieConsent();
  const [custom, setCustom] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false });

  if (decided !== false) return null;

  const save = (analytics: boolean, marketing: boolean) =>
    updateConsent({ [CONSENT_CATEGORIES.ANALYTICS]: analytics, [CONSENT_CATEGORIES.MARKETING]: marketing });

  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-3 bottom-3 z-[90] animate-[cookie-in_.8s_cubic-bezier(.16,1,.3,1)] rounded-[24px] border border-white/10 bg-abyss/95 p-5 text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[400px] md:p-6"
    >
      <p className="mb-2 flex items-center gap-2 font-display text-lg font-bold">
        <span aria-hidden>🍪</span> Tu privacidad, tus reglas
      </p>
      <p className="mb-5 text-sm leading-relaxed text-white/60">
        Usamos cookies necesarias para que la web funcione y, si nos dejas, analíticas para mejorarla.{" "}
        <Link href="/cookie-policy" className="text-sand underline underline-offset-2">
          Política de cookies
        </Link>
        .
      </p>

      {custom && (
        <div className="mb-5 space-y-2">
          {(
            [
              ["analytics", "Analíticas", "Nos ayudan a entender qué contenido es útil."],
              ["marketing", "Marketing", "Medición de campañas publicitarias."],
            ] as const
          ).map(([key, label, hint]) => (
            <label key={key} className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl bg-white/[0.04] px-4 py-3">
              <span>
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block text-xs text-white/45">{hint}</span>
              </span>
              <input
                type="checkbox"
                checked={prefs[key]}
                onChange={() => setPrefs((p) => ({ ...p, [key]: !p[key] }))}
                className="peer sr-only"
              />
              <span className="relative h-6 w-11 shrink-0 rounded-full bg-white/15 transition-colors peer-checked:bg-ember peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-ember after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform after:duration-300 peer-checked:after:translate-x-5" />
            </label>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => save(true, true)} className="btn-ember flex-1 !px-5 !py-3 text-sm">
          Aceptar todas
        </button>
        {custom ? (
          <button type="button" onClick={() => save(prefs.analytics, prefs.marketing)} className="btn-ghost flex-1 !px-5 !py-3 text-sm">
            Guardar selección
          </button>
        ) : (
          <button type="button" onClick={() => save(false, false)} className="btn-ghost flex-1 !px-5 !py-3 text-sm">
            Solo necesarias
          </button>
        )}
        {!custom && (
          <button type="button" onClick={() => setCustom(true)} className="w-full pt-1 text-center text-xs text-white/50 underline underline-offset-2 hover:text-white">
            Configurar
          </button>
        )}
      </div>
      <style>{`@keyframes cookie-in { from { opacity: 0; transform: translateY(24px) scale(.97) } to { opacity: 1; transform: none } }`}</style>
    </div>
  );
}
