import { site } from '../data/site';
import type { Product } from '../data/products';

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productMessage(product: Product): string {
  return `Oi, Auréa! 💛 Vi seu site e me encantei pelo kit de ${product.name}. Pode me contar mais?`;
}

export const GENERAL_MESSAGE = 'Oi, Auréa! 💛 Vim pelo site e quero saber mais sobre os blends.';