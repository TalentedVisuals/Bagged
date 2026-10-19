import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How fast is dispatch across Lagos, Ibadan, and all 36 states?',
    answer:
      'In-stock pieces are dispatched next-day in Lagos and Ibadan. Delivery to other states (Abuja, Port Harcourt, Enugu, Kano) takes 2 to 4 business days via GIG Logistics or DHL Express. International orders (UK, US, Canada, Europe) arrive within 3 to 5 business days via DHL Worldwide.',
  },
  {
    question: 'Will the leather peel during Harmattan or humid rainy months?',
    answer:
      'Never. We reject synthetic PU plastics and bonded leather scraps entirely. Every Bagged piece is cut from 100% full-grain Nigerian bovine hides tanned with vegetable tannins. Real leather does not peel or blister; it breathes and develops an authentic, lustrous patina as you carry it.',
  },
  {
    question: 'How do I care for and clean the hand-crochet portions?',
    answer:
      'Our knit components use heavy-gauge, colorfast combed cotton cord. If soiled, spot-clean using a damp cotton cloth with a drop of neutral baby shampoo. Do not submerge the leather base in water or machine wash. Air-dry away from direct harsh heating elements.',
  },
  {
    question: 'How does the custom commission workflow operate?',
    answer:
      'Use the Custom Order section above to drop your reference photos, record a voice memo, or describe your vision. When submitted, you receive a prefilled WhatsApp dossier that links directly with our head leather artisan in Ibadan to confirm hide availability, hardware casting, and delivery timeline (typically 7–10 days).',
  },
  {
    question: 'Can I view and feel the leathers in person prior to purchasing?',
    answer:
      'Yes. Clients are welcome at our working workshop in Jericho, Ibadan, or our private appointment room off Adeola Odeku, Victoria Island, Lagos. Send a quick WhatsApp message to arrange a private viewing.',
  },
  {
    question: 'Do you offer ongoing leather conditioning & maintenance?',
    answer:
      'Yes. Any Bagged original qualifies for complimentary lifetime cleaning and beeswax conditioning. Simply bring or courier your piece to our workshop at any time.',
  },
];

export const CareAndFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="care" className="w-full">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Category Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#231815]">
              Leather Care & Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#6a4632] mt-1">
              Details on genuine cowhide leather, worldwide DHL shipping, and custom bag orders.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eee7db] border border-[#e2dad0] text-[12px] font-semibold text-[#c84224]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c84224]" />
            <span>Guaranteed Zero Peel Leather</span>
          </div>
        </div>

        {/* Earthy Card with Bone White Surface */}
        <div className="earth-card p-6 sm:p-8 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-[10px] transition-all overflow-hidden border ${
                  isOpen ? 'bg-[#eee7db]/50 border-[#c84224]/30' : 'bg-[#ffffff] border-[#e2dad0] hover:bg-[#eee7db]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-[#231815] text-[14px] font-semibold cursor-pointer"
                >
                  <span className="leading-snug pr-4">{faq.question}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-[#c84224] text-[#ffffff]' : 'bg-[#eee7db] text-[#5c3d2e] border border-[#e2dad0]'
                  }`}>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[13px] text-[#5c3d2e] leading-relaxed border-t border-[#e2dad0]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
