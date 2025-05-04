import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio | ALCARIA",
  description: "Consulta los términos y condiciones de uso del sitio web y los servicios de ALCARIA.",
};

const TermsOfServicePage = () => {
  const websiteUrl = "https://www.alcarialabs.com";
  const contactEmail = "legal@alcarialabs.com";
  const jurisdiction = "España";

  return (
    <main className="pt-36 pb-16 md:pb-20 lg:pb-28 md:pt-40 lg:pt-44">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold text-space-blue font-syne">Términos de Servicio</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-body-color dark:text-body-color-dark
                      prose-headings:font-syne prose-headings:text-space-blue dark:prose-headings:text-white
                      prose-a:text-primary hover:prose-a:underline
                      prose-ul:list-disc prose-ul:pl-6 prose-li:my-1
                      prose-strong:text-space-blue dark:prose-strong:text-white">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          <h2>1. Introducción</h2>
          <p>
            Bienvenido a ALCARIA (<a href={websiteUrl} target="_blank" rel="noopener noreferrer">{websiteUrl}</a>). Estos términos y condiciones describen las reglas y
            regulaciones para el uso del sitio web de ALCARIA LABS S.L., ubicado en {websiteUrl}.
          </p>
          <h2>2. Aceptación de los Términos</h2>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad.
            No continúes usando el sitio web de ALCARIA si no aceptas todos los términos y condiciones establecidos
            en esta página.
          </p>
          <h2>3. Propiedad Intelectual</h2>
          <p>
            A menos que se indique lo contrario, ALCARIA LABS S.L. y/o sus licenciantes poseen los derechos de propiedad
            intelectual de todo el material en ALCARIA. Todos los derechos de propiedad intelectual están reservados.
            Puedes ver y/o imprimir páginas desde {websiteUrl} para tu propio uso personal sujeto a las
            restricciones establecidas en estos términos y condiciones.
          </p>
          <h2>4. Uso del Sitio</h2>
          <p>
            No debes:
            <ul>
                <li>Republicar material de {websiteUrl}.</li>
                <li>Vender, alquilar o sublicenciar material de {websiteUrl}.</li>
                <li>Reproducir, duplicar o copiar material de {websiteUrl}.</li>
                <li>Redistribuir contenido de ALCARIA (a menos que el contenido esté específicamente hecho para la redistribución).</li>
                <li>Utilizar este sitio web de forma que cause, o pueda causar, daño al sitio web o deterioro de la disponibilidad o accesibilidad de ALCARIA.</li>
                <li>Utilizar este sitio web de forma ilegal, fraudulenta o dañina, o en conexión con cualquier propósito o actividad ilegal, fraudulenta o dañina.</li>
            </ul>
          </p>
          <h2>5. Limitación de Responsabilidad</h2>
          <p>
            En la medida máxima permitida por la ley aplicable, ALCARIA LABS S.L. no será responsable de ninguna pérdida o daño indirecto, incidental, especial, consecuente o punitivo, o cualquier pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente, o cualquier pérdida de datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) tu acceso o uso o incapacidad para acceder o usar el servicio; (ii) cualquier conducta o contenido de cualquier tercero en el servicio; (iii) cualquier contenido obtenido del servicio; y (iv) acceso no autorizado, uso o alteración de tus transmisiones o contenido, ya sea basado en garantía, contrato, agravio (incluida negligencia) o cualquier otra teoría legal, ya sea que hayamos sido informados o no de la posibilidad de dicho daño.
          </p>
          <h2>6. Ley Aplicable</h2>
          <p>
            Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de {jurisdiction}
            y te sometes irrevocablemente a la jurisdicción exclusiva de los tribunales en esa ubicación.
          </p>
          <h2>Información de Contacto</h2>
          <p>Si tienes alguna pregunta sobre estos Términos, puedes contactarnos por correo electrónico en: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>.</p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage; 