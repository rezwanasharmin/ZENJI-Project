'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { CURRENCIES } from '../../data/products';
import { CurrencyCode } from '../../types';

export default function SiteHeader() {
  const {
    currentCurrency,
    setCurrency,
    isLoFiPlaying,
    toggleLoFi,
    unlockDomainExpansion,
    wishlist,
    cart,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsMobileNavOpen,
    setIsFitModalOpen,
    setIsSizeGuideOpen
  } = useStore();

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const currencyRef = useRef<HTMLDivElement | null>(null);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Monitor window scroll to apply is-scrolled class to sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close currency dropdown on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener('click', handleOutside);
    return () => document.removeEventListener('click', handleOutside);
  }, []);

  const currenciesList: CurrencyCode[] = ['AUD', 'USD', 'JPY', 'EUR', 'GBP'];

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="site-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="ZENJI Home">
          <span className="logo-text">ZENJI</span>
          <div className="logo-stamp">
            <span className="logo-kanji">禅時</span>
            <span className="logo-sub">MELB&nbsp;/&nbsp;TOKYO</span>
          </div>
        </a>

        {/* Central Capsule Navigation */}
        <nav className="nav-desktop" aria-label="Primary Navigation">
          <div className="nav-capsule">
            {/* Collections Dropdown */}
            <div
              className={`nav-item has-dropdown ${activeDropdown === 'collections' ? 'is-open' : ''}`}
              onMouseEnter={() => setActiveDropdown('collections')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#products" className="nav-capsule-link dropdown-trigger" id="nav-collections-trigger">
                <span>COLLECTIONS</span>
                <svg className="nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              <div className="nav-dropdown-menu" role="menu">
                <a href="#products" className="dropdown-item" role="menuitem" onClick={() => setActiveDropdown(null)}>
                  <div className="dropdown-item-top">
                    <span className="dropdown-item-title">ORIGIN DROP 01</span>
                    <span className="nav-micro-badge live">LIVE</span>
                  </div>
                  <span className="dropdown-item-sub">Heavyweight oversized graphic drops</span>
                </a>
                <a href="#products" className="dropdown-item" role="menuitem" onClick={() => setActiveDropdown(null)}>
                  <div className="dropdown-item-top">
                    <span className="dropdown-item-title">GRAPHIC TEES</span>
                    <span className="nav-micro-badge">240 GSM</span>
                  </div>
                  <span className="dropdown-item-sub">High-density anime silkscreen prints</span>
                </a>
                <a href="#bundle-builder" className="dropdown-item highlight-item" role="menuitem" onClick={() => setActiveDropdown(null)}>
                  <div className="dropdown-item-top">
                    <span className="dropdown-item-title" style={{ color: 'var(--accent-red)' }}>⚡ THE DUO ARC BUNDLE</span>
                    <span className="nav-micro-badge sale">SAVE A$15</span>
                  </div>
                  <span className="dropdown-item-sub">Curate 2 tees & unlock auto-discount</span>
                </a>
              </div>
            </div>

            {/* Tech Lab Dropdown */}
            <div
              className={`nav-item has-dropdown ${activeDropdown === 'tech' ? 'is-open' : ''}`}
              onMouseEnter={() => setActiveDropdown('tech')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#fabric-anatomy" className="nav-capsule-link dropdown-trigger" id="nav-techlab-trigger">
                <span>TECH LAB</span>
                <svg className="nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </a>
              <div className="nav-dropdown-menu" role="menu">
                <a href="#fabric-anatomy" className="dropdown-item" role="menuitem" onClick={() => setActiveDropdown(null)}>
                  <div className="dropdown-item-top">
                    <span className="dropdown-item-title">FABRIC ANATOMY</span>
                    <span className="nav-micro-badge radar">RADAR</span>
                  </div>
                  <span className="dropdown-item-sub">240GSM weave & reinforcement telemetry</span>
                </a>
                <a href="#fit-visualizer" className="dropdown-item" role="menuitem" onClick={() => setActiveDropdown(null)}>
                  <div className="dropdown-item-top">
                    <span className="dropdown-item-title">MODEL FIT VISUALIZER</span>
                    <span className="nav-micro-badge">182 / 174 / 165 CM</span>
                  </div>
                  <span className="dropdown-item-sub">Live drape & silhouette height comparison</span>
                </a>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => { setIsSizeGuideOpen(true); setActiveDropdown(null); }}
                  role="menuitem"
                >
                  <div className="dropdown-item-top">
                    <span className="dropdown-item-title">SIZE GUIDE & SPECS</span>
                    <span className="nav-micro-badge">MODAL</span>
                  </div>
                  <span className="dropdown-item-sub">Chest, length & shoulder size metrics</span>
                </button>
                <button
                  type="button"
                  className="dropdown-item highlight-item"
                  onClick={() => { setIsFitModalOpen(true); setActiveDropdown(null); }}
                  role="menuitem"
                >
                  <div className="dropdown-item-top">
                    <span className="dropdown-item-title" style={{ color: '#ff4757' }}>🎯 "FIND MY FIT" AI</span>
                    <span className="nav-micro-badge" style={{ background: 'rgba(255, 71, 87, 0.2)', color: '#ff4757', borderColor: 'rgba(255, 71, 87, 0.4)' }}>AI ENGINE</span>
                  </div>
                  <span className="dropdown-item-sub">Personalized boxy size recommendation</span>
                </button>
              </div>
            </div>

            <a href="#lookbook" className="nav-capsule-link">LOOKBOOK</a>
            <a href="#reviews" className="nav-capsule-link">
              <span>REVIEWS</span>
              <span className="nav-score-tag">★ 4.97</span>
            </a>
            <a href="#manifesto" className="nav-capsule-link">STORY</a>

            {/* Duo Bundle CTA */}
            <a href="#bundle-builder" className="nav-capsule-cta" title="Duo Bundle Builder - Save A$15">
              <span className="nav-cta-dot" />
              <span>⚡ DUO BUNDLE</span>
              <span className="nav-cta-discount">-A$15</span>
            </a>
          </div>
        </nav>

        {/* Action Controls & Docks */}
        <div className="header-actions">
          {/* Glass Tools Capsule (Currency, Lo-Fi, Secret Vault) */}
          <div className="header-tools-capsule">
            {/* Live Multi-Currency Switcher */}
            <div className={`currency-dropdown-wrap ${isCurrencyOpen ? 'is-open' : ''}`} ref={currencyRef}>
              <button
                type="button"
                className="btn-currency"
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                aria-label="Select Store Currency"
              >
                <span>{CURRENCIES[currentCurrency].flag}</span>
                <span>{currentCurrency}</span>
                <span className="curr-arrow">▾</span>
              </button>
              <div className="currency-menu" role="menu">
                {currenciesList.map(code => (
                  <button
                    key={code}
                    type="button"
                    className={`currency-opt ${currentCurrency === code ? 'active' : ''}`}
                    onClick={() => {
                      setCurrency(code);
                      setIsCurrencyOpen(false);
                    }}
                  >
                    <span className="opt-flag">{CURRENCIES[code].flag}</span>
                    {code}
                    <span className="opt-symbol">{CURRENCIES[code].symbol}</span>
                  </button>
                ))}
              </div>
            </div>

            <span className="header-tool-divider" aria-hidden="true" />

            {/* Tokyo Lo-Fi Synthesizer Engine */}
            <button
              type="button"
              className={`btn-audio-toggle ${isLoFiPlaying ? 'is-playing' : ''}`}
              onClick={toggleLoFi}
              aria-label="Toggle Tokyo Lo-Fi Ambience"
              title="Toggle Tokyo Lo-Fi Ambience Engine"
            >
              <div className="audio-bars">
                <span /><span /><span />
              </div>
              <span>LO-FI</span>
            </button>

            <span className="header-tool-divider" aria-hidden="true" />

            {/* Domain Expansion Secret Easter Egg Pill */}
            <button
              type="button"
              className="domain-secret-pill"
              onClick={unlockDomainExpansion}
              title="Domain Expansion: Shadow Vault (Shortcut: Type 'ZENJI')"
            >
              <span className="domain-pill-icon">⛩️</span>
              <span className="domain-pill-text">VAULT</span>
            </button>
          </div>

          {/* Commerce Actions Group */}
          <div className="header-commerce-group">
            {/* Search Quick Button */}
            <a
              href="#catalog-search-input"
              className="btn-icon"
              aria-label="Jump to search catalog"
              title="Search Pieces"
              onClick={(e) => {
                const input = document.getElementById('catalog-search-input');
                if (input) {
                  e.preventDefault();
                  input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  input.focus();
                }
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </a>

            {/* Wishlist Toggle */}
            <button
              type="button"
              className="btn-icon"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="View Wishlist"
              title="View Wishlist"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="cart-count-badge" id="wishlist-badge">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              type="button"
              className="btn-cart"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Cart"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="btn-cart-text">CART</span>
              <span className="cart-count-badge" id="header-cart-count">
                {totalCartCount}
              </span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              type="button"
              className="btn-icon mobile-menu-toggle"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
