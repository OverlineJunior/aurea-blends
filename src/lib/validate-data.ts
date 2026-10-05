import type { Category } from '../data/categories';
import type { Product } from '../data/products';

/**
 * Roda no build (os dados são importados pelas páginas estáticas):
 * referência de categoria desconhecida ou id duplicado quebram o build
 * com erro claro — nunca chegam a virar card quebrado em produção.
 */
export function validateProducts(products: Product[], categories: Category[]): void {
  const knownCategoryIds = new Set(categories.map((category) => category.id));
  const seenProductIds = new Set<string>();

  for (const product of products) {
    if (seenProductIds.has(product.id)) {
      throw new Error(`[products.ts] id de produto duplicado: "${product.id}".`);
    }
    seenProductIds.add(product.id);

    if (!knownCategoryIds.has(product.categoryId)) {
      const validIds = [...knownCategoryIds].join(', ');
      throw new Error(
        `[products.ts] O produto "${product.name}" (id: "${product.id}") usa categoryId "${product.categoryId}", que não existe em src/data/categories.ts. Categorias válidas: ${validIds}.`,
      );
    }
  }
}