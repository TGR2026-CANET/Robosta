import { Cpu, Eye, Bot, ShieldCheck, Layers, LineChart } from 'lucide-react';
import { LOT_DATA } from '../data/lotDemoData';

const CAPABILITIES = [
  {
    icon: Cpu,
    bg: 'bg-[var(--forest-100)] text-[var(--forest-700)]',
    title: 'วัดความชื้นด้วย ESP32',
    desc: 'ส่งค่าความชื้นจากลานตากเข้า LINE อัตโนมัติ ลดความเสี่ยงเชื้อราและน้ำหนักขาด',
  },
  {
    icon: Eye,
    bg: 'bg-[var(--sky-100)] text-[var(--sky-700)]',
    title: 'คัดเกรดบน Pi 5',
    desc: 'กล้องตรวจจับเม็ดแตก ไม่สุก และดำรายเม็ด ประมวลผลบนบอร์ดไม่ง้อเน็ตแรง',
  },
  {
    icon: LineChart,
    bg: 'bg-[var(--amber-100)] text-[var(--amber-700)]',
    title: 'ราคากลางโปร่งใส',
    desc: 'คำนวณราคาแนะนำด้วยสมการตลาดจริง พร้อม AI ในเครื่องอธิบายเหตุผลเป็นภาษาไทย',
  },
  {
    icon: Bot,
    bg: 'bg-[var(--teal-100)] text-[var(--teal-700)]',
    title: 'AI Agent เจรจาขาย',
    desc: 'ส่งข้อมูล Lot Passport ให้ผู้ซื้อหลายรายพร้อมกัน ปิดดีลได้ราคาสูงกว่าขั้นต่ำ',
  },
  {
    icon: ShieldCheck,
    bg: 'bg-[var(--sun-100)] text-[var(--sun-700)]',
    title: 'คนตัดสินใจเสมอ',
    desc: 'ต้องกดยืนยันราคาขั้นต่ำก่อนเริ่มขาย และสั่งหยุดขายได้ตลอดเวลา',
  },
  {
    icon: Layers,
    bg: 'bg-[var(--neutral-100)] text-[var(--ink)]',
    title: 'ตรวจสอบย้อนหลังได้',
    desc: 'บันทึกรหัสล็อต ความชื้น เกรด และสัญญาซื้อขายครบถ้วนในพาสปอร์ตเดียว',
  },
];

export function StatsStrip() {
  return (
    <section className="border-t border-black/[0.06] bg-[#FAFBF7] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Top Single White Stats Card (Gig&Co style) */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--ink-muted)] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--forest-700)]" />
            ข้อมูลจากล็อตสาธิต {LOT_DATA.lotId}
          </span>
          <h2 className="mt-3 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            <span className="rounded-xl bg-[var(--gold)]/45 px-2.5 py-0.5">Robosta</span> ในวันนี้
          </h2>
        </div>

        <div className="mx-auto mt-7 max-w-3xl rounded-3xl bg-[var(--card)] px-6 py-7 shadow-[0_4px_24px_rgba(38,34,28,0.05)]">
          <div className="grid grid-cols-3 divide-x divide-[var(--divider)] text-center">
            <div className="px-2">
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--forest-100)] text-[var(--forest-700)]">
                <Cpu className="h-4 w-4" />
              </div>
              <div className="rlp-num text-2xl font-bold text-[var(--ink)] sm:text-3xl">
                {LOT_DATA.moistureCurrent}%
              </div>
              <div className="mt-1 text-xs text-[var(--ink-muted)]">ความชื้นมาตรฐาน</div>
            </div>

            <div className="px-2">
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--sky-100)] text-[var(--sky-700)]">
                <Eye className="h-4 w-4" />
              </div>
              <div className="rlp-num text-2xl font-bold text-[var(--ink)] sm:text-3xl">
                {LOT_DATA.defectAfterPct.toFixed(1)}%
              </div>
              <div className="mt-1 text-xs text-[var(--ink-muted)]">เม็ดเสียหลังคัด (เกรด A)</div>
            </div>

            <div className="px-2">
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--amber-100)] text-[var(--amber-700)]">
                <Bot className="h-4 w-4" />
              </div>
              <div className="rlp-num text-2xl font-bold text-[var(--forest-700)] sm:text-3xl">
                {LOT_DATA.recommendedPrice} ฿
              </div>
              <div className="mt-1 text-xs text-[var(--ink-muted)]">ราคาปิดดีลต่อ กก.</div>
            </div>
          </div>
        </div>

        {/* Clean 3x2 Capabilities Grid (Gig&Co category grid style) */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            ข้อมูลครบทุกมิติ สำหรับผู้ซื้อและโรงคั่ว
          </h2>
          <p className="mt-2 text-sm text-[var(--ink-muted)] sm:text-base">
            ลดความเสี่ยงด้านคุณภาพและการต่อรองราคา ด้วยหลักฐานดิจิทัลจากแปลงปลูกจริง
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-[var(--card)] p-6 text-center shadow-[0_2px_16px_rgba(38,34,28,0.04)] transition-transform hover:-translate-y-0.5"
              >
                <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 text-base font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-muted)] sm:text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
