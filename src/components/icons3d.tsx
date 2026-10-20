import React from 'react';

/**
 * Premium Animated 3D Luxury Dustbag & Anti-Peel Warranty Icon
 * Specifically designed to precede "Complimentary personalized dustbag + 10-year leather peel warranty".
 * Features:
 * - 3D woven natural canvas dustbag with soft fabric pleats
 * - Cinched terracotta leather neck & twisted golden drawstring cord with polished brass aglets
 * - Stamped 3D golden brass wax warranty seal with 10-year checkmark emblem
 * - Ambient warm glow, ground shadow pod, subtle floating physics and interactive 3D hover response
 */
export const Icon3DDustbagWarranty: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }[size];

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 group/dustbag cursor-pointer transition-transform duration-500 ease-out hover:scale-125 hover:-translate-y-1 hover:rotate-3 ${sizeClasses}`}
      title="Complimentary Handcrafted Dustbag & 10-Year Warranty"
    >
      {/* 3D Atmospheric Radial Glow */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c84224]/30 via-[#d97706]/20 to-transparent blur-md group-hover/dustbag:blur-lg group-hover/dustbag:bg-[#c84224]/45 transition-all duration-300 animate-pulse" />

      {/* Ground Contact Shadow */}
      <span className="absolute -bottom-1 inset-x-1.5 h-1.5 bg-[#231815]/30 blur-[2px] rounded-full group-hover/dustbag:scale-90 transition-transform duration-300" />

      <svg
        viewBox="0 0 48 48"
        className="w-full h-full relative drop-shadow-[0_4px_8px_rgba(92,61,46,0.35)] animate-float-gentle"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Canvas Fabric Shading Gradient (Natural Ecru Linen) */}
          <linearGradient id="dustbagCanvas" x1="12" y1="14" x2="36" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="0.3" stopColor="#fdfaf5" />
            <stop offset="0.75" stopColor="#ede4d4" />
            <stop offset="1" stopColor="#d5c7b3" />
          </linearGradient>

          {/* Canvas Fabric Fold Shading */}
          <linearGradient id="canvasFold" x1="24" y1="16" x2="34" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="0.4" stopColor="#c5b59e" stopOpacity="0.3" />
            <stop offset="1" stopColor="#9a866d" stopOpacity="0.5" />
          </linearGradient>

          {/* Solid Cast Brass & Gold Seal Gradient */}
          <linearGradient id="brassSealGrad" x1="20" y1="24" x2="34" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffbeb" />
            <stop offset="0.2" stopColor="#fde047" />
            <stop offset="0.55" stopColor="#d97706" />
            <stop offset="0.85" stopColor="#b45309" />
            <stop offset="1" stopColor="#78350f" />
          </linearGradient>

          {/* Leather Drawstring Cord Gradient */}
          <linearGradient id="cordGrad" x1="16" y1="12" x2="32" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d9532f" />
            <stop offset="0.5" stopColor="#c84224" />
            <stop offset="1" stopColor="#782312" />
          </linearGradient>

          {/* Metallic Aglet Gold */}
          <linearGradient id="agletGold" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#fef08a" />
            <stop offset="0.5" stopColor="#d97706" />
            <stop offset="1" stopColor="#92400e" />
          </linearGradient>

          {/* Specular Gleam Highlight */}
          <linearGradient id="bagGleam" x1="14" y1="16" x2="26" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 3D Dustbag Base Body (Pouch with soft rounded contours) */}
        <path
          d="M15 17C15 15.5 17 14.5 24 14.5C31 14.5 33 15.5 33 17L35.5 35C36 39.5 32.5 43 27 43H21C15.5 43 12 39.5 12.5 35L15 17Z"
          fill="url(#dustbagCanvas)"
          stroke="#b8a791"
          strokeWidth="0.8"
        />

        {/* Fabric Crease & Volume Depth Shadow */}
        <path
          d="M20 16L18 36C18 39 20 41 23 41.5L22 16"
          fill="url(#canvasFold)"
          opacity="0.6"
        />
        <path
          d="M28 16L30 36C30 39 28 41 25 41.5L26 16"
          fill="url(#canvasFold)"
          opacity="0.4"
        />

        {/* Soft Specular Sheen Across Left Shoulder */}
        <path
          d="M15 18C15 16 19 15.5 24 15.5C21 17 17 21 16 28L15 18Z"
          fill="url(#bagGleam)"
        />

        {/* Pleated Gathered Dustbag Crown / Frill Header */}
        <path
          d="M16 15C15 12 17 9.5 20 10.5C22 9 26 9 28 10.5C31 9.5 33 12 32 15C29 14 19 14 16 15Z"
          fill="#fbf8f2"
          stroke="#c5b59e"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />

        {/* Cinched Leather Drawstring Band around Neck */}
        <rect
          x="15"
          y="14.5"
          width="18"
          height="3"
          rx="1.5"
          fill="url(#cordGrad)"
          stroke="#5c1a0e"
          strokeWidth="0.5"
        />

        {/* Drawstring Knot Center */}
        <ellipse cx="24" cy="16" rx="2" ry="1.8" fill="#c84224" stroke="#fff" strokeWidth="0.4" />

        {/* Left Dangling Cord with Brass Aglet */}
        <path
          d="M23 17C21 20 18 22 17 25"
          stroke="url(#cordGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <rect x="16" y="24" width="2" height="3" rx="0.8" fill="url(#agletGold)" />

        {/* Right Dangling Cord with Brass Aglet */}
        <path
          d="M25 17C27 20 29 23 29.5 26"
          stroke="url(#cordGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <rect x="28.5" y="25" width="2" height="3" rx="0.8" fill="url(#agletGold)" />

        {/* Central 3D Embossed Golden Guarantee Seal */}
        <g className="transition-transform duration-300 group-hover/dustbag:scale-110" transform-origin="24 30">
          {/* Seal Drop Shadow */}
          <circle cx="24" cy="30.5" r="7.5" fill="#5c3d2e" opacity="0.35" />
          {/* Outer Polished Brass Beveled Ring */}
          <circle cx="24" cy="30" r="7.5" fill="url(#brassSealGrad)" stroke="#ffffff" strokeWidth="0.7" />
          {/* Recessed Inner Saddle Brown Bed */}
          <circle cx="24" cy="30" r="5.5" fill="#3b1f13" stroke="#fef08a" strokeWidth="0.5" />
          {/* Golden Perforated Saddler Stitching Rim */}
          <circle cx="24" cy="30" r="4.5" fill="none" stroke="#fef08a" strokeWidth="0.6" strokeDasharray="1.5 1.2" opacity="0.85" />
          {/* 10-Year Anti-Peel Certified Checkmark */}
          <path
            d="M21.2 30L23.2 32L27 27.8"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
};

/**
 * Animated 3D Cast Brass Warranty Shield
 * Perfect for anti-peel lifetime guarantees and badges
 */
export const Icon3DWarrantyMini: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'sm' }) => {
  const sizeClasses = size === 'sm' ? 'w-5 h-5' : 'w-6 h-6';

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 group/shield cursor-pointer transition-transform duration-300 ease-out hover:scale-125 ${sizeClasses}`}
      title="10-Year Guarantee: Never Peels"
    >
      <span className="absolute inset-0 rounded-full bg-[#d97706]/25 blur-[3px] animate-pulse" />
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full relative drop-shadow-[0_2px_4px_rgba(217,119,6,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldBrassMini" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffbeb" />
            <stop offset="0.25" stopColor="#fde047" />
            <stop offset="0.55" stopColor="#d97706" />
            <stop offset="0.85" stopColor="#b45309" />
            <stop offset="1" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="shieldFacetMini" x1="4" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* 3D Shield */}
        <path
          d="M12 2.5L19.5 5.5V11.5C19.5 16.5 16 20.2 12 21.5C8 20.2 4.5 16.5 4.5 11.5V5.5L12 2.5Z"
          fill="url(#shieldBrassMini)"
          stroke="#fffbeb"
          strokeWidth="0.8"
        />
        {/* Reflection Facet */}
        <path
          d="M12 2.5L4.5 5.5V11.5C4.5 16.5 8 20.2 12 21.5V2.5Z"
          fill="url(#shieldFacetMini)"
        />
        {/* Checkmark */}
        <path
          d="M9.5 11.8L11.2 13.5L14.8 9.8"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

/**
 * Animated 3D Emerald Artisan WhatsApp Jewel Icon
 * For direct maker chat and live artisan lines
 */
export const Icon3DArtisanMini: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'sm' }) => {
  const sizeClasses = size === 'sm' ? 'w-5 h-5' : 'w-6 h-6';

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 group/artisan cursor-pointer transition-transform duration-300 ease-out hover:scale-125 ${sizeClasses}`}
      title="Direct Bag Maker Line"
    >
      <span className="absolute inset-0 rounded-full bg-[#10b981]/25 blur-[3px] animate-pulse" />
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full relative drop-shadow-[0_2px_4px_rgba(16,185,129,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waEmeraldMini" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6ee7b7" />
            <stop offset="0.3" stopColor="#34d399" />
            <stop offset="0.7" stopColor="#10b981" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
        </defs>
        {/* 3D Chat Jewel Bubble */}
        <path
          d="M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V13C18 14.6569 16.6569 16 15 16H11L7 19V16H9C7.34315 16 6 14.6569 6 13V7Z"
          fill="url(#waEmeraldMini)"
          stroke="#a7f3d0"
          strokeWidth="0.8"
        />
        {/* Telephone Handset */}
        <path
          d="M9.5 8C9.5 8 10.2 9.2 10.8 9.2C11.4 9.2 11.8 8.8 12.3 8.8C12.8 8.8 13.8 9.8 13.8 10.4C13.8 11 13.4 11.4 13.4 12C13.4 12.6 14.5 13.5 14.5 13.5"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Live Indicator Dot */}
        <circle cx="17" cy="6" r="1.5" fill="#ffffff" />
      </svg>
    </span>
  );
};
