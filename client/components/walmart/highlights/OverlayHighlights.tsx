import { forwardRef } from "react";
import { X } from "lucide-react";
import { HEADPHONE_HIGHLIGHTS, HIGHLIGHTS_TITLE } from "./data";

function toSentenceCase(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Top 5 specs shown in the overlay panel.
const PANEL_HIGHLIGHTS = HEADPHONE_HIGHLIGHTS.slice(0, 5);

/**
 * Concept — closed by default; clicking the "Highlights" action pill opens
 * a translucent spec card directly above it, growing upward so it stays
 * close to its entry point. The panel dismisses via its own top-right
 * close icon, tapping the CTA again, tapping outside, or scrolling the
 * gallery. Nothing above or below the gallery ever moves.
 */
export const OverlayHighlightsPanel = forwardRef<
  HTMLDivElement,
  { open: boolean; onClose: () => void }
>(function OverlayHighlightsPanel({ open, onClose }, ref) {
  return (
    <div
      ref={ref}
      aria-hidden={!open}
      className={`absolute bottom-full left-4 z-20 mb-2 flex w-fit flex-col gap-3 overflow-hidden rounded-2xl bg-[rgba(46,47,50,0.88)] p-4 shadow-lg transition-all duration-300 ease-out ${
        open ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close highlights"
        onClick={onClose}
        className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white active:scale-95"
      >
        <X size={14} />
      </button>
      <p className="pr-8 text-[16px] font-bold leading-6 text-white">{HIGHLIGHTS_TITLE}</p>
      <div className="flex flex-col gap-2.5">
        {PANEL_HIGHLIGHTS.map((item) => (
          <div key={item.title} className="flex flex-col whitespace-nowrap">
            <span className="text-[14px] font-normal leading-5 text-white">{toSentenceCase(item.title)}</span>
            <span className="text-[14px] font-bold leading-5 text-white">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
