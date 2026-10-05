# AGENTS.md — Auréa Blends

Site-vitrine **estático** (Astro 5 + TypeScript + CSS vanilla). Landing única, PT-BR, sem e-commerce: todo CTA leva ao WhatsApp. Leia `PLAN.md` antes de implementar — é a especificação completa.

## Comandos

```bash
npm run dev        # servidor de desenvolvimento (http://localhost:4321)
npm run build      # build de produção — deve passar sem erros nem warnings
npm run preview    # serve o build final para conferência
```

## Onde mudar o quê

| Quero mudar | Arquivo |
|---|---|
| Cores | `src/styles/tokens.css` — **único** lugar com hex |
| Tipos/categorias de produto | `src/data/categories.ts` |
| Produtos | `src/data/products.ts` (adicionar/remover objetos) |
| Textos, contatos, redes | `src/data/site.ts` |
| Depoimentos | `src/data/testimonials.ts` |

## Regras rígidas

1. **Cores:** nenhum hex fora de `tokens.css`. Componentes usam só tokens semânticos (`--color-*`).
2. **Zero rastreamento:** nada de analytics, pixels, hotjar ou fontes via CDN de terceiros. Fontes são self-hosted (`@fontsource-variable/*`).
3. **Sem preços:** o site é vitrine; CTA é sempre "Consultar no WhatsApp".
4. **Conteúdo em PT-BR**, tom acolhedor e artesanal ("feito à mão", "com carinho").
5. **Sem dependências novas** sem forte justificativa — nada de Tailwind, UI kits ou frameworks de cliente.
6. **Performance:** JS mínimo (prefira CSS puro); imagens via `<Image>` do Astro.
7. **Acessibilidade:** contraste AA, foco visível, `alt` descritivo, `prefers-reduced-motion`.

## Dicas de implementação

- **Cápsulas NÃO vão em máquina.** O texto do site sempre explica: caneca + 200 ml de água (chás) ou leite quente (café/capuccino) + mexer. A seção "Como preparar" existe exatamente para isso.
- **WhatsApp:** use o helper `src/lib/whatsapp.ts` — `https://wa.me/5545999672040?text=<encodeURIComponent(msg)>`. Nunca escreva a URL à mão nos componentes. CTAs: `target="_blank" rel="noopener noreferrer"`.
- **Categorias são dados, não código.** Filtro, grid e seções derivam de `src/data/categories.ts` + `products.ts`. Nunca hardcodar `'chas'`, `'cafe'` etc. em componentes — categoria nova no data deve aparecer sozinha no site. `categoryId` desconhecido deve quebrar o build com erro claro.
- **Fotos ainda não existem.** Use `ImagePlaceholder.astro` (emoji + gradiente creme). Quando fotos reais chegarem em `src/assets/products/`, basta preencher o campo `image` do produto — o card troca sozinho.
- **Logo é JPG com fundo creme** (`assets/aurea-logo.jpg`): coloque dentro de um container creme arredondado para o fundo camuflar.
- **Filtro de categorias:** prefira CSS-only (radio + `:checked`); JS inline só se inevitável.
- **Depoimentos e validade são placeholders** marcados com `placeholder: true` / "Consultar no rótulo" — troque pelos reais quando chegarem, sem mexer nos componentes.
- **Tipografia:** Caveat (títulos) + Nunito (corpo), já em `tokens.css`/`global.css`. Não misture outras fontes.

## Verificação antes de entregar

1. `npm run build` limpo.
2. Conferir visualmente todas as seções no preview.
3. Clicar num CTA de produto e validar a mensagem pré-preenchida no WhatsApp.
4. Nenhum request externo no Network (fontes e imagens self-hosted).
5. Lighthouse mobile ≥ 95 nas quatro categorias.
