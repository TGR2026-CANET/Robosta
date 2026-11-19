import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/lotDemoData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#FAFBF7] py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--ink)] sm:text-4xl">มีอะไรสงสัย?</h2>
          <p className="mt-2 text-base text-[var(--ink-muted)]">
            คำตอบเกี่ยวกับความน่าเชื่อถือของข้อมูล IoT และกลไกของ AI Agent
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl bg-[var(--card)] shadow-[var(--shadow-card)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-[var(--ink)]">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--ink-muted)] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[var(--forest-700)]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[var(--divider)] px-6 py-4 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
