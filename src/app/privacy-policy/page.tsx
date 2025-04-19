import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | ALCARIA",
  // description: "...", // Añadir descripción relevante
};

const PrivacyPolicyPage = () => {
  return (
    <main className="pt-32 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold text-space-blue">Política de Privacidad</h1>
        <div className="prose prose-lg max-w-none text-body-color">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          <h2>1. Información que Recopilamos</h2>
          <p>
            Recopilamos información que nos proporcionas directamente, como cuando creas una cuenta, te suscribes a 
            nuestro boletín o te pones en contacto con nosotros. Esta información puede incluir tu nombre, dirección 
            de correo electrónico, número de teléfono y cualquier otra información que elijas proporcionar.
          </p>
          <p>
            También recopilamos información automáticamente cuando utilizas nuestro sitio web, como tu dirección IP, 
            tipo de navegador, páginas visitadas y el tiempo dedicado a esas páginas.
          </p>
          <h2>2. Cómo Usamos tu Información</h2>
          <p>
            Utilizamos la información que recopilamos para: [Lista de usos: Proporcionar y mejorar nuestros servicios, 
            comunicarnos contigo, personalizar tu experiencia, análisis, cumplimiento legal, etc.]
          </p>
          <h2>3. Cómo Compartimos tu Información</h2>
          <p>
            Podemos compartir tu información con: [Lista de destinatarios: Proveedores de servicios, socios comerciales, 
            fines legales, etc.]
          </p>
          <p>
            No vendemos tu información personal a terceros.
          </p>
          <h2>4. Cookies y Tecnologías Similares</h2>
          <p>
            Utilizamos cookies y tecnologías similares para recopilar información sobre tu interacción con nuestro sitio web. 
            Consulta nuestra <a href="/cookie-policy">Política de Cookies</a> para obtener más detalles.
          </p>
          <h2>5. Seguridad de tus Datos</h2>
          <p>
            Tomamos medidas razonables para proteger tu información personal contra pérdida, robo, uso indebido y acceso 
            no autorizado.
          </p>
          <h2>6. Tus Derechos</h2>
          <p>
            Dependiendo de tu ubicación, puedes tener ciertos derechos con respecto a tu información personal, 
            como el derecho a acceder, corregir, eliminar o restringir su uso.
            [Detallar cómo ejercer estos derechos]
          </p>
          <h2>7. Transferencias Internacionales de Datos</h2>
          <p>
            Tu información puede ser transferida y procesada en países distintos al tuyo donde las leyes de protección 
            de datos pueden diferir.
          </p>
          <h2>8. Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio 
            publicando la nueva política en esta página.
          </p>
          <h2>Información de Contacto</h2>
          <p>Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos en [Tu Email de Contacto].</p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage; 