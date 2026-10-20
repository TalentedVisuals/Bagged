import React, { useState } from 'react';
import {
  MessageSquare,
  Check,
  ArrowUpRight,
  Send,
  MapPin,
  Mail,
  Instagram,
} from 'lucide-react';
import { Icon3DWarrantyMini, Icon3DArtisanMini } from './icons3d';

interface FooterProps {
  adminWhatsApp: string;
}

export const Footer: React.FC<FooterProps> = ({ adminWhatsApp }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const whatsappDeskUrl = `https://wa.me/${adminWhatsApp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(
    "Hello! I want to ask about your available bags and custom orders."
  )}`;

  return (
    <footer className="w-full bg-[#231815] text-[#f7f4ed] px-4 sm:px-6 lg:px-8 pt-16 pb-20 mt-16 border-t border-[#3b2823]">
      <div className="max-w-[1240px] mx-auto space-y-12">
        
        {/* Top Row: Wordmark, Story & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#3b2823]">
          
          {/* Brand & Workshop Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="brand-logo font-logo flex items-center gap-1">
              <span className="text-[24px] font-bold tracking-tight text-[#ffffff]">
                bagged
              </span>
              <span className="text-[#c84224] text-[28px] leading-none font-bold">.</span>
            </div>

            <p className="text-[14px] text-[#eee7db]/80 max-w-lg leading-relaxed">
              Handcrafted slow-fashion leather and crochet goods from Nigeria. Built with 100% full-grain Nigerian cowhide and combed cotton yarn that will never peel, crack, or crumble.
            </p>

            {/* Badges in Clean Dark Brown Pills with Animated 3D Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33231e] border border-[#4a332b] text-[12px] font-medium text-[#f7f4ed] shadow-xs">
                <Icon3DWarrantyMini size="sm" />
                <span>10-Year Guarantee: Never Peels</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33231e] border border-[#4a332b] text-[12px] font-medium text-[#f7f4ed] shadow-xs">
                <Icon3DArtisanMini size="sm" />
                <span>Direct Artisan WhatsApp Desk</span>
              </span>
            </div>
          </div>

          {/* Newsletter Box (Deep Leather 12px Card) */}
          <div className="lg:col-span-5 rounded-[12px] p-6 bg-[#33231e] border border-[#4a332b] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold text-[#ffffff]">
                New Bag Drop Alerts
              </span>
              <span className="text-[11px] font-bold text-[#c84224] uppercase bg-[#231815] border border-[#4a332b] px-2 py-0.5 rounded-full">
                Flash Access
              </span>
            </div>

            <p className="text-[12px] text-[#eee7db]/70">
              Receive private dispatch alerts whenever a new limited batch of leather or crochet pieces is ready.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="rounded-[8px] bg-[#231815] border border-[#4a332b] px-3.5 py-2 text-[13px] text-[#ffffff] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224] flex-1"
                />
                <button
                  type="submit"
                  className="btn-urgency-red py-2 px-5 text-[12px]"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-[12px] text-[#c84224] font-semibold pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>You are subscribed! We will notify you before the next batch drops.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Multi-Column Links & Direct Contacts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
          
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-semibold text-[#ffffff]">
              Ready Collections
            </h4>
            <ul className="space-y-2 text-[#eee7db]/80">
              <li>
                <a href="#objects" className="hover:text-[#ffffff] hover:underline transition">
                  In-Stock Ready Bags
                </a>
              </li>
              <li>
                <a href="#objects" className="hover:text-[#ffffff] hover:underline transition">
                  Full-Grain Bovine Cowhide
                </a>
              </li>
              <li>
                <a href="#objects" className="hover:text-[#ffffff] hover:underline transition">
                  Hand-Knitted Crochet
                </a>
              </li>
              <li>
                <a href="#objects" className="hover:text-[#ffffff] hover:underline transition">
                  Hybrid Mixed Editions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-semibold text-[#ffffff]">
              Design Your Bag
            </h4>
            <ul className="space-y-2 text-[#eee7db]/80">
              <li>
                <a href="#customizer" className="hover:text-[#ffffff] hover:underline transition">
                  Interactive Bag Designer
                </a>
              </li>
              <li>
                <a href="#commission" className="hover:text-[#ffffff] hover:underline transition flex items-center gap-1">
                  <span>Photo Inspiration Drop</span>
                  <ArrowUpRight className="w-3 h-3 text-[#c84224]" />
                </a>
              </li>
              <li>
                <a href="#commission" className="hover:text-[#ffffff] hover:underline transition">
                  Voice Note Commission
                </a>
              </li>
              <li>
                <a href="#customizer" className="hover:text-[#ffffff] hover:underline transition">
                  Personalized Foil Debossing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-semibold text-[#ffffff]">
              Workshop Locations
            </h4>
            <ul className="space-y-2 text-[#eee7db]/80">
              <li>
                <a href="#care" className="hover:text-[#ffffff] hover:underline transition">
                  Zero Peel Chemistry
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#ffffff] hover:underline transition">
                  Lifetime Beeswax Polishing
                </a>
              </li>
              <li className="pt-1 text-[#eee7db]/80 text-[12px] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c84224] shrink-0" />
                <span>Jericho, Ibadan Workshop</span>
              </li>
              <li className="text-[#eee7db]/80 text-[12px] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c84224] shrink-0" />
                <span>Adeola Odeku, Victoria Island, Lagos</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts & Social Media */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="text-[13px] font-semibold text-[#ffffff]">
                Direct Contact
              </h4>
              <div className="space-y-2.5">
                <a
                  href={whatsappDeskUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-[#33231e] border border-[#4a332b] hover:border-[#c84224] text-[#ffffff] py-2 px-4 text-[12px] font-semibold flex items-center justify-between transition"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#c84224]" />
                    <span>WhatsApp Our Workshop</span>
                  </span>
                  <span className="text-[11px] text-[#eee7db]/70">+{adminWhatsApp.replace(/[^\d]/g, '')}</span>
                </a>

                <a
                  href="mailto:rabiuolamilekan653@gmail.com?subject=Inquiry%20-%20BAGGED."
                  className="w-full rounded-full bg-[#33231e] border border-[#4a332b] hover:border-[#c84224] text-[#ffffff] py-2 px-4 text-[12px] font-semibold flex items-center justify-between transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c84224]" />
                    <span>Email Directorate</span>
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#eee7db]/70" />
                </a>
              </div>
            </div>

            {/* Social Media Pages */}
            <div className="space-y-3 pt-3 border-t border-[#3b2823]">
              <div className="flex items-center justify-between">
                <h4 className="text-[13px] font-semibold text-[#ffffff]">
                  Official Social Channels
                </h4>
                <span className="text-[11px] text-[#c84224] font-medium">@bagged.ng</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[12px]">
                {/* Instagram */}
                <a
                  href="https://instagram.com/bagged.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram: @bagged.ng"
                  className="rounded-[8px] bg-[#33231e] border border-[#4a332b] hover:border-[#c84224] hover:bg-[#3d2923] text-[#eee7db] hover:text-white px-2.5 py-1.5 flex items-center gap-2 transition group"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#c84224] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate font-medium">Instagram</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@bagged.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok: @bagged.ng"
                  className="rounded-[8px] bg-[#33231e] border border-[#4a332b] hover:border-[#c84224] hover:bg-[#3d2923] text-[#eee7db] hover:text-white px-2.5 py-1.5 flex items-center gap-2 transition group"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#c84224] shrink-0 group-hover:scale-110 transition-transform">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.6a6.34 6.34 0 0 0 10.82 4.48c1.77-1.78 2.37-4.32 2.22-6.72a8.27 8.27 0 0 0 3.45.74V10.6c-.01 0-.01 0 0 0a4.82 4.82 0 0 1 0-3.91z" />
                  </svg>
                  <span className="truncate font-medium">TikTok</span>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/bagged_ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X: @bagged_ng"
                  className="rounded-[8px] bg-[#33231e] border border-[#4a332b] hover:border-[#c84224] hover:bg-[#3d2923] text-[#eee7db] hover:text-white px-2.5 py-1.5 flex items-center gap-2 transition group"
                >
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#c84224] shrink-0 group-hover:scale-110 transition-transform">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="truncate font-medium">X / Twitter</span>
                </a>

                {/* Pinterest */}
                <a
                  href="https://pinterest.com/baggedcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest: @baggedcraft"
                  className="rounded-[8px] bg-[#33231e] border border-[#4a332b] hover:border-[#c84224] hover:bg-[#3d2923] text-[#eee7db] hover:text-white px-2.5 py-1.5 flex items-center gap-2 transition group"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#c84224] shrink-0 group-hover:scale-110 transition-transform">
                    <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.94-.12-2.39.02-3.42l1-4.25s-.25-.51-.25-1.27c0-1.19.69-2.08 1.55-2.08.73 0 1.08.55 1.08 1.21 0 .73-.47 1.83-.71 2.85-.2.85.43 1.55 1.26 1.55 1.52 0 2.69-1.6 2.69-3.9 0-2.04-1.47-3.47-3.56-3.47-2.43 0-3.85 1.82-3.85 3.7 0 .73.28 1.52.63 1.95.07.08.08.16.06.24l-.24 1c-.04.16-.13.22-.3.14-1.11-.52-1.8-2.14-1.8-3.45 0-2.8 2.04-5.38 5.88-5.38 3.09 0 5.48 2.2 5.48 5.14 0 3.07-1.94 5.54-4.63 5.54-.9 0-1.75-.47-2.05-1.03l-.56 2.12c-.2 1.08-.75 2.43-1.12 3.28A12 12 0 1 0 12 0z" />
                  </svg>
                  <span className="truncate font-medium">Pinterest</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/baggednigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook: @baggednigeria"
                  className="rounded-[8px] bg-[#33231e] border border-[#4a332b] hover:border-[#c84224] hover:bg-[#3d2923] text-[#eee7db] hover:text-white px-2.5 py-1.5 flex items-center gap-2 transition group"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#c84224] shrink-0 group-hover:scale-110 transition-transform">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="truncate font-medium">Facebook</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@baggedng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube: @baggedng"
                  className="rounded-[8px] bg-[#33231e] border border-[#4a332b] hover:border-[#c84224] hover:bg-[#3d2923] text-[#eee7db] hover:text-white px-2.5 py-1.5 flex items-center gap-2 transition group"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#c84224] shrink-0 group-hover:scale-110 transition-transform">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="truncate font-medium">YouTube</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Specifications & Direct Social Handles */}
        <div className="pt-8 border-t border-[#3b2823] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#eee7db]/70">
          <div className="flex flex-wrap items-center gap-2">
            <span>100% Genuine Nigerian Cowhide</span>
            <span>·</span>
            <span>Solid Brass Casting</span>
            <span>·</span>
            <span>Zero Plastic Leather</span>
            <span>·</span>
            <span>DHL Worldwide Express</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[12px]">
            <a href="https://instagram.com/bagged.ng" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram: @bagged.ng</a>
            <span>·</span>
            <a href="https://tiktok.com/@bagged.ng" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">TikTok</a>
            <span>·</span>
            <a href="https://x.com/bagged_ng" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">X (Twitter)</a>
            <span>·</span>
            <a href="https://pinterest.com/baggedcraft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Pinterest</a>
            <span>·</span>
            <a href="https://facebook.com/baggednigeria" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
            <span>·</span>
            <span>© {new Date().getFullYear()} BAGGED.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
