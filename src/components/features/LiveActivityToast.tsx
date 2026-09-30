'use client';

import React, { useState, useEffect } from 'react';

interface ActivityItem {
  user: string;
  action: string;
  time: string;
  img: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    user: 'Liam in Melbourne',
    action: 'Just copped Blue Flame Tee (Size L)',
    time: '2 mins ago • Verified Buyer',
    img: 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-1.webp'
  },
  {
    user: 'Ren in Sydney',
    action: 'Unlocked Duo Arc Bundle with Express Shipping',
    time: '5 mins ago • Verified Buyer',
    img: 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-1.webp'
  },
  {
    user: 'Marcus in Brisbane',
    action: 'Saved Bushido Tee to Wishlist',
    time: '8 mins ago • Verified Buyer',
    img: 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-1.webp'
  },
  {
    user: 'Chloe in Perth',
    action: 'Copped Domain Expansion Tee (Size S)',
    time: '12 mins ago • Verified Buyer',
    img: 'https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-1.webp'
  }
];

export default function LiveActivityToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initial delay
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ACTIVITIES.length);
        setVisible(true);
      }, 1000);
    }, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const current = ACTIVITIES[index];

  return (
    <div
      className={`live-activity-toast ${visible ? 'active' : ''}`}
      id="live-activity-toast"
      aria-live="polite"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.4s ease, transform 0.4s ease'
      }}
    >
      <div className="activity-pulse-dot" />
      <div className="activity-avatar-box">
        <img id="activity-img" src={current.img} alt="Active Item" />
      </div>
      <div className="activity-body">
        <div className="activity-user" id="activity-user">
          {current.user}
        </div>
        <div className="activity-action" id="activity-action">
          {current.action}
        </div>
        <div className="activity-time" id="activity-time">
          {current.time}
        </div>
      </div>
      <button
        type="button"
        className="activity-close"
        id="activity-close"
        aria-label="Dismiss activity notice"
        onClick={() => setVisible(false)}
      >
        ✕
      </button>
    </div>
  );
}
