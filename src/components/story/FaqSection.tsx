'use client';

import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'HOW DOES THE 240GSM OVERSIZED FIT RUN?',
    a: 'Our tees feature an authentic Japanese streetwear drop-shoulder boxy cut. They fit slightly oversized naturally. If you prefer a loose, streetwear silhouette, stay true to size. If you prefer a closer, tailored fit, consider sizing down one size.'
  },
  {
    q: 'DO YOU EVER RESTOCK PREVIOUS DROPS?',
    a: 'No. Zenji operates on a strict single-run drop model. Once a design sells through its limited production run, it is officially vaulted and never reprinted.'
  },
  {
    q: 'WHAT ARE THE SHIPPING TIMES ACROSS AUSTRALIA?',
    a: 'Orders are dispatched from Melbourne via Australia Post within 24–48 hours. Express shipping takes 1–3 business days, while standard parcel takes 3–7 business days. All orders over A$100 qualify for free express delivery.'
  },
  {
    q: 'HOW SHOULD I WASH AND CARE FOR MY TEE?',
    a: 'Machine wash cold (30°C or below), inside out, with similar dark colours. Hang dry in shade. Avoid machine tumble drying and never iron directly across the screenprinted graphics.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        <div style={{ textAlign: 'center' }} data-reveal="up">
          <span className="section-label" style={{ justifyContent: 'center' }}>
            NEED CLARITY?
          </span>
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            ANSWERS ON SIZING, DISPATCH TIMES & DROP RESTOCK POLICY
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`} data-reveal="up">
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
                    ▼
                  </span>
                </button>
                {isOpen && <div className="faq-answer">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
