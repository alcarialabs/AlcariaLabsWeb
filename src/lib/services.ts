import type { FaqItem } from "@/content/blog/types";

export type Service = {
  slug: string;
  href: string;
  index: string;
  name: string;
  kicker: string;
  /** H1 on the service page. */
  headline: string;
  seoTitle: string;
  description: string;
  /** Answer-first paragraph: what it is, for whom, outcome. */
  intro: string;
  accent: string;
  tags: string[];
  benefits: { title: string; text: string }[];
  useCases: { sector: string; text: string }[];
  deliverables: string[];
  faq: FaqItem[];
  relatedPosts: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "automatizacion-de-procesos",
    href: "/servicios/automatizacion-de-procesos",
    index: "01",
    name: "Automatización de procesos con IA",
    kicker: "Automatización",
    headline: "Automatización de procesos con IA para empresas",
    seoTitle: "Automatización de procesos con IA para PYMEs",
    description:
      "Automatizamos facturas, pedidos, informes y correos con IA, integrada en tus herramientas actuales. Menos errores, más capacidad y retorno en semanas.",
    intro:
      "La automatización de procesos con IA consiste en que el software haga por ti las tareas repetitivas que hoy hace tu equipo a mano: leer documentos, pasar datos entre programas, clasificar emails o generar informes. En ALCARIA la diseñamos a medida, la conectamos con tus herramientas actuales y la dejamos funcionando con supervisión humana donde hace falta.",
    accent: "#FF4F00",
    tags: ["RPA + IA", "Integraciones", "Documentos", "Informes"],
    benefits: [
      {
        title: "Horas de vuelta cada semana",
        text: "Eliminamos el trabajo manual entre programas para que tu equipo dedique su tiempo a clientes, ventas y decisiones.",
      },
      {
        title: "Menos errores",
        text: "Validaciones automáticas de importes, NIF, duplicados y datos incompletos antes de que lleguen a tu contabilidad o CRM.",
      },
      {
        title: "Conectado a lo que ya usas",
        text: "Email, Excel y Google Sheets, CRM, ERP, programa contable, tienda online o WhatsApp. Sin cambiar tu forma de trabajar.",
      },
      {
        title: "Escala sin contratar",
        text: "El mismo flujo procesa 50 o 5.000 documentos al mes: tu empresa crece sin que crezca la carga administrativa.",
      },
    ],
    useCases: [
      { sector: "Gestorías y despachos", text: "Lectura de facturas y extractos, clasificación contable y avisos de documentación pendiente." },
      { sector: "Distribución e industria", text: "Pedidos que llegan por email convertidos en albaranes y órdenes en el ERP sin teclear." },
      { sector: "E-commerce", text: "Sincronización de stock, seguimiento de envíos y respuestas automáticas a incidencias." },
      { sector: "Servicios profesionales", text: "Onboarding de clientes, contratos, recordatorios de cobro e informes mensuales automáticos." },
    ],
    deliverables: [
      "Mapa de procesos y cálculo de horas ahorrables",
      "Flujos automatizados en producción con registro de cada ejecución",
      "Revisión humana para excepciones",
      "Panel de métricas: tareas, tiempo ahorrado y errores",
      "Documentación y formación a tu equipo",
      "Soporte y mejora continua",
    ],
    faq: [
      {
        q: "¿Qué procesos de una empresa se pueden automatizar con IA?",
        a: "Cualquier tarea repetitiva basada en reglas o documentos: recepción y registro de facturas, entrada de pedidos, conciliaciones, respuestas a emails frecuentes, generación de informes, altas de clientes, recordatorios de cobro o sincronización de datos entre programas. La IA añade la capacidad de leer documentos y textos no estructurados.",
      },
      {
        q: "¿Cuánto tiempo se tarda en automatizar un proceso?",
        a: "Un primer proceso acotado suele estar en producción en pocas semanas: diagnóstico, construcción, pruebas con datos reales y puesta en marcha. Procesos con varias integraciones o aprobaciones llevan más. Siempre empezamos por el que más horas ahorra para que el retorno llegue cuanto antes.",
      },
      {
        q: "¿Necesito cambiar mis programas actuales?",
        a: "No. Trabajamos sobre las herramientas que ya usas (email, hojas de cálculo, CRM, ERP o programa contable) y las conectamos mediante API o integraciones. Solo recomendamos cambios cuando una herramienta bloquea de verdad la automatización.",
      },
      {
        q: "¿Qué pasa si la IA se equivoca?",
        a: "Diseñamos cada flujo con validaciones y umbrales de confianza. Cuando un dato no cuadra o la IA no está segura, el caso pasa a una persona para revisarlo. Todo queda registrado para auditar qué se hizo y por qué.",
      },
      {
        q: "¿Cuánto cuesta automatizar procesos con IA?",
        a: "Depende del número de procesos, integraciones, volumen y nivel de supervisión. Tras un diagnóstico gratuito te damos un presupuesto cerrado y una estimación de horas ahorradas para que veas el retorno antes de invertir.",
      },
    ],
    relatedPosts: [
      "cuanto-cuesta-automatizar-procesos-ia-pyme",
      "automatizar-facturas-con-ia",
      "automatizacion-inteligente-rpa-ia",
    ],
  },
  {
    slug: "agentes-ia",
    href: "/servicios/agentes-ia",
    index: "02",
    name: "Agentes de IA y chatbots",
    kicker: "Agentes IA",
    headline: "Agentes de IA y chatbots para empresas",
    seoTitle: "Agentes de IA y chatbots de WhatsApp para empresas",
    description:
      "Agentes de IA que atienden a tus clientes por web, WhatsApp y email, gestionan citas, cualifican oportunidades y actualizan tu CRM 24/7 con supervisión humana.",
    intro:
      "Un agente de IA es un asistente que entiende lenguaje natural y además actúa: consulta tus sistemas, agenda citas, crea pedidos o actualiza el CRM. En ALCARIA creamos agentes para web, WhatsApp y email entrenados con la información de tu empresa, con límites claros y paso a una persona cuando hace falta.",
    accent: "#0344DC",
    tags: ["WhatsApp", "Web", "Email", "CRM"],
    benefits: [
      {
        title: "Atención 24/7",
        text: "Respuestas inmediatas a cualquier hora, en varios idiomas y con el tono de tu marca.",
      },
      {
        title: "Actúa, no solo responde",
        text: "Reserva citas, consulta pedidos, cualifica leads y registra todo en tu CRM o agenda.",
      },
      {
        title: "Entrenado con tu negocio",
        text: "Usa tus catálogos, tarifas, políticas y preguntas frecuentes. Nada de respuestas genéricas.",
      },
      {
        title: "Humano cuando importa",
        text: "Detecta casos delicados o clientes que piden hablar con alguien y los pasa a tu equipo con el contexto completo.",
      },
    ],
    useCases: [
      { sector: "Clínicas y centros", text: "Citas, cambios y recordatorios por WhatsApp sin saturar recepción." },
      { sector: "Comercio y restauración", text: "Reservas, horarios, carta, pedidos y dudas frecuentes resueltas al momento." },
      { sector: "Ventas B2B", text: "Cualificación de leads entrantes, envío de información y agenda de reuniones comerciales." },
      { sector: "Soporte y posventa", text: "Estado de pedidos, incidencias y devoluciones conectados con tu sistema." },
    ],
    deliverables: [
      "Diseño de conversaciones y límites del agente",
      "Base de conocimiento con la información de tu empresa",
      "Integración con WhatsApp Business Platform, web y email",
      "Conexión con CRM, agenda o ERP",
      "Paso a humano y panel de conversaciones",
      "Mejora continua a partir de conversaciones reales",
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre un chatbot y un agente de IA?",
        a: "Un chatbot clásico sigue un guion o responde preguntas. Un agente de IA entiende peticiones abiertas y puede ejecutar acciones en tus sistemas: reservar una cita, consultar un pedido o crear una ficha en el CRM. Por eso resuelve la conversación completa y no solo informa.",
      },
      {
        q: "¿Se puede poner un agente de IA en WhatsApp?",
        a: "Sí. Se conecta mediante WhatsApp Business Platform de Meta, con un número verificado de tu empresa y plantillas aprobadas para los mensajes que inicias tú. El agente responde a tus clientes y deriva a una persona cuando es necesario.",
      },
      {
        q: "¿El agente puede inventarse respuestas?",
        a: "Lo limitamos para que responda solo con la información aprobada de tu empresa y con acciones concretas permitidas. Si no sabe algo, lo dice y deriva a tu equipo. Revisamos conversaciones reales para ajustar su comportamiento.",
      },
      {
        q: "¿Es compatible con el RGPD?",
        a: "Sí, si se diseña bien: informamos al usuario de que habla con una IA, minimizamos los datos personales, usamos proveedores con garantías adecuadas y dejamos registro y control de accesos. Te ayudamos a documentarlo.",
      },
      {
        q: "¿Cuánto se tarda en lanzar un agente de IA?",
        a: "Un agente con un objetivo concreto, como agendar citas o responder preguntas frecuentes, puede estar operativo en pocas semanas. Empezamos acotado, medimos y ampliamos funciones a partir de las conversaciones reales.",
      },
    ],
    relatedPosts: [
      "agentes-ia-empresas-guia-ejemplos",
      "chatbot-whatsapp-ia-empresas",
      "agentes-ia-revolucion-pymes-2025",
    ],
  },
  {
    slug: "tarjetas-wallet",
    href: "/wallet",
    index: "03",
    name: "Tarjetas Apple y Google Wallet",
    kicker: "Wallet",
    headline: "Tarjetas de fidelización para Apple Wallet y Google Wallet",
    seoTitle: "Tarjetas Apple Wallet y Google Wallet para empresas",
    description:
      "Tarjetas de fidelización, socio y cupones para Apple Wallet y Google Wallet, con avisos en la pantalla de bloqueo y datos en tiempo real. Sin apps ni plástico.",
    intro:
      "Las tarjetas Wallet son tarjetas digitales de fidelización, socio, cupón o entrada que tus clientes guardan en el Apple Wallet o Google Wallet del móvil sin descargar ninguna app. En ALCARIA las diseñamos con tu marca, las conectamos con tu sistema y te dejamos enviar avisos que aparecen en la pantalla de bloqueo.",
    accent: "#E3CC9C",
    tags: ["Fidelización", "Socios", "Cupones", "Push"],
    benefits: [],
    useCases: [],
    deliverables: [],
    faq: [],
    relatedPosts: [
      "tarjetas-fidelizacion-apple-google-wallet-comercios",
      "tarjetas-wallet-canal-comunicacion",
      "futuro-wallet-tendencias",
    ],
  },
  {
    slug: "consultoria-ia",
    href: "/servicios/consultoria-ia",
    index: "04",
    name: "Consultoría e implantación de IA",
    kicker: "Consultoría",
    headline: "Consultoría de inteligencia artificial para PYMEs",
    seoTitle: "Consultoría de IA para PYMEs: estrategia e implantación",
    description:
      "Diagnóstico de procesos, hoja de ruta de IA con retorno cuantificado, formación de equipos e implantación segura. Estrategia aplicada y orientada a resultados.",
    intro:
      "La consultoría de IA de ALCARIA te dice qué merece la pena automatizar en tu empresa, en qué orden y con qué retorno esperado, y después te acompaña a implantarlo. Analizamos tus procesos, priorizamos casos de uso por impacto y esfuerzo, formamos a tu equipo y establecemos reglas de uso seguro de la IA.",
    accent: "#8FB3FF",
    tags: ["Diagnóstico", "Hoja de ruta", "Formación", "Gobierno IA"],
    benefits: [
      {
        title: "Prioridades claras",
        text: "Una lista de casos de uso ordenada por impacto, esfuerzo y riesgo, con horas y costes estimados.",
      },
      {
        title: "Decisiones con números",
        text: "Cálculo del retorno de cada iniciativa antes de invertir un euro en desarrollo.",
      },
      {
        title: "Equipo preparado",
        text: "Formación práctica para que tu gente use la IA a diario con criterio y buenas prácticas.",
      },
      {
        title: "Uso seguro y responsable",
        text: "Política de uso, protección de datos y supervisión humana alineadas con el RGPD y el marco europeo de IA.",
      },
    ],
    useCases: [
      { sector: "Dirección", text: "Hoja de ruta de IA a 12 meses conectada con los objetivos del negocio." },
      { sector: "Operaciones", text: "Detección de cuellos de botella y oportunidades de automatización por departamento." },
      { sector: "Equipos", text: "Talleres de IA generativa aplicada a su trabajo real: redacción, análisis, atención." },
      { sector: "Cumplimiento", text: "Inventario de herramientas de IA, riesgos y política interna de uso." },
    ],
    deliverables: [
      "Entrevistas y mapa de procesos",
      "Matriz de casos de uso por impacto y esfuerzo",
      "Estimación de retorno por iniciativa",
      "Hoja de ruta por fases",
      "Formación práctica para el equipo",
      "Política de uso de IA y protección de datos",
    ],
    faq: [
      {
        q: "¿Por dónde empieza una PYME a usar inteligencia artificial?",
        a: "Por un problema concreto y medible, no por la herramienta. Identifica tareas repetitivas que consumen horas o cuellos de botella con clientes, calcula su coste actual y elige un piloto pequeño con retorno claro. A partir de los resultados, se amplía.",
      },
      {
        q: "¿Qué incluye una consultoría de IA?",
        a: "Diagnóstico de procesos, detección y priorización de casos de uso, estimación de retorno, hoja de ruta por fases, recomendaciones de herramientas, formación del equipo y pautas de uso seguro. En ALCARIA también podemos ejecutar la implantación.",
      },
      {
        q: "¿La consultoría de IA sirve para empresas pequeñas?",
        a: "Sí, especialmente. Una PYME tiene menos margen para probar herramientas a ciegas, así que un diagnóstico corto evita gastar en soluciones que no encajan y concentra la inversión en lo que más horas o ventas aporta.",
      },
      {
        q: "¿Cómo afecta la normativa europea de IA a mi empresa?",
        a: "La mayoría de usos habituales en PYMEs, como automatizar tareas o atender clientes, son de riesgo bajo, pero conviene aplicar transparencia, supervisión humana y protección de datos. Te ayudamos a inventariar tus usos de IA y a documentar buenas prácticas.",
      },
    ],
    relatedPosts: [
      "elegir-solucion-ia-negocio",
      "ia-transformando-pymes-2024",
      "cuanto-cuesta-automatizar-procesos-ia-pyme",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/** Services that have their own page under /servicios/[slug]. */
export const SERVICE_PAGES = SERVICES.filter((s) => s.href.startsWith("/servicios/"));

export const PROCESS = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Analizamos tus procesos, detectamos los cuellos de botella y cuantificamos el ahorro potencial en horas y euros.",
  },
  {
    step: "02",
    title: "Diseño",
    text: "Priorizamos las iniciativas por retorno y diseñamos una solución a medida sobre tus sistemas actuales.",
  },
  {
    step: "03",
    title: "Lanzamiento",
    text: "Desarrollamos, validamos con datos reales y ponemos en producción en semanas, con formación para tu equipo.",
  },
  {
    step: "04",
    title: "Evolución",
    text: "Medimos, optimizamos y ampliamos el alcance. Actuamos como tu equipo de IA a largo plazo.",
  },
];

export const HOME_FAQ: FaqItem[] = [
  {
    q: "¿Qué hace ALCARIA?",
    a: "ALCARIA es una empresa española que automatiza procesos con inteligencia artificial, desarrolla agentes de IA y chatbots para web y WhatsApp, ofrece consultoría de IA y crea tarjetas de fidelización para Apple Wallet y Google Wallet. Trabajamos con empresas y PYMEs para reducir tareas repetitivas y mejorar la relación con sus clientes.",
  },
  {
    q: "¿Cuánto cuesta automatizar procesos con IA en una PYME?",
    a: "Depende de cuántos procesos, integraciones y volumen de trabajo haya. Lo habitual es empezar con un proceso acotado de alto retorno. En ALCARIA hacemos un diagnóstico gratuito y te damos un presupuesto cerrado junto con una estimación de horas ahorradas antes de empezar.",
  },
  {
    q: "¿En cuánto tiempo se ven resultados?",
    a: "Un primer proceso automatizado o un agente con un objetivo concreto suele estar funcionando en pocas semanas. Empezamos por lo que más tiempo consume para que el ahorro se note desde el primer mes.",
  },
  {
    q: "¿Tengo que cambiar mis programas o herramientas?",
    a: "No. Nos integramos con lo que ya usas: email, Excel o Google Sheets, CRM, ERP, programa contable, tienda online o WhatsApp. Solo proponemos cambios si una herramienta impide automatizar.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Diseñamos cada solución con minimización de datos, control de accesos, registro de actividad, supervisión humana y proveedores con garantías conforme al RGPD. Tus datos se usan solo para tu solución.",
  },
  {
    q: "¿Trabajáis con empresas de toda España?",
    a: "Sí. Trabajamos en remoto con empresas de toda España y nos desplazamos cuando el proyecto lo requiere. La primera reunión de diagnóstico es gratuita y por videollamada.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Juanvi Aparici",
    role: "Club Ciclista Ontinyent",
    image: "/images/testimonials/juanvi.jpeg",
    quote:
      "Gracias a ALCARIA, nuestro club ha optimizado la gestión de nuestras tarjetas para Wallet y el sistema de cupones automatizados. Ahora, nuestros socios disfrutan de una experiencia más fluida y eficiente. Sin duda un acierto confiar en ellos.",
    service: "Wallet",
  },
  {
    name: "Jorge Guillem",
    role: "Propietario · Origen Padel",
    quote:
      "Con la implementación de tarjetas dinámicas para Wallet, ALCARIA nos ha permitido ofrecer a nuestros clientes una experiencia digital moderna y personalizada. La fidelización y la interacción con nuestros jugadores han mejorado notablemente.",
    service: "Wallet",
  },
  {
    name: "Jose Vicent",
    role: "Propietario · Cestería Vicent",
    quote:
      "ALCARIA ha revolucionado nuestra gestión interna con una automatización eficiente de facturas y pedidos. Hemos reducido tiempos administrativos y ahora podemos centrarnos en lo que realmente importa: ofrecer el mejor servicio a nuestros clientes.",
    service: "Automatización",
  },
];

export const STATS = [
  { value: 50, prefix: "+", suffix: "", label: "Procesos automatizados" },
  { value: 98, prefix: "", suffix: "%", label: "Satisfacción de clientes" },
  { value: 3, prefix: "", suffix: "×", label: "ROI medio generado" },
];
