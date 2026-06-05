export type ThemeId = "v1" | "v2" | "v3" | "v4";

export const themes = [
  {
    id: "v1" as const,
    slug: "v1-azul-clasico",
    name: "Clásico azul",
    desc: "Limpio, blanco y azul — como el banner que más les gustó. Ideal para catálogo y confianza.",
    heroImage: "/images/hero-clean.png",
    streetImage: "/images/hero-street.png",
  },
  {
    id: "v2" as const,
    slug: "v2-urbano-impacto",
    name: "Urbano impacto",
    tag: "En producción",
    desc: "Fondo oscuro, tipografía grande y energía streetwear. El azul marca botones y acentos.",
    heroImage: "/images/hero-prestige-street.png",
    streetImage: "/images/hero-prestige-street.png",
  },
  {
    id: "v3" as const,
    slug: "v3-premium-contraste",
    name: "Premium contraste",
    desc: "Elegante: negro profundo con acentos azul eléctrico. Sensación de marca alta.",
    heroImage: "/images/hero-prestige.png",
    streetImage: "/images/hero-clean.png",
  },
  {
    id: "v4" as const,
    slug: "v4-editorial-suave",
    name: "Editorial suave",
    desc: "Mucho aire, tarjetas redondeadas y layout tipo revista. Azul solo en detalles clave.",
    heroImage: "/images/hero-clean.png",
    streetImage: "/images/hero-prestige-street.png",
  },
] as const;

export function themeBySlug(slug: string) {
  return themes.find((t) => t.slug === slug);
}
