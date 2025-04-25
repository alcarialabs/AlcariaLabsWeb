import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | ALCARIA",
  // description: "...", // Añadir descripción relevante
};

const CookiePolicyPage = () => {
  return (
    <main className="pt-32 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold text-space-blue font-syne">Política de Cookies</h1>
        <div className="prose prose-lg max-w-none text-body-color">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo mientras navegas. 
            Se utilizan ampliamente para que los sitios web funcionen, o funcionen de manera más eficiente, así como 
            para proporcionar información a los propietarios del sitio.
          </p>
          <h2>2. ¿Cómo utilizamos las cookies?</h2>
          <p>
            Utilizamos cookies para [Detallar usos: ej., mejorar la experiencia de usuario, recordar preferencias, 
            analizar el tráfico del sitio (con Google Analytics, si aplica), etc.].
          </p>
          <h3>Tipos de cookies que utilizamos:</h3>
          <ul>
            <li><strong>Cookies esenciales/técnicas:</strong> Necesarias para el funcionamiento del sitio web.</li>
            <li><strong>Cookies de análisis/rendimiento:</strong> Nos permiten reconocer y contar el número de visitantes y ver cómo se mueven por el sitio.</li>
            {/* Añadir otros tipos si aplica (funcionales, de publicidad) */}
          </ul>
          <h2>3. Gestión de cookies</h2>
          <p>
            Puedes gestionar y/o eliminar cookies como desees. Para más detalles, consulta aboutcookies.org. 
            Puedes eliminar todas las cookies que ya están en tu ordenador y configurar la mayoría de los navegadores 
            para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente 
            algunas preferencias cada vez que visites un sitio y que algunos servicios y funcionalidades no funcionen.
          </p>
          {/* Añadir información sobre el banner de consentimiento y cómo cambiar las preferencias */}
          <h2>Información de Contacto</h2>
          <p>Si tienes alguna pregunta sobre nuestro uso de cookies, puedes contactarnos en [Tu Email de Contacto].</p>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage; 