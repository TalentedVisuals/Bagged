import React, { useState } from 'react';
import { Clock, MessageSquare, Check, Plus, Flame } from 'lucide-react';
import { Currency, CartItem } from '../types';
import { formatCurrency } from '../utils/currency';
import { Icon3DDustbagWarranty } from './icons3d';

interface BespokeStudioProps {
  currency: Currency;
  onAddCustomToCart: (item: CartItem) => void;
  adminWhatsApp: string;
}

interface SilhouetteOption {
  key: string;
  name: string;
  subtitle: string;
  basePrice: number;
  image: string;
}

interface MaterialOption {
  key: string;
  name: string;
  colorHex: string;
  extraPrice: number;
  category: 'leather' | 'crochet' | 'hybrid';
}

interface HardwareOption {
  key: string;
  name: string;
  finish: string;
}

const SILHOUETTES: SilhouetteOption[] = [
  {
    key: 'ajwa',
    name: 'Ajwa Bucket Bag',
    subtitle: 'Stands up easily on flat surfaces',
    basePrice: 115000,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
  },
  {
    key: 'alaafia',
    name: 'Alaafia Shoulder Bag',
    subtitle: 'Fits naturally under the arm',
    basePrice: 95000,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    key: 'barakah',
    name: 'Barakah Everyday Tote',
    subtitle: 'Reinforced leather base with body weave',
    basePrice: 145000,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80',
  },
];

const MATERIALS: MaterialOption[] = [
  {
    key: 'wine_leather',
    name: 'Rich Wine Nigerian Cowhide',
    colorHex: '#6b1129',
    extraPrice: 0,
    category: 'leather',
  },
  {
    key: 'saddle',
    name: 'Warm Saddle Tan Cowhide',
    colorHex: '#9E5828',
    extraPrice: 0,
    category: 'leather',
  },
  {
    key: 'black_leather',
    name: 'Midnight Black Cowhide',
    colorHex: '#181310',
    extraPrice: 5000,
    category: 'leather',
  },
  {
    key: 'olive',
    name: 'Olive Green Cotton Cord',
    colorHex: '#586249',
    extraPrice: 0,
    category: 'crochet',
  },
  {
    key: 'terracotta',
    name: 'Terracotta Woven Fiber',
    colorHex: '#B85838',
    extraPrice: 4000,
    category: 'hybrid',
  },
];

const HARDWARE_FINISHES: HardwareOption[] = [
  { key: 'brass', name: 'Solid Cast Brass', finish: 'Bright warm golden finish' },
  { key: 'bronze', name: 'Vintage Dark Bronze', finish: 'Subtle patinated matte' },
  { key: 'gunmetal', name: 'Smoky Gunmetal', finish: 'Modern dark polished metal' },
];

export const BespokeStudio: React.FC<BespokeStudioProps> = ({
  currency,
  onAddCustomToCart,
  adminWhatsApp,
}) => {
  const [selectedSilhouette, setSelectedSilhouette] = useState<SilhouetteOption>(SILHOUETTES[0]);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>(MATERIALS[0]);
  const [selectedHardware, setSelectedHardware] = useState<HardwareOption>(HARDWARE_FINISHES[0]);
  const [monogram, setMonogram] = useState('');
  const [added, setAdded] = useState(false);

  const totalPriceNGN = selectedSilhouette.basePrice + selectedMaterial.extraPrice;

  const handleAddToCart = () => {
    const monoText = monogram.trim() ? ` · Initials: [${monogram.trim().toUpperCase()}]` : '';
    const spec = `${selectedMaterial.name} · ${selectedHardware.name}${monoText}`;

    const customCartItem: CartItem = {
      id: `custom-${Date.now()}`,
      title: `Custom-Made ${selectedSilhouette.name}`,
      priceNGN: totalPriceNGN,
      image: selectedSilhouette.image,
      spec,
      quantity: 1,
      isCustom: true,
      customDetails: {
        silhouette: selectedSilhouette.name,
        material: selectedMaterial.name,
        hardware: selectedHardware.name,
        monogram: monogram.trim().toUpperCase() || undefined,
      },
    };

    onAddCustomToCart(customCartItem);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const monoText = monogram.trim()
      ? `with my initials "${monogram.trim().toUpperCase()}" in gold`
      : 'no initials';

    const message = `Hello! I designed a custom bag on your website:
• Bag Shape: ${selectedSilhouette.name}
• Leather / Color: ${selectedMaterial.name}
• Metal Fitting: ${selectedHardware.name}
• Initials: ${monoText}
• Estimated Price: ${formatCurrency(totalPriceNGN, 'NGN')}

Please let me know if you have materials ready in your Ibadan workshop to make this.`;

    window.open(
      `https://wa.me/${adminWhatsApp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section id="customizer" className="w-full">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#231815]">
            Design Your Own Bag
          </h2>
          <p className="text-xs text-[#6a4632] mt-1">
            Choose your leather color, handwoven cord, solid brass buckles, and write your name initials in gold.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eee7db] border border-[#e2dad0] text-[12px] font-semibold text-[#c84224]">
          <Clock className="w-3.5 h-3.5 text-[#c84224]" />
          <span>7–10 Days Handcrafted Dispatch</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left: Product Stage Card (Bone White, Soft Earthy Border) */}
        <div className="lg:col-span-6 earth-card p-4 sm:p-6 sticky top-20">
          
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] bg-[#eee7db] mb-4">
            <img
              src={selectedSilhouette.image}
              alt={selectedSilhouette.name}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            {monogram.trim() && (
              <div className="absolute top-3 right-3 bg-[#ffffff]/95 border border-[#e2dad0] backdrop-blur-sm rounded-full px-3 py-0.5 text-[11px] font-bold tracking-widest text-[#c84224] shadow-sm">
                Initials: {monogram.trim().toUpperCase()}
              </div>
            )}
            <div className="absolute bottom-3 left-3 bg-[#231815]/90 border border-[#231815] backdrop-blur-sm text-[#ffffff] rounded-full px-3 py-1 text-[11px] font-medium">
              100% Genuine Nigerian Cowhide
            </div>
          </div>

          {/* Bag Configuration Summary */}
          <div className="space-y-2 pt-2 px-1">
            <div className="flex items-baseline justify-between">
              <h3 className="text-[17px] font-medium font-serif tracking-tight text-[#231815]">
                {selectedSilhouette.name}
              </h3>
              <span className="text-[18px] font-bold text-[#c84224] tabular-nums">
                {formatCurrency(totalPriceNGN, currency)}
              </span>
            </div>

            <div className="flex items-center justify-between text-[13px] text-[#6a4632]">
              <span>{selectedMaterial.name}</span>
              <span>{selectedHardware.name}</span>
            </div>

            <div className="mt-2.5 p-2.5 rounded-[10px] bg-[#fbf9f5] border border-[#e8ded1] flex items-center gap-3 text-[12px] text-[#5c3d2e] shadow-xs">
              <Icon3DDustbagWarranty size="md" />
              <span className="font-medium leading-tight">
                Complimentary personalized dustbag + 10-year leather peel warranty
              </span>
            </div>
          </div>

        </div>

        {/* Right: Step Controls (Bone White Surface, Earthy Borders) */}
        <div className="lg:col-span-6 earth-card p-6 sm:p-8 space-y-6">
          
          {/* Step 1: Shape */}
          <div className="pb-5 border-b border-[#e2dad0]">
            <label className="text-[13px] font-semibold text-[#231815] block mb-3">
              1. Choose Silhouette
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {SILHOUETTES.map((sil) => {
                const active = selectedSilhouette.key === sil.key;
                return (
                  <button
                    key={sil.key}
                    type="button"
                    onClick={() => setSelectedSilhouette(sil)}
                    className={`p-3 text-left rounded-[10px] border transition-all cursor-pointer ${
                      active
                        ? 'border-[#c84224] bg-[#fbf0ed] shadow-sm ring-1 ring-[#c84224]'
                        : 'border-[#e2dad0] bg-[#ffffff] hover:bg-[#eee7db]'
                    }`}
                  >
                    <span className="text-[13px] font-semibold block text-[#231815]">{sil.name}</span>
                    <span className="text-[11px] text-[#6a4632] block mt-0.5">{sil.subtitle}</span>
                    <span className="text-[12px] font-bold block mt-2 text-[#c84224] tabular-nums">
                      {formatCurrency(sil.basePrice, currency)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Material & Color */}
          <div className="pb-5 border-b border-[#e2dad0]">
            <label className="text-[13px] font-semibold text-[#231815] block mb-3">
              2. Leather or Cord Color
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[13px]">
              {MATERIALS.map((mat) => {
                const active = selectedMaterial.key === mat.key;
                return (
                  <button
                    key={mat.key}
                    type="button"
                    onClick={() => setSelectedMaterial(mat)}
                    className={`p-2.5 text-left rounded-[10px] border transition-all cursor-pointer flex flex-col justify-between ${
                      active
                        ? 'border-[#c84224] bg-[#fbf0ed] shadow-sm ring-1 ring-[#c84224]'
                        : 'border-[#e2dad0] bg-[#ffffff] hover:bg-[#eee7db]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-sm shrink-0"
                        style={{ backgroundColor: mat.colorHex }}
                      />
                      <span className="text-[10px] uppercase font-bold text-[#8c7a6b]">
                        {mat.category}
                      </span>
                    </div>
                    <span className="font-semibold text-[12px] leading-tight block text-[#231815]">
                      {mat.name}
                    </span>
                    <span className="text-[11px] text-[#6a4632] mt-1 font-medium">
                      {mat.extraPrice === 0 ? 'Included' : `+${formatCurrency(mat.extraPrice, currency)}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Metal Hardware */}
          <div className="pb-5 border-b border-[#e2dad0]">
            <label className="text-[13px] font-semibold text-[#231815] block mb-3">
              3. Metal Hardware Fitting
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[13px]">
              {HARDWARE_FINISHES.map((hw) => {
                const active = selectedHardware.key === hw.key;
                return (
                  <button
                    key={hw.key}
                    type="button"
                    onClick={() => setSelectedHardware(hw)}
                    className={`p-2.5 text-left rounded-[10px] border transition-all cursor-pointer ${
                      active
                        ? 'border-[#c84224] bg-[#fbf0ed] shadow-sm ring-1 ring-[#c84224]'
                        : 'border-[#e2dad0] bg-[#ffffff] hover:bg-[#eee7db]'
                    }`}
                  >
                    <span className="font-semibold block text-[12px] text-[#231815]">{hw.name}</span>
                    <span className="text-[11px] text-[#6a4632] block mt-0.5">{hw.finish}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Stamped Gold Initials */}
          <div className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-[13px] font-semibold text-[#231815]">
                4. Stamped Gold Initials (Optional)
              </label>
              <span className="text-[11px] font-bold text-[#c84224] bg-[#fbf0ed] border border-[#f2cfc7] px-2 py-0.5 rounded-full">
                Free
              </span>
            </div>
            <input
              type="text"
              maxLength={3}
              value={monogram}
              onChange={(e) => setMonogram(e.target.value.toUpperCase())}
              placeholder="e.g. ADE (Up to 3 Letters)"
              className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3.5 py-2.5 text-sm uppercase tracking-widest text-[#231815] placeholder:normal-case placeholder:tracking-normal placeholder:text-[#8c7a6b] focus:border-[#c84224] focus:outline-none transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={added}
              className={`flex-1 py-2.5 px-6 rounded-full font-semibold text-[13px] flex items-center justify-center gap-2 transition-all cursor-pointer ${
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
                  <span>Add Custom Bag to Cart</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="btn-sand-outline py-2.5 px-5 text-[13px]"
            >
              <MessageSquare className="w-4 h-4 text-[#c84224]" />
              <span>Discuss via WhatsApp</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
