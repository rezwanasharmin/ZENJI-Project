'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotals, formatPrice, clearCart, playSound } = useStore();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    fname: '',
    lname: '',
    address: '',
    city: '',
    postcode: ''
  });

  if (!isCheckoutOpen) return null;

  const handleAutofill = () => {
    setFormData({
      email: 'kai.tanaka@melb-arc.com',
      fname: 'Kai',
      lname: 'Tanaka',
      address: '42 Flinders Lane',
      city: 'Melbourne',
      postcode: '3000'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `ORDER #ZNJ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(newOrderId);
    playSound('bell');
    setStep('success');
    clearCart();
  };

  const handleDone = () => {
    setIsCheckoutOpen(false);
    setStep('form');
  };

  return (
    <div
      className={`modal-overlay ${isCheckoutOpen ? 'active' : ''}`}
      id="checkout-overlay"
      aria-hidden={!isCheckoutOpen}
      style={{ display: 'flex', opacity: 1, visibility: 'visible', pointerEvents: 'auto' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsCheckoutOpen(false);
      }}
    >
      <div className="modal-card checkout-modal" style={{ transform: 'none' }} role="dialog" aria-modal="true" aria-labelledby="co-title">
        <button
          type="button"
          className="modal-close-btn"
          id="checkout-close"
          aria-label="Close checkout"
          onClick={() => setIsCheckoutOpen(false)}
        >
          ✕
        </button>

        {step === 'form' ? (
          <div className="checkout-form-body" id="checkout-step-form">
            <h2 className="checkout-headline" id="co-title">
              DEMO CHECKOUT
            </h2>
            <span className="checkout-badge-demo">
              HIRING ASSESSMENT SIMULATION MODE • NO ACTUAL CHARGES
            </span>

            <div className="autofill-btn-row">
              <button
                type="button"
                className="btn-autofill"
                id="btn-demo-autofill"
                onClick={handleAutofill}
              >
                ⚡ Click here to Autofill Sample Melbourne Customer Details
              </button>
            </div>

            <form id="demo-checkout-form" onSubmit={handleSubmit}>
              <div className="form-group-grid">
                <div className="form-field full">
                  <label className="form-label" htmlFor="co-email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="co-email"
                    className="form-input"
                    placeholder="shonen.fan@zenji.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="co-fname">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="co-fname"
                    className="form-input"
                    placeholder="Kai"
                    required
                    value={formData.fname}
                    onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="co-lname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="co-lname"
                    className="form-input"
                    placeholder="Tanaka"
                    required
                    value={formData.lname}
                    onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                  />
                </div>
                <div className="form-field full">
                  <label className="form-label" htmlFor="co-address">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    id="co-address"
                    className="form-input"
                    placeholder="42 Flinders Lane"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="co-city">
                    City / Suburb
                  </label>
                  <input
                    type="text"
                    id="co-city"
                    className="form-input"
                    placeholder="Melbourne"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="co-postcode">
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="co-postcode"
                    className="form-input"
                    placeholder="3000"
                    required
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  />
                </div>
              </div>

              {/* Mock Payment Method Box */}
              <div className="mock-card-box">
                <div className="mock-card-left">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700 }}>
                      TEST CARD (PREFILLED)
                    </div>
                    <div className="mock-card-num">•••• •••• •••• 4242 • EXP 12/28</div>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-green)' }}>
                  TEST MODE
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  AMOUNT PAYABLE:
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--accent-red)' }} id="checkout-amount-display">
                  {formatPrice(cartTotals.finalTotal)}
                </span>
              </div>

              <button type="submit" className="btn-primary" id="btn-place-order" style={{ width: '100%' }}>
                <span>PLACE TEST ORDER NOW</span>
              </button>
            </form>
          </div>
        ) : (
          /* Checkout Success Step */
          <div className="order-success-card" id="checkout-step-success">
            <div className="order-success-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <span className="section-label" style={{ justifyContent: 'center' }}>
              ORDER CONFIRMED
            </span>
            <h2 className="display" style={{ fontSize: '2.2rem' }}>
              WELCOME TO THE ARC
            </h2>
            <div className="order-id-badge" id="success-order-id">
              {orderId}
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              Your test order has been confirmed! A mock confirmation receipt and dispatch tracking notice has been logged.
            </p>

            <div
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem',
                maxWidth: '400px',
                margin: '0 auto 2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textAlign: 'left'
              }}
            >
              <div style={{ color: 'var(--accent-red)', marginBottom: '0.5rem', fontWeight: 700 }}>
                ESTIMATED DISPATCH:
              </div>
              <div>Australia Post Express • Delivered in 1–2 business days</div>
            </div>

            <button type="button" className="btn-secondary" id="btn-success-done" style={{ margin: '0 auto' }} onClick={handleDone}>
              <span>RETURN TO STOREFRONT</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
