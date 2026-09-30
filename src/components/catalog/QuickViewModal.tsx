'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS_DATA, SECRET_DOMAIN_PRODUCT } from '../../data/products';
import { SizeOption } from '../../types';

export default function QuickViewModal() {
  const {
    quickViewProductId,
    closeQuickView,
    quickViewQty,
    setQuickViewQty,
    quickViewSize,
    setQuickViewSize,
    formatPrice,
    addToCart,
    setIsCartOpen,
    setIsSizeGuideOpen
  } = useStore();

  const [activeThumb, setActiveThumb] = useState<'front' | 'back' | 'detail'>('front');

  const allProducts = [...PRODUCTS_DATA, SECRET_DOMAIN_PRODUCT];
  const product = allProducts.find(p => p.id === quickViewProductId);

  useEffect(() => {
    setActiveThumb('front');
  }, [quickViewProductId]);

  if (!quickViewProductId || !product) return null;

  const totalPrice = product.price * quickViewQty;
  const totalStrike = product.originalPrice ? product.originalPrice * quickViewQty : null;

  const handleAdd = () => {
    addToCart(product, quickViewSize, quickViewQty);
    closeQuickView();
    setIsCartOpen(true);
  };

  return (
    <div className="modal-overlay active" id="quick-view-overlay" onClick={closeQuickView} aria-modal="true" role="dialog">
      <div className="modal-card" id="quick-view-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          id="qv-close-btn"
          onClick={closeQuickView}
          aria-label="Close product quick view"
        >
          ✕
        </button>

        <div className="modal-grid">
          {/* Gallery */}
          <div className="modal-gallery">
            <div className="modal-main-image">
              <img
                id="qv-image"
                src={product.images[activeThumb]}
                alt={`${product.name} enlarged view`}
              />
            </div>
            <div className="modal-thumb-row" id="qv-thumbs">
              {(['front', 'back', 'detail'] as const).map(angle => (
                <div
                  key={angle}
                  className={`modal-thumb ${activeThumb === angle ? 'active' : ''}`}
                  onClick={() => setActiveThumb(angle)}
                >
                  <img src={product.images[angle]} alt={`${product.name} angle`} />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="modal-details">
            <span className="modal-brand-tag" id="qv-badge">{product.collection} // {product.badge}</span>
            <h2 className="modal-title" id="qv-title">{product.name}</h2>
            
            {/* Live Multiplying Pricing Row (Fixing the user's issue!) */}
            <div className="modal-pricing">
              <span className="card-price-current bump" id="qv-price">
                {formatPrice(totalPrice)}
              </span>
              {totalStrike && (
                <span className="card-price-strike" id="qv-strike">
                  {formatPrice(totalStrike)}
                </span>
              )}
              {quickViewQty > 1 && (
                <span className="modal-unit-hint" id="qv-unit-hint">
                  ({formatPrice(product.price)} each)
                </span>
              )}
            </div>

            <p className="modal-desc" id="qv-desc">{product.description}</p>

            <div className="modal-specs-list">
              <div className="modal-spec-chip">
                <span className="modal-spec-key">FABRIC</span>
                <span className="modal-spec-val" id="qv-gsm">{product.gsm}</span>
              </div>
              <div className="modal-spec-chip">
                <span className="modal-spec-key">SILHOUETTE</span>
                <span className="modal-spec-val">Boxy Oversized</span>
              </div>
              <div className="modal-spec-chip">
                <span className="modal-spec-key">PRINT TECHNIQUE</span>
                <span className="modal-spec-val">Multi-pass Screenprint</span>
              </div>
              <div className="modal-spec-chip">
                <span className="modal-spec-key">RESTOCK</span>
                <span className="modal-spec-val" style={{ color: 'var(--accent-red)' }}>None (Ever)</span>
              </div>
            </div>

            {/* Size Selection */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div className="size-selector-label">
                <span>SELECT SIZE:</span>
                <button
                  type="button"
                  id="qv-size-guide-trigger"
                  onClick={() => setIsSizeGuideOpen(true)}
                  style={{ color: 'var(--accent-red)', fontSize: '0.65rem', textDecoration: 'underline' }}
                >
                  VIEW SIZE GUIDE
                </button>
              </div>
              <div className="size-buttons-group" id="qv-size-buttons">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    type="button"
                    className={`card-size-btn ${size === quickViewSize ? 'active' : ''}`}
                    onClick={() => setQuickViewSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add Action */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', padding: '0 0.5rem' }}>
                <button
                  type="button"
                  id="qv-qty-minus"
                  onClick={() => quickViewQty > 1 && setQuickViewQty(quickViewQty - 1)}
                  style={{ fontSize: '1.1rem', padding: '0.25rem 0.5rem', color: 'var(--text-primary)' }}
                >
                  -
                </button>
                <span id="qv-qty-display" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, minWidth: '28px', textAlign: 'center' }}>
                  {quickViewQty}
                </span>
                <button
                  type="button"
                  id="qv-qty-plus"
                  onClick={() => setQuickViewQty(quickViewQty + 1)}
                  style={{ fontSize: '1.1rem', padding: '0.25rem 0.5rem', color: 'var(--text-primary)' }}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="btn-primary"
                id="qv-add-btn"
                onClick={handleAdd}
                style={{ flexGrow: 1 }}
              >
                <span>
                  {quickViewQty > 1 ? `ADD ${quickViewQty} TO CART • ${formatPrice(totalPrice)}` : `ADD TO CART • ${formatPrice(totalPrice)}`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
