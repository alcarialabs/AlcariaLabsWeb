import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | ALCARIA",
  description: "Consulta cómo ALCARIA recopila, usa y protege tu información personal de acuerdo con la normativa vigente.",
};

const PrivacyPolicyPage = () => {
  // Datos inventados para placeholders
  const companyName = "ALCARIA LABS S.L."; // Nombre legal inventado
  const websiteUrl = "https://www.alcarialabs.com"; // URL Asumida
  const contactEmail = "privacidad@alcarialabs.com";

  return (
    <main className="pt-36 pb-16 md:pb-20 lg:pb-28 md:pt-40 lg:pt-44">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold text-space-blue font-syne">Política de Privacidad</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-body-color dark:text-body-color-dark 
                     prose-headings:font-syne prose-headings:text-space-blue dark:prose-headings:text-white 
                     prose-a:text-primary hover:prose-a:underline 
                     prose-ul:list-disc prose-ul:pl-6 prose-li:my-1
                     prose-strong:text-space-blue dark:prose-strong:text-white">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          <h2>1. Información que Recopilamos</h2>
          <p>
            Recopilamos información que nos proporcionas directamente, como cuando creas una cuenta (si aplica), te suscribes a 
            nuestro boletín, solicitas una demo o te pones en contacto con nosotros a través de nuestro formulario. Esta información puede incluir tu nombre, empresa, dirección 
            de correo electrónico, número de teléfono y cualquier otra información que elijas proporcionar.
          </p>
          <p>
            También recopilamos información automáticamente cuando utilizas nuestro sitio web, como tu dirección IP, 
            tipo de navegador, proveedor de servicios de Internet (ISP), páginas de referencia/salida, sistema operativo, 
            sello de fecha/hora y datos de clics para analizar tendencias, administrar el sitio y recopilar información demográfica.
          </p>
          <h2>2. Cómo Usamos tu Información</h2>
          <p>
            Utilizamos la información que recopilamos para los siguientes propósitos:
            <ul>
                <li>Proporcionar, operar y mantener nuestros servicios y sitio web.</li>
                <li>Mejorar, personalizar y ampliar nuestros servicios y sitio web.</li>
                <li>Entender y analizar cómo utilizas nuestro sitio web y servicios.</li>
                <li>Desarrollar nuevos productos, servicios, características y funcionalidades.</li>
                <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, incluso para atención al cliente, para proporcionarte actualizaciones y otra información relacionada con el sitio web, y con fines de marketing y promoción (siempre con tu consentimiento previo cuando sea necesario).</li>
                <li>Procesar tus transacciones (si aplica).</li>
                <li>Enviarte correos electrónicos, como boletines informativos o respuestas a consultas.</li>
                <li>Encontrar y prevenir fraudes.</li>
                <li>Cumplir con obligaciones legales.</li>
            </ul>
          </p>
          <h2>3. Cómo Compartimos tu Información</h2>
          <p>
            Podemos compartir tu información personal en las siguientes situaciones:
             <ul>
                <li><strong>Con Proveedores de Servicios:</strong> Podemos compartir tu información con terceros que realizan servicios para nosotros o en nuestro nombre, como procesamiento de pagos (si aplica), análisis de datos, envío de correos electrónicos, servicios de hosting, atención al cliente y asistencia de marketing.</li>
                <li><strong>Por Transferencias Comerciales:</strong> Podemos compartir o transferir tu información en relación con, o durante negociaciones de, cualquier fusión, venta de activos de la empresa, financiación o adquisición de la totalidad o una parte de nuestro negocio por otra empresa.</li>
                <li><strong>Con tu Consentimiento:</strong> Podemos divulgar tu información personal para cualquier otro propósito con tu consentimiento explícito.</li>
                <li><strong>Por Obligaciones Legales:</strong> Podemos divulgar tu información si estamos legalmente obligados a hacerlo para cumplir con la ley aplicable, solicitudes gubernamentales, un procedimiento judicial, orden judicial o proceso legal.</li>
            </ul>
          </p>
          <p>
            No vendemos tu información personal a terceros.
          </p>
          <h2>4. Cookies y Tecnologías Similares</h2>
          <p>
            Utilizamos cookies y tecnologías similares para recopilar y rastrear información y mejorar y analizar nuestro servicio. 
            Consulta nuestra <Link href="/cookie-policy" className="text-primary hover:underline">Política de Cookies</Link> para obtener más detalles sobre las cookies que utilizamos y tus opciones.
          </p>
          <h2>5. Seguridad de tus Datos</h2>
          <p>
            La seguridad de tus datos es importante para nosotros. Implementamos medidas de seguridad técnicas y organizativas apropiadas diseñadas para proteger la seguridad de cualquier información personal que procesamos. Sin embargo, recuerda que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
          </p>
          <h2>6. Tus Derechos de Protección de Datos (RGPD)</h2>
          <p>
            Si eres residente del Espacio Económico Europeo (EEE), tienes ciertos derechos de protección de datos. {companyName} tiene como objetivo tomar medidas razonables para permitirte corregir, modificar, eliminar o limitar el uso de tus Datos Personales.
            <ul>
                <li><strong>Derecho de acceso:</strong> Tienes derecho a solicitar copias de tus datos personales.</li>
                <li><strong>Derecho de rectificación:</strong> Tienes derecho a solicitar que corrijamos cualquier información que creas que es inexacta o incompleta.</li>
                <li><strong>Derecho de supresión (derecho al olvido):</strong> Tienes derecho a solicitar que eliminemos tus datos personales, bajo ciertas condiciones.</li>
                <li><strong>Derecho a restringir el procesamiento:</strong> Tienes derecho a solicitar que restrinjamos el procesamiento de tus datos personales, bajo ciertas condiciones.</li>
                <li><strong>Derecho a oponerte al procesamiento:</strong> Tienes derecho a oponerte a nuestro procesamiento de tus datos personales, bajo ciertas condiciones.</li>
                <li><strong>Derecho a la portabilidad de datos:</strong> Tienes derecho a solicitar que transfiramos los datos que hemos recopilado a otra organización, o directamente a ti, bajo ciertas condiciones.</li>
            </ul>
            Si deseas ejercer alguno de estos derechos, por favor contáctanos en {contactEmail}. Responderemos a tu solicitud en el plazo de un mes.
            También tienes derecho a presentar una reclamación ante una Autoridad de Control de Protección de Datos sobre nuestra recopilación y uso de tus Datos Personales. Para obtener más información, ponte en contacto con tu autoridad local de protección de datos en el EEE.
          </p>
          <h2>7. Transferencias Internacionales de Datos</h2>
          <p>
            Tu información, incluidos los Datos Personales, puede ser transferida a &mdash;y mantenida en&mdash; computadoras ubicadas fuera de tu estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de tu jurisdicción. Si te encuentras fuera de España y eliges proporcionarnos información, ten en cuenta que transferimos los datos, incluidos los Datos Personales, a España y los procesamos allí.
          </p>
          <h2>8. Cambios a esta Política</h2>
          <p>
            Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de &quot;Última actualización&quot; en la parte superior. Se te aconseja revisar esta Política de Privacidad periódicamente para cualquier cambio.
          </p>
          <h2>Información de Contacto</h2>
          <p>Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos por correo electrónico en: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>.</p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage; 