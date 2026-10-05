export interface Testimonial {
  text: string;
  name: string;
  city: string;
  /** true enquanto for exemplo — troque pelos reais quando chegarem, sem mexer nos componentes */
  placeholder?: boolean;
}

// Depoimentos PLACEHOLDER: parecem intencionais de propósito.
// Quando os reais chegarem, troque texto/nome/cidade e remova a flag.
export const testimonials: Testimonial[] = [
  {
    text: 'Momento de autocuidado perfeito 🧡 O blend chegou lindo, parece mesmo uma joia — e o sabor é incrível.',
    name: 'Maria',
    city: 'Foz do Iguaçu — PR',
    placeholder: true,
  },
  {
    text: 'O capuccino em cápsula virou o ritual da minha tarde: caneca, leite quente, mexer e amar.',
    name: 'Juliana',
    city: 'Curitiba — PR',
    placeholder: true,
  },
  {
    text: 'Presenteei minha mãe com um kit de chás e ela se encantou. Embalagem linda, sabor marcante.',
    name: 'Rafael',
    city: 'São Paulo — SP',
    placeholder: true,
  },
];