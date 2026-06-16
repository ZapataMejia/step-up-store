import { store } from "../data/store";

const fullNumber = `${store.whatsappCountry}${store.whatsappNumber}`;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${fullNumber}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultOrderMessage =
  "Hola STEP UP STORE 👋 Quiero hacer un pedido. Vi su página y me interesa: ";

export interface ProductMessageInput {
  name: string;
  reference?: string;
  price?: string;
  color?: string;
  size?: string;
  url?: string;
}

/**
 * Arma el mensaje pre-cargado de WhatsApp para un producto puntual, de modo que
 * quien recibe el chat sepa exactamente qué producto le interesa al cliente.
 */
export function productMessage(p: ProductMessageInput): string {
  const lines: string[] = [
    "Hola STEP UP STORE 👋 Me interesa este producto:",
    "",
    `• Producto: ${p.name}`,
  ];
  if (p.reference) lines.push(`• Referencia: ${p.reference}`);
  if (p.color) lines.push(`• Color: ${p.color}`);
  if (p.size) lines.push(`• Talla: ${p.size}`);
  if (p.price) lines.push(`• Precio: ${p.price}`);
  if (p.url) lines.push("", p.url);
  lines.push("", "¿Está disponible?");
  return lines.join("\n");
}

export function productWhatsappUrl(p: ProductMessageInput): string {
  return whatsappUrl(productMessage(p));
}
