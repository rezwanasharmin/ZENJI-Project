'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';

export default function ToastContainer() {
  const { toasts } = useStore();

  return (
    <div className="toast-container" id="toast-container" aria-live="polite" aria-atomic="true">
      {toasts.map((t) => (
        <div key={t.id} className={`toast-notification ${t.type}`} role="alert">
          <span className="toast-dot" />
          <span className="toast-text">{t.message}</span>
        </div>
      ))}
    </div>
  );
}
