import React, { useState, useEffect } from 'react';
import { X, Check, MessageSquare, Plus, ShieldCheck, Flame } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatCurrency } from '../utils/currency';
import { Icon3DDustbagWarranty } from './icons3d';

interface QuickViewModalProps {
  product: Product | null;
  currency: Currency;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  adminWhatsApp: string;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  currency,
  onClose,
  onAddToCart,
  adminWhatsApp,
}) => {
  const [added, setAdded] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (!product) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsappInquiryUrl = `https://wa.me/${adminWhatsApp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(
    `Hello! I want to ask about "${product.title}" (${formatCurrency(product.priceNGN, 'NGN')}). Is it ready to dispatch?`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#231815]/65 backdrop-blur-sm animate-in fade-in duration-150 overflow-y-auto cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Background click catcher layer */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Prominent Floating Close Button on Mobile (Fixed in top right corner so it never scrolls away) */}
      <button
        onClick={onClose}
        className="fixed top-3 right-3 sm:hidden z-50 w-11 h-11 rounded-full bg-[#231815] text-[#ffffff] shadow-[0_6px_24px_rgba(0,0,0,0.5)] border-2 border-[#ffffff] flex items-center justify-center active:scale-95 transition-all cursor-pointer group"
        aria-label="Close product details"
        title="Close"
      >
        <X className="w-6 h-6 text-white stroke-[2.5] group-hover:rotate-90 transition-transform duration-200" />
      </button>

      {/* Earthy Warm Dialog on Bone White */}
      <div
        className="relative w-full max-w-3xl bg-[#ffffff] rounded-[14px] border border-[#e2dad0] text-[#231815] overflow-y-auto max-h-[88vh] sm:max-h-[92vh] z-10 p-5 sm:p-8 shadow-[0_24px_64px_rgba(35,24,21,0.25)] cursor-default my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Prominent Desktop Close Button */}
        <button
          onClick={onClose}
          className="hidden sm:flex absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-[#231815] text-[#ffffff] hover:bg-[#c84224] active:scale-95 items-center justify-center shadow-[0_4px_18px_rgba(0,0,0,0.3)] border-2 border-[#ffffff] transition-all cursor-pointer group"
          aria-label="Close product details"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 text-white stroke-[2.5] group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Mobile Header Bar with prominent close badge */}
        <div className="flex sm:hidden items-center justify-between pb-3.5 mb-3 border-b border-[#eee7db]">
          <span className="text-[12px] font-semibold text-[#5c3d2e] tracking-wide uppercase">
            Bag Details & Specs
          </span>
          <button
            onClick={onClose}
            className="text-[12px] font-semibold text-[#c84224] bg-[#fbf0ed] hover:bg-[#f2cfc7] px-3 py-1 rounded-full border border-[#f2cfc7] flex items-center gap-1 active:scale-95 transition cursor-pointer"
          >
            <X className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Close (✕)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          
          {/* Image Container */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-[#eee7db]">
            <img
              src={product.image}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#fbf0ed] border border-[#f2cfc7] text-[#c84224] rounded-full px-2.5 py-0.5 text-[11px] font-semibold flex items-center gap-1 shadow-sm">
              <Flame className="w-3 h-3 text-[#c84224]" />
              <span>{product.stockBadge}</span>
            </span>
          </div>

          {/* Details Column */}
          <div className="space-y-4">
            
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#6a4632]">
              <span>{product.category === 'leather' ? '100% Bovine Cowhide' : product.category === 'crochet' ? 'Hand-Knitted Cotton' : 'Leather & Fiber Hybrid'}</span>
              <span>·</span>
              <span className="text-[#c84224] font-semibold">{product.batch}</span>
            </div>

            <h3 id="modal-product-title" className="text-xl sm:text-2xl font-light tracking-tight text-[#231815]">
              {product.title}
            </h3>

            {/* Atelier Craftsmanship Note */}
            <div className="flex items-center gap-2 text-[12px] text-[#5c3d2e] font-medium">
              <span>{product.materials}</span>
              <span>·</span>
              <span className="text-[#8c7a6b]">Guaranteed Anti-Peel</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
              <span className="text-xl font-bold text-[#c84224] tabular-nums">
                {formatCurrency(product.priceNGN, currency)}
              </span>
              <span className="text-[12px] text-[#6a4632] inline-flex items-center gap-1.5 font-medium">
                <Icon3DDustbagWarranty size="sm" />
                <span>Includes complimentary dustbag & guarantee</span>
              </span>
            </div>

            <p className="text-[13px] text-[#5c3d2e] leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="space-y-1.5 pt-3 border-t border-[#e2dad0] text-[12px]">
              <div>
                <span className="font-semibold text-[#231815] block text-[11px]">
                  Piece Dimensions:
                </span>
                <span className="text-[#6a4632]">{product.dimensions}</span>
              </div>
              <div>
                <span className="font-semibold text-[#231815] block text-[11px]">
                  Sourced Materials:
                </span>
                <span className="text-[#6a4632]">{product.materials}</span>
              </div>
            </div>

            {/* What Fits Inside */}
            <div className="pt-2">
              <span className="block text-[11px] font-semibold text-[#231815] mb-1.5">
                Compartment capacity:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.fits.map((fit, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full bg-[#eee7db] border border-[#e2dad0] text-[#5c3d2e] text-[11px] font-medium"
                  >
                    ✓ {fit}
                  </span>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="p-3 rounded-[8px] border border-[#e2dad0] bg-[#eee7db]/50 flex items-center gap-2 text-[12px] text-[#231815]">
              <ShieldCheck className="w-4 h-4 text-[#c84224] shrink-0" />
              <span>Full-grain Nigerian leather · Zero plastic, guaranteed never to peel</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 space-y-2">
              <button
                onClick={handleAdd}
                disabled={added}
                className={`w-full py-2.5 px-6 rounded-full font-semibold text-[13px] flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  added
                    ? 'bg-[#298018] text-[#ffffff] shadow-sm'
                    : 'btn-urgency-red'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-white" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-sand-outline py-2 text-[12px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#c84224]" />
                <span>Inquire directly on WhatsApp</span>
              </a>

              {/* Explicit Dismiss / Close Button */}
              <button
                onClick={onClose}
                className="w-full py-2 rounded-full border border-[#d6cbbe] hover:border-[#c84224] text-[#5c3d2e] hover:text-[#c84224] hover:bg-[#eee7db] text-[12px] font-semibold transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Close Details</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
