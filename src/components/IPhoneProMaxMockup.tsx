import type { ReactNode } from 'react';

interface IPhoneProMaxMockupProps {
  time?: string;
  screenBgClass?: string;
  showRainbowAura?: boolean;
  children: ReactNode;
}

export function IPhoneProMaxMockup({
  time = '9:41',
  screenBgClass = 'bg-[#F4F5F7]',
  showRainbowAura = true,
  children,
}: IPhoneProMaxMockupProps) {
  return (
    <div className="relative mx-auto flex justify-center py-2">
      {/* Pastel Rainbow Aura (Gig&Co style) */}
      {showRainbowAura && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
          <div className="absolute -left-8 top-12 h-64 w-64 rounded-full bg-[#E8FD56]/35 blur-3xl" />
          <div className="absolute -right-8 top-16 h-64 w-64 rounded-full bg-[#9EE7FF]/35 blur-3xl" />
          <div className="absolute bottom-8 left-1/2 h-60 w-72 -translate-x-1/2 rounded-full bg-[#FFD1E3]/30 blur-3xl" />
        </div>
      )}

      {/* iPhone Pro Max Hardware Shell (True 9:19.5 Pro Max proportions) */}
      <div className="relative z-10 h-[606px] w-[280px] select-none sm:h-[628px] sm:w-[290px]">
        {/* Left Side Buttons (Action + Vol Up + Vol Down) */}
        <div className="absolute -left-[3px] top-[104px] h-6 w-[3px] rounded-l-sm bg-[#2c2c2e]" />
        <div className="absolute -left-[3px] top-[142px] h-11 w-[3px] rounded-l-sm bg-[#2c2c2e]" />
        <div className="absolute -left-[3px] top-[196px] h-11 w-[3px] rounded-l-sm bg-[#2c2c2e]" />
        {/* Right Side Power Button */}
        <div className="absolute -right-[3px] top-[160px] h-16 w-[3px] rounded-r-sm bg-[#2c2c2e]" />

        {/* Outer Titanium Rim + Inner Black Bezel */}
        <div className="h-full w-full rounded-[48px] bg-gradient-to-b from-[#4a4a4e] via-[#2c2c2e] to-[#3a3a3d] p-[2.5px] shadow-[0_28px_70px_rgba(20,20,25,0.22)]">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[45.5px] bg-[#0e0b09] p-[7px]">
            {/* Inner Glass Screen */}
            <div className={`flex h-full w-full flex-col overflow-hidden rounded-[39px] ${screenBgClass}`}>
              {/* iOS Status Bar + Dynamic Island */}
              <div className="flex shrink-0 items-center justify-between px-5 pt-3 pb-2 text-[11px] font-semibold text-[#111827]">
                <span className="rlp-num w-10 text-left">{time}</span>
                <div className="h-[22px] w-[86px] rounded-full bg-black shadow-inner" />
                {/* Signal + Wi-Fi + Battery */}
                <div className="flex w-10 items-center justify-end gap-1">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="currentColor" aria-hidden="true">
                    <rect x="0" y="6.5" width="2.2" height="3.5" rx="0.6" />
                    <rect x="3.5" y="4.5" width="2.2" height="5.5" rx="0.6" />
                    <rect x="7" y="2.2" width="2.2" height="7.8" rx="0.6" />
                    <rect x="10.5" y="0" width="2.2" height="10" rx="0.6" />
                  </svg>
                  <svg width="12" height="10" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
                    <path d="M8 9.6a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Zm-3.6-2.2a5.2 5.2 0 0 1 7.2 0 .9.9 0 0 1-1.3 1.2 3.4 3.4 0 0 0-4.6 0 .9.9 0 0 1-1.3-1.2Zm-3-2.9a9.4 9.4 0 0 1 13.2 0 .9.9 0 0 1-1.3 1.3 7.6 7.6 0 0 0-10.6 0 .9.9 0 0 1-1.3-1.3Z" />
                  </svg>
                  <div className="flex items-center">
                    <div className="h-[9px] w-[16px] rounded-[2.5px] border border-[#111827]/70 p-[1px]">
                      <div className="h-full w-full rounded-[1px] bg-[#111827]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Screen Content */}
              <div className="flex flex-1 flex-col overflow-hidden">{children}</div>

              {/* iOS Home Indicator */}
              <div className="flex shrink-0 justify-center pt-1.5 pb-2">
                <div className="h-[4px] w-24 rounded-full bg-black/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
