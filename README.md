# ZENJI — Modern Next.js & TypeScript Streetwear Storefront

> **Enterprise Modern Web App & Hiring Interview Showcase**  
> Built with **Next.js 14 (App Router)**, **TypeScript**, **React 18**, **Three.js (WebGL)**, and modern Vanilla CSS tokens.  
> Inspired by **ZENJI’s Australian anime & streetwear label** ([zenji.shop](https://zenji.shop/) & [@zenji_.shop](https://www.instagram.com/zenji_.shop/)).

---

## ⚡ Quick Start & Running Locally

### Development Server (Next.js 14)
```bash
# In the project directory:
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### Production Build & Verification
```bash
# Compile and validate TypeScript types + static routes:
npm run build
npm run start
```

---

## 🏗️ Architecture & Technology Stack

```
ZENJI/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (Metadata, Google Fonts, StoreProvider, Atmosphere)
│   │   ├── page.tsx           # Assembled page with all storefront sections
│   │   └── globals.css        # Complete 5,500-line curated design system & CSS tokens
│   ├── components/
│   │   ├── atmosphere/
│   │   │   ├── ThreeCanvas.tsx   # Three.js 3D cursed particle cloud & interactive wireframe
│   │   │   ├── CustomCursor.tsx  # Interactive cyber ring & micro-cursor follower
│   │   │   └── ScrollMotion.tsx  # Smooth scroll reveal & IntersectionObserver hooks
│   │   ├── header/
│   │   │   ├── AnnouncementMarquee.tsx  # High-energy marquee bar
│   │   │   ├── SiteHeader.tsx           # Floating glass capsule nav + 38px tools dock
│   │   │   └── MobileNavDrawer.tsx      # Slide-over mobile directory drawer
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx          # Editorial hero with countdown & 3-angle 3D showcase
│   │   │   └── SpecsTicker.tsx          # 4 craftsmanship guarantees
│   │   ├── catalog/
│   │   │   ├── ProductCatalog.tsx       # Live search, category tabs (ALL, CORE, SALE), sorting
│   │   │   ├── ProductCard.tsx          # 3D card tilt, multi-angle switcher, interactive 'YOUR FIT'
│   │   │   └── QuickViewModal.tsx       # Multiplied quantity pricing & technical specs
│   │   ├── features/
│   │   │   ├── DuoBundleBuilder.tsx     # 2-piece wardrobe bundle builder (A$15 instant discount)
│   │   │   ├── FabricAnatomyLab.tsx     # 4 interactive radar hotspots & telemetry readout
│   │   │   ├── ModelFitVisualizer.tsx   # Model drape across body heights (165cm, 174cm, 182cm)
│   │   │   ├── FindMyFitModal.tsx       # AI Sizing Recommender with height & weight sliders
│   │   │   ├── SizeGuideModal.tsx       # Complete measurement table (XS–XXL)
│   │   │   ├── CheckoutModal.tsx        # Simulated checkout with autofill & order receipt
│   │   │   ├── DomainExpansionCinema.tsx# Secret easter egg full-screen takeover modal
│   │   │   └── LiveActivityToast.tsx    # Real-time customer activity social proof
│   │   ├── cart/
│   │   │   ├── CartDrawer.tsx           # Slide-out drawer, free shipping meter, promo engine
│   │   │   └── WishlistDrawer.tsx       # Saved items drawer with batch add-to-cart
│   │   ├── story/
│   │   │   ├── UnboxingSection.tsx      # 4 collector artifacts packaging ritual
│   │   │   ├── BrandManifesto.tsx       # Origin story & 3 craftsmanship pillars
│   │   │   ├── LookbookSection.tsx      # Melbourne CBD editorial streetwear photo gallery
│   │   │   ├── FaqSection.tsx           # Interactive animated FAQ accordion
│   │   │   └── ReviewsSection.tsx       # 4 verified customer reviews (4.97/5 score)
│   │   └── footer/
│   │       └── SiteFooter.tsx           # Brand story, customer help & early access vault
│   ├── context/
│   │   └── StoreContext.tsx     # Global reactive React state (Cart, Wishlist, Currency, Audio)
│   ├── data/
│   │   └── products.ts          # Strictly typed catalog data, currency configs & secret item
│   └── types/
│       └── index.ts             # TypeScript interfaces (Product, CartItem, SizeOption, etc.)
├── package.json
├── tsconfig.json
└── next.config.mjs
```

---

## 📄 License & Attribution
- Inspired by **ZENJI Streetwear Australia** ([zenji.shop](https://zenji.shop/)).
- Built as an advanced frontend assessment & portfolio project.
