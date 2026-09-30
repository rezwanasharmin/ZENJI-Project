import AnnouncementMarquee from '@/components/header/AnnouncementMarquee';
import SiteHeader from '@/components/header/SiteHeader';
import MobileNavDrawer from '@/components/header/MobileNavDrawer';
import HeroSection from '@/components/hero/HeroSection';
import SpecsTicker from '@/components/hero/SpecsTicker';
import ProductCatalog from '@/components/catalog/ProductCatalog';
import FabricAnatomyLab from '@/components/features/FabricAnatomyLab';
import ModelFitVisualizer from '@/components/features/ModelFitVisualizer';
import DuoBundleBuilder from '@/components/features/DuoBundleBuilder';
import UnboxingSection from '@/components/story/UnboxingSection';
import BrandManifesto from '@/components/story/BrandManifesto';
import LookbookSection from '@/components/story/LookbookSection';
import FaqSection from '@/components/story/FaqSection';
import ReviewsSection from '@/components/story/ReviewsSection';
import SiteFooter from '@/components/footer/SiteFooter';

export default function HomePage() {
  return (
    <>
      {/* 1. Global Announcement Marquee Bar */}
      <AnnouncementMarquee />

      {/* 2. Glassmorphic Capsule Navigation & Tools */}
      <SiteHeader />

      {/* 2.5 Mobile Navigation Slide-Over Drawer */}
      <MobileNavDrawer />

      {/* Main Page Content */}
      <main id="main-content">
        {/* 3. Hero Section (Editorial Streetwear + 3-Angle Showcase) */}
        <HeroSection />

        {/* 4. Specs & Craftsmanship Ticker */}
        <SpecsTicker />

        {/* 5. Product Catalog (Core Drops, Sale Filter & Search) */}
        <ProductCatalog />

        {/* 5.5 Garment Anatomy & Radar Hotspot Lab */}
        <FabricAnatomyLab />

        {/* 5.6 Streetwear Model Fit & Height Visualizer */}
        <ModelFitVisualizer />

        {/* 5.7 The Shonen Duo Arc Wardrobe Bundle Builder */}
        <DuoBundleBuilder />

        {/* 5.8 Collector's Unboxing Experience */}
        <UnboxingSection />

        {/* 6. Brand Manifesto & Origin Story */}
        <BrandManifesto />

        {/* 7. Streetwear Editorial Lookbook */}
        <LookbookSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 8.5 Community Reviews & Social Proof */}
        <ReviewsSection />
      </main>

      {/* 9. Site Footer */}
      <SiteFooter />
    </>
  );
}
