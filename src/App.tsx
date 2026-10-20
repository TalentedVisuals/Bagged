import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { QuickViewModal } from './components/QuickViewModal';
import { BespokeStudio } from './components/BespokeStudio';
import { CustomOrderCommission } from './components/CustomOrderCommission';
import { ConfirmationModal } from './components/ConfirmationModal';
import { CartDrawer } from './components/CartDrawer';
import { CareAndFaq } from './components/CareAndFaq';
import { Footer } from './components/Footer';
import { ScrollNavigationButton } from './components/ScrollNavigationButton';
import { CATALOG_PRODUCTS } from './data/products';
import { Product, CartItem, Currency, BespokeCommission } from './types';
import { DEFAULT_ADMIN_WHATSAPP, DEFAULT_ADMIN_EMAIL } from './utils/whatsapp';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  // Admin contact endpoints
  const adminWhatsApp = DEFAULT_ADMIN_WHATSAPP;
  const adminEmail = DEFAULT_ADMIN_EMAIL;

  // Currency state
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('bagged_currency');
    return (saved as Currency) || 'NGN';
  });

  // Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bagged_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [submittedCommission, setSubmittedCommission] = useState<BespokeCommission | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('bagged_currency', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('bagged_cart', JSON.stringify(cart));
  }, [cart]);

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.id && !item.isCustom);
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `item-${product.id}-${Date.now()}`,
          productId: product.id,
          title: product.title,
          priceNGN: product.priceNGN,
          image: product.image,
          spec: 'Standard Batch Piece',
          quantity: 1,
          isCustom: false,
        },
      ];
    });
  };

  const handleAddCustomToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCommissionSubmit = (commission: BespokeCommission) => {
    setSubmittedCommission(commission);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#231815] flex flex-col font-sans selection:bg-[#c84224] selection:text-[#ffffff]">
      
      {/* Sticky Header & Urgent Announcement Bar */}
      <Header
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        adminWhatsApp={adminWhatsApp}
      />

      {/* Main Experience: Warm Beige, Cream and Earthy Brown surfaces */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-18 sm:space-y-24">
        
        {/* Hero Section */}
        <Hero
          featuredProduct={CATALOG_PRODUCTS[0]}
          onQuickAdd={handleAddToCart}
          onOpenQuickView={setQuickViewProduct}
        />

        {/* Ready to Buy Catalog with Category Filtering & Sales / Urgency Badges */}
        <ProductCatalog
          products={CATALOG_PRODUCTS}
          currency={currency}
          onSelectProduct={setQuickViewProduct}
          onAddToCart={handleAddToCart}
        />

        {/* Interactive Custom Bag Builder */}
        <BespokeStudio
          currency={currency}
          onAddCustomToCart={handleAddCustomToCart}
          adminWhatsApp={adminWhatsApp}
        />

        {/* Custom Order Request (Photos, Voice Note, Specific Request Text) */}
        <CustomOrderCommission
          adminWhatsApp={adminWhatsApp}
          adminEmail={adminEmail}
          onSubmitCommission={handleCommissionSubmit}
        />

        {/* Leather Care & FAQs */}
        <CareAndFaq />

      </main>

      {/* Deep Earthy Espresso & Saddle Brown Footer */}
      <Footer
        adminWhatsApp={adminWhatsApp}
      />

      {/* Slide-out Cart Drawer with WhatsApp and Email Direct Checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        adminWhatsApp={adminWhatsApp}
        adminEmail={adminEmail}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        currency={currency}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        adminWhatsApp={adminWhatsApp}
      />

      {/* Confirmation Modal for Custom Requests */}
      <ConfirmationModal
        commission={submittedCommission}
        onClose={() => setSubmittedCommission(null)}
        adminWhatsApp={adminWhatsApp}
        adminEmail={adminEmail}
      />

      {/* Mobile Floating Cart Button when items exist */}
      {totalCartCount > 0 && (
        <div className="lg:hidden fixed bottom-5 left-4 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label={`Open shopping bag with ${totalCartCount} items`}
            className="py-3 px-4.5 rounded-full bg-[#c84224] text-[#ffffff] shadow-[0_6px_24px_rgba(200,66,36,0.45)] text-[13px] font-semibold flex items-center gap-2 hover:bg-[#b0361c] active:scale-95 transition-all cursor-pointer border border-[#e5775f]/30"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span>Bag ({totalCartCount})</span>
          </button>
        </div>
      )}

      {/* Floating Scroll-to-Top / Scroll-to-Bottom Button (Visible on all views) */}
      <ScrollNavigationButton />

    </div>
  );
}
