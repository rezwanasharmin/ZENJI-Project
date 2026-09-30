'use client';

import React, { useState } from 'react';
import { Product, SizeOption } from '../../types';
import { useStore } from '../../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    formatPrice,
    addToCart,
    wishlist,
    toggleWishlist,
    openQuickView,
    selectedSizes,
    selectProductSize,
    userFitSize,
    setIsFitModalOpen
  } = useStore();

  const [activeAngle, setActiveAngle] = useState<'front' | 'back' | 'detail'>('front');
  const [isAddedAnim, setIsAddedAnim] = useState(false);

  const selectedSize = selectedSizes[product.id] || (userFitSize && product.sizes.includes(userFitSize) ? userFitSize : 'M');
  const isWishlisted = wishlist.includes(product.id);
  const isFitMatch = userFitSize && selectedSize === userFitSize;

  const handleAdd = () => {
    addToCart(product, selectedSize, 1);
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };

  const handleFitBadgeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (userFitSize) {
      selectProductSize(product.id, userFitSize);
    }
    setIsFitModalOpen(true);
  };

  return (
    <article className="product-card" id={`card-${product.id}`}>
      {/* Visual Media Showcase */}
      <div className="card-media">
        <div className="card-glare" aria-hidden="true" />
        
        {/* Badges */}
        <span className="card-badge">{product.badge}</span>
        
        {/* Wishlist Button */}
        <button
          type="button"
          className={`card-wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label={`Save ${product.name} to wishlist`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Product Image */}
        <div className="card-image-wrap">
          <img
            src={product.images[activeAngle]}
            alt={`${product.name} — ${activeAngle} view`}
            loading="lazy"
          />
        </div>

        {/* Multi-Angle Hover Switcher */}
        <div className="card-angle-bar" role="group" aria-label="Select angle">
          <button
            type="button"
            className={`angle-tab ${activeAngle === 'front' ? 'active' : ''}`}
            onClick={() => setActiveAngle('front')}
          >
            F
          </button>
          <button
            type="button"
            className={`angle-tab ${activeAngle === 'back' ? 'active' : ''}`}
            onClick={() => setActiveAngle('back')}
          >
            B
          </button>
          <button
            type="button"
            className={`angle-tab ${activeAngle === 'detail' ? 'active' : ''}`}
            onClick={() => setActiveAngle('detail')}
          >
            D
          </button>
        </div>

        {/* Quick View Button */}
        <div className="quick-view-overlay">
          <button
            type="button"
            className="btn-quick-view"
            onClick={() => openQuickView(product.id)}
          >
            <span>QUICK VIEW</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="card-header-meta">
          <span>{product.collection}</span>
          <span className="jp-text" style={{ color: 'var(--accent-red)', fontSize: '0.75rem' }}>
            {product.japaneseName}
          </span>
        </div>

        <h3 className="card-title">{product.name}</h3>

        <div className="card-pricing">
          <span className={`card-price-current ${!product.onSale ? 'regular' : ''}`}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="card-price-strike">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Size Selector with Interactive YOUR FIT Button */}
        <div className="card-size-selector">
          <div className="size-selector-label">
            <div className="size-label-left">
              <span>SIZE:</span>
              <span className="selected-size-text">{selectedSize}</span>
            </div>

            {/* Interactive YOUR FIT Button */}
            {userFitSize ? (
              <button
                type="button"
                className={`fit-applied-badge ${isFitMatch ? 'active-fit' : 'inactive-fit'}`}
                onClick={handleFitBadgeClick}
                title={isFitMatch ? 'AI Recommended Fit. Click to view sizing details.' : `Click to select recommended size ${userFitSize}`}
              >
                <span className="fit-badge-dot">●</span>
                <span>YOUR FIT: {userFitSize}</span>
                {!isFitMatch && <span className="fit-return-arrow">↩</span>}
              </button>
            ) : (
              <button
                type="button"
                className="fit-applied-badge not-set"
                onClick={handleFitBadgeClick}
                title="Calculate your custom recommended size with AI"
              >
                <span>📐 FIND MY FIT</span>
              </button>
            )}
          </div>

          <div className="size-buttons-group">
            {product.sizes.map(size => (
              <button
                key={size}
                type="button"
                className={`card-size-btn ${size === selectedSize ? 'active' : ''}`}
                onClick={() => selectProductSize(product.id, size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          className={`btn-card-add ${isAddedAnim ? 'added-success' : ''}`}
          onClick={handleAdd}
        >
          {isAddedAnim ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>ADDED ✓</span>
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>ADD TO CART</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}
