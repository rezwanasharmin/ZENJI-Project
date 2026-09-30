'use client';

import React from 'react';

export default function SpecsTicker() {
  const specs = [
    {
      title: '240 GSM HEAVYWEIGHT',
      desc: 'Pre-shrunk 100% combed cotton',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: 'ORIGINAL SHONEN ART',
      desc: 'Single-run screenplates, no templates',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      title: 'ZERO RESTOCKS EVER',
      desc: 'Sold out means archived in vault',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      )
    },
    {
      title: 'DISPATCH FROM AUSTRALIA',
      desc: 'Free Express shipping over A$100',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="specs-ticker" id="specs" aria-label="Brand Guarantees">
      <div className="container specs-grid">
        {specs.map((item, i) => (
          <div className="spec-item" key={i}>
            <div className="spec-icon">{item.icon}</div>
            <div>
              <div className="spec-title">{item.title}</div>
              <div className="spec-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
