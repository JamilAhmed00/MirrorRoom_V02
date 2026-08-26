/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { ChilloutSection } from './components/ChilloutSection';
import { FlavoursGrid } from './components/FlavoursGrid';
import { VideoShowcase } from './components/VideoShowcase';
import { WavyMarquee } from './components/WavyMarquee';
import { IngredientsSection } from './components/IngredientsSection';
import { SecretSection } from './components/SecretSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { OrderModal } from './components/OrderModal';
import { FLAVORS } from './data';

export default function App() {
  const [activeFlavorIndex, setActiveFlavorIndex] = useState(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderModalFlavorId, setOrderModalFlavorId] = useState('orange');

  // Preload essential image assets on mount for immediate availability
  useEffect(() => {
    const imagesToPreload: string[] = [
      '/images/ice_cube.png',
      '/images/ingre_orange.png'
    ];

    FLAVORS.forEach((f) => {
      if (f.canImage) imagesToPreload.push(f.canImage);
      if (f.frontImage) imagesToPreload.push(f.frontImage);
      if (f.canHeroImage) imagesToPreload.push(f.canHeroImage);
      f.slices?.forEach((s) => {
        if (s.src) imagesToPreload.push(s.src);
      });
    });

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleOpenOrder = (flavorId?: string) => {
    if (flavorId) {
      setOrderModalFlavorId(flavorId);
      const foundIdx = FLAVORS.findIndex((f) => f.id === flavorId);
      if (foundIdx !== -1) {
        setActiveFlavorIndex(foundIdx);
      }
    } else {
      setOrderModalFlavorId(FLAVORS[activeFlavorIndex]?.id || 'orange');
    }
    setIsOrderModalOpen(true);
  };

  const handleSelectFlavorByName = (name: string) => {
    const lower = name.toLowerCase();
    const foundIdx = FLAVORS.findIndex(
      (f) => lower.includes(f.id.toLowerCase()) || lower.includes(f.name.toLowerCase())
    );
    if (foundIdx !== -1) {
      setActiveFlavorIndex(foundIdx);
      setOrderModalFlavorId(FLAVORS[foundIdx].id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden antialiased">
      {/* Top Header Navigation */}
      <Header
        onOpenOrder={handleOpenOrder}
        activeFlavorIndex={activeFlavorIndex}
        onSelectFlavor={setActiveFlavorIndex}
      />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Section 1: Hero Carousel */}
        <HeroSlider
          activeIndex={activeFlavorIndex}
          onChangeIndex={setActiveFlavorIndex}
          onOpenOrder={handleOpenOrder}
        />

        {/* Section 2: Chillout Horizontal Infinite Can Track */}
        <ChilloutSection
          onSelectFlavorByName={handleSelectFlavorByName}
          onOpenOrder={handleOpenOrder}
        />

        {/* Section 3: Flavour Cards Grid */}
        <FlavoursGrid onOpenOrder={handleOpenOrder} />

        {/* Section 4: Video Commercial Showcase & Nutrition Capsule */}
        <VideoShowcase />

        {/* Section 5: Dynamic Wavy Animated Marquee */}
        <WavyMarquee />

        {/* Section 6: Interactive Ingredients Breakdown & Spec Bar */}
        <IngredientsSection onOpenOrder={handleOpenOrder} />

        {/* Section 7: The Secret Behind Every Sip Interactive Scroll Stage */}
        <SecretSection onOpenOrder={handleOpenOrder} />

        {/* Section 8: Testimonials with Scalloped Wavy Cards */}
        <TestimonialsSection />

        {/* Section 9: FAQ Accordions with Category Filter */}
        <FAQSection />

        {/* Section 10: Double-Wave Animated Footer */}
        <FooterSection onOpenOrder={handleOpenOrder} />
      </main>

      {/* Order & Chilled Dispatch Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialFlavorId={orderModalFlavorId}
      />
    </div>
  );
}
