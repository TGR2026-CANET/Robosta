import { useState } from 'react';
import {
  X,
  Plus,
  List,
  TrendingUp,
  History,
  ChevronLeft,
  Cpu,
  Eye,
  Bot,
  Minus,
  CheckCircle2,
  Sun,
  Flame,
  Sparkles,
} from 'lucide-react';
import { LOT_DATA } from '../data/lotDemoData';

type LiffView = 'add' | 'lots' | 'moisture' | 'scan' | 'price' | 'history';

interface MockLot {
  id: string;
  weightKg: number;
  origin: string;
  process: 'ตากแดด' | 'อบ' | 'ตาก + อบ';
  sensor: string;
  moisture: number;
  grade: string;
  defectAfterPct: number;
  status: 'กำลังตาก/อบ' | 'พร้อมคัดเกรด' | 'พร้อมขาย' | 'ขายแล้ว';
  soldPricePerKg?: number;
  soldTotal?: number;
  buyer?: string;
  dateLabel: string;
}

const INITIAL_LOTS: MockLot[] = [
  {
    id: LOT_DATA.lotId,
    weightKg: LOT_DATA.weightKg,
    origin: LOT_DATA.origin,
    process: 'ตาก + อบ',
    sensor: 'ลานตาก 1',
    moisture: LOT_DATA.moistureCurrent,
    grade: LOT_DATA.grade,
    defectAfterPct: LOT_DATA.defectAfterPct,
    status: 'พร้อมขาย',
    dateLabel: '30 ต.ค. 2569',
  },
  {
    id: 'CPN-2610-03',
    weightKg: 310,
    origin: 'อ.สวี ชุมพร',
    process: 'ตาก + อบ',
    sensor: 'ลานตาก 2',
    moisture: 12.1,
    grade: 'A',
    defectAfterPct: 0.5,
    status: 'ขายแล้ว',
    soldPricePerKg: 120,
    soldTotal: 37200,
    buyer: 'โรงคั่ว A',
    dateLabel: '18 ต.ค. 2569',
  },
];

function getInitialView(): LiffView {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab');
  if (tab === 'add') return 'add';
  if (tab === 'lots') return 'lots';
  if (tab === 'price') return 'price';
  if (tab === 'history') return 'history';
  return 'lots';
}

export function LiffMiniApp() {
  const [view, setView] = useState<LiffView>(getInitialView);
  const [lots, setLots] = useState<MockLot[]>(INITIAL_LOTS);
  const [selectedLotId, setSelectedLotId] = useState<string>(LOT_DATA.lotId);

  // Add-lot form state
  const [weightInput, setWeightInput] = useState('500');
  const [processInput, setProcessInput] = useState<'ตากแดด' | 'อบ' | 'ตาก + อบ'>('ตาก + อบ');
  const [sensorInput, setSensorInput] = useState('ลานตาก 1');

  // Confirm bottom sheet & AI negotiation state
  const [sheetOpen, setSheetOpen] = useState(false);
  const [floorPrice, setFloorPrice] = useState(LOT_DATA.floorPrice);
  const [consentChecked, setConsentChecked] = useState(false);
  const [agentStep, setAgentStep] = useState<'idle' | 'negotiating' | 'sold'>('idle');

  const activeLot = lots.find((l) => l.id === selectedLotId) ?? lots[0];

  const totalSoldRevenue = lots
    .filter((l) => l.status === 'ขายแล้ว' && l.soldTotal)
    .reduce((acc, l) => acc + (l.soldTotal ?? 0), 0);

  const soldCount = lots.filter((l) => l.status === 'ขายแล้ว').length;

  const handleCreateLot = () => {
    const kg = Math.max(10, Number(weightInput) || 500);
    const nextNum = String(lots.length + 6).padStart(2, '0');
    const newLot: MockLot = {
      id: `CPN-2610-${nextNum}`,
      weightKg: kg,
      origin: 'อ.สวี ชุมพร',
      process: processInput,
      sensor: sensorInput,
      moisture: 18.4,
      grade: '-',
      defectAfterPct: 0,
      status: 'กำลังตาก/อบ',
      dateLabel: 'วันนี้',
    };
    setLots((prev) => [newLot, ...prev]);
    setSelectedLotId(newLot.id);
    setView('moisture');
  };

  const handleSimulateDryDone = () => {
    setLots((prev) =>
      prev.map((l) =>
        l.id === activeLot.id ? { ...l, moisture: 11.8, status: 'พร้อมคัดเกรด' } : l
      )
    );
  };

  const handleStartAgentSell = () => {
    setSheetOpen(false);
    setAgentStep('negotiating');
    window.setTimeout(() => {
      setAgentStep('sold');
      setLots((prev) =>
        prev.map((l) =>
          l.id === activeLot.id
            ? {
                ...l,
                status: 'ขายแล้ว',
                soldPricePerKg: LOT_DATA.recommendedPrice,
                soldTotal: LOT_DATA.recommendedPrice * l.weightKg,
                buyer: 'ผู้ส่งออก B',
              }
            : l
        )
      );
    }, 1600);
  };

  const headerTitle =
    view === 'add'
      ? 'เพิ่มล็อตใหม่'
      : view === 'lots'
        ? 'ล็อตของฉัน'
        : view === 'moisture'
          ? `ความชื้นล็อต ${activeLot.id}`
          : view === 'scan'
            ? 'สแกนเม็ด'
            : view === 'price'
              ? 'ประเมินราคา'
              : 'ประวัติการขาย';

  const isSubView = view === 'add' || view === 'moisture' || view === 'scan';

  const handleTopLeftNav = () => {
    if (view === 'scan') {
      setView('moisture');
      return;
    }
    if (view === 'moisture' || view === 'add') {
      setView('lots');
      return;
    }
    window.location.assign('/');
  };

  return (
    <div className="min-h-screen bg-[#EEF0F3] sm:py-6">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[var(--cream)] shadow-2xl sm:min-h-[844px] sm:overflow-hidden sm:rounded-[36px] sm:border-[6px] sm:border-[var(--phone-bezel)]">
        {/* LIFF Top Bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--divider)] bg-[var(--card)] px-4 py-3">
          <button
            type="button"
            onClick={handleTopLeftNav}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[var(--ink)] hover:bg-[var(--wash)]"
            aria-label={isSubView ? 'ย้อนกลับ' : 'กลับหน้าหลัก Robosta'}
          >
            {isSubView ? <ChevronLeft className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </button>
          <div className="text-center">
            <div className="text-base font-semibold text-[var(--ink)]">{headerTitle}</div>
            <div className="text-[10px] font-medium tracking-wider text-[var(--ink-muted)]">
              LINE LIFF · Robosta
            </div>
          </div>
          <button
            type="button"
            onClick={() => setView('add')}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[var(--forest-100)] text-[var(--forest-700)]"
            aria-label="เพิ่มล็อตใหม่"
          >
            <Plus className="h-5 w-5" />
          </button>
        </header>

        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 pb-24">
          {view === 'add' && (
            <div className="space-y-4">
              <div className="rounded-[24px] bg-[var(--forest-900)] p-5 text-[var(--on-fill)]">
                <div className="text-xl font-semibold">เพิ่มล็อตใหม่</div>
                <div className="mt-1 text-sm text-[var(--on-forest)]">
                  อ.สวี ชุมพร · ระบบจะผูกค่าความชื้นและเกรดให้อัตโนมัติ
                </div>
              </div>

              <div className="rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-4 shadow-[var(--shadow-card)]">
                <label className="block text-sm font-medium text-[var(--ink-muted)]">
                  กาแฟล็อตนี้หนักกี่กิโล
                </label>
                <div className="mt-2 flex items-center justify-between rounded-xl border border-[var(--field-line)]/50 bg-[var(--wash)] px-4 py-3">
                  <input
                    type="number"
                    value={weightInput}
                    onChange={(e) => setWeightInput(e.target.value)}
                    className="rlp-num w-full bg-transparent text-2xl font-bold text-[var(--ink)] outline-none"
                  />
                  <span className="text-sm font-medium text-[var(--ink-muted)]">กก.</span>
                </div>
              </div>

              <div className="rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-4 shadow-[var(--shadow-card)]">
                <div className="text-sm font-medium text-[var(--ink-muted)]">จะลดความชื้นด้วยวิธีไหน</div>
                <div className="mt-3 grid grid-cols-3 gap-2.5 text-center text-sm font-semibold">
                  {(
                    [
                      { label: 'ตากแดด', icon: Sun, active: 'border-[var(--sun-700)] bg-[var(--sun-100)] text-[var(--sun-700)]' },
                      { label: 'อบ', icon: Flame, active: 'border-[var(--fire-700)] bg-[var(--fire-100)] text-[var(--fire-700)]' },
                      { label: 'ตาก + อบ', icon: Sparkles, active: 'border-[var(--amber-700)] bg-[var(--amber-100)] text-[var(--amber-700)]' },
                    ] as const
                  ).map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = processInput === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setProcessInput(opt.label)}
                        className={`flex min-h-[68px] cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl border-2 transition-all ${
                          isSelected
                            ? opt.active
                            : 'border-[var(--card-line)] bg-[var(--wash)] text-[var(--ink-muted)]'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-4 shadow-[var(--shadow-card)]">
                <div className="text-sm font-medium text-[var(--ink-muted)]">ใช้เครื่องวัดความชื้น ESP32 ตัวไหน</div>
                <div className="mt-3 space-y-2">
                  {['ลานตาก 1', 'ลานตาก 2'].map((sensor) => (
                    <button
                      key={sensor}
                      type="button"
                      onClick={() => setSensorInput(sensor)}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 text-left ${
                        sensorInput === sensor
                          ? 'border-[var(--forest-700)] bg-[var(--forest-050)]'
                          : 'border-[var(--card-line)] bg-[var(--wash)]'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-[var(--ink)]">{sensor}</div>
                        <div className="text-xs text-[var(--forest-700)]">ว่าง พร้อมใช้ · Wi-Fi</div>
                      </div>
                      <span
                        className={`h-4 w-4 rounded-full border-2 ${
                          sensorInput === sensor
                            ? 'border-[var(--forest-700)] bg-[var(--forest-700)]'
                            : 'border-[var(--field-line)]'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCreateLot}
                className="w-full cursor-pointer rounded-2xl bg-[var(--forest-700)] py-4 text-base font-semibold text-[var(--on-fill)] shadow-[var(--shadow-primary)]"
              >
                ✓ เริ่มติดตามล็อตนี้
              </button>
            </div>
          )}

          {view === 'lots' && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[var(--ink)]">ล็อตทั้งหมด ({lots.length})</h2>
                <button
                  type="button"
                  onClick={() => setView('add')}
                  className="cursor-pointer rounded-full bg-[var(--forest-700)] px-3.5 py-1.5 text-xs font-semibold text-white"
                >
                  + เพิ่มล็อต
                </button>
              </div>

              {lots.map((lot) => (
                <button
                  key={lot.id}
                  type="button"
                  onClick={() => {
                    setSelectedLotId(lot.id);
                    setView('moisture');
                  }}
                  className="w-full cursor-pointer rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-4 text-left shadow-[var(--shadow-card)] transition-transform active:scale-[0.99]"
                >
                  <div className="flex items-center justify-between">
                    <span className="rlp-num text-lg font-bold text-[var(--ink)]">{lot.id}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        lot.status === 'ขายแล้ว'
                          ? 'bg-[var(--forest-700)] text-white'
                          : lot.status === 'พร้อมขาย'
                            ? 'bg-[var(--teal-100)] text-[var(--teal-700)]'
                            : 'bg-[var(--amber-100)] text-[var(--amber-700)]'
                      }`}
                    >
                      {lot.status}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-[var(--ink-muted)]">
                    {lot.weightKg} กก. · {lot.origin} · {lot.process}
                  </div>
                  <div className="mt-3 flex items-center gap-4 border-t border-[var(--divider)] pt-2.5 text-xs">
                    <span className="flex items-center gap-1 text-[var(--ink)]">
                      <Cpu className="h-3.5 w-3.5 text-[var(--forest-700)]" />
                      ความชื้น <strong className="rlp-num">{lot.moisture}%</strong>
                    </span>
                    <span className="flex items-center gap-1 text-[var(--ink)]">
                      <Eye className="h-3.5 w-3.5 text-[var(--sky-700)]" />
                      เกรด <strong>{lot.grade}</strong>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {view === 'moisture' && (
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setView('lots')}
                className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-[var(--forest-700)]"
              >
                <ChevronLeft className="h-4 w-4" />
                กลับหน้ารายการล็อต
              </button>

              <div className="rounded-[24px] bg-[var(--forest-900)] p-4 text-[var(--on-fill)]">
                <div className="text-lg font-semibold">ความชื้นเมล็ด · {activeLot.id}</div>
                <div className="text-xs text-[var(--on-forest)]">
                  {activeLot.weightKg} กก. · {activeLot.process} · {activeLot.sensor}
                </div>
              </div>

              <div
                className={`rounded-[24px] p-5 text-center text-[var(--on-fill)] ${
                  activeLot.moisture <= 12.5 ? 'bg-[var(--forest-700)]' : 'bg-[var(--roast)]'
                }`}
              >
                <div className="rlp-num text-4xl font-bold">
                  {activeLot.moisture}% {activeLot.moisture <= 12.5 ? '✓ แห้งได้ที่' : 'กำลังตาก/อบ'}
                </div>
                <div className="mt-2 text-xs text-[var(--on-forest)]">
                  เกณฑ์มาตรฐาน ≤ {LOT_DATA.moistureTarget}%
                </div>
              </div>

              {activeLot.moisture > 12.5 && (
                <button
                  type="button"
                  onClick={handleSimulateDryDone}
                  className="w-full cursor-pointer rounded-2xl border border-[var(--forest-700)] bg-[var(--forest-050)] py-3 text-sm font-semibold text-[var(--forest-700)]"
                >
                  จำลองเซนเซอร์ ESP32 วัดได้ 11.8% (แห้งได้ที่)
                </button>
              )}

              <div className="rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-4">
                <div className="text-sm font-semibold text-[var(--ink)]">กราฟความชื้นลดลง (ESP32)</div>
                <svg viewBox="0 0 260 110" className="mt-2 w-full">
                  <rect x="20" y="74" width="224" height="22" fill="var(--chart-target)" rx="4" />
                  <line
                    x1="20"
                    y1="74"
                    x2="244"
                    y2="74"
                    stroke="var(--forest-700)"
                    strokeDasharray="4 3"
                    strokeWidth="1.2"
                  />
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
                    { x: 232, y: 80, label: `${activeLot.moisture}%` },
                  ].map((pt, i) => (
                    <g key={pt.label}>
                      <circle cx={pt.x} cy={pt.y} r="4" fill={i === 3 ? 'var(--forest-700)' : 'var(--bronze-700)'} />
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
              </div>

              <button
                type="button"
                onClick={() => {
                  setLots((prev) =>
                    prev.map((l) => (l.id === activeLot.id ? { ...l, grade: 'A', defectAfterPct: 0.0 } : l))
                  );
                  setView('scan');
                }}
                className="w-full cursor-pointer rounded-2xl bg-[var(--forest-700)] py-4 text-base font-semibold text-white shadow-[var(--shadow-primary)]"
              >
                <Eye className="mr-1.5 inline h-4 w-4" />
                ตรวจเม็ดเสียด้วยกล้อง Pi 5
              </button>
            </div>
          )}

          {view === 'scan' && (
            <div className="space-y-4">
              <div className="rounded-[24px] bg-[var(--forest-900)] p-4 text-[var(--on-fill)]">
                <div className="text-lg font-semibold">ผลตรวจเม็ด · {activeLot.id}</div>
                <div className="text-xs text-[var(--on-forest)]">
                  ตัวอย่าง {LOT_DATA.scanTotalBeans} เม็ด · Raspberry Pi 5 (CPU)
                </div>
              </div>

              <div className="rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-4 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[var(--grade-a)] text-white">
                    <span className="text-[11px]">เกรด</span>
                    <span className="text-3xl font-bold leading-none">A</span>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--ink-muted)]">เม็ดเสียหลังคัด</div>
                    <div className="rlp-num text-3xl font-bold text-[var(--forest-700)]">0.0% ✓</div>
                    <div className="text-xs text-[var(--ink-muted)]">
                      ก่อนคัด {LOT_DATA.defectBeforePct}% (คัดออก 3 เม็ด)
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 rounded-xl bg-[var(--wash)] px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--bean-good)]" />
                    <span>ดี {LOT_DATA.scanGood} เม็ด</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[var(--wash)] px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--bean-broken)]" />
                    <span>แตก {LOT_DATA.scanBroken} เม็ด</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[var(--wash)] px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--bean-immature)]" />
                    <span>ไม่สุก {LOT_DATA.scanImmature} เม็ด</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[var(--wash)] px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--bean-black)]" />
                    <span>ดำ {LOT_DATA.scanBlack} เม็ด</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setView('price')}
                className="w-full cursor-pointer rounded-2xl bg-[var(--forest-700)] py-4 text-base font-semibold text-white shadow-[var(--shadow-primary)]"
              >
                ดูราคากลางและให้ AI ขายแทน
              </button>
            </div>
          )}

          {view === 'price' && (
            <div className="space-y-4">
              <div className="rounded-[24px] bg-[var(--forest-900)] p-4 text-[var(--on-fill)]">
                <div className="text-lg font-semibold">ราคากลาง เกรด A</div>
                <div className="text-xs text-[var(--on-forest)]">
                  ล็อต {activeLot.id} · {activeLot.weightKg} กก.
                </div>
              </div>

              <div className="rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-5 shadow-[var(--shadow-card)]">
                <div className="text-xs text-[var(--ink-muted)]">ราคาที่ระบบแนะนำ</div>
                <div className="rlp-num mt-1 text-4xl font-bold text-[var(--forest-700)]">
                  {LOT_DATA.recommendedPrice} ฿/กก.
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-[var(--forest-100)]">
                  <div className="h-2 w-4/5 rounded-full bg-[var(--forest-700)]" />
                </div>
                <div className="mt-1.5 flex justify-between text-xs text-[var(--ink-muted)]">
                  <span>{LOT_DATA.marketMin} ฿</span>
                  <span>ราคากลางวันนี้</span>
                  <span>{LOT_DATA.marketMax} ฿</span>
                </div>
                <div className="mt-3 text-sm font-semibold text-[var(--ink)]">
                  ≈ {(LOT_DATA.recommendedPrice * activeLot.weightKg).toLocaleString()} ฿ ทั้งล็อต
                </div>
              </div>

              <div className="rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-4 shadow-[var(--shadow-card)]">
                <span className="inline-block rounded-full bg-[var(--sky-100)] px-3 py-0.5 text-xs font-semibold text-[var(--sky-700)]">
                  คำอธิบายโดย AI ในเครื่อง
                </span>
                <ul className="mt-2.5 space-y-1.5 text-sm text-[var(--ink)]">
                  <li>• เกรด A ความชื้นนิ่ง {activeLot.moisture}% อยู่ในช่วงที่ผู้ซื้อต้องการ</li>
                  <li>• ราคาตลาดสัปดาห์นี้ทรงตัว แนะนำตั้ง 120 ฿/กก.</li>
                  <li>• ไม่ควรต่ำกว่า {floorPrice} ฿/กก. เพราะคุณภาพสูงกว่าค่าเฉลี่ย</li>
                </ul>
                <div className="mt-3 border-t border-[var(--divider)] pt-2 text-[11px] text-[var(--ink-muted)]">
                  ตัวเลขทั้งหมดคำนวณโดยระบบ · AI ช่วยอธิบายเท่านั้น
                </div>
              </div>

              {agentStep === 'idle' && (
                <button
                  type="button"
                  onClick={() => setSheetOpen(true)}
                  className="w-full cursor-pointer rounded-2xl bg-[var(--forest-700)] py-4 text-base font-semibold text-white shadow-[var(--shadow-primary)]"
                >
                  <Bot className="mr-1.5 inline h-5 w-5" />
                  ให้ AI Agent ขายแทน
                </button>
              )}

              {agentStep === 'negotiating' && (
                <div className="rounded-[22px] bg-[var(--roast)] p-5 text-center text-white">
                  <div className="text-base font-semibold">AI Agent กำลังเจรจาผู้ซื้อ 3 ราย...</div>
                  <div className="mt-1 text-xs text-[var(--on-forest)]">
                    คัดกรองข้อเสนอ ≥ {floorPrice} ฿/กก. อัตโนมัติ
                  </div>
                </div>
              )}

              {agentStep === 'sold' && (
                <div className="rounded-[22px] border-2 border-[var(--forest-700)] bg-[var(--forest-050)] p-5">
                  <div className="flex items-center gap-2 text-base font-bold text-[var(--forest-700)]">
                    <CheckCircle2 className="h-5 w-5" />
                    ปิดดีลสำเร็จกับผู้ส่งออก B!
                  </div>
                  <div className="rlp-num mt-2 text-3xl font-bold text-[var(--ink)]">
                    {(LOT_DATA.recommendedPrice * activeLot.weightKg).toLocaleString()} ฿
                  </div>
                  <div className="mt-1 text-xs text-[var(--ink-muted)]">
                    120 ฿/กก. · สูงกว่าขั้นต่ำ +{120 - floorPrice} ฿/กก.
                  </div>
                  <button
                    type="button"
                    onClick={() => setView('history')}
                    className="mt-4 w-full cursor-pointer rounded-xl bg-[var(--forest-700)] py-2.5 text-sm font-semibold text-white"
                  >
                    ดูในประวัติการขาย
                  </button>
                </div>
              )}
            </div>
          )}

          {view === 'history' && (
            <div className="space-y-4">
              <div className="rounded-[24px] bg-[var(--forest-900)] p-5 text-[var(--on-fill)]">
                <div className="text-xs text-[var(--on-forest)]">ขายได้ทั้งหมด</div>
                <div className="rlp-num mt-1 text-4xl font-bold">฿{totalSoldRevenue.toLocaleString()}</div>
                <div className="mt-2 inline-block rounded-full bg-[var(--glass)] px-3 py-1 text-xs">
                  ขายสำเร็จ {soldCount} ครั้ง จาก {lots.length} ล็อต
                </div>
              </div>

              {lots.map((lot) => (
                <div
                  key={lot.id}
                  className="rounded-[22px] border border-[var(--card-line)] bg-[var(--card)] p-4 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="rlp-num font-bold text-[var(--ink)]">ล็อต {lot.id}</span>
                    <span className="rlp-num font-bold text-[var(--forest-700)]">
                      {lot.soldTotal ? `฿${lot.soldTotal.toLocaleString()}` : lot.status}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-[var(--ink-muted)]">
                    {lot.dateLabel} · {lot.weightKg} กก. · ความชื้น {lot.moisture}% · เกรด {lot.grade}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Bottom Sheet: ยืนยันเงื่อนไข */}
        {sheetOpen && (
          <div
            className="fixed inset-0 z-40 flex items-end justify-center bg-[var(--scrim)]"
            onClick={() => setSheetOpen(false)}
          >
            <div
              className="w-full max-w-[430px] rounded-t-[28px] bg-[var(--card)] p-5 shadow-[var(--shadow-sheet)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[var(--divider)]" />
              <div className="text-lg font-bold text-[var(--ink)]">ยืนยันให้ AI Agent ขาย</div>
              <div className="text-xs text-[var(--ink-muted)]">
                ล็อต {activeLot.id} · {activeLot.weightKg} กก.
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-[var(--wash)] p-3.5">
                <div>
                  <div className="text-sm font-semibold text-[var(--ink)]">ราคาต่ำสุดที่รับได้</div>
                  <div className="text-xs text-[var(--amber-700)]">AI จะไม่ขายต่ำกว่านี้</div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFloorPrice((p) => Math.max(110, p - 1))}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[var(--field-line)]/50 bg-[var(--card)]"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="rlp-num w-14 text-center text-xl font-bold text-[var(--ink)]">
                    {floorPrice} ฿
                  </span>
                  <button
                    type="button"
                    onClick={() => setFloorPrice((p) => Math.min(124, p + 1))}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[var(--field-line)]/50 bg-[var(--card)]"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border border-[var(--forest-300)] bg-[var(--forest-050)] p-3.5 text-sm">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--forest-700)]"
                />
                <span className="font-medium text-[var(--ink)]">
                  ฉันอนุญาตให้ AI เจรจาและตกลงขายในเงื่อนไขนี้
                </span>
              </label>

              <button
                type="button"
                disabled={!consentChecked}
                onClick={handleStartAgentSell}
                className={`mt-4 w-full rounded-2xl py-4 text-base font-semibold transition-colors ${
                  consentChecked
                    ? 'cursor-pointer bg-[var(--forest-700)] text-white shadow-[var(--shadow-primary)]'
                    : 'cursor-not-allowed bg-[var(--disabled)] text-[var(--ink-muted)]'
                }`}
              >
                {consentChecked ? '✓ ยืนยัน เริ่มขาย' : 'ติ๊กยินยอมก่อน'}
              </button>
            </div>
          </div>
        )}

        {/* LIFF Bottom 3-Tab Bar */}
        <nav className="sticky bottom-0 z-20 grid grid-cols-3 border-t border-[var(--divider)] bg-[var(--card)] py-2">
          {(
            [
              { id: 'lots', label: 'ล็อต', icon: List },
              { id: 'price', label: 'ราคา', icon: TrendingUp },
              { id: 'history', label: 'ประวัติ', icon: History },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive =
              view === tab.id || (tab.id === 'lots' && (view === 'moisture' || view === 'scan' || view === 'add'));
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setView(tab.id)}
                className={`flex cursor-pointer flex-col items-center gap-0.5 py-1 text-xs font-medium ${
                  isActive ? 'text-[var(--forest-700)] font-semibold' : 'text-[var(--ink-muted)]'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
