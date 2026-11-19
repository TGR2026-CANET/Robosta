import { X } from 'lucide-react';

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
}

export function VideoModal({ open, onClose }: VideoModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--scrim)] p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[24px] border border-[var(--card-line)] bg-[var(--term-900)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[var(--term-line)] px-5 py-3.5 text-[var(--term-ink)]">
          <div>
            <div className="text-sm font-semibold">วิดีโอสาธิตการทำงาน Robosta</div>
            <div className="text-xs text-[var(--term-muted)]">
              End-to-End Flow: LINE LIFF → ESP32 → Raspberry Pi 5 → AI RFQ Agent
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[var(--term-700)] text-[var(--term-ink)] hover:bg-[var(--term-line)]"
            aria-label="ปิดวิดีโอ"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="aspect-video w-full bg-black">
          <video src="/demo.mp4" controls autoPlay className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
}
