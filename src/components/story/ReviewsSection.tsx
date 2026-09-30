'use client';

import React from 'react';

export default function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews" aria-label="Customer Reviews">
      <div className="container">
        <div className="section-header-row" data-reveal="fade">
          <div>
            <span className="section-label">
              <span>★</span> VERIFIED BUYER PROOF // 1,200+ 5-STAR RATINGS
            </span>
            <h2 className="section-title">WHAT THE OTAKU SAY</h2>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-red)', fontWeight: 700 }}>
            OVERALL 4.97 / 5.0 • 100% SCREENPRINT RETENTION
          </div>
        </div>

        {/* 4 Reviews Grid */}
        <div className="reviews-grid">
          <div className="review-card" data-reveal="left">
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">
              "The collar on the Blue Flame Tee is indestructible. I've washed it 15 times and there is zero baconing or sagging. Boxy streetwear fit is spot on."
            </p>
            <div className="reviewer-meta">
              <span className="reviewer-name">LIAM K.</span>
              <span className="reviewer-badge">VERIFIED BUYER • MELBOURNE</span>
              <span className="reviewer-item">PIECE: BLUE FLAME TEE (L)</span>
            </div>
          </div>

          <div className="review-card" data-reveal="top">
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">
              "Demon Blood Tee back print is artwork level. People ask about the kanji technique without even knowing it's anime inspired. Heavy 240GSM cotton feels like luxury."
            </p>
            <div className="reviewer-meta">
              <span className="reviewer-name">REN A.</span>
              <span className="reviewer-badge">VERIFIED BUYER • SYDNEY</span>
              <span className="reviewer-item">PIECE: DEMON BLOOD TEE (XL)</span>
            </div>
          </div>

          <div className="review-card" data-reveal="top">
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">
              "Hands down the best anime streetwear brand in Australia. Dispatched from Melbourne in 2 days. The sand tone on Bushido Tee looks insane with cargo pants."
            </p>
            <div className="reviewer-meta">
              <span className="reviewer-name">MARCUS T.</span>
              <span className="reviewer-badge">VERIFIED BUYER • BRISBANE</span>
              <span className="reviewer-item">PIECE: BUSHIDO TEE (M)</span>
            </div>
          </div>

          <div className="review-card" data-reveal="right">
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">
              "Domain Expansion is unreal. The plastisol ink doesn't stick or feel plastic-like. Drop 01 scarcity is real — glad I copped before my size sold out."
            </p>
            <div className="reviewer-meta">
              <span className="reviewer-name">CHLOE S.</span>
              <span className="reviewer-badge">VERIFIED BUYER • PERTH</span>
              <span className="reviewer-item">PIECE: DOMAIN EXPANSION (S)</span>
            </div>
          </div>
        </div>

        {/* Instagram Community Ticker Banner */}
        <div className="community-banner" data-reveal="up">
          <div className="community-banner-left">
            <span className="community-tag">FOLLOW THE LORE</span>
            <h3 className="community-title">TAG @ZENJI_.SHOP TO BE FEATURED</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Join our discord vault & community feed. Streetwear fits curated weekly.
            </p>
          </div>
          <a
            href="https://www.instagram.com/zenji_.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ borderColor: 'var(--accent-red)', color: '#fff' }}
          >
            <span>VIEW INSTAGRAM ARCHIVE ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
