const STEPS_4 = [
  {
    num: '01',
    title: 'สร้าง Lot Passport',
    desc: 'กรอกน้ำหนักและวิธีลดความชื้นผ่าน LINE LIFF ระบบผูกข้อมูลล็อตเข้ากับรหัสเฉพาะทันที',
  },
  {
    num: '02',
    title: 'วัดความชื้นด้วย ESP32',
    desc: 'เซนเซอร์ส่งค่าความชื้นเข้า LINE ต่อเนื่องจนถึงเกณฑ์ ≤ 12.5% พร้อมกราฟย้อนหลัง',
  },
  {
    num: '03',
    title: 'สแกนเม็ดเสียบน Pi 5',
    desc: 'กล้องตรวจจับเม็ดแตก ไม่สุก และดำบนบอร์ด (CPU) แสดงเกรดและหลักฐานรายเม็ด',
  },
  {
    num: '04',
    title: 'AI Agent เจรจาปิดดีล',
    desc: 'คำนวณราคากลางด้วยสมการตลาด ยืนยันราคาขั้นต่ำ แล้วปล่อยให้ Agent เจรจาผู้ซื้อ',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F5F6F2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[var(--ink)] sm:text-4xl">
            ทำงานครบวงจรใน 4 ขั้นตอน
          </h2>
          <p className="mt-3 text-base text-[var(--ink-muted)]">
            ตั้งแต่ลานตากจนถึงมือผู้ซื้อ ทุกขั้นตอนบันทึกข้อมูลจริงโดยอัตโนมัติ
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS_4.map((step) => (
            <div
              key={step.num}
              className="rounded-[24px] bg-[var(--card)] p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div className="rlp-num inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--forest-900)] text-base font-bold text-[var(--gold)]">
                {step.num}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--ink)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
