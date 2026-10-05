import { categories } from './categories';
import { validateProducts } from '../lib/validate-data';

export interface Product {
  /** slug único, ex.: 'cha-branco-mirtilo' */
  id: string;
  name: string;
  /** deve existir em categories.ts — referência desconhecida quebra o build com erro claro */
  categoryId: string;
  ingredients: string[];
  /** 1–2 frases convidativas, exibidas no card */
  description: string;
  /** ex.: 'Caixinha com 6 cápsulas' */
  kit: string;
  /** ex.: '~35 g por cápsula' (confirmar com a dona: pode ser por kit) */
  weight?: string;
  /** placeholder enquanto a validade real não chegar */
  validity?: string;
  /** nome do arquivo em src/assets/products/ (ex.: 'matcha.jpg'); ausente → ImagePlaceholder */
  image?: string;
  /** arte do placeholder, ex.: '🫐' */
  emoji?: string;
  /** aparece em destaque no topo da seção */
  featured?: boolean;
}

export const DEFAULT_KIT = 'Caixinha com 6 cápsulas';

// confirmar com a dona: o peso de ~35 g é por cápsula ou por kit?
const CAPSULE_WEIGHT = '~35 g por cápsula';
const VALIDITY_PLACEHOLDER = 'Consultar no rótulo';

export const products: Product[] = [
  // ── Chás ──────────────────────────────────────────────
  {
    id: 'cha-branco-goji-mirtilo',
    name: 'Chá Branco com Goji Berry, Mirtilo e Calêndula',
    categoryId: 'chas',
    ingredients: ['chá branco', 'goji berry', 'mirtilo', 'calêndula'],
    description: 'Leve e floral, com pontadas frutadas: um abraço delicado para desacelerar.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🫐',
  },
  {
    id: 'cha-branco-hibisco-camomila',
    name: 'Chá Branco com Hibisco, Camomila e Rosa Branca',
    categoryId: 'chas',
    ingredients: ['chá branco', 'hibisco', 'camomila', 'rosa branca'],
    description: 'Suave como um fim de tarde: camomila para acalmar e pétalas para perfumar o momento.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🌸',
  },
  {
    id: 'cha-branco-maca-limao',
    name: 'Chá Branco com Maçã Verde, Limão Siciliano e Hortelã',
    categoryId: 'chas',
    ingredients: ['chá branco', 'maçã verde', 'limão siciliano', 'hortelã'],
    description: 'Fresh e revigorante: o doce da maçã verde encontrando o frescor do limão com hortelã.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍏',
  },
  {
    id: 'cha-preto-pessego-baunilha',
    name: 'Chá Preto com Pêssego e Baunilha',
    categoryId: 'chas',
    ingredients: ['chá preto', 'pêssego', 'baunilha'],
    description: 'Aconchegante e dourado: pêssego suculento abraçado pela baunilha, perfeito para a tarde.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍑',
  },
  {
    id: 'cha-preto-limao-cardamomo',
    name: 'Chá Preto com Limão Siciliano, Hortelã e Cardamomo',
    categoryId: 'chas',
    ingredients: ['chá preto', 'limão siciliano', 'hortelã', 'cardamomo'],
    description: 'Cítrico e aromático, com o toque especiado do cardamomo para despertar os sentidos.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍋',
  },
  {
    id: 'cha-preto-frutas-vermelhas',
    name: 'Chá Preto com Hibisco, Mirtilo e Frutas Vermelhas',
    categoryId: 'chas',
    ingredients: ['chá preto', 'hibisco', 'mirtilo', 'frutas vermelhas'],
    description: 'Intenso e frutado — uma festa de cores e sabores em cada rosa.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍓',
  },
  {
    id: 'cha-verde-laranja-capim-limao',
    name: 'Chá Verde com Laranja e Capim-Limão',
    categoryId: 'chas',
    ingredients: ['chá verde', 'laranja', 'capim-limão'],
    description: 'Leve e solar: laranja e capim-limão para respirar fundo e recomeçar.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍊',
  },
  {
    id: 'cha-verde-hibisco-morango',
    name: 'Chá Verde com Hibisco e Morango',
    categoryId: 'chas',
    ingredients: ['chá verde', 'hibisco', 'morango'],
    description: 'O doce do morango em harmonia com o frescor do hibisco. Um chá que sorri.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍓',
  },
  {
    id: 'matcha-coco-baunilha',
    name: 'Matcha com Coco e Baunilha',
    categoryId: 'chas',
    ingredients: ['matcha', 'coco', 'baunilha'],
    description: 'Cremoso e envolvente: o matcha encontra o coco e a baunilha em perfeita sintonia.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍵',
    featured: true,
  },
  {
    id: 'fada-azul-mirtilo-baunilha',
    name: 'Fada Azul com Mirtilo e Baunilha',
    categoryId: 'chas',
    ingredients: ['fada azul', 'mirtilo', 'baunilha'],
    description: 'Encantador e cheio de magia: um blend que muda de cor e transforma a caneca.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '💙',
    featured: true,
  },
  {
    id: 'tangerina-rosa-cardamomo',
    name: 'Tangerina, Laranja, Rosa Branca e Cardamomo',
    categoryId: 'chas',
    ingredients: ['tangerina', 'laranja', 'rosa branca', 'cardamomo'],
    description: 'Cítrico e floral, com pétalas de rosa e o calor do cardamomo. Puro encanto.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍊',
  },
  {
    id: 'anis-gengibre-morango',
    name: 'Anis Estrelado com Gengibre e Morango',
    categoryId: 'chas',
    ingredients: ['anis estrelado', 'gengibre', 'morango'],
    description: 'Quentinho e acolhedor: o doce do anis, o toque do gengibre e morango para finalizar.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🫚',
  },

  // ── Café ──────────────────────────────────────────────
  {
    id: 'cafe-puro',
    name: 'Café Puro',
    categoryId: 'cafe',
    ingredients: ['café'],
    description: 'O clássico que nunca falha: café puro, encorpado e feito à mão, pronto na sua caneca.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '☕',
  },

  // ── Capuccino ─────────────────────────────────────────
  // variações "café, leite e chocolate" interpretadas do Q&A — confirmar com a dona
  {
    id: 'capuccino',
    name: 'Capuccino',
    categoryId: 'capuccino',
    ingredients: ['café', 'leite', 'chocolate'],
    description: 'Cremoso e aconchegante: café, leite e chocolate se encontrando na medida certa.',
    kit: DEFAULT_KIT,
    weight: CAPSULE_WEIGHT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '☕',
    featured: true,
  },

  // ── Pirulitos para drinks ─────────────────────────────
  {
    id: 'pirulito-frutas-vermelhas',
    name: 'Pirulito de Frutas Vermelhas com Pimenta Rosa e Gengibre',
    categoryId: 'pirulitos',
    ingredients: ['frutas vermelhas', 'pimenta rosa', 'gengibre'],
    description: 'Seu drink que floresce: agite com a bebida preferida e surpreenda todo mundo.',
    kit: DEFAULT_KIT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍓',
  },
  {
    id: 'pirulito-tangerina-especiarias',
    name: 'Pirulito de Tangerina com Cardamomo, Maçã e Laranja',
    categoryId: 'pirulitos',
    ingredients: ['tangerina', 'cardamomo', 'maçã', 'laranja'],
    description: 'Cítrico e especiado para brindar com estilo — do primeiro ao último gole.',
    kit: DEFAULT_KIT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍊',
  },
  {
    id: 'pirulito-limao-hortela-anis',
    name: 'Pirulito de Limão Siciliano com Hortelã e Anis Estrelado',
    categoryId: 'pirulitos',
    ingredients: ['limão siciliano', 'hortelã', 'anis estrelado'],
    description: 'Fresh e aromático: o toque final que o seu drink merecia.',
    kit: DEFAULT_KIT,
    validity: VALIDITY_PLACEHOLDER,
    emoji: '🍋',
  },
];

// referência de categoria desconhecida ou id duplicado quebram o build aqui
validateProducts(products, categories);