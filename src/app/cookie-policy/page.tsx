import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | ALCARIA",
  description: "Descubre qué cookies utiliza ALCARIA y cómo puedes gestionarlas.",
};

const CookiePolicyPage = () => {
  const websiteName = "ALCARIA";
  const contactEmail = "privacidad@alcarialabs.com";

  return (
    <main className="pt-36 pb-16 md:pb-20 lg:pb-28 md:pt-40 lg:pt-44">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold text-space-blue font-syne">Política de Cookies</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-body-color dark:text-body-color-dark
                      prose-headings:font-syne prose-headings:text-space-blue dark:prose-headings:text-white
                      prose-a:text-primary hover:prose-a:underline
                      prose-ul:list-disc prose-ul:pl-6 prose-li:my-1
                      prose-strong:text-space-blue dark:prose-strong:text-white">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo (ordenador, tableta, móvil) mientras navegas.
            Se utilizan ampliamente para que los sitios web funcionen, o funcionen de manera más eficiente, así como
            para proporcionar información a los propietarios del sitio y recordar tus preferencias.
          </p>
          <h2>2. ¿Cómo utilizamos las cookies?</h2>
          <p>
            En {websiteName}, utilizamos cookies para varios propósitos, principalmente para:
            <ul>
                <li><strong>Garantizar el funcionamiento técnico del sitio:</strong> Algunas cookies son esenciales para que puedas navegar por el sitio y utilizar sus funciones.</li>
                <li><strong>Gestionar tu consentimiento:</strong> Utilizamos una cookie para recordar tus preferencias sobre el consentimiento de cookies y no volver a preguntarte durante un tiempo.</li>
                <li><strong>Analizar el uso del sitio web (Analytics):</strong> Si das tu consentimiento, utilizamos cookies de terceros (Google Analytics) para recopilar información anónima sobre cómo los visitantes utilizan nuestro sitio web. Esto nos ayuda a entender qué páginas son más populares, cómo llegan los usuarios al sitio y a mejorar la experiencia general. Google Analytics recopila información como tu dirección IP (anonimizada), páginas visitadas, tiempo de permanencia y tipo de navegador.</li>
                {/* Añadir si se usan cookies de Marketing/Publicidad */}
                {/* <li><strong>Personalización y Marketing:</strong> Podríamos usar cookies para mostrar contenido o publicidad relevante basada en tus intereses (siempre con tu consentimiento).</li> */}
            </ul>
          </p>
          <h3>Tipos de cookies que utilizamos:</h3>
          <ul>
            <li><strong>Cookies Necesarias/Técnicas:</strong> Siempre activas. Son esenciales para el funcionamiento básico del sitio y para gestionar tu consentimiento. Incluyen, por ejemplo, la cookie `AlcariaCookieConsentPreferences` que guarda tus elecciones.</li>
            <li><strong>Cookies de Análisis/Rendimiento (Opcionales):</strong> Solo se activan si das tu consentimiento. Usamos Google Analytics para obtener estadísticas agregadas y anónimas sobre el uso del sitio. Estas cookies nos ayudan a mejorar nuestro contenido y la navegación.</li>
            {/* Añadir otras categorías si aplica */}
          </ul>
           <p>Puedes encontrar más información sobre las cookies de Google Analytics y la privacidad de Google <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer">aquí</a>.</p>
          <h2>3. Gestión de cookies</h2>
          <p>
            Tienes control total sobre las cookies. Cuando visitas nuestro sitio por primera vez, te aparece un banner donde puedes aceptar todas las cookies, rechazar las opcionales o configurar tus preferencias por categoría. Puedes cambiar tus preferencias en cualquier momento (normalmente a través de un enlace o botón en el pie de página o en esta misma política - *Nota: actualmente no hemos implementado un botón para reabrir el banner*).
          </p>
          <p>
            Además, puedes gestionar y/o eliminar cookies almacenadas en tu navegador. Para más detalles sobre cómo hacerlo en tu navegador específico, consulta <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.
            Ten en cuenta que si bloqueas o eliminas ciertas cookies (especialmente las necesarias), es posible que algunas partes de nuestro sitio web no funcionen correctamente.
          </p>
          <h2>4. Cambios en la Política de Cookies</h2>
           <p>Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que usamos o por otras razones operativas, legales o regulatorias. Por favor, visita esta página regularmente para mantenerte informado sobre nuestro uso de cookies.</p>

          <h2>Información de Contacto</h2>
          <p>Si tienes alguna pregunta sobre nuestro uso de cookies, puedes contactarnos por correo electrónico en: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>.</p>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage; 