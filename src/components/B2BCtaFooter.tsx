import { ArrowUp } from 'lucide-react';

export function B2BCtaFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-[var(--forest-900)] px-6 py-12 text-center text-[var(--on-fill)] sm:px-12 sm:py-16">
          <div className="inline-block rounded-full bg-[var(--glass)] px-3.5 py-1 text-xs font-medium text-[var(--mint)]">
            Live Mini App Mock · เร็วๆ นี้
          </div>
          <h2 className="mt-4 text-2xl font-bold sm:text-4xl">
            ตรวจสอบคุณภาพและซื้อขายกาแฟโรบัสตาอย่างมั่นใจ ในที่เดียว
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--on-forest)] sm:text-base">
            ดูตัวอย่างการทำงานจริงของ Robosta ตั้งแต่หน้าจอ LINE LIFF, เซนเซอร์ ESP32, กล้อง Pi 5
            จนถึงการปิดดีลด้วย AI Agent
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#features"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3 text-base font-bold text-[var(--ink)] transition-transform hover:scale-[1.02]"
            >
              <span>กลับไปลองเล่นเดโม</span>
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--divider)] pt-6 text-xs text-[var(--ink-muted)] sm:flex-row">
          <div>
            <strong className="text-[var(--ink)]">Robosta</strong> · Chumphon Robusta AIoT Platform
          </div>
          <div>TESA Top Gun Rally 2026 · Team CANET · * ข้อมูลจำลองเพื่อสาธิต</div>
        </div>
      </div>
    </footer>
  );
}
