import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Product } from '../types';
import { formatCurrency } from '../utils/currency';
import { GuaranteesBanner } from './GuaranteesBanner';

interface HeroProps {
  featuredProduct: Product;
  onQuickAdd: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
}

interface HeroSlide {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    headline: 'Genuine Leather & Crochet Bags Made in Nigeria That Never Peel',
    subheadline: 'Handcrafted with 100% real cowhide leather and strong cotton cords, sewn to last you for many years.',
    primaryCta: { label: 'Shop Available Bags', href: '#objects' },
    secondaryCta: { label: 'Order Custom Bag', href: '#commission' },
  },
  {
    headline: 'Ready-Made Bags in Stock for Fast Same-Day Delivery',
    subheadline: 'Order today and receive your bag at your doorstep quickly in Lagos, Ibadan, and across Nigeria.',
    primaryCta: { label: 'See Available Bags', href: '#objects' },
    secondaryCta: { label: 'Design Your Own Bag', href: '#customizer' },
  },
  {
    headline: 'Design Your Own Custom Bag Exactly The Way You Want It',
    subheadline: 'Pick your preferred leather color, knitted rope, brass buckle, and stamp your name initials in gold.',
    primaryCta: { label: 'Design Your Bag', href: '#customizer' },
    secondaryCta: { label: 'How It Works', href: '#care' },
  },
  {
    headline: 'Send Us Any Bag Picture on WhatsApp and We Will Make It for You',
    subheadline: 'Saw a bag you love online or on Instagram? Send us the photo or voice note and our workshop will make it.',
    primaryCta: { label: 'Send Bag Picture', href: '#commission' },
    secondaryCta: { label: 'Record Voice Note', href: '#commission' },
  },
];

export const Hero: React.FC<HeroProps> = ({
  featuredProduct,
  onOpenQuickView,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Auto-scroll slides with pause on user interaction/hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch swipe support for mobile and tablet devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      // Swiped left -> Next slide
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    } else if (distance < -45) {
      // Swiped right -> Previous slide
      setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="w-full flex flex-col items-center">
      
      {/* 4 Scrollable Headlines & Subheadlines Carousel */}
      <div
        className="w-full max-w-5xl mx-auto mb-10 sm:mb-14 select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides Container with smooth animation */}
        <div className="relative min-h-[220px] sm:min-h-[195px] md:min-h-[185px] lg:min-h-[175px] flex items-center justify-center">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div
                key={idx}
                className={`w-full text-center transition-all duration-500 ease-out px-2 ${
                  isActive
                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                    : 'opacity-0 absolute inset-0 pointer-events-none ' +
                      (idx < activeSlide ? '-translate-x-6' : 'translate-x-6')
                }`}
                aria-hidden={!isActive}
              >
                {/* Headline: Clean, balanced, perfectly aligned for desktop */}
                <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#231815] leading-[1.22] font-serif max-w-4xl mx-auto">
                  {slide.headline}
                </h1>

                {/* Subheadline in simple Nigerian layman English */}
                <p className="mt-3.5 text-[#6a4632] text-sm sm:text-base md:text-[17px] max-w-2xl mx-auto leading-relaxed font-normal">
                  {slide.subheadline}
                </p>

                {/* Direct Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={slide.primaryCta.href}
                    className="btn-urgency-red px-6 py-2.5 text-[14px]"
                  >
                    <span>{slide.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={slide.secondaryCta.href}
                    className="btn-sand-outline px-6 py-2.5 text-[14px]"
                  >
                    <span>{slide.secondaryCta.label}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clickable Rectangles Underneath */}
        <div
          className="flex items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-7"
          role="tablist"
          aria-label="Hero slide indicators"
        >
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              role="tab"
              aria-selected={activeSlide === idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeSlide === idx
                  ? 'w-10 sm:w-12 h-2 sm:h-2.5 bg-[#c84224] shadow-[0_2px_10px_rgba(200,66,36,0.4)]'
                  : 'w-3.5 sm:w-4.5 h-2 sm:h-2.5 bg-[#d6cbbe] hover:bg-[#8c7a6b]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 3 Showcase Product Cards on Warm Bone White with Soft Earthy Borders */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
        
        {/* Card 1: Featured Bucket Bag with Low Stock Urgency */}
        <div className="earth-card p-3.5 flex flex-col justify-between group">
          <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-[#eee7db]">
            <img
              src={featuredProduct.image}
              alt={featuredProduct.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#fbf0ed] border border-[#f2cfc7] text-[#c84224] rounded-full px-2.5 py-0.5 text-[11px] font-semibold flex items-center gap-1 shadow-sm">
              <Clock className="w-3 h-3 text-[#c84224]" />
              <span>Only 2 Left in Stock</span>
            </div>
          </div>

          <div className="pt-3.5 px-1 pb-1 flex items-center justify-between">
            <div>
              <h3 className="text-[15px] font-medium font-serif text-[#231815] tracking-tight block">
                {featuredProduct.title}
              </h3>
              <span className="text-[12px] text-[#6a4632] mt-0.5 block">
                {featuredProduct.materials}
              </span>
            </div>

            <button
              onClick={() => onOpenQuickView(featuredProduct)}
              className="btn-sand-outline text-[12px] py-1 px-3"
            >
              Details
            </button>
          </div>
        </div>

        {/* Card 2: Alaafia Crochet Knit Shoulder Bag (Center Elevated with Terracotta Sales Badge) */}
        <div className="earth-card p-3.5 flex flex-col justify-between group border-[#c84224]/40 bg-[#fffdfa] shadow-md md:-translate-y-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-[#eee7db]">
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
              alt="Alaafia Crochet Shoulder Bag"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#c84224] text-[#ffffff] rounded-full px-2.5 py-0.5 text-[11px] font-semibold shadow-sm flex items-center gap-1">
              <Clock className="w-3 h-3 text-white" />
              <span>Flash Drop · Selling Fast</span>
            </div>
          </div>

          <div className="pt-3.5 px-1 pb-1 flex items-center justify-between">
            <div>
              <h3 className="text-[15px] font-medium font-serif text-[#231815] tracking-tight block">
                Alaafia Crochet Shoulder Bag
              </h3>
              <span className="text-[12px] text-[#6a4632] mt-0.5 block">
                Hand-Knitted Cotton · Saddle Cowhide
              </span>
            </div>

            <span className="text-[14px] font-bold text-[#c84224] tabular-nums">
              {formatCurrency(95000, 'NGN')}
            </span>
          </div>
        </div>

        {/* Card 3: Eko Flap Bag Crossbody */}
        <div className="earth-card p-3.5 flex flex-col justify-between group">
          <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-[#eee7db]">
            <img
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80"
              alt="Eko Minimalist Crossbody"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#ffffff]/90 border border-[#e2dad0] text-[#5c3d2e] rounded-full px-2.5 py-0.5 text-[11px] font-medium shadow-sm">
              <span>Custom Order Available</span>
            </div>
          </div>

          <div className="pt-3.5 px-1 pb-1 flex items-center justify-between">
            <div>
              <h3 className="text-[15px] font-medium font-serif text-[#231815] tracking-tight block">
                Eko Flap Bag Crossbody
              </h3>
              <span className="text-[12px] text-[#6a4632] mt-0.5 block">
                Full-Grain Bovine · Cast Brass
              </span>
            </div>

            <span className="text-[14px] font-bold text-[#231815] tabular-nums">
              {formatCurrency(85000, 'NGN')}
            </span>
          </div>
        </div>

      </div>

      {/* Premium Workshop Guarantees with 3D Icons & Animations */}
      <GuaranteesBanner />

    </section>
  );
};
