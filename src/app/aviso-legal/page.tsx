import { Metadata } from "next";
import Link from "next/link";
import { LEGAL_ACTUALIZADO, TITULAR, titularTexto } from "@/lib/titular";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Datos del titular de alcarialabs.com y condiciones de uso del sitio web, conforme a la LSSI-CE.",
  alternates: { canonical: "/aviso-legal" },
};

const AvisoLegalPage = () => {
  return (
    <main className="bg-paper pb-24 pt-36 text-ink md:pt-44">
      <div className="container">
        <h1 className="mb-12 font-display text-display-md font-extrabold text-ink">Aviso legal</h1>
        <div className="legal max-w-3xl">
          <p>{LEGAL_ACTUALIZADO}</p>
          <p>
            En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico
            (LSSI-CE), se facilitan los datos del titular de {TITULAR.dominio}.
          </p>
          <h2>1. Titular del sitio web</h2>
          <p>Titular: {titularTexto}</p>
          <p>La actividad del titular no requiere inscripción en el Registro Mercantil.</p>
          <h2>2. Objeto</h2>
          <p>
            Este sitio web es informativo: presenta los servicios de {TITULAR.nombreComercial} (automatización de procesos
            con inteligencia artificial, agentes de IA, tarjetas de Apple Wallet y Google Wallet, y consultoría), publica
            artículos en su blog y permite contactar con el titular. El acceso es gratuito y atribuye la condición de
            usuario.
          </p>
          <h2>3. Condiciones de uso</h2>
          <p>
            El usuario se compromete a usar el sitio de buena fe, conforme a la ley y a este aviso, y a no realizar actos
            que dañen, inutilicen o sobrecarguen el sitio o impidan su uso normal.
          </p>
          <h2>4. Propiedad intelectual e industrial</h2>
          <p>
            Los textos, imágenes, diseños, marcas, logotipos y el código de este sitio pertenecen al titular o a terceros
            que han autorizado su uso. Queda prohibida su reproducción, distribución o transformación sin autorización
            expresa, salvo lo permitido por la ley.
          </p>
          <p>Los nombres y logotipos de terceros que aparezcan en el sitio pertenecen a sus respectivos titulares.</p>
          <h2>5. Responsabilidad</h2>
          <p>
            El titular se esfuerza por que la información sea correcta y esté actualizada, pero no garantiza la ausencia de
            errores ni la disponibilidad continua del sitio. Podrá modificar o retirar contenidos sin previo aviso.
          </p>
          <p>
            El titular no responde del contenido de sitios de terceros a los que se pueda enlazar desde esta web (por
            ejemplo, los botones para compartir artículos en redes sociales).
          </p>
          <h2>6. Privacidad y cookies</h2>
          <p>
            El tratamiento de datos personales se explica en la{" "}
            <Link href="/privacy-policy">Política de privacidad</Link> y el uso de cookies, en la{" "}
            <Link href="/cookie-policy">Política de cookies</Link>.
          </p>
          <h2>7. Legislación y jurisdicción</h2>
          <p>
            Este aviso se rige por la legislación española. Para cualquier controversia, y salvo que la normativa de
            consumidores disponga otro fuero imperativo, las partes se someten a los juzgados y tribunales del domicilio
            del titular.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AvisoLegalPage;
