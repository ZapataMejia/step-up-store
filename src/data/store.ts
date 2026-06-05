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
  facebookUrl: "",
  facebookLabel: "Facebook",
  shippingNote: "Envíos a todo el país",
  ctaOnline: "Compra online",
} as const;

export const features = [
  { icon: "shoe", label: "Tenis top marcas" },
  { icon: "shirt", label: "Ropa urbana" },
  { icon: "quality", label: "Calidad garantizada" },
  { icon: "style", label: "Estilo que te representa" },
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
  "Escríbenos por WhatsApp con el producto o foto del catálogo.",
  "Te confirmamos talla, color, precio y formas de pago.",
  "Coordinamos envío a todo el país.",
] as const;
