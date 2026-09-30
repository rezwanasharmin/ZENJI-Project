'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS_DATA } from '../../data/products';
import { SizeOption } from '../../types';

export default function HeroSection() {
  const { addToCart, setIsCartOpen, formatPrice, userFitSize } = useStore();
  const [activeAngle, setActiveAngle] = useState<'front' | 'back' | 'detail'>('front');
  const [selectedHeroSize, setSelectedHeroSize] = useState<SizeOption>('M');

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 13, mins: 59, secs: 48 });

  useEffect(() => {
    if (userFitSize) {
      setSelectedHeroSize(userFitSize);
    }
  }, [userFitSize]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const blueFlame = PRODUCTS_DATA.find(p => p.id === 'blue-flame-tee') || PRODUCTS_DATA[0];
  const sizeOptions: SizeOption[] = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleHeroQuickAdd = () => {
    addToCart(blueFlame, selectedHeroSize, 1);
    setIsCartOpen(true);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        {/* Left Hero Content */}
        <div className="hero-content">
          <div className="hero-badge-row">
            <span className="tag-pill live-drop">
              <span className="pulse-dot" />
              ORIGIN DROP 01 // LIVE
            </span>
            <span className="tag-pill location">
              AU // 37.8136° S
            </span>
            <span className="tag-pill" style={{ border: '1px solid var(--border-medium)', color: 'var(--text-muted)', fontSize: '0.68rem' }}>
              ZERO RESTOCKS
            </span>
          </div>

          <h1 className="hero-title">
            <span className="kanji-accent">魂の軌跡 — WEAR THE ARC</span>
            <span className="text-mask-reveal">
              <span>WEAR THE <span className="highlight">ARC.</span></span>
            </span>
          </h1>

          <p className="hero-lead">
            <strong>ZENJI</strong> is an Australian anime streetwear label crafted for people who let the reference read as design first. 
            Heavyweight <strong>240GSM combed cotton</strong>, boxy oversized cuts, and hand-rendered shonen graphics that command the room. 
            Once a drop sells out, it is never reprinted.
          </p>

          {/* Drop 02 Countdown Box */}
          <div className="countdown-box" aria-label="Countdown to next drop">
            <div className="countdown-label">
              <span>NEXT VAULT LOCK</span>
              <strong style={{ color: 'var(--text-primary)' }}>LIMITED STOCK RUN</strong>
            </div>
            <div className="countdown-digits">
              <div className="time-slot">
                <span className="time-num" id="cd-days">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="time-unit">DAYS</span>
              </div>
              <span className="time-colon">:</span>
              <div className="time-slot">
                <span className="time-num" id="cd-hours">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="time-unit">HRS</span>
              </div>
              <span className="time-colon">:</span>
              <div className="time-slot">
                <span className="time-num" id="cd-mins">{String(timeLeft.mins).padStart(2, '0')}</span>
                <span className="time-unit">MIN</span>
              </div>
              <span className="time-colon">:</span>
              <div className="time-slot">
                <span className="time-num" id="cd-secs">{String(timeLeft.secs).padStart(2, '0')}</span>
                <span className="time-unit">SEC</span>
              </div>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="hero-cta-group">
            <a href="#products" className="btn-primary" id="hero-shop-cta">
              <span>EXPLORE THE DROP</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>

            <a href="#lookbook" className="btn-secondary">
              <span>VIEW LOOKBOOK</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </a>
          </div>

          {/* Scroll Cue */}
          <div className="scroll-indicator-cue">
            <div className="cue-pill">
              <span className="cue-dot" />
              <span>SCROLL TO REVEAL DROP 01 // 展開 ↓</span>
            </div>
          </div>
        </div>

        {/* Right Hero Spotlight Interactive Showcase */}
        <div className="hero-spotlight-card" id="hero-showcase">
          <div className="hero-spotlight-header">
            <span className="spotlight-badge">FEATURED PIECE // DROP 01</span>
            <div className="spotlight-views" role="group" aria-label="Toggle Hero Image Angle">
              <button
                type="button"
                className={`btn-view-toggle ${activeAngle === 'front' ? 'active' : ''}`}
                onClick={() => setActiveAngle('front')}
              >
                FRONT
              </button>
              <button
                type="button"
                className={`btn-view-toggle ${activeAngle === 'back' ? 'active' : ''}`}
                onClick={() => setActiveAngle('back')}
              >
                BACK
              </button>
              <button
                type="button"
                className={`btn-view-toggle ${activeAngle === 'detail' ? 'active' : ''}`}
                onClick={() => setActiveAngle('detail')}
              >
                DETAIL
              </button>
            </div>
          </div>

          <div className="spotlight-image-wrapper">
            <img
              id="hero-spotlight-img"
              src={blueFlame.images[activeAngle]}
              alt="BLUE FLAME TEE — Limited Anime Streetwear"
            />
          </div>

          <div className="spotlight-details">
            <div className="spotlight-title-row">
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-red)', fontWeight: 700 }}>
                  SALE 15% OFF
                </span>
                <h3 className="spotlight-title">BLUE FLAME TEE</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Washed Vintage Black // 240GSM
                </span>
              </div>
              <div className="spotlight-price">
                <div className="price-current">{formatPrice(blueFlame.price)}</div>
                <div className="price-original">{formatPrice(39.99)}</div>
              </div>
            </div>

            {/* In-Hero Size Selector */}
            <div className="hero-size-row">
              <span className="hero-size-label">SIZE:</span>
              <div className="size-chips-group" id="hero-size-group" role="radiogroup" aria-label="Select hero tee size">
                {sizeOptions.map(sz => (
                  <button
                    key={sz}
                    type="button"
                    className={`size-chip ${selectedHeroSize === sz ? 'selected' : ''}`}
                    onClick={() => setSelectedHeroSize(sz)}
                    role="radio"
                    aria-checked={selectedHeroSize === sz}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Add Button */}
            <button
              type="button"
              className="btn-spotlight-add"
              id="hero-quick-add-btn"
              onClick={handleHeroQuickAdd}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>QUICK ADD TO CART • {formatPrice(blueFlame.price)}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
