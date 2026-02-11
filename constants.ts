
import { Pizza, Testimonial, Promotion } from './types';

export const PIZZAS: Pizza[] = [
  {
    id: 1,
    name: 'Margherita Suprema',
    description: 'Molho de tomate pelado, mozzarella fior di latte, manjericão fresco e azeite extra virgem.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?q=80&w=2070&auto=format&fit=crop',
    category: 'tradicional'
  },
  {
    id: 2,
    name: 'Calabresa Premium',
    description: 'Molho de tomate, mozzarella, calabresa artesanal fatiada e cebola roxa crocante.',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2070&auto=format&fit=crop',
    category: 'tradicional'
  },
  {
    id: 3,
    name: 'Quatro Queijos D.O.C',
    description: 'Mozzarella, gorgonzola, parmesão 24 meses e catupiry original.',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    category: 'especial'
  },
  {
    id: 4,
    name: 'Trufa Negra & Cogumelos',
    description: 'Mix de cogumelos frescos, azeite trufado, mozzarella e finalizada com cebolinha.',
    price: 68.00,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076&auto=format&fit=crop',
    category: 'especial'
  },
  {
    id: 5,
    name: 'Chocolate com Morango',
    description: 'Creme de avelã premium, morangos frescos e raspas de chocolate branco.',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
    category: 'doce'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo Silva',
    comment: 'A melhor pizza artesanal da região! A massa é leve e os ingredientes são de altíssima qualidade.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ricardo'
  },
  {
    id: 2,
    name: 'Julia Mendes',
    comment: 'O ambiente é super aconchegante e o atendimento é nota dez. Recomendo a Margherita!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=julia'
  },
  {
    id: 3,
    name: 'Marcos Oliveira',
    comment: 'Entrega rápida e pizza quentinha. Sou viciado na de Trufa Negra!',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=marcos'
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 1,
    title: 'Terça em Dobro',
    description: 'Compre uma pizza grande e leve a segunda (tradicional) por nossa conta!',
    discount: '100% OFF na 2ª',
    validUntil: 'Toda terça-feira',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Combo Família',
    description: '2 Pizzas Grandes + Refrigerante 2L + Borda Recheada.',
    discount: 'R$ 20,00 OFF',
    validUntil: 'Finais de semana',
    image: 'https://images.unsplash.com/photo-1593246049226-ded77bf50328?q=80&w=1974&auto=format&fit=crop'
  }
];
