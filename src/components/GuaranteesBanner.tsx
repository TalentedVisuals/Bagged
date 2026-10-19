import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

/* 3D Icon 1: Sculptural Solid Brass & Embossed Saddle Cowhide Seal */
const Icon3DLeather: React.FC = () => (
  <div className="relative w-15 h-15 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3 pop-3d-icon">
    {/* Atmospheric Warm Ambient Radiance */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#c84224]/30 via-[#d97706]/20 to-transparent blur-xl group-hover:bg-[#c84224]/45 transition-all duration-300" />
    
    <svg
      viewBox="0 0 68 68"
      className="w-15 h-15 sm:w-16 sm:h-16 relative drop-shadow-[0_14px_28px_rgba(92,61,46,0.45)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Physical Cast Gold Rim Gradient */}
        <linearGradient id="goldBevelRim" x1="10" y1="6" x2="58" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff7d1" />
          <stop offset="0.25" stopColor="#eab308" />
          <stop offset="0.55" stopColor="#b45309" />
          <stop offset="0.8" stopColor="#d97706" />
          <stop offset="1" stopColor="#451a03" />
        </linearGradient>

        {/* Deep Full-Grain Leather Bed */}
        <radialGradient id="leatherCore" cx="40%" cy="35%" r="65%">
          <stop stopColor="#7a3f25" />
          <stop offset="0.6" stopColor="#4a2a1a" />
          <stop offset="1" stopColor="#1e0f09" />
        </radialGradient>

        {/* 3D Specular Ray Highlight */}
        <linearGradient id="specularGleam" x1="14" y1="10" x2="52" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Embossed Cowhide Gold Gradient */}
        <linearGradient id="goldPelt" x1="22" y1="18" x2="46" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef08a" />
          <stop offset="0.5" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* 3D Cast Shadow Base */}
      <rect x="8" y="12" width="52" height="48" rx="16" fill="#0f0704" opacity="0.85" />
      
      {/* Outer Polished Brass Beveled Frame */}
      <rect x="8" y="8" width="52" height="48" rx="16" fill="url(#goldBevelRim)" />
      
      {/* Recessed Leather Canvas Cushion */}
      <rect x="11.5" y="11.5" width="45" height="41" rx="13" fill="url(#leatherCore)" stroke="#000000" strokeWidth="1.2" strokeOpacity="0.4" />
      
      {/* Perimeter Saddler Stitching (Golden Thread Perforations) */}
      <rect x="14" y="14" width="40" height="36" rx="10.5" fill="none" stroke="#fef08a" strokeWidth="1.1" strokeDasharray="3 3.5" opacity="0.9" />

      {/* Specular Glint Across Upper Glass */}
      <path d="M12 24C12 16.5 17 12 24 12H44C51 12 56 16.5 56 24C44 26 28 30 12 40V24Z" fill="url(#specularGleam)" />

      {/* 3D Sculpted Full-Grain Bovine Pelt Emblem */}
      <path
        d="M24 23C26 21 30 22 34 20C38 22 42 21 44 23C43 27 47 30 45 35C46 39 44 42 42 44C38 42 35 45 34 43C33 45 30 42 26 44C24 42 22 39 23 35C21 30 25 27 24 23Z"
        fill="url(#goldPelt)"
        stroke="#fff7d1"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Embossed Artisan Hallmark Stamp in Center */}
      <circle cx="34" cy="32" r="5.5" fill="#2c1409" stroke="#fef08a" strokeWidth="1.2" />
      <path d="M31.5 32L33.5 34L37 29.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      {/* Corner Gem Spark */}
      <circle cx="16" cy="16" r="1.5" fill="#ffffff" />
    </svg>
  </div>
);

/* 3D Icon 2: Emerald Cut Glass & Cast Brass Artisan Communicator */
const Icon3DArtisan: React.FC = () => (
  <div className="relative w-15 h-15 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:-rotate-3 pop-3d-icon">
    {/* Atmospheric Emerald Ambient Radiance */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#10b981]/35 via-[#059669]/20 to-transparent blur-xl group-hover:bg-[#10b981]/50 transition-all duration-300" />
    
    <svg
      viewBox="0 0 68 68"
      className="w-15 h-15 sm:w-16 sm:h-16 relative drop-shadow-[0_14px_28px_rgba(20,83,45,0.45)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Polished Emerald Crystal Bevel */}
        <linearGradient id="emeraldBase" x1="8" y1="8" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#052e16" />
          <stop offset="0.5" stopColor="#064e3b" />
          <stop offset="1" stopColor="#021c0c" />
        </linearGradient>

        {/* Faceted WhatsApp Jewel Orb */}
        <linearGradient id="waFaceted" x1="18" y1="14" x2="50" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6ee7b7" />
          <stop offset="0.3" stopColor="#34d399" />
          <stop offset="0.7" stopColor="#10b981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>

        <linearGradient id="needleGold" x1="28" y1="20" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fffbeb" />
          <stop offset="0.5" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
      </defs>

      {/* 3D Base Drop Shadow */}
      <rect x="8" y="12" width="52" height="48" rx="16" fill="#021c0c" opacity="0.9" />
      
      {/* Outer Jewel Case in Deep Emerald and Brass Hairline */}
      <rect x="8" y="8" width="52" height="48" rx="16" fill="url(#emeraldBase)" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" />
      
      {/* 3D Chat Bubble / Artisan Jewel */}
      <path
        d="M20 22C20 17.5817 23.5817 14 28 14H42C46.4183 14 50 17.5817 50 22V34C50 38.4183 46.4183 42 42 42H32L24 48V42H28C23.5817 42 20 38.4183 20 34V22Z"
        fill="url(#waFaceted)"
        stroke="#a7f3d0"
        strokeWidth="1.6"
      />

      {/* Prismatic Specular Facet Light */}
      <path d="M24 18C24 16.5 26 15 29 15H41C44 15 46 16.5 46 18C38 20 30 23 24 28V18Z" fill="#ffffff" fillOpacity="0.55" />

      {/* Artisan Phone Handset & Cord Monogram */}
      <path
        d="M28 25C28 25 30 28 31.5 28C33 28 34 27 35.5 27C37 27 39.5 29.5 39.5 31C39.5 32.5 38.5 33.5 38.5 35C38.5 36.5 41.5 38.5 41.5 38.5"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Crossed Gold Leatherworker Needle Accents */}
      <circle cx="35" cy="29" r="2.8" fill="url(#needleGold)" stroke="#ffffff" strokeWidth="0.8" />

      {/* Live Direct Line Beacon Jewel */}
      <circle cx="48" cy="16" r="4" fill="#34d399" stroke="#064e3b" strokeWidth="1.8" />
      <circle cx="48" cy="16" r="1.5" fill="#ffffff" />
    </svg>
  </div>
);

/* 3D Icon 3: Lustrous Solid Cast Brass Anti-Peel Shield */
const Icon3DShield: React.FC = () => (
  <div className="relative w-15 h-15 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3 pop-3d-icon">
    {/* Atmospheric Amber-Gold Ambient Radiance */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#d97706]/35 via-[#f59e0b]/20 to-transparent blur-xl group-hover:bg-[#d97706]/50 transition-all duration-300" />
    
    <svg
      viewBox="0 0 68 68"
      className="w-15 h-15 sm:w-16 sm:h-16 relative drop-shadow-[0_14px_28px_rgba(217,119,6,0.45)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shieldEnclosure" x1="8" y1="8" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3d1e0f" />
          <stop offset="0.5" stopColor="#241108" />
          <stop offset="1" stopColor="#0d0502" />
        </linearGradient>

        <linearGradient id="castBrass3D" x1="18" y1="12" x2="50" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fffbeb" />
          <stop offset="0.25" stopColor="#fde047" />
          <stop offset="0.55" stopColor="#d97706" />
          <stop offset="0.85" stopColor="#b45309" />
          <stop offset="1" stopColor="#78350f" />
        </linearGradient>

        <linearGradient id="mirrorFacet" x1="20" y1="14" x2="34" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 3D Base Drop Shadow */}
      <rect x="8" y="12" width="52" height="48" rx="16" fill="#0d0502" opacity="0.9" />
      
      {/* Outer Armor Rim Housing */}
      <rect x="8" y="8" width="52" height="48" rx="16" fill="url(#shieldEnclosure)" stroke="#d97706" strokeWidth="1.5" strokeOpacity="0.5" />
      
      {/* 3D Heavy Cast Solid Brass Shield */}
      <path
        d="M34 14L48 19.5V32C48 41.5 42 49 34 52C26 49 20 41.5 20 32V19.5L34 14Z"
        fill="url(#castBrass3D)"
        stroke="#fffbeb"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Left Beveled Facet Mirror Reflection */}
      <path d="M34 14L20 19.5V32C20 41.5 26 49 34 52V14Z" fill="url(#mirrorFacet)" />

      {/* Central 10-Year Verification Check Emblem */}
      <path
        d="M28 33.5L32.5 38L40.5 29.5"
        stroke="#ffffff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Polished Star Sparkle Glint on Shield Crest */}
      <circle cx="34" cy="14" r="2.5" fill="#ffffff" />
      <path d="M34 10V18M30 14H38" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  </div>
);

export const GuaranteesBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll observer: triggers gracefully as user scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOpen(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Workshop Guarantees"
      className="w-full mt-10 sm:mt-14 select-none pb-4"
    >
      {/* Clean Header Eyebrow */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c84224] animate-pulse" />
          <span className="text-[12px] font-semibold uppercase tracking-wider text-[#8c7a6b]">
            Our Workshop Promise
          </span>
        </div>

        <span className="text-[12px] text-[#6a4632] font-medium hidden sm:inline">
          Built to outlive trends · 100% Hand-stitched in Nigeria
        </span>
      </div>

      {/* Cards Area: Stacked when out of view, Fans out smoothly on scroll with 3D drop shadows */}
      <div className="relative w-full">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.9,0.2,1)] ${
            isOpen
              ? 'py-3'
              : 'max-w-md mx-auto md:max-w-none md:py-8'
          }`}
        >
          
          {/* Card 1: Ethically Sourced Nigerian Full-Grain Cowhide */}
          <div
            className={`relative transition-all duration-[1300ms] ease-[cubic-bezier(0.2,0.9,0.2,1)] ${
              isOpen
                ? 'translate-x-0 translate-y-0 rotate-0 scale-100 z-10 md:delay-[120ms]'
                : 'md:translate-x-[calc(100%+1.5rem)] md:-rotate-5 md:translate-y-2 md:scale-[0.98] z-30 translate-y-0 -rotate-2 delay-0'
            }`}
          >
            {/* Atmospheric Ground Drop Shadow Pod */}
            <div className="absolute -bottom-4 left-6 right-6 h-7 bg-[#231815]/20 blur-xl rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#231815]/30 group-hover:blur-2xl" />

            <a
              href="#objects"
              className="hover-3d cursor-pointer group w-full block rounded-2xl relative"
            >
              {/* Premium 3D Card Surface with Physical Rim & Multi-layer Drop Shadow */}
              <div className="card w-full rounded-2xl border-t border-t-white/95 border-x border-x-[#e2dad0] border-b-2 border-b-[#cfc2b1] bg-gradient-to-b from-[#ffffff] via-[#fdfcf9] to-[#f8f5ee] p-6 sm:p-7 shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_18px_36px_-8px_rgba(35,24,21,0.14),0_8px_16px_-4px_rgba(35,24,21,0.08),0_14px_30px_-6px_rgba(200,66,36,0.12)] hover:shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_32px_64px_-12px_rgba(35,24,21,0.24),0_16px_28px_-6px_rgba(35,24,21,0.14),0_20px_40px_-8px_rgba(200,66,36,0.2)] bg-[radial-gradient(circle_at_bottom_left,#ffffff80_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff70_35%,transparent_36%)] bg-[size:4.95em_4.95em] transition-all duration-300 relative overflow-hidden">
                
                <div className="flex items-start justify-between gap-3 mb-5">
                  <Icon3DLeather />
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#fbf0ed] border border-[#f2cfc7] text-[#c84224] shadow-[0_2px_8px_rgba(200,66,36,0.15)] flex items-center gap-1 shrink-0 pop-3d-text">
                    <span>Pure Cowhide</span>
                  </span>
                </div>

                <div className="space-y-2 pop-3d-text">
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#231815] font-serif tracking-tight flex items-center justify-between">
                    <span>Ethically Sourced Full-Grain Cowhide</span>
                    <div className="w-8 h-8 rounded-full bg-[#fbf9f5] border border-[#e2dad0] flex items-center justify-center text-[#8c7a6b] group-hover:border-[#c84224] group-hover:bg-[#c84224] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </h3>
                  <p className="text-[13px] text-[#6a4632] leading-relaxed">
                    100% thick Nigerian bovine leather from local tanneries. Rich in natural oils that never peel, crack, or flake with age.
                  </p>
                </div>
              </div>

              {/* 8 empty divs needed for the 3D hover parallax effect */}
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </a>
          </div>

          {/* Card 2: Zero Middlemen, Direct Bag Maker WhatsApp Support */}
          <div
            className={`relative transition-all duration-[1100ms] ease-[cubic-bezier(0.2,0.9,0.2,1)] ${
              isOpen
                ? 'translate-x-0 translate-y-0 rotate-0 scale-100 z-10 md:delay-[40ms]'
                : 'md:translate-x-0 md:rotate-0 md:translate-y-0 md:scale-[0.99] z-20 -mt-44 md:mt-0 rotate-2 delay-0'
            }`}
          >
            {/* Atmospheric Ground Drop Shadow Pod */}
            <div className="absolute -bottom-4 left-6 right-6 h-7 bg-[#231815]/20 blur-xl rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#231815]/30 group-hover:blur-2xl" />

            <a
              href="#commission"
              className="hover-3d cursor-pointer group w-full block rounded-2xl relative"
            >
              {/* Premium 3D Card Surface with Physical Rim & Multi-layer Drop Shadow */}
              <div className="card w-full rounded-2xl border-t border-t-white/95 border-x border-x-[#e2dad0] border-b-2 border-b-[#cfc2b1] bg-gradient-to-b from-[#ffffff] via-[#fdfcf9] to-[#f8f5ee] p-6 sm:p-7 shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_18px_36px_-8px_rgba(35,24,21,0.14),0_8px_16px_-4px_rgba(35,24,21,0.08),0_14px_30px_-6px_rgba(37,211,102,0.12)] hover:shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_32px_64px_-12px_rgba(35,24,21,0.24),0_16px_28px_-6px_rgba(35,24,21,0.14),0_20px_40px_-8px_rgba(37,211,102,0.2)] bg-[radial-gradient(circle_at_bottom_left,#ffffff80_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff70_35%,transparent_36%)] bg-[size:4.95em_4.95em] transition-all duration-300 relative overflow-hidden">
                
                <div className="flex items-start justify-between gap-3 mb-5">
                  <Icon3DArtisan />
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#059669] shadow-[0_2px_8px_rgba(16,185,129,0.15)] flex items-center gap-1 shrink-0 pop-3d-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                    <span>Direct Maker Line</span>
                  </span>
                </div>

                <div className="space-y-2 pop-3d-text">
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#231815] font-serif tracking-tight flex items-center justify-between">
                    <span>Zero Middlemen, Direct WhatsApp Support</span>
                    <div className="w-8 h-8 rounded-full bg-[#fbf9f5] border border-[#e2dad0] flex items-center justify-center text-[#8c7a6b] group-hover:border-[#059669] group-hover:bg-[#059669] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </h3>
                  <p className="text-[13px] text-[#6a4632] leading-relaxed">
                    No store agent markups or middlemen. Talk directly with our master leather craftsmen in Ibadan & Lagos for all questions.
                  </p>
                </div>
              </div>

              {/* 8 empty divs needed for the 3D hover parallax effect */}
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </a>
          </div>

          {/* Card 3: Lifetime Stitching & Anti-Peel Warranty */}
          <div
            className={`relative transition-all duration-[1300ms] ease-[cubic-bezier(0.2,0.9,0.2,1)] ${
              isOpen
                ? 'translate-x-0 translate-y-0 rotate-0 scale-100 z-10 md:delay-[220ms]'
                : 'md:-translate-x-[calc(100%+1.5rem)] md:rotate-5 md:-translate-y-2 md:scale-[0.98] z-10 -mt-44 md:mt-0 -rotate-1 delay-0'
            }`}
          >
            {/* Atmospheric Ground Drop Shadow Pod */}
            <div className="absolute -bottom-4 left-6 right-6 h-7 bg-[#231815]/20 blur-xl rounded-full pointer-events-none transition-all duration-500 group-hover:bg-[#231815]/30 group-hover:blur-2xl" />

            <a
              href="#care"
              className="hover-3d cursor-pointer group w-full block rounded-2xl relative"
            >
              {/* Premium 3D Card Surface with Physical Rim & Multi-layer Drop Shadow */}
              <div className="card w-full rounded-2xl border-t border-t-white/95 border-x border-x-[#e2dad0] border-b-2 border-b-[#cfc2b1] bg-gradient-to-b from-[#ffffff] via-[#fdfcf9] to-[#f8f5ee] p-6 sm:p-7 shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_18px_36px_-8px_rgba(35,24,21,0.14),0_8px_16px_-4px_rgba(35,24,21,0.08),0_14px_30px_-6px_rgba(217,119,6,0.12)] hover:shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_32px_64px_-12px_rgba(35,24,21,0.24),0_16px_28px_-6px_rgba(35,24,21,0.14),0_20px_40px_-8px_rgba(217,119,6,0.2)] bg-[radial-gradient(circle_at_bottom_left,#ffffff80_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff70_35%,transparent_36%)] bg-[size:4.95em_4.95em] transition-all duration-300 relative overflow-hidden">
                
                <div className="flex items-start justify-between gap-3 mb-5">
                  <Icon3DShield />
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#fefce8] border border-[#fef08a] text-[#b45309] shadow-[0_2px_8px_rgba(217,119,6,0.15)] flex items-center gap-1 shrink-0 pop-3d-text">
                    <span>Lifetime Promise</span>
                  </span>
                </div>

                <div className="space-y-2 pop-3d-text">
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#231815] font-serif tracking-tight flex items-center justify-between">
                    <span>Lifetime Stitching & Anti-Peel Warranty</span>
                    <div className="w-8 h-8 rounded-full bg-[#fbf9f5] border border-[#e2dad0] flex items-center justify-center text-[#8c7a6b] group-hover:border-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </h3>
                  <p className="text-[13px] text-[#6a4632] leading-relaxed">
                    Sewn with heavy-duty bonded cord and solid cast brass. If any seam loosens or the leather ever peels, we repair or replace it for free.
                  </p>
                </div>
              </div>

              {/* 8 empty divs needed for the 3D hover parallax effect */}
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
