import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

export const ScrollNavigationButton: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [activeAction, setActiveAction] = useState<'top' | 'bottom' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight <= 0) {
        setScrollProgress(0);
        setAtTop(true);
        setAtBottom(true);
        return;
      }

      const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
      setScrollProgress(progress);
      setAtTop(scrollY < 120);
      setAtBottom(scrollY >= totalHeight - 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setActiveAction('top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => setActiveAction(null), 800);
  };

  const scrollToBottom = () => {
    setActiveAction('bottom');
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    setTimeout(() => setActiveAction(null), 800);
  };

  return (
    <div 
      aria-label="Page navigation"
      className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-40 flex flex-col items-center select-none"
    >
      {/* 3D Luxury Artisan Capsule Navigation */}
      <div 
        className="relative group p-1 rounded-full bg-[#1e1411]/95 backdrop-blur-md border border-[#422c24] shadow-[0_12px_36px_rgba(20,12,10,0.5),0_0_0_1px_rgba(212,175,55,0.18)] transition-all duration-300 hover:shadow-[0_16px_44px_rgba(200,66,36,0.35),0_0_0_1.5px_rgba(212,175,55,0.4)] hover:border-[#6a4632]"
        style={{
          boxShadow: '0 12px 32px -4px rgba(26, 15, 12, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.12), inset 0 -1px 2px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Subtle dynamic progress glow border */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 pointer-events-none transition-opacity duration-300 group-hover:opacity-60"
          style={{
            background: `conic-gradient(from 180deg, #c84224 ${scrollProgress}%, transparent ${scrollProgress}%)`,
            filter: 'blur(3px)',
          }}
        />

        <div className="relative flex flex-col items-center gap-1">
          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            title="Scroll to top of page"
            aria-label="Scroll to top"
            className={`relative group/btn w-11 h-11 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden ${
              atTop
                ? 'text-[#8c7468] hover:text-[#d4af37]'
                : 'text-[#f5ece1] hover:text-[#ffffff] bg-[#2a1a15]/60 hover:bg-[#c84224]'
            } ${activeAction === 'top' ? 'scale-90 bg-[#c84224] text-white' : 'hover:scale-105 active:scale-95'}`}
          >
            {/* Hover sheen effect */}
            <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none" />

            <ArrowUp 
              className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-all duration-300 ${
                activeAction === 'top'
                  ? '-translate-y-1 scale-110'
                  : 'group-hover/btn:-translate-y-1'
              } ${!atTop ? 'animate-pulse' : ''}`}
            />
            <span className="text-[9px] font-bold tracking-wider uppercase scale-90 -mt-0.5 opacity-70 group-hover/btn:opacity-100">
              Top
            </span>

            {/* Micro tooltip label for desktop */}
            <span className="pointer-events-none absolute right-full mr-3.5 px-2.5 py-1 rounded-md bg-[#1a120f] text-[#f7f4ed] text-[11px] font-semibold whitespace-nowrap shadow-lg border border-[#422c24] opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200 hidden sm:block">
              Scroll to top
            </span>
          </button>

          {/* Central Scroll Progress Indicator / Brass Compass Stitch */}
          <div className="relative flex items-center justify-center py-0.5 w-full">
            <div className="w-6 h-[1.5px] bg-[#3a251e] rounded-full overflow-hidden flex items-center">
              <div 
                className="h-full bg-gradient-to-r from-[#d4af37] to-[#c84224] transition-all duration-150 rounded-full"
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
              />
            </div>
            
            {/* Scroll percentage mini badge */}
            <span 
              className="absolute text-[8px] font-mono font-bold text-[#b89f82] tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity tabular-nums pointer-events-none"
              style={{ transform: 'translateY(-10px)' }}
            >
              {Math.round(scrollProgress)}%
            </span>
          </div>

          {/* Scroll To Bottom Button */}
          <button
            onClick={scrollToBottom}
            title="Scroll to bottom of page"
            aria-label="Scroll to bottom"
            className={`relative group/btn w-11 h-11 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden ${
              atBottom
                ? 'text-[#8c7468] hover:text-[#d4af37]'
                : 'text-[#f5ece1] hover:text-[#ffffff] bg-[#2a1a15]/60 hover:bg-[#c84224]'
            } ${activeAction === 'bottom' ? 'scale-90 bg-[#c84224] text-white' : 'hover:scale-105 active:scale-95'}`}
          >
            {/* Hover sheen effect */}
            <span className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none" />

            <span className="text-[9px] font-bold tracking-wider uppercase scale-90 -mb-0.5 opacity-70 group-hover/btn:opacity-100">
              End
            </span>
            <ArrowDown 
              className={`w-4 h-4 sm:w-4.5 sm:h-4.5 transition-all duration-300 ${
                activeAction === 'bottom'
                  ? 'translate-y-1 scale-110'
                  : 'group-hover/btn:translate-y-1'
              } ${atTop ? 'animate-bounce' : ''}`}
            />

            {/* Micro tooltip label for desktop */}
            <span className="pointer-events-none absolute right-full mr-3.5 px-2.5 py-1 rounded-md bg-[#1a120f] text-[#f7f4ed] text-[11px] font-semibold whitespace-nowrap shadow-lg border border-[#422c24] opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200 hidden sm:block">
              Scroll to bottom
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
