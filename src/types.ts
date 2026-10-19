export type ProductCategory = 'all' | 'leather' | 'crochet' | 'hybrid';

export interface Product {
  id: number;
  title: string;
  category: 'leather' | 'crochet' | 'hybrid';
  priceNGN: number;
  batch: string;
  stockBadge: string;
  image: string;
  fallbackGradient: string;
  description: string;
  dimensions: string;
  materials: string;
  fits: string[];
}

export interface CartItem {
  id: string;
  productId?: number;
  title: string;
  priceNGN: number;
  image: string;
  spec: string;
  quantity: number;
  isCustom: boolean;
  customDetails?: {
    silhouette?: string;
    material?: string;
    hardware?: string;
    monogram?: string;
    hasVoiceNote?: boolean;
    inspirationImagesCount?: number;
    customNote?: string;
  };
}

export type Currency = 'NGN' | 'USD' | 'GBP';

export type ShippingZone = 'lagos_island' | 'lagos_mainland' | 'ibadan' | 'nationwide' | 'diaspora';

export interface BespokeCommission {
  trackingCode: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerCity: string;
  bagType: 'leather' | 'crochet' | 'hybrid' | 'custom_concept';
  silhouettePreference: string;
  dimensionsPreference: string;
  colorPalette: string;
  strapPreference: string;
  hardwareFinish: string;
  interiorDetails: string;
  monogram: string;
  budgetRange: string;
  targetTimeline: string;
  customDescription: string; // The dedicated input field for specific customization requests
  inspirationImages: Array<{ id: string; name: string; url: string }>;
  voiceNote: { audioUrl: string; duration: number } | null;
  submittedAt: string;
}

export interface AtelierSettings {
  adminWhatsApp: string;
  adminEmail: string;
}
