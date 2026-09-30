'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { Product, CartItem, SizeOption, CurrencyCode, CartTotals, FitProfile } from '../types';
import { PRODUCTS_DATA, CURRENCIES, SECRET_DOMAIN_PRODUCT } from '../data/products';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warn' | 'error';
}

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  currentCurrency: CurrencyCode;
  selectedSizes: Record<string, SizeOption>;
  userFitSize: SizeOption | null;
  quickViewProductId: string | null;
  quickViewQty: number;
  quickViewSize: SizeOption;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isMobileNavOpen: boolean;
  isFitModalOpen: boolean;
  isSizeGuideOpen: boolean;
  isCheckoutOpen: boolean;
  isDomainCinemaOpen: boolean;
  domainUnlocked: boolean;
  isLoFiPlaying: boolean;
  appliedPromo: string | null;
  promoCode: string | null;
  discountRate: number;
  discountPercent: number;
  toasts: ToastMessage[];
  selectedCategory: 'all' | 'tees' | 'sale';
  cartTotals: CartTotals;

  // Actions
  formatPrice: (amountInAud: number) => string;
  addToCart: (product: Product, size: SizeOption, quantity?: number) => void;
  removeFromCart: (cartKeyOrId: string, size?: SizeOption) => void;
  updateQuantity: (cartKeyOrId: string, sizeOrQty: SizeOption | number, qty?: number) => void;
  updateCartItemQty: (cartKey: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  setCurrency: (code: CurrencyCode) => void;
  selectProductSize: (productId: string, size: SizeOption) => void;
  setUserFitSize: (size: SizeOption | null) => void;
  applyUserFitSize: (size: SizeOption) => void;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
  setQuickViewQty: (qty: number) => void;
  setQuickViewSize: (size: SizeOption) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsMobileNavOpen: (open: boolean) => void;
  setIsFitModalOpen: (open: boolean) => void;
  setIsSizeGuideOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setIsDomainCinemaOpen: (open: boolean) => void;
  unlockDomainExpansion: () => void;
  unlockSecretVault: () => void;
  toggleLoFi: () => void;
  playSound: (type?: string) => void;
  applyPromoCode: (code: string) => boolean;
  showToast: (message: string, type?: 'success' | 'info' | 'warn' | 'error') => void;
  setSelectedCategory: (cat: 'all' | 'tees' | 'sale') => void;
  getCartTotals: () => CartTotals;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>('AUD');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, SizeOption>>({});
  const [userFitSize, setUserFitSize] = useState<SizeOption | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tees' | 'sale'>('all');

  // Modals / Drawers
  const [quickViewProductId, setQuickViewProductId] = useState<string | null>(null);
  const [quickViewQty, setQuickViewQty] = useState<number>(1);
  const [quickViewSize, setQuickViewSize] = useState<SizeOption>('M');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isFitModalOpen, setIsFitModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDomainCinemaOpen, setIsDomainCinemaOpen] = useState(false);
  const [domainUnlocked, setDomainUnlocked] = useState(false);
  const [isLoFiPlaying, setIsLoFiPlaying] = useState(false);

  // Audio elements
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  // Promo
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discountRate, setDiscountRate] = useState<number>(0);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Products with secret product if unlocked
  const products = useMemo(() => {
    // augment with category / sale properties if needed
    const list = PRODUCTS_DATA.map(p => ({
      ...p,
      category: p.category || (p.tags.includes('tees') ? 'tees' : 'core'),
      sale: p.sale !== undefined ? p.sale : p.onSale,
      technique: p.technique || 'Multi-pass Screenprint',
      tagline: p.tagline || (p.onSale ? 'Washed Vintage Black // 240GSM' : 'Earth Tone // 240GSM Combed Cotton')
    }));

    if (domainUnlocked) {
      return [
        {
          ...SECRET_DOMAIN_PRODUCT,
          category: 'tees',
          sale: false,
          technique: 'Cursed Void Inlay',
          tagline: 'Obsidian Black // 600GSM Ultra-Heavyweight'
        },
        ...list
      ];
    }
    return list;
  }, [domainUnlocked]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('zenji_cart');
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem('zenji_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedCurr = localStorage.getItem('zenji_currency') as CurrencyCode;
      if (savedCurr && CURRENCIES[savedCurr]) setCurrentCurrency(savedCurr);

      const savedFit = localStorage.getItem('zenji_user_fit') as SizeOption;
      if (savedFit) {
        setUserFitSize(savedFit);
      }

      // Default sizes
      const initialSizes: Record<string, SizeOption> = {};
      PRODUCTS_DATA.forEach(p => {
        initialSizes[p.id] = (savedFit && p.sizes.includes(savedFit)) ? savedFit : 'M';
      });
      setSelectedSizes(initialSizes);
    } catch (e) {
      console.warn('Storage read error', e);
    }
  }, []);

  // Save Cart to storage
  useEffect(() => {
    try {
      localStorage.setItem('zenji_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Save Wishlist to storage
  useEffect(() => {
    try {
      localStorage.setItem('zenji_wishlist', JSON.stringify(wishlist));
    } catch (e) {}
  }, [wishlist]);

  // Keyboard shortcut: type "ZENJI" to trigger domain expansion
  useEffect(() => {
    let keyBuffer = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      keyBuffer += e.key.toUpperCase();
      if (keyBuffer.length > 5) keyBuffer = keyBuffer.slice(-5);
      if (keyBuffer === 'ZENJI') {
        unlockDomainExpansion();
        keyBuffer = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string, type: 'success' | 'info' | 'warn' | 'error' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3800);
  };

  const playSound = (type = 'click') => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContext || new AudioCtx();
      if (!audioContext) setAudioContext(ctx);

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'cart' || type === 'success') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === 'bell') {
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'domain') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(44, ctx.currentTime + 1.2);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
        osc.start();
        osc.stop(ctx.currentTime + 1.2);
      } else {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      }
    } catch (e) {
      // Audio might be blocked by browser autoplay policy
    }
  };

  const formatPrice = (amountInAud: number) => {
    const curr = CURRENCIES[currentCurrency] || CURRENCIES.AUD;
    const converted = amountInAud * curr.rate;
    if (currentCurrency === 'JPY') {
      return `${curr.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${curr.symbol}${converted.toFixed(2)}`;
  };

  const addToCart = (product: Product, size: SizeOption, quantity = 1) => {
    const cartKey = `${product.id}-${size}`;
    setCart(prev => {
      const existing = prev.find(item => item.cartKey === cartKey);
      if (existing) {
        return prev.map(item =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          cartKey,
          productId: product.id,
          id: product.id,
          name: product.name,
          japaneseName: product.japaneseName,
          size,
          price: product.price,
          image: product.images.front,
          product,
          quantity
        }
      ];
    });
    playSound('cart');
    showToast(`Added ${product.name} (${size} × ${quantity}) to Cart!`, 'success');
  };

  const removeFromCart = (cartKeyOrId: string, size?: SizeOption) => {
    setCart(prev => {
      if (size) {
        return prev.filter(item => !(item.productId === cartKeyOrId && item.size === size));
      }
      return prev.filter(item => item.cartKey !== cartKeyOrId && item.id !== cartKeyOrId);
    });
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (cartKeyOrId: string, sizeOrQty: SizeOption | number, qty?: number) => {
    if (typeof sizeOrQty === 'number') {
      // (cartKey, newQty)
      updateCartItemQty(cartKeyOrId, sizeOrQty);
    } else if (typeof qty === 'number') {
      // (productId, size, qty)
      const cartKey = `${cartKeyOrId}-${sizeOrQty}`;
      updateCartItemQty(cartKey, qty);
    }
  };

  const updateCartItemQty = (cartKey: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartKey);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.cartKey === cartKey || item.id === cartKey ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    const product = PRODUCTS_DATA.find(p => p.id === productId) || (SECRET_DOMAIN_PRODUCT.id === productId ? SECRET_DOMAIN_PRODUCT : null);
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(`Removed from Wishlist`, 'info');
        return prev.filter(id => id !== productId);
      } else {
        playSound('click');
        showToast(`❤️ Saved ${product ? product.name : 'Piece'} to Wishlist!`, 'success');
        return [...prev, productId];
      }
    });
  };

  const setCurrency = (code: CurrencyCode) => {
    if (CURRENCIES[code]) {
      setCurrentCurrency(code);
      try { localStorage.setItem('zenji_currency', code); } catch (e) {}
      showToast(`💱 Currency converted to ${code} (${CURRENCIES[code].symbol})`, 'info');
    }
  };

  const selectProductSize = (productId: string, size: SizeOption) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const applyUserFitSize = (size: SizeOption) => {
    setUserFitSize(size);
    try { localStorage.setItem('zenji_user_fit', size); } catch (e) {}
    setSelectedSizes(prev => {
      const updated: Record<string, SizeOption> = { ...prev };
      PRODUCTS_DATA.forEach(p => {
        if (p.sizes.includes(size)) {
          updated[p.id] = size;
        }
      });
      return updated;
    });
    showToast(`🎯 AI Fit Applied: Size ${size} selected across all drops!`, 'success');
  };

  const openQuickView = (productId: string) => {
    setQuickViewProductId(productId);
    setQuickViewQty(1);
    setQuickViewSize(selectedSizes[productId] || 'M');
  };

  const closeQuickView = () => {
    setQuickViewProductId(null);
  };

  const unlockDomainExpansion = () => {
    setDomainUnlocked(true);
    setIsDomainCinemaOpen(true);
  };

  const unlockSecretVault = () => {
    unlockDomainExpansion();
  };

  const toggleLoFi = () => {
    setIsLoFiPlaying(prev => !prev);
    if (!isLoFiPlaying) {
      showToast('📻 Tokyo Lo-Fi Ambience Activated', 'info');
    } else {
      showToast('Lo-Fi Ambience Paused', 'info');
    }
  };

  const applyPromoCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ZENJI10' || clean === 'ZENJI15') {
      const rate = clean === 'ZENJI15' ? 0.15 : 0.10;
      setAppliedPromo(clean);
      setDiscountRate(rate);
      playSound('success');
      showToast(`⚡ Promo Code Applied: ${Math.round(rate * 100)}% OFF!`, 'success');
      return true;
    } else if (clean === 'SHONEN10') {
      setAppliedPromo('SHONEN10');
      setDiscountRate(0.10);
      playSound('success');
      showToast('⚡ Promo Code Applied: 10% OFF Streetwear!', 'success');
      return true;
    } else {
      showToast('❌ Invalid code. Try "ZENJI10" for 10% OFF.', 'warn');
      return false;
    }
  };

  const getCartTotals = (): CartTotals => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const discount = subtotal * discountRate;
    const discountedSubtotal = Math.max(0, subtotal - discount);
    const isFreeShipping = discountedSubtotal >= 100 || subtotal === 0;
    const shipping = (subtotal > 0 && !isFreeShipping) ? 9.99 : 0;
    const finalTotal = discountedSubtotal + shipping;
    const amountToFreeShipping = Math.max(0, 100 - discountedSubtotal);

    return {
      subtotal,
      discount,
      shipping,
      finalTotal,
      isFreeShipping,
      amountToFreeShipping,
      totalCount
    };
  };

  const cartTotals = useMemo(() => getCartTotals(), [cart, discountRate]);

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        wishlist,
        currentCurrency,
        selectedSizes,
        userFitSize,
        quickViewProductId,
        quickViewQty,
        quickViewSize,
        isCartOpen,
        isWishlistOpen,
        isMobileNavOpen,
        isFitModalOpen,
        isSizeGuideOpen,
        isCheckoutOpen,
        isDomainCinemaOpen,
        domainUnlocked,
        isLoFiPlaying,
        appliedPromo,
        promoCode: appliedPromo,
        discountRate,
        discountPercent: Math.round(discountRate * 100),
        toasts,
        selectedCategory,
        cartTotals,
        formatPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateCartItemQty,
        clearCart,
        toggleWishlist,
        setCurrency,
        selectProductSize,
        setUserFitSize,
        applyUserFitSize,
        openQuickView,
        closeQuickView,
        setQuickViewQty,
        setQuickViewSize,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsMobileNavOpen,
        setIsFitModalOpen,
        setIsSizeGuideOpen,
        setIsCheckoutOpen,
        setIsDomainCinemaOpen,
        unlockDomainExpansion,
        unlockSecretVault,
        toggleLoFi,
        playSound,
        applyPromoCode,
        showToast,
        setSelectedCategory,
        getCartTotals
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
