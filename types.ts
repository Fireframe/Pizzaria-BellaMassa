
export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'tradicional' | 'especial' | 'doce';
  isPromotion?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
}
