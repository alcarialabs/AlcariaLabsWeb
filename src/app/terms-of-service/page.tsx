import { Metadata } from "next";
import Link from "next/link";
import { LEGAL_ACTUALIZADO, TITULAR, titularTexto } from "@/lib/titular";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Condiciones de acceso y uso del sitio web alcarialabs.com.",
  alternates: { canonical: "/terms-of-service" },
};

const TermsOfServicePage = () => {
  return (
    <main className="bg-paper pb-24 pt-36 text-ink md:pt-44">
      <div className="container">
        <h1 className="mb-12 font-display text-display-md font-extrabold text-ink">Términos y condiciones</h1>
        <div className="legal max-w-3xl">
          <p>{LEGAL_ACTUALIZADO}</p>
          <p>
            Estas condiciones regulan el acceso y uso del sitio web {TITULAR.dominio}. Al navegar por él las aceptas.
          </p>
          <h2>1. Titular</h2>
          <p>{titularTexto}</p>
          <h2>2. Carácter informativo</h2>
          <p>
            El contenido de este sitio, incluidos los artículos del blog, tiene carácter informativo y no constituye una
            oferta contractual vinculante. Las características de los servicios pueden cambiar sin previo aviso.
          </p>
          <p>
            La contratación de los servicios de {TITULAR.nombreComercial} se rige por las condiciones particulares que se
            acuerden con cada cliente, que prevalecen sobre estas.
          </p>
          <h2>3. Uso del sitio</h2>
          <p>
            Te comprometes a usar el sitio de forma lícita y diligente, sin dañar su funcionamiento ni los derechos de
            terceros.
          </p>
          <h2>4. Propiedad intelectual</h2>
          <p>
            Todos los contenidos, marcas y diseños del sitio están protegidos. No puedes reproducirlos ni explotarlos sin
            autorización previa y por escrito del titular.
          </p>
          <h2>5. Limitación de responsabilidad</h2>
          <p>
            En la medida permitida por la ley, el titular no responde de los daños derivados de la falta de disponibilidad
            del sitio, de errores en sus contenidos o del uso que se haga de la información publicada.
          </p>
          <h2>6. Modificaciones</h2>
          <p>
            El titular puede modificar estas condiciones en cualquier momento; se aplicarán desde su publicación en este
            sitio.
          </p>
          <h2>7. Legislación y jurisdicción</h2>
          <p>
            Estas condiciones se rigen por la legislación española. Para cualquier controversia, y salvo fuero imperativo
            de consumidores, serán competentes los juzgados y tribunales del domicilio del titular.
          </p>
          <p>
            Consulta también el <Link href="/aviso-legal">Aviso legal</Link> y la{" "}
            <Link href="/privacy-policy">Política de privacidad</Link>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
