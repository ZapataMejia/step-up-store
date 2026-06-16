export const store = {
  name: "STEP UP",
  nameAccent: "STORE",
  tagline: "Tenis y ropa · Tu estilo, tu actitud",
  sloganLine1: "Viste tu mejor",
  sloganLine2: "versión",
  valueProp: "Las mejores marcas. Un solo lugar.",
  heroExtended:
    "Ropa, tenis, deportivo, accesorios, hogar y más — todo para tu imagen y tu día a día.",
  whatsappCountry: "57",
  whatsappNumber: "3043510104",
  whatsappDisplay: "304 351 0104",
  instagramUrl: "https://www.instagram.com/stepupstore",
  instagramHandle: "@stepupstore",
  shippingNote: "Envíos a todo el país",
  ctaOnline: "Compra online",
} as const;

export const developer = {
  name: "ZapataMejia",
  url: "https://github.com/ZapataMejia",
} as const;

export const features = [
  {
    icon: "shoe",
    title: "Marcas que sí reconoces",
    desc: "Nike, Adidas, Jordan, New Balance y más, seleccionados a mano.",
  },
  {
    icon: "search",
    title: "Catálogo directo en la página",
    desc: "Explora, busca por marca o color y elige sin pasar por nadie.",
  },
  {
    icon: "truck",
    title: "Envíos a todo el país",
    desc: "Coordinamos tu envío seguro a cualquier ciudad de Colombia.",
  },
  {
    icon: "chat",
    title: "Pides por WhatsApp",
    desc: "Un clic en el producto y listo: nosotros confirmamos talla y pago.",
  },
] as const;

export const trustBadges = [
  { icon: "cart", label: "Compra online" },
  { icon: "truck", label: "Envíos a todo el país" },
  { icon: "quality", label: "Productos de calidad" },
  { icon: "secure", label: "Pagos seguros" },
] as const;

export const categories = [
  {
    slug: "tenis",
    title: "Tenis",
    description: "Marcas top para diario, deporte y colección.",
    emoji: "👟",
  },
  {
    slug: "ropa",
    title: "Ropa",
    description: "Sudaderas, camisetas, pants y sportswear urbano.",
    emoji: "👕",
  },
  {
    slug: "deportivo",
    title: "Deportivo",
    description: "Ropa y equipo para entrenar y rendir.",
    emoji: "🏃",
  },
  {
    slug: "accesorios",
    title: "Accesorios",
    description: "Gorras, correas, pads y detalles que completan el look.",
    emoji: "🧢",
  },
  {
    slug: "hogar",
    title: "Hogar",
    description: "Mantas, cobijas y detalles para tu espacio.",
    emoji: "🛏️",
  },
  {
    slug: "cuidado",
    title: "Cuidado personal",
    description: "Lociones y productos que piden tus clientes.",
    emoji: "✨",
  },
] as const;

export const brands = [
  "Nike",
  "Adidas",
  "Champion",
  "New Balance",
  "Vans",
  "Puma",
  "Jordan",
  "Stüssy",
  "Yankees",
] as const;

export const catalogLinks: readonly { label: string; href: string }[] = [];

export const paymentMethods = [
  {
    id: "addi",
    title: "Addi",
    description:
      "Financia tu compra y paga a cuotas. Al pedir por WhatsApp te indicamos cómo aplicar con Addi.",
    status: "active" as const,
    href: "https://co.addi.com/",
  },
  {
    id: "sistecredito",
    title: "Sistecrédito",
    description:
      "Compra ahora y paga después con Sistecrédito. Consulta disponibilidad y cupo al hacer tu pedido.",
    status: "active" as const,
    href: "https://www.sistecredito.com/",
  },
  {
    id: "credito-personal",
    title: "Crédito personal",
    description:
      "Para clientes conocidos de confianza: acordamos plazos y condiciones al confirmar el pedido.",
    status: "active" as const,
  },
] as const;

export const howToBuy = [
  "Explora el catálogo y entra a la categoría que buscas.",
  "Cuando veas lo que te gusta, toca “Lo quiero” y se abre WhatsApp con el producto listo.",
  "Confirmamos talla, color y pago, y coordinamos el envío a todo el país.",
] as const;
