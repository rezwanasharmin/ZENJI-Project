'use client';

import React, { useState, useMemo } from 'react';
import { useStore } from '@/context/StoreContext';
import ProductCard from './ProductCard';

export default function ProductCatalog() {
  const { products, selectedCategory, setSelectedCategory } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name-asc'>('featured');

  // Calculate counts for categories
  const countAll = products.length;
  const countTees = products.filter((p) => p.category === 'tees').length;
  const countSale = products.filter((p) => p.sale).length;

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category filter
    if (selectedCategory === 'tees') {
      list = list.filter((p) => p.category === 'tees');
    } else if (selectedCategory === 'sale') {
      list = list.filter((p) => p.sale);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.technique.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        // maintain original catalog order
        break;
    }

    return list;
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section className="storefront-section" id="products">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-row" data-reveal="fade">
          <div>
            <span className="section-label">
              <span>●</span> ORIGIN COLLECTION // 2026 DROP
            </span>
            <h2 className="section-title">THE ARCHIVE // CURRENT DROPS</h2>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            UNISEX OVERSIZED BOX CUT • SIZES XS TO XXL
          </div>
        </div>

        {/* Filter, Search and Sort Toolbar */}
        <div className="catalog-toolbar" role="search" aria-label="Product filters and search" data-reveal="up">
          {/* Filter Tabs */}
          <div className="filter-tabs" role="tablist" aria-label="Filter products by category">
            <button
              type="button"
              className={`tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
            >
              ALL PIECES (<span id="count-all">{countAll}</span>)
            </button>
            <button
              type="button"
              className={`tab-btn ${selectedCategory === 'tees' ? 'active' : ''}`}
              role="tab"
              aria-selected={selectedCategory === 'tees'}
              onClick={() => setSelectedCategory('tees')}
            >
              CORE TEES (<span id="count-tees">{countTees}</span>)
            </button>
            <button
              type="button"
              className={`tab-btn sale-tab ${selectedCategory === 'sale' ? 'active' : ''}`}
              role="tab"
              aria-selected={selectedCategory === 'sale'}
              onClick={() => setSelectedCategory('sale')}
            >
              SALE 15% OFF (<span id="count-sale">{countSale}</span>)
            </button>
          </div>

          {/* Live Search & Sort */}
          <div className="search-and-sort">
            <div className="search-input-box">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                id="catalog-search"
                className="search-field"
                placeholder="Search tee, technique..."
                aria-label="Search tees"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select
              id="catalog-sort"
              className="sort-select"
              aria-label="Sort products"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="featured">Featured Drops</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Dynamic Product Results Meta Row */}
        <div className="product-meta-row">
          <span id="results-count-text">
            SHOWING {filteredProducts.length} LIMITED {filteredProducts.length === 1 ? 'PIECE' : 'PIECES'}
          </span>
          <span style={{ color: 'var(--accent-red)' }}>LIMITED BATCH // NO RESTOCKS</span>
        </div>

        {/* Product Cards Grid Container */}
        <div className="products-grid" id="products-grid" role="region" aria-label="Product Catalog">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-secondary)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>NO MATCHING PIECES FOUND</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>Try refining your search term or select "ALL PIECES".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
