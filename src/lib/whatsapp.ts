import { store } from "../data/store";

const fullNumber = `${store.whatsappCountry}${store.whatsappNumber}`;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${fullNumber}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultOrderMessage =
  "Hola STEP UP STORE 👋 Quiero hacer un pedido. Vi su página y me interesa: ";
