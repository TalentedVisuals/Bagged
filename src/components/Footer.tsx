import React, { useState } from 'react';
import {
  MessageSquare,
  Check,
  ArrowUpRight,
  Send,
  MapPin,
  Mail,
  ShieldCheck,
  Flame,
} from 'lucide-react';

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

            {/* Badges in Clean Dark Brown Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#33231e] border border-[#4a332b] text-[12px] font-medium text-[#f7f4ed]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c84224]" />
                <span>10-Year Guarantee: Never Peels</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#33231e] border border-[#4a332b] text-[12px] font-medium text-[#f7f4ed]">
                <Flame className="w-3.5 h-3.5 text-[#c84224]" />
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

          {/* Col 4: Direct Contacts */}
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

        </div>

        {/* Bottom Bar: Copyright & Specifications */}
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

          <div>
            <span>© {new Date().getFullYear()} BAGGED. Crafted in Ibadan & Lagos</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
