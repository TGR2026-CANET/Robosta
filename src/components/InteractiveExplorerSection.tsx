import { useEffect, useState } from 'react';
import {
  Check,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Eye,
  Bot,
  ShieldAlert,
  TrendingUp,
  History,
  PlusCircle,
} from 'lucide-react';
import { EXPLORER_STEPS, LOT_DATA } from '../data/lotDemoData';
import { IPhoneProMaxMockup } from './IPhoneProMaxMockup';

function PhoneScreen({
  stepId,
  showUnsoldCase,
  consentChecked,
  onToggleConsent,
}: {
  stepId: number;
  showUnsoldCase: boolean;
  consentChecked: boolean;
  onToggleConsent: () => void;
}) {
  const isChatScreen = stepId === 6;
  const time =
    stepId === 1
      ? '07:30'
      : stepId === 2
        ? '07:31'
        : stepId === 3
          ? '09:12'
          : stepId === 4
            ? '10:20'
            : stepId === 5
              ? '10:40'
              : stepId === 6
                ? '10:53'
                : '10:55';

  return (
    <IPhoneProMaxMockup
      time={time}
      screenBgClass={isChatScreen ? 'bg-[var(--line-chat)]' : 'bg-[#F4F5F7]'}
      showRainbowAura={false}
    >
      {/* LIFF / LINE OA Header */}
      {isChatScreen ? (
        <div className="flex shrink-0 items-center justify-between border-b border-black/[0.06] bg-white px-4 py-2.5">
          <div className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4 text-[var(--ink)]" />
            <span className="text-sm font-semibold text-[var(--ink)]">Robosta</span>
          </div>
          <span className="rounded-full bg-[var(--forest-100)] px-2 py-0.5 text-[10px] font-medium text-[var(--forest-700)]">
            LINE OA
          </span>
        </div>
      ) : (
        <div className="shrink-0 border-b border-black/[0.06] bg-white px-4 py-2 text-center">
          <div className="text-sm font-semibold text-[var(--ink)]">
            {stepId === 1
              ? 'เพิ่มล็อตใหม่'
              : stepId === 2
                ? `ความชื้นล็อต ${LOT_DATA.lotId}`
                : stepId === 3
                  ? 'สแกนเม็ด'
                  : stepId === 4 || stepId === 5
                    ? 'ประเมินราคา'
                    : 'ประวัติการขาย'}
          </div>
          <div className="text-[10px] font-medium tracking-wider text-[var(--ink-muted)]">LINE LIFF</div>
        </div>
      )}

      {/* Screen Body */}
      <div
        className={`flex-1 overflow-y-auto p-3 ${
          isChatScreen ? 'bg-[var(--line-chat)]' : 'bg-[#F4F5F7]'
        }`}
      >
        {stepId === 1 && (
          <div className="space-y-3">
            <div className="rounded-2xl bg-[var(--forest-900)] p-4 text-[var(--on-fill)]">
              <div className="text-base font-semibold">เพิ่มล็อตใหม่</div>
              <div className="text-xs text-[var(--on-forest)]">
                ล็อต {LOT_DATA.lotId} · {LOT_DATA.origin}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-3.5 shadow-sm">
              <div className="text-xs font-medium text-[var(--ink-muted)]">กาแฟล็อตนี้หนักกี่กิโล</div>
              <div className="mt-1.5 flex items-center justify-between rounded-xl border border-[var(--field-line)]/40 bg-[var(--wash)] px-3 py-2">
                <span className="rlp-num text-xl font-bold text-[var(--ink)]">{LOT_DATA.weightKg}</span>
                <span className="text-xs text-[var(--ink-muted)]">กก.</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-3.5 shadow-sm">
              <div className="text-xs font-medium text-[var(--ink-muted)]">จะลดความชื้นด้วยวิธีไหน</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs font-medium">
                <div className="rounded-xl border border-[var(--card-line)] bg-[var(--sun-100)] py-2.5 text-[var(--sun-700)]">
                  ตากแดด
                </div>
                <div className="rounded-xl border border-[var(--card-line)] bg-[var(--fire-100)] py-2.5 text-[var(--fire-700)]">
                  อบ
                </div>
                <div className="rounded-xl border-2 border-[var(--amber-700)] bg-[var(--amber-100)] py-2.5 font-semibold text-[var(--amber-700)]">
                  ตาก + อบ
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-3.5 shadow-sm">
              <div className="text-xs font-medium text-[var(--ink-muted)]">เครื่องวัดความชื้น ESP32</div>
              <div className="mt-2 flex items-center justify-between rounded-xl border border-[var(--forest-300)] bg-[var(--forest-050)] px-3 py-2">
                <span className="text-xs font-semibold text-[var(--forest-700)]">ลานตาก 1 · เชื่อมต่อแล้ว</span>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--forest-700)]" />
              </div>
            </div>

            <div className="rounded-xl bg-[var(--forest-700)] py-3 text-center text-sm font-semibold text-[var(--on-fill)]">
              ✓ เริ่มติดตามล็อตนี้
            </div>
          </div>
        )}

        {stepId === 2 && (
          <div className="space-y-3">
            <div className="rounded-2xl bg-[var(--forest-900)] p-3.5 text-[var(--on-fill)]">
              <div className="text-base font-semibold">ความชื้นเมล็ด</div>
              <div className="text-xs text-[var(--on-forest)]">
                ล็อต {LOT_DATA.lotId} · {LOT_DATA.process}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--forest-700)] p-4 text-center text-[var(--on-fill)]">
              <div className="rlp-num text-3xl font-bold">{LOT_DATA.moistureCurrent}% ✓ แห้งได้ที่</div>
              <div className="mt-1.5 inline-block rounded-full bg-[var(--glass)] px-3 py-0.5 text-xs text-[var(--mint)]">
                พร้อมคัดเกรด
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-[var(--card-line)] bg-[var(--card)] p-3">
                <div className="text-[11px] text-[var(--ink-muted)]">ความชื้นตอนนี้</div>
                <div className="rlp-num text-xl font-bold text-[var(--forest-700)]">
                  {LOT_DATA.moistureCurrent}%
                </div>
              </div>
              <div className="rounded-xl border border-[var(--card-line)] bg-[var(--card)] p-3">
                <div className="text-[11px] text-[var(--ink-muted)]">ต้องการ</div>
                <div className="rlp-num text-xl font-bold text-[var(--ink)]">≤ {LOT_DATA.moistureTarget}%</div>
              </div>
            </div>

            {/* SVG Moisture Curve */}
            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-3.5">
              <div className="text-xs font-semibold text-[var(--ink)]">ความชื้นลดลงต่อเนื่อง (ESP32)</div>
              <svg viewBox="0 0 260 110" className="mt-2 w-full">
                {/* Target zone */}
                <rect x="24" y="74" width="220" height="22" fill="var(--chart-target)" rx="4" />
                <line
                  x1="24"
                  y1="74"
                  x2="244"
                  y2="74"
                  stroke="var(--forest-700)"
                  strokeDasharray="4 3"
                  strokeWidth="1.2"
                />
                <text x="28" y="88" fontSize="9" fill="var(--forest-700)" fontWeight="600">
                  แห้งได้ที่ ≤ 12.5%
                </text>
                {/* Line */}
                <polyline
                  fill="none"
                  stroke="var(--bronze-700)"
                  strokeWidth="2.5"
                  points="36,20 102,48 168,66 232,80"
                />
                {[
                  { x: 36, y: 20, label: '21%' },
                  { x: 102, y: 48, label: '16%' },
                  { x: 168, y: 66, label: '13.4%' },
                  { x: 232, y: 80, label: '11.8%' },
                ].map((pt, i) => (
                  <g key={pt.label}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="4"
                      fill={i === 3 ? 'var(--forest-700)' : 'var(--bronze-700)'}
                    />
                    <text
                      x={pt.x}
                      y={pt.y - 8}
                      textAnchor="middle"
                      fontSize="9.5"
                      fontWeight="700"
                      fill={i === 3 ? 'var(--forest-700)' : 'var(--ink)'}
                    >
                      {pt.label}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="flex justify-between px-3 text-[10px] text-[var(--ink-muted)]">
                {LOT_DATA.moistureHistory.map((m) => (
                  <span key={m.day}>{m.day}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {stepId === 3 && (
          <div className="space-y-3">
            <div className="rounded-2xl bg-[var(--forest-900)] p-3.5 text-[var(--on-fill)]">
              <div className="text-base font-semibold">ผลตรวจเม็ด</div>
              <div className="text-xs text-[var(--on-forest)]">
                ล็อต {LOT_DATA.lotId} · ตัวอย่าง {LOT_DATA.scanTotalBeans} เม็ด
              </div>
            </div>

            <div className="rounded-xl bg-[var(--roast)] px-3.5 py-2.5 text-xs text-[var(--on-fill)]">
              <div className="font-semibold">ได้ผลตรวจแล้ว · 09:12 น.</div>
              <div className="text-[11px] text-[var(--on-forest)]">ส่งจากกล้อง Raspberry Pi 5 ผ่าน MQTT</div>
            </div>

            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-3.5">
              <div className="flex items-center gap-3.5">
                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[var(--grade-a)] text-[var(--on-fill)]">
                  <span className="text-[10px]">เกรด</span>
                  <span className="text-2xl font-bold leading-none">{LOT_DATA.grade}</span>
                </div>
                <div>
                  <div className="text-xs text-[var(--ink-muted)]">เม็ดเสียหลังคัด</div>
                  <div className="rlp-num text-2xl font-bold text-[var(--forest-700)]">
                    {LOT_DATA.defectAfterPct.toFixed(1)} % ✓
                  </div>
                  <div className="text-[11px] text-[var(--ink-muted)]">
                    ก่อนคัด {LOT_DATA.defectBeforePct}% (คัดออก 3 เม็ด)
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-1.5 text-xs">
                <div className="flex items-center gap-1.5 rounded-lg bg-[var(--wash)] px-2.5 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--bean-good)]" />
                  <span>ดี {LOT_DATA.scanGood}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg bg-[var(--wash)] px-2.5 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--bean-broken)]" />
                  <span>แตก {LOT_DATA.scanBroken}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg bg-[var(--wash)] px-2.5 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--bean-immature)]" />
                  <span>ไม่สุก {LOT_DATA.scanImmature}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg bg-[var(--wash)] px-2.5 py-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--bean-black)]" />
                  <span>ดำ {LOT_DATA.scanBlack}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {stepId === 4 && (
          <div className="space-y-3">
            <div className="rounded-2xl bg-[var(--forest-900)] p-3.5 text-[var(--on-fill)]">
              <div className="text-base font-semibold">ราคากลาง เกรด A</div>
              <div className="text-xs text-[var(--on-forest)]">
                ล็อต {LOT_DATA.lotId} · {LOT_DATA.weightKg} กก.
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-4">
              <div className="text-xs text-[var(--ink-muted)]">ราคาที่ระบบแนะนำ</div>
              <div className="rlp-num mt-1 text-3xl font-bold text-[var(--forest-700)]">
                {LOT_DATA.recommendedPrice} ฿/กก.
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-[var(--forest-100)]">
                <div className="h-2 w-4/5 rounded-full bg-[var(--forest-700)]" />
              </div>
              <div className="mt-1 flex justify-between text-[11px] text-[var(--ink-muted)]">
                <span>{LOT_DATA.marketMin} ฿</span>
                <span>ราคากลางตลาดวันนี้</span>
                <span>{LOT_DATA.marketMax} ฿</span>
              </div>
              <div className="mt-2 text-xs font-semibold text-[var(--ink)]">
                ≈ {LOT_DATA.totalValue.toLocaleString()} ฿ ทั้งล็อต
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-3.5">
              <span className="inline-block rounded-full bg-[var(--sky-100)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--sky-700)]">
                คำอธิบายโดย AI ในเครื่อง
              </span>
              <ul className="mt-2 space-y-1.5 text-xs text-[var(--ink)]">
                <li>• เกรด A ความชื้นนิ่ง 11.8% อยู่ในช่วงที่ผู้ซื้อต้องการ</li>
                <li>• ราคาตลาดสัปดาห์นี้ทรงตัว แนะนำตั้ง {LOT_DATA.recommendedPrice} ฿/กก.</li>
                <li>• ไม่ควรต่ำกว่า {LOT_DATA.floorPrice} ฿/กก. เพราะคุณภาพสูงกว่าค่าเฉลี่ย</li>
              </ul>
              <div className="mt-2.5 border-t border-[var(--divider)] pt-2 text-[10px] text-[var(--ink-muted)]">
                ตัวเลขทั้งหมดคำนวณโดยระบบ · AI ช่วยอธิบายเท่านั้น
              </div>
            </div>
          </div>
        )}

        {stepId === 5 && (
          <div className="space-y-3">
            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-4 shadow-sm">
              <div className="text-base font-bold text-[var(--ink)]">ยืนยันให้ AI Agent ขาย</div>
              <div className="text-xs text-[var(--ink-muted)]">
                ล็อต {LOT_DATA.lotId} · เกรด {LOT_DATA.grade} · {LOT_DATA.origin}
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-[var(--wash)] px-3 py-2">
                  <span className="text-[var(--ink-muted)]">ราคาเป้าหมาย</span>
                  <span className="rlp-num font-bold text-[var(--ink)]">{LOT_DATA.recommendedPrice} ฿/กก.</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-[var(--wash)] px-3 py-2">
                  <div>
                    <div className="text-[var(--ink-muted)]">ราคาต่ำสุดที่รับได้</div>
                    <div className="text-[10px] text-[var(--amber-700)]">AI จะไม่ขายต่ำกว่านี้</div>
                  </div>
                  <span className="rlp-num text-base font-bold text-[var(--forest-700)]">
                    {LOT_DATA.floorPrice} ฿/กก.
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-[var(--wash)] px-3 py-2">
                  <span className="text-[var(--ink-muted)]">ปริมาณ · ปิดรับข้อเสนอ</span>
                  <span className="rlp-num font-semibold text-[var(--ink)]">500 กก. · 24 ชม.</span>
                </div>
              </div>

              <label className="mt-3 flex cursor-pointer items-start gap-2.5 rounded-xl border border-[var(--forest-300)] bg-[var(--forest-050)] p-2.5 text-xs">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={onToggleConsent}
                  className="mt-0.5 h-4 w-4 accent-[var(--forest-700)]"
                />
                <span className="font-medium text-[var(--ink)]">
                  ฉันอนุญาตให้ AI เจรจาและตกลงขายในเงื่อนไขนี้
                </span>
              </label>

              <button
                type="button"
                disabled={!consentChecked}
                className={`mt-3 w-full rounded-xl py-2.5 text-xs font-semibold transition-colors ${
                  consentChecked
                    ? 'bg-[var(--forest-700)] text-[var(--on-fill)]'
                    : 'bg-[var(--disabled)] text-[var(--ink-muted)]'
                }`}
              >
                {consentChecked ? '✓ ยืนยัน เริ่มขาย' : 'ติ๊กยินยอมก่อน'}
              </button>
            </div>
          </div>
        )}

        {stepId === 6 && (
          <div className="space-y-3">
            <div className="mx-auto w-fit rounded-full bg-[var(--chat-chip)] px-3 py-0.5 text-[10px] font-medium text-[var(--ink)]">
              30 ต.ค.
            </div>

            {showUnsoldCase ? (
              <div className="overflow-hidden rounded-2xl bg-[var(--card)] shadow-sm">
                <div className="bg-[var(--neutral-100)] px-3.5 py-2.5 text-xs font-semibold text-[var(--ink)]">
                  ขายไม่สำเร็จ ภายใน 24 ชม.
                </div>
                <div className="p-3.5 text-xs text-[var(--ink)]">
                  <div className="rlp-num text-xl font-bold text-[var(--amber-700)]">สูงสุด 114 ฿/กก.</div>
                  <p className="mt-1 text-[var(--ink-muted)]">
                    ข้อเสนอสูงสุดต่ำกว่าราคาขั้นต่ำ (116 ฿/กก.) ความชื้นยังอยู่ที่ 11.9% ผู้ซื้อสัปดาห์นี้ยังน้อย
                    ราคาตลาดเริ่มฟื้น
                  </p>
                  <div className="mt-3 rounded-xl bg-[var(--line-green)] py-2 text-center font-semibold text-[var(--ink)]">
                    เปิดขายใหม่
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl bg-[var(--card)] shadow-sm">
                <div className="bg-[var(--forest-700)] px-3.5 py-2.5 text-xs font-semibold text-[var(--on-fill)]">
                  ✓ ขายสำเร็จ · ล็อต {LOT_DATA.lotId}
                </div>
                <div className="p-3.5 text-xs text-[var(--ink)]">
                  <div className="rlp-num text-3xl font-bold text-[var(--forest-700)]">
                    {LOT_DATA.totalValue.toLocaleString()} ฿
                  </div>
                  <div className="mt-2 space-y-1 text-[var(--ink-muted)]">
                    <div>• ผู้ส่งออก B · 120 ฿/กก. × 500 กก.</div>
                    <div className="font-medium text-[var(--forest-700)]">• สูงกว่าราคาขั้นต่ำ +4 ฿/กก.</div>
                    <div>• นัดรับสินค้า {LOT_DATA.pickupDate}</div>
                  </div>
                  <div className="mt-3 rounded-xl bg-[var(--line-green)] py-2 text-center font-semibold text-[var(--ink)]">
                    ดูสัญญาซื้อขาย
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {stepId === 7 && (
          <div className="space-y-3">
            <div className="rounded-2xl bg-[var(--forest-900)] p-4 text-[var(--on-fill)]">
              <div className="text-xs text-[var(--on-forest)]">ขายได้ทั้งหมด</div>
              <div className="rlp-num text-3xl font-bold">฿{LOT_DATA.historyTotal.toLocaleString()}</div>
              <div className="mt-1 inline-block rounded-full bg-[var(--glass)] px-2.5 py-0.5 text-[11px]">
                ขายสำเร็จ {LOT_DATA.historySuccessCount} ครั้ง จาก {LOT_DATA.historyTotalCount} ครั้ง
              </div>
            </div>

            <div className="rounded-2xl border-2 border-[var(--forest-300)] bg-[var(--forest-050)] p-3.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[var(--ink)]">ล็อต {LOT_DATA.lotId}</span>
                <span className="rlp-num text-[var(--forest-700)]">฿60,000</span>
              </div>
              <div className="mt-1 text-[11px] text-[var(--ink-muted)]">
                ขายให้ผู้ส่งออก B · 120 ฿/กก. · เกรด A (0.0%) · 11.8%
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--card-line)] bg-[var(--card)] p-3.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-[var(--ink)]">ล็อต CPN-2610-03</span>
                <span className="rlp-num text-[var(--ink)]">฿37,200</span>
              </div>
              <div className="mt-1 text-[11px] text-[var(--ink-muted)]">18 ต.ค. 2569 · ขายสำเร็จ</div>
            </div>
          </div>
        )}
      </div>
    </IPhoneProMaxMockup>
  );
}

export function InteractiveExplorerSection() {
  const [activeStep, setActiveStep] = useState(2);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showUnsoldCase, setShowUnsoldCase] = useState(false);
  const [consentChecked, setConsentChecked] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = window.setInterval(() => {
      setActiveStep((prev) => (prev >= 7 ? 1 : prev + 1));
    }, 3200);
    return () => window.clearInterval(timer);
  }, [autoPlay]);

  const current = EXPLORER_STEPS.find((s) => s.id === activeStep) ?? EXPLORER_STEPS[0];

  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <PlusCircle className="h-4 w-4" />;
      case 2:
        return <Cpu className="h-4 w-4" />;
      case 3:
        return <Eye className="h-4 w-4" />;
      case 4:
        return <TrendingUp className="h-4 w-4" />;
      case 5:
        return <ShieldAlert className="h-4 w-4" />;
      case 6:
        return <Bot className="h-4 w-4" />;
      default:
        return <History className="h-4 w-4" />;
    }
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-black/[0.06] bg-white py-16 md:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[#D4EEFF]/35 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-[#FDE7A2]/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-block rounded-full bg-[var(--stage-amber)] px-3.5 py-1 text-xs font-semibold text-[var(--on-amber)]">
              Interactive Lot Passport Explorer
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--stage-ink)] sm:text-4xl">
              สำรวจเส้นทางข้อมูลจริงของล็อต {LOT_DATA.lotId} (7 ขั้นตอน)
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setAutoPlay((v) => !v)}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--stage-muted)]/40 bg-[var(--stage-700)] px-4 py-2 text-sm font-medium text-[var(--stage-ink)] transition-colors hover:border-[var(--forest-700)]"
            >
              {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{autoPlay ? 'หยุดเล่นอัตโนมัติ' : 'เล่นอัตโนมัติ'}</span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-12">
          {/* Left Rail: 7 Steps */}
          <div className="space-y-2 lg:col-span-3">
            {EXPLORER_STEPS.map((step) => {
              const isActive = step.id === activeStep;
              const isPast = step.id < activeStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    setAutoPlay(false);
                    setActiveStep(step.id);
                  }}
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-all ${
                    isActive
                      ? 'border-[var(--forest-300)] bg-[var(--card)] shadow-sm'
                      : 'border-transparent bg-transparent hover:bg-[var(--card)]/60'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isActive
                        ? 'bg-[var(--stage-amber)] text-[var(--on-amber)]'
                        : isPast
                          ? 'bg-[var(--forest-700)] text-[var(--on-fill)]'
                          : 'border border-[var(--field-line)] text-[var(--ink-muted)]'
                    }`}
                  >
                    {isPast ? <Check className="h-3.5 w-3.5" /> : step.id}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      isActive ? 'font-semibold text-[var(--ink)]' : 'text-[var(--ink-muted)]'
                    }`}
                  >
                    {step.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center: Phone Mockup */}
          <div className="lg:col-span-5">
            <PhoneScreen
              stepId={activeStep}
              showUnsoldCase={showUnsoldCase}
              consentChecked={consentChecked}
              onToggleConsent={() => setConsentChecked((v) => !v)}
            />
          </div>

          {/* Right Rail: B2B & Investor Proof */}
          <div className="rounded-[24px] border border-[var(--card-line)] bg-[var(--card)] p-6 shadow-[var(--shadow-card)] lg:col-span-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--forest-100)] px-3 py-1 text-xs font-semibold text-[var(--forest-700)]">
              {getStepIcon(current.id)}
              <span>{current.techTag}</span>
            </div>

            <h3 className="mt-4 text-xl font-bold leading-snug text-[var(--ink)]">{current.headline}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">{current.b2bSummary}</p>

            <div className="mt-5 border-t border-[var(--divider)] pt-4">
              <div className="text-xs font-semibold tracking-wider text-[var(--stage-amber)] uppercase">
                {current.b2bTitle}
              </div>
              <ul className="mt-3 space-y-2.5">
                {current.b2bBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--forest-700)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeStep === 6 && (
              <div className="mt-5 rounded-xl border border-[var(--card-line)] bg-[var(--wash)] p-3">
                <label className="flex cursor-pointer items-center justify-between text-xs font-medium text-[var(--ink)]">
                  <span>สลับดูกรณี "ขายไม่สำเร็จ" (Safety Guardrail)</span>
                  <input
                    type="checkbox"
                    checked={showUnsoldCase}
                    onChange={() => setShowUnsoldCase((v) => !v)}
                    className="h-4 w-4 accent-[var(--stage-amber)]"
                  />
                </label>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between border-t border-[var(--divider)] pt-4">
              <button
                type="button"
                onClick={() => {
                  setAutoPlay(false);
                  setActiveStep((p) => (p <= 1 ? 7 : p - 1));
                }}
                className="inline-flex cursor-pointer items-center gap-1 rounded-xl border border-[var(--card-line)] px-3 py-2 text-xs font-medium text-[var(--ink)] hover:bg-[var(--wash)]"
              >
                <ChevronLeft className="h-4 w-4" />
                ก่อนหน้า
              </button>
              <span className="rlp-num text-xs font-medium text-[var(--ink-muted)]">
                ขั้นตอน {activeStep} / 7
              </span>
              <button
                type="button"
                onClick={() => {
                  setAutoPlay(false);
                  setActiveStep((p) => (p >= 7 ? 1 : p + 1));
                }}
                className="inline-flex cursor-pointer items-center gap-1 rounded-xl bg-[var(--forest-700)] px-3 py-2 text-xs font-semibold text-[var(--on-fill)] hover:bg-[var(--forest-900)]"
              >
                ถัดไป
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
