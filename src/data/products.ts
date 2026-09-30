import { Product, CurrencyCode, CurrencyConfig } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: "blue-flame-tee",
    name: "BLUE FLAME TEE",
    japaneseName: "青い炎",
    collection: "ORIGIN DROP // VOL. 01",
    price: 33.99,
    originalPrice: 39.99,
    onSale: true,
    badge: "SALE 15% OFF",
    stock: 7,
    isLowStock: false,
    gsm: "240 GSM Heavyweight",
    description: "An homage to cobalt cursed flames that burn without ash. Printed on 240GSM heavyweight cotton with crack-resistant multi-layer screenprint. Built to hold its boxy silhouette through countless wash cycles.",
    lore: "Forged in the cursed furnaces of Neo-Tokyo. High-density cobalt pigment cured under ultraviolet spectrums.",
    images: {
      front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-1.webp",
      back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-2.webp",
      detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-3.webp"
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tees", "sale", "origin"]
  },
  {
    id: "bushido-tee",
    name: "BUSHIDO TEE",
    japaneseName: "武士道",
    collection: "ORIGIN DROP // VOL. 01",
    price: 39.99,
    originalPrice: null,
    onSale: false,
    badge: "CORE PIECE",
    stock: 14,
    isLowStock: false,
    gsm: "240 GSM Heavyweight",
    description: "The code of honor written in distressed calligraphy and heavy brushwork. Earth tone vintage dye paired with stark Japanese kanji detailing across the spine.",
    lore: "Channeling the unyielding discipline of ronin blade masters across the silent alleys of Shibuya.",
    images: {
      front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-1.webp",
      back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-2.webp",
      detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-3.webp"
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tees", "origin"]
  },
  {
    id: "demon-blood-tee",
    name: "DEMON BLOOD TEE",
    japaneseName: "鬼の血",
    collection: "ORIGIN DROP // VOL. 01",
    price: 33.99,
    originalPrice: 39.99,
    onSale: true,
    badge: "SALE 15% OFF",
    stock: 5,
    isLowStock: true,
    gsm: "240 GSM Heavyweight",
    description: "Visceral crimson halftones capturing cursed technique awakening. Heavy drop shoulders, reinforced collar ribbing, and soft garment-washed hand feel.",
    lore: "Blood pact runes woven in crimson plastisol that react to ultraviolet light.",
    images: {
      front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-1.webp",
      back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-2.webp",
      detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-3.webp"
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tees", "sale", "origin"]
  },
  {
    id: "domain-expansion-tee",
    name: "DOMAIN EXPANSION TEE",
    japaneseName: "領域展開",
    collection: "ORIGIN DROP // VOL. 01",
    price: 39.99,
    originalPrice: null,
    onSale: false,
    badge: "LOW STOCK - 4 LEFT",
    stock: 4,
    isLowStock: true,
    gsm: "240 GSM Heavyweight",
    description: "Hand seal precision meets spatial distortion graphics. A tribute to modern shonen barrier techniques crafted with high-density plastisol ink on deep obsidian cotton.",
    lore: "A bounded barrier containing limitless cursed void dimensions, woven into fabric armor.",
    images: {
      front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-1.webp",
      back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-2.webp",
      detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-3.webp"
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["tees", "origin"]
  },
  {
    id: "limitless-tee",
    name: "LIMITLESS TEE",
    japaneseName: "無下限",
    collection: "ORIGIN DROP // VOL. 01",
    price: 39.99,
    originalPrice: null,
    onSale: false,
    badge: "ORIGIN PIECE",
    stock: 9,
    isLowStock: false,
    gsm: "240 GSM Heavyweight",
    description: "Infinity distilled into typographic form. Clean minimal chest seal with large format back graphic depicting boundless cursed energy and celestial geometry.",
    lore: "Achieve the absolute neutral infinity where hostile cursed strikes cannot touch the bearer.",
    images: {
      front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Limitless-1.webp",
      back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Limitless-2.webp",
      detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Limitless-3.webp"
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tees", "origin"]
  },
  {
    id: "water-breathing-tee",
    name: "WATER BREATHING TEE",
    japaneseName: "水の呼吸",
    collection: "ORIGIN DROP // VOL. 01",
    price: 39.99,
    originalPrice: null,
    onSale: false,
    badge: "BESTSELLER",
    stock: 11,
    isLowStock: false,
    gsm: "240 GSM Heavyweight",
    description: "Fluid wave dynamics combining Edo-period Ukiyo-e woodblock aesthetics with razor-sharp katana stroke vectors. Garment-dyed for a lived-in drape from day one.",
    lore: "Eleventh form: Dead Calm. Total stillness amidst chaotic street tides.",
    images: {
      front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-1.webp",
      back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-2.webp",
      detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-3.webp"
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tees", "origin"]
  },
  {
    id: "warrior-spirit-tee",
    name: "WARRIOR SPIRIT TEE",
    japaneseName: "戦士の魂",
    collection: "ORIGIN DROP // VOL. 01",
    price: 33.99,
    originalPrice: 39.99,
    onSale: true,
    badge: "SALE 15% OFF",
    stock: 6,
    isLowStock: true,
    gsm: "240 GSM Heavyweight",
    description: "Unbending resolve translated into weathered Kanji typography and heavy shoulder drop. Engineered to keep its shape through every session.",
    lore: "The indestructible soul forged through thousands of training katas in torrential rains.",
    images: {
      front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-1.webp",
      back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-2.webp",
      detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-3.webp"
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["tees", "sale", "origin"]
  },
  {
    id: "will-of-the-sun-tee",
    name: "WILL OF THE SUN TEE",
    japaneseName: "日の意志",
    collection: "ORIGIN DROP // VOL. 01",
    price: 33.99,
    originalPrice: 39.99,
    onSale: true,
    badge: "SALE 15% OFF",
    stock: 8,
    isLowStock: false,
    gsm: "240 GSM Heavyweight",
    description: "The ancient sun-breathing legacy rendered in blazing solar radial artwork, sacred talisman motif, and vintage screenprinted texture.",
    lore: "The primordial breathing form passed through generations of solar dancers.",
    images: {
      front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Will-of-the-sun-1.webp",
      back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Will-of-the-sun-2.webp",
      detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Will-of-the-sun-3.webp"
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tees", "sale", "origin"]
  }
];

export const SECRET_DOMAIN_PRODUCT: Product = {
  id: "cursed-energy-hoodie",
  name: "CURSED REALM // 600GSM HEAVY HOODIE",
  japaneseName: "領域の呪い // 影の宝物庫",
  collection: "DOMAIN EXPANSION // 00 ARCHIVE",
  price: 110.00,
  originalPrice: 145.00,
  onSale: true,
  badge: "SECRET UNLOCKED // 1 OF 50",
  stock: 3,
  isLowStock: true,
  gsm: "600 GSM French Terry Fleece",
  description: "Unlocked exclusively via Domain Expansion. 600GSM heavyweight fleece forged with high-density puff-print kanji talisman and double-layered thermal hood. Built for the cursed anime vanguard.",
  lore: "Forged under dark cursed seal invocations. An impossible 600GSM armor weave that repels negative energy.",
  images: {
    front: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-1.webp",
    back: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-2.webp",
    detail: "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-3.webp"
  },
  sizes: ["S", "M", "L", "XL", "XXL"],
  tags: ["hoodie", "secret", "limited"]
};

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  AUD: { code: 'AUD', symbol: 'A$', rate: 1.0, flag: '🇦🇺' },
  USD: { code: 'USD', symbol: '$', rate: 0.65, flag: '🇺🇸' },
  JPY: { code: 'JPY', symbol: '¥', rate: 98.5, flag: '🇯🇵' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.60, flag: '🇪🇺' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.52, flag: '🇬🇧' }
};
