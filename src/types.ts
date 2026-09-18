export type PageRoute = '/' | '/premium' | '/free';

export type ProductId = 'premium' | 'free';

export interface Product {
  id: ProductId;
  name: string;
  badge: string;
  price: number;
  originalPrice?: number;
  tagline: string;
  accentColor: string;
  glowClass: string;
  badgeClass: string;
  features: string[];
  route: PageRoute;
  ctaText: string;
  popular?: boolean;
}

export interface DeviceBrand {
  name: string;
  popularModels: string[];
  recommendedDpiRange: string;
  fireButtonRange: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  tag?: string;
}
