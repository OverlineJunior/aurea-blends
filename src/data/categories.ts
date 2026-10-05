export interface Category {
  /** slug único, ex.: 'chas' */
  id: string;
  /** ex.: 'Chás' */
  label: string;
  /** ex.: '🍵' — usado no filtro e nas artes */
  emoji?: string;
  description?: string;
}

// Tipos de produto são DADOS, não código: uma categoria nova aqui aparece
// sozinha no filtro, no grid e nas artes — sem tocar em nenhum componente.
export const categories: Category[] = [
  { id: 'chas', label: 'Chás', emoji: '🍵' },
  { id: 'cafe', label: 'Cafés', emoji: '☕' },
  { id: 'capuccino', label: 'Capuccinos', emoji: '🥛' },
  { id: 'pirulitos', label: 'Pirulitos para drinks', emoji: '🍭' },
];

// id duplicado deve quebrar o build, nunca virar filtro quebrado em produção
const seenIds = new Set<string>();
for (const category of categories) {
  if (seenIds.has(category.id)) {
    throw new Error(`[categories.ts] id de categoria duplicado: "${category.id}".`);
  }
  seenIds.add(category.id);
}