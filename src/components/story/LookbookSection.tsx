'use client';

import React from 'react';

export default function LookbookSection() {
  return (
    <section className="lookbook-section" id="lookbook">
      <div className="container">
        <div className="section-header-row" data-reveal="fade">
          <div>
            <span className="section-label">EDITORIAL // STREETWEAR IN MOTION</span>
            <h2 className="section-title">THE LOOKBOOK // VOL. 01</h2>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            SHOT ON LOCATION • MELBOURNE CBD
          </div>
        </div>

        <div className="lookbook-grid">
          <div className="lookbook-item">
            <img
              src="https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/v1790133898/zenji/products/water-breathing-tee-model.webp"
              alt="Zenji Streetwear Model Editorial 1"
              loading="lazy"
            />
            <div className="lookbook-meta">
              <span className="lookbook-tag">LOOK 01 // OVERSIZED DRAPE</span>
              <div className="lookbook-title">WATER BREATHING TEE</div>
            </div>
          </div>

          <div className="lookbook-item">
            <img
              src="https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-2.webp"
              alt="Bushido Tee Back Artwork Showcase"
              loading="lazy"
            />
            <div className="lookbook-meta">
              <span className="lookbook-tag">LOOK 02 // EARTH TONE PALETTE</span>
              <div className="lookbook-title">BUSHIDO BACK DETAIL</div>
            </div>
          </div>

          <div className="lookbook-item">
            <img
              src="https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-2.webp"
              alt="Domain Expansion Back Print Editorial"
              loading="lazy"
            />
            <div className="lookbook-meta">
              <span className="lookbook-tag">LOOK 03 // BARRIER SPATIAL ART</span>
              <div className="lookbook-title">DOMAIN EXPANSION TEE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
