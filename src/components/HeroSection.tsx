import { Play, CheckCircle2, TrendingUp } from 'lucide-react';
import { LOT_DATA } from '../data/lotDemoData';

export function HeroSection({ onOpenVideo }: { onOpenVideo: () => void }) {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle Gig&Co-style ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(242,193,78,0.18)_0%,rgba(217,232,220,0.22)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Centered 3-line Headline with Highlight Pills */}
        <h1 className="text-3xl leading-[1.35] font-bold tracking-tight text-[var(--ink)] sm:text-5xl sm:leading-[1.28]">
          ซื้อขายสารกาแฟ{' '}
          <span className="inline-block rounded-2xl bg-[var(--forest-100)] px-3.5 py-0.5 text-[var(--forest-900)]">
            โรบัสตาชุมพร
          </span>
          <span className="mt-1 block">
            ในแบบที่{' '}
            <span className="inline-block rounded-2xl bg-[var(--sky-100)] px-3.5 py-0.5 text-[var(--sky-700)]">
              ตรวจสอบได้จริง
            </span>
          </span>
          <span className="mt-1 block">
            ผ่าน{' '}
            <span className="inline-block rounded-2xl bg-[var(--gold)]/55 px-3.5 py-0.5 text-[var(--ink)]">
              Robosta
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
          แพลตฟอร์ม AIoT ที่เชื่อมความชื้นจาก ESP32, เกรดเมล็ดจาก Pi 5 และ AI Agent ไว้ในพาสปอร์ตเดียว
        </p>

        {/* Centered True-Proportion iPhone Mockup (9:19.5 aspect) */}
        <div className="mt-9 flex justify-center">
          <div className="flex h-[540px] w-[264px] flex-col rounded-[44px] border-[6px] border-[var(--phone-bezel)] bg-[var(--cream)] p-2.5 shadow-[0_24px_60px_rgba(38,34,28,0.16)] sm:h-[565px] sm:w-[276px]">
            {/* Status bar + Dynamic Island */}
            <div className="flex shrink-0 items-center justify-between px-3 pt-1 pb-2 text-[10px] font-semibold text-[var(--ink)]">
              <span className="rlp-num">09:41</span>
              <div className="h-4 w-20 rounded-full bg-[var(--phone-bezel)]" />
              <span className="text-[9px] text-[var(--ink-muted)]">5G</span>
            </div>

            {/* Inner Phone Screen */}
            <div className="flex flex-1 flex-col justify-between overflow-hidden rounded-[30px] bg-[var(--cream)] px-1.5 pb-1.5 text-left">
              <div className="space-y-2.5">
                {/* Header Card */}
                <div className="rounded-2xl bg-[var(--forest-900)] p-3.5 text-[var(--on-fill)]">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-[var(--on-forest)]">LOT PASSPORT</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--forest-700)] px-2 py-0.5 font-semibold text-[var(--mint)]">
                      <CheckCircle2 className="h-2.5 w-2.5" />
                      ขายแล้ว
                    </span>
                  </div>
                  <div className="rlp-num mt-1.5 text-xl font-bold">{LOT_DATA.lotId}</div>
                  <div className="mt-0.5 text-[11px] text-[var(--on-forest)]">
                    {LOT_DATA.weightKg} กก. · {LOT_DATA.origin} · {LOT_DATA.process}
                  </div>
                </div>

                {/* Moisture Card */}
                <div className="flex items-center justify-between rounded-2xl bg-white px-3.5 py-2.5 shadow-xs">
                  <div>
                    <div className="text-[10px] text-[var(--ink-muted)]">ความชื้น · ESP32</div>
                    <div className="text-xs font-semibold text-[var(--ink)]">แห้งได้ที่ (≤ 12.5%)</div>
                  </div>
                  <span className="rlp-num text-base font-bold text-[var(--forest-700)]">
                    {LOT_DATA.moistureCurrent}%
                  </span>
                </div>

                {/* Vision Card */}
                <div className="flex items-center justify-between rounded-2xl bg-white px-3.5 py-2.5 shadow-xs">
                  <div>
                    <div className="text-[10px] text-[var(--ink-muted)]">เม็ดเสียหลังคัด · Pi 5</div>
                    <div className="text-xs font-semibold text-[var(--ink)]">
                      {LOT_DATA.defectAfterPct.toFixed(1)}% · ตรวจ 35 เม็ด
                    </div>
                  </div>
                  <span className="rounded-lg bg-[var(--grade-a)] px-2.5 py-1 text-xs font-bold text-[var(--on-fill)]">
                    เกรด A
                  </span>
                </div>

                {/* AI Agent Deal Card */}
                <div className="rounded-2xl bg-white p-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--forest-700)]">
                      <TrendingUp className="h-3 w-3" />
                      ปิดดีล · AI Agent
                    </span>
                    <span className="text-[10px] text-[var(--ink-muted)]">10:53 น.</span>
                  </div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-[var(--ink)]">ผู้ส่งออก B · ระยอง</span>
                    <span className="rlp-num text-sm font-bold text-[var(--forest-700)]">
                      {LOT_DATA.recommendedPrice} ฿/กก.
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center justify-between text-[10px] text-[var(--ink-muted)]">
                    <span>สูงกว่าขั้นต่ำ +4 ฿/กก.</span>
                    <span className="rlp-num font-semibold text-[var(--ink)]">
                      รวม {LOT_DATA.totalValue.toLocaleString()} ฿
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA inside Phone + Home Indicator */}
              <div className="space-y-2 pt-2">
                <div className="rounded-xl bg-[var(--forest-700)] py-2 text-center text-[11px] font-semibold text-white">
                  ดูหลักฐานตรวจรับครบวงจร
                </div>
                <div className="mx-auto h-1 w-24 rounded-full bg-[var(--ink)]/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Centered CTA Pill below Phone */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onOpenVideo}
            className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-full bg-[var(--forest-700)] px-7 py-3 text-sm font-semibold text-[var(--on-fill)] shadow-[var(--shadow-primary)] transition-all hover:bg-[var(--forest-900)]"
          >
            <Play className="h-4 w-4 fill-current" />
            <span>ดูวิดีโอสาธิต</span>
          </button>
        </div>
      </div>
    </section>
  );
}
