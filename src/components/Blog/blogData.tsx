import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Automatización: El camino hacia la eficiencia empresarial",
    paragraph:
      "Descubre cómo la automatización de procesos puede transformar la operativa de tu empresa, reduciendo costos y mejorando la productividad.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Ana García",
      image: "/images/blog/author-01.png",
      designation: "Experta en Transformación Digital",
    },
    tags: ["automatización", "eficiencia"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Integración de Inteligencia Artificial en PYMEs",
    paragraph:
      "La inteligencia artificial se ha convertido en un aliado clave para las pequeñas y medianas empresas. Conoce cómo implementarla de forma sencilla.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Luis Fernández",
      image: "/images/blog/author-02.png",
      designation: "Consultor de IA",
    },
    tags: ["IA", "transformación"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Casos de Éxito: Empresas que Transformaron su Operativa",
    paragraph:
      "Lee los casos de éxito de empresas que, gracias a ALCARIA, han optimizado sus procesos y alcanzado nuevos niveles de productividad.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "María Rodríguez",
      image: "/images/blog/author-03.png",
      designation: "Analista de Negocios",
    },
    tags: ["casos de éxito", "innovación"],
    publishDate: "2025",
  },
];

export default blogData;
