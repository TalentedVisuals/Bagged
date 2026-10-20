import { BespokeCommission, CartItem, ShippingZone } from '../types';
import { SHIPPING_RATES } from '../data/products';

export const DEFAULT_ADMIN_WHATSAPP = '2348135475432';
export const DEFAULT_ADMIN_EMAIL = 'rabiuolamilekan653@gmail.com';

export function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

export function generateOrderRef(prefix = 'BGD-ORD'): string {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${random}`;
}

export function createCartWhatsAppMessage({
  orderRef,
  items,
  shippingZone,
  customerName,
  customerPhone,
  customerAddress,
  customerNotes,
}: {
  orderRef: string;
  items: CartItem[];
  shippingZone: ShippingZone;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerNotes?: string;
}): string {
  const zoneConfig = SHIPPING_RATES[shippingZone] || SHIPPING_RATES.lagos_island;
  const subtotal = items.reduce((sum, item) => sum + item.priceNGN * item.quantity, 0);
  const total = subtotal + zoneConfig.priceNGN;

  const itemsList = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.quantity}x ${item.title}*\n   • Detail: ${item.spec}\n   • Amount: ₦${(
          item.priceNGN * item.quantity
        ).toLocaleString()}`
    )
    .join('\n\n');

  return `■ *BAGGED. — NEW BAG ORDER* ■
Order Code: *${orderRef}*

*BUYER DETAILS:*
• Name: ${customerName || 'Customer'}
• WhatsApp: ${customerPhone || 'Not provided'}
• Delivery Address: ${customerAddress || 'To be confirmed'}
• Delivery Area: ${zoneConfig.label} (${zoneConfig.eta})

*BAGS ORDERED:*
${itemsList}

*PAYMENT SUMMARY:*
• Bags Subtotal: ₦${subtotal.toLocaleString()}
• Delivery Fee: ₦${zoneConfig.priceNGN.toLocaleString()}
• *Total To Pay:* ₦${total.toLocaleString()}
${customerNotes ? `\n*NOTE FROM BUYER:*\n"${customerNotes}"\n` : ''}
Hello! Please confirm you received my order and send your account number or payment link.`;
}

export function createBespokeWhatsAppMessage(req: BespokeCommission): string {
  const photoNote = req.inspirationImages.length > 0
    ? `📷 *Sample Pictures:* ${req.inspirationImages.length} photo(s) (I will drop them right here in this chat)`
    : `📷 *Sample Pictures:* None attached`;

  const voiceNote = req.voiceNote
    ? `🎙️ *Voice Note:* Yes, I recorded a voice note (${req.voiceNote.duration}s) on the website`
    : `🎙️ *Voice Note:* None`;

  return `■ *BAGGED. — CUSTOM BAG REQUEST* ■
Order Code: *${req.trackingCode}*

*MY CONTACT DETAILS:*
• Name: ${req.customerName}
• WhatsApp: ${req.customerPhone}
• Email: ${req.customerEmail || 'Not provided'}
• Delivery Area: ${req.customerCity}

*BAG CHOICES:*
• Bag Type: ${req.bagType.toUpperCase()}
• Shape: ${req.silhouettePreference}
• Size: ${req.dimensionsPreference}
• Preferred Colors: ${req.colorPalette}
• Strap / Handle: ${req.strapPreference}
• Metal Fittings: ${req.hardwareFinish}
• Gold Name Initials: ${req.monogram ? `[${req.monogram.toUpperCase()}] in gold` : 'None'}
• How Soon: ${req.targetTimeline}
• Budget: ${req.budgetRange}

*WHAT I WANT (CUSTOM REQUEST):*
"${req.customDescription || 'See my photos and choices above.'}"

${photoNote}
${voiceNote}

Hello! Please check my custom bag request and let me know if you can make it and the total price.`;
}

export function getWhatsAppUrl(phone: string, text: string): string {
  const cleaned = sanitizePhone(phone);
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`;
}

export function getMailtoUrl({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
