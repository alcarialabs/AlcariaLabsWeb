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
  },
  {
    id: 4,
    title: "¿Cómo Elegir la Solución de IA Adecuada para tu Negocio?",
    paragraph:
      "Navegando el mundo de la IA: desde chatbots hasta análisis predictivo. Claves para identificar qué tecnología impulsará realmente tu PYME.",
    image: "/images/blog/blog-01.jpg", // Imagen Local Placeholder 1 (repetida)
    author: {
      name: "Equipo ALCARIA",
      designation: "Expertos en IA y Automatización",
      image: "/images/blog/author-01.png", // Autor Local Placeholder
    },
    tags: ["IA", "Estrategia", "PYMEs"],
    publishDate: "2024-06-28",
    slug: "elegir-solucion-ia-negocio",
  },
  {
    id: 5,
    title: "El Futuro es Wallet: Tendencias en Pagos y Fidelización Móvil",
    paragraph:
      "Mantente al día sobre cómo las billeteras digitales están cambiando las expectativas del consumidor y qué significa para tu estrategia.",
    image: "/images/blog/blog-02.jpg", // Imagen Local Placeholder 2 (repetida)
    author: {
      name: "Joan Aparicio",
      designation: "Especialista en Wallet Solutions",
      image: "/images/blog/author-01.png", // Autor Local Placeholder
    },
    tags: ["Wallet", "Tendencias", "Marketing Móvil"],
    publishDate: "2024-06-20",
    slug: "futuro-wallet-tendencias",
  },
];
export default blogData;
