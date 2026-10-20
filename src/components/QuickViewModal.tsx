import React, { useState } from 'react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#231815]/50 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Earthy Warm Dialog on Bone White */}
      <div className="relative w-full max-w-3xl bg-[#ffffff] rounded-[12px] border border-[#e2dad0] text-[#231815] overflow-y-auto max-h-[92vh] z-10 p-6 sm:p-8 shadow-[0_16px_48px_rgba(35,24,21,0.18)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#eee7db] hover:bg-[#e2dad0] flex items-center justify-center text-[#5c3d2e] hover:text-[#231815] transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
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

            <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#231815]">
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
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
