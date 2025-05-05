import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import AnimatedSection from "@/components/Common/AnimatedSection"; // Importar para animaciones

export const metadata: Metadata = {
  title: "Tarjetas Wallet Digitales | ALCARIA",
  description:
    "Crea y gestiona tarjetas digitales para Apple y Google Wallet. Moderniza tu negocio, fideliza clientes y optimiza la comunicación.",
};

// Componente reutilizable para items - CENTRADO
const FeatureItem = ({ icon, title, text }) => (
  // Añadir text-center aquí
  <div className="wow fadeInUp mb-8 text-center" data-wow-delay=".15s">
    {/* Centrar icono con mx-auto */}
    <div className="mx-auto mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {icon}
    </div>
    <h3 className="text-space-blue mb-3 text-2xl font-bold dark:text-white font-syne">
      {title}
    </h3>
    <p className="text-base font-medium text-body-color">{text}</p>
  </div>
);

// Nuevo componente para lista de características (alternativa visual)
const ListItem = ({ icon, title, text }) => (
  <div className="mb-6 flex items-start">
    <div className="mr-4 flex-shrink-0 text-primary">{icon}</div>
    <div>
      <h4 className="text-space-blue mb-1 text-lg font-semibold dark:text-white font-syne">
        {title}
      </h4>
      <p className="text-base text-body-color">{text}</p>
    </div>
  </div>
);

const WalletPage = () => {
  return (
    <>
      {/* Hero Section Específico para Wallet - Con Imagen */}
      <section className="bg-alc-beige relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[150px] xl:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Columna de Texto */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h1 className="text-space-blue mb-5 text-3xl font-bold leading-tight dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-syne">
                  El Futuro en su Bolsillo: Tarjetas Wallet para tu Negocio
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-2xl">
                  Conecta, fideliza y sorprende a tus clientes con tarjetas
                  digitales para Apple y Google Wallet.{" "}
                  <strong className="text-space-blue">
                    Simple, rápido y potente.
                  </strong>
                </p>
                <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#contact" // O enlace a un formulario/demo específico de Wallet
                    className="rounded-full font-syne bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Solicita una Demo
                  </Link>
                  {/* <Link href="/precios" className="...">Ver Precios</Link> */}
                </div>
              </div>
            </div>
            {/* Columna de Imagen */}
            <div className="hidden px-4 lg:block lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px]">
                <Image
                  src="/images/about/mockup_wallet_center.png" // Reutilizar imagen existente
                  alt="Tarjeta Wallet ALCARIA en Móvil"
                  fill
                  className="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios Clave */}
      <AnimatedSection>
        <section className="py-16 md:py-20 lg:py-28">
          <div className="container">
            <SectionTitle
              title="¿Por Qué Tarjetas Wallet Digitales?"
              paragraph="Descubre las ventajas de modernizar la interacción con tus clientes."
              center
              mb="60px"
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              <FeatureItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                }
                title="Mayor Engagement"
                text="Crea un canal de comunicación directo y personal con notificaciones push y ofertas relevantes."
              />
              <FeatureItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-6h6"
                    />
                  </svg> /* Icono Sugerido: CurrencyEuroIcon o similar */
                }
                title="Ahorro de Costes"
                text="Elimina gastos de impresión y distribución de tarjetas físicas. Actualizaciones instantáneas y gratuitas."
              />
              <FeatureItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l-1.5-1.5m0 0l1.5-1.5M2.25 12l1.5 1.5m16.5-1.5l1.5 1.5m0 0l-1.5 1.5m1.5-1.5l-1.5-1.5M12 6.75l2.25 2.25m0 0l2.25 2.25M14.25 9l2.25 2.25M12 6.75l-2.25 2.25m0 0l-2.25 2.25M9.75 9l-2.25 2.25M12 12.75l2.25-2.25m0 0l2.25-2.25M14.25 10.5l2.25-2.25M12 12.75l-2.25-2.25m0 0l-2.25-2.25M9.75 10.5l-2.25-2.25m10.5-3l2.25-2.25m0 0l2.25 2.25m-2.25-2.25l-2.25 2.25m-10.5 12l-2.25 2.25m0 0l-2.25-2.25m2.25 2.25l2.25-2.25"
                    />
                  </svg> /* Icono Sugerido: SparklesIcon o LeafIcon */
                }
                title="Moderno y Sostenible"
                text="Ofrece una experiencia digital actual y contribuye a la sostenibilidad eliminando el plástico."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sección Cómo Funciona - Con Iconos */}
      <AnimatedSection>
        <section className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
          <div className="container">
            <SectionTitle
              title="Crea Tarjetas Increíbles en 3 Pasos"
              paragraph={
                <>
                  Nuestra plataforma{" "}
                  <strong className="font-semibold">líder e intuitiva</strong>{" "}
                  te permite diseñar y lanzar tus tarjetas Wallet rápidamente.
                </>
              }
              center
              mb="60px"
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
              {/* Paso 1: Diseño */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white font-syne">
                  Diseña Fácilmente
                </h3>
                <p className="text-body-color">
                  Utiliza nuestro editor visual o plantillas para personalizar
                  tu tarjeta con tu marca.
                </p>
                {/* Sugerencia Imagen: Añadir aquí un pequeño screenshot/mockup del editor visual */}
              </div>
              {/* Paso 2: Distribuye */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white font-syne">
                  Distribuye al Instante
                </h3>
                <p className="text-body-color">
                  Comparte tus tarjetas fácilmente mediante enlace, QR, email o
                  intégralo en tu app/web.
                </p>
                {/* Sugerencia Imagen: Añadir aquí gráfico mostrando QR, enlace, icono de email */}
              </div>
              {/* Paso 3: Gestiona */}
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white font-syne">
                  Gestiona y Notifica
                </h3>
                <p className="text-body-color">
                  Actualiza información, envía notificaciones push y analiza el
                  rendimiento.
                </p>
                {/* Sugerencia Imagen: Añadir aquí un mini-gráfico de analítica o mockup de notificación */}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sección Características Detalladas - Nuevo Layout (Lista 2 Columnas) */}
      <AnimatedSection>
        <section className="py-16 md:py-20 lg:py-28 font-semibold font-syne text-2xl">
          <div className="container">
            <SectionTitle
              title="Funcionalidades Diseñadas para el Éxito"
              paragraph="Todas las herramientas que necesitas, fáciles de usar y potentes."
              center
              mb="60px"
            />
            {/* Usar layout de dos columnas con ListItem */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
              <ListItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                    />
                  </svg>
                }
                title={
                  <span className="font-syne font-semibold text-2xl">
                    Personalización Completa
                  </span>
                }
                text="Adapta colores, logos, campos e imágenes a tu identidad de marca."
              />
              <ListItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                    />
                  </svg>
                }
                title={
                  <span className="font-syne font-semibold text-2xl">
                    Notificaciones Push Inteligentes
                  </span>
                }
                text="Envía mensajes segmentados por geolocalización, iBeacons o datos del cliente."
              />
              <ListItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                }
                title={
                  <span className="font-syne font-semibold text-2xl">
                    Analítica Detallada
                  </span>
                }
                text="Mide instalaciones, actualizaciones, visualizaciones y redenciones para optimizar tus campañas."
              />
              <ListItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                }
                title={
                  <span className="font-syne font-semibold text-2xl">
                    Integraciones Flexibles
                  </span>
                }
                text="Conecta con tu CRM, TPV, eCommerce o herramientas de automatización (API disponible)."
              />
              <ListItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                }
                title={
                  <span className="font-syne font-semibold text-2xl">
                    Máxima Seguridad
                  </span>
                }
                text="Protección de datos GDPR y las mejores prácticas de seguridad para tu tranquilidad."
              />
              <ListItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502Z"
                    />
                  </svg>
                }
                title={
                  <span className="font-syne font-semibold text-2xl">
                    Gestión Multi-idioma
                  </span>
                }
                text="Crea y gestiona tarjetas en diferentes idiomas para alcanzar a tu audiencia global."
              />
            </div>
            {/* Sugerencia Visual: Podría ir una imagen grande o captura de pantalla de la plataforma aquí */}
          </div>
        </section>
      </AnimatedSection>

      {/* Sección Prueba Social con cliente mencionado */}
      <AnimatedSection>
        <section className="bg-gray-100 py-16 md:py-20 lg:py-28">
          <div className="container">
            <SectionTitle
              title="Clientes que Ya Vuelan con Wallet ALCARIA"
              paragraph="Descubre cómo hemos ayudado a otras empresas a transformar su comunicación."
              center
              mb="60px"
            />
            <div className="text-center">
              <p className="italic text-body-color">
                Empresas como{" "}
                <strong className="font-semibold">
                  Club Ciclista Ontinyent
                </strong>{" "}
                ya utilizan nuestras soluciones Wallet.
                {/* Sugerencia: Reemplazar con logos si se tienen */}
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sección CTA Final */}
      <AnimatedSection>
        <section className="py-16 md:py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-[600px] text-center">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl font-syne">
                ¿Listo para Modernizar tu Comunicación?
              </h2>
              <p className="mb-8 text-base text-body-color">
                Descubre todo lo que las Tarjetas Wallet pueden hacer por tu
                negocio. Solicita una demo personalizada o contacta con nuestro
                equipo.
              </p>
              <Link
                href="#contact" // O enlace específico
                className="rounded-full bg-primary px-8 py-4 text-base font-semibold font-syne text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Hablar con un Experto
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default WalletPage;
