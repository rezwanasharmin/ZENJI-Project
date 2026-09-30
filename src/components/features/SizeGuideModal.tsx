'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';

export default function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen, setIsFitModalOpen } = useStore();

  if (!isSizeGuideOpen) return null;

  const handleLaunchAiFit = () => {
    setIsSizeGuideOpen(false);
    setIsFitModalOpen(true);
  };

  return (
    <div
      className={`modal-overlay ${isSizeGuideOpen ? 'active' : ''}`}
      id="size-guide-overlay"
      aria-hidden={!isSizeGuideOpen}
      style={{ display: 'flex', opacity: 1, visibility: 'visible', pointerEvents: 'auto' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsSizeGuideOpen(false);
      }}
    >
      <div className="modal-card size-guide-modal" style={{ transform: 'none' }} role="dialog" aria-modal="true" aria-labelledby="sg-title">
        <button
          type="button"
          className="modal-close-btn"
          id="size-guide-close"
          aria-label="Close size guide"
          onClick={() => setIsSizeGuideOpen(false)}
        >
          ✕
        </button>
        <div style={{ padding: '2.25rem' }}>
          <span className="section-label">FIT & MEASUREMENTS</span>
          <h2 className="display" id="sg-title" style={{ fontSize: '2rem' }}>
            ZENJI STREETWEAR SIZE GUIDE
          </h2>
          <p className="size-note" style={{ marginTop: '0.5rem' }}>
            All ZENJI tees are cut with an authentic Japanese boxy oversized fit and dropped shoulders. Measurements in centimetres (cm).
          </p>

          <table className="size-table">
            <thead>
              <tr>
                <th>SIZE</th>
                <th>CHEST (CM)</th>
                <th>LENGTH (CM)</th>
                <th>SHOULDER (CM)</th>
                <th>RECOMMENDED FIT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>XS</strong></td>
                <td>108</td>
                <td>70</td>
                <td>52</td>
                <td>Fitted / Petite</td>
              </tr>
              <tr>
                <td><strong>S</strong></td>
                <td>114</td>
                <td>72</td>
                <td>54</td>
                <td>Clean relaxed drape</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td>120</td>
                <td>74</td>
                <td>56</td>
                <td>Standard Streetwear</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td>126</td>
                <td>76</td>
                <td>58</td>
                <td>Oversized Silhouette</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td>132</td>
                <td>78</td>
                <td>60</td>
                <td>Heavy Baggy Cut</td>
              </tr>
              <tr>
                <td><strong>XXL</strong></td>
                <td>138</td>
                <td>80</td>
                <td>62</td>
                <td>Maximum Drop Shoulder</td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              marginTop: '1.25rem'
            }}
          >
            <strong style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              HOW TO MEASURE:
            </strong>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
              Lay your favourite streetwear t-shirt flat on a hard surface. Measure chest from armpit seam to armpit seam. Measure length from top of collar down to bottom hem.
            </p>
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <button
              type="button"
              className="btn-primary"
              id="btn-open-fit-calc-from-guide"
              style={{
                width: '100%',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #e63946 0%, #ff4757 100%)'
              }}
              onClick={handleLaunchAiFit}
            >
              <span>⚡ LAUNCH "FIND MY FIT" AI RECOMMENDER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
