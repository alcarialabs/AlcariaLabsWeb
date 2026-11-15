import { Metadata } from "next";
import Link from "next/link";
import { LEGAL_ACTUALIZADO, TITULAR, titularTexto } from "@/lib/titular";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies utiliza alcarialabs.com, para qué sirven y cómo puedes gestionarlas.",
  alternates: { canonical: "/cookie-policy" },
};

const CookiePolicyPage = () => {
  return (
    <main className="bg-paper pb-24 pt-36 text-ink md:pt-44">
      <div className="container">
        <h1 className="mb-12 font-display text-display-md font-extrabold text-ink">Política de cookies</h1>
        <div className="legal max-w-3xl">
          <p>{LEGAL_ACTUALIZADO}</p>
          <p>
            Explicamos qué cookies utiliza {TITULAR.dominio}, para qué sirven y cómo puedes gestionarlas, conforme al
            artículo 22.2 de la Ley 34/2002 (LSSI-CE).
          </p>
          <h2>1. Responsable</h2>
          <p>{titularTexto}</p>
          <h2>2. Qué son las cookies</h2>
          <p>
            Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información sobre tu
            visita.
          </p>
          <h2>3. Cookies que utilizamos</h2>
          <ul>
            <li>
              <strong>Técnica (siempre activa):</strong> <code>AlcariaCookieConsentPreferences</code>, propia. Guarda tus
              preferencias de cookies para no volver a preguntarte. Dura 150 días.
            </li>
            <li>
              <strong>Analíticas (solo con tu consentimiento):</strong> <code>_ga</code> y <code>_ga_*</code>, de Google
              Analytics (Google). Distinguen visitas de forma anónima para elaborar estadísticas de uso del sitio. Duran
              hasta 2 años. Más información en la{" "}
              <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer">
                política de privacidad de Google
              </a>
              .
            </li>
          </ul>
          <p>
            No utilizamos cookies de publicidad ni de marketing. Si esto cambia, actualizaremos esta política y te
            pediremos tu consentimiento.
          </p>
          <h2>4. Cómo gestionarlas</h2>
          <p>
            La primera vez que visitas el sitio te mostramos un aviso para aceptar todas las cookies, quedarte solo con las
            necesarias o elegir por categorías. Las cookies analíticas no se instalan hasta que las aceptas.
          </p>
          <p>
            Para cambiar tu elección, borra las cookies de {TITULAR.dominio} en tu navegador: el aviso volverá a aparecer
            en tu próxima visita. También puedes bloquear o eliminar cookies desde la configuración de tu navegador; si
            bloqueas la técnica, el aviso aparecerá en cada visita.
          </p>
          <h2>5. Más información</h2>
          <p>
            El tratamiento de tus datos personales se explica en la{" "}
            <Link href="/privacy-policy">Política de privacidad</Link>. Para cualquier duda, escríbenos a{" "}
            <a href={`mailto:${TITULAR.correo}`}>{TITULAR.correo}</a>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
