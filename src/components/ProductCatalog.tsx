import React, { useState } from 'react';
import { ChevronRight, Plus, Check, Eye, Flame } from 'lucide-react';
import { Product, ProductCategory, Currency } from '../types';
import { formatCurrency } from '../utils/currency';

interface ProductCatalogProps {
  products: Product[];
  currency: Currency;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  currency,
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [addedIds, setAddedIds] = useState<Record<number, boolean>>({});

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="objects" className="w-full">
      
      {/* Category Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#231815]">
              Ready-Made Bags from Our Workshop
            </h2>
            <ChevronRight className="w-4 h-4 text-[#8c7a6b]" />
            <span className="text-[12px] font-normal text-[#8c7a6b]">
              ({filteredProducts.length} pieces available)
            </span>
          </div>
          <p className="text-xs text-[#6a4632] mt-1">
            Hand-stitched in limited runs. Ready for same-day dispatch in Lagos/Ibadan & DHL worldwide.
          </p>
        </div>

        {/* Filter Chips: Pill controls with Earthy Border */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#231815] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#5c3d2e] border border-[#e2dad0] hover:bg-[#eee7db]'
            }`}
          >
            All Pieces
          </button>
          <button
            onClick={() => setActiveCategory('leather')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
              activeCategory === 'leather'
                ? 'bg-[#231815] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#5c3d2e] border border-[#e2dad0] hover:bg-[#eee7db]'
            }`}
          >
            Genuine Leather
          </button>
          <button
            onClick={() => setActiveCategory('crochet')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
              activeCategory === 'crochet'
                ? 'bg-[#231815] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#5c3d2e] border border-[#e2dad0] hover:bg-[#eee7db]'
            }`}
          >
            Crochet Knit
          </button>
          <button
            onClick={() => setActiveCategory('hybrid')}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
              activeCategory === 'hybrid'
                ? 'bg-[#231815] text-[#ffffff] shadow-sm'
                : 'bg-[#ffffff] text-[#5c3d2e] border border-[#e2dad0] hover:bg-[#eee7db]'
            }`}
          >
            Leather & Mix
          </button>
        </div>
      </div>

      {/* Product Cards Grid: Bone White Surface, Earthy Borders, Terracotta Sales Urgency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p, index) => {
          const isAdded = !!addedIds[p.id];
          const isHot = index === 0 || index === 2;

          return (
            <article
              key={p.id}
              className="earth-card p-3.5 flex flex-col justify-between group"
            >
              {/* Product Image */}
              <div
                onClick={() => onSelectProduct(p)}
                className="relative aspect-square w-full overflow-hidden rounded-[8px] bg-[#eee7db] cursor-pointer"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Status Badges with Red/Orange Urgency */}
                {isHot ? (
                  <span className="absolute top-3 left-3 bg-[#fbf0ed] border border-[#f2cfc7] text-[#c84224] rounded-full px-2.5 py-0.5 text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                    <Flame className="w-3 h-3 text-[#c84224]" />
                    <span>Selling Fast</span>
                  </span>
                ) : (
                  <span className="absolute top-3 left-3 bg-[#ffffff]/90 border border-[#e2dad0] backdrop-blur-sm rounded-full px-2.5 py-0.5 text-[11px] font-medium text-[#231815] shadow-sm">
                    {p.stockBadge}
                  </span>
                )}

                <span className="absolute top-3 right-3 bg-[#ffffff]/90 border border-[#e2dad0] backdrop-blur-sm rounded-full px-2.5 py-0.5 text-[11px] font-medium text-[#6a4632] shadow-sm">
                  {p.batch}
                </span>
              </div>

              {/* Card Metadata Below Image */}
              <div className="pt-3.5 px-1 space-y-2">
                
                <div className="flex items-start justify-between gap-2">
                  <h3
                    onClick={() => onSelectProduct(p)}
                    className="text-[14px] font-semibold text-[#231815] tracking-tight hover:text-[#c84224] transition cursor-pointer"
                  >
                    {p.title}
                  </h3>
                  <span className="text-[15px] font-bold text-[#231815] tabular-nums whitespace-nowrap">
                    {formatCurrency(p.priceNGN, currency)}
                  </span>
                </div>

                {/* Material Specification Row */}
                <div className="flex items-center justify-between text-[11px] text-[#6a4632]">
                  <span className="font-medium text-[#5c3d2e]">
                    {p.category === 'leather' ? '100% Real Cowhide' : p.category === 'crochet' ? 'Pure Cotton Cord' : 'Leather & Fiber'}
                  </span>
                  <span className="text-[#8c7a6b]">
                    Hand-stitched
                  </span>
                </div>

                <p className="text-[12px] text-[#6a4632] line-clamp-2 leading-relaxed">
                  {p.description}
                </p>

                {/* Action Buttons: Terracotta Red Urgency Button + Details Outline */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => handleAdd(p)}
                    disabled={isAdded}
                    className={`flex-1 py-2 px-4 rounded-full font-semibold text-[12px] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-[#298018] text-[#ffffff] shadow-sm'
                        : 'btn-urgency-red'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-white" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSelectProduct(p)}
                    className="p-2 rounded-full bg-[#ffffff] border border-[#e2dad0] text-[#231815] hover:border-[#c84224] hover:text-[#c84224] hover:bg-[#eee7db] transition cursor-pointer"
                    title="Examine specs and measurements"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
};
