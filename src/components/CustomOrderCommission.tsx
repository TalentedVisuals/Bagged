import React, { useState, useRef } from 'react';
import {
  Camera,
  Mic,
  Square,
  Play,
  Pause,
  Trash2,
  UploadCloud,
  ArrowRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { BespokeCommission } from '../types';
import { generateOrderRef } from '../utils/whatsapp';

interface CustomOrderCommissionProps {
  adminWhatsApp: string;
  adminEmail: string;
  onSubmitCommission: (commission: BespokeCommission) => void;
}

export const CustomOrderCommission: React.FC<CustomOrderCommissionProps> = ({
  onSubmitCommission,
}) => {
  // Form fields
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerCity, setCustomerCity] = useState('Lagos');
  const [bagType, setBagType] = useState<'leather' | 'crochet' | 'hybrid' | 'custom_concept'>('hybrid');
  const [silhouettePreference, setSilhouettePreference] = useState('Bucket Bag');
  const [dimensionsPreference, setDimensionsPreference] = useState('Medium Size');
  const [colorPalette] = useState('Brown Leather & Natural Cream Cotton');
  const [strapPreference] = useState('Long Crossbody Strap & Handle');
  const [hardwareFinish, setHardwareFinish] = useState('Shiny Gold Brass');
  const [monogram] = useState('');
  const [budgetRange] = useState('₦90,000 - ₦130,000');
  const [targetTimeline] = useState('Standard (7 - 10 Days)');

  // Custom text description
  const [customDescription, setCustomDescription] = useState('');

  // Inspiration Photos State
  const [inspirationImages, setInspirationImages] = useState<
    Array<{ id: string; name: string; url: string }>
  >([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Voice Note Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recordDuration, setRecordDuration] = useState(0);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<number | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Quick helpful ideas
  const QUICK_TAGS = [
    'Thick knit crochet pattern',
    'Hard real leather bottom',
    'Gold metal lock or zipper',
    'Small pocket inside for phone & cards',
    'Long shoulder strap',
    'Leather drawstring with tassels',
    'Two-tone colors (e.g. brown & cream)',
    'Big enough for laptop or iPad',
  ];

  const handleAddTag = (tag: string) => {
    if (customDescription.includes(tag)) return;
    setCustomDescription((prev) =>
      prev ? `${prev.trim()}\n• ${tag}` : `• ${tag}`
    );
  };

  // Image Upload Handling
  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newImgs: Array<{ id: string; name: string; url: string }> = [];

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        newImgs.push({
          id: `${Date.now()}-${Math.random()}`,
          name: file.name,
          url,
        });
      }
    });

    setInspirationImages((prev) => [...prev, ...newImgs]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (id: string) => {
    setInspirationImages((prev) => prev.filter((img) => img.id !== id));
  };

  // Voice Recording
  const startRecording = async () => {
    setAudioError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(audioUrl);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start(200);
      setIsRecording(true);
      setRecordDuration(0);

      timerIntervalRef.current = window.setInterval(() => {
        setRecordDuration((prev) => prev + 1);
      }, 1000);
    } catch (err: unknown) {
      console.warn('Microphone error:', err);
      setAudioError(
        'Could not access microphone. You can type your request or upload sample pictures!'
      );
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }
  };

  const deleteRecording = () => {
    if (audioElementRef.current) {
      audioElementRef.current.pause();
    }
    setRecordedAudioUrl(null);
    setIsPlayingAudio(false);
    setRecordDuration(0);
  };

  const togglePlayAudio = () => {
    if (!audioElementRef.current) return;
    if (isPlayingAudio) {
      audioElementRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioElementRef.current.play();
      setIsPlayingAudio(true);
    }
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please enter your Name and WhatsApp phone number so we can reach you.');
      return;
    }

    if (!customDescription.trim() && inspirationImages.length === 0 && !recordedAudioUrl) {
      alert(
        'Please upload sample pictures, record a voice note, or describe your desired custom bag.'
      );
      return;
    }

    const commission: BespokeCommission = {
      trackingCode: generateOrderRef('BGD-CUSTOM'),
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: customerEmail.trim(),
      customerCity: customerCity.trim() || 'Nigeria',
      bagType,
      silhouettePreference,
      dimensionsPreference,
      colorPalette,
      strapPreference,
      hardwareFinish,
      interiorDetails: 'Soft cotton lining with inner pocket',
      monogram: monogram.trim().toUpperCase(),
      budgetRange,
      targetTimeline,
      customDescription: customDescription.trim(),
      inspirationImages,
      voiceNote: recordedAudioUrl
        ? { audioUrl: recordedAudioUrl, duration: recordDuration }
        : null,
      submittedAt: new Date().toLocaleString(),
    };

    onSubmitCommission(commission);
  };

  return (
    <section id="commission" className="w-full">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-[#231815]">
            Custom Bag Commission (Photo & Voice Note)
          </h2>
          <p className="text-xs text-[#6a4632] mt-1">
            Drop pictures saved from Instagram/Pinterest, or voice record your requirements.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eee7db] border border-[#e2dad0] text-[12px] font-semibold text-[#c84224]">
          <Flame className="w-3.5 h-3.5 text-[#c84224]" />
          <span>Direct WhatsApp Workshop Review</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Warm Earthy Card with Bone White Surface and Soft Border */}
        <form onSubmit={handleSubmit} className="earth-card p-6 sm:p-10 space-y-8">
          
          {/* Step 1: Photos & Voice Input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-[#e2dad0]">
            
            {/* Picture Upload Area */}
            <div className="space-y-3">
              <label className="text-[13px] font-semibold text-[#231815] flex items-center gap-1.5">
                <Camera className="w-4 h-4 text-[#c84224]" />
                <span>1. Inspiration Photos ({inspirationImages.length})</span>
              </label>

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-[10px] p-6 text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-[#c84224] bg-[#fbf0ed]'
                    : 'border-[#e2dad0] bg-[#eee7db]/50 hover:border-[#c84224]/70 hover:bg-[#ffffff]'
                }`}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={(e) => handleFiles(e.target.files)}
                  className="hidden"
                />
                <UploadCloud className="w-7 h-7 mx-auto mb-2 text-[#c84224]" />
                <span className="text-[13px] font-semibold block text-[#231815]">
                  Tap to upload photos
                </span>
                <span className="text-[11px] text-[#6a4632] block mt-0.5">
                  Screenshots from Instagram, Pinterest, or camera captures
                </span>
              </div>

              {/* Photo Thumbnails */}
              {inspirationImages.length > 0 && (
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {inspirationImages.map((img) => (
                    <div key={img.id} className="relative aspect-square rounded-[8px] overflow-hidden border border-[#e2dad0] group">
                      <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(img.id);
                        }}
                        className="absolute top-1 right-1 bg-[#231815]/90 text-white p-1 rounded-full text-[10px] hover:text-[#c84224] transition cursor-pointer"
                        title="Remove photo"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Voice Note Recording Area */}
            <div className="space-y-3">
              <label className="text-[13px] font-semibold text-[#231815] flex items-center gap-1.5">
                <Mic className="w-4 h-4 text-[#c84224]" />
                <span>2. Voice Note Specification</span>
              </label>

              <div className="border border-[#e2dad0] rounded-[10px] p-6 text-center bg-[#eee7db]/50 flex flex-col items-center justify-center min-h-[140px]">
                {audioError ? (
                  <p className="text-[12px] text-[#8c7a6b]">{audioError}</p>
                ) : !recordedAudioUrl ? (
                  <div className="space-y-3">
                    {isRecording ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#c84224] animate-ping" />
                          <span className="text-[14px] font-bold text-[#c84224] tabular-nums">
                            Recording: {formatSeconds(recordDuration)}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={stopRecording}
                          className="btn-urgency-red py-1.5 px-5 text-[12px]"
                        >
                          <Square className="w-3 h-3" />
                          <span>Stop Recording</span>
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={startRecording}
                          className="btn-sand-outline py-2 px-5 text-[13px]"
                        >
                          <Mic className="w-4 h-4 text-[#c84224]" />
                          <span>Record Voice Note</span>
                        </button>
                        <span className="text-[11px] text-[#6a4632] block mt-2">
                          Speak in English, Yoruba, or Pidgin — describe dimensions, leather color, and pockets
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between border border-[#e2dad0] rounded-full p-2 pl-4 bg-[#ffffff]">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={togglePlayAudio}
                          className="w-7 h-7 rounded-full bg-[#c84224] text-[#ffffff] flex items-center justify-center hover:bg-[#b0361c] transition cursor-pointer"
                        >
                          {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                        </button>
                        <span className="text-[12px] font-medium tabular-nums text-[#231815]">
                          Voice Note ({formatSeconds(recordDuration)})
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={deleteRecording}
                        className="text-[#8c7a6b] hover:text-[#231815] p-1.5 mr-1"
                        title="Delete voice note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <audio
                      ref={audioElementRef}
                      src={recordedAudioUrl}
                      onEnded={() => setIsPlayingAudio(false)}
                      className="hidden"
                    />
                    <span className="text-[11px] text-[#298018] font-semibold flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Voice note ready to send to master artisan</span>
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Step 2: Custom Text Note */}
          <div className="space-y-3 pb-8 border-b border-[#e2dad0]">
            <div className="flex items-center justify-between">
              <label className="text-[13px] font-semibold text-[#231815]">
                3. Written Description & Specific Notes
              </label>
              <span className="text-[12px] text-[#6a4632]">Click quick tags to add</span>
            </div>

            <textarea
              rows={4}
              value={customDescription}
              onChange={(e) => setCustomDescription(e.target.value)}
              placeholder="e.g. I want an Ajwa bucket silhouette, but in natural cream cotton cord with a dark chocolate cowhide bottom and solid brass lock. Sized to fit an iPad Air."
              className="w-full rounded-[10px] bg-[#ffffff] border border-[#e2dad0] p-4 text-[13px] text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224] focus:ring-1 focus:ring-[#c84224] resize-none leading-relaxed transition"
            />

            {/* Quick Idea Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK_TAGS.map((tag, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddTag(tag)}
                  className="px-3 py-1 rounded-full bg-[#eee7db] border border-[#e2dad0] hover:border-[#c84224] text-[#5c3d2e] hover:text-[#c84224] text-[11px] font-medium transition cursor-pointer"
                >
                  + {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Bag Preferences Selection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 border-b border-[#e2dad0] text-[13px]">
            
            <div>
              <label className="block text-[11px] font-semibold text-[#6a4632] mb-1.5">
                Material Focus:
              </label>
              <select
                value={bagType}
                onChange={(e) => setBagType(e.target.value as any)}
                className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3 py-2 text-xs text-[#231815] outline-none focus:border-[#c84224]"
              >
                <option value="leather">100% Genuine Bovine Cowhide</option>
                <option value="crochet">Hand-Crocheted Cotton Cord</option>
                <option value="hybrid">Leather & Woven Hybrid</option>
                <option value="custom_concept">Complete Custom Concept</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#6a4632] mb-1.5">
                Bag Silhouette:
              </label>
              <select
                value={silhouettePreference}
                onChange={(e) => setSilhouettePreference(e.target.value)}
                className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3 py-2 text-xs text-[#231815] outline-none focus:border-[#c84224]"
              >
                <option value="Bucket Bag">Structured Bucket Bag</option>
                <option value="Shoulder Bag">Underarm Shoulder Bag</option>
                <option value="Everyday Tote">Everyday Large Tote</option>
                <option value="Crossbody Bag">Curved Crossbody</option>
                <option value="Mini Handbag">Mini Evening Piece</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#6a4632] mb-1.5">
                Size Preference:
              </label>
              <select
                value={dimensionsPreference}
                onChange={(e) => setDimensionsPreference(e.target.value)}
                className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3 py-2 text-xs text-[#231815] outline-none focus:border-[#c84224]"
              >
                <option value="Compact (Phone & keys)">Compact (Phone & essentials)</option>
                <option value="Medium (Tablet & everyday)">Medium (Fits iPad & notebook)</option>
                <option value="Large (Laptop 13/14 inch)">Large (Fits 13/14" laptop)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#6a4632] mb-1.5">
                Hardware Metal:
              </label>
              <select
                value={hardwareFinish}
                onChange={(e) => setHardwareFinish(e.target.value)}
                className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3 py-2 text-xs text-[#231815] outline-none focus:border-[#c84224]"
              >
                <option value="Shiny Gold Brass">Polished Solid Brass</option>
                <option value="Vintage Bronze">Vintage Patinated Bronze</option>
                <option value="Smoky Gunmetal">Smoky Gunmetal</option>
              </select>
            </div>

          </div>

          {/* Step 4: Contact Details */}
          <div className="space-y-4 pb-4">
            <h3 className="text-[13px] font-semibold text-[#231815]">
              4. Contact Coordinates for Production Confirmation
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-[#6a4632] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aminat Adeleke"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#6a4632] mb-1">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +234 813 547 5432"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#6a4632] mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@gmail.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#6a4632] mb-1">
                  Delivery City / State
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lagos, Ibadan, Abuja, London"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#e2dad0] rounded-[8px] px-3.5 py-2.5 text-xs text-[#231815] placeholder:text-[#8c7a6b] outline-none focus:border-[#c84224]"
                />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#e2dad0]">
            <p className="text-[12px] text-[#6a4632]">
              After submitting, you will preview your order docket and connect directly to the artisan on WhatsApp.
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto btn-urgency-red py-3 px-8 text-[13px]"
            >
              <span>Submit Custom Request</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </form>
      </div>

    </section>
  );
};
