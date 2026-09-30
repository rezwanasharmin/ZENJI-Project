'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { SizeOption } from '@/types';

type FitModelKey = 'tall' | 'mid' | 'petite';

interface FitModelData {
  heightLabel: string;
  sizeLabel: string;
  size: SizeOption;
  weight: string;
  tag: string;
  badge: string;
  title: string;
  note: string;
  chest: string;
  length: string;
  shoulder: string;
  sleeve: string;
  image: string;
  recommendation: string;
}

const FIT_MODELS: Record<FitModelKey, FitModelData> = {
  tall: {
    heightLabel: '182 CM (6\'0")',
    sizeLabel: 'WEARING SIZE L',
    size: 'L',
    weight: '78 KG',
    tag: '182 CM (6\'0") • 78 KG',
    badge: 'SIZE L // BOXY DRAPE',
    title: 'SIZE L // 182CM MODEL METRICS',
    note: '"At 182cm tall, Size L delivers the authentic Japanese boxy oversized silhouette. The shoulders drop 3 inches below the natural shoulder point, and the hem rests comfortably at the mid-fly without turning into a dress."',
    chest: '126 CM',
    length: '76 CM',
    shoulder: '58 CM (DROPPED)',
    sleeve: 'Mid-Bicep Stack',
    image: 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-2.webp',
    recommendation: 'If you prefer a relaxed streetwear drape with effortless stacking, select your true size (Size L). If you prefer a tighter casual fit, size down to Size M.'
  },
  mid: {
    heightLabel: '174 CM (5\'8")',
    sizeLabel: 'WEARING SIZE M',
    size: 'M',
    weight: '70 KG',
    tag: '174 CM (5\'8") • 70 KG',
    badge: 'SIZE M // CLEAN DRAPE',
    title: 'SIZE M // 174CM MODEL METRICS',
    note: '"At 174cm tall, Size M achieves the ideal proportional box cut. Sleeve opening stays structured and clean, giving room for arm articulation without excessive fabric pooling."',
    chest: '120 CM',
    length: '74 CM',
    shoulder: '56 CM (DROPPED)',
    sleeve: 'Above-Elbow Break',
    image: 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/v1790133898/zenji/products/water-breathing-tee-model.webp',
    recommendation: 'For standard heights, Size M provides a flawless Tokyo-streetwear aesthetic. If you want extreme baggy 90s skater proportions, size up to Size L.'
  },
  petite: {
    heightLabel: '165 CM (5\'5")',
    sizeLabel: 'WEARING SIZE S',
    size: 'S',
    weight: '60 KG',
    tag: '165 CM (5\'5") • 60 KG',
    badge: 'SIZE S // TAILORED RELAXED',
    title: 'SIZE S // 165CM MODEL METRICS',
    note: '"At 165cm tall, Size S prevents the tee from drowning your frame while preserving the dropped shoulder line and heavyweight 240GSM drape."',
    chest: '114 CM',
    length: '72 CM',
    shoulder: '54 CM (DROPPED)',
    sleeve: 'Elbow Graze',
    image: 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-2.webp',
    recommendation: 'Size S delivers a deliberate streetwear drop without excessive length. Sits perfectly over cargo trousers and denim.'
  }
};

export default function ModelFitVisualizer() {
  const { setIsSizeGuideOpen, setUserFitSize, showToast } = useStore();
  const [activeTab, setActiveTab] = useState<FitModelKey>('tall');

  const current = FIT_MODELS[activeTab];

  const handleShopSize = () => {
    setUserFitSize(current.size);
    showToast(`SELECTED SIZE ${current.size} FOR YOUR FIT!`, 'info');
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="fit-visualizer-section" id="fit-visualizer" aria-label="Model Fit & Height Visualizer">
      <div className="container">
        <div className="section-header-row" data-reveal="fade">
          <div>
            <span className="section-label">FIND YOUR DRAPE // STREETWEAR SILHOUETTE GUIDE</span>
            <h2 className="section-title">MODEL FIT & HEIGHT VISUALIZER</h2>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            COMPARE HOW SIZES FIT ACROSS DIFFERENT BODY HEIGHTS
          </div>
        </div>

        {/* Height & Model Tabs */}
        <div className="fit-tabs-row" role="tablist">
          {(Object.keys(FIT_MODELS) as FitModelKey[]).map((key) => {
            const m = FIT_MODELS[key];
            return (
              <button
                key={key}
                type="button"
                className={`fit-tab-btn ${activeTab === key ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === key}
                onClick={() => setActiveTab(key)}
              >
                <span className="tab-height">{m.heightLabel}</span>
                <span className="tab-size-tag">{m.sizeLabel}</span>
              </button>
            );
          })}
        </div>

        <div className="fit-display-card" id="fit-display-card">
          {/* Left: Model Photo with Height Overlay Scale */}
          <div className="fit-photo-col" data-reveal="left">
            <div className="fit-image-wrapper">
              <img
                src={current.image}
                alt="Model Fit Drape Preview"
                id="fit-model-img"
                className="fit-model-img"
              />
              <div className="fit-height-tag" id="fit-height-tag">
                {current.tag}
              </div>
              <div className="fit-size-badge" id="fit-size-badge">
                {current.badge}
              </div>
            </div>
          </div>

          {/* Right: Silhouette Breakdown & Measurement Metrics */}
          <div className="fit-metrics-col" data-reveal="right">
            <div className="fit-stat-header">
              <span className="fit-style-badge" id="fit-style-badge">
                SIGNATURE BOXY OVERSIZED
              </span>
              <h3 className="fit-model-title" id="fit-model-title">
                {current.title}
              </h3>
            </div>

            <p className="fit-editorial-note" id="fit-editorial-note">
              {current.note}
            </p>

            <div className="fit-metrics-grid">
              <div className="metric-cell">
                <span className="metric-label">CHEST WIDTH</span>
                <span className="metric-value" id="fit-chest-val">
                  {current.chest}
                </span>
              </div>
              <div className="metric-cell">
                <span className="metric-label">GARMENT LENGTH</span>
                <span className="metric-value" id="fit-length-val">
                  {current.length}
                </span>
              </div>
              <div className="metric-cell">
                <span className="metric-label">SHOULDER SLOPE</span>
                <span className="metric-value" id="fit-shoulder-val">
                  {current.shoulder}
                </span>
              </div>
              <div className="metric-cell">
                <span className="metric-label">SLEEVE DROP</span>
                <span className="metric-value" id="fit-sleeve-val">
                  {current.sleeve}
                </span>
              </div>
            </div>

            <div className="fit-recommendation-box">
              <strong style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                SIZING RECOMMENDATION:
              </strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }} id="fit-recommendation-text">
                {current.recommendation}
              </p>
            </div>

            <div className="fit-action-row">
              <button
                type="button"
                className="btn-primary"
                id="btn-fit-shop-size"
                onClick={handleShopSize}
              >
                <span>SHOP SIZE {current.size} DROPS ↗</span>
              </button>
              <button
                type="button"
                className="btn-secondary"
                id="fit-open-table-btn"
                onClick={() => setIsSizeGuideOpen(true)}
              >
                <span>FULL SIZE CHART</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
