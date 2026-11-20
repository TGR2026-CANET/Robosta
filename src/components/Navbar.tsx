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

        {/* Right: Clean CTAs */}
        <div className="flex items-center gap-2">
          <a
            href="https://line.me/R/ti/p/@617gzopa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--line-green)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition-transform hover:scale-[1.02]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 5.93 2 10.78c0 4.34 3.55 7.97 8.34 8.66.32.07.76.22.87.5.1.25.06.64.03.9l-.14.84c-.04.25-.2.99.87.54 1.07-.45 5.77-3.4 7.87-5.82C21.29 14.81 22 12.91 22 10.78 22 5.93 17.52 2 12 2Zm-3.65 11.4H6.11a.56.56 0 0 1-.56-.56V8.36a.56.56 0 1 1 1.12 0v3.92h1.68a.56.56 0 1 1 0 1.12Zm2.03-.56a.56.56 0 1 1-1.12 0V8.36a.56.56 0 1 1 1.12 0v4.48Zm4.7 0a.56.56 0 0 1-.39.53.54.54 0 0 1-.62-.19l-2.3-3.13v2.79a.56.56 0 1 1-1.12 0V8.36a.56.56 0 0 1 1.01-.33l2.3 3.13V8.36a.56.56 0 1 1 1.12 0v4.48Zm3.38-2.8a.56.56 0 1 1 0 1.12h-1.68v1.12h1.68a.56.56 0 1 1 0 1.12h-2.24a.56.56 0 0 1-.56-.56V8.36c0-.31.25-.56.56-.56h2.24a.56.56 0 1 1 0 1.12h-1.68v1.12h1.68Z" />
            </svg>
            <span className="hidden sm:inline">เพิ่มเพื่อน LINE</span>
            <span className="sm:hidden">LINE</span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center rounded-full bg-[var(--forest-700)] px-4 py-2 text-sm font-semibold text-[var(--on-fill)] transition-colors hover:bg-[var(--forest-900)] sm:px-5 sm:py-2.5"
          >
            สำรวจเดโม
          </a>
        </div>
      </div>
    </header>
  );
}
