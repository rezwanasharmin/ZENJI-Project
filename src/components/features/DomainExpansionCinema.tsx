'use client';

import React, { useEffect } from 'react';
import { useStore } from '@/context/StoreContext';

export default function DomainExpansionCinema() {
  const { isDomainCinemaOpen, setIsDomainCinemaOpen, unlockSecretVault, showToast, playSound } = useStore();

  useEffect(() => {
    if (isDomainCinemaOpen) {
      playSound('domain');
      const timer = setTimeout(() => {
        setIsDomainCinemaOpen(false);
        unlockSecretVault();
        showToast('⚡ 600GSM CURSED HOODIE UNLOCKED IN ARCHIVE!', 'success');
        const prod = document.getElementById('products');
        if (prod) prod.scrollIntoView({ behavior: 'smooth' });
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [isDomainCinemaOpen, setIsDomainCinemaOpen, unlockSecretVault, showToast, playSound]);

  if (!isDomainCinemaOpen) return null;

  return (
    <div
      className="domain-expansion-cinema active"
      id="domain-expansion-cinema"
      aria-hidden="false"
      role="dialog"
      aria-modal="true"
      onClick={() => {
        setIsDomainCinemaOpen(false);
        unlockSecretVault();
      }}
    >
      <div className="domain-cinema-bg" />
      <div className="domain-cinema-lines" />
      <div className="domain-cinema-content">
        <div className="domain-kanji-massive">領域展開</div>
        <div className="domain-title-english">DOMAIN EXPANSION // SHADOW VAULT</div>
        <div className="domain-subtitle-alert">
          ⚡ ANCIENT CURSED ENERGY UNLEASHED • SECRET 600GSM GARMENT UNLOCKED
        </div>
      </div>
    </div>
  );
}
