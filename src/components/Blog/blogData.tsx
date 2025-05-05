import { Blog } from "@/types/blog";

// Usar imágenes locales existentes como placeholders repetidos
const blogData: Blog[] = [
  {
    id: 1,
    title: "5 Formas en que la IA está Transformando las PYMEs en 2024",
    paragraph:
      "Descubre cómo la Inteligencia Artificial ya no es solo para grandes corporaciones. Optimización de procesos, atención al cliente y más.",
    image: "/images/blog/blog-01.jpg", // Imagen Local Placeholder 1
    author: {
      name: "Equipo ALCARIA",
      designation: "Expertos en IA y Automatización",
      image: "/images/blog/author-01.png", // Autor Local Placeholder
    },
    tags: ["IA", "PYMEs", "Transformación Digital"],
    publishDate: "2024-07-15",
    slug: "ia-transformando-pymes-2024",
    content: `La Inteligencia Artificial (IA) está revolucionando la gestión de las PYMEs. Estas son 5 formas clave en que la IA está impactando en 2024:\n\n1. Automatización de tareas administrativas: La IA permite digitalizar y automatizar procesos como facturación, gestión de inventario y atención al cliente, ahorrando tiempo y reduciendo errores.\n2. Chatbots inteligentes: Mejoran la experiencia del cliente ofreciendo respuestas inmediatas y personalizadas 24/7.\n3. Análisis predictivo: Las PYMEs pueden anticipar tendencias de ventas, gestionar mejor el stock y tomar decisiones basadas en datos.\n4. Marketing personalizado: La IA segmenta audiencias y personaliza campañas, aumentando la conversión y fidelización.\n5. Optimización de recursos: Algoritmos inteligentes ayudan a reducir costes y mejorar la eficiencia operativa.\n\nEn definitiva, la IA es una aliada estratégica para que las PYMEs sean más competitivas y crezcan en el mercado actual.`
  },
  {
    id: 2,
    title: "Tarjetas Wallet: Más Allá de la Fidelización, un Canal de Comunicación",
    paragraph:
      "Explora cómo Apple Wallet y Google Wallet pueden convertirse en herramientas clave para interactuar con tus clientes de forma directa y efectiva.",
    image: "/images/blog/blog-02.jpg", // Imagen Local Placeholder 2
    author: {
      name: "Joan Aparicio",
      designation: "Especialista en Wallet Solutions",
      image: "/images/blog/author-01.png", // Autor Local Placeholder
    },
    tags: ["Wallet", "Marketing Digital", "Experiencia Cliente"],
    publishDate: "2024-07-10",
    slug: "tarjetas-wallet-canal-comunicacion",
    content: `Las tarjetas Wallet han evolucionado de simples tarjetas de fidelización a canales de comunicación directa.\n\n- Notificaciones push: Informa a tus clientes de ofertas, eventos o cambios en tiempo real.\n- Actualizaciones dinámicas: Modifica datos de la tarjeta (saldo, puntos, promociones) sin que el usuario tenga que reinstalar nada.\n- Integración con campañas: Lanza campañas segmentadas y mide resultados al instante.\n\nLas empresas que usan Wallet logran mayor engagement y una relación más cercana con sus clientes, además de reducir costes en impresión y logística.`
  },
  {
    id: 3,
    title: "Automatización Inteligente (RPA + IA): Libera el Potencial de tu Equipo",
    paragraph:
      "Elimina tareas repetitivas y permite que tu equipo se centre en lo estratégico. Casos prácticos de automatización en PYMEs.",
    image: "/images/blog/blog-03.jpg", // Imagen Local Placeholder 3
    author: {
      name: "Equipo ALCARIA",
      designation: "Expertos en IA y Automatización",
      image: "/images/blog/author-01.png", // Autor Local Placeholder
    },
    tags: ["Automatización", "RPA", "Eficiencia Operativa"],
    publishDate: "2024-07-05",
    slug: "automatizacion-inteligente-rpa-ia",
    content: `La combinación de RPA (Automatización Robótica de Procesos) e IA permite a las PYMEs automatizar tareas como la conciliación bancaria, la gestión de facturas o el seguimiento de pedidos.\n\nBeneficios:\n- Menos errores y mayor velocidad en procesos repetitivos.\n- El equipo humano se enfoca en tareas creativas y estratégicas.\n- Reducción de costes operativos.\n\nEjemplo real: Una PYME que automatizó la gestión de cobros redujo el tiempo de proceso de 3 días a solo 2 horas por semana.`
  },
  {
    id: 4,
    title: "¿Cómo Elegir la Solución de IA Adecuada para tu Negocio?",
    paragraph:
      "Navegando el mundo de la IA: desde chatbots hasta análisis predictivo. Claves para identificar qué tecnología impulsará realmente tu PYME.",
    image: "/images/blog/blog-01.jpg", // Imagen Local Placeholder 1 (repetida)
    author: {
      name: "María López",
      designation: "Consultora de Transformación Digital",
      image: "/images/blog/author-02.png", // Autor Local Placeholder
    },
    tags: ["IA", "Estrategia", "PYMEs"],
    publishDate: "2024-06-28",
    slug: "elegir-solucion-ia-negocio",
    content: `Elegir la IA adecuada requiere analizar tus procesos y objetivos.\n\nPasos recomendados:\n1. Identifica los procesos que más recursos consumen.\n2. Define qué resultados esperas (ahorro, ventas, satisfacción).\n3. Investiga proveedores y pide demos.\n4. Prioriza soluciones escalables y con soporte local.\n\nRecuerda: la mejor IA es la que se adapta a tu negocio y crece contigo.`
  },
  {
    id: 5,
    title: "El Futuro es Wallet: Tendencias en Pagos y Fidelización Móvil",
    paragraph:
      "Mantente al día sobre cómo las billeteras digitales están cambiando las expectativas del consumidor y qué significa para tu estrategia.",
    image: "/images/blog/blog-02.jpg", // Imagen Local Placeholder 2 (repetida)
    author: {
      name: "Laura Martínez",
      designation: "Especialista en Marketing Digital",
      image: "/images/blog/author-03.png", // Autor Local Placeholder
    },
    tags: ["Wallet", "Tendencias", "Marketing Móvil"],
    publishDate: "2024-06-20",
    slug: "futuro-wallet-tendencias",
    content: `Las billeteras digitales están revolucionando los pagos y la fidelización.\n\nTendencias 2025:\n- Pagos sin contacto y mayor seguridad.\n- Programas de puntos y cupones integrados en el móvil.\n- Personalización de ofertas según el perfil y la ubicación.\n\nLas marcas que adoptan Wallet ofrecen una experiencia moderna y aumentan la lealtad de sus clientes.`
  },
];
export default blogData;
