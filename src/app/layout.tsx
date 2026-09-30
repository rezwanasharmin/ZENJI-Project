import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import CustomCursor from '@/components/atmosphere/CustomCursor';
import ThreeCanvas from '@/components/atmosphere/ThreeCanvas';
import ScrollMotion from '@/components/atmosphere/ScrollMotion';
import CartDrawer from '@/components/cart/CartDrawer';
import WishlistDrawer from '@/components/cart/WishlistDrawer';
import QuickViewModal from '@/components/catalog/QuickViewModal';
import FindMyFitModal from '@/components/features/FindMyFitModal';
import SizeGuideModal from '@/components/features/SizeGuideModal';
import CheckoutModal from '@/components/features/CheckoutModal';
import DomainExpansionCinema from '@/components/features/DomainExpansionCinema';
import LiveActivityToast from '@/components/features/LiveActivityToast';
import ToastContainer from '@/components/common/ToastContainer';

export const metadata: Metadata = {
  title: 'ZENJI — Anime Clothing Australia | Heavyweight Streetwear Drop',
  description:
    'Australian anime streetwear label. 240GSM combed cotton, oversized boxy drop shoulder cuts, and limited-edition single-run screenprints. Dispatched from Melbourne.',
  keywords: [
    'anime clothing australia',
    'zenji',
    'heavyweight anime tee',
    'shonen streetwear',
    'oversized graphic tee',
    'melbourne streetwear'
  ],
  authors: [{ name: 'ZENJI Streetwear Australia' }],
  openGraph: {
    title: 'ZENJI — Heavyweight Japanese Anime Streetwear',
    description: 'Limited 240GSM boxy graphic streetwear drops. Zero restocks. Ever.',
    url: 'https://zenji.shop',
    siteName: 'ZENJI Streetwear',
    locale: 'en_AU',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@600;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StoreProvider>
          {/* Atmosphere & WebGL */}
          <CustomCursor />
          <ThreeCanvas />
          <ScrollMotion />

          {/* Overlays & Drawers */}
          <CartDrawer />
          <WishlistDrawer />
          <QuickViewModal />
          <FindMyFitModal />
          <SizeGuideModal />
          <CheckoutModal />
          <DomainExpansionCinema />
          <LiveActivityToast />
          <ToastContainer />

          {/* Main Content */}
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
