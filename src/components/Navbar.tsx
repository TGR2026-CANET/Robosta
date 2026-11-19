export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left: Brand */}
        <a href="#" className="flex items-center gap-2.5 text-[var(--ink)]">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--forest-900)] text-[var(--parchment)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <ellipse cx="12" cy="12" rx="7" ry="10" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 2.5C9.8 7 14.2 17 12 21.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-[var(--ink)]">
            Robosta
          </span>
        </a>

        {/* Center: Nav Links */}
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-[var(--ink-muted)] lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2"
          aria-label="เมนูหลัก"
        >
          <a href="#features" className="transition-colors hover:text-[var(--forest-700)]">
            ฟีเจอร์
          </a>
          <a href="#about-us" className="transition-colors hover:text-[var(--forest-700)]">
            ทำไมต้อง Robosta
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-[var(--forest-700)]">
            วิธีทำงาน
          </a>
          <a href="#faq" className="transition-colors hover:text-[var(--forest-700)]">
            คำถามที่พบบ่อย
          </a>
        </nav>

        {/* Right: Single Clean CTA */}
        <a
          href="#features"
          className="inline-flex items-center rounded-full bg-[var(--forest-700)] px-5 py-2.5 text-sm font-semibold text-[var(--on-fill)] transition-colors hover:bg-[var(--forest-900)]"
        >
          สำรวจเดโม
        </a>
      </div>
    </header>
  );
}
