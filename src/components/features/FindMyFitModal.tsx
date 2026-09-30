'use client';

import React, { useState, useMemo } from 'react';
import { useStore } from '@/context/StoreContext';
import { SizeOption } from '@/types';

export default function FindMyFitModal() {
  const { isFitModalOpen, setIsFitModalOpen, setUserFitSize, showToast, selectProductSize, products } = useStore();

  const [height, setHeight] = useState(178);
  const [weight, setWeight] = useState(76);
  const [drape, setDrape] = useState<'relaxed' | 'oversized' | 'ultra'>('oversized');
  const [isApplied, setIsApplied] = useState(false);

  const recommendedSize = useMemo<SizeOption>(() => {
    // Sizing algorithm
    const sizesOrder: SizeOption[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    let baseIndex = 2; // 'M'

    if (height < 165) baseIndex = 0; // XS
    else if (height < 172) baseIndex = 1; // S
    else if (height < 180) baseIndex = 2; // M
    else if (height < 187) baseIndex = 3; // L
    else if (height < 194) baseIndex = 4; // XL
    else baseIndex = 5; // XXL

    // Weight modifier via BMI
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    if (bmi > 26.5 && baseIndex < 5) baseIndex += 1;
    if (bmi < 19.5 && baseIndex > 0) baseIndex -= 1;

    // Drape preference modifier
    if (drape === 'ultra' && baseIndex < 5) baseIndex += 1;
    if (drape === 'relaxed' && baseIndex > 0) baseIndex -= 1;

    return sizesOrder[baseIndex];
  }, [height, weight, drape]);

  const metricsDescriptions: Record<SizeOption, string> = {
    XS: 'Chest: 108cm • +6cm ease over chest • Shoulder drop: 52cm',
    S: 'Chest: 114cm • +8cm ease over chest • Shoulder drop: 54cm',
    M: 'Chest: 120cm • +10cm ease over chest • Shoulder drop: 56cm',
    L: 'Chest: 126cm • +12cm ease over chest • Shoulder drop: 58cm',
    XL: 'Chest: 132cm • +15cm ease over chest • Shoulder drop: 60cm',
    XXL: 'Chest: 138cm • +18cm ease over chest • Shoulder drop: 62cm'
  };

  const handleApply = () => {
    setUserFitSize(recommendedSize);
    // Apply this size to all products in catalog
    products.forEach((p) => {
      if (p.sizes.includes(recommendedSize)) {
        selectProductSize(p.id, recommendedSize);
      }
    });
    setIsApplied(true);
    showToast(`✓ APPLIED AI FIT (SIZE ${recommendedSize}) TO ALL CATALOG PIECES!`, 'success');
    setTimeout(() => {
      setIsFitModalOpen(false);
      setIsApplied(false);
    }, 800);
  };

  if (!isFitModalOpen) return null;

  return (
    <div
      className={`fit-calc-overlay ${isFitModalOpen ? 'is-active' : ''}`}
      id="fit-calc-overlay"
      aria-hidden={!isFitModalOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="fit-calc-title"
      style={{ display: 'flex', opacity: 1, pointerEvents: 'auto' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsFitModalOpen(false);
      }}
    >
      <div className="fit-calc-modal" style={{ transform: 'none' }}>
        <button
          type="button"
          className="fit-calc-close"
          id="fit-calc-close"
          aria-label="Close fit calculator"
          onClick={() => setIsFitModalOpen(false)}
        >
          ✕
        </button>

        <div className="fit-calc-header">
          <span className="fit-calc-badge">AI SILHOUETTE RECOMMENDER // 仕様診断</span>
          <h3 className="fit-calc-title" id="fit-calc-title">
            FIND YOUR STREETWEAR FIT
          </h3>
          <p className="fit-calc-desc">
            Our heavy 240GSM cotton has a custom Melbourne boxy streetwear silhouette with dropped shoulders. Dial in your proportions for algorithmic precision.
          </p>
        </div>

        {/* Height & Weight Sliders */}
        <div className="fit-controls-grid">
          <div className="fit-input-card">
            <div className="fit-label-row">
              <span className="fit-label">HEIGHT</span>
              <span className="fit-val-tag" id="fit-height-val">
                {height} cm
              </span>
            </div>
            <input
              type="range"
              className="fit-slider"
              id="fit-height-slider"
              min="150"
              max="205"
              value={height}
              step="1"
              aria-label="Your height in centimeters"
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>

          <div className="fit-input-card">
            <div className="fit-label-row">
              <span className="fit-label">WEIGHT</span>
              <span className="fit-val-tag" id="fit-weight-val">
                {weight} kg
              </span>
            </div>
            <input
              type="range"
              className="fit-slider"
              id="fit-weight-slider"
              min="45"
              max="130"
              value={weight}
              step="1"
              aria-label="Your weight in kilograms"
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Drape Preference */}
        <div className="fit-drape-group">
          <div className="fit-drape-title">CHOOSE DESIRED DRAPE PROFILE:</div>
          <div className="fit-drape-options">
            <button
              type="button"
              className={`fit-drape-btn ${drape === 'relaxed' ? 'active' : ''}`}
              onClick={() => setDrape('relaxed')}
            >
              <span className="fit-drape-name">RELAXED STANDARD</span>
              <span className="fit-drape-desc">True to size body with subtle shoulder ease</span>
            </button>
            <button
              type="button"
              className={`fit-drape-btn ${drape === 'oversized' ? 'active' : ''}`}
              onClick={() => setDrape('oversized')}
            >
              <span className="fit-drape-name">SIGNATURE BOXY</span>
              <span className="fit-drape-desc">The Zenji intended drop with +8cm chest ease</span>
            </button>
            <button
              type="button"
              className={`fit-drape-btn ${drape === 'ultra' ? 'active' : ''}`}
              onClick={() => setDrape('ultra')}
            >
              <span className="fit-drape-name">EXTREME OVERSIZED</span>
              <span className="fit-drape-desc">Maximum Harajuku 90s skater drape</span>
            </button>
          </div>
        </div>

        {/* Real-time AI Sizing Analysis Output */}
        <div className="fit-result-card">
          <div className="fit-result-left">
            <div className="fit-size-circle" id="fit-size-output">
              {recommendedSize}
            </div>
            <div className="fit-result-meta">
              <h4>
                RECOMMENDED SILHOUETTE:{' '}
                <span id="fit-size-label" style={{ color: '#ff4757' }}>
                  SIZE {recommendedSize}
                </span>
              </h4>
              <p id="fit-metrics-desc">{metricsDescriptions[recommendedSize]}</p>
              {isApplied && (
                <div className="fit-applied-badge" id="fit-status-tag" style={{ display: 'inline-flex' }}>
                  ✓ APPLIED TO CATALOG DROP
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            className="btn-apply-fit"
            id="btn-apply-my-fit"
            onClick={handleApply}
          >
            <span>APPLY TO ALL TEES</span>
          </button>
        </div>
      </div>
    </div>
  );
}
