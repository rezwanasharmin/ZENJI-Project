'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';

export default function WishlistDrawer() {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    products,
    toggleWishlist,
    addToCart,
    formatPrice,
    showToast,
    setIsCartOpen
  } = useStore();

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  const handleMoveAllToCart = () => {
    if (wishlistedProducts.length === 0) return;
    wishlistedProducts.forEach((p) => {
      addToCart(p, 'M', 1);
    });
    showToast(`✓ MOVED ${wishlistedProducts.length} ITEMS TO CART!`, 'success');
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  return (
    <div
      className={`cart-drawer-overlay ${isWishlistOpen ? 'active' : ''}`}
      id="wishlist-drawer-overlay"
      aria-hidden={!isWishlistOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsWishlistOpen(false);
      }}
    >
      <div className="cart-drawer wishlist-drawer" id="wishlist-drawer" role="dialog" aria-modal="true" aria-labelledby="wishlist-heading">
        <div className="cart-header">
          <div className="cart-title-row">
            <h2 className="cart-title" id="wishlist-heading">
              YOUR WISHLIST
            </h2>
            <span className="cart-header-count" id="wishlist-count-label">
              ({wishlistedProducts.length} SAVED)
            </span>
          </div>
          <button
            type="button"
            className="btn-close-drawer"
            id="btn-close-wishlist"
            aria-label="Close Wishlist Drawer"
            onClick={() => setIsWishlistOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Wishlist Items Container */}
        <div className="cart-items-body" id="wishlist-items-container">
          {wishlistedProducts.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-icon-wrap">🖤</div>
              <h3 className="empty-title">YOUR WISHLIST IS EMPTY</h3>
              <p className="empty-desc">
                Tap the heart on any piece to save it for your next vault order.
              </p>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="cart-item-thumb">
                  <img src={product.images.front} alt={product.name} />
                </div>
                <div className="cart-item-info">
                  <div>
                    <div className="cart-item-title">{product.name}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', margin: '0.25rem 0' }}>
                      {product.tagline}
                    </div>
                    <div className="cart-item-price">{formatPrice(product.price)}</div>
                  </div>

                  <div style={{ marginTop: '0.5rem' }}>
                    <button
                      type="button"
                      className="btn-primary"
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.72rem' }}
                      onClick={() => {
                        addToCart(product, 'M', 1);
                        showToast(`ADDED ${product.name} (M) TO CART!`, 'success');
                      }}
                    >
                      + ADD TO CART
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-remove-item"
                  aria-label={`Remove ${product.name} from wishlist`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Wishlist Drawer Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="cart-footer" id="wishlist-footer">
            <button
              type="button"
              className="btn-primary"
              id="btn-move-all-wishlist"
              style={{ width: '100%' }}
              onClick={handleMoveAllToCart}
            >
              <span>MOVE ALL SAVED PIECES TO CART</span>
            </button>
            <button
              type="button"
              className="btn-secondary"
              id="btn-wishlist-keep-shopping"
              style={{ width: '100%', marginTop: '0.5rem' }}
              onClick={() => setIsWishlistOpen(false)}
            >
              <span>KEEP BROWSING DROPS</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
