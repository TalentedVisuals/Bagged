import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, MessageSquare, Mail, X, Camera, Mic } from 'lucide-react';
import { BespokeCommission } from '../types';
import {
  createBespokeWhatsAppMessage,
  getWhatsAppUrl,
  getMailtoUrl,
} from '../utils/whatsapp';

interface ConfirmationModalProps {
  commission: BespokeCommission | null;
  onClose: () => void;
  adminWhatsApp: string;
  adminEmail: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  commission,
  onClose,
  adminWhatsApp,
  adminEmail,
}) => {
  const [copied, setCopied] = useState(false);

  if (!commission) return null;

  const whatsappMessage = createBespokeWhatsAppMessage(commission);
  const whatsappUrl = getWhatsAppUrl(adminWhatsApp, whatsappMessage);

  const emailSubject = `[Custom Bag Request] ${commission.trackingCode} - ${commission.customerName}`;
  const mailtoUrl = getMailtoUrl({
    to: adminEmail,
    subject: emailSubject,
    body: whatsappMessage,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#231815]/50 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Earthy Warm Modal Dialog on Bone White */}
      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-[12px] border border-[#e2dad0] text-[#231815] overflow-y-auto max-h-[92vh] z-10 p-6 sm:p-8 shadow-[0_16px_48px_rgba(35,24,21,0.18)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#eee7db] hover:bg-[#e2dad0] flex items-center justify-center text-[#5c3d2e] hover:text-[#231815] transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Success Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#fbf0ed] border border-[#f2cfc7] flex items-center justify-center mx-auto text-[#c84224]">
            <CheckCircle2 className="w-6 h-6 text-[#c84224]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#231815]">
            Your Custom Bag Order is Ready
          </h3>

          <p className="text-[13px] text-[#6a4632] max-w-md mx-auto leading-relaxed">
            Your bag details and photos are ready. Chat directly with our bag maker on WhatsApp to pick your leather and confirm when it will be delivered.
          </p>

          {/* Reference badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eee7db] border border-[#e2dad0] text-[12px]">
            <span className="text-[#6a4632]">Order Code:</span>
            <span className="font-mono font-bold text-[#c84224]">{commission.trackingCode}</span>
          </div>
        </div>

        {/* Breakdown Box */}
        <div className="rounded-[10px] border border-[#e2dad0] p-5 space-y-3.5 text-[12px] bg-[#f7f4ed]">
          
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#e2dad0]">
            <div>
              <span className="text-[11px] font-semibold text-[#8c7a6b] block">Customer Name</span>
              <strong className="text-[13px] text-[#231815] font-semibold">{commission.customerName}</strong>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-[#8c7a6b] block">WhatsApp Contact</span>
              <strong className="text-[13px] text-[#231815] font-semibold">{commission.customerPhone}</strong>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#8c7a6b] block">Bag Style</span>
            <span className="text-[13px] text-[#231815] font-medium">
              {commission.bagType.toUpperCase()} · {commission.silhouettePreference} ({commission.dimensionsPreference})
            </span>
          </div>

          {/* Customization Details */}
          <div className="p-3.5 rounded-[8px] border border-[#e2dad0] bg-[#ffffff]">
            <span className="text-[11px] font-semibold text-[#8c7a6b] block mb-1">
              Your Bag Notes:
            </span>
            <p className="text-[12px] text-[#231815] leading-relaxed whitespace-pre-wrap">
              "{commission.customDescription || 'No extra notes provided.'}"
            </p>
          </div>

          {/* Attachments */}
          <div className="flex flex-wrap gap-2 text-[11px] pt-1">
            {commission.inspirationImages.length > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#e2dad0] flex items-center gap-1.5 text-[#231815]">
                <Camera className="w-3.5 h-3.5 text-[#c84224]" />
                <span>{commission.inspirationImages.length} Photos Included</span>
              </span>
            )}
            {commission.voiceNote && (
              <span className="px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#e2dad0] flex items-center gap-1.5 text-[#c84224]">
                <Mic className="w-3.5 h-3.5" />
                <span>Voice Memo Attached ({commission.voiceNote.duration}s)</span>
              </span>
            )}
            {commission.monogram && (
              <span className="px-2.5 py-1 rounded-full bg-[#ffffff] border border-[#e2dad0] text-[#c84224] font-bold">
                Gold Initials: [{commission.monogram}]
              </span>
            )}
          </div>

          <div className="pt-2 border-t border-[#e2dad0] flex justify-between text-[11px] text-[#6a4632]">
            <span>Target Timeline: {commission.targetTimeline}</span>
            <span>Est. Budget: {commission.budgetRange}</span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="pt-5 space-y-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-urgency-red py-3 text-[13px]"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Send Details on WhatsApp Now</span>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href={mailtoUrl}
              className="btn-sand-outline py-2.5 text-[12px]"
            >
              <Mail className="w-4 h-4 text-[#c84224]" />
              <span>Send via Email</span>
            </a>

            <button
              onClick={handleCopy}
              className="btn-sand-outline py-2.5 text-[12px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#298018]" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#6a4632]" />
                  <span>Copy Text Summary</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-[#6a4632] pt-1">
            Note: You can also drop reference screenshots directly into the WhatsApp conversation when it opens.
          </p>

        </div>

      </div>
    </div>
  );
};
