import { ShieldCheck, Eye, Cpu } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Cpu,
    bg: 'bg-[var(--forest-100)] text-[var(--forest-700)]',
    title: 'ข้อมูลจริงจากเซนเซอร์',
    desc: 'ค่าความชื้นส่งตรงจาก ESP32 ทุกวัน ไม่ใช่การคาดเดาด้วยสายตา',
  },
  {
    icon: Eye,
    bg: 'bg-[var(--sky-100)] text-[var(--sky-700)]',
    title: 'คัดเกรดโปร่งใส',
    desc: 'กล้อง Pi 5 นับเม็ดดีและเม็ดเสียชัดเจน พร้อมภาพถ่ายยืนยันทุกล็อต',
  },
  {
    icon: ShieldCheck,
    bg: 'bg-[var(--amber-100)] text-[var(--amber-700)]',
    title: 'เป็นธรรมทั้งสองฝั่ง',
    desc: 'โรงคั่วได้ของตรงสเปก เกษตรกรได้ราคาตามคุณภาพจริงผ่าน AI Agent',
  },
];

export function TwoSidedSection() {
  return (
    <section id="about-us" className="relative overflow-hidden bg-[#F5F6F2] py-16 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#9EE7FF]/22 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-[#DDF5E4]/35 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--ink)] sm:text-3xl">
          <span className="rounded-xl bg-[var(--gold)]/45 px-2.5 py-0.5">Robosta</span>{' '}
          เราเข้าใจทั้งผู้ซื้อและเกษตรกร
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
          ออกแบบให้ใช้งานง่ายบน LINE ที่เกษตรกรคุ้นเคย แต่ส่งมอบข้อมูลมาตรฐานวิศวกรรมที่ผู้ซื้อและโรงคั่วเชื่อถือได้
        </p>

        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-[var(--card)] p-6 text-left shadow-[0_4px_20px_rgba(38,34,28,0.04)]"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[var(--ink)]">{item.title}</h3>
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
