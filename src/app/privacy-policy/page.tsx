import { Metadata } from "next";
import Link from "next/link";
import { LEGAL_ACTUALIZADO, TITULAR, titularTexto } from "@/lib/titular";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo tratamos los datos personales de quienes nos contactan a través de alcarialabs.com, conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/privacy-policy" },
};

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-paper pb-24 pt-36 text-ink md:pt-44">
      <div className="container">
        <h1 className="mb-12 font-display text-display-md font-extrabold text-ink">Política de privacidad</h1>
        <div className="legal max-w-3xl">
          <p>{LEGAL_ACTUALIZADO}</p>
          <p>
            Explicamos cómo tratamos los datos personales de quienes nos contactan a través de este sitio, conforme al
            Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).
          </p>
          <h2>1. Responsable del tratamiento</h2>
          <p>{titularTexto}</p>
          <h2>2. Qué datos tratamos</h2>
          <p>
            Este sitio no tiene cuentas de usuario. Si nos escribes con el formulario de contacto, guardamos tu nombre, tu
            correo electrónico, tu mensaje y, si lo eliges, el servicio que te interesa. También tratamos los datos que
            nos facilitas si nos escribes directamente por correo (por ejemplo, tu nombre, tu correo y el contenido de tu
            mensaje).
          </p>
          <p>
            Si aceptas las cookies analíticas, Google Analytics recoge datos de navegación (páginas visitadas, duración de
            la visita, tipo de navegador y dispositivo, y un identificador de la cookie) para elaborar estadísticas de uso.
            Si no las aceptas, no se carga. Lo explicamos en la{" "}
            <Link href="/cookie-policy">Política de cookies</Link>.
          </p>
          <p>
            Como en cualquier servidor web, el proveedor de alojamiento puede registrar datos técnicos de la conexión (como
            la dirección IP) por motivos de seguridad y funcionamiento.
          </p>
          <h2>3. Finalidad y base jurídica</h2>
          <p>
            Atender tu consulta y, si nos lo pides, preparar el diagnóstico o la propuesta de servicio. La base jurídica es
            tu consentimiento al contactarnos (art. 6.1.a RGPD) y, si pides información sobre nuestros servicios, la
            aplicación de medidas precontractuales (art. 6.1.b RGPD). No usamos estos datos para enviarte publicidad.
          </p>
          <p>
            Las estadísticas de uso se basan en tu consentimiento a las cookies analíticas (art. 6.1.a RGPD), que puedes
            retirar en cualquier momento.
          </p>
          <h2>4. Conservación</h2>
          <p>
            Los datos de las consultas se conservan mientras dure su gestión y, si de ella nace una relación comercial,
            mientras dure esa relación. Después se conservan durante los plazos legales de prescripción de posibles
            responsabilidades, bloqueados y sin uso para otros fines.
          </p>
          <h2>5. Destinatarios</h2>
          <p>
            No cedemos tus datos a terceros salvo obligación legal. Usamos proveedores que prestan servicios por nuestra
            cuenta, con las garantías exigidas por el RGPD: Vercel (alojamiento de la web), Google Firebase (base de datos
            donde se guardan los mensajes del formulario de contacto) y, solo si aceptas las cookies analíticas, Google
            Analytics (estadísticas de uso). Algunos de ellos pueden tratar datos fuera del Espacio Económico Europeo,
            amparados por el Marco de Privacidad de Datos UE-EE. UU. o por cláusulas contractuales tipo de la Comisión
            Europea.
          </p>
          <h2>6. Cookies</h2>
          <p>
            Este sitio usa una cookie técnica para recordar tus preferencias de cookies y, solo con tu consentimiento,
            cookies analíticas de Google Analytics. No usa cookies de publicidad. Los detalles están en la{" "}
            <Link href="/cookie-policy">Política de cookies</Link>.
          </p>
          <h2>7. Tus derechos</h2>
          <p>
            Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
            portabilidad escribiendo a <a href={`mailto:${TITULAR.correo}`}>{TITULAR.correo}</a>, indicando el derecho que
            ejerces y acreditando tu identidad.
          </p>
          <p>
            Si consideras que no hemos tratado tus datos correctamente, puedes reclamar ante la Agencia Española de
            Protección de Datos (
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
              www.aepd.es
            </a>
            ).
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
