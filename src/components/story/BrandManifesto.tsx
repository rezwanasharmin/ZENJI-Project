'use client';

import React from 'react';

export default function BrandManifesto() {
  return (
    <section className="manifesto-section" id="manifesto">
      <div className="container">
        <div className="manifesto-banner">
          <div data-reveal="left">
            <span className="section-label">ORIGIN STORY // EST. 2024</span>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}>
              ANIME STREETWEAR<br />
              <span style={{ color: 'var(--accent-red)' }}>WITHOUT COMPROMISE.</span>
            </h2>
          </div>
          <div data-reveal="right">
            <p className="manifesto-lead">
              <strong>ZENJI</strong> was founded in Melbourne by anime fans who grew up on late-night subtitled fansubs and endless shonen training arcs. 
              We were tired of cheap promotional merch and thin polyester tees. We wanted anime streetwear that borrows Japanese minimalist restraint — 
              heavy 240GSM combed cotton, muted earth-and-obsidian colorways, and artwork that commands respect as high-tier design first.
            </p>
          </div>
        </div>

        {/* Three Craft Pillars */}
        <div className="craft-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-num">01 // FABRIC ARCHITECTURE</div>
            <h3 className="pillar-title">240 GSM HEAVYWEIGHT COTTON</h3>
            <p className="pillar-text">
              Garment-washed and pre-shrunk so your tee holds its signature boxy silhouette. Ribbed 1.25" crewneck that will never bacon or sag after washing.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">02 // SINGLE-RUN PRINTING</div>
            <h3 className="pillar-title">MULTI-PASS SCREENPRINT</h3>
            <p className="pillar-text">
              Drawn specifically for each drop and printed with premium plastisol inks. Soft hand-feel that ages beautifully with cracking resistance built-in.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">03 // VAULT ARCHIVE</div>
            <h3 className="pillar-title">ZERO RESTOCKS. EVER.</h3>
            <p className="pillar-text">
              Every drop is small, finite, and serialized. When a tee sells through its allocation, the production screens are destroyed. The piece you own stays yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
