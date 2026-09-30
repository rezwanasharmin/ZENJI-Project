'use client';

import React from 'react';

export default function UnboxingSection() {
  return (
    <section className="unboxing-section" id="unboxing">
      <div className="unboxing-bg-glow" />
      <div className="container">
        <div className="unboxing-header" data-reveal="fade-up">
          <span className="unboxing-badge">UNBOXING RITUAL // パッケージ仕様</span>
          <h2 className="unboxing-title">
            NOT JUST A PARCEL.<br />
            <span>A COLLECTOR'S ARTIFACT.</span>
          </h2>
          <p className="unboxing-desc">
            Every ZENJI piece is dispatched in custom sealed armor. From bespoke waterproof mailers to serialized holographic archive cards, the drop experience starts before you touch the fabric.
          </p>
        </div>

        <div className="unboxing-grid">
          {/* Artifact 1 */}
          <div className="unboxing-card" data-reveal="left" data-delay="100">
            <span className="unboxing-card-num">ARTIFACT 01 // EXTERIOR</span>
            <div className="unboxing-icon-wrap">📦</div>
            <h3 className="unboxing-card-title">MATTE-BLACK SHIELD MAILER</h3>
            <span className="unboxing-card-jp">高耐久マットブラック包装</span>
            <p className="unboxing-desc">
              120-micron puncture-proof custom polymer with soft-touch matte finish and gloss UV cursed energy sigil typography. Weatherproof protection against Australia's wildest elements.
            </p>
            <ul className="unboxing-spec-list">
              <li className="unboxing-spec-item">Dual Tamper-Evident Adhesive</li>
              <li className="unboxing-spec-item">100% Recyclable Eco-Polymer</li>
              <li className="unboxing-spec-item">High-Gloss UV Tactile Print</li>
            </ul>
          </div>

          {/* Artifact 2 */}
          <div className="unboxing-card" data-reveal="fade-up" data-delay="200">
            <span className="unboxing-card-num">ARTIFACT 02 // AUTHENTICITY</span>
            <div className="unboxing-icon-wrap">🎴</div>
            <h3 className="unboxing-card-title">SERIALIZED 1/1 ARCHIVE CARD</h3>
            <span className="unboxing-card-jp">シリアルナンバー入り鑑定書</span>
            <p className="unboxing-desc">
              700GSM velvet-laminated collector card featuring rainbow holographic foil stamping. Hand-stamped with your order's individual production batch serial number.
            </p>
            <ul className="unboxing-spec-list">
              <li className="unboxing-spec-item">Prismatic Foil Kanji Inlay</li>
              <li className="unboxing-spec-item">Unique Drop Batch Serial #</li>
              <li className="unboxing-spec-item">Permanent Provenance Record</li>
            </ul>
          </div>

          {/* Artifact 3 */}
          <div className="unboxing-card" data-reveal="fade-up" data-delay="300">
            <span className="unboxing-card-num">ARTIFACT 03 // BONUS GEAR</span>
            <div className="unboxing-icon-wrap">⚡</div>
            <h3 className="unboxing-card-title">DIE-CUT VINYL STICKER PACK</h3>
            <span className="unboxing-card-jp">特製ダイカットステッカー</span>
            <p className="unboxing-desc">
              Three heavyweight 6mil vinyl stickers with matte UV laminate. Waterproof and scratch-resistant for skate decks, laptops, water bottles, and street slaps.
            </p>
            <ul className="unboxing-spec-list">
              <li className="unboxing-spec-item">3 Unique Drop Motifs Included</li>
              <li className="unboxing-spec-item">Outdoor 5-Year UV Rated</li>
              <li className="unboxing-spec-item">Residue-Free Clean Peel</li>
            </ul>
          </div>

          {/* Artifact 4 */}
          <div className="unboxing-card" data-reveal="right" data-delay="400">
            <span className="unboxing-card-num">ARTIFACT 04 // PRESERVATION</span>
            <div className="unboxing-icon-wrap">📜</div>
            <h3 className="unboxing-card-title">COTTON CARE CODEX</h3>
            <span className="unboxing-card-jp">取扱説明書 // 永続的保存法</span>
            <p className="unboxing-desc">
              Archival parchment card detailing proper cold-wash, hang-dry, and iron-reverse procedures to maintain 240GSM cotton density and silkscreen sharpness for a lifetime.
            </p>
            <ul className="unboxing-spec-list">
              <li className="unboxing-spec-item">Cold Wash 30°C Protocols</li>
              <li className="unboxing-spec-item">Zero-Bleed Ink Preservation</li>
              <li className="unboxing-spec-item">Anti-Bacon Collar Care Guide</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
