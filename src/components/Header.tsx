import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MessageSquare, ArrowRight, Flame } from 'lucide-react';
import { Currency } from '../types';

interface HeaderProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  cartCount: number;
  onOpenCart: () => void;
  adminWhatsApp: string;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onCurrencyChange,
  cartCount,
  onOpenCart,
  adminWhatsApp,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Urgent Announcement Bar: Warm Sand Beige with Terracotta Red Urgency Spark */}
      <aside
        aria-label="Workshop Urgency & Dispatch Banner"
        className="w-full bg-[#eee7db] border-b border-[#e2dad0] text-[#231815] h-9 sm:h-10 px-3 sm:px-6 flex items-center justify-between text-[11px] sm:text-[12px] font-normal tracking-[-0.01em] z-50 overflow-hidden"
      >
        <div className="flex items-center gap-2 truncate min-w-0">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#fbf0ed] border border-[#f2cfc7] text-[#c84224] text-[10px] sm:text-[11px] font-semibold shrink-0">
            <Flame className="w-3 h-3 text-[#c84224]" />
            <span>Limited Batch</span>
          </span>
          <span className="hidden sm:inline text-[#5c3d2e] text-[12px] truncate">
            Only 4 custom leather slots open for next-week dispatch · Direct Lagos & Ibadan Delivery
          </span>
        </div>

        <a
          href={`https://wa.me/${adminWhatsApp.replace(/[^\d]/g, '')}?text=${encodeURIComponent("Hello! I want to ask about available bags and claim one of this week's custom slots.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#c84224] hover:text-[#9e2e14] transition-colors text-[11px] sm:text-[12px] font-semibold shrink-0 group ml-2"
        >
          <span>Claim on WhatsApp</span>
          <ArrowRight className="w-3 h-3 text-[#c84224] transition-transform group-hover:translate-x-0.5" />
        </a>
      </aside>

      {/* Cream & Earthy Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#fdfcf9]/95 backdrop-blur-md border-b border-[#e2dad0] shadow-[0_2px_8px_rgba(35,24,21,0.04)] w-full">
        <div className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-6">
          
          {/* Left Zone: Brand Wordmark with Terracotta Red Dot */}
          <div className="flex items-center gap-2 sm:gap-6 shrink-0 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 -ml-1 text-[#231815] hover:bg-[#eee7db] rounded-lg transition cursor-pointer shrink-0"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#c84224]" /> : <Menu className="w-5 h-5" />}
            </button>

            <a
              href="#"
              className="brand-logo font-logo text-[20px] sm:text-[24px] font-bold tracking-tight text-[#231815] select-none flex items-baseline hover:opacity-90 transition-opacity shrink-0"
            >
              <span>bagged</span>
              <span className="text-[#c84224] ml-0.5 text-[24px] sm:text-[26px] leading-none">.</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              <a
                href="#objects"
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#5c3d2e] hover:text-[#231815] hover:bg-[#eee7db] transition-colors"
              >
                Ready Bags
              </a>
              <a
                href="#customizer"
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#5c3d2e] hover:text-[#231815] hover:bg-[#eee7db] transition-colors"
              >
                Design Your Bag
              </a>
              <a
                href="#commission"
                className="px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-[#231815] hover:bg-[#eee7db] transition-colors flex items-center gap-1.5"
              >
                <span>Custom Order</span>
                <span className="w-2 h-2 rounded-full bg-[#c84224] animate-ping" />
              </a>
              <a
                href="#care"
                className="px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#8c7a6b] hover:text-[#231815] hover:bg-[#eee7db] transition-colors"
              >
                Care & FAQ
              </a>
            </nav>
          </div>

          {/* Right Zone: Controls (Currency, WhatsApp, Cart) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Currency Selector Pill */}
            <div className="relative shrink-0">
              <select
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className="appearance-none bg-[#ffffff] border border-[#e2dad0] rounded-full text-[11px] sm:text-[12px] font-medium text-[#231815] py-1.5 pl-2.5 sm:pl-3.5 pr-6 sm:pr-7 cursor-pointer focus:outline-none focus:border-[#c84224] hover:border-[#5c3d2e] transition"
                aria-label="Select currency"
              >
                <option value="NGN" className="bg-[#ffffff] text-[#231815]">NGN ₦</option>
                <option value="USD" className="bg-[#ffffff] text-[#231815]">USD $</option>
                <option value="GBP" className="bg-[#ffffff] text-[#231815]">GBP £</option>
              </select>
            </div>

            {/* Direct WhatsApp Contact Pill (Hidden on mobile) */}
            <a
              href={`https://wa.me/${adminWhatsApp.replace(/[^\d]/g, '')}?text=${encodeURIComponent("Hello! I want to inquire about available bags and custom orders.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e2dad0] bg-[#ffffff] text-[12px] font-medium text-[#231815] hover:bg-[#eee7db] hover:border-[#5c3d2e] transition shrink-0"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#c84224]" />
              <span>WhatsApp</span>
            </a>

            {/* Terracotta Red Urgency Cart Button */}
            <button
              onClick={onOpenCart}
              className="btn-urgency-red !py-1.5 !px-3 sm:!px-4 text-[12px] sm:text-[13px] whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-[0_2px_8px_rgba(200,66,36,0.28)]"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="font-semibold">Bag ({cartCount})</span>
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e2dad0] bg-[#ffffff] px-6 py-5 space-y-3 text-[14px] font-medium">
            <a
              href="#objects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#231815] hover:text-[#c84224] transition-colors"
            >
              Ready-Made Catalog
            </a>
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#5c3d2e] hover:text-[#231815] transition-colors"
            >
              Design Your Own Bag
            </a>
            <a
              href="#commission"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-[#231815]"
            >
              <span>Custom Order (Photos & Voice)</span>
              <span className="text-[11px] font-semibold text-[#ffffff] bg-[#c84224] px-2 py-0.5 rounded-full">
                HOT
              </span>
            </a>
            <a
              href="#care"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#8c7a6b] hover:text-[#231815] transition-colors"
            >
              Care Guide & FAQ
            </a>
            <div className="pt-3 border-t border-[#e2dad0] flex items-center justify-between text-[13px]">
              <a
                href={`https://wa.me/${adminWhatsApp.replace(/[^\d]/g, '')}?text=${encodeURIComponent("Hello! I want to inquire about available bags.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#c84224] font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <span className="text-[#8c7a6b] text-[12px]">Ibadan & Lagos Workshop</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
