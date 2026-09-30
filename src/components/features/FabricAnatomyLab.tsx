'use client';

import React, { useState } from 'react';

type HotspotKey = 'collar' | 'print' | 'shoulder' | 'hem';

interface HotspotData {
  badge: string;
  kanji: string;
  title: string;
  desc: string;
  stat1Key: string;
  stat1Val: string;
  stat2Key: string;
  stat2Val: string;
  stat3Key: string;
  stat3Val: string;
  stat4Key: string;
  stat4Val: string;
  macroNote: string;
}

const HOTSPOTS: Record<HotspotKey, HotspotData> = {
  collar: {
    badge: 'ZONE 01 // CRITICAL FIT POINT',
    kanji: '首回り',
    title: '1.25" HEAVY RIBBED CREWNECK',
    desc: 'Constructed with high-elasticity 1x1 rib knit reinforced with twin-needle neck tape. Stress-tested across 25+ wash cycles to prevent baconing, stretching, or rolling.',
    stat1Key: 'TENSION RETENTION',
    stat1Val: '99.4% After 20 Washes',
    stat2Key: 'COLLAR WIDTH',
    stat2Val: '1.25" Heavy Gauge',
    stat3Key: 'STITCH METHOD',
    stat3Val: 'Double Needle Coverstitch',
    stat4Key: 'LIFETIME SAG PROMISE',
    stat4Val: 'Zero Bacon Guarantee',
    macroNote: 'Notice the dense stitch count per inch. No exposed raw seams against the collar bone for maximum neck comfort.'
  },
  print: {
    badge: 'ZONE 02 // GRAPHIC LONGEVITY',
    kanji: '多層印刷',
    title: 'MULTI-PASS SCREENPRINT ARCHITECTURE',
    desc: 'Triple-pass micro-ground plastisol inks heat-cured at 165°C. Yields an ultra-crisp anime graphic that bends naturally with the 240GSM cotton without cracking.',
    stat1Key: 'CRACK RESISTANCE',
    stat1Val: '40+ Wash Crack Proof',
    stat2Key: 'INK RETENTION',
    stat2Val: 'Zero Flake Formulation',
    stat3Key: 'WEAR COMFORT',
    stat3Val: 'Breathable Soft Hand-feel',
    stat4Key: 'COLOUR DENSITY',
    stat4Val: 'High-Density Pigment',
    macroNote: 'Microscopic inspection reveals pigment penetrating deep between cotton fibers rather than sitting as a stiff plastic shield.'
  },
  shoulder: {
    badge: 'ZONE 03 // SILHOUETTE DRAPE',
    kanji: 'ドロップ肩',
    title: 'JAPANESE DROPPED SHOULDER SLOPE',
    desc: 'Engineered with an extra 6-8cm seam extension past the acromion bone. Gives effortless relaxed Harajuku posture without armpit bunching.',
    stat1Key: 'SEAM OFFSET',
    stat1Val: '+8cm Engineered Drop',
    stat2Key: 'LOAD DISPERSION',
    stat2Val: 'Tension Relief Seams',
    stat3Key: 'BOX DRAPE',
    stat3Val: 'Structured Box Stacking',
    stat4Key: 'CHEST HARMONY',
    stat4Val: 'Flattering Torso Proportion',
    macroNote: 'Reinforced twin-chain stitch prevents the heavy cotton weight from pulling the shoulder seam downward over time.'
  },
  hem: {
    badge: 'ZONE 04 // SUBSTANCE & HAND-FEEL',
    kanji: '超長綿重布',
    title: '240 GSM COMBED COTTON FOUNDATION',
    desc: 'Pre-shrunk, combed ringspun yarn knitted at maximum gauge density. Heavy enough to drape straight without clinging to the torso in Australian summer heat.',
    stat1Key: 'FABRIC WEIGHT',
    stat1Val: '240 GSM Tested Density',
    stat2Key: 'PRE-TREATMENT',
    stat2Val: 'Pre-shrunk Fabric',
    stat3Key: 'FIBER PURITY',
    stat3Val: '100% Combed Ringspun',
    stat4Key: 'SURFACE INTEGRITY',
    stat4Val: 'Anti-Pilling Finish',
    macroNote: 'Double-turned bottom hem with blind-stitch finish gives the tee a crisp architectural weight that stays anchored when moving.'
  }
};

export default function FabricAnatomyLab() {
  const [activeSpot, setActiveSpot] = useState<HotspotKey>('collar');
  const data = HOTSPOTS[activeSpot];

  return (
    <section className="anatomy-section" id="fabric-anatomy" aria-label="Garment Anatomy & Technical Specs">
      <div className="container">
        <div className="section-header-row" data-reveal="fade">
          <div>
            <span className="section-label">TECHNICAL SPEC // 240 GSM GARMENT ARCHITECTURE</span>
            <h2 className="section-title">GARMENT ANATOMY // HOTSPOT LAB</h2>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            TAP ANY RADAR HOTSPOT TO INSPECT CRAFTSMANSHIP METRICS
          </div>
        </div>

        <div className="anatomy-grid">
          {/* Left: Garment Anatomy Visual with Pulsing Radar Hotspots */}
          <div className="anatomy-visual-card" data-reveal="left">
            <div className="anatomy-canvas-box">
              <img
                src="https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-1.webp"
                alt="Zenji Garment Anatomy Architecture"
                id="anatomy-tee-image"
                className="anatomy-tee-img"
              />

              {/* Hotspot 1: Collar */}
              <button
                type="button"
                className={`hotspot-pin ${activeSpot === 'collar' ? 'active' : ''}`}
                style={{ top: '17%', left: '50%' }}
                aria-label="Inspect 1.25 inch Ribbed Collar"
                onClick={() => setActiveSpot('collar')}
              >
                <span className="pin-ring" />
                <span className="pin-dot">01</span>
              </button>

              {/* Hotspot 2: Print */}
              <button
                type="button"
                className={`hotspot-pin ${activeSpot === 'print' ? 'active' : ''}`}
                style={{ top: '45%', left: '52%' }}
                aria-label="Inspect Multi-pass Screenprint"
                onClick={() => setActiveSpot('print')}
              >
                <span className="pin-ring" />
                <span className="pin-dot">02</span>
              </button>

              {/* Hotspot 3: Shoulder */}
              <button
                type="button"
                className={`hotspot-pin ${activeSpot === 'shoulder' ? 'active' : ''}`}
                style={{ top: '26%', left: '24%' }}
                aria-label="Inspect Japanese Dropped Shoulder"
                onClick={() => setActiveSpot('shoulder')}
              >
                <span className="pin-ring" />
                <span className="pin-dot">03</span>
              </button>

              {/* Hotspot 4: Hem */}
              <button
                type="button"
                className={`hotspot-pin ${activeSpot === 'hem' ? 'active' : ''}`}
                style={{ top: '82%', left: '50%' }}
                aria-label="Inspect 240 GSM Hem & Cotton"
                onClick={() => setActiveSpot('hem')}
              >
                <span className="pin-ring" />
                <span className="pin-dot">04</span>
              </button>
            </div>

            {/* Hotspot Selector Buttons (For mobile & keyboard access) */}
            <div className="hotspot-buttons-pills">
              <button
                type="button"
                className={`btn-hotspot-pill ${activeSpot === 'collar' ? 'active' : ''}`}
                onClick={() => setActiveSpot('collar')}
              >
                01 // COLLAR
              </button>
              <button
                type="button"
                className={`btn-hotspot-pill ${activeSpot === 'print' ? 'active' : ''}`}
                onClick={() => setActiveSpot('print')}
              >
                02 // SCREENPRINT
              </button>
              <button
                type="button"
                className={`btn-hotspot-pill ${activeSpot === 'shoulder' ? 'active' : ''}`}
                onClick={() => setActiveSpot('shoulder')}
              >
                03 // DROP SHOULDER
              </button>
              <button
                type="button"
                className={`btn-hotspot-pill ${activeSpot === 'hem' ? 'active' : ''}`}
                onClick={() => setActiveSpot('hem')}
              >
                04 // 240GSM HEM
              </button>
            </div>
          </div>

          {/* Right: Interactive Telemetry & Macro Spec Readout */}
          <div className="anatomy-telemetry-card" data-reveal="right" id="anatomy-readout">
            <div className="telemetry-header">
              <span className="telemetry-badge" id="telemetry-badge">
                {data.badge}
              </span>
              <span className="telemetry-kanji" id="telemetry-kanji">
                {data.kanji}
              </span>
            </div>

            <h3 className="telemetry-title" id="telemetry-title">
              {data.title}
            </h3>
            <p className="telemetry-desc" id="telemetry-desc">
              {data.desc}
            </p>

            <div className="telemetry-specs-grid">
              <div className="telemetry-stat">
                <span className="stat-key">{data.stat1Key}</span>
                <span className="stat-val" id="telemetry-stat1">
                  {data.stat1Val}
                </span>
              </div>
              <div className="telemetry-stat">
                <span className="stat-key">{data.stat2Key}</span>
                <span className="stat-val" id="telemetry-stat2">
                  {data.stat2Val}
                </span>
              </div>
              <div className="telemetry-stat">
                <span className="stat-key">{data.stat3Key}</span>
                <span className="stat-val" id="telemetry-stat3">
                  {data.stat3Val}
                </span>
              </div>
              <div className="telemetry-stat">
                <span className="stat-key">{data.stat4Key}</span>
                <span className="stat-val" id="telemetry-stat4" style={{ color: 'var(--accent-green)' }}>
                  {data.stat4Val}
                </span>
              </div>
            </div>

            <div className="telemetry-macro-box">
              <div className="macro-badge">MACRO SENSOR ZOOM 2.5X</div>
              <div className="macro-note" id="telemetry-macro-note">
                {data.macroNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
