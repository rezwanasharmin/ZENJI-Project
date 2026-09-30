'use client';

import React from 'react';
import { useStore } from '../../context/StoreContext';

export default function MobileNavDrawer() {
  const { isMobileNavOpen, setIsMobileNavOpen, setIsSizeGuideOpen, setIsFitModalOpen } = useStore();

  if (!isMobileNavOpen) return null;

  return (
    <div className={`cart-drawer-overlay ${isMobileNavOpen ? 'active' : ''}`} onClick={() => setIsMobileNavOpen(false)}>
      <div className="cart-drawer mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <div className="brand-logo">
            <span className="logo-text">ZENJI</span>
            <div className="logo-stamp">
              <span className="logo-kanji">禅時</span>
              <span className="logo-sub">MELB&nbsp;/&nbsp;TOKYO</span>
            </div>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={() => setIsMobileNavOpen(false)}
            aria-label="Close mobile navigation"
          >
            ✕
          </button>
        </div>

        <div className="mobile-drawer-body">
          {/* Section 1: Collections */}
          <div className="mobile-nav-group">
            <span className="mobile-nav-heading">COLLECTIONS</span>
            <a href="#products" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>
              <span>ORIGIN DROP 01</span>
              <span className="nav-micro-badge live">4 PIECES</span>
            </a>
            <a href="#products" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>
              <span>GRAPHIC TEES</span>
              <span className="nav-micro-badge">240 GSM</span>
            </a>
            <a href="#bundle-builder" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>
              <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>⚡ DUO BUNDLE ARC</span>
              <span className="nav-micro-badge sale">SAVE A$15</span>
            </a>
          </div>

          {/* Section 2: Tech Lab */}
          <div className="mobile-nav-group">
            <span className="mobile-nav-heading">TECH & FIT LAB</span>
            <a href="#fabric-anatomy" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>
              <span>FABRIC ANATOMY & RADAR</span>
              <span className="nav-micro-badge radar">TECH</span>
            </a>
            <a href="#fit-visualizer" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>
              <span>MODEL FIT VISUALIZER</span>
              <span className="nav-micro-badge">HEIGHTS</span>
            </a>
            <button
              type="button"
              className="mobile-nav-item btn-mobile-item"
              onClick={() => {
                setIsMobileNavOpen(false);
                setIsSizeGuideOpen(true);
              }}
            >
              <span>SIZE GUIDE & MEASUREMENTS</span>
              <span className="nav-micro-badge">CALC</span>
            </button>
            <button
              type="button"
              className="mobile-nav-item btn-mobile-item"
              onClick={() => {
                setIsMobileNavOpen(false);
                setIsFitModalOpen(true);
              }}
            >
              <span>FIND MY FIT (AI)</span>
              <span className="nav-micro-badge" style={{ color: '#ff4757' }}>AI</span>
            </button>
          </div>

          {/* Section 3: Brand & Community */}
          <div className="mobile-nav-group">
            <span className="mobile-nav-heading">BRAND & COMMUNITY</span>
            <a href="#lookbook" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>EDITORIAL LOOKBOOK</a>
            <a href="#reviews" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>
              <span>VERIFIED REVIEWS</span>
              <span className="nav-score-tag">★ 4.97 / 5</span>
            </a>
            <a href="#manifesto" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>MELBOURNE STORY & MANIFESTO</a>
            <a href="#faq" className="mobile-nav-item" onClick={() => setIsMobileNavOpen(false)}>SHIPPING & CARE FAQ</a>
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href="#bundle-builder"
              className="btn-primary mobile-nav-item"
              onClick={() => setIsMobileNavOpen(false)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', textDecoration: 'none', padding: '0.85rem' }}
            >
              <span>BUILD DUO BUNDLE</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.1rem 0.4rem', borderRadius: '3px', fontSize: '0.72rem' }}>SAVE A$15</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
