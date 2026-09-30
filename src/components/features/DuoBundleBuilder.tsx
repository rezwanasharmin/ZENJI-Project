'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { SizeOption } from '@/types';

export default function DuoBundleBuilder() {
  const { products, formatPrice, addToCart, setIsCartOpen, showToast, playSound } = useStore();

  // Filter out any secret product if not unlocked, or use all regular products
  const regularProducts = products.filter((p) => p.id !== 'secret-vault-tee');

  const [slot1Id, setSlot1Id] = useState(regularProducts[0]?.id || 'blue-flame-tee');
  const [slot1Size, setSlot1Size] = useState<SizeOption>('M');

  const [slot2Id, setSlot2Id] = useState(regularProducts[1]?.id || 'bushido-tee');
  const [slot2Size, setSlot2Size] = useState<SizeOption>('M');

  const slot1Product = regularProducts.find((p) => p.id === slot1Id) || regularProducts[0];
  const slot2Product = regularProducts.find((p) => p.id === slot2Id) || regularProducts[1];

  const origPriceAUD = (slot1Product?.price || 39.99) + (slot2Product?.price || 39.99);
  const bundleDiscountAUD = 15.0;
  const finalPriceAUD = Math.max(0, origPriceAUD - bundleDiscountAUD);

  const handleAddBundle = () => {
    if (!slot1Product || !slot2Product) return;
    playSound('cart');
    addToCart(slot1Product, slot1Size, 1);
    addToCart(slot2Product, slot2Size, 1);
    showToast(`⚡ DUO ARC BUNDLE ADDED (SAVED A$15)!`, 'success');
    setIsCartOpen(true);
  };

  const sizes: SizeOption[] = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <section className="bundle-section" id="bundle-builder" aria-label="Curated Wardrobe Bundle Builder">
      <div className="container">
        <div className="section-header-row" data-reveal="fade">
          <div>
            <span className="section-label">CURATED FIT KIT // SAVE A$15 + FREE SHIPPING</span>
            <h2 className="section-title">THE SHONEN DUO ARC BUNDLE</h2>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-green)', fontWeight: 700 }}>
            🔥 FREE EXPRESS SHIPPING INCLUDED (OVER A$60)
          </div>
        </div>

        <div className="bundle-builder-card" data-reveal="up">
          <div className="bundle-slots-grid">
            {/* Slot 1: First Piece Selection */}
            <div className="bundle-slot">
              <div className="bundle-slot-badge">PIECE 01</div>
              <div className="bundle-img-preview">
                <img
                  id="bundle-slot1-img"
                  src={slot1Product?.images.front || 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-1.webp'}
                  alt={slot1Product?.name || 'Bundle Tee 1'}
                />
              </div>
              <div className="bundle-picker-wrap">
                <label className="bundle-picker-label" htmlFor="bundle-slot1-select">
                  CHOOSE FIRST TEE:
                </label>
                <select
                  id="bundle-slot1-select"
                  className="bundle-select"
                  aria-label="Select first bundle tee"
                  value={slot1Id}
                  onChange={(e) => setSlot1Id(e.target.value)}
                >
                  {regularProducts.map((p) => (
                    <option key={`s1-${p.id}`} value={p.id}>
                      {p.name} ({formatPrice(p.price)})
                    </option>
                  ))}
                </select>

                <div className="bundle-size-row">
                  <span className="bundle-picker-label">CHOOSE SIZE:</span>
                  <div className="bundle-sizes" id="bundle-slot1-sizes">
                    {sizes.map((s) => (
                      <button
                        key={`s1-size-${s}`}
                        type="button"
                        className={`size-chip ${slot1Size === s ? 'selected' : ''}`}
                        onClick={() => setSlot1Size(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Central Plus Icon */}
            <div className="bundle-divider">
              <div className="bundle-plus-circle">+</div>
            </div>

            {/* Slot 2: Second Piece Selection */}
            <div className="bundle-slot">
              <div className="bundle-slot-badge">PIECE 02</div>
              <div className="bundle-img-preview">
                <img
                  id="bundle-slot2-img"
                  src={slot2Product?.images.front || 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-1.webp'}
                  alt={slot2Product?.name || 'Bundle Tee 2'}
                />
              </div>
              <div className="bundle-picker-wrap">
                <label className="bundle-picker-label" htmlFor="bundle-slot2-select">
                  CHOOSE SECOND TEE:
                </label>
                <select
                  id="bundle-slot2-select"
                  className="bundle-select"
                  aria-label="Select second bundle tee"
                  value={slot2Id}
                  onChange={(e) => setSlot2Id(e.target.value)}
                >
                  {regularProducts.map((p) => (
                    <option key={`s2-${p.id}`} value={p.id}>
                      {p.name} ({formatPrice(p.price)})
                    </option>
                  ))}
                </select>

                <div className="bundle-size-row">
                  <span className="bundle-picker-label">CHOOSE SIZE:</span>
                  <div className="bundle-sizes" id="bundle-slot2-sizes">
                    {sizes.map((s) => (
                      <button
                        key={`s2-size-${s}`}
                        type="button"
                        className={`size-chip ${slot2Size === s ? 'selected' : ''}`}
                        onClick={() => setSlot2Size(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bundle Pricing & Checkout CTA Bar */}
          <div className="bundle-summary-bar">
            <div className="bundle-pricing-details">
              <div className="bundle-tag-row">
                <span className="bundle-exclusive-tag">DUO BUNDLE VALUE DEAL</span>
                <span className="bundle-save-badge">SAVE {formatPrice(15)} INSTANTLY</span>
              </div>
              <div className="bundle-price-stack">
                <span className="bundle-price-orig" id="bundle-orig-price">
                  {formatPrice(origPriceAUD)}
                </span>
                <span className="bundle-price-final" id="bundle-final-price">
                  {formatPrice(finalPriceAUD)}
                </span>
                <span className="bundle-shipping-perk">⚡ FREE EXPRESS SHIPPING UNLOCKED</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-primary btn-bundle-submit"
              id="btn-add-bundle-to-cart"
              onClick={handleAddBundle}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>COP THE DUO ARC BUNDLE • {formatPrice(finalPriceAUD)}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
