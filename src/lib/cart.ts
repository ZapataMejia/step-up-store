// Modelo del carrito y armado del mensaje de WhatsApp con el pedido completo.
// El carrito vive en localStorage (cliente); estas utilidades son puras para
// poder reutilizarlas tanto en el navegador como en pruebas.

export interface CartItem {
  /** Identidad única de la línea: id + color + talla (mismo producto en otra talla = otra línea). */
  key: string;
  id: string;
  name: string;
  reference?: string;
  /** Precio mostrado, ej. "$170.000". */
  price?: string;
  /** Precio numérico (el efectivo: promo si aplica) para calcular el total. */
  priceValue?: number;
  color?: string;
  size?: string;
  /** URL absoluta de la foto del producto (para que el enlace lleve a la imagen). */
  image?: string;
  qty: number;
}

/** Formatea pesos colombianos: 170000 -> "$170.000". */
export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Suma del carrito (precio efectivo × cantidad). */
export function cartTotal(items: CartItem[]): number {
  return items.reduce(
    (sum, it) => sum + (typeof it.priceValue === "number" ? it.priceValue * it.qty : 0),
    0
  );
}

/** Cantidad total de artículos en el carrito. */
export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, it) => sum + it.qty, 0);
}

/**
 * Arma el mensaje de WhatsApp con TODO el pedido: nombre, referencia, color,
 * talla, cantidad, precio y el enlace directo a la foto de cada producto.
 */
export function buildCartMessage(items: CartItem[]): string {
  const lines: string[] = ["Hola STEP UP STORE 👋 Quiero pedir estos productos:", ""];

  items.forEach((it, i) => {
    lines.push(`${i + 1}) ${it.name}${it.qty > 1 ? `  (x${it.qty})` : ""}`);
    if (it.reference) lines.push(`   • Ref: ${it.reference}`);
    if (it.color) lines.push(`   • Color: ${it.color}`);
    if (it.size) lines.push(`   • Talla: ${it.size}`);
    if (it.price) lines.push(`   • Precio: ${it.price}${it.qty > 1 ? " c/u" : ""}`);
    if (it.image) lines.push(`   • Foto: ${it.image}`);
    lines.push("");
  });

  const units = cartCount(items);
  const total = cartTotal(items);
  if (total > 0) {
    lines.push(`Total estimado: ${formatCOP(total)} (${units} artículo${units === 1 ? "" : "s"}).`);
  } else {
    lines.push(`Total: ${units} artículo${units === 1 ? "" : "s"}.`);
  }
  lines.push("¿Me confirman disponibilidad y el costo de envío? 🙌");
  return lines.join("\n");
}
