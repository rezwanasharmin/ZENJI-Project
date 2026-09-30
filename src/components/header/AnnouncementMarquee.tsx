'use client';

import React from 'react';

export default function AnnouncementMarquee() {
  const marqueeItems = [
    'ORIGIN DROP 01 LIVE NOW',
    'FREE EXPRESS SHIPPING IN AUSTRALIA OVER A$100',
    '240GSM HEAVYWEIGHT COMBED COTTON',
    'LIMITED RUN // NO RESTOCKS. EVER.',
    'MELBOURNE STREETWEAR ARCHIVE'
  ];

  return (
    <aside className="announcement-bar" aria-label="Store Announcement">
      <div className="marquee-track">
        <div className="marquee-content">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-dot" aria-hidden="true" />
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-dot" aria-hidden="true" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
}
