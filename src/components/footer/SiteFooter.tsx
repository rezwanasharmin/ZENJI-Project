'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';

export default function SiteFooter() {
  const { setIsSizeGuideOpen, showToast, playSound } = useStore();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    playSound('bell');
    showToast(`✓ VIP ACCESS GRANTED TO ${email.toUpperCase()}!`, 'success');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div>
            <a href="#" className="brand-logo" aria-label="ZENJI Home">
              <span className="logo-text">ZENJI</span>
              <div className="logo-stamp">
                <span className="logo-kanji">禅時</span>
                <span className="logo-sub">MELB&nbsp;/&nbsp;TOKYO</span>
              </div>
            </a>
            <p className="footer-brand-bio">
              Limited anime streetwear label based in Australia. Japanese-inspired graphic tees cut on 240GSM heavyweight cotton. No restocks. Ever.
            </p>
            <div className="footer-social-row">
              <a
                href="https://www.instagram.com/zenji_.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@zenji_.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://zenji.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Official Website"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Nav */}
          <div>
            <div className="footer-heading">DROP ARCHIVE</div>
            <ul className="footer-nav-list">
              <li><a href="#products">Blue Flame Tee</a></li>
              <li><a href="#products">Bushido Tee</a></li>
              <li><a href="#products">Demon Blood Tee</a></li>
              <li><a href="#products">Domain Expansion Tee</a></li>
              <li><a href="#products">Limitless Tee</a></li>
              <li><a href="#products">Water Breathing Tee</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <div className="footer-heading">CUSTOMER HELP</div>
            <ul className="footer-nav-list">
              <li>
                <button
                  type="button"
                  id="footer-size-guide-link"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}
                  onClick={() => setIsSizeGuideOpen(true)}
                >
                  Size Guide
                </button>
              </li>
              <li><a href="#specs">Garment Specs</a></li>
              <li><a href="#faq">Shipping & Returns</a></li>
              <li><a href="#faq">Care Instructions</a></li>
              <li><a href="#manifesto">Brand Manifesto</a></li>
            </ul>
          </div>

          {/* Newsletter Drop VIP */}
          <div>
            <div className="footer-heading">EARLY ACCESS VAULT</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Receive access 15 minutes before Drop 02 goes public. No restocks, so first access is vital.
            </p>
            <form className="newsletter-form" id="newsletter-form" onSubmit={handleSubscribe}>
              <div className="newsletter-input-box">
                <input
                  type="email"
                  className="newsletter-input"
                  id="newsletter-email"
                  placeholder="otaku@zenji.com"
                  required
                  aria-label="Email address for drop alerts"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn-newsletter-submit">
                  JOIN
                </button>
              </div>
              {isSubscribed && (
                <span
                  id="newsletter-msg"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent-green)',
                    display: 'block',
                    marginTop: '0.5rem'
                  }}
                >
                  ⚡ VIP PASS GRANTED // YOU'RE ON THE DROP 02 LIST!
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-row">
          <div className="copyright-text">
            © 2026 ZENJI STREETWEAR AUSTRALIA. ALL RIGHTS RESERVED.
          </div>
          <div className="assessment-disclaimer">
            HIRING ASSESSMENT DEMO STOREFRONT • INSPIRED BY ZENJI.SHOP
          </div>
        </div>
      </div>
    </footer>
  );
}
