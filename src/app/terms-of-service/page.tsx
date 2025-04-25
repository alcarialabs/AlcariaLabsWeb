import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio | ALCARIA",
  // description: "...", // Añadir descripción relevante
};

const TermsOfServicePage = () => {
  return (
    <main className="pt-32 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold text-space-blue font-syne">Términos de Servicio</h1>
        <div className="prose prose-lg max-w-none text-body-color">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          <h2>1. Introducción</h2>
          <p>
            Bienvenido a ALCARIA ([URL del Sitio Web]). Estos términos y condiciones describen las reglas y 
            regulaciones para el uso del sitio web de ALCARIA.
          </p>
          <h2>2. Aceptación de los Términos</h2>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. 
            No continúes usando el sitio web de ALCARIA si no aceptas todos los términos y condiciones establecidos 
            en esta página.
          </p>
          <h2>3. Propiedad Intelectual</h2>
          <p>
            A menos que se indique lo contrario, ALCARIA y/o sus licenciantes poseen los derechos de propiedad 
            intelectual de todo el material en ALCARIA. Todos los derechos de propiedad intelectual están reservados. 
            Puedes ver y/o imprimir páginas desde [URL del Sitio Web] para tu propio uso personal sujeto a las 
            restricciones establecidas en estos términos y condiciones.
          </p>
          <h2>4. Uso del Sitio</h2>
          <p>
            No debes: [Detallar restricciones: republicar material, vender, sublicenciar, etc.]
          </p>
          <h2>5. Limitación de Responsabilidad</h2>
          <p>
            En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones, garantías 
            y condiciones relacionadas con nuestro sitio web y el uso de este sitio web...
            [Completar con cláusulas estándar de limitación de responsabilidad]
          </p>
          <h2>6. Ley Aplicable</h2>
          <p>
            Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de [Jurisdicción, ej., España] 
            y te sometes irrevocablemente a la jurisdicción exclusiva de los tribunales en esa Estado o ubicación.
          </p>
          <h2>Información de Contacto</h2>
          <p>Si tienes alguna pregunta sobre estos Términos, puedes contactarnos en [Tu Email de Contacto].</p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage; 