export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number; // USD or local currency units
  currency: "USD" | "VES";
  image: string;
  category: "ahumado" | "curry" | "dulce" | "picante" | "veggie" | "proteico";
  tags: string[];
  ingredients: string[];
  nutrition: {
    protein: string;
    calories: string;
    fiber?: string;
  };
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "bendicion-ahumada",
    name: "Bendición Ahumada",
    slug: "bendicion-ahumada",
    shortDescription: "Pollo ahumado, calabacín y zanahoria crocante",
    description:
      "El sabor seguro y reconfortante. Pollo ahumado jugoso con vegetales crocantes. Ideal para quien busca proteína sin culpa y un toque ahumado irresistible.",
    price: 4.5,
    currency: "USD",
    image: "/products/bendicion-ahumada.jpg",
    category: "ahumado",
    tags: ["proteína", "ahumado", "crocante"],
    ingredients: ["Pollo ahumado", "Calabacín", "Zanahoria", "Especias naturales"],
    nutrition: { protein: "18g", calories: "210 kcal", fiber: "4g" },
    featured: true,
    badge: "Más vendido",
  },
  {
    id: "pecado-al-curry",
    name: "Pecado al Curry",
    slug: "pecado-al-curry",
    shortDescription: "Curry, berenjena y pasas",
    description:
      "El sabor distintivo y atrevido. Un equilibrio perfecto entre el calor del curry, la suavidad de la berenjena y el toque dulce de las pasas. Para los que se atreven.",
    price: 4.8,
    currency: "USD",
    image: "/products/pecado-al-curry.jpg",
    category: "curry",
    tags: ["atrevido", "vegetales", "exótico"],
    ingredients: ["Curry", "Berenjena", "Pasas", "Proteína vegetal", "Especias"],
    nutrition: { protein: "14g", calories: "230 kcal", fiber: "6g" },
    featured: true,
    badge: "Favorito del diablito",
  },
  {
    id: "dulce-pecado",
    name: "Dulce Pecado",
    slug: "dulce-pecado",
    shortDescription: "Dulce-salado con pasas y frutos secos",
    description:
      "El gancho emocional. Contraste perfecto entre dulce y salado, con pasas y frutos secos que hacen imposible comer solo uno. Sin culpa, con mucho sabor.",
    price: 4.2,
    currency: "USD",
    image: "/products/dulce-pecado.jpg",
    category: "dulce",
    tags: ["dulce-salado", "frutos secos", "adictivo"],
    ingredients: ["Pasas", "Frutos secos", "Semillas", "Toque de miel natural"],
    nutrition: { protein: "12g", calories: "245 kcal", fiber: "5g" },
    featured: true,
    badge: "Tentación garantizada",
  },
];

export const categories = [
  { id: "all", label: "Todos" },
  { id: "ahumado", label: "Ahumados" },
  { id: "curry", label: "Curry & Especias" },
  { id: "dulce", label: "Dulce-Salado" },
  { id: "picante", label: "Picantes" },
  { id: "veggie", label: "Veggie" },
  { id: "proteico", label: "Alto en Proteína" },
] as const;
