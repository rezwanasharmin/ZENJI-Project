'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    cartTotals,
    formatPrice,
    applyPromoCode,
    promoCode,
    discountPercent,
    setIsCheckoutOpen
  } = useStore();

  const [inputPromo, setInputPromo] = useState('');
  const [promoMsg, setPromoMsg] = useState('');

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingThreshold = 100.0;
  const freeShippingPercent = Math.min(100, Math.round((cartTotals.subtotal / freeShippingThreshold) * 100));
  const amountRemaining = Math.max(0, freeShippingThreshold - cartTotals.subtotal);

  const handleApplyPromo = () => {
    if (!inputPromo.trim()) return;
    const success = applyPromoCode(inputPromo.trim());
    if (success) {
      setPromoMsg(`✓ ${inputPromo.toUpperCase()} applied! ${discountPercent || 15}% discount added.`);
    } else {
      setPromoMsg('✕ Invalid promo code. Try "ZENJI15"');
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div
      className={`cart-drawer-overlay ${isCartOpen ? 'active' : ''}`}
      id="cart-drawer-overlay"
      aria-hidden={!isCartOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsCartOpen(false);
      }}
    >
      <div className="cart-drawer" id="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-heading">
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-title-row">
            <h2 className="cart-title" id="cart-heading">
              YOUR CART
            </h2>
            <span className="cart-header-count" id="cart-count-label">
              ({totalItemCount} {totalItemCount === 1 ? 'ITEM' : 'ITEMS'})
            </span>
          </div>
          <button
            type="button"
            className="btn-close-drawer"
            id="btn-close-cart"
            aria-label="Close Shopping Cart"
            onClick={() => setIsCartOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="shipping-bar-container">
          <div className="shipping-bar-text" id="shipping-progress-text">
            {amountRemaining <= 0 ? (
              <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>
                ⚡ FREE EXPRESS DISPATCH UNLOCKED!
              </span>
            ) : (
              <span>
                Add <strong>{formatPrice(amountRemaining)}</strong> more for Free Express Shipping!
              </span>
            )}
          </div>
          <div className="shipping-progress-bg">
            <div
              className={`shipping-progress-fill ${amountRemaining <= 0 ? 'complete' : ''}`}
              id="shipping-progress-bar"
              style={{ width: `${freeShippingPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items Body */}
        <div className="cart-items-body" id="cart-items-container">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-icon-wrap">🛍️</div>
              <h3 className="empty-title">YOUR CART IS EMPTY</h3>
              <p className="empty-desc">
                Select a limited graphic tee from Drop 01 to start your order.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setIsCartOpen(false);
                  const p = document.getElementById('products');
                  if (p) p.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>EXPLORE THE DROP</span>
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const itemTotal = item.price * item.quantity;
              return (
                <div key={item.cartKey} className="cart-item">
                  <div className="cart-item-thumb">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div>
                      <div className="cart-item-title">{item.name}</div>
                      <div className="cart-item-variants">
                        <span className="variant-pill">SIZE: {item.size}</span>
                      </div>
                      <div className="cart-item-price">{formatPrice(itemTotal)}</div>
                    </div>

                    <div className="cart-item-qty">
                      <button
                        type="button"
                        className="qty-btn"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="qty-count">{item.quantity}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-remove-item"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeFromCart(item.cartKey)}
                  >
                    ✕
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Cart Footer / Totals & Checkout */}
        {cart.length > 0 && (
          <div className="cart-footer" id="cart-footer">
            {/* Promo Code Box */}
            <div className="promo-box">
              <input
                type="text"
                className="promo-input"
                id="promo-code-input"
                placeholder="Promo code (Try: ZENJI15)"
                aria-label="Discount promo code"
                value={inputPromo}
                onChange={(e) => setInputPromo(e.target.value)}
              />
              <button
                type="button"
                className="btn-apply-promo"
                id="btn-apply-promo"
                onClick={handleApplyPromo}
              >
                APPLY
              </button>
            </div>
            {promoMsg && (
              <div
                id="promo-status"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  marginTop: '-0.5rem',
                  marginBottom: '0.75rem',
                  color: promoCode ? 'var(--accent-green)' : 'var(--accent-red)'
                }}
              >
                {promoMsg}
              </div>
            )}

            {/* Totals Breakdown */}
            <div className="cart-totals">
              <div className="total-row">
                <span>SUBTOTAL:</span>
                <span id="cart-subtotal">{formatPrice(cartTotals.subtotal)}</span>
              </div>
              {cartTotals.discount > 0 && (
                <div className="total-row" id="discount-row">
                  <span>DISCOUNT ({discountPercent}% OFF):</span>
                  <span id="cart-discount">-{formatPrice(cartTotals.discount)}</span>
                </div>
              )}
              <div className="total-row">
                <span>AUSTRALIA EXPRESS POST:</span>
                <span id="cart-shipping">
                  {cartTotals.shipping === 0 ? 'FREE' : formatPrice(cartTotals.shipping)}
                </span>
              </div>
              <div className="total-row final-total">
                <span>TOTAL:</span>
                <span className="final-price" id="cart-final-total">
                  {formatPrice(cartTotals.finalTotal)}
                </span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              type="button"
              className="btn-checkout"
              id="btn-checkout"
              onClick={handleCheckout}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <span>CHECKOUT DEMO</span>
            </button>
            <p className="checkout-subnote">Hiring Demo Storefront • Simulated instant checkout</p>
          </div>
        )}
      </div>
    </div>
  );
}
