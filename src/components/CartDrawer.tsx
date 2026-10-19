import React, { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageSquare, Mail, ShieldCheck } from 'lucide-react';
import { CartItem, Currency, ShippingZone } from '../types';
import { SHIPPING_RATES } from '../data/products';
import { formatCurrency } from '../utils/currency';
import {
  generateOrderRef,
  createCartWhatsAppMessage,
  getWhatsAppUrl,
  getMailtoUrl,
} from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  adminWhatsApp: string;
  adminEmail: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  adminWhatsApp,
  adminEmail,
}) => {
  const [shippingZone, setShippingZone] = useState<ShippingZone>('lagos_island');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalNGN = items.reduce((sum, item) => sum + item.priceNGN * item.quantity, 0);
  const shippingCostNGN = SHIPPING_RATES[shippingZone]?.priceNGN || 3500;
  const grandTotalNGN = subtotalNGN + shippingCostNGN;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please enter your Name and WhatsApp phone number so we can reach you.');
      return;
    }

    const orderRef = generateOrderRef('BGD-ORD');
    const msg = createCartWhatsAppMessage({
      orderRef,
      items,
      shippingZone,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerAddress: customerAddress.trim(),
      customerNotes: customerNotes.trim(),
    });

    const url = getWhatsAppUrl(adminWhatsApp, msg);
    setOrderConfirmed(orderRef);
    window.open(url, '_blank');
  };

  const handleEmailCheckout = () => {
    if (items.length === 0) return;

    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please enter your Name and WhatsApp phone number.');
      return;
    }

    const orderRef = generateOrderRef('BGD-ORD');
    const msg = createCartWhatsAppMessage({
      orderRef,
      items,
      shippingZone,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerAddress: customerAddress.trim(),
      customerNotes: customerNotes.trim(),
    });

    const mailto = getMailtoUrl({
      to: adminEmail,
      subject: `[Bag Order] ${orderRef} - ${customerName}`,
      body: msg,
    });

    setOrderConfirmed(orderRef);
    window.location.href = mailto;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#231815]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full flex">
        {/* Warm Bone White Drawer with Soft Earthy Border */}
        <div className="w-full bg-[#fdfcf9] sm:rounded-l-[16px] border-l border-[#e2dad0] shadow-[0_8px_32px_rgba(35,24,21,0.2)] flex flex-col justify-between p-6 z-10 overflow-y-auto text-[#231815]">
          
          {/* Top Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#e2dad0]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#eee7db] border border-[#e2dad0] flex items-center justify-center text-[#c84224]">
                  <ShoppingBag className="w-4 h-4 text-[#c84224]" />
                </div>
                <h3 className="text-[17px] font-semibold tracking-tight text-[#231815]">
                  Your Bag
                </h3>
                <span className="text-[12px] text-[#6a4632] font-normal">
                  ({totalItems} items)
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#eee7db] hover:bg-[#e2dad0] flex items-center justify-center text-[#231815] transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-[#5c3d2e] hover:text-[#231815]" />
              </button>
            </div>

            {/* Confirmation Banner */}
            {orderConfirmed && (
              <div className="mt-4 p-4 rounded-[10px] border border-[#f2cfc7] bg-[#fbf0ed] text-[13px] space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="font-semibold text-[#c84224]">
                    Order {orderConfirmed} Prepared
                  </strong>
                  <button
                    onClick={() => {
                      setOrderConfirmed(null);
                      onClearCart();
                    }}
                    className="text-[11px] font-bold text-[#231815] underline cursor-pointer hover:text-[#c84224]"
                  >
                    Clear Bag
                  </button>
                </div>
                <p className="text-[12px] text-[#6a4632]">
                  Your order details were formatted and opened on WhatsApp with the workshop desk.
                </p>
              </div>
            )}

            {/* Cart Items List */}
            <div className="py-4 space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#eee7db] border border-[#e2dad0] flex items-center justify-center mx-auto text-[#8c7a6b]">
                    <ShoppingBag className="w-5 h-5 text-[#8c7a6b]" />
                  </div>
                  <p className="text-[14px] text-[#6a4632]">
                    Your shopping bag is empty.
                  </p>
                  <button
                    onClick={onClose}
                    className="btn-urgency-red text-[12px] py-2 px-5"
                  >
                    Explore Available Bags
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-[10px] border border-[#e2dad0] bg-[#ffffff] shadow-sm flex items-start gap-3.5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-20 object-cover rounded-[6px] border border-[#e2dad0] shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-[13px] font-semibold text-[#231815] truncate">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-[#8c7a6b] hover:text-[#c84224] p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-[11px] text-[#6a4632] block mt-0.5 line-clamp-2">
                        {item.spec}
                      </span>

                      <div className="flex items-center justify-between pt-2 mt-1">
                        <span className="text-[14px] font-bold text-[#231815] tabular-nums">
                          {formatCurrency(item.priceNGN, currency)}
                        </span>

                        <div className="flex items-center border border-[#e2dad0] rounded-full px-2 py-0.5 text-[12px] bg-[#eee7db]/60">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 text-[#5c3d2e] hover:text-[#231815] cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-semibold text-[#231815] px-2 text-[12px]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 text-[#5c3d2e] hover:text-[#231815] cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Checkout & Delivery Area */}
          {items.length > 0 && (
            <div className="pt-4 border-t border-[#e2dad0] space-y-4">
              
              {/* Delivery Area Selector */}
              <div>
                <label className="block text-[11px] font-semibold text-[#6a4632] mb-1">
                  Delivery Region:
                </label>
                <select
                  value={shippingZone}
                  onChange={(e) => setShippingZone(e.target.value as ShippingZone)}
                  className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3 py-2 text-xs text-[#231815] outline-none focus:border-[#c84224]"
                >
                  {Object.entries(SHIPPING_RATES).map(([key, val]) => (
                    <option key={key} value={key} className="bg-[#ffffff]">
                      {val.label} (+{formatCurrency(val.priceNGN, currency)})
                    </option>
                  ))}
                </select>
              </div>

              {/* Customer Info Form */}
              <div className="space-y-2 rounded-[10px] border border-[#e2dad0] p-3 bg-[#eee7db]/40 text-[12px]">
                <span className="text-[11px] font-semibold text-[#6a4632] block mb-1">
                  Recipient Coordinates:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[6px] px-2.5 py-1.5 text-xs text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp No *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[6px] px-2.5 py-1.5 text-xs text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Delivery Address (Street, City, Landmark)"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[6px] px-2.5 py-1.5 text-xs text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224]"
                />
                <input
                  type="text"
                  placeholder="Special instructions (optional)"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[6px] px-2.5 py-1.5 text-xs text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224]"
                />
              </div>

              {/* Price Calculation */}
              <div className="space-y-1 text-[13px] text-[#231815]">
                <div className="flex justify-between text-[#6a4632]">
                  <span>Subtotal:</span>
                  <span className="tabular-nums font-semibold text-[#231815]">
                    {formatCurrency(subtotalNGN, currency)}
                  </span>
                </div>
                <div className="flex justify-between text-[#6a4632]">
                  <span>Delivery ({SHIPPING_RATES[shippingZone]?.eta}):</span>
                  <span className="tabular-nums font-semibold text-[#231815]">
                    {formatCurrency(shippingCostNGN, currency)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-[#e2dad0]">
                  <span className="text-[14px] font-semibold text-[#231815]">
                    Total:
                  </span>
                  <span className="text-[18px] font-bold text-[#c84224] tabular-nums">
                    {formatCurrency(grandTotalNGN, currency)}
                  </span>
                </div>
              </div>

              {/* Checkout Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full btn-urgency-red py-2.5 text-[13px]"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailCheckout}
                  className="w-full btn-sand-outline py-2 text-[12px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c84224]" />
                  <span>Send via Email</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6a4632] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c84224]" />
                <span>Includes free protective canvas dustbag</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
