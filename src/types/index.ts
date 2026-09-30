export type SizeOption = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface ProductImages {
  front: string;
  back: string;
  detail: string;
}

export interface Product {
  id: string;
  name: string;
  japaneseName: string;
  collection: string;
  price: number;
  originalPrice: number | null;
  onSale: boolean;
  stock: number;
  isLowStock: boolean;
  badge: string;
  gsm: string;
  description: string;
  lore: string;
  images: ProductImages;
  sizes: SizeOption[];
  tags: string[];
  accentColor?: string;
  category?: string;
  sale?: boolean;
  technique?: string;
  tagline?: string;
}

export interface CartItem {
  cartKey: string;
  productId: string;
  name: string;
  japaneseName: string;
  size: SizeOption;
  price: number;
  image: string;
  quantity: number;
  id?: string;
  product?: Product;
}

export type CurrencyCode = 'AUD' | 'USD' | 'JPY' | 'EUR' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  rate: number;
  symbol: string;
  flag: string;
}

export interface CartTotals {
  subtotal: number;
  discount: number;
  shipping: number;
  finalTotal: number;
  isFreeShipping: boolean;
  amountToFreeShipping: number;
  totalCount: number;
}

export type DrapeProfile = 'standard' | 'oversized' | 'ultra';

export interface FitProfile {
  heightCm: number;
  weightKg: number;
  drape: DrapeProfile;
  recommendedSize: SizeOption;
  chestEaseCm: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  verified: boolean;
  productName: string;
  title: string;
  content: string;
  date: string;
  fitFeedback: string;
}
