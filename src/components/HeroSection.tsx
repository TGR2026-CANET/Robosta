import { Play, CheckCircle2, TrendingUp, Bell, Search } from 'lucide-react';
import { LOT_DATA } from '../data/lotDemoData';
import { IPhoneProMaxMockup } from './IPhoneProMaxMockup';

export function HeroSection({ onOpenVideo }: { onOpenVideo: () => void }) {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      {/* Gig&Co-style Pastel Rainbow Background Blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#E8FD56]/22 blur-3xl" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#9EE7FF]/25 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-[#FFD1E3]/22 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Centered 3-line Headline with Pastel Highlight Pills */}
        <h1 className="text-3xl leading-[1.35] font-bold tracking-tight text-[var(--ink)] sm:text-5xl sm:leading-[1.28]">
          ซื้อขายสารกาแฟ{' '}
          <span className="inline-block rounded-2xl bg-[#DDF5E4] px-3.5 py-0.5 text-[var(--forest-900)]">
            โรบัสตาชุมพร
          </span>
          <span className="mt-1 block">
            ในแบบที่{' '}
            <span className="inline-block rounded-2xl bg-[#D4EEFF] px-3.5 py-0.5 text-[#1B4965]">
              ตรวจสอบได้จริง
            </span>
          </span>
          <span className="mt-1 block">
            ผ่าน{' '}
            <span className="inline-block rounded-2xl bg-[#FDE7A2] px-3.5 py-0.5 text-[var(--ink)]">
              Robosta
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
          แพลตฟอร์ม AIoT ที่เชื่อมความชื้นจาก ESP32, เกรดเมล็ดจาก Pi 5 และ AI Agent ไว้ในพาสปอร์ตเดียว
        </p>

        {/* Centered iPhone 18 Pro Max Mockup */}
        <div className="mt-8">
          <IPhoneProMaxMockup time="9:41" screenBgClass="bg-[#F4F5F7]">
            {/* App Top Bar (White, Gig&Co phone style) */}
            <div className="bg-white px-3.5 pt-1 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--forest-900)] text-[var(--parchment)]">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <ellipse cx="12" cy="12" rx="7" ry="10" stroke="currentColor" strokeWidth="2.2" />
                      <path d="M12 2.5C9.8 7 14.2 17 12 21.5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                  <div className="text-left leading-tight">
                    <div className="text-[9px] text-[#6B7280]">สวัสดีตอนเช้า,</div>
                    <div className="text-[11px] font-bold text-[#111827]">Robosta แพลตฟอร์ม</div>
                  </div>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-[#374151]">
                  <Bell className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* Search-style Lot Lookup Bar */}
              <div className="mt-2.5 flex items-center gap-2 rounded-full border border-black/10 bg-[#F9FAFB] px-3 py-1.5 text-[10px] text-[#6B7280]">
                <Search className="h-3 w-3 shrink-0" />
                <span>ค้นหารหัสล็อต หรือแปลงปลูก...</span>
              </div>
            </div>

            {/* Scrollable-look Feed inside Phone */}
            <div className="flex-1 space-y-2.5 overflow-hidden px-3 pt-2.5 text-left">
              <div className="text-[11px] font-bold text-[#111827]">ล็อตที่พร้อมตรวจสอบ</div>

              {/* Highlighted Featured Card */}
              <div className="rounded-2xl bg-[var(--forest-900)] p-3.5 text-white shadow-sm">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[var(--on-forest)]">LOT PASSPORT</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--forest-700)] px-2 py-0.5 font-semibold text-[var(--mint)]">
                    <CheckCircle2 className="h-2.5 w-2.5" />
                    ขายแล้ว
                  </span>
                </div>
                <div className="rlp-num mt-1.5 text-lg font-bold">{LOT_DATA.lotId}</div>
                <div className="mt-0.5 text-[10px] text-[var(--on-forest)]">
                  {LOT_DATA.weightKg} กก. · {LOT_DATA.origin} · {LOT_DATA.process}
                </div>
                <div className="mt-2.5 flex items-center justify-between border-t border-white/15 pt-2 text-[11px]">
                  <span>ปิดดีล {LOT_DATA.recommendedPrice} ฿/กก.</span>
                  <span className="rlp-num font-bold text-[var(--gold)]">
                    {LOT_DATA.totalValue.toLocaleString()} ฿
                  </span>
                </div>
              </div>

              {/* White Telemetry Cards */}
              <div className="flex items-center justify-between rounded-2xl bg-white px-3.5 py-2.5 shadow-xs">
                <div>
                  <div className="text-[10px] text-[#6B7280]">ความชื้น · ESP32</div>
                  <div className="text-xs font-semibold text-[#111827]">แห้งได้ที่ (≤ 12.5%)</div>
                </div>
                <span className="rlp-num text-base font-bold text-[var(--forest-700)]">
                  {LOT_DATA.moistureCurrent}%
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white px-3.5 py-2.5 shadow-xs">
                <div>
                  <div className="text-[10px] text-[#6B7280]">เม็ดเสียหลังคัด · Pi 5</div>
                  <div className="text-xs font-semibold text-[#111827]">
                    {LOT_DATA.defectAfterPct.toFixed(1)}% · ตรวจ 35 เม็ด
                  </div>
                </div>
                <span className="rounded-lg bg-[var(--grade-a)] px-2.5 py-1 text-[11px] font-bold text-white">
                  เกรด A
                </span>
              </div>

              <div className="rounded-2xl bg-white p-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--forest-700)]">
                    <TrendingUp className="h-3 w-3" />
                    ผู้ส่งออก B · ระยอง
                  </span>
                  <span className="text-[10px] text-[#6B7280]">10:53 น.</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-[10px] text-[#6B7280]">
                  <span>สูงกว่าขั้นต่ำ +4 ฿/กก.</span>
                  <span className="font-semibold text-[#111827]">นัดรับ 2 พ.ย. 09:00</span>
                </div>
              </div>
            </div>
          </IPhoneProMaxMockup>
        </div>

        {/* Centered CTA Pill + Add LINE below Phone */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onOpenVideo}
            className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-full bg-[var(--forest-700)] px-7 py-3 text-sm font-semibold text-[var(--on-fill)] shadow-[var(--shadow-primary)] transition-all hover:bg-[var(--forest-900)]"
          >
            <Play className="h-4 w-4 fill-current" />
            <span>ดูวิดีโอสาธิต</span>
          </button>

          <a
            href="https://line.me/R/ti/p/@617gzopa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[var(--line-green)] px-6 py-2.5 text-sm font-semibold text-[var(--ink)] shadow-xs transition-transform hover:scale-[1.02]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 5.93 2 10.78c0 4.34 3.55 7.97 8.34 8.66.32.07.76.22.87.5.1.25.06.64.03.9l-.14.84c-.04.25-.2.99.87.54 1.07-.45 5.77-3.4 7.87-5.82C21.29 14.81 22 12.91 22 10.78 22 5.93 17.52 2 12 2Zm-3.65 11.4H6.11a.56.56 0 0 1-.56-.56V8.36a.56.56 0 1 1 1.12 0v3.92h1.68a.56.56 0 1 1 0 1.12Zm2.03-.56a.56.56 0 1 1-1.12 0V8.36a.56.56 0 1 1 1.12 0v4.48Zm4.7 0a.56.56 0 0 1-.39.53.54.54 0 0 1-.62-.19l-2.3-3.13v2.79a.56.56 0 1 1-1.12 0V8.36a.56.56 0 0 1 1.01-.33l2.3 3.13V8.36a.56.56 0 1 1 1.12 0v4.48Zm3.38-2.8a.56.56 0 1 1 0 1.12h-1.68v1.12h1.68a.56.56 0 1 1 0 1.12h-2.24a.56.56 0 0 1-.56-.56V8.36c0-.31.25-.56.56-.56h2.24a.56.56 0 1 1 0 1.12h-1.68v1.12h1.68Z" />
            </svg>
            <span>เพิ่มเพื่อน LINE (@617gzopa)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
